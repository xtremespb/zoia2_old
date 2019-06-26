/* eslint-disable react/prop-types */

import React, { lazy, Component } from 'react';
import { I18n } from '@lingui/react';
import { connect } from 'react-redux';
import { remove as removeCookie } from 'es-cookie';
import { history } from '../../../../shared/store/configureStore';

import appDataRuntimeSetToken from '../../../../shared/actions/appDataRuntimeSetToken';
import appDataSetUser from '../../../../shared/actions/appDataSetUser';
import config from '../../../../etc/config.json';

const AdminPanel = lazy(() => import(/* webpackChunkName: "UsersList" */ '../../../../shared/components/AdminPanel/AdminPanel.jsx'));

class UsersEdit extends Component {
    componentDidMount = () => {
        if (!this.props.appDataRuntime.token) {
            history.push('/users/auth?redirect=/admin/users');
        }
    }

    deauthorize = () => {
        this.props.appDataRuntimeSetTokenAction(null);
        this.props.appDataSetUserAction({});
        removeCookie(`${config.siteId}_auth`);
        history.push(`/users/auth?redirect=/admin/users`);
    }

    onUsersTableLoadError = data => {
        if (data && data.statusCode === 403) {
            this.deauthorize();
        }
    }

    render = () => (
        <AdminPanel>
            <I18n>
                {({ i18n }) => (
                    <div>OK</div>
                )}
            </I18n>
        </AdminPanel>
    );
}

export default connect(store => ({
    appData: store.appData,
    appDataRuntime: store.appDataRuntime,
    appLingui: store.appLingui
}),
    dispatch => ({
        appDataRuntimeSetTokenAction: token => dispatch(appDataRuntimeSetToken(token)),
        appDataSetUserAction: user => dispatch(appDataSetUser(user))
    }))(UsersEdit);
