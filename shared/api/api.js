/* eslint-disable import/order */
import secure from '../../etc/secure.json';
import logger from '../lib/logger';
import fastifyMongo from 'fastify-mongodb';
import fastifyURLData from 'fastify-url-data';
import fastifyCORS from 'fastify-cors';
import fastifyJWT from 'fastify-jwt';
import fastifyFormbody from 'fastify-formbody';
import fastifyMultipart from 'fastify-multipart';
import modules from '../build/modules.json';
import {
    MongoClient
} from 'mongodb';
import Pino from 'pino';
import Fastify from 'fastify';

const log = Pino({
    level: secure.loglevel
});
const fastify = Fastify({
    logger,
    trustProxy: secure.trustProxy
});

(async () => {
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
    log.info('Starting API server...');
    fastify.listen(secure.apiServer.port, secure.apiServer.ip);
})().catch(err => {
    log.error(err);
    process.exit(1);
});
