import axios from 'axios';
import template from './template.marko';
import site from '../../../../shared/lib/site';
import locale from '../../../../shared/lib/locale';
import templates from '../../../../etc/templates.json';
import i18n from '../../../../shared/utils/i18n-node';

export default fastify => ({
    async handler(req, rep) {
        try {
            if (req.urlData()) {
                const {
                    url,
                    language
                } = locale.getNonLocalizedURL(req);
                const token = req.cookies[`${fastify.zoiaConfig.id}_auth`];
                const apiDataQuery = {
                    url,
                    token,
                    language,
                    folders: true,
                    nav: true,
                    user: true
                };
                const apiData = await axios.post(`${fastify.zoiaConfig.api.url}/api/page/find`, apiDataQuery, {
                    headers: {
                        'content-type': 'application/json'
                    }
                });
                if (!apiData || !apiData.data || !apiData.data.page || apiData.data.statusCode !== 200) {
                    rep.callNotFound();
                    return rep.code(204);
                }
                const {
                    page,
                    nav,
                    folders,
                    user
                } = apiData.data;
                const siteData = await site.getSiteData(req, fastify, page, folders, nav);
                const t = i18n('pages')[siteData.language];
                siteData.title = `${page.current.title} | ${siteData.title}`;
                siteData.user = user || {};
                const render = (await template.render({
                    content: page.current.contentCompiled || page.current.content,
                    $global: {
                        siteData,
                        t,
                        template: page.template || templates.available[0],
                    }
                }));
                const html = render.out.stream.str.replace(/\[breadcrumbs\]/gm, siteData.breadcrumbsHTML);
                return rep.code(200).type('text/html').send(html);
            }
            rep.callNotFound();
            return rep.code(204);
        } catch (e) {
            return Promise.reject(e);
        }
    }
});
