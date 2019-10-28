import apiLoadConfig from './apiLoadConfig';
import apiLoadSiteData from './apiLoadSiteData';

export default fastify => {
    fastify.post('/api/core/config/load', apiLoadConfig(fastify));
    fastify.post('/api/core/site/data', apiLoadSiteData(fastify));
};
