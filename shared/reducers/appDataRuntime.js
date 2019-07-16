import {
    get as getCookie
} from 'es-cookie';

import config from '../../etc/config.json';

const initialState = {
    token: getCookie(`${config.siteId}_auth`) || null
};

export default ((state = initialState, action) => {
    switch (action.type) {
    case 'APP_DATA_RUNTIME_SET_TOKEN':
        return {
            ...state,
            token: action.payload
        };
    default:
        return state;
    }
});
