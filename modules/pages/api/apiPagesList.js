import fs from 'fs-extra';
import auth from '../../../shared/lib/auth';
import secure from '../../../etc/secure.json';

const config = fs.readJSONSync(`${__dirname}/../etc/config.json`);
const site = fs.readJSONSync(`${__dirname}/../etc/site.json`);
const sortColumns = ['title', 'path'];

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
                    pattern: `^(${Object.keys(site.languages).join('|')})$`
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
            // Get pages
            const options = {
                sort: {}
            };
            const query = {};
            if (req.body.search) {
                query.$or = [...Object.keys(site.languages).map(language => {
                    const sr = {};
                    sr[`data.${language}.title`] = {
                        $regex: req.body.search,
                        $options: 'i'
                    };
                    return sr;
                }), {
                    path: {
                        $regex: req.body.search,
                        $options: 'i'
                    }
                }, {
                    filename: {
                        $regex: req.body.search,
                        $options: 'i'
                    }
                }];
            }
            const count = await this.mongo.db.collection('pages').find(query, options).count();
            options.limit = config.commonItemsLimit;
            options.skip = (req.body.page - 1) * config.commonItemsLimit;
            options.projection = {
                _id: 1,
                path: 1,
                filename: 1
            };
            Object.keys(site.languages).map(language => options.projection[`data.${language}.title`] = 1);
            options.sort[req.body.sortColumn] = req.body.sortDirection === 'asc' ? 1 : -1;
            if (req.body.sortColumn === 'path') {
                options.sort.filename = req.body.sortDirection === 'asc' ? 1 : -1;
            }
            const pages = (await this.mongo.db.collection('pages').find(query, options).toArray() || []).map(p => {
                const page = {
                    _id: p._id,
                    path: `${p.path === '/' ? '' : p.path}${p.filename ? `/${p.filename}` : ''}` || '/'
                };
                const defaultLanguage = Object.keys(site.languages)[0];
                page.title = p.data[req.body.language] && p.data[req.body.language].title ? p.data[req.body.language].title : null || p.data[defaultLanguage] ? p.data[defaultLanguage].title : '';
                return page;
            });
            // Send response
            return rep.code(200)
                .send(JSON.stringify({
                    statusCode: 200,
                    items: pages,
                    total: count
                }));
        } catch (e) {
            req.log.error({
                ip: req.ip,
                path: req.urlData().path,
                query: req.urlData().query,
                error: e && e.message ? e.message : 'Internal Server Error',
                stack: secure.stackTrace && e.stack ? e.stack : null
            });
            return rep.code(500).send(JSON.stringify({
                statusCode: 500,
                error: 'Internal server error',
                message: e && e.message ? e.message : null
            }));
        }
    }
});
