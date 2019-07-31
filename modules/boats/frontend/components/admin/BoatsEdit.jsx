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
import BoatAvailabilityDialog from './BoatAvailabilityDialog.jsx';

const AdminPanel = lazy(() => import(/* webpackMode: "lazy", webpackChunkName: "AdminPanel" */'../../../../../shared/components/AdminPanel/AdminPanel.jsx'));
const FormBuilder = lazy(() => import(/* webpackMode: "lazy", webpackChunkName: "FormBuilder" */'../../../../../shared/components/FormBuilder/index.jsx'));

class BoatsEdit extends Component {
    constructor(props) {
        super(props);
        this.editBoatsForm = React.createRef();
        this.boatAvailabilityDialog = React.createRef();
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

    onAddAvailClick = i18n => {
        this.boatAvailabilityDialog.current.showDialog(i18n, null);
    }

    onEditAvailClick = (e, item, i18n) => {
        e.preventDefault();
        const data = {
            default: {
                destination: item.destination.id,
                country: item.country.id,
                bases: item.bases
            }
        };
        this.boatAvailabilityDialog.current.showDialog(i18n, item.id, data);
    }

    getEditForm = i18n => (<FormBuilder
        ref={this.editBoatsForm}
        prefix="editBoatsForm"
        UIkit={UIkit}
        axios={axios}
        i18n={i18n}
        data={[
            {
                id: 'avail',
                type: 'data',
                label: `${i18n._(t`Availability`)}:`,
                css: 'uk-form-width-large',
                placeholderText: i18n._(t`Add or remove availability data`),
                buttons: (<button type="button" className="uk-button uk-button-primary uk-button-small" onClick={() => this.onAddAvailClick(i18n)}>{i18n._(t`Add`)}</button>),
                view: data => (<div key={data.id}>ID : {data.id} --- {data.destination.name} <a href="" onClick={e => this.onEditAvailClick(e, data, i18n)}>[ Edit ]</a></div>)
            },
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
                    label: i18n._(t`Cancel`)
                }, {
                    id: 'btnSave',
                    type: 'button',
                    buttonType: 'submit',
                    css: 'uk-button-primary',
                    label: i18n._(t`Save`)
                }
            ]
        ]}
        validation={
            {
                name: {
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
    />);

    reloadEditFormData = e => {
        e.preventDefault();
        this.setState({ loadingError: false });
    }

    onAvailabilityDialogSaveClick = async (formData, id) => {
        const data = formData;
        const availValues = await this.editBoatsForm.current.getValue('avail');
        let index;
        console.log(availValues);
        availValues.map((v, i) => {
            if (v.id === id) {
                index = i;
            }
        });
        data.id = id;
        if (index) {
            availValues[index] = data;
        } else {
            availValues.push(data);
        }
        await this.editBoatsForm.current.setValue('avail', availValues);
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
                        <BoatAvailabilityDialog
                            ref={this.boatAvailabilityDialog}
                            onAvailabilityDialogSaveClick={this.onAvailabilityDialogSaveClick}
                            i18n={i18n}
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
    appLingui: store.appLingui
}),
    dispatch => ({
        appDataRuntimeSetTokenAction: token => dispatch(appDataRuntimeSetToken(token)),
        appDataSetUserAction: user => dispatch(appDataSetUser(user)),
        appDataRuntimeSetDocumentTitleAction: (documentTitle, language) => dispatch(appDataRuntimeSetDocumentTitle(documentTitle, language))
    }))(BoatsEdit);
