import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';
import thunk from 'redux-thunk';
import {
    routerMiddleware
} from 'connected-react-router';
import rootReducer from '../reducers';

export default preloadedState => (createStore(
    rootReducer(),
    preloadedState,
    compose(
        applyMiddleware(
            routerMiddleware(history)
        ),
        applyMiddleware(thunk)
    ),
));
