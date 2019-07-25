import config from '../../../etc/config.json';
import auth from '../../../shared/api/auth';

const sortColumns = ['name'];
const searchColumns = ['name'];

export default fastify => ({
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
                    pattern: `^(${sortColumns.join('|')})$`
                },
                sortDirection: {
                    type: 'string',
                    pattern: '^(asc|desc)$'
                },
                language: {
                    type: 'string',
                    minLength: 2,
                    maxLength: 2
                }
            },
            required: ['token', 'page', 'sortColumn', 'sortDirection', 'language']
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
            // Get bases
            const options = {
                sort: {}
            };
            const query = {};
            if (req.body.search) {
                query.$or = searchColumns.map(c => {
                    const sr = {};
                    sr[c] = {
                        $regex: req.body.search,
                        $options: 'i'
                    };
                    return sr;
                });
            }
            const count = await this.mongo.db.collection('bases').find(query, options).count();
            options.limit = config.commonItemsLimit;
            options.skip = (req.body.page - 1) * config.commonItemsLimit;
            options.projection = {
                _id: 1,
                name: 1
            };
            options.sort[req.body.language === 'ru' ? 'name_ru' : req.body.sortColumn] = req.body.sortDirection === 'asc' ? 1 : -1;
            const bases = (await this.mongo.db.collection('bases').find(query, options).toArray() || []).map(d => {
                const base = d;
                const [
                    en,
                    ru
                ] = base.name.split(/\|/);
                base.name = req.body.language === 'ru' ? ru || en : en;
                return base;
            });
            // Send response
            return rep.code(200)
                .send(JSON.stringify({
                    statusCode: 200,
                    items: bases,
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
