import {
    get as getCookie
} from 'es-cookie';

import site from '../../etc/site.json';
import {
    APP_DATA_RUNTIME_SET_TOKEN,
    APP_DATA_RUNTIME_SET_CONFIG,
    APP_DATA_RUNTIME_SET_CONFIG_ERROR
} from '../constants/core';

const initialState = {
    token: getCookie(`${site.id}_auth`) || null,
    config: {},
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
            config: action.payload
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
