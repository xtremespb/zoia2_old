import {
    DESTINATIONS_LIST_TABLE_SET_STATE
} from '../constants/destinations';

const initialState = {
    destinationsTableState: null
};

export default ((state = initialState, action) => {
    switch (action.type) {
    case DESTINATIONS_LIST_TABLE_SET_STATE:
        return {
            ...state,
            destinationsTableState: action.payload
        };
    default:
        return state;
    }
});
