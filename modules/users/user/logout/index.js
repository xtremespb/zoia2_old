import uuid from 'uuid/v1';
import locale from '../../../../shared/lib/locale';

export default fastify => ({
    async handler(req, rep) {
        try {
            const language = locale.getLocaleFromURL(req);
            const languagePrefixURL = language === Object.keys(fastify.zoiaConfig.languages)[0] ? '/' : `/${language}`;
            return rep.clearCookie(`${fastify.zoiaConfig.id}_auth`, fastify.zoiaConfig.cookieOptions).code(302).redirect(`${languagePrefixURL}?_=${uuid()}`);
        } catch (e) {
            return Promise.reject(e);
        }
    }
});
