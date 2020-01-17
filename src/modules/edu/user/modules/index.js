import fs from 'fs-extra';
import path from 'path';
import template from './template.marko';
import templates from '../../../../../dist/etc/templates.json';
import i18n from '../../../../shared/marko/utils/i18n-node';

export default fastify => ({
    async handler(req, rep) {
        try {
            const modules = await fs.readJSON(path.resolve(`${__dirname}/../data/edu/modules.json`));
            const siteData = await req.getSiteData(req);
            const t = i18n('edu')[siteData.language] || {};
            siteData.title = `${t['Test']} | ${siteData.title}`;
            const render = (await template.render({
                $global: {
                    serializedGlobals: {
                        siteData: true,
                        t: true,
                        cookieOptions: true,
                        modules: true
                    },
                    siteData,
                    t,
                    cookieOptions: fastify.zoiaConfig.cookieOptions,
                    template: templates.available[0],
                    modules
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
