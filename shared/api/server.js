/* eslint-disable import/order */
import config from '../../etc/config.json';
import security from '../../etc/security.json';
import logger from './logger';
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
    level: config.loglevel
});
const fastify = Fastify({
    logger,
    trustProxy: security.trustProxy
});

(async () => {
    const mongoClient = new MongoClient(security.mongo.url, {
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
        database: security.mongo.dbName
    }).register((ff, opts, next) => {
        ff.mongo.client.db(security.mongo.dbName).on('close', () => {
            log.error('Connection to MongoDB is broken');
            process.exit(1);
        });
        next();
    });
    fastify.register(fastifyCORS, {
        origin: security.originCORS
    });
    fastify.register(fastifyJWT, {
        secret: security.secret
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
