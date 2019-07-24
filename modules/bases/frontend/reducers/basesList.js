import {
    BASES_LIST_TABLE_SET_STATE
} from '../constants/bases';

const initialState = {
    basesTableState: null
};

export default ((state = initialState, action) => {
    switch (action.type) {
    case BASES_LIST_TABLE_SET_STATE:
        return {
            ...state,
            basesTableState: action.payload
        };
    default:
        return state;
    }
});
