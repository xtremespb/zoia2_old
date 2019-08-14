/* eslint react/prop-types:0, react/prefer-stateless-function:0 */

import React, { Component } from 'react';

export default class ZTree extends Component {
    constructor(props) {
        super(props);
        this.ZTreeEditDialog = React.createRef();
    }

    onAddItemButtonClick = e => {
        e.preventDefault();
        if (this.props.onAddItemButtonClick && typeof this.props.onAddItemButtonClick === 'function') {
            this.props.onAddItemButtonClick(e);
        }
    }

    render = () => (<div className={this.props.cname}>
        <label className="uk-form-label" htmlFor={this.props.id}>{this.props.label}{this.props.mandatory ? <span className="zform-mandatory">*</span> : null}</label>
        <div className="uk-form-controls">
            <div>
                <button type="button" className="uk-button uk-button-small uk-button-primary" onClick={this.onAddItemButtonClick}><span uk-icon="icon:plus;ratio:0.8" />&nbsp;{this.props.addItemButtonLabel}</button>
            </div>
            OK
        </div>
    </div>);
}
