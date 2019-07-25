/* eslint-disable react/prop-types */

import React, { lazy, Component } from 'react';
import { I18n } from '@lingui/react';
import { connect } from 'react-redux';
import { remove as removeCookie } from 'es-cookie';
import UIkit from 'uikit';
import axios from 'axios';
import { Trans, t } from '@lingui/macro';
import { history } from '../../../../../shared/store/configureStore';
import appDataRuntimeSetToken from '../../../../../shared/actions/appDataRuntimeSetToken';
import appDataSetUser from '../../../../../shared/actions/appDataSetUser';
import config from '../../../../../etc/config.json';
import appDataRuntimeSetDocumentTitle from '../../../../../shared/actions/appDataRuntimeSetDocumentTitle';

const AdminPanel = lazy(() => import(/* webpackMode: "lazy", webpackChunkName: "AdminPanel" */'../../../../../shared/components/AdminPanel/AdminPanel.jsx'));
const FormBuilder = lazy(() => import(/* webpackMode: "lazy", webpackChunkName: "FormBuilder" */'../../../../../shared/components/FormBuilder/index.jsx'));

class CountriesEdit extends Component {
    constructor(props) {
        super(props);
        this.editCountryForm = React.createRef();
    }

    state = {
        loadingError: false
    }

    componentDidMount = () => {
        if (!this.props.appDataRuntime.token) {
            history.push('/users/auth?redirect=/admin/countries');
        }
    }

    deauthorize = () => {
        this.props.appDataRuntimeSetTokenAction(null);
        this.props.appDataSetUserAction({});
        removeCookie(`${config.siteId}_auth`);
        history.push(`/users/auth?redirect=/admin/countries`);
    }

    onCountriesTableLoadError = data => {
        if (data && data.statusCode === 403) {
            this.deauthorize();
        }
    }

    onSaveSuccessHandler = i18n => {
        UIkit.notification({
            message: i18n._('Data has been saved successfully'),
            status: 'success'
        });
        history.push('/admin/countries?reload=1');
    }

    loadDestinations = i18n => new Promise(async resolve => {
        if (this.editCountryForm.current) {
            await this.editCountryForm.current.setProperty('destination', 'disabled', true);
        }
        axios.post(`${config.apiURL}/api/countries/getDestinations`, {
            token: this.props.appDataRuntime.token,
            language: this.props.appData.language
        }, { headers: { 'content-type': 'application/json' } }).then(async res => {
            await this.editCountryForm.current.setProperty('destination', 'disabled', null);
            await this.editCountryForm.current.setProperty('destination', 'values', res.data.destinations);
            if (!this.editCountryForm.current.getValue('destination') && Object.keys(res.data.destinations).length) {
                await this.editCountryForm.current.setValue('destination', Object.keys(res.data.destinations)[0]);
            }
            resolve(res.data.destinations);
        }).catch(async () => {
            await this.editCountryForm.current.setProperty('destination', 'disabled', null);
            UIkit.notification({
                message: i18n._('Could not get a list of destinations'),
                status: 'danger'
            });
        });
    });

    onFormBuilt = async () => {
        if (!this.props.match.params.id) {
            const destinations = await this.loadDestinations();
            await this.editCountryForm.current.setValue('destination', destinations && Object.keys(destinations).length ? Object.keys(destinations)[0] : {}, 'default');
        }
    }

    getEditForm = i18n => (<FormBuilder
        ref={this.editCountryForm}
        prefix="editCountryForm"
        UIkit={UIkit}
        axios={axios}
        i18n={i18n}
        data={
            [
                {
                    id: 'destination',
                    type: 'select',
                    label: `Destination`,
                    css: 'uk-form-width-large',
                    defaultValue: '',
                    values: {},
                    autofocus: true
                },
                [
                    {
                        id: 'name',
                        type: 'text',
                        css: 'uk-form-width-medium',
                        label: `Country`
                    },
                    {
                        id: 'name_ru',
                        type: 'text',
                        css: 'uk-form-width-medium',
                        label: `Country (RU)`
                    }
                ],
                {
                    id: 'divider1',
                    type: 'divider'
                },
                [
                    {
                        id: 'btnCancel',
                        type: 'button',
                        buttonType: 'link',
                        linkTo: '/admin/countries',
                        css: 'uk-button-default uk-margin-small-right',
                        label: `Cancel`
                    }, {
                        id: 'btnSave',
                        type: 'button',
                        buttonType: 'submit',
                        css: 'uk-button-primary',
                        label: `Save`
                    }
                ]
            ]
        }
        validation={
            {
                username: {
                    mandatory: true,
                    regexp: /^[a-zA-Z0-9_-]{4,32}$/
                },
                email: {
                    mandatory: true,
                    // eslint-disable-next-line no-control-regex
                    regexp: /^(?:[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-])+@(?:[a-zA-Z0-9]|[^\u0000-\u007F])(?:(?:[a-zA-Z0-9-]|[^\u0000-\u007F]){0,61}(?:[a-zA-Z0-9]|[^\u0000-\u007F]))?(?:\.(?:[a-zA-Z0-9]|[^\u0000-\u007F])(?:(?:[a-zA-Z0-9-]|[^\u0000-\u007F]){0,61}(?:[a-zA-Z0-9]|[^\u0000-\u007F]))?)*$/
                },
                password: {
                    shouldMatch: 'password2'
                },
                password2: {
                    shouldMatch: 'password'
                }
            }
        }
        lang={{
            ERR_VMANDATORY: `Field is required`,
            ERR_VFORMAT: `Invalid format`,
            ERR_VNOMATCH: `Passwords do not match`,
            ERR_LOAD: `Could not load data from server`,
            ERR_SAVE: `Could not save data`,
            WILL_BE_DELETED: `will be deleted. Are you sure?`,
            YES: `Yes`,
            CANCEL: `Cancel`
        }}
        save={{
            url: `${config.apiURL}/api/countries/save`,
            method: 'POST',
            extras: {
                id: this.props.match.params.id,
                token: this.props.appDataRuntime.token
            }
        }}
        load={this.props.match.params.id ? {
            url: `${config.apiURL}/api/countries/load`,
            method: 'POST',
            extras: {
                id: this.props.match.params.id,
                token: this.props.appDataRuntime.token
            }
        } : null}
        onSaveSuccess={() => this.onSaveSuccessHandler(i18n)}
        onLoadError={() => this.setState({ loadingError: true })}
        onLoadSuccess={() => this.setState({ loadingError: false })}
        onDataDeserialized={() => this.loadDestinations(i18n)}
        onFormBuilt={this.onFormBuilt}
    />);

    reloadEditFormData = e => {
        e.preventDefault();
        this.setState({ loadingError: false });
    }

    render = () => (
        <AdminPanel>
            <I18n>
                {({ i18n }) => {
                    this.props.appDataRuntimeSetDocumentTitleAction(i18n._(this.props.match.params.id ? 'Edit Country' : 'New Country'), this.props.appData.language);
                    return (<>
                        <div className="uk-title-head uk-margin-bottom">{this.props.match.params.id ? <Trans>Edit Country</Trans> : <Trans>New Country</Trans>}</div>
                        {this.state.loadingError ? <div className="uk-alert-danger" uk-alert="true">
                            <Trans>Could not load data from server. Please check your URL or try to <a href="" onClick={this.reloadEditFormData}>reload</a> data.</Trans>
                        </div> : this.getEditForm(i18n)}
                    </>);
                }}
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
        appDataSetUserAction: user => dispatch(appDataSetUser(user)),
        appDataRuntimeSetDocumentTitleAction: (documentTitle, language) => dispatch(appDataRuntimeSetDocumentTitle(documentTitle, language))
    }))(CountriesEdit);
