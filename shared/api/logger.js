import security from '../../etc/secure.json';
// eslint-disable-next-line import/order
import pino from 'pino';

export default pino({
    level: security.loglevel
});
