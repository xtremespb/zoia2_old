import React, { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';

const UserAuth = lazy(() => import(/* webpackChunkName: "UserAuth" */ './components/UserAuth.jsx'));
const UserLogout = lazy(() => import(/* webpackChunkName: "UserLogout" */ './components/UserLogout.jsx'));
const UsersList = lazy(() => import(/* webpackChunkName: "UsersList" */ './components/UsersList.jsx'));
const UsersEdit = lazy(() => import(/* webpackChunkName: "UsersEdit" */ './components/UsersEdit.jsx'));

const getSuspense = () => (<div className="uk-flex uk-flex-center uk-flex-middle" style={{ height: '100%' }}><span uk-spinner="ratio:2" /></div>);

const getAuth = () => ((
    <Suspense fallback={getSuspense()}>
        <UserAuth />
    </Suspense>
));

const getLogout = () => ((
    <Suspense fallback={getSuspense()}>
        <UserLogout />
    </Suspense>
));

const getUsersList = () => ((
    <Suspense fallback={getSuspense()}>
        <UsersList />
    </Suspense>
));

const getUsersEdit = () => ((
    <Suspense fallback={getSuspense()}>
        <UsersEdit />
    </Suspense>
));

export default [
    (<Route
        key="usersAuth"
        path="/users/auth"
        component={getAuth}
    />),
    (<Route
        key="usersLogout"
        path="/users/logout"
        component={getLogout}
        exact
    />),
    (<Route
        key="usersList"
        path="/admin/users"
        component={getUsersList}
        exact
    />),
    (<Route
        key="usersEdit"
        path="/admin/users/edit"
        component={getUsersEdit}
    />)
];
