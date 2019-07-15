/* eslint-disable react/prop-types */
/* eslint-disable react/no-danger */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import parse, { domToReact } from 'html-react-parser';
import { Link } from 'react-router-dom';

import Template from '../../../../../shared/templates/default.jsx';
import config from '../../../../../etc/config.json';

class PageView extends Component {
    state = {
        content: ''
    }

    loadPage = () => {
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
                this.setState({
                    content
                });
            } else {
                console.log('Error');
            }
        }).catch(() => { });
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
        {this.state.content}
    </Template>);
}

export default connect(store => ({
    appData: store.appData,
    appDataRuntime: store.appDataRuntime
}),
    () => ({}))(PageView);
