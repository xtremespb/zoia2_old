import {
    connectRouter
} from 'connected-react-router';

import appData from './appData';
import appDataRuntime from './appDataRuntime';
import appLingui from './appLingui';
import modules from '../build/modules.json';

let moduleReducers = {};
// eslint-disable-next-line global-require
Object.keys(modules).map(m => {
    const reducers = require(`../../modules/${m}/frontend/reducers/index.js`).default();
    moduleReducers = {
        ...moduleReducers,
        ...reducers
    };
});

export default history => ({
    ...moduleReducers,
    router: connectRouter(history),
    appData,
    appDataRuntime,
    appLingui
});
