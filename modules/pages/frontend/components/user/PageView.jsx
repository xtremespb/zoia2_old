/* eslint-disable react/prop-types */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import Template from '../../../../../shared/templates/default.jsx';

class PageView extends Component {
    mounted = false;

    componentDidMount = () => {
        this.mounted = true;
    }

    componentWillUnmount = () => {
        this.mounted = false;
    }

    render = () => (<Template>Hello world</Template>);
}

export default connect(store => ({
    appData: store.appData,
    appDataRuntime: store.appDataRuntime
}),
    () => ({}))(PageView);
