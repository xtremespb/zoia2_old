/* eslint-disable react/prop-types */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import appDataRuntimeLogout from '../../../../shared/actions/appDataRuntimeLogout';

class UserLogout extends Component {
    componentDidMount = () => {
        this.props.appDataRuntimeLogoutAction(this.props.appDataRuntime.token);
    }

    render = () => (<></>)
}

export default connect(store => ({
    appDataRuntime: store.appDataRuntime,
}),
    dispatch => ({
        appDataRuntimeLogoutAction: token => dispatch(appDataRuntimeLogout(token))
    }))(UserLogout);
