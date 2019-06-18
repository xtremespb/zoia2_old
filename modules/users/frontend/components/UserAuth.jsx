/* eslint-disable react/prop-types */

import React, { Component } from 'react';
import { I18nProvider } from '@lingui/react';
import { Trans } from '@lingui/macro';
import { setupI18n } from '@lingui/core';
import { connect } from 'react-redux';
import UIkit from 'uikit';
import axios from 'axios';
import { Link } from 'react-router-dom';
import queryString from 'query-string';

import { history } from '../../../../shared/store/configureStore';
import FormBuilder from '../../../../shared/components/FormBuilder/index.jsx';
import appDataSetLanguage from '../../../../shared/actions/appDataSetLanguage';
import appDataSetToken from '../../../../shared/actions/appDataSetToken';
import appLinguiSetCatalog from '../../../../shared/actions/appLinguiSetCatalog';

import(/* webpackChunkName: "UserAuth" */ './UserAuth.css');

class UserAuth extends Component {
    state = {
        language: this.props.appData.language,
        catalogs: this.props.appLingui.catalogs
    }

    mounted = false;

    constructor(props) {
        super(props);
        if (!this.state.catalogs[this.state.language]) {
            this.loadCatalog(this.state.language);
        } else {
            this.i18n = setupI18n({ language: this.state.language, catalogs: this.state.catalogs });
        }
    }

    componentDidMount = () => {
        document.getElementById('app').classList.add('uk-flex', 'uk-flex-center', 'uk-flex-middle');
        const query = queryString.parse(window.location.search);
        if (this.props.appData.token) {
            history.push(query.redirect || '/');
        }
        this.mounted = true;
    }

    componentWillUnmount = () => {
        this.mounted = false;
    }

    loadCatalog = async (language) => {
        const catalog = await import(/* webpackMode: "lazy", webpackChunkName: "i18n_[index]" */`../../../../shared/locales/${language}/messages.js`);
        if (this.mounted) {
            this.setState(state => {
                const catalogs = {
                    ...state.catalogs,
                    [language]: catalog
                };
                const newData = {
                    language,
                    catalogs
                };
                this.i18n = setupI18n(newData);
                this.props.appLinguiSetCatalogAction(language, catalog);
                return newData;
            });
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        const { catalogs, language } = nextState;
        if (language !== this.props.appData.language) {
            if (!catalogs[language]) {
                this.loadCatalog(language);
                return false;
            }
            this.i18n = setupI18n({
                language,
                catalogs
            });
        }
        return true;
    }

    onSaveSuccessHandler = response => {
        if (response.data.statusCode === 200 && response.data.token) {
            this.props.appDataSetTokenAction(response.data.token);
        }
    }

    render = () => {
        const { catalogs, language } = this.state;
        if (!catalogs || !catalogs[language]) {
            return null;
        }
        return (<I18nProvider language={this.props.appData.language} catalogs={this.state.catalogs}>
            <div className="uk-card uk-card-default uk-card-body uk-card-small">
                <FormBuilder
                    prefix="authForm"
                    simple={true}
                    UIkit={UIkit}
                    axios={axios}
                    data={
                        [{
                            id: 'username',
                            type: 'text',
                            css: 'uk-width-1-1',
                            label: <Trans>Username:</Trans>,
                            autofocus: true
                        },
                        {
                            id: 'password',
                            type: 'password',
                            css: 'uk-width-1-1',
                            label: <Trans>Password:</Trans>
                        },
                        {
                            id: 'divider1',
                            type: 'divider'
                        },
                        {
                            id: 'btnLogin',
                            type: 'button',
                            buttonType: 'submit',
                            css: 'uk-button-primary uk-width-1-1 uk-button-large',
                            label: <Trans>Authorize</Trans>
                        }]
                    }
                    validation={
                        {
                            username: {
                                mandatory: true,
                                regexp: /^[a-zA-Z0-9_-]+$/
                            },
                            password: {
                                mandatory: true
                            }
                        }
                    }
                    lang={{
                        ERR_VMANDATORY: this.i18n._('Field is required'),
                        ERR_VFORMAT: this.i18n._('Invalid format'),
                        ERR_LOAD: this.i18n._('Could not load data from server'),
                        ERR_SAVE: this.i18n._('Could not save data'),
                        WILL_BE_DELETED: this.i18n._('will be deleted. Are you sure?'),
                        YES: this.i18n._('Yes'),
                        CANCEL: this.i18n._('Cancel')
                    }}
                    save={{
                        url: 'http://127.0.0.1:3000/api/users/login',
                        method: 'POST'
                    }}
                    onSaveSuccess={response => this.onSaveSuccessHandler(response)}
                />
                <div className="uk-text-center uk-text-small uk-margin-top">
                    <Link to="/users/register"><Trans>Create Account</Trans></Link>
                    &nbsp;|&nbsp;
                    <Link to="/users/password"><Trans>Forgot Password</Trans></Link>
                </div>
            </div>
        </I18nProvider>);
    };
}

export default connect(store => ({
    appData: store.appData,
    appLingui: store.appLingui
}),
    dispatch => ({
        appDataSetLanguageAction: language => dispatch(appDataSetLanguage(language)),
        appDataSetTokenAction: token => dispatch(appDataSetToken(token)),
        appLinguiSetCatalogAction: (language, catalog) => dispatch(appLinguiSetCatalog(language, catalog))
    }))(UserAuth);
