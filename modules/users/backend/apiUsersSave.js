const Ajv = require('ajv');
const auth = require('../../../core/auth');

const ajv = new Ajv();

const baseValidate = ajv.compile({
    type: 'object',
    properties: {
        id: {
            type: 'string',
            minLength: 24,
            maxLength: 24,
            pattern: '^[a-f0-9]+$'
        },
        token: {
            type: 'string'
        }
    },
    required: ['id', 'token']
});

const formValidate = ajv.compile({
    type: 'object',
    properties: {
        username: {
            type: 'string',
            minLength: 4,
            maxLength: 32,
            pattern: '^[a-zA-Z0-9_-]+$'
        },
        password: {
            type: 'string',
            minLength: 8
        },
        email: {
            type: 'string',
            minLength: 6,
            maxLength: 129,
            pattern: '^(?:[a-zA-Z0-9.!#$%&\'*+\\/=?^_`{|}~-])+@(?:[a-zA-Z0-9]|[^\\u0000-\\u007F])(?:(?:[a-zA-Z0-9-]|[^\\u0000-\\u007F]){0,61}(?:[a-zA-Z0-9]|[^\\u0000-\\u007F]))?(?:\\.(?:[a-zA-Z0-9]|[^\\u0000-\\u007F])(?:(?:[a-zA-Z0-9-]|[^\\u0000-\\u007F]){0,61}(?:[a-zA-Z0-9]|[^\\u0000-\\u007F]))?)*$'
        },
        active: {
            type: 'string',
            pattern: '^(0|1)$'
        },
        admin: {
            type: 'string',
            pattern: '^(0|1)$'
        }
    },
    required: ['username', 'email', 'active', 'admin']
});

module.exports = fastify => ({
    schema: {
        body: {
            type: 'object',
            properties: {
                __form_data: {
                    type: 'string'
                }
            },
            required: ['__form_data']
        }
    },
    attachValidation: true,
    async handler(req, rep) {
        // Start of Pre-Validation
        if (req.validationError) {
            req.log.error({
                ip: req.ip,
                path: req.urlData().path,
                query: req.urlData().query,
                error: req.validationError.message
            });
            return rep.code(400).send(JSON.stringify(req.validationError));
        }
        // End of Pre-Validation
        try {
            const formData = JSON.parse(req.body.__form_data);
            // Start of Form Validation
            const baseDataValidation = baseValidate(formData);
            const formDataValidation = formValidate(formData.default);
            if (!baseDataValidation || !formDataValidation) {
                const errorData = {
                    base: baseDataValidation ? undefined : (baseValidate.errors || {
                        error: 'General validation error'
                    }),
                    form: formDataValidation ? null : (formValidate.errors || {
                        error: 'General validation error'
                    })
                };
                req.log.error({
                    ip: req.ip,
                    path: req.urlData().path,
                    query: req.urlData().query,
                    error: errorData
                });
                return rep.code(400).send(JSON.stringify({
                    statusCode: 400,
                    error: errorData
                }));
            }
            formData.default.active = parseInt(formData.default.active, 10);
            formData.default.admin = parseInt(formData.default.admin, 10);
            // End of Form Validation
            // Check permissions
            const user = await auth.verifyToken(formData.token, fastify, this.mongo.db);
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
            return rep.code(200)
                .send(JSON.stringify({
                    statusCode: 200
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
