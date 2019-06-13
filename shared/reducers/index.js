import {
    connectRouter
} from 'connected-react-router';

import appData from './appData';

export default history => ({
    router: connectRouter(history), 
    appData
});
