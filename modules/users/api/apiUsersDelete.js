import {
    ObjectId
} from 'mongodb';
import auth from '../../../shared/lib/auth';

export default fastify => ({
    schema: {
        body: {
            type: 'object',
            properties: {
                token: {
                    type: 'string'
                },
                ids: {
                    type: 'array',
                    minItems: 1,
                    contains: {
                        type: 'string',
                        minLength: 24,
                        maxLength: 24,
                        pattern: '^[a-f0-9]+$'
                    }
                }
            },
            required: ['token', 'ids']
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
            const query = req.body.ids.map(id => ({
                _id: new ObjectId(id)
            }));
            if (fastify.zoiaConfig.demo) {
                const users = await this.mongo.db.collection('users').find({
                    $or: query
                }).toArray();
                let thereIsAdmin;
                users.map(u => thereIsAdmin = thereIsAdmin || u.username.match(/admin/i));
                if (thereIsAdmin) {
                    return rep.code(200)
                        .send(JSON.stringify({
                            statusCode: 200
                        }));
                }
            }
            const result = await this.mongo.db.collection('users').deleteMany({
                $or: query
            });
            if (!result || !result.result || !result.result.ok) {
                return rep.code(200)
                    .send(JSON.stringify({
                        statusCode: 400,
                        error: 'Cannot delete database record(s)'
                    }));
            }
            // Send response
            return rep.code(200)
                .send(JSON.stringify({
                    statusCode: 200
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
