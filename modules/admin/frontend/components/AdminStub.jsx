/* eslint-disable react/prop-types */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { history } from '../../../../shared/store/configureStore';
import modules from '../../../../etc/modules.json';

class AdminStub extends Component {
    componentDidMount = () => {
        history.push(modules.admin.defaultAdminRoute);
    }

    render = () => (<></>)
}

export default connect(() => ({}))(AdminStub);
