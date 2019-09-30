import markoTest from './markoTest';

export default fastify => { // fastify
    fastify.get('/', markoTest(fastify));
};
