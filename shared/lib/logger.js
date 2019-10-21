import fs from 'fs-extra';
import path from 'path';
import pino from 'pino';

const secure = fs.readJsonSync(path.resolve(`../etc/secure.json`));

export default pino({
    level: secure.loglevel
});
