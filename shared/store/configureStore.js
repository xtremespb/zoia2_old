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

import rootReducer from '../reducers';
import config from '../../etc/config.json';

const persistConfig = {
    key: `${config.siteId}_root`,
    storage
};
const middlewares = [thunk, logger];
const persistedReducers = persistCombineReducers(persistConfig, rootReducer);

export default preloadedState => {
    const store = createStore(
        persistedReducers,
        preloadedState,
        compose(applyMiddleware(...middlewares))
    );
    const persistor = persistStore(store);
    return { store, persistor };
};
