/* eslint-disable import/order */
import config from '../../etc/config.json';
import logger from './logger';
import fastifyMongo from 'fastify-mongodb';
import fastifyURLData from 'fastify-url-data';
import fastifyCORS from 'fastify-cors';
import fastifyJWT from 'fastify-jwt';
import fastifyFormbody from 'fastify-formbody';
import fastifyMultipart from 'fastify-multipart';
import modules from '../../etc/modules.json';
import {
    MongoClient
} from 'mongodb';
import Pino from 'pino';
import Fastify from 'fastify';

const log = Pino({
    level: config.loglevel
});
const fastify = Fastify({
    logger,
    trustProxy: config.trustProxy
});

(async () => {
    const mongoClient = new MongoClient(config.mongo.url, {
        useNewUrlParser: true
    });
    await mongoClient.connect();
    fastify.register(fastifyFormbody);
    fastify.register(fastifyMultipart, {
        addToBody: true
    });
    fastify.register(fastifyURLData);
    fastify.register(fastifyMongo, {
        client: mongoClient,
        database: config.mongo.dbName
    }).register((ff, opts, next) => {
        ff.mongo.client.db(config.mongo.dbName).on('close', () => {
            log.error('Connection to MongoDB is broken');
            process.exit(1);
        });
        next();
    });
    fastify.register(fastifyCORS, {
        origin: config.originCORS
    });
    fastify.register(fastifyJWT, {
        secret: config.secret
    });
    await Promise.all(Object.keys(modules).map(async m => {
        const module = await import(`../../modules/${m}/backend/index.js`);
        module.default(fastify);
    }));
    log.info('Starting API server...');
    await fastify.listen(config.httpServer.port, config.httpServer.ip);
})().catch(err => {
    log.error(err);
    process.exit(1);
});
