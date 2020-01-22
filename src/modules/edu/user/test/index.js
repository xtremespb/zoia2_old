import fs from 'fs-extra';
import path from 'path';
import uuid from 'uuid/v1';
import axios from 'axios';
import template from './template.marko';
import templates from '../../../../../dist/etc/templates.json';
import i18n from '../../../../shared/marko/utils/i18n-node';

export default fastify => ({
    async handler(req, rep) {
        try {
            const modules = await fs.readJSON(path.resolve(`${__dirname}/../data/edu/modules.json`));
            const moduleMeta = modules.avail.find(m => m.id === req.params.id);
            if (!moduleMeta) {
                rep.callNotFound();
                return rep.code(204);
            }
            const testData = (await fs.readJSON(path.resolve(`${__dirname}/../data/edu/${moduleMeta.id}_test.json`))).test.map((testItem, testItemIndex) => ({
                id: testItemIndex,
                title: testItem.title,
                answers: testItem.answers.map((answer, answerIndex) => ({
                    id: answerIndex,
                    title: answer
                })).sort(() => Math.random() - 0.5),
                answersCount: testItem.correct.length
            })).sort(() => Math.random() - 0.5);
            const siteData = await req.getSiteData(req);
            const token = req.cookies[`${fastify.zoiaConfig.id}_auth`];
            if (!token) {
                return rep.sendRedirect(rep, `${siteData.languagePrefixURL}users/auth?redirect=${siteData.languagePrefixURL}/edu/modules&&_=${uuid()}`);
            }
            let statusData;
            try {
                const statusReply = await axios.post(`${fastify.zoiaConfig.api.url}/api/edu/status`, {
                    token
                }, {
                    headers: {
                        'content-type': 'application/json'
                    }
                });
                if (statusReply && statusReply.data && statusReply.data.statusCode === 200 && statusReply.data.status) {
                    statusData = statusReply.data.status;
                }
            } catch (e) {
                // Ignore
            }
            let slotData;
            try {
                const testRequestReply = await axios.post(`${fastify.zoiaConfig.api.url}/api/edu/test/request`, {
                    token,
                    module: req.params.id
                }, {
                    headers: {
                        'content-type': 'application/json'
                    }
                });
                if (testRequestReply && testRequestReply.data && testRequestReply.data.statusCode === 200 && testRequestReply.data.slot) {
                    slotData = testRequestReply.data.slot;
                }
            } catch (e) {
                // Ignore
            }
            const t = i18n('edu')[siteData.language] || {};
            siteData.title = `${moduleMeta.title} | ${siteData.title}`;
            const render = (await template.render({
                $global: {
                    serializedGlobals: {
                        siteData: true,
                        t: true,
                        cookieOptions: true,
                        moduleMeta: true,
                        moduleData: true,
                        apiURL: true,
                        statusData: true,
                        slotData: true
                    },
                    siteData,
                    t,
                    cookieOptions: fastify.zoiaConfig.cookieOptions,
                    template: templates.available[0],
                    moduleMeta,
                    testData,
                    apiURL: fastify.zoiaConfig.api.url,
                    statusData,
                    slotData
                }
            }));
            const html = render.out.stream.str;
            rep.expires(new Date());
            return rep.sendSuccessHTML(rep, html);
        } catch (e) {
            return Promise.reject(e);
        }
    }
});
