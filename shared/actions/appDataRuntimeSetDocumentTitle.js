import config from '../../etc/config.json';

export default (documentTitle, language) => () => document.title = `${documentTitle} | ${config.siteTitle[language]}`;
