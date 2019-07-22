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
import destinationsListTableSetState from '../../actions/destinationsListTableSetState';
import appDataRuntimeSetDocumentTitle from '../../../../../shared/actions/appDataRuntimeSetDocumentTitle';

const AdminPanel = lazy(() => import(/* webpackMode: "lazy", webpackChunkName: "AdminPanel" */'../../../../../shared/components/AdminPanel/AdminPanel.jsx'));
const Table = lazy(() => import(/* webpackMode: "lazy", webpackChunkName: "Table" */ '../../../../../shared/components/Table/index.jsx'));
const DialogDelete = lazy(() => import(/* webpackMode: "lazy", webpackChunkName: "DestinationsDialogDelete" */ './DialogDelete.jsx'));

class DestinationsList extends Component {
    constructor(props) {
        super(props);
        this.destinationsListTable = React.createRef();
        this.dialogDelete = React.createRef();
    }

    componentDidMount = () => {
        if (!this.props.appDataRuntime.token) {
            history.push('/users/auth?redirect=/admin/destinations');
        } else {
            const query = queryString.parse(window.location.search);
            if (query.reload && this.destinationsListTable.current) {
                this.destinationsListTable.current.reloadURL();
            }
        }
    }

    deauthorize = () => {
        this.props.appDataRuntimeSetTokenAction(null);
        this.props.appDataSetUserAction({});
        removeCookie(`${config.siteId}_auth`);
        history.push(`/users/auth?redirect=/admin/destinations`);
    }

    onDestinationsTableLoadError = res => {
        if (res && res.status === 403) {
            this.deauthorize();
            this.props.destinationsListTableSetStateAction({});
        }
    }

    onDestinationsTableSaveError = (data, i18n) => {
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

    onTableStateUpdated = state => this.props.destinationsListTableSetStateAction(state);

    onDeleteRecord = (id, e) => {
        if (e) {
            e.preventDefault();
        }
        const ids = [];
        const destinations = [];
        const destinationsListTable = this.destinationsListTable.current;
        if (id && e) {
            ids.push(id);
            const data = destinationsListTable.getCurrentData();
            destinations.push(data.name[id]);
        } else {
            const data = destinationsListTable.getCheckboxData();
            data.map(i => {
                ids.push(i._id);
                destinations.push(i.name);
            });
        }
        if (ids.length) {
            this.dialogDelete.current.show(destinations, ids);
        }
    }

    onDeleteButtonClick = (ids, i18n) => {
        this.dialogDelete.current.hide();
        this.destinationsListTable.current.setLoading(true);
        axios.post(`${config.apiURL}/api/destinations/delete`, {
            token: this.props.appDataRuntime.token,
            ids
        }, { headers: { 'content-type': 'application/json' } }).then(res => {
            this.destinationsListTable.current.setLoading(false);
            if (res.data.statusCode !== 200) {
                return UIkit.notification(i18n._(t`Cannot delete one or more destinations`), { status: 'danger' });
            }
            this.destinationsListTable.current.reloadURL();
            return UIkit.notification(i18n._(t`Operation complete`), { status: 'success' });
        }).catch(() => this.destinationsListTable.current.setLoading(false) && UIkit.notification(i18n._(t`Cannot delete one or more destinations`), { status: 'danger' }));
    }

    processActions = (val, row, i18n) => (<>
        <Link to={`/admin/destinations/edit/${row._id}`} className="uk-icon-button" uk-icon="pencil" uk-tooltip={`title: ${i18n._(t`Edit`)}`} />
        &nbsp;
        <a href="" className="uk-icon-button" uk-icon="trash" uk-tooltip={`title: ${i18n._(t`Delete`)}`} onClick={e => this.onDeleteRecord(row._id, e)} />
    </>);

    render = () => (
        <AdminPanel>
            <I18n>
                {({ i18n }) => {
                    this.props.appDataRuntimeSetDocumentTitleAction(i18n._(t`Destinations`), this.props.appData.language);
                    return (<>
                        <Table
                            prefix="destinationsListTable"
                            ref={this.destinationsListTable}
                            initialState={this.props.destinationsList.destinationsTableState}
                            onStateUpdated={this.onTableStateUpdated}
                            i18n={i18n}
                            UIkit={UIkit}
                            axios={axios}
                            topButtons={<><Link to="/admin/destinations/add" className="uk-icon-button uk-button-primary uk-margin-small-right" uk-icon="plus" uk-tooltip={i18n._(t`Create new destination`)} /><button type="button" className="uk-icon-button uk-button-danger" uk-icon="trash" uk-tooltip={i18n._(t`Delete selected destinations`)} onClick={this.onDeleteRecord} /></>}
                            columns={[{
                                id: 'name',
                                title: 'Destination',
                                sortable: true,
                                cssHeader: 'uk-text-nowrap'
                            }, {
                                id: 'actions',
                                title: 'Actions',
                                cssRow: 'uk-table-shrink uk-text-nowrap ztable-noselect',
                                process: (val, row) => this.processActions(val, row, i18n)
                            }]}
                            itemsPerPage={config.commonItemsLimit}
                            source={{
                                url: `${config.apiURL}/api/destinations/list`,
                                method: 'POST',
                                extras: {
                                    token: this.props.appDataRuntime.token,
                                    language: this.props.appData.language
                                }
                            }}
                            save={{
                                url: `${config.apiURL}/api/destinations/saveField`,
                                method: 'POST',
                                extras: {
                                    token: this.props.appDataRuntime.token
                                }
                            }}
                            sortColumn="name"
                            sortDirection="asc"
                            lang={{
                                LOADING: i18n._(t`Loading data, please wait…`),
                                NO_RECORDS: i18n._(t`No records to display`),
                                ERROR_LOAD: i18n._(t`Could not load data`),
                                ERROR_SAVE: i18n._(t`Could not save data`),
                                ERR_VMANDATORY: i18n._(t`Field is required`),
                                ERR_VFORMAT: i18n._(t`Invalid format`)
                            }}
                            onLoadError={this.onDestinationsTableLoadError}
                            onSaveError={data => this.onDestinationsTableSaveError(data, i18n)}
                        />
                        <DialogDelete
                            ref={this.dialogDelete}
                            i18n={i18n}
                            onDeleteButtonClickHandler={ids => this.onDeleteButtonClick(ids, i18n)}
                        />
                    </>);
                }}
            </I18n>
        </AdminPanel>
    );
}

export default connect(store => ({
    appData: store.appData,
    appDataRuntime: store.appDataRuntime,
    appLingui: store.appLingui,
    destinationsList: store.destinationsList
}),
    dispatch => ({
        appDataRuntimeSetTokenAction: token => dispatch(appDataRuntimeSetToken(token)),
        appDataSetUserAction: user => dispatch(appDataSetUser(user)),
        destinationsListTableSetStateAction: state => dispatch(destinationsListTableSetState(state)),
        appLinguiSetCatalogAction: (language, catalog) => dispatch(appLinguiSetCatalog(language, catalog)),
        appDataRuntimeSetDocumentTitleAction: (documentTitle, language) => dispatch(appDataRuntimeSetDocumentTitle(documentTitle, language))
    }))(DestinationsList);
