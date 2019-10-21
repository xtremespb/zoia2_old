export default () => ({
    schema: {
        body: {
            type: 'object',
            properties: {
                url: {
                    type: 'string',
                    maxLength: 2000,
                    pattern: '([-a-zA-Z0-9@:%._+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b)?([-a-zA-Z0-9()@:%_+.~#?&//=]*)?'
                },
                language: {
                    type: 'string',
                    minLength: 2,
                    maxLength: 2,
                    pattern: '^[a-z]+$'
                }
            },
            required: ['url', 'language']
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
            // Find page with given URL
            const pageRecord = await this.mongo.db.collection('pages').findOne({
                fullPath: req.body.url
            });
            if (!pageRecord || !pageRecord.data || !pageRecord.data[req.body.language]) {
                return rep.code(200).send(JSON.stringify({
                    statusCode: 404,
                    error: 'Non-existent record or missing locale'
                }));
            }
            pageRecord.page = pageRecord.data[req.body.language];
            delete pageRecord.data;
            // Send response
            return rep.code(200)
                .send(JSON.stringify({
                    statusCode: 200,
                    data: pageRecord
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
