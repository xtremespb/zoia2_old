import React, { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';

const DestinationsList = lazy(() => import(/* webpackChunkName: "DestinationsList" */ './components/admin/DestinationsList.jsx'));
const DestinationsEdit = lazy(() => import(/* webpackChunkName: "DestinationsEdit" */ './components/admin/DestinationsEdit.jsx'));

const getSuspense = () => (<div className="uk-flex uk-flex-center uk-flex-middle" style={{ height: '100%' }}><span uk-spinner="ratio:2" /></div>);

const getDestinationsList = () => ((
    <Suspense fallback={getSuspense()}>
        <DestinationsList />
    </Suspense>
));

const getDestinationsEdit = props => ((
    <Suspense fallback={getSuspense()}>
        <DestinationsEdit
            {...props}
        />
    </Suspense>
));

export default [
    (<Route
        key="usersList"
        path="/admin/destinations"
        component={getDestinationsList}
        exact
    />),
    (<Route
        key="usersCreate"
        path="/admin/destinations/add"
        exact
        component={getDestinationsEdit}
    />),
    (<Route
        key="usersEdit"
        path="/admin/destinations/edit/:id"
        exact
        component={getDestinationsEdit}
    />)
];
