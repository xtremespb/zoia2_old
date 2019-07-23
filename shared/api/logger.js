import config from '../../etc/config.json';
// eslint-disable-next-line import/order
import pino from 'pino';

export default pino({
    level: config.loglevel
});
