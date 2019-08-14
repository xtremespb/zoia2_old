import {
    BOATS_LIST_TABLE_SET_STATE
} from '../constants/boats';

const initialState = {
    boatsTableState: null
};

export default ((state = initialState, action) => {
    switch (action.type) {
    case BOATS_LIST_TABLE_SET_STATE:
        return {
            ...state,
            boatsTableState: action.payload
        };
    default:
        return state;
    }
});
