import React, { Component } from 'react';

class AdminPanel extends Component {
    constructor(props) {
        super(props);
    }

    render = () => (<>
        OK Computer
        <b>{this.props.children}</b>
    </>);
}

export default AdminPanel;
