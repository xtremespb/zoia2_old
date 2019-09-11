/* eslint-disable react/prop-types */

import React, { Component } from 'react';
import { I18nProvider } from '@lingui/react';
import { connect } from 'react-redux';

import appDataSetLanguage from '../actions/appDataSetLanguage';
import appLinguiSetCatalog from '../actions/appLinguiSetCatalog';
import appDataRuntimeGetConfig from '../actions/appDataRuntimeGetConfig';

import config from '../../etc/config.json';

import '../styles/flags.css';

class ZoiaTemplate extends Component {
    state = {
        language: this.props.appData.language,
        catalogs: this.props.appLingui.catalogs
    }

    constructor(props) {
        super(props);
        this.loadCatalog(this.state.language);
    }

    componentDidMount = () => {
        this.props.appDataRuntimeGetConfigAction();
    }

    loadCatalog = async (language) => {
        const catalog = await import(/* webpackMode: "lazy", webpackChunkName: "i18n_admin_[index]" */`../locales/combined/user/${language}/messages.js`);
        this.setState(state => {
            const catalogs = {
                ...state.catalogs,
                [language]: catalog
            };
            this.props.appLinguiSetCatalogAction(language, catalog);
            return {
                language,
                catalogs
            };
        });
    }

    shouldComponentUpdate(nextProps, nextState) {
        const { catalogs, language } = nextState;
        if (language !== this.props.appData.language && !catalogs[language]) {
            this.loadCatalog(language);
            return false;
        }
        return true;
    }

    onLanguageClick = e => {
        // A hack to hide dropdown faster
        // UIkit's "hide" is a way too slow (bug?)
        document.getElementById('za-user-languages-select').click();
        this.setState({
            language: e.currentTarget.dataset.lang
        });
        this.props.appDataSetLanguageAction(e.currentTarget.dataset.lang);
    }

    getLanguagesList = prefix => Object.keys(config.languages).map(lang => (<li key={`${prefix}_${lang}`}><a href="#" data-lang={lang} onClick={this.onLanguageClick}><span className={`flag-icon flag-icon-${lang}`} />&nbsp;&nbsp;{config.languages[lang]}</a></li>));

    render = () => {
        const { catalogs, language } = this.state;
        if (!catalogs || !catalogs[language]) {
            return null;
        }
        return (<I18nProvider language={this.props.appData.language} catalogs={this.state.catalogs}>
            <div className="uk-container" uk-navbar="true">
                <div className="uk-navbar-left uk-margin-top">
                    <img src="/zoia/logo_dark.png" width="114" height="40" alt="" />
                </div>
                <div className="uk-navbar-right uk-margin-top">
                    <ul className="uk-navbar-nav">
                        <li>
                            <a href="#"><span className={`flag-icon flag-icon-${this.props.appData.language}`} id="za-user-languages-select" />&nbsp;</a>
                            <div className="uk-navbar-dropdown" uk-dropdown="mode:click;offset:-20;pos:top-right">
                                <ul className="uk-nav uk-navbar-dropdown-nav">
                                    {this.getLanguagesList('desktop')}
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="uk-container uk-margin-top">
                {this.props.children}
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
        appLinguiSetCatalogAction: (language, catalog) => dispatch(appLinguiSetCatalog(language, catalog)),
        appDataRuntimeGetConfigAction: () => dispatch(appDataRuntimeGetConfig())
    }))(ZoiaTemplate);
