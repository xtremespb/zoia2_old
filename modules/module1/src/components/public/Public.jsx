import React, { Component } from 'react';
import { Trans } from '@lingui/macro';
import { connect } from 'react-redux';

class Public extends Component {
    constructor(props) {
        super(props);
    }

    render = () => (<>
		<Trans>Hello world from Module 1</Trans>
    </>);
}

export default connect(store => ({
    appData: store.appData
}),
    // dispatch => ({
    //     appDataSetLanguageAction: language => dispatch(appDataSetLanguage(language))
    // })
)(Public);