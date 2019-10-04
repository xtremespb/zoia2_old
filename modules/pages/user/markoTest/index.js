import template from './template.marko';
import site from '../../../../shared/lib/site';

export default fastify => ({
    async handler(req, rep) {
        try {
            const siteData = await site.getSiteData(req, fastify, this.mongo.db);
            const render = await template.render({
                $global: {
                    siteData,
                    t: siteData.t
                }
            });
            return rep.code(200).type('text/html').send(render.out.stream.str);
        } catch (e) {
            return rep.code(500).send(JSON.stringify({
                statusCode: 500,
                error: 'Internal server error',
                message: e.message
            }));
        }
    }
});
