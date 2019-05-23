/* eslint-disable import/order */
const fastify = require('fastify')();
const fastifyStatic = require('fastify-static');

(async () => {
    fastify.register(fastifyStatic, {
        root: `${__dirname}/../static`
    });
    await fastify.listen(3000, '127.0.0.1');
})().catch(e => {
    console.log(e);
});
