/* eslint react/prop-types:0 */
/* eslint react/button-has-type:0 */

import React, { Component } from 'react';

export default class ZButton extends Component {
    onButtonClick = e => {
        if (this.props.onButtonClick && typeof this.props.onButtonClick === 'function') {
            e.preventDefault();
            this.props.onButtonClick(e, this.props.originalId);
        }
    }

    render = () => (<button className={`uk-button zform-margin-right ${this.props.css}`} onClick={this.onButtonClick} disabled={this.props.disabled} type={this.props.buttonType || 'button'}>
        {this.props.label}
    </button>);
}
