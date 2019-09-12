import apiLoadConfig from './apiLoadConfig';
import apiLoadEntrypoints from './apiLoadEntrypoints';

export default fastify => {
    fastify.post('/api/config/load', apiLoadConfig(fastify));
    fastify.post('/api/entrypoints/load', apiLoadEntrypoints(fastify));
};
