import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
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

const ERR_NO_ROUTES_MESSAGE = 'Could not load website. Please try to refresh the page.';

(async () => {
    const { store, persistor } = configureStore();
    if (UIkit) {
        UIkit.use(Icons);
    }
    const getNoMatchComponent = () => (<Error code="404" />);
    const errorMessage = (<div className="uk-flex uk-flex-center uk-flex-middle uk-flex-column" style={{ height: '100%' }}>
        <div className="uk-text-small">
            {ERR_NO_ROUTES_MESSAGE}
        </div>
    </div>);
    try {
        ReactDOM.render(
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <ErrorBoundary>
                        <ConnectedRouter history={history}>
                            <Switch>
                                {Object.keys(modules).map(m => require(`../../modules/${m}/admin/routes.jsx`).default()).flat()}
                                <Route
                                    component={getNoMatchComponent}
                                />
                            </Switch>
                        </ConnectedRouter>
                    </ErrorBoundary>
                </PersistGate>
            </Provider>,
            document.getElementById('app')
        );
    } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
        ReactDOM.render(
            errorMessage,
            document.getElementById('app')
        );
    }
})();
