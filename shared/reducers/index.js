import {
    connectRouter
} from 'connected-react-router';

import appData from './appData';
import appLingui from './appLingui';
import modules from '../../etc/modules.json';

const moduleReducers = {};
// eslint-disable-next-line global-require
Object.keys(modules).map(m => moduleReducers[m] = require(`../../modules/${m}/frontend/reducers/index.js`).default());

export default history => ({
    ...moduleReducers,
    router: connectRouter(history),
    appData,
    appLingui
});
