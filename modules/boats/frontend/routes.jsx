import React, { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';

const BoatsList = lazy(() => import(/* webpackChunkName: "BoatsList" */ './components/admin/BoatsList.jsx'));
const BoatsEdit = lazy(() => import(/* webpackChunkName: "BoatsEdit" */ './components/admin/BoatsEdit.jsx'));

const getSuspense = () => (<div className="uk-flex uk-flex-center uk-flex-middle" style={{ height: '100%' }}><span uk-spinner="ratio:2" /></div>);

const getBoatsList = () => ((
    <Suspense fallback={getSuspense()}>
        <BoatsList />
    </Suspense>
));

const getBoatsEdit = props => ((
    <Suspense fallback={getSuspense()}>
        <BoatsEdit
            {...props}
        />
    </Suspense>
));

export default [
    (<Route
        key="usersList"
        path="/admin/boats"
        component={getBoatsList}
        exact
    />),
    (<Route
        key="usersCreate"
        path="/admin/boats/add"
        exact
        component={getBoatsEdit}
    />),
    (<Route
        key="usersEdit"
        path="/admin/boats/edit/:id"
        exact
        component={getBoatsEdit}
    />)
];
