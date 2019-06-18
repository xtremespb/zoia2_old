/* eslint-disable react/prop-types */

import React, { lazy, Component } from 'react';
import { Trans } from '@lingui/macro';
import { connect } from 'react-redux';

const AdminPanel = lazy(() => import(/* webpackChunkName: "UsersList" */ '../../../../shared/components/AdminPanel/AdminPanel.jsx'));

class UserList extends Component {
    render = () => {
        return (<AdminPanel />);
    };
}

export default connect(store => ({
    appData: store.appData
}))(UserList);
