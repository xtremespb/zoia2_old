module.exports = fastify => {
    fastify.post('/api/destinations/list', require('./apiDestinationsList')(fastify));
    fastify.post('/api/destinations/load', require('./apiDestinationsLoad')(fastify));
    fastify.post('/api/destinations/save', require('./apiDestinationsSave')(fastify));
    fastify.post('/api/destinations/delete', require('./apiDestinationsDelete')(fastify));
};
