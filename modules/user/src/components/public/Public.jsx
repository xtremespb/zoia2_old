import React, { Component } from 'react';
import { Trans } from '@lingui/macro';
import { connect } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { Route, Switch } from 'react-router-dom';

import { history } from '../../../../../shared/store/configureStore';

class Public extends Component {
    constructor(props) {
        super(props);
        this.history = createBrowserHistory();
    }

    getComponent1 = () => ((
        <h1>Compontent 1 called</h1>
    ));

    getComponent2 = () => ((
        <h1>Compontent 1 called</h1>
    ));

    render = () => (<ConnectedRouter history={history}>
        <Switch>
            <Route
                path="/user"
                component={this.getComponent1}
            />
            <Route
                path="/user/c2"
                component={this.getComponent2}
            />

        </Switch>
    </ConnectedRouter>);
}

export default connect(store => ({
    appData: store.appData
}),
    // dispatch => ({
    //     appDataSetLanguageAction: language => dispatch(appDataSetLanguage(language))
    // })
)(Public);