import axios from 'axios';
import uuid from 'uuid/v1';
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
            const siteData = await req.getSiteData(req);
            const t = i18n('users')[siteData.language] || {};
            siteData.title = `${t['Activate user account']} | ${siteData.title}`;
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
                    if (apiValidationData.data.statusCode === 200) {
                        return rep.sendRedirect(rep, `${siteData.languagePrefixURL}/users/auth?activationSuccess=true&_=${uuid()}`);
                    }
                } catch (e) {
                    // Ignore
                }
            }
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
