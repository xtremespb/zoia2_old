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

class BoatsEdit extends Component {
    constructor(props) {
        super(props);
        this.editBoatsForm = React.createRef();
    }

    state = {
        loadingError: false
    }

    componentDidMount = () => {
        if (!this.props.appDataRuntime.token) {
            history.push('/users/auth?redirect=/admin/boats');
        }
    }

    deauthorize = () => {
        this.props.appDataRuntimeSetTokenAction(null);
        this.props.appDataSetUserAction({});
        removeCookie(`${config.siteId}_auth`);
        history.push(`/users/auth?redirect=/admin/boats`);
    }

    onBoatsTableLoadError = data => {
        if (data && data.statusCode === 403) {
            this.deauthorize();
        }
    }

    onSaveSuccessHandler = i18n => {
        UIkit.notification({
            message: i18n._('Data has been saved successfully'),
            status: 'success'
        });
        history.push('/admin/boats?reload=1');
    }

    loadDestinations = (i18n, data) => new Promise(async resolve => {
        if (this.editBoatsForm.current) {
            await this.editBoatsForm.current.setProperty('destination', 'disabled', true);
            await this.editBoatsForm.current.setProperty('country', 'disabled', true);
        }
        axios.post(`${config.apiURL}/api/boats/getDestinations`, {
            token: this.props.appDataRuntime.token,
            language: this.props.appData.language,
            destination: data ? data.default.destination : undefined
        }, { headers: { 'content-type': 'application/json' } }).then(async res => {
            await this.editBoatsForm.current.setProperty('destination', 'disabled', null);
            await this.editBoatsForm.current.setProperty('destination', 'values', res.data.destinations);
            await this.editBoatsForm.current.setProperty('country', 'disabled', null);
            await this.editBoatsForm.current.setProperty('country', 'values', res.data.countries);
            if (data) {
                await this.editBoatsForm.current.setProperty('country', 'value', data.default.country);
            }
            resolve({
                destinations: res.data.destinations,
                countries: res.data.countries
            });
        }).catch(async () => {
            await this.editBoatsForm.current.setProperty('destination', 'disabled', null);
            await this.editBoatsForm.current.setProperty('country', 'disabled', null);
            UIkit.notification({
                message: i18n._('Could not get a list of destinations'),
                status: 'danger'
            });
        });
    });

    onFormBuilt = async i18n => {
        if (!this.props.match.params.id) {
            const { destinations, countries } = await this.loadDestinations(i18n);
            await this.editBoatsForm.current.setValue('destination', destinations && Object.keys(destinations).length ? Object.keys(destinations)[0] : {}, 'default');
            await this.editBoatsForm.current.setValue('country', countries && Object.keys(countries).length ? Object.keys(countries)[0] : {}, 'default');
        }
    }

    onDestinationChange = async (destination, i18n) => {
        await this.editBoatsForm.current.setProperty('country', 'disabled', true);
        axios.post(`${config.apiURL}/api/boats/getCountries`, {
            token: this.props.appDataRuntime.token,
            language: this.props.appData.language,
            destination
        }, { headers: { 'content-type': 'application/json' } }).then(async res => {
            await this.editBoatsForm.current.setProperty('country', 'disabled', null);
            await this.editBoatsForm.current.setProperty('country', 'values', res.data.countries);
        }).catch(async () => {
            await this.editBoatsForm.current.setProperty('country', 'disabled', null);
            UIkit.notification({
                message: i18n._('Could not get a list of countries'),
                status: 'danger'
            });
        });
    }

    getEditForm = i18n => (<FormBuilder
        ref={this.editBoatsForm}
        prefix="editBoatsForm"
        UIkit={UIkit}
        axios={axios}
        i18n={i18n}
        data={
            [
                {
                    id: 'destination',
                    type: 'select',
                    label: t`Destination`,
                    css: 'uk-form-width-large',
                    defaultValue: '',
                    values: {},
                    autofocus: true,
                    onChange: (id, value) => this.onDestinationChange(value, i18n)
                },
                {
                    id: 'country',
                    type: 'select',
                    label: t`Country`,
                    css: 'uk-form-width-large',
                    defaultValue: '',
                    values: {}
                },
                {
                    id: 'bases',
                    type: 'tags',
                    label: t`Bases`,
                    css: 'uk-form-width-large',
                    placeholderText: t`Add new base`,
                    suggestions: [
                        { id: 1, name: 'Test 1' },
                        { id: 2, name: 'Test 2' }
                    ]
                },
                [
                    {
                        id: 'name',
                        type: 'text',
                        css: 'uk-form-width-medium',
                        label: t`Boat`
                    },
                    {
                        id: 'name_ru',
                        type: 'text',
                        css: 'uk-form-width-medium',
                        label: t`Boat (RU)`
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
                        linkTo: '/admin/boats',
                        css: 'uk-button-default uk-margin-small-right',
                        label: t`Cancel`
                    }, {
                        id: 'btnSave',
                        type: 'button',
                        buttonType: 'submit',
                        css: 'uk-button-primary',
                        label: t`Save`
                    }
                ]
            ]
        }
        validation={
            {
                name: {
                    mandatory: true
                }
            }
        }
        lang={{
            ERR_VMANDATORY: t`Field is required`,
            ERR_VFORMAT: t`Invalid format`,
            ERR_VNOMATCH: t`Passwords do not match`,
            ERR_LOAD: t`Could not load data from server`,
            ERR_SAVE: t`Could not save data`,
            WILL_BE_DELETED: t`will be deleted. Are you sure?`,
            YES: t`Yes`,
            CANCEL: t`Cancel`
        }}
        save={{
            url: `${config.apiURL}/api/boats/save`,
            method: 'POST',
            extras: {
                id: this.props.match.params.id,
                token: this.props.appDataRuntime.token
            }
        }}
        load={this.props.match.params.id ? {
            url: `${config.apiURL}/api/boats/load`,
            method: 'POST',
            extras: {
                id: this.props.match.params.id,
                token: this.props.appDataRuntime.token
            }
        } : null}
        onSaveSuccess={() => this.onSaveSuccessHandler(i18n)}
        onLoadError={() => this.setState({ loadingError: true })}
        onLoadSuccess={() => this.setState({ loadingError: false })}
        onDataDeserialized={data => this.loadDestinations(i18n, data)}
        onFormBuilt={() => this.onFormBuilt(i18n)}
    />);

    reloadEditFormData = e => {
        e.preventDefault();
        this.setState({ loadingError: false });
    }

    render = () => (
        <AdminPanel>
            <I18n>
                {({ i18n }) => {
                    this.props.appDataRuntimeSetDocumentTitleAction(i18n._(this.props.match.params.id ? 'Edit Boat' : 'New Boat'), this.props.appData.language);
                    return (<>
                        <div className="uk-title-head uk-margin-bottom">{this.props.match.params.id ? <Trans>Edit Boat</Trans> : <Trans>New Boat</Trans>}</div>
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
    }))(BoatsEdit);
