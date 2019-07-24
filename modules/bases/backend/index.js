import apiBasesList from './apiBasesList';
import apiBasesLoad from './apiBasesLoad';
import apiBasesSave from './apiBasesSave';
import apiBasesDelete from './apiBasesDelete';
import apiDestinationsGetList from './apiDestinationsGetList';
import apiCountriesGetList from './apiCountriesGetList';

export default fastify => {
    fastify.post('/api/bases/list', apiBasesList(fastify));
    fastify.post('/api/bases/load', apiBasesLoad(fastify));
    fastify.post('/api/bases/save', apiBasesSave(fastify));
    fastify.post('/api/bases/delete', apiBasesDelete(fastify));
    fastify.post('/api/bases/getDestinations', apiDestinationsGetList(fastify));
    fastify.post('/api/bases/getCountries', apiCountriesGetList(fastify));
};
