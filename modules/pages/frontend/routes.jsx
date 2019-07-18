import React, { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import uuid from 'uuid/v1';

import config from '../../../etc/config.json';

const PageView = lazy(() => import(/*  webpackChunkName: "UserAuth" */ './components/user/PageView.jsx'));

const getSuspense = () => (<div className="uk-flex uk-flex-center uk-flex-middle" style={{ height: '100%' }}><span uk-spinner="ratio:2" /></div>);

const getPageView = props => ((
    <Suspense fallback={getSuspense()}>
        <PageView
            {...props}
        />
    </Suspense>
));

export default (config.entrypoints && config.entrypoints.pages ? config.entrypoints.pages : []).map((p) => p === '/' ? (<Route
    key={`pageView_${uuid()}`}
    path={p}
    component={getPageView}
    exact
/>) : (<Route
    key={`pageView_${uuid()}`}
    path={p}
    component={getPageView}
/>));
