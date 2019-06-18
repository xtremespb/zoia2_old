const config = require('../etc/config.json');
// eslint-disable-next-line import/order
const pino = require('pino');

module.exports = pino({
    level: config.loglevel
});
