import React from 'react';
import ReactDOM from 'react-dom';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import { Trans } from '@lingui/macro';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import AdminPanel from '../../../shared/components/AdminPanel.jsx';

import Module1 from './Module1.jsx';
import configureStore from '../../../shared/store/configureStore';
import '../../../shared/uikit.scss';

UIkit.use(Icons);
const { store, persistor } = configureStore();
console.log(store);
console.log(persistor);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Module1 />
    </PersistGate>
  </Provider>,
  document.getElementById('app')
);
