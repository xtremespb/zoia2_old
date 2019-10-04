import markoTest from './markoTest';

export default fastify => { // fastify
    fastify.get('/', markoTest(fastify));
    fastify.get('/ru', markoTest(fastify));
    fastify.get('/en', markoTest(fastify));
    fastify.get('/de', markoTest(fastify));
};
