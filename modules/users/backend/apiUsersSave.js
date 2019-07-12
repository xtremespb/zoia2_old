const Ajv = require('ajv');
const ObjectId = require('mongodb').ObjectID;
const crypto = require('crypto');
const config = require('../../../etc/config.json');
const auth = require('../../../core/auth');

const ajv = new Ajv();

const baseValidate = ajv.compile({
    type: 'object',
    properties: {
        token: {
            type: 'string'
        },
        id: {
            type: 'string'
        }
    },
    required: ['token']
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
            type: 'string'
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
            if (!baseDataValidation || !formDataValidation || (formData.id && (formData.id.length !== 24 || !formData.id.match(/^[a-f0-9]+$/)))) {
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
            // Password-related checks
            const passwordUpdate = {};
            if (!formData.id && !formData.default.password) {
                return rep.code(200)
                    .send(JSON.stringify({
                        statusCode: 400,
                        errors: {
                            default: {
                                password: 'Required'
                            }
                        }
                    }));
            }
            if (formData.default.password) {
                if (formData.default.password.length < 8) {
                    return rep.code(200)
                        .send(JSON.stringify({
                            statusCode: 400,
                            errors: {
                                default: {
                                    password: 'Too short'
                                }
                            }
                        }));
                }
                passwordUpdate.password = crypto.createHmac('sha512', config.secret).update(formData.default.password).digest('hex');
            }
            // Check if such user exists
            if (formData.id) {
                const username = await this.mongo.db.collection('users').findOne({
                    _id: new ObjectId(formData.id)
                });
                if (!username) {
                    return rep.code(200)
                        .send(JSON.stringify({
                            statusCode: 400,
                            errors: {
                                default: {
                                    username: 'User not found'
                                }
                            }
                        }));
                }
            }
            // Check if user with such username already exists
            const dupeUsernameQuery = {
                username: formData.default.username
            };
            if (formData.id) {
                dupeUsernameQuery._id = {
                    $ne: new ObjectId(formData.id)
                };
            }
            const dupeUsername = await this.mongo.db.collection('users').findOne(dupeUsernameQuery);
            if (dupeUsername) {
                return rep.code(200)
                    .send(JSON.stringify({
                        statusCode: 400,
                        errors: {
                            default: {
                                username: 'Duplicate username'
                            }
                        }
                    }));
            }
            // Check if user with such e-mail address already exists
            const dupeEmailQuery = {
                email: formData.default.email
            };
            if (formData.id) {
                dupeEmailQuery._id = {
                    $ne: new ObjectId(formData.id)
                };
            }
            const dupeEmail = await this.mongo.db.collection('users').findOne(dupeEmailQuery);
            if (dupeEmail) {
                return rep.code(200)
                    .send(JSON.stringify({
                        statusCode: 400,
                        errors: {
                            default: {
                                email: 'Duplicate e-mail'
                            }
                        }
                    }));
            }
            // Update database
            const update = await this.mongo.db.collection('users').updateOne(formData.id ? {
                _id: new ObjectId(formData.id)
            } : {
                username: formData.default.username
            }, {
                $set: {
                    username: formData.default.username,
                    email: formData.default.email,
                    active: formData.default.active,
                    admin: formData.default.admin,
                    ...passwordUpdate
                }
            }, {
                upsert: true
            });
            // Check result
            if (!update || !update.result || !update.result.ok) {
                return rep.code(200)
                    .send(JSON.stringify({
                        statusCode: 400,
                        error: 'Cannot update database record'
                    }));
            }
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
