import axios from 'axios';
import {
    remove as removeCookie
} from 'es-cookie';
import api from '../../etc/api.json';
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
            removeCookie(`${site.id}_auth`);
            window.location.href = '/';
        }
    }).catch(() => {
        // TODO Display an error?
        window.location.href = '/';
    });
};
