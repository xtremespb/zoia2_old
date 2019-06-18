export default (language, catalog) => ({
    type: 'APP_LINGUI_SET_CATALOG',
    payload: {
        language,
        catalog
    }
});
