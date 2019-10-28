import path from 'path';
import fs from 'fs-extra';
import fastifyMongo from 'fastify-mongodb';
import fastifyURLData from 'fastify-url-data';
import fastifyCORS from 'fastify-cors';
import fastifyJWT from 'fastify-jwt';
import fastifyFormbody from 'fastify-formbody';
import fastifyMultipart from 'fastify-multipart';
import {
    MongoClient
} from 'mongodb';
import Pino from 'pino';
import Fastify from 'fastify';
import modules from '../build/modules.json';
import logger from '../lib/logger';

(async () => {
    let secure;
    let config;
    let log;
    try {
        secure = await fs.readJSON(path.resolve(`${__dirname}/../etc/secure.json`));
        config = await fs.readJSON(path.resolve(`${__dirname}/../static/etc/config.json`));
        log = Pino({
            level: secure.loglevel
        });
    } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
        process.exit(1);
    }
    try {
        const fastify = Fastify({
            logger,
            trustProxy: secure.trustProxy
        });
        fastify.decorate('zoiaConfig', config);
        fastify.decorate('zoiaConfigSecure', secure);
        fastify.decorateRequest('zoiaConfig', config);
        fastify.decorateRequest('zoiaConfigSecure', secure);
        const mongoClient = new MongoClient(secure.mongo.url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        await mongoClient.connect();
        fastify.register(fastifyFormbody);
        fastify.register(fastifyMultipart, {
            addToBody: true
        });
        fastify.register(fastifyURLData);
        fastify.register(fastifyMongo, {
            client: mongoClient,
            database: secure.mongo.dbName
        }).register((ff, opts, next) => {
            ff.mongo.client.db(secure.mongo.dbName).on('close', () => {
                log.error('Connection to MongoDB is broken');
                process.exit(1);
            });
            next();
        });
        fastify.register(fastifyCORS, {
            origin: secure.originCORS
        });
        fastify.register(fastifyJWT, {
            secret: secure.secret
        });
        await Promise.all(Object.keys(modules).map(async m => {
            const module = await import(`../../modules/${m}/api/index.js`);
            module.default(fastify);
        }));
        await fastify.listen(secure.apiServer.port, secure.apiServer.ip);
    } catch (e) {
        log.error(e);
        process.exit(1);
    }
})();
