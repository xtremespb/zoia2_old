import axios from 'axios';
import {
    remove as removeCookie
} from 'es-cookie';
import {
    history
} from '../store/configureStore';
import config from '../../etc/config.json';

export default token => dispatch => {
    axios.post(`${config.apiURL}/api/users/logout`, {
        token
    }).then(res => {
        if (res.data.statusCode === 200) {
            dispatch({
                type: 'APP_DATA_RUNTIME_SET_TOKEN',
                payload: null
            });
            dispatch({
                type: 'APP_DATA_SET_USER',
                payload: {}
            });
            removeCookie(`${config.siteId}_auth`);
            history.push('/');
        }
    }).catch(() => {
        // TODO Display an error?
    });
};
