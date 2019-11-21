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
            const captchaData = auth.decodeEncryptedJSON(req.body.captchaSecret, fastify);
            // Check if captcha is valid
            if (!captchaData.c || captchaData.overdue || captchaData.c !== req.body.captcha) {
                return rep.code(200)
                    .send(JSON.stringify({
                        statusCode: 400,
                        message: 'Invalid Captcha',
                        errors: {
                            default: {
                                captcha: ''
                            }
                        }
                    }));
            }
            // Check if captcha is invalidated
            const captchaSecretHash = crypto.createHmac('sha256', fastify.zoiaConfigSecure.secret).update(req.body.captchaSecret).digest('hex');
            const invCaptcha = await this.mongo.db.collection('captcha').findOne({
                _id: captchaSecretHash
            });
            if (invCaptcha) {
                return rep.code(200)
                    .send(JSON.stringify({
                        statusCode: 400,
                        message: 'Invalid Captcha',
                        errors: {
                            default: {
                                captcha: ''
                            }
                        }
                    }));
            }
            // Invalidate captcha
            await this.mongo.db.collection('captcha').insertOne({
                _id: captchaSecretHash,
                createdAt: new Date()
            });
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
