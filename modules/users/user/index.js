import auth from './auth';

export default fastify => {
    fastify.get('/users/auth', auth(fastify));
    fastify.get('/:language/users/auth', auth(fastify));
};
