const config = require('../../etc/config.json');

export default (documentTitle, language) => () => document.title = `${documentTitle} | ${config.siteTitle[language]}`;
