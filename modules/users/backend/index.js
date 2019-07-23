import apiLogin from './apiLogin';
import apiLogout from './apiLogout';
import apiUsersList from './apiUsersList';
import apiUsersFieldSave from './apiUsersFieldSave';
import apiUsersLoad from './apiUsersLoad';
import apiUsersSave from './apiUsersSave';
import apiUsersDelete from './apiUsersDelete';

export default fastify => {
    fastify.post('/api/users/login', apiLogin(fastify));
    fastify.post('/api/users/logout', apiLogout(fastify));
    fastify.post('/api/users/list', apiUsersList(fastify));
    fastify.post('/api/users/saveField', apiUsersFieldSave(fastify));
    fastify.post('/api/users/loadUser', apiUsersLoad(fastify));
    fastify.post('/api/users/saveUser', apiUsersSave(fastify));
    fastify.post('/api/users/deleteUsers', apiUsersDelete(fastify));
};
