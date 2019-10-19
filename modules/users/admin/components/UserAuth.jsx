/* eslint-disable react/prop-types */

import React, { lazy, Component } from 'react';
import { I18nProvider, I18n } from '@lingui/react';
import { Trans, t } from '@lingui/macro';
import { connect } from 'react-redux';
import axios from 'axios';
import queryString from 'query-string';
import cookies from 'cookies-js';
import appDataRuntimeGetConfig from '../../../../shared/actions/appDataRuntimeGetConfig';
import UIkit from '../../../../shared/utils/uikit';

import { history } from '../../../../shared/store/configureStore';
import api from '../../../../static/etc/api.json';
import appDataSetLanguage from '../../../../shared/actions/appDataSetLanguage';
import appDataRuntimeSetToken from '../../../../shared/actions/appDataRuntimeSetToken';
import appDataSetUser from '../../../../shared/actions/appDataSetUser';
import appLinguiSetCatalog from '../../../../shared/actions/appLinguiSetCatalog';
import appDataRuntimeSetDocumentTitle from '../../../../shared/actions/appDataRuntimeSetDocumentTitle';

const FormBuilder = lazy(() => import(/* webpackMode: "lazy", webpackChunkName: "FormBuilder" */'../../../../shared/react/FormBuilder/index.jsx'));

import(/* webpackChunkName: "UserAuth" */ './UserAuth.css');

class UserAuth extends Component {
    state = {
        language: this.props.appData.language,
        catalogs: this.props.appLingui.catalogs
    }

    mounted = false;

    constructor(props) {
        super(props);
        this.loadCatalog(this.state.language);
    }

    componentDidMount = () => {
        this.props.appDataRuntimeGetConfigAction();
        document.getElementById('app').classList.add('uk-flex', 'uk-flex-center', 'uk-flex-middle', 'za-users-appTheme');
        this.query = queryString.parse(window.location.search);
        if (this.props.appDataRuntime.token) {
            history.push(this.query.redirect || '/');
        }
        this.mounted = true;
    }

    componentWillUnmount = () => {
        this.mounted = false;
        document.getElementById('app').classList.remove('uk-flex', 'uk-flex-center', 'uk-flex-middle', 'za-users-appTheme');
    }

    loadCatalog = async (language) => {
        const catalog = await import(/* webpackMode: "lazy", webpackChunkName: "i18n_admin_[index]" */`../../../../shared/locales/admin/${language}/messages.js`);
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
                this.props.appLinguiSetCatalogAction(language, catalog);
                return newData;
            });
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        const { catalogs, language } = nextState;
        if (language !== this.props.appData.language && !catalogs[language]) {
            this.loadCatalog(language);
            return false;
        }
        return true;
    }

    onSaveSuccessHandler = (response, i18n) => {
        if (response.data.statusCode === 200 && response.data.token) {
            this.props.appDataRuntimeSetToken(response.data.token);
            this.props.appDataSetUserAction(response.data.user);
            document.getElementById('app').classList.remove('uk-flex', 'uk-flex-center', 'uk-flex-middle', 'za-ua-appTheme');
            cookies.set(`${this.props.appDataRuntime.site.id}_auth`, response.data.token, this.props.appDataRuntime.site.cookieOptions);
            return history.push(this.query.redirect || '/');
        }
        if (response.data.statusCode === 403) {
            return UIkit.notification(i18n._(t`Invalid username or password`), { status: 'danger' });
        }
        return UIkit.notification(i18n._(t`Could not authorize`), { status: 'danger' });
    }

    render = () => {
        const { catalogs, language } = this.state;
        if (!catalogs || !catalogs[language]) {
            return null;
        }
        return (<I18nProvider language={this.props.appData.language} catalogs={this.state.catalogs}>
            <I18n>{({ i18n }) => {
                if (Object.keys(this.props.appDataRuntime.config).length > 1) {
                    this.props.appDataRuntimeSetDocumentTitleAction(i18n._(t`Authorize`), this.props.appData.language, this.props.appDataRuntime.config.siteTitle);
                    return (<div className="uk-card uk-card-default uk-card-body uk-card-small">
                        <FormBuilder
                            prefix="za_users_authForm"
                            simple={true}
                            UIkit={UIkit}
                            axios={axios}
                            i18n={i18n}
                            data={
                                [{
                                    id: 'username',
                                    type: 'text',
                                    css: 'uk-width-1-1',
                                    label: `${i18n._(t`Username`)}:`,
                                    autofocus: true
                                },
                                {
                                    id: 'password',
                                    type: 'password',
                                    css: 'uk-width-1-1',
                                    label: `${i18n._(t`Password`)}:`,
                                },
                                {
                                    id: 'divider1',
                                    type: 'divider',
                                    css: 'za-users-auth-form-divider'
                                },
                                {
                                    id: 'btnLogin',
                                    type: 'button',
                                    buttonType: 'submit',
                                    css: 'uk-button-primary uk-width-1-1 uk-button-large',
                                    label: i18n._(t`Authorize`)
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
                                ERR_VMANDATORY: i18n._(t`Field is required`),
                                ERR_VFORMAT: i18n._(t`Invalid format`),
                                ERR_SAVE: i18n._(t`Could not authorize on server`),
                            }}
                            save={{
                                url: `${api.url}/api/users/login`,
                                method: 'POST'
                            }}
                            onSaveSuccess={response => this.onSaveSuccessHandler(response, i18n)}
                        />
                    </div>
                    );
                }
                if (!this.props.appDataRuntime.configError) {
                    return (<div className="uk-margin-left uk-margin-top"><div className="uk-margin-small-right" uk-spinner="ratio:0.5" /><Trans>Loading site configuration…</Trans></div>);
                }
                return (<div className="uk-alert-danger uk-box-shadow-small" uk-alert="true">
                    <a className="uk-alert-close" uk-close="true" />
                    <p><Trans>Could not load site configuration. Please try to reload the page to try again.</Trans>&nbsp;&nbsp;&nbsp;</p>
                </div>);
            }}</I18n>
        </I18nProvider>);
    };
}

export default connect(store => ({
    appData: store.appData,
    appDataRuntime: store.appDataRuntime,
    appLingui: store.appLingui
}),
    dispatch => ({
        appDataSetLanguageAction: language => dispatch(appDataSetLanguage(language)),
        appDataRuntimeSetToken: token => dispatch(appDataRuntimeSetToken(token)),
        appDataSetUserAction: user => dispatch(appDataSetUser(user)),
        appLinguiSetCatalogAction: (language, catalog) => dispatch(appLinguiSetCatalog(language, catalog)),
        appDataRuntimeGetConfigAction: () => dispatch(appDataRuntimeGetConfig()),
        appDataRuntimeSetDocumentTitleAction: (documentTitle, language, siteTitle) => dispatch(appDataRuntimeSetDocumentTitle(documentTitle, language, siteTitle))
    }))(UserAuth);
