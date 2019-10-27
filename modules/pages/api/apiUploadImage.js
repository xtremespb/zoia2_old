/* eslint no-param-reassign:0 */
import fs from 'fs-extra';
import uuid from 'uuid/v1';
import Jimp from 'jimp';
import auth from '../../../shared/lib/auth';

export default fastify => ({
    async handler(req, rep) {
        // Start of Validation
        if (!req.body.token || !req.body.upload || !Array.isArray(req.body.upload) || typeof req.body.token !== 'string') {
            req.log.error({
                ip: req.ip,
                path: req.urlData().path,
                query: req.urlData().query,
                error: 'Missing token or file upload'
            });
            return rep.code(400).send(JSON.stringify({
                statusCode: 400,
                error: 'Missing token or file upload'
            }));
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
            if (fastify.zoiaConfig.demo) {
                return rep.code(200)
                    .send(JSON.stringify({
                        statusCode: 200,
                        url: `/zoia/logo_dark.png`
                    }));
            }
            await fs.ensureDir(`${__dirname}/../static/uploads`);
            const filename = uuid();
            const img = await Jimp.read(req.body.upload[0].data);
            const thumbBuffer = await img.getBufferAsync(Jimp.MIME_JPEG);
            await fs.writeFile(`${__dirname}/../static/uploads/${filename}.jpg`, thumbBuffer);
            return rep.code(200)
                .send(JSON.stringify({
                    statusCode: 200,
                    url: `/uploads/${filename}.jpg`
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
