import React, { Component } from 'react';
import { I18nProvider } from '@lingui/react';
import { Trans, t } from '@lingui/macro';
import { setupI18n } from '@lingui/core';

import './admin.css';
import modulesData from '../../etc/modules.json';

class AdminPanel extends Component {

    state = {
        lang: 'en',
        catalogs: {}
    }

    constructor(props) {
        super(props);
        this.loadCatalog(this.state.lang).then(() => (this.i18n = setupI18n({
            language: this.state.lang,
            catalogs: this.state.catalogs
        })));
    }

    loadCatalog = async (language) => {
        console.log(`Loading ${language}`);
        const catalog = await import(
            /* webpackMode: "lazy", webpackChunkName: "i18n_[index]" */
            `../../src/locales/${language}/messages.js`);
        console.log('Done');
        this.setState(state => ({
            catalogs: {
                ...state.catalogs,
                [language]: catalog
            }
        }));
    }

    resizeNav = () => document.getElementById('z2a_nav_wrap') ? document.getElementById('z2a_nav_wrap').style.height = `${window.innerHeight - 64}px` : null;

    componentDidMount = () => {
        window.onresize = this.resizeNav;
        this.resizeNav();
        this.loadCatalog(this.state.lang);
    }

    shouldComponentUpdate(nextProps, nextState) {
        const { catalogs, lang } = nextState;
        if (lang !== this.props.lang && !catalogs[lang]) {
            this.loadCatalog(lang);
            return false;
        }
        return true;
    }

    getModulesList = prefix => this.i18n ? Object.keys(modulesData).map(id => (<li key={`${prefix}_${id}`}><a href={`/admin/${id}/index.html`}>{this.i18n._(t(id))}</a></li>)) : null;

    render = () => {
        const { catalogs, lang } = this.state;
        if (!catalogs[lang]) {
            return null;
        }
        return (<I18nProvider language={this.state.lang} catalogs={this.state.catalogs}>
            <div>
                <nav className="uk-navbar-container uk-dark" uk-navbar="true" uk-sticky="true">
                    <div className="uk-navbar-left">
                        <div className="uk-navbar-item uk-logo">
                            <span className="uk-hidden@m"><a href="" className="uk-icon-link" uk-icon="icon:menu;ratio:1.2" uk-toggle="target: #offcanvas-nav" />&nbsp;</span><a href=""><img src="/zoia/logo.png" width="83" height="27" alt="" /></a>
                        </div>
                    </div>
                    <div className="uk-navbar-right">
                        <ul className="uk-navbar-nav">
                            <li>
                                <a href="#">username</a>
                                <div className="uk-navbar-dropdown" uk-dropdown="mode:click;offset:-10">
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
                            <button onClick={() => this.setState({ lang: 'ru' })}>Ru!</button>
                            <button onClick={() => this.setState({ lang: 'en' })}>En!</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="offcanvas-nav" uk-offcanvas="overlay:true">
                <div className="uk-offcanvas-bar">
                    <ul className="uk-nav uk-nav-default">
                        <li><a href="">Item</a></li>
                    </ul>
                </div>
            </div>
        </I18nProvider>);
    };
}

export default AdminPanel;
