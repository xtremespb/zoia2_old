module.exports = fastify => {
    fastify.post('/api/users/login', require('./apiLogin')(fastify));
};
