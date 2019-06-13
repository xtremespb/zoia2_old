import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import configureStore from '../../../shared/store/configureStore';
import Public from './components/public/Public.jsx';

const { store, persistor } = configureStore();

ReactDOM.render(
    (<Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Public />
        </PersistGate>
    </Provider>),
    document.getElementById('app')
);