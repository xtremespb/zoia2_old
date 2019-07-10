import React, { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';

const PageView = lazy(() => import(/*  webpackChunkName: "UserAuth" */ './components/user/PageView.jsx'));

const getSuspense = () => (<div className="uk-flex uk-flex-center uk-flex-middle" style={{ height: '100%' }}><span uk-spinner="ratio:2" /></div>);

const getPageView = props => ((
    <Suspense fallback={getSuspense()}>
        <PageView
            {...props}
        />
    </Suspense>
));

export default [
    (<Route
        key="pageView"
        path="/pages"
        component={getPageView}
    />)
];
