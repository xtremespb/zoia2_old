/* eslint-disable react/prop-types */

import React, { lazy, Component } from 'react';
import { t } from '@lingui/macro';
import { I18n } from '@lingui/react';
import { connect } from 'react-redux';
import cookies from 'cookies-js';
import queryString from 'query-string';
import { history } from '../../../../shared/store/configureStore';

import appLinguiSetCatalog from '../../../../shared/actions/appLinguiSetCatalog';
import site from '../../../../etc/site.json';
import appDataRuntimeSetDocumentTitle from '../../../../shared/actions/appDataRuntimeSetDocumentTitle';

const AdminPanel = lazy(() => import(/* webpackMode: "lazy", webpackChunkName: "AdminPanel" */'../../../../shared/components/AdminPanel/AdminPanel.jsx'));

class Nav extends Component {
    constructor(props) {
        super(props);
        this.usersListTable = React.createRef();
        this.dialogDelete = React.createRef();
    }

    componentDidMount = () => {
        if (!this.props.appDataRuntime.token) {
            history.push('/admin/users/auth?redirect=/admin/users');
        } else {
            const query = queryString.parse(window.location.search);
            if (query.reload && this.usersListTable.current) {
                this.usersListTable.current.reloadURL();
            }
        }
    }

    deauthorize = () => {
        this.props.appDataRuntimeSetTokenAction(null);
        this.props.appDataSetUserAction({});
        // removeCookie(`${site.id}_auth`);
        cookies.expire(`${site.id}_auth`, undefined, site.cookieOptions);
        history.push(`/admin/users/auth?redirect=/admin/users`);
    }

    render = () => (
        <AdminPanel>
            <I18n>
                {({ i18n }) => {
                    this.props.appDataRuntimeSetDocumentTitleAction(i18n._(t`Navigation`), this.props.appData.language, this.props.appDataRuntime.config.siteTitle);
                    return (<>
                        <div className="uk-title-head uk-margin-bottom">{i18n._(t`Navigation`)}</div>
                    </>);
                }}
            </I18n>
        </AdminPanel>
    );
}

export default connect(store => ({
    appData: store.appData,
    appDataRuntime: store.appDataRuntime,
    appLingui: store.appLingui,
    usersList: store.usersList
}),
    dispatch => ({
        appLinguiSetCatalogAction: (language, catalog) => dispatch(appLinguiSetCatalog(language, catalog)),
        appDataRuntimeSetDocumentTitleAction: (documentTitle, language, siteTitle) => dispatch(appDataRuntimeSetDocumentTitle(documentTitle, language, siteTitle))
    }))(Nav);
