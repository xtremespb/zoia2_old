import {
    COUNTRIES_LIST_TABLE_SET_STATE
} from '../constants/countries';

const initialState = {
    countriesTableState: null
};

export default ((state = initialState, action) => {
    switch (action.type) {
    case COUNTRIES_LIST_TABLE_SET_STATE:
        return {
            ...state,
            countriesTableState: action.payload
        };
    default:
        return state;
    }
});
