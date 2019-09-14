import React, { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import uuid from 'uuid/v1';

const PagesList = lazy(() => import(/* webpackChunkName: "PagesList" */ './components/admin/PagesList.jsx'));
const PagesEdit = lazy(() => import(/* webpackChunkName: "PagesEdit" */ './components/admin/PagesEdit.jsx'));
const PageView = lazy(() => import(/*  webpackChunkName: "PageView" */ './components/user/PageView.jsx'));

const getSuspense = () => (<div className="uk-flex uk-flex-center uk-flex-middle" style={{ height: '100%' }}><span uk-spinner="ratio:2" /></div>);

const getPageView = props => ((
    <Suspense fallback={getSuspense()}>
        <PageView
            {...props}
        />
    </Suspense>
));

const getPagesList = () => ((
    <Suspense fallback={getSuspense()}>
        <PagesList />
    </Suspense>
));

const getPagesEdit = props => ((
    <Suspense fallback={getSuspense()}>
        <PagesEdit
            {...props}
        />
    </Suspense>
));

export default entrypoints => ([(entrypoints.pages ? entrypoints.pages : []).map((p) => p === '/' ? (<Route
    key={`pageView_${uuid()}`}
    path={p}
    component={getPageView}
    exact
/>) : (<Route
    key={`pageView_${uuid()}`}
    path={p}
    component={getPageView}
/>)),
(<Route
    key="pagesList"
    path="/admin/pages"
    component={getPagesList}
    exact
/>),
(<Route
    key="pagesCreate"
    path="/admin/pages/add"
    exact
    component={getPagesEdit}
/>),
(<Route
    key="pagesEdit"
    path="/admin/pages/edit/:id"
    exact
    component={getPagesEdit}
/>)]);
