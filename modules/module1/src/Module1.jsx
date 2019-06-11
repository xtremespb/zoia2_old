import React, { Component } from 'react';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import { Trans } from '@lingui/macro';
import { connect } from 'react-redux';

import AdminPanel from '../../../shared/components/AdminPanel.jsx';

import '../../../shared/uikit.scss';
UIkit.use(Icons);

class Module1 extends Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    console.log(this.props.appData);
    return (<AdminPanel>Hello world</AdminPanel>);
  };
}

export default connect(store => {
    console.log(`Store: ${JSON.stringify(store)}`);
    console.log(`Store appData: ${JSON.stringify(store.appData)}`);
    console.log(store);
    return {
        appData: store.appData
    };
},
    // dispatch => ()
)(Module1);