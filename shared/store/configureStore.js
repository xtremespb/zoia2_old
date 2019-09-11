import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
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

const persistConfig = {
    key: `${site.id}_root`,
    storage,
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
