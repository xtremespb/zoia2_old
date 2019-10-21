import crypto from 'crypto';
import uuid from 'uuid/v1';

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
                }
            },
            required: ['username', 'password']
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
            const passwordHash = crypto.createHmac('sha512', fastify.zoiaConfigSecure.secret).update(req.body.password).digest('hex');
            const user = await this.mongo.db.collection('users').findOne({
                username: req.body.username
            });
            if (!user || user.password !== passwordHash) {
                return rep.code(200)
                    .send(JSON.stringify({
                        statusCode: 403,
                        message: 'User not found or invalid password',
                        errors: {
                            default: {
                                username: '',
                                password: ''
                            }
                        }
                    }));
            }
            // Prepare token
            const sessionId = user.sessionId || uuid();
            const userId = String(user._id);
            const token = fastify.jwt.sign({
                userId,
                sessionId
            }, {
                expiresIn: fastify.zoiaConfigSecure.authTokenExpiresIn
            });
            // Update database and set session ID
            await this.mongo.db.collection('users').updateOne({
                _id: user._id
            }, {
                $set: {
                    sessionId
                }
            });
            // Send response
            return rep.code(200)
                .send(JSON.stringify({
                    statusCode: 200,
                    token,
                    user: {
                        username: user.username,
                        id: String(user._id)
                    }
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
