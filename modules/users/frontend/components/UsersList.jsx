/* eslint-disable react/prop-types */

import React, { lazy, Component } from 'react';
import { t } from '@lingui/macro';
import { I18n } from '@lingui/react';
import { connect } from 'react-redux';
import UIkit from 'uikit';
import axios from 'axios';
import { remove as removeCookie } from 'es-cookie';
import { history } from '../../../../shared/store/configureStore';

import appDataRuntimeSetToken from '../../../../shared/actions/appDataRuntimeSetToken';
import appDataSetUser from '../../../../shared/actions/appDataSetUser';
import config from '../../../../etc/config.json';

const AdminPanel = lazy(() => import(/* webpackChunkName: "UsersList" */ '../../../../shared/components/AdminPanel/AdminPanel.jsx'));
const Table = lazy(() => import(/* webpackChunkName: "Table" */ '../../../../shared/components/Table/index.jsx'));

class UserList extends Component {
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
                    <Table
                        prefix="usersListTable"
                        UIkit={UIkit}
                        axios={axios}
                        columns={[{
                            id: 'username',
                            title: i18n._(t`Username`),
                            sortable: true,
                        }, {
                            id: 'active',
                            title: i18n._(t`Status`),
                            cssRow: 'uk-table-shrink uk-text-nowrap',
                            sortable: true,
                            process: item => item ? i18n._(t`Active`) : i18n._(t`Inactive`)
                        }, {
                            id: 'actions',
                            title: i18n._(t`Actions`),
                            cssRow: 'uk-table-shrink uk-text-nowrap'
                        }]}
                        itemsPerPage={config.commonItemsLimit}
                        source={{
                            url: `${config.apiURL}/api/users/list`,
                            method: 'POST',
                            extras: {
                                token: this.props.appDataRuntime.token
                            }
                        }}
                        sortColumn="username"
                        sortDirection="asc"
                        lang={{
                            LOADING: i18n._(t`Loading data, please wait…`),
                            NO_RECORDS: i18n._(t`No records to display`),
                            ERROR_LOAD: i18n._(t`Could not load data`),
                            ERROR_SAVE: i18n._(t`Could not save data`),
                            ERR_VMANDATORY: i18n._(t`Field is required`),
                            ERR_VFORMAT: i18n._(t`Invalid format`)
                        }}
                        onLoadError={this.onUsersTableLoadError}
                    />
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
    }))(UserList);
