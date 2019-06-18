/* eslint react/prop-types:0 */

import React, { Component } from 'react';
import cloneDeep from 'lodash/cloneDeep';

export default class ZCheckbox extends Component {
    focus = () => this.field.focus();

    onValueChanged = e => {
        const { checked } = e.target;
        const { id } = e.target.dataset;
        const value = typeof this.props.value === 'object' ? cloneDeep(this.props.value) : {};
        value[id] = checked;
        this.props.onValueChanged && typeof this.props.onValueChanged === 'function' ? this.props.onValueChanged(this.props.originalId, value) : null;
    };

    getCheckboxes = () => Object.keys(this.props.values).map((key) => {
        const val = this.props.values[key];
        return (<label key={`${this.props.id}_checkbox_${key}`} className="uk-margin-small-right zform-noselect">
            <input
                className="uk-checkbox"
                type="checkbox"
                data-id={key}
                checked={this.props.value[key] || false}
                onChange={this.onValueChanged}
                disabled={this.props.disabled}
            />
            &nbsp;{val}
        </label>);
    });

    render = () => (<div className={this.props.cname}>
        <label className="uk-form-label" htmlFor={this.props.id}>{this.props.label}{this.props.mandatory ? <span className="zform-mandatory">*</span> : null}</label>
        <div className="uk-form-controls" ref={field => { this.field = field; }}>
            {this.getCheckboxes()}
        </div>
        {this.props.error && this.props.errorMessage ? <div><span className="uk-label uk-label-danger">{this.props.errorMessage}</span></div> : null}
        {this.props.helpText ? <div className="uk-text-small uk-text-muted">{this.props.helpText}</div> : null}
    </div>);
}
