module.exports = fastify => {
    fastify.post('/api/pages/load', require('./apiLoadPage')(fastify));
};
