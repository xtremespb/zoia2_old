import axios from 'axios';
import site from '../../../../shared/lib/site';
import template from './template.marko';
import templates from '../../../../etc/templates.json';

export default fastify => ({
    async handler(req, rep) {
        try {
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
            siteData.title = `${siteData.t['Authorize']} | ${siteData.title}`;
            const render = (await template.render({
                $global: {
                    siteData,
                    t: siteData.t,
                    template: templates.available[0],
                }
            }));
            const html = render.out.stream.str;
            return rep.code(200).type('text/html').send(html);
        } catch (e) {
            return Promise.reject(e);
        }
    }
});
