const initialState = {
    language: 'en',
    token: null
};

export default ((state = initialState, action) => {
    switch (action.type) {
    case 'APP_DATA_SET_LANGUAGE':
        return {
            ...state,
            language: action.payload
        };
    case 'APP_DATA_SET_TOKEN':
        return {
            ...state,
            token: action.payload
        };
    default:
        return state;
    }
});
