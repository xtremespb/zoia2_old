/* eslint-disable react/prop-types */
/* eslint-disable react/no-danger */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import parse, { domToReact } from 'html-react-parser';
import { Link } from 'react-router-dom';
import { Trans } from '@lingui/macro';
import { I18n } from '@lingui/react';

import Template from '../../../../../shared/templates/default.jsx';
import config from '../../../../../etc/config.json';
import appDataRuntimeSetDocumentTitle from '../../../../../shared/actions/appDataRuntimeSetDocumentTitle';

class PageView extends Component {
    state = {
        loading: false,
        content: ''
    }

    loadPage = () => {
        this.setState({
            loading: true
        }, () => {
            axios.post(`${config.apiURL}/api/pages/load`, {
                token: this.props.appDataRuntime.token,
                language: this.props.appData.language,
                path: this.props.location.pathname
            }, { headers: { 'content-type': 'application/json' } }).then(res => {
                if (res.data.statusCode === 200) {
                    const content = parse(res.data.page.data[this.props.appData.language].content, {
                        replace: domNode => {
                            if (domNode.name === 'a' && domNode.attribs && domNode.attribs.href) {
                                return (
                                    <Link to={domNode.attribs.href}>{domToReact(domNode.children)}</Link>
                                );
                            }
                            return null;
                        }
                    });
                    this.props.appDataRuntimeSetDocumentTitleAction(res.data.page.data[this.props.appData.language].title, this.props.appData.language);
                    this.setState({
                        content,
                        loading: false
                    });
                } else {
                    this.setState({
                        loading: false
                    });
                    console.log('Error');
                }
            }).catch(() => {
                this.setState({
                    loading: false
                });
            });
        });
    }

    componentDidUpdate = prevProps => {
        if (prevProps.appData.language !== this.props.appData.language) {
            this.loadPage();
        }
    }

    componentDidMount = () => {
        this.loadPage();
    }

    render = () => (<Template>
        <I18n>
            {this.state.loading ? (<div className="uk-text-small"><span uk-spinner="ratio:0.5" className="uk-margin-small-right" /><Trans>Loading data, please wait…</Trans></div>) : <>{this.state.content}</>}
        </I18n>
    </Template>);
}

export default connect(store => ({
    appData: store.appData,
    appDataRuntime: store.appDataRuntime
}),
    dispatch => ({
        appDataRuntimeSetDocumentTitleAction: (documentTitle, language) => dispatch(appDataRuntimeSetDocumentTitle(documentTitle, language))
    }))(PageView);
