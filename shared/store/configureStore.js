import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';
import {
    persistStore,
    persistReducer
} from 'redux-persist';
import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1';
import rootReducer from '../reducers';

const persistConfig = {
    key: 'root',
    storage,
    debug: true,
    stateReconciler: autoMergeLevel1
};
const persistedReducers = persistReducer(persistConfig, rootReducer);

export default preloadedState => {
    const store = createStore(
        persistedReducers,
        preloadedState
    );
    const persistor = persistStore(store);
    return {
        persistor,
        store
    };
};
