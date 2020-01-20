import test from './test';

export default fastify => {
    fastify.post('/api/edu/test', test(fastify));
};
