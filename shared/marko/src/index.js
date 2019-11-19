import path from 'path';
import fs from 'fs-extra';
import fastifyURLData from 'fastify-url-data';
import fastifyCORS from 'fastify-cors';
import fastifyJWT from 'fastify-jwt';
import fastifyFormbody from 'fastify-formbody';
import fastifyMultipart from 'fastify-multipart';
import fastifyCookie from 'fastify-cookie';
import fastifyCaching from 'fastify-caching';
import Pino from 'pino';
import Fastify from 'fastify';
import axios from 'axios';
import logger from '../../lib/logger';
import modules from '../../build/modules.json';
import error404 from '../error404/index.marko';
import error500 from '../error500/index.marko';
import site from '../../lib/site';
import templates from '../../../etc/templates.json';
import i18n from '../../utils/i18n-node';

(async () => {
    let secure;
    let config;
    let log;
    try {
        secure = await fs.readJSON(path.resolve(`${__dirname}/../etc/secure.json`));
        config = await fs.readJSON(path.resolve(`${__dirname}/../static/etc/config.json`));
        log = Pino({
            level: secure.loglevel
        });
    } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
        process.exit(1);
    }
    try {
        const fastify = Fastify({
            logger,
            trustProxy: secure.trustProxy
        });
        fastify.decorate('zoiaConfig', config);
        fastify.decorate('zoiaConfigSecure', secure);
        fastify.decorateRequest('zoiaConfig', config);
        fastify.decorateRequest('zoiaConfigSecure', secure);
        fastify.register(fastifyFormbody);
        fastify.register(fastifyMultipart, {
            addToBody: true
        });
        fastify.register(fastifyURLData);
        fastify.register(fastifyCookie);
        fastify.register(fastifyCORS, {
            origin: secure.originCORS
        });
        fastify.register(fastifyJWT, {
            secret: secure.secret
        });
        fastify.register(
            fastifyCaching, {},
            err => {
                if (err) {
                    throw err;
                }
            }
        );
        await Promise.all(Object.keys(modules).map(async m => {
            const module = await import(`../../../modules/${m}/user/index.js`);
            module.default(fastify);
        }));
        fastify.setNotFoundHandler(async (req, rep) => {
            const token = req.cookies[`${fastify.zoiaConfig.id}_auth`];
            const siteMeta = {
                nav: null,
                user: {}
            };
            try {
                const apiSiteData = await axios.post(`${fastify.zoiaConfig.api.url}/api/core/site/data`, {
                    token,
                    nav: true,
                    user: true
                }, {
                    headers: {
                        'content-type': 'application/json'
                    }
                });
                siteMeta.nav = apiSiteData.data.nav;
                siteMeta.user = apiSiteData.data.user || {};
            } catch (e) {
                // Ignore
            }
            const siteData = await site.getSiteData(req, fastify, null, null, siteMeta.nav);
            const t = i18n()[siteData.language];
            siteData.user = siteMeta.user || {};
            siteData.title = `${t['Not Found']} | ${siteData.title}`;
            const render = await error404.render({
                $global: {
                    siteData,
                    t,
                    template: templates.available[0]
                }
            });
            rep.code(404).type('text/html').send(render.out.stream.str);
        });
        fastify.setErrorHandler(async (err, req, rep) => {
            const token = req.cookies[`${fastify.zoiaConfig.id}_auth`];
            const siteMeta = {
                nav: null,
                user: {}
            };
            try {
                const apiSiteData = await axios.post(`${fastify.zoiaConfig.api.url}/api/core/site/data`, {
                    token,
                    nav: true,
                    user: true
                }, {
                    headers: {
                        'content-type': 'application/json'
                    }
                });
                siteMeta.nav = apiSiteData.data.nav;
                siteMeta.user = apiSiteData.data.user || {};
            } catch (e) {
                // Ignore
            }
            const siteData = await site.getSiteData(req, fastify);
            const t = i18n()[siteData.language];
            siteData.user = siteMeta.user;
            siteData.title = `${t['Internal Server Error']} | ${siteData.title}`;
            const render = await error500.render({
                $global: {
                    siteData,
                    t,
                    template: templates.available[0]
                }
            });
            req.log.error({
                ip: req.ip,
                path: req.urlData().path,
                query: req.urlData().query,
                error: err && err.message ? err.message : 'Internal Server Error',
                stack: secure.stackTrace && err.stack ? err.stack : null
            });
            rep.code(500).type('text/html').send(render.out.stream.str);
        });
        await fastify.listen(secure.webServer.port, secure.webServer.ip);
    } catch (e) {
        log.error(e);
        process.exit(1);
    }
})();
