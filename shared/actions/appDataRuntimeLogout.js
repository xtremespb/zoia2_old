import axios from 'axios';
// import {
//     remove as removeCookie
// } from 'es-cookie';
import cookies from 'cookies-js';
import api from '../../static/etc/api.json';
import site from '../../etc/site.json';
import {
    APP_DATA_RUNTIME_SET_TOKEN,
    APP_DATA_SET_USER
} from '../constants/core';

export default token => dispatch => {
    axios.post(`${api.url}/api/users/logout`, {
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
            cookies.expire(`${site.id}_auth`, undefined, site.cookieOptions);
            window.location.href = '/';
        }
    }).catch(() => {
        window.location.href = '/';
    });
};
