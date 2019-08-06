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
import boatsListTableSetState from '../../actions/boatsListTableSetState';
import appDataRuntimeSetDocumentTitle from '../../../../../shared/actions/appDataRuntimeSetDocumentTitle';

const AdminPanel = lazy(() => import(/* webpackMode: "lazy", webpackChunkName: "AdminPanel" */'../../../../../shared/components/AdminPanel/AdminPanel.jsx'));
const Table = lazy(() => import(/* webpackMode: "lazy", webpackChunkName: "Table" */ '../../../../../shared/components/Table/index.jsx'));
const DialogDelete = lazy(() => import(/* webpackMode: "lazy", webpackChunkName: "BoatsDialogDelete" */ './DialogDelete.jsx'));

class BoatsList extends Component {
    constructor(props) {
        super(props);
        this.boatsListTable = React.createRef();
        this.dialogDelete = React.createRef();
    }

    componentDidMount = () => {
        if (!this.props.appDataRuntime.token) {
            history.push('/users/auth?redirect=/admin/boats');
        } else {
            const query = queryString.parse(window.location.search);
            if (query.reload && this.boatsListTable.current) {
                this.boatsListTable.current.reloadURL();
            }
        }
    }

    deauthorize = () => {
        this.props.appDataRuntimeSetTokenAction(null);
        this.props.appDataSetUserAction({});
        removeCookie(`${config.siteId}_auth`);
        history.push(`/users/auth?redirect=/admin/boats`);
    }

    onBoatsTableLoadError = res => {
        if (res && res.status === 403) {
            this.deauthorize();
            this.props.boatsListTableSetStateAction({});
        }
    }

    onBoatsTableSaveError = (data, i18n) => {
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

    onTableStateUpdated = state => this.props.boatsListTableSetStateAction(state);

    onDeleteRecord = (id, e) => {
        if (e) {
            e.preventDefault();
        }
        const ids = [];
        const boats = [];
        const boatsListTable = this.boatsListTable.current;
        if (id && e) {
            ids.push(id);
            const data = boatsListTable.getCurrentData();
            boats.push(data.title[id]);
        } else {
            const data = boatsListTable.getCheckboxData();
            data.map(i => {
                ids.push(i._id);
                boats.push(i.title);
            });
        }
        if (ids.length) {
            this.dialogDelete.current.show(boats, ids);
        }
    }

    onDeleteButtonClick = (ids, i18n) => {
        this.dialogDelete.current.hide();
        this.boatsListTable.current.setLoading(true);
        axios.post(`${config.apiURL}/api/boats/delete`, {
            token: this.props.appDataRuntime.token,
            ids
        }, { headers: { 'content-type': 'application/json' } }).then(res => {
            this.boatsListTable.current.setLoading(false);
            if (res.data.statusCode !== 200) {
                return UIkit.notification(i18n._(t`Cannot delete one or more boats`), { status: 'danger' });
            }
            this.boatsListTable.current.reloadURL();
            return UIkit.notification(i18n._(t`Operation complete`), { status: 'success' });
        }).catch(() => this.boatsListTable.current.setLoading(false) && UIkit.notification(i18n._(t`Cannot delete one or more boats`), { status: 'danger' }));
    }

    processActions = (val, row, i18n) => (<>
        <Link to={`/admin/boats/edit/${row._id}`} className="uk-icon-button" uk-icon="pencil" uk-tooltip={`title: ${i18n._(t`Edit`)}`} />
        &nbsp;
        <a href="" className="uk-icon-button" uk-icon="trash" uk-tooltip={`title: ${i18n._(t`Delete`)}`} onClick={e => this.onDeleteRecord(row._id, e)} />
    </>);

    onRefreshTable = e => {
        e.preventDefault();
        if (this.boatsListTable.current) {
            this.boatsListTable.current.reloadURL();
        }
    }

    render = () => (
        <AdminPanel>
            <I18n>
                {({ i18n }) => {
                    this.props.appDataRuntimeSetDocumentTitleAction(i18n._(t`Boats`), this.props.appData.language);
                    return (<>
                        <div className="uk-title-head uk-margin-bottom">{i18n._(t`Boats`)}</div>
                        <Table
                            prefix="boatsListTable"
                            ref={this.boatsListTable}
                            initialState={this.props.boatsList.boatsTableState}
                            onStateUpdated={this.onTableStateUpdated}
                            i18n={i18n}
                            UIkit={UIkit}
                            axios={axios}
                            topButtons={<><Link to="/admin/boats/add" className="uk-icon-button uk-button-primary uk-margin-small-right" uk-icon="plus" uk-tooltip={i18n._(t`Create new boat`)} /><button type="button" className="uk-icon-button uk-button-danger uk-margin-right" uk-icon="trash" uk-tooltip={i18n._(t`Delete selected boats`)} onClick={this.onDeleteRecord} /><button type="button" className="uk-icon-button uk-button-default" uk-icon="refresh" uk-tooltip={i18n._(t`Refresh`)} onClick={this.onRefreshTable} /></>}
                            columns={[{
                                id: 'title',
                                title: 'Boat',
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
                                url: `${config.apiURL}/api/boats/list`,
                                method: 'POST',
                                extras: {
                                    token: this.props.appDataRuntime.token,
                                    language: this.props.appData.language
                                }
                            }}
                            save={{
                                url: `${config.apiURL}/api/boats/saveField`,
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
                            onLoadError={this.onBoatsTableLoadError}
                            onSaveError={data => this.onBoatsTableSaveError(data, i18n)}
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
    boatsList: store.boatsList
}),
    dispatch => ({
        appDataRuntimeSetTokenAction: token => dispatch(appDataRuntimeSetToken(token)),
        appDataSetUserAction: user => dispatch(appDataSetUser(user)),
        boatsListTableSetStateAction: state => dispatch(boatsListTableSetState(state)),
        appLinguiSetCatalogAction: (language, catalog) => dispatch(appLinguiSetCatalog(language, catalog)),
        appDataRuntimeSetDocumentTitleAction: (documentTitle, language) => dispatch(appDataRuntimeSetDocumentTitle(documentTitle, language))
    }))(BoatsList);
