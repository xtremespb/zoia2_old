/* eslint-disable react/prop-types */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { remove as removeCookie } from 'es-cookie';

import { history } from '../../../../shared/store/configureStore';
import config from '../../../../etc/config.json';
import appDataRuntimeSetToken from '../../../../shared/actions/appDataRuntimeSetToken';
import appDataSetUser from '../../../../shared/actions/appDataSetUser';

class UserLogout extends Component {
    componentDidMount = () => {
        this.props.appDataRuntimeSetTokenAction(null);
        this.props.appDataSetUserAction({});
        removeCookie(`${config.siteId}_auth`);
        history.push('/');
    }

    render = () => (<></>)
}

export default connect(() => ({}),
    dispatch => ({
        appDataRuntimeSetTokenAction: token => dispatch(appDataRuntimeSetToken(token)),
        appDataSetUserAction: user => dispatch(appDataSetUser(user))
    }))(UserLogout);
