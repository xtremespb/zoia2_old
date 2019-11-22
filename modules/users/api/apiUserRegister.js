import crypto from 'crypto';
import auth from '../../../shared/lib/auth';

export default fastify => ({
    schema: {
        body: {
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
                    minLength: 8,
                    maxLength: 64
                },
                email: {
                    type: 'string',
                    minLength: 5,
                    maxLength: 254,
                    pattern: '^(?:[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-])+@(?:[a-zA-Z0-9]|[^\\u0000-\\u007F])(?:(?:[a-zA-Z0-9-]|[^\\u0000-\\u007F]){0,61}(?:[a-zA-Z0-9]|[^\\u0000-\\u007F]))?(?:\\.(?:[a-zA-Z0-9]|[^\\u0000-\\u007F])(?:(?:[a-zA-Z0-9-]|[^\\u0000-\\u007F]){0,61}(?:[a-zA-Z0-9]|[^\\u0000-\\u007F]))?)*$'
                },
                captcha: {
                    type: 'string',
                    minLength: 4,
                    maxLength: 4,
                    pattern: '^[0-9]+$'
                },
                captchaSecret: {
                    type: 'string',
                    maxLength: 2048
                },
            },
            required: ['username', 'password', 'email', 'captcha', 'captchaSecret']
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
        // Processing
        try {
            // Check captcha
            if (!await auth.validateCaptcha(req.body.captchaSecret, req.body.captcha, fastify, this.mongo.db)) {
                return rep.code(200)
                    .send(JSON.stringify({
                        statusCode: 400,
                        errorCode: 1,
                        message: 'Invalid Captcha',
                        errors: {
                            default: {
                                captcha: ''
                            }
                        }
                    }));
            }
            const username = req.body.username.toLowerCase();
            const email = req.body.email.toLowerCase();
            const usernameDB = await this.mongo.db.collection('users').findOne({
                username
            });
            if (usernameDB) {
                return rep.code(200)
                    .send(JSON.stringify({
                        statusCode: 400,
                        errorCode: 2,
                        message: 'User already registered',
                        errors: {
                            default: {
                                username: ''
                            }
                        }
                    }));
            }
            const emailDB = await this.mongo.db.collection('users').findOne({
                email
            });
            if (emailDB) {
                return rep.code(200)
                    .send(JSON.stringify({
                        statusCode: 400,
                        errorCode: 3,
                        message: 'E-mail already registered',
                        errors: {
                            default: {
                                email: ''
                            }
                        }
                    }));
            }
            // Save new user to the database
            const password = crypto.createHmac('sha512', fastify.zoiaConfigSecure.secret).update(req.body.password).digest('hex');
            const insResult = await this.mongo.db.collection('users').insertOne({
                username,
                active: 0,
                admin: 0,
                email,
                password
            });
            if (!insResult || !insResult.result || !insResult.result.ok || !insResult.insertedId) {
                return rep.code(200)
                    .send(JSON.stringify({
                        statusCode: 400,
                        message: 'Could not insert a database record',
                        errors: {
                            default: {
                                email: ''
                            }
                        }
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
