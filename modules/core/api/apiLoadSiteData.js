import {
    ObjectId
} from 'mongodb';

export default fastify => ({
    schema: {
        body: {
            type: 'object',
            properties: {
                token: {
                    type: 'string'
                },
                nav: {
                    type: 'boolean'
                },
                user: {
                    type: 'boolean'
                }
            },
            required: []
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
        try {
            const nav = req.body.nav ? await this.mongo.db.collection('registry').findOne({
                _id: 'nav_folder_tree'
            }) : null;
            let user;
            if (req.body.token && req.body.user) {
                try {
                    const decodedToken = fastify.jwt.decode(req.body.token);
                    if (!decodedToken || !decodedToken.userId || !decodedToken.sessionId || Math.floor(Date.now() / 1000) > decodedToken.exp) {
                        return {};
                    }
                    user = await this.mongo.db.collection('users').findOne({
                        _id: new ObjectId(decodedToken.userId)
                    });
                    delete user.password;
                    delete user.sessionId;
                } catch (e) {
                    // Ignore
                }
            }
            // Send response
            return rep.code(200)
                .send(JSON.stringify({
                    statusCode: 200,
                    nav,
                    user
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
