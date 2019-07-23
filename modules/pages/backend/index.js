import apiLoadPage from './apiLoadPage';

export default fastify => {
    fastify.post('/api/pages/load', apiLoadPage(fastify));
};
