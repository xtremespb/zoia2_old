import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
// import storage from 'redux-persist/lib/storage';
import {
    CookieStorage
} from 'redux-persist-cookie-storage';
import cookies from 'cookies-js';
import {
    persistStore,
    persistCombineReducers
} from 'redux-persist';
import {
    createBrowserHistory
} from 'history';
import {
    routerMiddleware
} from 'connected-react-router';

import rootReducer from '../reducers';
import config from '../../etc/config.json';
import site from '../../etc/site.json';

export const history = createBrowserHistory();

// const persistConfig = {
//     key: `${site.id}_root`,
//     storage,
//     whitelist: ['appData']
// };

const persistConfig = {
    key: `${site.id}_root`,
    storage: new CookieStorage(cookies, {
        expiration: {
            default: site.cookieOptions.expires
        },
        setCookieOptions: {
            path: site.cookieOptions.path,
            domain: site.cookieOptions.domain,
            secure: site.cookieOptions.secure
        }
    }),
    whitelist: ['appData']
};

const middlewares = [thunk, routerMiddleware(history)];
if (config.development) {
    middlewares.push(logger);
}
const persistedReducers = persistCombineReducers(persistConfig, rootReducer(history));

export default preloadedState => {
    const store = createStore(
        persistedReducers,
        preloadedState,
        compose(applyMiddleware(...middlewares))
    );
    const persistor = persistStore(store);
    return {
        store,
        persistor
    };
};
