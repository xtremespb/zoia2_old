import React, { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';

const BasesList = lazy(() => import(/* webpackChunkName: "UsersList" */ './components/admin/BasesList.jsx'));
const BasesEdit = lazy(() => import(/* webpackChunkName: "UsersEdit" */ './components/admin/BasesEdit.jsx'));

const getSuspense = () => (<div className="uk-flex uk-flex-center uk-flex-middle" style={{ height: '100%' }}><span uk-spinner="ratio:2" /></div>);

const getBasesList = () => ((
    <Suspense fallback={getSuspense()}>
        <BasesList />
    </Suspense>
));

const getBasesEdit = props => ((
    <Suspense fallback={getSuspense()}>
        <BasesEdit
            {...props}
        />
    </Suspense>
));

export default [
    (<Route
        key="usersList"
        path="/admin/bases"
        component={getBasesList}
        exact
    />),
    (<Route
        key="usersCreate"
        path="/admin/bases/add"
        exact
        component={getBasesEdit}
    />),
    (<Route
        key="usersEdit"
        path="/admin/bases/edit/:id"
        exact
        component={getBasesEdit}
    />)
];
