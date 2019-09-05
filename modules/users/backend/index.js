import apiLogin from './apiLogin';
import apiLogout from './apiLogout';
import apiUsersList from './apiUsersList';
import apiUserFieldSave from './apiUserFieldSave';
import apiUserLoad from './apiUserLoad';
import apiUserSave from './apiUserSave';
import apiUsersDelete from './apiUsersDelete';

export default fastify => {
    fastify.post('/api/users/login', apiLogin(fastify));
    fastify.post('/api/users/logout', apiLogout(fastify));
    fastify.post('/api/users/list', apiUsersList(fastify));
    fastify.post('/api/users/save/field', apiUserFieldSave(fastify));
    fastify.post('/api/users/load', apiUserLoad(fastify));
    fastify.post('/api/users/save', apiUserSave(fastify));
    fastify.post('/api/users/delete', apiUsersDelete(fastify));
};
