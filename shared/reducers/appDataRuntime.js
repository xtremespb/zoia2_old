import cookies from 'cookies-js';

import config from '../../static/etc/config.json';
import {
    APP_DATA_RUNTIME_SET_TOKEN,
    APP_DATA_RUNTIME_SET_CONFIG,
} from '../constants/core';

const initialState = {
    token: cookies.get(`${config.id}_auth`) || null,
    config: {
        siteTitle: {}
    },
    site: {},
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
            config: action.payload
        };
    default:
        return state;
    }
});
