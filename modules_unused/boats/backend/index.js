import apiBoatsList from './apiBoatsList';
import apiBoatsLoad from './apiBoatsLoad';
import apiBoatsSave from './apiBoatsSave';
import apiBoatsDelete from './apiBoatsDelete';
import apiDestinationsGetList from './apiDestinationsGetList';
import apiCountriesGetList from './apiCountriesGetList';
import apiBasesGetList from './apiBasesGetList';

export default fastify => {
    fastify.post('/api/boats/list', apiBoatsList(fastify));
    fastify.post('/api/boats/load', apiBoatsLoad(fastify));
    fastify.post('/api/boats/save', apiBoatsSave(fastify));
    fastify.post('/api/boats/delete', apiBoatsDelete(fastify));
    fastify.post('/api/boats/getDestinations', apiDestinationsGetList(fastify));
    fastify.post('/api/boats/getCountries', apiCountriesGetList(fastify));
    fastify.post('/api/boats/getBases', apiBasesGetList(fastify));
};
