/* eslint-disable react/prop-types */

import React, { lazy, Component } from 'react';
import { Trans } from '@lingui/macro';
import { connect } from 'react-redux';
import { history } from '../../../../shared/store/configureStore';

const AdminPanel = lazy(() => import(/* webpackChunkName: "UsersList" */ '../../../../shared/components/AdminPanel/AdminPanel.jsx'));

class UserList extends Component {
    componentDidMount = () => {
        if (!this.props.appData.token) {
            history.push('/users/auth?redirect=/admin/users');
        }
    }

    render = () => (
        <AdminPanel>
            Hello world
        </AdminPanel>
    )
}

export default connect(store => ({
    appData: store.appData
}))(UserList);
