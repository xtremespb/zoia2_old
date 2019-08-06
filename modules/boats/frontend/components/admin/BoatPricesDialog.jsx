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

const FormBuilder = lazy(() => import(/* webpackMode: "lazy", webpackChunkName: "FormBuilder" */'../../../../../shared/components/FormBuilder/index.jsx'));

class BoatPricesDialog extends Component {
    constructor(props) {
        super(props);
        this.editPricesForm = React.createRef();
    }

    componentWillUnmount = () => {
        this.boatPricesDialog.$destroy(true);
    }

    componentDidMount = () => {
        if (!this.props.appDataRuntime.token) {
            history.push('/users/auth?redirect=/admin/boats');
            return;
        }
        this.boatPricesDialog = UIkit.modal(`#BoatPricesDialog`, {
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

    getEditForm = i18n => (<FormBuilder
        ref={this.editPricesForm}
        prefix="editPricesForm"
        UIkit={UIkit}
        axios={axios}
        i18n={i18n}
        doNotSetFocusOnMount={true}
        locale={this.props.appData.language}
        data={
            [
                [{
                    id: 'cost',
                    type: 'text',
                    label: `${i18n._(t`Cost per week`)}:`,
                    css: 'uk-form-width-small',
                    autofocus: true
                },
                {
                    id: 'currency',
                    type: 'select',
                    label: `${i18n._(t`Currency`)}:`,
                    css: 'uk-form-width-small',
                    defaultValue: 'RUR',
                    values: { EUR: 'EUR', USD: 'USD', RUR: 'RUR' },
                }],
                [{
                    id: 'start',
                    type: 'datePicker',
                    label: `${i18n._(t`Start date`)}:`,
                    css: 'uk-form-width-medium',
                    value: '',
                }, {
                    id: 'end',
                    type: 'datePicker',
                    label: `${i18n._(t`End date`)}:`,
                    css: 'uk-form-width-medium',
                    value: ''
                }]
            ]
        }
        validation={
            {
                start: {
                    mandatory: true
                },
                end: {
                    mandatory: true
                },
                cost: {
                    mandatory: true,
                    regexp: /^\d+(\.\d+)?$/
                },
                currency: {
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
        onDataDeserialized={data => this.loadDestinations(i18n, data)}
    />);

    reloadEditFormData = e => {
        e.preventDefault();
    }

    showDialog = async (i18n, id, data) => {
        if (this.editPricesForm.current) {
            await this.editPricesForm.current.resetValuesToDefault();
        }
        this.recordId = id || uuid();
        this.boatPricesDialog.show().then(async () => {
            if (data) {
                await this.editPricesForm.current.setValue('cost', data.default.cost, 'default');
                await this.editPricesForm.current.setValue('currency', data.default.currency, 'default');
                await this.editPricesForm.current.setValue('start', data.default.start, 'default');
                await this.editPricesForm.current.setValue('end', data.default.end, 'default');
            }
            this.editPricesForm.current.setFocusOnFields();
        });
    }

    hideDialog = () => {
        this.boatPricesDialog.hide();
    }

    saveButtonClick = async () => {
        const { data } = this.editPricesForm.current.serializeData();
        const vdata = this.editPricesForm.current.validateData(data);
        await this.editPricesForm.current.hideErrors();
        if (vdata && vdata.length) {
            this.editPricesForm.current.showErrors(vdata);
            return;
        }
        this.hideDialog();
        if (this.props.onPricesDialogSaveClick && typeof this.props.onPricesDialogSaveClick === 'function') {
            const {
                start,
                end,
                cost,
                currency
            } = data.default;
            this.props.onPricesDialogSaveClick({
                start,
                end,
                cost,
                currency
            }, this.recordId);
        }
    }

    render = () => (
        <div>
            <div id="BoatPricesDialog" uk-modal="true">
                <div className="uk-modal-dialog">
                    <div className="uk-modal-header">
                        <h2 className="uk-modal-title">{this.props.i18n._(t`Prices`)}</h2>
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
    }), null, { forwardRef: true })(BoatPricesDialog);
