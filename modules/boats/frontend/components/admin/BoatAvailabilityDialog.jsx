/* eslint-disable react/prop-types */

import React, { lazy, Component } from 'react';
import { connect } from 'react-redux';
import { remove as removeCookie } from 'es-cookie';
import UIkit from 'uikit';
import axios from 'axios';
import { t } from '@lingui/macro';
import uuid from 'uuid/v1';
import { history } from '../../../../../shared/store/configureStore';
import appDataRuntimeSetToken from '../../../../../shared/actions/appDataRuntimeSetToken';
import appDataSetUser from '../../../../../shared/actions/appDataSetUser';
import config from '../../../../../etc/config.json';
import appDataRuntimeSetDocumentTitle from '../../../../../shared/actions/appDataRuntimeSetDocumentTitle';

import './BoatAvailabilityDialog.css';

const FormBuilder = lazy(() => import(/* webpackMode: "lazy", webpackChunkName: "FormBuilder" */'../../../../../shared/components/FormBuilder/index.jsx'));

class BoatAvailabilityDialog extends Component {
    constructor(props) {
        super(props);
        this.editAvailForm = React.createRef();
    }

    componentWillUnmount = () => {
        this.boatAvailabilityDialog.$destroy(true);
    }

    componentDidMount = () => {
        if (!this.props.appDataRuntime.token) {
            history.push('/users/auth?redirect=/admin/boats');
            return;
        }
        this.boatAvailabilityDialog = UIkit.modal(`#BoatAvailabilityDialog`, {
            bgClose: false,
            escClose: false,
            stack: false
        });
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
        if (this.editAvailForm.current) {
            await this.editAvailForm.current.setLoading(true);
            await this.editAvailForm.current.resetValuesToDefault();
        }
        axios.post(`${config.apiURL}/api/boats/getDestinations`, {
            token: this.props.appDataRuntime.token,
            language: this.props.appData.language,
            destination: data ? data.default.destination : undefined,
            country: data ? data.default.country : undefined
        }, { headers: { 'content-type': 'application/json' } }).then(async res => {
            await this.editAvailForm.current.setLoading(false);
            await this.editAvailForm.current.setProperty('destination', 'values', res.data.destinations);
            await this.editAvailForm.current.setProperty('country', 'values', res.data.countries);
            const basesList = {};
            res.data.bases.map(b => basesList[b.id] = b.name);
            await this.editAvailForm.current.setProperty('homeBase', 'values', basesList);
            if (data) {
                await this.editAvailForm.current.setProperty('country', 'value', data.default.country);
                await this.editAvailForm.current.setProperty('homeBase', 'value', data.default.homeBase);
            }
            resolve({
                destinations: res.data.destinations,
                countries: res.data.countries,
                bases: res.data.bases
            });
        }).catch(async () => {
            await this.editAvailForm.current.setLoading(false);
            UIkit.notification({
                message: i18n._('Could not get a list of destinations'),
                status: 'danger'
            });
        });
    });

    onDestinationChange = async (destination, i18n) => {
        await this.editAvailForm.current.setProperty('country', 'disabled', true);
        axios.post(`${config.apiURL}/api/boats/getCountries`, {
            token: this.props.appDataRuntime.token,
            language: this.props.appData.language,
            destination
        }, { headers: { 'content-type': 'application/json' } }).then(async res => {
            await this.editAvailForm.current.setProperty('country', 'disabled', null);
            await this.editAvailForm.current.setProperty('country', 'values', res.data.countries);
            await this.editAvailForm.current.setProperty('bases', 'suggestions', res.data.bases || []);
            await this.editAvailForm.current.setValue('bases', [], 'default');
            await this.editAvailForm.current.setValue('country', Object.keys(res.data.countries)[0], 'default');
            const basesJSX = res.data.bases.map(b => (<a href="" data-id={b.id} data-name={b.name} onClick={this.onAddBaseLabelClick} className="uk-label uk-margin-small-right za-ad-addBaseLink" key={b.id}>{b.name}</a>));
            await this.editAvailForm.current.setProperty('basesListText', 'text', basesJSX);
            const basesList = {};
            res.data.bases.map(b => basesList[b.id] = b.name);
            await this.editAvailForm.current.setProperty('homeBase', 'values', basesList);
        }).catch(async () => {
            await this.editAvailForm.current.setProperty('country', 'disabled', null);
            UIkit.notification({
                message: i18n._(t`Could not get a list of countries`),
                status: 'danger'
            });
        });
    }

    onCountryChange = async (country, i18n) => {
        await this.editAvailForm.current.setProperty('bases', 'disabled', true);
        axios.post(`${config.apiURL}/api/boats/getBases`, {
            token: this.props.appDataRuntime.token,
            language: this.props.appData.language,
            country
        }, { headers: { 'content-type': 'application/json' } }).then(async res => {
            await this.editAvailForm.current.setProperty('bases', 'suggestions', res.data.bases);
            await this.editAvailForm.current.setValue('bases', [], 'default');
            const basesJSX = res.data.bases.map(b => (<a href="" data-id={b.id} data-name={b.name} onClick={this.onAddBaseLabelClick} className="uk-label uk-margin-small-right za-ad-addBaseLink" key={b.id}>{b.name}</a>));
            await this.editAvailForm.current.setProperty('basesListText', 'text', basesJSX);
            const basesList = {};
            res.data.bases.map(b => basesList[b.id] = b.name);
            await this.editAvailForm.current.setProperty('homeBase', 'values', basesList);
        }).catch(async () => {
            await this.editAvailForm.current.setProperty('bases', 'disabled', null);
            UIkit.notification({
                message: i18n._(t`Could not get a list of bases`),
                status: 'danger'
            });
        });
    }

    getEditForm = i18n => (<FormBuilder
        ref={this.editAvailForm}
        prefix="editAvailForm"
        UIkit={UIkit}
        axios={axios}
        i18n={i18n}
        locale={this.props.appData.language}
        data={[
            {
                id: 'destination',
                type: 'select',
                label: `${i18n._(t`Destination`)}:`,
                css: 'uk-form-width-large',
                defaultValue: '',
                values: {},
                autofocus: true,
                onChange: (id, value) => this.onDestinationChange(value, i18n)
            },
            {
                id: 'country',
                type: 'select',
                label: `${i18n._(t`Country`)}:`,
                css: 'uk-form-width-large',
                defaultValue: '',
                values: {},
                onChange: (id, value) => this.onCountryChange(value, i18n)
            },
            {
                id: 'bases',
                type: 'tags',
                label: `${i18n._(t`Bases`)}:`,
                css: 'uk-form-width-large',
                suggestions: [],
                placeholderText: i18n._(t`Add new base`),
                value: []
            },
            {
                id: 'basesListText',
                type: 'message',
                text: ''
            },
            {
                id: 'homeBase',
                type: 'select',
                label: `${i18n._(t`Home Base`)}:`,
                css: 'uk-form-width-medium',
                defaultValue: '',
                values: {}
            },
            [{
                id: 'start',
                type: 'datePicker',
                label: `${i18n._(t`Start date`)}:`,
                css: 'uk-form-width-medium',
                value: ''
            }, {
                id: 'end',
                type: 'datePicker',
                label: `${i18n._(t`End date`)}:`,
                css: 'uk-form-width-medium',
                value: ''
            }]
        ]}
        validation={
            {
                destination: {
                    mandatory: true
                },
                country: {
                    mandatory: true
                },
                homeBase: {
                    mandatory: true
                },
                start: {
                    mandatory: true
                },
                end: {
                    mandatory: true
                }
            }
        }
        lang={{
            ERR_VMANDATORY: i18n._(t`Field is required`),
            ERR_VFORMAT: i18n._(t`Invalid format`),
            ERR_VNOMATCH: i18n._(`Passwords do not match`),
            ERR_LOAD: i18n._(t`Could not load data from server`),
            ERR_SAVE: i18n._(t`Could not save data`),
            WILL_BE_DELETED: i18n._(t`will be deleted. Are you sure?`),
            YES: i18n._(t`Yes`),
            CANCEL: i18n._(t`Cancel`)
        }}
        onSaveSuccess={() => this.onSaveSuccessHandler(i18n)}
        onDataDeserialized={data => this.loadDestinations(i18n, data)}
    // onFormBuilt={() => this.onFormBuilt(i18n)}
    />);

    reloadEditFormData = e => {
        e.preventDefault();
    }

    onAddBaseLabelClick = async e => {
        e.preventDefault();
        const { id, name } = e.currentTarget.dataset;
        const value = this.editAvailForm.current.getValue('bases');
        if (value) {
            value.push({
                id,
                name
            });
        }
        await this.editAvailForm.current.setProperty('bases', 'suggestions', value || []);
    }

    showDialog = async (i18n, id, data) => {
        if (this.editAvailForm.current) {
            await this.editAvailForm.current.setLoading(true);
            await this.editAvailForm.current.resetValuesToDefault();
        }
        this.recordId = id || uuid();
        this.boatAvailabilityDialog.show().then(async () => {
            if (data) {
                const { bases } = await this.loadDestinations(i18n, data);
                await this.editAvailForm.current.setProperty('bases', 'suggestions', bases);
                await this.editAvailForm.current.setValue('destination', data.default.destination, 'default');
                await this.editAvailForm.current.setValue('country', data.default.country, 'default');
                await this.editAvailForm.current.setValue('bases', data.default.bases, 'default');
                await this.editAvailForm.current.setValue('homeBase', data.default.homeBase, 'default');
                const basesJSX = bases.map(b => (<a href="" data-id={b.id} data-name={b.name} onClick={this.onAddBaseLabelClick} className="uk-label uk-margin-small-right za-ad-addBaseLink" key={b.id}>{b.name}</a>));
                await this.editAvailForm.current.setProperty('basesListText', 'text', basesJSX);
                await this.editAvailForm.current.setValue('start', data.default.start, 'default');
                await this.editAvailForm.current.setValue('end', data.default.end, 'default');
            } else {
                const { destinations, countries, bases } = await this.loadDestinations(i18n);
                await this.editAvailForm.current.setValue('destination', destinations && Object.keys(destinations).length ? Object.keys(destinations)[0] : {}, 'default');
                await this.editAvailForm.current.setValue('country', countries && Object.keys(countries).length ? Object.keys(countries)[0] : {}, 'default');
                await this.editAvailForm.current.setProperty('bases', 'suggestions', bases && bases.length ? bases : []);
                await this.editAvailForm.current.setValue('bases', [], 'default');
                await this.editAvailForm.current.setValue('homeBase', bases && bases.length ? bases[0].id : null, 'default');
                const basesJSX = bases.map(b => (<a href="" data-id={b.id} data-name={b.name} onClick={this.onAddBaseLabelClick} className="uk-label uk-margin-small-right za-ad-addBaseLink" key={b.id}>{b.name}</a>));
                await this.editAvailForm.current.setProperty('basesListText', 'text', basesJSX);
                await this.editAvailForm.current.setValue('start', null, 'default');
                await this.editAvailForm.current.setValue('end', null, 'default');
            }
        });
    }

    hideDialog = () => {
        this.boatAvailabilityDialog.hide();
    }

    saveButtonClick = async () => {
        const { data } = this.editAvailForm.current.serializeData();
        const vdata = this.editAvailForm.current.validateData(data);
        await this.editAvailForm.current.hideErrors();
        if (vdata && vdata.length) {
            this.editAvailForm.current.showErrors(vdata);
            return;
        }
        this.hideDialog();
        if (this.props.onAvailabilityDialogSaveClick && typeof this.props.onAvailabilityDialogSaveClick === 'function') {
            const destinations = await this.editAvailForm.current.getProperty('destination', 'values');
            const destination = {
                id: data.default.destination,
                name: destinations[data.default.destination]
            };
            const countries = await this.editAvailForm.current.getProperty('country', 'values');
            const country = {
                id: data.default.country,
                name: countries[data.default.country]
            };
            const bases = await this.editAvailForm.current.getValue('bases');
            const homeBases = await this.editAvailForm.current.getProperty('homeBase', 'values');
            const homeBase = {
                id: data.default.homeBase,
                name: homeBases[data.default.homeBase]
            };
            const { start, end } = data.default;
            this.props.onAvailabilityDialogSaveClick({
                destination,
                country,
                bases,
                homeBase,
                start,
                end
            }, this.recordId);
        }
    }

    render = () => (
        <div>
            <div id="BoatAvailabilityDialog" uk-modal="true">
                <div className="uk-modal-dialog">
                    <div className="uk-modal-header">
                        <h2 className="uk-modal-title">{this.props.i18n._(t`Availability`)}</h2>
                    </div>
                    <div className="uk-modal-body">
                        {this.getEditForm(this.props.i18n)}
                    </div>
                    <div className="uk-modal-footer uk-text-right">
                        <button className="uk-button uk-button-default uk-modal-close uk-margin-small-right" type="button">{this.props.i18n._(t`Cancel`)}</button>
                        <button className="uk-button uk-button-primary" onClick={this.saveButtonClick} type="button">{this.props.i18n._(t`Save`)}</button>
                    </div>
                </div>
            </div>
        </div>
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
    }), null, { forwardRef: true })(BoatAvailabilityDialog);
