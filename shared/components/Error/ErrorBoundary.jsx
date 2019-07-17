/* eslint-disable react/prop-types */
import React, { Component } from 'react';

import Error from './Error.jsx';

export default class ErrorBoundary extends Component {
    state = {
        error: false
    }

    static getDerivedStateFromError() {
        return { error: true };
    }

    render = () => (this.state.error ? <Error /> : this.props.children);
} 