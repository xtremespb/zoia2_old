/* eslint-disable react/prop-types */

import React, { Component } from 'react';
import { I18nProvider } from '@lingui/react';
import { connect } from 'react-redux';

import appDataSetLanguage from '../actions/appDataSetLanguage';
import appLinguiSetCatalog from '../actions/appLinguiSetCatalog';

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

    loadCatalog = async (language) => {
        const catalog = await import(/* webpackMode: "lazy", webpackChunkName: "i18n_admin_[index]" */`../locales/user/${language}/messages.js`);
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
                            <a href="#"><span className={`flag-icon flag-icon-${this.props.appData.language}`} /></a>
                            <div className="uk-navbar-dropdown" uk-dropdown="mode:click;offset:-20">
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
        appLinguiSetCatalogAction: (language, catalog) => dispatch(appLinguiSetCatalog(language, catalog))
    }))(ZoiaTemplate);
