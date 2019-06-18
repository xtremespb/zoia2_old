import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

import '../uikit.scss';
import modules from '../../etc/modules.json';
import configureStore, { history } from '../store/configureStore';

const { store, persistor } = configureStore();
UIkit.use(Icons);

const getModuleRoutes = () => Object.keys(modules).map(m => require(`../../modules/${m}/frontend/routes.jsx`).default).flat();

const getNoMatchComponent = () => ((
    <div className="uk-flex uk-flex-center uk-flex-middle uk-flex-column" style={{ height: '100%' }}>
        <svg height="128px" viewBox="0 0 512 512" width="128px" xmlns="http://www.w3.org/2000/svg"><path d="m0 96v384c0 17.679688 14.320312 32 32 32h448c17.679688 0 32-14.320312 32-32v-384zm0 0" fill="#e1eaf7" /><path d="m0 0h512v128h-512zm0 0" fill="#b0bec5" /><path d="m64 48h32v32h-32zm0 0" fill="#fff" /><path d="m128 48h32v32h-32zm0 0" fill="#fff" /><path d="m432 80h-224c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h224c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" fill="#90a4ae" /><path d="m384 320c0 70.691406-57.308594 128-128 128s-128-57.308594-128-128 57.308594-128 128-128 128 57.308594 128 128zm0 0" fill="#e76e54" /><path d="m315.3125 283.3125-22.625-22.625-36.6875 36.6875-36.6875-36.6875-22.625 22.625 36.6875 36.6875-36.6875 36.6875 22.625 22.625 36.6875-36.6875 36.6875 36.6875 22.625-22.625-36.6875-36.6875zm0 0" /></svg>
    </div>
));

ReactDOM.render(
    (<Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <ConnectedRouter history={history}>
                <Switch>
                    {getModuleRoutes()}
                    <Route
                        component={getNoMatchComponent}
                    />
                </Switch>
            </ConnectedRouter>
        </PersistGate>
    </Provider>),
    document.getElementById('app')
);
