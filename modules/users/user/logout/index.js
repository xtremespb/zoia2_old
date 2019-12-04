import auth from '../../../../shared/lib/auth';

export default fastify => ({
    async handler(req, rep) {
        return auth.logout(req, rep, fastify);
    }
});
