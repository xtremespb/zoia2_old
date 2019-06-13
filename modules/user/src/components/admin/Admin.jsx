import React, { Component } from 'react';
import AdminPanel from '../../../../../shared/components/AdminPanel.jsx';
import { Trans } from '@lingui/macro';
import { connect } from 'react-redux';

class Admin extends Component {
    constructor(props) {
        super(props);
    }

    render = () => (<>
        <AdminPanel>
            <Trans>Hello world from Module 1</Trans>
            <p><b>Lang set:</b>&nbsp;{this.props.appData.language}</p>
        </AdminPanel>
    </>);
}

export default connect(store => ({
    appData: store.appData
}),
    // dispatch => ({
    //     appDataSetLanguageAction: language => dispatch(appDataSetLanguage(language))
    // })
)(Admin);