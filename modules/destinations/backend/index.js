import apiDestinationsList from './apiDestinationsList';
import apiDestinationsLoad from './apiDestinationsLoad';
import apiDestinationsSave from './apiDestinationsSave';
import apiDestinationsDelete from './apiDestinationsDelete';

export default fastify => {
    fastify.post('/api/destinations/list', apiDestinationsList(fastify));
    fastify.post('/api/destinations/load', apiDestinationsLoad(fastify));
    fastify.post('/api/destinations/save', apiDestinationsSave(fastify));
    fastify.post('/api/destinations/delete', apiDestinationsDelete(fastify));
};
