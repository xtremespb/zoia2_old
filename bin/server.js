/* eslint-disable import/order */
const config = require('../etc/config.json');
const logger = require('../core/logger');
const fastify = require('fastify')({
    logger,
    trustProxy: config.trustProxy
});
const {
    MongoClient
} = require('mongodb');
const log = require('pino')({
    level: config.loglevel
});
const fastifyMongo = require('fastify-mongodb');
const fastifyURLData = require('fastify-url-data');
const fastifyCORS = require('fastify-cors');
const fastifyJWT = require('fastify-jwt');
const fastifyFormbody = require('fastify-formbody');
const fastifyMultipart = require('fastify-multipart');
const fs = require('fs-extra');
const path = require('path');

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
    const modules = fs.readdirSync(path.join(__dirname, '..', 'modules'));
    modules.map(m => {
        require(path.resolve(__dirname, '..', 'modules', m, 'backend', 'index.js'))(fastify);
    });
    log.info('Starting API server...');
    await fastify.listen(config.httpServer.port, config.httpServer.ip);
})().catch(err => {
    log.error(err);
    process.exit(1);
});
