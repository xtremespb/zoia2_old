import axios from 'axios';
import site from '../../../../shared/lib/site';
import locale from '../../../../shared/lib/locale';
import template from './template.marko';
import templates from '../../../../etc/templates.json';
import i18n from '../../../../shared/utils/i18n-node';

export default fastify => ({
    async handler(req, rep) {
        try {
            const language = locale.getLocaleFromURL(req);
            const t = i18n('users')[language] || {};
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
            siteData.user = siteMeta.user || {};
            siteData.title = `${t['Register']} | ${siteData.title}`;
            const render = (await template.render({
                $global: {
                    serializedGlobals: {
                        siteData: true,
                        t: true,
                        cookieOptions: true
                    },
                    siteData,
                    t,
                    cookieOptions: fastify.zoiaConfig.cookieOptions,
                    template: templates.available[0],
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
