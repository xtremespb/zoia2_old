import React, { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';

const CountriesList = lazy(() => import(/* webpackChunkName: "CountriesList" */ './components/admin/CountriesList.jsx'));
const CountriesEdit = lazy(() => import(/* webpackChunkName: "CountriesEdit" */ './components/admin/CountriesEdit.jsx'));

const getSuspense = () => (<div className="uk-flex uk-flex-center uk-flex-middle" style={{ height: '100%' }}><span uk-spinner="ratio:2" /></div>);

const getCountriesList = () => ((
    <Suspense fallback={getSuspense()}>
        <CountriesList />
    </Suspense>
));

const getCountriesEdit = props => ((
    <Suspense fallback={getSuspense()}>
        <CountriesEdit
            {...props}
        />
    </Suspense>
));

export default [
    (<Route
        key="usersList"
        path="/admin/countries"
        component={getCountriesList}
        exact
    />),
    (<Route
        key="usersCreate"
        path="/admin/countries/add"
        exact
        component={getCountriesEdit}
    />),
    (<Route
        key="usersEdit"
        path="/admin/countries/edit/:id"
        exact
        component={getCountriesEdit}
    />)
];
