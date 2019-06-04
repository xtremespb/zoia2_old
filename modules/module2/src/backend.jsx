import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import { Trans } from '@lingui/macro';
import { Provider as ReduxProvider } from 'react-redux';

import AdminPanel from '../../../shared/components/AdminPanel.jsx';
import configureStore from '../../../shared/store/configureStore';

import '../../../shared/uikit.scss';
UIkit.use(Icons);

class Module extends Component {
    constructor(props) {
        super(props);
    }

    render = () => (<>
        <AdminPanel>
            <Trans>Hello world from Module 2</Trans>
        </AdminPanel>
    </>);
}

ReactDOM.render(
    (<ReduxProvider store={configureStore()}>
        <Module />
    </ReduxProvider>),
    document.getElementById('app')
);
