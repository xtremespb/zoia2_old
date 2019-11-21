import captcha from 'zoia-captcha';
import Cryptr from 'cryptr';

export default fastify => ({
    async handler(req, rep) {
        // Processing
        try {
            const cryptr = new Cryptr(fastify.zoiaConfigSecure.secret);
            // c = code
            const c = Math.random().toString().substr(2, 4);
            const image = await captcha.getCaptcha(c);
            const imageData = `data:image/png;base64,${image.toString('base64')}`;
            // t = current timestamp
            const t = new Date().getTime();
            const imageSecret = cryptr.encrypt(JSON.stringify({
                c,
                t
            }));
            return rep.code(200)
                .send(JSON.stringify({
                    statusCode: 200,
                    imageData,
                    imageSecret
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
