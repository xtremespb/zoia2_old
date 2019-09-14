import fs from 'fs-extra';

const entrypoints = fs.readJSONSync(`${__dirname}/../etc/entrypoints.json`);

export default () => ({
    async handler(req, rep) {
        try {
            return rep.code(200)
                .send(JSON.stringify({
                    statusCode: 200,
                    entrypoints
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
