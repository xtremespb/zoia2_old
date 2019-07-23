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
import countriesListTableSetState from '../../actions/countriesListTableSetState';
import appDataRuntimeSetDocumentTitle from '../../../../../shared/actions/appDataRuntimeSetDocumentTitle';

const AdminPanel = lazy(() => import(/* webpackMode: "lazy", webpackChunkName: "AdminPanel" */'../../../../../shared/components/AdminPanel/AdminPanel.jsx'));
const Table = lazy(() => import(/* webpackMode: "lazy", webpackChunkName: "Table" */ '../../../../../shared/components/Table/index.jsx'));
const DialogDelete = lazy(() => import(/* webpackMode: "lazy", webpackChunkName: "CountriesDialogDelete" */ './DialogDelete.jsx'));

class CountriesList extends Component {
    constructor(props) {
        super(props);
        this.countriesListTable = React.createRef();
        this.dialogDelete = React.createRef();
    }

    componentDidMount = () => {
        if (!this.props.appDataRuntime.token) {
            history.push('/users/auth?redirect=/admin/countries');
        } else {
            const query = queryString.parse(window.location.search);
            if (query.reload && this.countriesListTable.current) {
                this.countriesListTable.current.reloadURL();
            }
        }
    }

    deauthorize = () => {
        this.props.appDataRuntimeSetTokenAction(null);
        this.props.appDataSetUserAction({});
        removeCookie(`${config.siteId}_auth`);
        history.push(`/users/auth?redirect=/admin/countries`);
    }

    onCountriesTableLoadError = res => {
        if (res && res.status === 403) {
            this.deauthorize();
            this.props.countriesListTableSetStateAction({});
        }
    }

    onCountriesTableSaveError = (data, i18n) => {
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

    onTableStateUpdated = state => this.props.countriesListTableSetStateAction(state);

    onDeleteRecord = (id, e) => {
        if (e) {
            e.preventDefault();
        }
        const ids = [];
        const countries = [];
        const countriesListTable = this.countriesListTable.current;
        if (id && e) {
            ids.push(id);
            const data = countriesListTable.getCurrentData();
            countries.push(data.name[id]);
        } else {
            const data = countriesListTable.getCheckboxData();
            data.map(i => {
                ids.push(i._id);
                countries.push(i.name);
            });
        }
        if (ids.length) {
            this.dialogDelete.current.show(countries, ids);
        }
    }

    onDeleteButtonClick = (ids, i18n) => {
        this.dialogDelete.current.hide();
        this.countriesListTable.current.setLoading(true);
        axios.post(`${config.apiURL}/api/countries/delete`, {
            token: this.props.appDataRuntime.token,
            ids
        }, { headers: { 'content-type': 'application/json' } }).then(res => {
            this.countriesListTable.current.setLoading(false);
            if (res.data.statusCode !== 200) {
                return UIkit.notification(i18n._(t`Cannot delete one or more countries`), { status: 'danger' });
            }
            this.countriesListTable.current.reloadURL();
            return UIkit.notification(i18n._(t`Operation complete`), { status: 'success' });
        }).catch(() => this.countriesListTable.current.setLoading(false) && UIkit.notification(i18n._(t`Cannot delete one or more countries`), { status: 'danger' }));
    }

    processActions = (val, row, i18n) => (<>
        <Link to={`/admin/countries/edit/${row._id}`} className="uk-icon-button" uk-icon="pencil" uk-tooltip={`title: ${i18n._(t`Edit`)}`} />
        &nbsp;
        <a href="" className="uk-icon-button" uk-icon="trash" uk-tooltip={`title: ${i18n._(t`Delete`)}`} onClick={e => this.onDeleteRecord(row._id, e)} />
    </>);

    render = () => (
        <AdminPanel>
            <I18n>
                {({ i18n }) => {
                    this.props.appDataRuntimeSetDocumentTitleAction(i18n._(t`Countries`), this.props.appData.language);
                    return (<>
                        <Table
                            prefix="countriesListTable"
                            ref={this.countriesListTable}
                            initialState={this.props.countriesList.countriesTableState}
                            onStateUpdated={this.onTableStateUpdated}
                            i18n={i18n}
                            UIkit={UIkit}
                            axios={axios}
                            topButtons={<><Link to="/admin/countries/add" className="uk-icon-button uk-button-primary uk-margin-small-right" uk-icon="plus" uk-tooltip={i18n._(t`Create new country`)} /><button type="button" className="uk-icon-button uk-button-danger" uk-icon="trash" uk-tooltip={i18n._(t`Delete selected countries`)} onClick={this.onDeleteRecord} /></>}
                            columns={[{
                                id: 'name',
                                title: 'Country',
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
                                url: `${config.apiURL}/api/countries/list`,
                                method: 'POST',
                                extras: {
                                    token: this.props.appDataRuntime.token,
                                    language: this.props.appData.language
                                }
                            }}
                            save={{
                                url: `${config.apiURL}/api/countries/saveField`,
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
                            onLoadError={this.onCountriesTableLoadError}
                            onSaveError={data => this.onCountriesTableSaveError(data, i18n)}
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
    countriesList: store.countriesList
}),
    dispatch => ({
        appDataRuntimeSetTokenAction: token => dispatch(appDataRuntimeSetToken(token)),
        appDataSetUserAction: user => dispatch(appDataSetUser(user)),
        countriesListTableSetStateAction: state => dispatch(countriesListTableSetState(state)),
        appLinguiSetCatalogAction: (language, catalog) => dispatch(appLinguiSetCatalog(language, catalog)),
        appDataRuntimeSetDocumentTitleAction: (documentTitle, language) => dispatch(appDataRuntimeSetDocumentTitle(documentTitle, language))
    }))(CountriesList);
