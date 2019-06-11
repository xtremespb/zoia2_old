import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import configureStore from '../../../shared/store/configureStore';
import Backend from './components/backend/Backend.jsx';

const { store, persistor } = configureStore();

ReactDOM.render(
    (<Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Backend />
        </PersistGate>
    </Provider>),
    document.getElementById('app')
);