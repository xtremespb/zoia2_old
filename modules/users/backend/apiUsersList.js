const config = require('../../../etc/config.json');
const auth = require('../../../core/auth');

const sortColumns = ['username', 'active'];

module.exports = fastify => ({
    schema: {
        body: {
            type: 'object',
            properties: {
                token: {
                    type: 'string'
                },
                page: {
                    type: 'integer',
                    minimum: 1,
                    maximum: 999999999
                },
                search: {
                    type: 'string',
                    maxLength: 64
                },
                sortColumn: {
                    type: 'string',
                    pattern: `^(${sortColumns.join('|')})+$`,
                    minLength: 1,
                    maxLength: 64
                },
                sortDirection: {
                    type: 'string',
                    pattern: '^(asc|desc)$'
                }
            },
            required: ['token', 'page', 'sortColumn', 'sortDirection']
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
            return rep.code(403).send(JSON.stringify({
                statusCode: 403,
                error: 'Authentication failed'
            }));
        }
        // End of check permissions
        try {
            // Get users
            const options = {
                sort: {}
            };
            const query = {};
            if (req.body.search) {
                query.$or = [{
                    username: {
                        $regex: req.body.search,
                        $options: 'i'
                    }
                }];
            }
            const count = await this.mongo.db.collection('users').find(query, options).count();
            options.limit = config.commonItemsLimit;
            options.skip = (req.body.page - 1) * config.commonItemsLimit;
            options.projection = {
                _id: 1,
                username: 1,
                active: 1
            };
            options.sort[req.body.sortColumn] = req.body.sortDirection === 'asc' ? 1 : -1;
            const users = await this.mongo.db.collection('users').find(query, options).toArray();
            // Send response
            return rep.code(200)
                .send(JSON.stringify({
                    statusCode: 200,
                    items: users,
                    total: count
                }));
        } catch (e) {
            req.log.error({
                ip: req.ip,
                path: req.urlData().path,
                query: req.urlData().query,
                error: e
            });
            return rep.code(500).send(JSON.stringify({
                statusCode: 500,
                error: 'Internal server error',
                message: e.message
            }));
        }
    }
});
