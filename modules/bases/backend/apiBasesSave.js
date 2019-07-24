import Ajv from 'ajv';
import auth from '../../../shared/api/auth';

const ajv = new Ajv();

const baseValidate = ajv.compile({
    type: 'object',
    properties: {
        token: {
            type: 'string'
        },
        id: {
            type: 'string',
            pattern: '^[0-9]{4,}$'
        }
    },
    required: ['token']
});

const formValidate = ajv.compile({
    type: 'object',
    properties: {
        name: {
            type: 'string',
            minLength: 1,
            maxLength: 32
        },
        name_ru: {
            type: 'string',
            minLength: 1,
            maxLength: 32
        },
        destination: {
            type: 'string',
            pattern: '^[0-9]+$',
            minLength: 1,
            maxLength: 10
        },
        country: {
            type: 'string',
            pattern: '^[0-9]+$',
            minLength: 1,
            maxLength: 10
        }
    },
    required: ['name', 'name_ru', 'destination', 'country']
});

export default fastify => ({
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
            if (!baseDataValidation || !formDataValidation || (formData.id && (typeof formData.id !== 'string' || !parseInt(formData.id, 10) || parseInt(formData.id, 10) < 1000))) {
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
            let id = formData.id ? parseInt(formData.id, 10) : null;
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
            // Check if such base exists
            if (id) {
                const base = await this.mongo.db.collection('bases').findOne({
                    _id: id
                });
                if (!base) {
                    return rep.code(200)
                        .send(JSON.stringify({
                            statusCode: 400,
                            errors: {
                                default: {
                                    name: 'Base not found'
                                }
                            }
                        }));
                }
            }
            // Get next ID if required
            if (!id) {
                await this.mongo.db.collection('counters').update({
                    _id: 'bases'
                }, {
                    $setOnInsert: {
                        seq: 1000
                    }
                }, {
                    upsert: true
                });
                const incr = await this.mongo.db.collection('counters').findAndModify({
                    _id: 'bases'
                }, [], {
                    $inc: {
                        seq: 1
                    },
                }, {
                    new: true,
                    upsert: true
                });
                if (!incr || !incr.value || !incr.value.seq) {
                    throw new Error('Could not get ID for a record');
                }
                id = incr.value.seq;
            }
            // Update database
            const update = await this.mongo.db.collection('bases').updateOne({
                _id: id
            }, {
                $set: {
                    name: `${formData.default.name}|${formData.default.name_ru}`,
                    name_ru: formData.default.name_ru,
                    destination: parseInt(formData.default.destination, 10),
                    country: parseInt(formData.default.country, 10)
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
