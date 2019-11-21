import Cryptr from 'cryptr';
import {
    ObjectId
} from 'mongodb';

export default {
    verifyToken: async (token, fastify, db) => {
        try {
            const decodedToken = fastify.jwt.verify(token);
            if (!decodedToken || !decodedToken.userId || !decodedToken.sessionId || Math.floor(Date.now() / 1000) > decodedToken.exp) {
                return null;
            }
            const user = await db.collection('users').findOne({
                _id: new ObjectId(decodedToken.userId)
            });
            if (!user || !user.active || user.sessionId !== decodedToken.sessionId) {
                return null;
            }
            return user;
        } catch (e) {
            return null;
        }
    },
    getUserData: async (req, fastify, db) => {
        try {
            if (req.cookies[`${fastify.zoiaConfig.id}_auth`] && db) {
                const token = req.cookies[`${fastify.zoiaConfig.id}_auth`];
                const decodedToken = fastify.jwt.decode(token);
                if (!decodedToken || !decodedToken.userId || !decodedToken.sessionId || Math.floor(Date.now() / 1000) > decodedToken.exp) {
                    return {};
                }
                const user = await db.collection('users').findOne({
                    _id: new ObjectId(decodedToken.userId)
                });
                if (!user || !user.active || user.sessionId !== decodedToken.sessionId) {
                    return {};
                }
                return {
                    id: user._id,
                    active: user.active,
                    admin: user.admin,
                    username: user.username
                };
            }
        } catch (e) {
            // Ignore
        }
        return {};
    },
    decodeEncryptedJSON: (data, fastify) => {
        let dataJSON = {};
        const cryptr = new Cryptr(fastify.zoiaConfigSecure.secret);
        try {
            const decrypted = cryptr.decrypt(data);
            dataJSON = JSON.parse(decrypted) || {};
        } catch (e) {
            // Ignore
        }
        if (dataJSON.t) {
            const captchaValitityMs = fastify.zoiaConfigSecure.captchaValidityMs || 60000;
            dataJSON.tDiff = new Date().getTime() - parseInt(dataJSON.t, 10);
            if (dataJSON.tDiff > captchaValitityMs) {
                dataJSON.overdue = true;
            }
        }
        return dataJSON;
    }
};
