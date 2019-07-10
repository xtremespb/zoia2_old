/* eslint-disable react/prop-types */

import React, { lazy, Component } from 'react';
import { t } from '@lingui/macro';
import { I18n } from '@lingui/react';
import { connect } from 'react-redux';
import UIkit from 'uikit';
import axios from 'axios';
import { remove as removeCookie } from 'es-cookie';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import { history } from '../../../../../shared/store/configureStore';

import appDataRuntimeSetToken from '../../../../../shared/actions/appDataRuntimeSetToken';
import appLinguiSetCatalog from '../../../../../shared/actions/appLinguiSetCatalog';
import appDataSetUser from '../../../../../shared/actions/appDataSetUser';
import config from '../../../../../etc/config.json';
import usersListTableSetState from '../../actions/usersListTableSetState';

const AdminPanel = lazy(() => import(/* webpackMode: "lazy", webpackChunkName: "AdminPanel" */'../../../../../shared/components/AdminPanel/AdminPanel.jsx'));
const Table = lazy(() => import(/* webpackMode: "lazy", webpackChunkName: "Table" */ '../../../../../shared/components/Table/index.jsx'));

class UserList extends Component {
    constructor(props) {
        super(props);
        this.usersListTable = React.createRef();
    }

    componentDidMount = () => {
        if (!this.props.appDataRuntime.token) {
            history.push('/users/auth?redirect=/admin/users');
        } else {
            const query = queryString.parse(window.location.search);
            if (query.reload && this.usersListTable.current) {
                this.usersListTable.current.reloadURL();
            }
        }
    }

    deauthorize = () => {
        this.props.appDataRuntimeSetTokenAction(null);
        this.props.appDataSetUserAction({});
        removeCookie(`${config.siteId}_auth`);
        history.push(`/users/auth?redirect=/admin/users`);
    }

    onUsersTableLoadError = res => {
        if (res && res.status === 403) {
            this.deauthorize();
            this.props.usersListTableSetStateAction({});
        }
    }

    onUsersTableSaveError = (data, i18n) => {
        if (data) {
            if (data.statusCode === 403) {
                this.deauthorize();
            }
            switch (data.errorCode) {
                case 1:
                    UIkit.notification(i18n._(t`Record with the entered value already exists`), { status: 'danger' });
                    break;
                case 2:
                    UIkit.notification(i18n._(t`Invalid format`), { status: 'danger' });
                    break;
                default:
                    UIkit.notification(i18n._(t`Could not save data`), { status: 'danger' });
            }
        } else {
            UIkit.notification(i18n._(t`Could not save data`), { status: 'danger' });
        }
    }

    onTableStateUpdated = state => this.props.usersListTableSetStateAction(state);

    render = () => (
        <AdminPanel>
            <I18n>
                {({ i18n }) => (
                    <Table
                        prefix="usersListTable"
                        ref={this.usersListTable}
                        initialState={this.props.usersList.usersTableState}
                        onStateUpdated={this.onTableStateUpdated}
                        i18n={i18n}
                        UIkit={UIkit}
                        axios={axios}
                        topButtons={<><Link to="/admin/users/add" className="uk-icon-button uk-button-primary uk-margin-small-right" uk-icon="plus" uk-tooltip={i18n._(t`Create new user`)} /><button type="button" className="uk-icon-button uk-button-danger" uk-icon="trash" uk-tooltip={i18n._(t`Delete selected users`)} /></>}
                        columns={[{
                            id: 'username',
                            title: 'Username',
                            sortable: true,
                            editable: 'text',
                            cssHeader: 'uk-width-1-6@m uk-text-nowrap',
                            validation: {
                                mandatory: true,
                                regexp: '^[A-Za-z0-9_-]{4,32}$'
                            }
                        }, {
                            id: 'email',
                            title: 'E-mail',
                            sortable: true,
                            process: item => item || '',
                            editable: 'text',
                            validation: {
                                mandatory: true,
                                regexp: '^(?:[a-zA-Z0-9.!#$%&\'*+\\/=?^_`{|}~-])+@(?:[a-zA-Z0-9]|[^\\u0000-\\u007F])(?:(?:[a-zA-Z0-9-]|[^\\u0000-\\u007F]){0,61}(?:[a-zA-Z0-9]|[^\\u0000-\\u007F]))?(?:\\.(?:[a-zA-Z0-9]|[^\\u0000-\\u007F])(?:(?:[a-zA-Z0-9-]|[^\\u0000-\\u007F]){0,61}(?:[a-zA-Z0-9]|[^\\u0000-\\u007F]))?)*$'
                            }
                        }, {
                            id: 'active',
                            title: 'Status',
                            cssRow: 'uk-width-small uk-text-nowrap ztable-noselect',
                            sortable: true,
                            process: item => item ? 1 : 0,
                            editable: 'select',
                            options: {
                                0: 'Inactive',
                                1: 'Active'
                            }
                        }, {
                            id: 'actions',
                            title: 'Actions',
                            cssRow: 'uk-table-shrink uk-text-nowrap ztable-noselect',
                            process: (val, row) => (<><Link to={`/admin/users/edit/${row._id}`} className="uk-icon-button" uk-icon="pencil" uk-tooltip={`title: ${i18n._(t`Edit`)}`} />&nbsp;<a href="" className="uk-icon-button" uk-icon="trash" uk-tooltip={`title: ${i18n._(t`Delete`)}`} /></>)
                        }]}
                        itemsPerPage={config.commonItemsLimit}
                        source={{
                            url: `${config.apiURL}/api/users/list`,
                            method: 'POST',
                            extras: {
                                token: this.props.appDataRuntime.token
                            }
                        }}
                        save={{
                            url: `${config.apiURL}/api/users/saveField`,
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
                        onSaveError={data => this.onUsersTableSaveError(data, i18n)}
                    />
                )}
            </I18n>
        </AdminPanel>
    );
}

export default connect(store => ({
    appData: store.appData,
    appDataRuntime: store.appDataRuntime,
    appLingui: store.appLingui,
    usersList: store.usersList
}),
    dispatch => ({
        appDataRuntimeSetTokenAction: token => dispatch(appDataRuntimeSetToken(token)),
        appDataSetUserAction: user => dispatch(appDataSetUser(user)),
        usersListTableSetStateAction: state => dispatch(usersListTableSetState(state)),
        appLinguiSetCatalogAction: (language, catalog) => dispatch(appLinguiSetCatalog(language, catalog))
    }))(UserList);
