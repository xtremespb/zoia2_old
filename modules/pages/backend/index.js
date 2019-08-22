import apiLoadPage from './apiLoadPage';
import apiLoadFolderTree from './apiLoadFolderTree';
import apiSaveFolderTree from './apiSaveFolderTree';

export default fastify => {
    fastify.post('/api/pages/load', apiLoadPage(fastify));
    fastify.post('/api/pages/folders/load', apiLoadFolderTree(fastify));
    fastify.post('/api/pages/folders/save', apiSaveFolderTree(fastify));
};
