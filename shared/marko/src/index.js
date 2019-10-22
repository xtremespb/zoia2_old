import path from 'path';
import fs from 'fs-extra';
import fastifyMongo from 'fastify-mongodb';
import fastifyURLData from 'fastify-url-data';
import fastifyCORS from 'fastify-cors';
import fastifyJWT from 'fastify-jwt';
import fastifyFormbody from 'fastify-formbody';
import fastifyMultipart from 'fastify-multipart';
import fastifyCookie from 'fastify-cookie';
import {
    MongoClient
} from 'mongodb';
import Pino from 'pino';
import Fastify from 'fastify';
import logger from '../../lib/logger';
import modules from '../../build/modules.json';
import error404 from '../error404/index.marko';
import error500 from '../error500/index.marko';
import site from '../../lib/site';

(async () => {
    const secure = await fs.readJSON(path.resolve(`${__dirname}/../etc/secure.json`));
    const config = await fs.readJSON(path.resolve(`${__dirname}/../static/etc/config.json`));
    const log = Pino({
        level: secure.loglevel
    });
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
    fastify.register(fastifyCookie);
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
        const module = await import(`../../../modules/${m}/user/index.js`);
        module.default(fastify);
    }));
    fastify.setNotFoundHandler(async (req, rep) => {
        const siteData = await site.getSiteData(req, fastify, fastify.mongo.db);
        siteData.title = `${siteData.t['Not Found']} | ${siteData.title}`;
        const render = await error404.render({
            $global: {
                siteData,
                t: siteData.t
            }
        });
        rep.code(404).type('text/html').send(render.out.stream.str);
    });
    fastify.setErrorHandler(async (err, req, rep) => {
        const siteData = await site.getSiteData(req, fastify, fastify.mongo.db);
        siteData.title = `${siteData.t['Internal Server Error']} | ${siteData.title}`;
        const render = await error500.render({
            $global: {
                siteData,
                t: siteData.t
            }
        });
        req.log.error({
            ip: req.ip,
            path: req.urlData().path,
            query: req.urlData().query,
            error: err && err.message ? err.message : 'Internal Server Error',
            stack: secure.stackTrace && err.stack ? err.stack : null
        });
        rep.code(500).type('text/html').send(render.out.stream.str);
    });
    fastify.listen(secure.webServer.port, secure.webServer.ip);
})().catch(e => {
    // eslint-disable-next-line no-console
    console.error(e);
    process.exit(1);
});
