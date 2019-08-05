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

class BoatExtrasDialog extends Component {
    constructor(props) {
        super(props);
        this.editExtrasForm = React.createRef();
    }

    componentWillUnmount = () => {
        this.boatExtrasDialog.$destroy(true);
    }

    componentDidMount = () => {
        if (!this.props.appDataRuntime.token) {
            history.push('/users/auth?redirect=/admin/boats');
            return;
        }
        this.boatExtrasDialog = UIkit.modal(`#BoatExtrasDialog`, {
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
        ref={this.editExtrasForm}
        prefix="editExtrasForm"
        UIkit={UIkit}
        axios={axios}
        i18n={i18n}
        locale={this.props.appData.language}
        data={
            [
                {
                    id: 'name',
                    type: 'text',
                    label: `${i18n._(t`Name`)}:`,
                    css: 'uk-form-width-large',
                    autofocus: true,
                    helpText: i18n._(t`Format: NAME_EN|NAME_RU, example: "Option|Опция" (without quotes)`)
                },
                [{
                    id: 'cost',
                    type: 'text',
                    label: `${i18n._(t`Cost`)}:`,
                    css: 'uk-form-width-small',
                },
                {
                    id: 'per1',
                    type: 'select',
                    label: `${i18n._(t`Per`)}:`,
                    css: 'uk-form-width-small',
                    defaultValue: 'stay',
                    values: { stay: i18n._(t`stay`), day: i18n._(t`day`), week: i18n._(t`week`) },
                },
                {
                    id: 'per2',
                    type: 'select',
                    label: `${i18n._(t`Per`)}:`,
                    css: 'uk-form-width-small',
                    defaultValue: 'boat',
                    values: { boat: i18n._(t`boat`), pax: i18n._(t`pax`) },
                }],
                {
                    id: 'options',
                    type: 'checkbox',
                    label: `${i18n._(t`Options`)}:`,
                    values: {
                        mand: i18n._(t`Extra is a mandatory`)
                    }
                }
            ]
        }
        validation={
            {
                name: {
                    mandatory: true,
                    maxLength: 64
                },
                cost: {
                    mandatory: true,
                    regexp: /^\d+(\.\d+)?$/
                },
                per1: {
                    mandatory: true
                },
                per2: {
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
        if (this.editExtrasForm.current) {
            await this.editExtrasForm.current.resetValuesToDefault();
        }
        this.recordId = id || uuid();
        this.boatExtrasDialog.show().then(async () => {
            if (data) {
                await this.editExtrasForm.current.setValue('name', data.default.name, 'default');
                await this.editExtrasForm.current.setValue('cost', data.default.cost, 'default');
                await this.editExtrasForm.current.setValue('per1', data.default.per1, 'default');
                await this.editExtrasForm.current.setValue('per2', data.default.per2, 'default');
                await this.editExtrasForm.current.setValue('options', data.default.options, 'default');
            }
            this.editExtrasForm.current.setFocusOnFields();
        });
    }

    hideDialog = () => {
        this.boatExtrasDialog.hide();
    }

    saveButtonClick = async () => {
        const { data } = this.editExtrasForm.current.serializeData();
        const vdata = this.editExtrasForm.current.validateData(data);
        await this.editExtrasForm.current.hideErrors();
        if (vdata && vdata.length) {
            this.editExtrasForm.current.showErrors(vdata);
            return;
        }
        this.hideDialog();
        if (this.props.onExtrasDialogSaveClick && typeof this.props.onExtrasDialogSaveClick === 'function') {
            const {
                name,
                cost,
                per1,
                per2,
                options
            } = data.default;
            this.props.onExtrasDialogSaveClick({
                name,
                cost,
                per1,
                per2,
                options: options.indexOf('mand') > -1 ? { mand: true } : { mand: false }
            }, this.recordId);
        }
    }

    render = () => (
        <div>
            <div id="BoatExtrasDialog" uk-modal="true">
                <div className="uk-modal-dialog">
                    <div className="uk-modal-header">
                        <h2 className="uk-modal-title">{this.props.i18n._(t`Extras`)}</h2>
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
    }), null, { forwardRef: true })(BoatExtrasDialog);
