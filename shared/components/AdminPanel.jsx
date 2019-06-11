import React, { Component } from 'react';
import { I18nProvider } from '@lingui/react';
import { Trans } from '@lingui/macro';
import { setupI18n } from '@lingui/core';
import { connect } from 'react-redux';

import appDataSetLanguage from '../actions/appDataSetLanguage';

import './admin.css';
import modulesData from '../../etc/modules.json';
import config from '../../etc/config.json';

class AdminPanel extends Component {

    state = {
        language: this.props.appData ? this.props.appData.language : 'en',
        catalogs: {}
    }

    constructor(props) {
        super(props);
        this.loadCatalog(this.state.language);
    }

    loadCatalog = async (language) => {
        const catalog = await import(
            /* webpackMode: "lazy", webpackChunkName: "i18n_[index]" */
            `../../src/locales/${language}/messages.js`);
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
            return newData;
        });
    }

    resizeNav = () => document.getElementById('z2a_nav_wrap') ? document.getElementById('z2a_nav_wrap').style.height = `${window.innerHeight - 64}px` : null;

    componentDidMount = () => {
        window.onresize = this.resizeNav;
        this.resizeNav();
    }

    shouldComponentUpdate(nextProps, nextState) {
        const { catalogs, language } = nextState;
        if (language !== this.props.appData && this.props.appData.language ? this.props.appData.language : 'en') {
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

    getModulesList = prefix => this.i18n ? Object.keys(modulesData).map(id => (<li key={`${prefix}_${id}`}><a href={`/admin/${id}/index.html`}><span uk-icon={`icon:${modulesData[id].icon};ratio:0.95`} />&nbsp;{this.i18n._(id)}</a></li>)) : null;

    onLanguageClick = e => {
        e.preventDefault();
        this.setState({
            language: e.currentTarget.dataset.lang
        });
        this.props.appDataSetLanguageAction(e.currentTarget.dataset.lang);
    }

    getLanguagesList = prefix => Object.keys(config.languages).map(lang => (<li key={`${prefix}_${lang}`}><a href="" data-lang={lang} onClick={this.onLanguageClick}><span className={`flag-icon flag-icon-${lang}`} />&nbsp;&nbsp;{config.languages[lang]}</a></li>));

    render = () => {
        const { catalogs, language } = this.state;
        if (!catalogs[language]) {
            return null;
        }
        return (<I18nProvider language={this.props.appData ? this.props.appData.language : 'en'} catalogs={this.state.catalogs}>
            <div>
                <nav className="uk-navbar-container uk-dark" uk-navbar="true" uk-sticky="true">
                    <div className="uk-navbar-left">
                        <div className="uk-navbar-item uk-logo">
                            <span className="uk-hidden@m uk-margin-small-right"><a href="" className="uk-icon-link" uk-icon="icon:menu;ratio:1.5" uk-toggle="target: #offcanvas-nav" />&nbsp;</span><a href=""><img src="/zoia/logo.png" width="86" height="30" alt="" /></a>
                        </div>
                    </div>
                    <div className="uk-navbar-right">
                        <ul className="uk-navbar-nav">
                            <li>
                                <a href="#"><span className={`flag-icon flag-icon-${this.props.appData ? this.props.appData.language : 'en'} flag-icon-switch`} /></a>
                                <div className="uk-navbar-dropdown" uk-dropdown="mode:click;offset:-20">
                                    <ul className="uk-nav uk-navbar-dropdown-nav">
                                        {this.getLanguagesList('desktop')}
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <a href="#">username</a>
                                <div className="uk-navbar-dropdown" uk-dropdown="mode:click;offset:-20">
                                    <ul className="uk-nav uk-navbar-dropdown-nav">
                                        <li><a href=""><Trans>Log Out</Trans></a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="uk-grid-collapse uk-grid">
                    <div className="uk-width-small z2a-navleft-column-wrap uk-visible@m">
                        <div>
                            <div id="z2a_nav_wrap">
                                <div className="z2a-navleft">
                                    <ul className="uk-nav uk-nav-default">
                                        {this.getModulesList('desktop')}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="uk-width-expand">
                        <div className="z2a-content-wrap">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
            <div id="offcanvas-nav" uk-offcanvas="overlay:true">
                <div className="uk-offcanvas-bar">
                    <ul className="uk-nav uk-nav-default">
                        {this.getModulesList('mobile')}
                    </ul>
                </div>
            </div>
        </I18nProvider>);
    };
}

export default connect(store => ({
    appData: store.appData
}),
    dispatch => ({
        appDataSetLanguageAction: language => dispatch(appDataSetLanguage(language))
    })
)(AdminPanel);
