import axios from 'axios';
import site from '../../../../shared/lib/site';
import locale from '../../../../shared/lib/locale';
import template from './template.marko';
import templates from '../../../../etc/templates.json';
import i18n from '../../../../shared/utils/i18n-node';

export default fastify => ({
    schema: {
        query: {
            type: 'object',
            properties: {
                id: {
                    type: 'string',
                    minLength: 24,
                    maxLength: 24,
                    pattern: '^[0-9a-fA-F]+$'
                },
                code: {
                    type: 'string',
                    minLength: 36,
                    maxLength: 36
                }
            },
            required: ['id', 'code']
        }
    },
    attachValidation: true,
    async handler(req, rep) {
        // Start of Validation
        const {
            validationError
        } = req;
        // End of Validation
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
            let activationSuccess;
            if (!validationError) {
                try {
                    const apiValidationData = await axios.post(`${fastify.zoiaConfig.api.url}/api/users/activate`, {
                        id: req.query.id,
                        code: req.query.code
                    }, {
                        headers: {
                            'content-type': 'application/json'
                        }
                    });
                    activationSuccess = apiValidationData.data.statusCode === 200;
                } catch (e) {
                    // Ignore
                }
            }
            const siteData = await site.getSiteData(req, fastify, null, null, siteMeta.nav);
            siteData.user = siteMeta.user || {};
            siteData.title = `${t['Activate user account']} | ${siteData.title}`;
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
                    template: templates.available[0]
                },
                activationSuccess
            }));
            const html = render.out.stream.str;
            rep.expires(new Date());
            return rep.code(200).type('text/html').send(html);
        } catch (e) {
            return Promise.reject(e);
        }
    }
});
