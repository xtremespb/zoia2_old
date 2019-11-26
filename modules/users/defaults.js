/* eslint no-console:0 */
import crypto from 'crypto';
import fs from 'fs-extra';
import path from 'path';
import colors from 'colors';

const install = async db => {
    const secure = fs.readJsonSync(path.resolve(`${__dirname}/../etc/secure.json`));
    console.log(`${colors.green(' * ')} Inserting or updating default user (admin)...`);
    const passwordHash = crypto.createHmac('sha512', secure.secret).update('password').digest('hex');
    await db.collection('users').updateOne({
        username: 'admin'
    }, {
        $set: {
            username: 'admin',
            password: passwordHash,
            email: 'example@zoiajs.org',
            active: true,
            admin: true
        }
    }, {
        upsert: true
    });
};

export default install;
