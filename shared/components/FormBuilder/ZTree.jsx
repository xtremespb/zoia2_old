/* eslint react/prop-types:0, react/prefer-stateless-function:0, no-param-reassign:0 */

import React, { Component } from 'react';
import Tree from 'rc-tree';
import './ztree.css';

export default class ZTree extends Component {
    constructor(props) {
        super(props);
        this.ZTreeEditDialog = React.createRef();
    }

    state = {
        expandedKeys: [],
        autoExpandParent: true
    }

    componentDidMount = () => this.setState({ expandedKeys: this.props.selected })

    onExpand = expandedKeys => this.setState({
        expandedKeys,
        autoExpandParent: false,
    })

    onAddItemButtonClick = e => {
        e.preventDefault();
        if (this.props.onAddItemButtonClick && typeof this.props.onAddItemButtonClick === 'function') {
            this.props.onAddItemButtonClick(e);
        }
    }

    onDragEnter = info => {
        this.setState({
            expandedKeys: info.expandedKeys,
        });
    }

    loop = (data, key, callback) => {
        data.forEach((item, index, arr) => {
            if (item.key === key) {
                callback(item, index, arr);
                return;
            }
            if (item.children) {
                this.loop(item.children, key, callback);
            }
        });
    };

    onSelect = selectedKeys => this.props.onValueChanged(this.props.originalId, null, selectedKeys, null);

    onCheck = checkedKeys => this.props.onValueChanged(this.props.originalId, null, null, checkedKeys);

    onDrop = info => {
        const dropKey = info.node.props.eventKey;
        const dragKey = info.dragNode.props.eventKey;
        const dropPos = info.node.props.pos.split('-');
        const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]);
        const data = [...this.props.tree];
        let dragObj;
        this.loop(data, dragKey, (item, index, arr) => {
            arr.splice(index, 1);
            dragObj = item;
        });
        if (!info.dropToGap) {
            this.loop(data, dropKey, (item) => {
                item.children = item.children || [];
                item.children.push(dragObj);
            });
        } else if (
            (info.node.props.children || []).length > 0 && info.node.props.expanded && dropPosition === 1) {
            this.loop(data, dropKey, (item) => {
                item.children = item.children || [];
                item.children.unshift(dragObj);
            });
        } else {
            let ar;
            let i;
            this.loop(data, dropKey, (item, index, arr) => {
                ar = arr;
                i = index;
            });
            if (dropPosition === -1) {
                ar.splice(i, 0, dragObj);
            } else {
                ar.splice(i + 1, 0, dragObj);
            }
        }
        this.props.onValueChanged(this.props.originalId, data, null, null);
    }

    render = () => (<div className={this.props.cname}>
        <label className="uk-form-label" htmlFor={this.props.id}>{this.props.label}{this.props.mandatory ? <span className="zform-mandatory">*</span> : null}</label>
        <div className="uk-form-controls">
            <div>
                <button type="button" className="uk-button uk-button-small uk-button-primary" onClick={this.onAddItemButtonClick}><span uk-icon="icon:plus;ratio:0.8" />&nbsp;{this.props.addItemButtonLabel}</button>
            </div>
            <div className="uk-margin-top">
                <Tree
                    expandedKeys={this.state.expandedKeys}
                    autoExpandParent={this.state.autoExpandParent}
                    treeData={this.props.tree}
                    onExpand={this.onExpand}
                    draggable
                    selectable
                    checkable
                    onDragStart={this.onDragStart}
                    onDragEnter={this.onDragEnter}
                    onDrop={this.onDrop}
                    selectedKeys={this.props.selected}
                    onSelect={this.onSelect}
                    checkedKeys={this.props.checked}
                    onCheck={this.onCheck}
                />
            </div>
        </div>
    </div>);
}
