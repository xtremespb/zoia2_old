/* eslint no-console:0 */
const crypto = require('crypto');
const colors = require('colors');

const config = require('../../etc/config.json');

const install = async db => {
    console.log(`${colors.green(' * ')} Inserting or updating default user (admin)...`);
    const passwordHash = crypto.createHmac('sha512', config.secret).update('password').digest('hex');
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

module.exports = install;
