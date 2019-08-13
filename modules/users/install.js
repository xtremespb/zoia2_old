/* eslint no-console:0 */
import crypto from 'crypto';
import colors from 'colors';

const security = require('../../etc/security.json');

const install = async db => {
    console.log(`${colors.green(' * ')} Inserting or updating default user (admin)...`);
    const passwordHash = crypto.createHmac('sha512', security.secret).update('password').digest('hex');
    await db.collection('users').updateOne({
        username: 'admin'
    }, {
        $set: {
            username: 'admin',
            password: passwordHash,
            email: 'example@zoiajs.org',
            active: 1,
            admin: 1
        }
    }, {
        upsert: true
    });
};

export default install;