import {
    ObjectId
} from 'mongodb';
import site from '../../etc/site.json';

export default {
    verifyToken: async (token, fastify, db) => {
        try {
            const decodedToken = fastify.jwt.decode(token);
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
            if (req.cookies[`${site.id}_auth`] && db) {
                const token = req.cookies[`${site.id}_auth`];
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
    }

};
