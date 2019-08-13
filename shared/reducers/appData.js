import config from '../../etc/config.json';

import {
    APP_DATA_SET_LANGUAGE,
    APP_DATA_SET_USER
} from '../constants/core';

const initialState = {
    language: Object.keys(config.languages)[0],
    user: {}
};

export default ((state = initialState, action) => {
    switch (action.type) {
    case APP_DATA_SET_LANGUAGE:
        return {
            ...state,
            language: action.payload
        };
    case APP_DATA_SET_USER:
        return {
            ...state,
            user: action.payload
        };
    default:
        return state;
    }
});
