import { ObjectId } from 'mongodb';

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
    }
};
