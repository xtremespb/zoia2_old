import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';
import Icons from 'uikit/dist/js/uikit-icons';
import UIkit from '../utils/uikit';

import '../styles/uikit.scss';
import modules from '../build/modules.json';
import configureStore, { history } from '../store/configureStore';
import Error from './Error/Error.jsx';
import ErrorBoundary from './Error/ErrorBoundary.jsx';

const { store, persistor } = configureStore();
if (UIkit) {
    UIkit.use(Icons);
}

const getModuleRoutes = () => Object.keys(modules).map(m => require(`../../modules/${m}/frontend/routes.jsx`).default).flat();

const getNoMatchComponent = () => (<Error code="404" />);

ReactDOM.render(
    (<Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <ErrorBoundary>
                <ConnectedRouter history={history}>
                    <Switch>
                        {getModuleRoutes()}
                        <Route
                            component={getNoMatchComponent}
                        />
                    </Switch>
                </ConnectedRouter>
            </ErrorBoundary>
        </PersistGate>
    </Provider>),
    document.getElementById('app')
);
