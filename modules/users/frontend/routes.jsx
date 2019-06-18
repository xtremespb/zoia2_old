import React, { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';

const UserAuth = lazy(() => import(/* webpackChunkName: "AdminPanel" */ './components/UserAuth.jsx'));
const UsersList = lazy(() => import(/* webpackChunkName: "UsersList" */ './components/UsersList.jsx'));

const getSuspense = () => (<div className="uk-flex uk-flex-center uk-flex-middle" style={{ height: '100%' }}><span uk-spinner="ratio:2" /></div>);

const getAuth = () => ((
    <Suspense fallback={getSuspense()}>
        <UserAuth />
    </Suspense>
));

const getUsersList = () => ((
    <Suspense fallback={getSuspense()}>
        <UsersList />
    </Suspense>
));

export default [
    (<Route
        key="usersAuth"
        path="/users/auth"
        component={getAuth}
    />),
    (<Route
        key="usersList"
        path="/admin/users"
        component={getUsersList}
    />)
];
