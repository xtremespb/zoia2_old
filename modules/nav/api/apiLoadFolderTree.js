/* eslint no-param-reassign:0 */
import auth from '../../../shared/lib/auth';

const loop = (data, callback) => {
    data.forEach((item, index, arr) => {
        callback(item, index, arr);
        if (item.children) {
            loop(item.children, callback);
        }
    });
};

export default fastify => ({
    schema: {
        body: {
            type: 'object',
            properties: {
                token: {
                    type: 'string'
                },
                language: {
                    type: 'string',
                    minLength: 2,
                    maxLength: 2
                }
            },
            required: ['token', 'language']
        }
    },
    attachValidation: true,
    async handler(req, rep) {
        // Start of Validation
        if (req.validationError) {
            req.log.error({
                ip: req.ip,
                path: req.urlData().path,
                query: req.urlData().query,
                error: req.validationError.message
            });
            return rep.code(400).send(JSON.stringify(req.validationError));
        }
        // End of Validation
        // Check permissions
        const user = await auth.verifyToken(req.body.token, fastify, this.mongo.db);
        if (!user || !user.admin) {
            req.log.error({
                ip: req.ip,
                path: req.urlData().path,
                query: req.urlData().query,
                error: 'Authentication failed'
            });
            return rep.code(401).send(JSON.stringify({
                statusCode: 401,
                error: 'Authentication failed'
            }));
        }
        // End of check permissions
        try {
            // Get tree
            const folderTree = await this.mongo.db.collection('registry').findOne({
                _id: 'nav_folder_tree'
            });
            const folders = (folderTree ? folderTree.data || [] : []);
            loop(folders, item => {
                const defaultTitle = item.data[Object.keys(item.data)[0]].title;
                const title = item.data[req.body.language] ? item.data[req.body.language].title || defaultTitle : defaultTitle;
                item.title = title;
            });
            // Send response
            return rep.code(200)
                .send(JSON.stringify({
                    statusCode: 200,
                    data: {
                        default: {
                            nav: {
                                tree: folders,
                                selected: [],
                                checked: []
                            }
                        }
                    }
                }));
        } catch (e) {
            req.log.error({
                ip: req.ip,
                path: req.urlData().path,
                query: req.urlData().query,
                error: e && e.message ? e.message : 'Internal Server Error',
                stack: fastify.zoiaConfigSecure.stackTrace && e.stack ? e.stack : null
            });
            return rep.code(500).send(JSON.stringify({
                statusCode: 500,
                error: 'Internal server error',
                message: e && e.message ? e.message : null
            }));
        }
    }
});
