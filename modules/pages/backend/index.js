import apiLoadPage from './apiLoadPage';
import apiListPages from './apiPagesList';
import apiLoadFolderTree from './apiLoadFolderTree';
import apiSaveFolderTree from './apiSaveFolderTree';
import apiUploadImage from './apiUploadImage';

export default fastify => {
    fastify.post('/api/pages/load', apiLoadPage(fastify));
    fastify.post('/api/pages/list', apiListPages(fastify));
    fastify.post('/api/pages/folders/load', apiLoadFolderTree(fastify));
    fastify.post('/api/pages/folders/save', apiSaveFolderTree(fastify));
    fastify.post('/api/pages/image/upload', apiUploadImage(fastify));
};
