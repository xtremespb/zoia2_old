import apiLoadConfig from './apiLoadConfig';

export default fastify => {
    fastify.post('/api/config/load', apiLoadConfig(fastify));
};
