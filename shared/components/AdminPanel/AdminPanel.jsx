/* eslint-disable react/prop-types */

import React, { Component } from 'react';
import { I18nProvider, I18n } from '@lingui/react';
import { Trans } from '@lingui/macro';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import appDataSetLanguage from '../../actions/appDataSetLanguage';
import appLinguiSetCatalog from '../../actions/appLinguiSetCatalog';
import appDataRuntimeGetConfig from '../../actions/appDataRuntimeGetConfig';
import UIkit from '../../utils/uikit';

import modulesData from '../../build/modules.json';
import config from '../../../etc/config.json';

import './AdminPanel.css';
import '../../styles/flags.css';

class AdminPanel extends Component {
    state = {
        language: this.props.appData.language,
        catalogs: this.props.appLingui.catalogs
    }

    constructor(props) {
        super(props);
        this.loadCatalog(this.state.language);
    }

    loadCatalog = async (language) => {
        const catalog = await import(/* webpackMode: "lazy", webpackChunkName: "i18n_admin_[index]" */`../../locales/combined/admin/${language}/messages.js`);
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

    resizeNav = () => document.getElementById('za_admin_nav_wrap') ? document.getElementById('za_admin_nav_wrap').style.height = `${window.innerHeight - 64}px` : null;

    componentDidMount = () => {
        window.onresize = this.resizeNav;
        this.resizeNav();
        this.props.appDataRuntimeGetConfigAction();
    }

    componentWillUnmount = () => {
        UIkit.offcanvas('#offcanvas-nav').$destroy(true);
    }

    shouldComponentUpdate(nextProps, nextState) {
        const { catalogs, language } = nextState;
        if (language !== this.props.appData.language && !catalogs[language]) {
            this.loadCatalog(language);
            return false;
        }
        return true;
    }

    getModulesList = prefix => (
        <I18n>
            {({ i18n }) => (Object.keys(modulesData).map(id => modulesData[id].admin ? (<li key={`${prefix}_${id}`}><Link to={modulesData[id].adminRoute}><span uk-icon={`icon:${modulesData[id].icon};ratio:0.95`} />&nbsp;&nbsp;{i18n._(id)}</Link></li>) : null))}
        </I18n>
    );

    onLanguageClick = e => {
        e.preventDefault();
        // A hack to hide dropdown faster
        // UIkit's "hide" is a way too slow (bug?)
        document.getElementById('za-admin-languages-select').click();
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
            {Object.keys(this.props.appDataRuntime.config).length ? (<><div>
                <nav className="uk-navbar-container za-admin-navbar uk-dark" uk-navbar="true" uk-sticky="true">
                    <div className="uk-navbar-left za-admin-navbar-left">
                        <div className="uk-navbar-item uk-logo">
                            <span className="uk-hidden@m uk-margin-small-right"><a href="" className="uk-icon-link" uk-icon="icon:menu;ratio:1.5" uk-toggle="target: #offcanvas-nav" />&nbsp;</span><Link to="/admin"><img src="/zoia/logo.png" width="86" height="30" alt="" /></Link>
                        </div>
                    </div>
                    <div className="uk-navbar-right za-admin-navbar-right">
                        <ul className="uk-navbar-nav">
                            <li>
                                <a href="#">{this.props.appData.user.username}&nbsp;<span uk-icon="triangle-down" /></a>
                                <div className="uk-navbar-dropdown" uk-dropdown="mode:click;offset:-20;pos:top-right">
                                    <ul className="uk-nav uk-navbar-dropdown-nav">
                                        <li><Link to="/users/logout"><Trans>Log Out</Trans></Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <a href="#"><span className={`flag-icon flag-icon-${this.props.appData.language} flag-icon-switch`} id="za-admin-languages-select" />&nbsp;&nbsp;</a>
                                <div className="uk-navbar-dropdown" uk-dropdown="mode:click;offset:-20;pos:top-right">
                                    <ul className="uk-nav uk-navbar-dropdown-nav">
                                        {this.getLanguagesList('desktop')}
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="uk-grid-collapse uk-grid">
                    <div className="uk-width-small za-admin-navleft-column-wrap uk-visible@m">
                        <div>
                            <div id="za_admin_nav_wrap">
                                <div className="za-admin-navleft">
                                    <ul className="uk-nav uk-nav-default">
                                        {this.getModulesList('desktop')}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="uk-width-expand">
                        <div className="za-admin-content-wrap">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
                <div>
                    <div id="offcanvas-nav" uk-offcanvas="overlay:true">
                        <div className="uk-offcanvas-bar">
                            <ul className="uk-nav uk-nav-default">
                                {this.getModulesList('mobile')}
                            </ul>
                        </div>
                    </div>
                </div></>) : !this.props.appDataRuntime.configError ? <></> : null}
            {this.props.appDataRuntime.configError ? <></> : null}
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
        appLinguiSetCatalogAction: (language, catalog) => dispatch(appLinguiSetCatalog(language, catalog)),
        appDataRuntimeGetConfigAction: () => dispatch(appDataRuntimeGetConfig())
    }))(AdminPanel);
