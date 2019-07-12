module.exports = fastify => {
    fastify.post('/api/users/login', require('./apiLogin')(fastify));
    fastify.post('/api/users/logout', require('./apiLogout')(fastify));
    fastify.post('/api/users/list', require('./apiUsersList')(fastify));
    fastify.post('/api/users/saveField', require('./apiUsersFieldSave')(fastify));
    fastify.post('/api/users/loadUser', require('./apiUsersLoad')(fastify));
    fastify.post('/api/users/saveUser', require('./apiUsersSave')(fastify));
    fastify.post('/api/users/deleteUsers', require('./apiUsersDelete')(fastify));
};
