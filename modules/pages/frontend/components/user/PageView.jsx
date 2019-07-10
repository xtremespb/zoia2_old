/* eslint-disable react/prop-types */

import React, { Component } from 'react';
import { I18nProvider, I18n } from '@lingui/react';
import { connect } from 'react-redux';
import queryString from 'query-string';

import appDataSetLanguage from '../../../../../shared/actions/appDataSetLanguage';
import appLinguiSetCatalog from '../../../../../shared/actions/appLinguiSetCatalog';

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
        this.query = queryString.parse(window.location.search);
        this.mounted = true;
    }

    componentWillUnmount = () => {
        this.mounted = false;
    }

    loadCatalog = async (language) => {
        const catalog = await import(/* webpackMode: "lazy", webpackChunkName: "i18n_user_[index]" */`../../../../../shared/locales/user/${language}/messages.js`);
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

    render = () => {
        const { catalogs, language } = this.state;
        if (!catalogs || !catalogs[language]) {
            return null;
        }
        return (<I18nProvider language={this.props.appData.language} catalogs={this.state.catalogs}>
            <I18n>{({ i18n }) => (<div>
                OK Computer<br />
                {this.props.location.pathname}
            </div>)}</I18n>
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
        appLinguiSetCatalogAction: (language, catalog) => dispatch(appLinguiSetCatalog(language, catalog))
    }))(UserAuth);
