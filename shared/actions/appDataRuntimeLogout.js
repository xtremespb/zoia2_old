import axios from 'axios';
// import {
//     remove as removeCookie
// } from 'es-cookie';
import cookies from 'cookies-js';
import config from '../../static/etc/config.json';
import {
    APP_DATA_RUNTIME_SET_TOKEN,
    APP_DATA_SET_USER
} from '../constants/core';

export default token => dispatch => {
    axios.post(`${config.api.url}/api/users/logout`, {
        token
    }).then(res => {
        if (res.data.statusCode === 200) {
            dispatch({
                type: APP_DATA_RUNTIME_SET_TOKEN,
                payload: null
            });
            dispatch({
                type: APP_DATA_SET_USER,
                payload: {}
            });
            cookies.expire(`${config.id}_auth`, undefined, config.cookieOptions);
            window.location.href = '/';
        }
    }).catch(() => {
        window.location.href = '/';
    });
};
