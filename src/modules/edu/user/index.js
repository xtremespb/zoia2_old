import modules from './modules';
import module from './module';
import test from './test';

export default fastify => { // fastify
    fastify.get('/edu/modules', modules(fastify));
    fastify.get('/edu/modules/:id', module(fastify));
    fastify.get('/edu/modules/:id/test', test(fastify));
};
