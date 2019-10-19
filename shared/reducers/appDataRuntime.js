import cookies from 'cookies-js';

import site from '../../etc/site.json';
import {
    APP_DATA_RUNTIME_SET_TOKEN,
    APP_DATA_RUNTIME_SET_CONFIG,
    APP_DATA_RUNTIME_SET_CONFIG_ERROR
} from '../constants/core';

const initialState = {
    token: cookies.get(`${site.id}_auth`) || null,
    config: {
        siteTitle: {}
    },
    site: {},
    configError: false,
    routes: []
};

export default ((state = initialState, action) => {
    switch (action.type) {
    case APP_DATA_RUNTIME_SET_TOKEN:
        return {
            ...state,
            token: action.payload
        };
    case APP_DATA_RUNTIME_SET_CONFIG:
        return {
            ...state,
            config: action.payload.config,
            site: action.payload.site
        };
    case APP_DATA_RUNTIME_SET_CONFIG_ERROR:
        return {
            ...state,
            configError: true
        };
    default:
        return state;
    }
});
