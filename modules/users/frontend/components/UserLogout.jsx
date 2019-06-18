/* eslint-disable react/prop-types */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { history } from '../../../../shared/store/configureStore';
import appDataSetToken from '../../../../shared/actions/appDataSetToken';
import appDataSetUser from '../../../../shared/actions/appDataSetUser';

class UserLogout extends Component {
    componentDidMount = () => {
        this.props.appDataSetTokenAction(null);
        this.props.appDataSetUserAction({});
        history.push('/');
    }

    render = () => (<></>)
}

export default connect(() => ({}),
    dispatch => ({
        appDataSetTokenAction: token => dispatch(appDataSetToken(token)),
        appDataSetUserAction: user => dispatch(appDataSetUser(user))
    }))(UserLogout);
