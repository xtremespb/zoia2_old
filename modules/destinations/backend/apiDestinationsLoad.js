const auth = require('../../../core/auth');

module.exports = fastify => ({
    schema: {
        body: {
            type: 'object',
            properties: {
                token: {
                    type: 'string'
                },
                id: {
                    type: 'integer',
                    minimum: 1000
                }
            },
            required: ['token', 'id']
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
            // Find user with given ID
            const destinationRecord = await this.mongo.db.collection('destinations').findOne({
                _id: req.body.id
            });
            if (!destinationRecord) {
                return rep.code(400).send(JSON.stringify({
                    statusCode: 400,
                    error: 'Non-existent record'
                }));
            }
            const [nameEn, nameRu] = destinationRecord.name.split(/\|/);
            // Send response
            return rep.code(200)
                .send(JSON.stringify({
                    statusCode: 200,
                    data: {
                        default: {
                            name: nameEn,
                            name_ru: nameRu
                        }
                    }
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
