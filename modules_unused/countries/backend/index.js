import apiCountriesList from './apiCountriesList';
import apiCountriesLoad from './apiCountriesLoad';
import apiCountriesSave from './apiCountriesSave';
import apiCountriesDelete from './apiCountriesDelete';
import apiDestinationsGetList from './apiDestinationsGetList';

export default fastify => {
    fastify.post('/api/countries/list', apiCountriesList(fastify));
    fastify.post('/api/countries/load', apiCountriesLoad(fastify));
    fastify.post('/api/countries/save', apiCountriesSave(fastify));
    fastify.post('/api/countries/delete', apiCountriesDelete(fastify));
    fastify.post('/api/countries/getDestinations', apiDestinationsGetList(fastify));
};
