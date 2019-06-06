import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import {
    persistStore,
    persistReducer
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

export default () => {
    const persistReducer = persistReducer({
        key: 'root',
        storage,
        stateReconciler: autoMergeLevel2
    }, rootReducer);
    const store = preloadedState => (createStore(
        rootReducer(),
        preloadedState,
        compose(
            applyMiddleware(thunk)
        )
    ));
    const persistor = persistStore(store);
    return {
        store,
        persistor
    };
};
