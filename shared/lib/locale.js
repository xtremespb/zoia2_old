import site from '../../etc/site.json';
import config from '../../etc/config.json';

const languages = Object.keys(site.languages);

export default {
    getLocaleFromURL: req => {
        if (req && req.urlData()) {
            const url = req.urlData().path;
            const urlParts = url.split(/\//);
            if (urlParts.length > 1) {
                const firstPartOfURL = urlParts[1];
                if (languages.indexOf(firstPartOfURL) > -1) {
                    return firstPartOfURL;
                }
            }
        }
        return languages[0];
    },
    getSiteTitle: language => config.siteTitle[language],
    getLocaleURL: (language, req) => {
        let newURL = req && req.urlData() ? req.urlData().path : null;
        if (req && req.urlData()) {
            const url = req.urlData().path;
            const urlParts = url.split(/\//);
            if (urlParts.length > 1) {
                const firstPartOfURL = urlParts[1];
                if (languages.indexOf(firstPartOfURL) > -1) {
                    newURL = url.replace(`^/${firstPartOfURL}`, `/${language}`).replace(`^/${languages[0]}`, '');
                    newURL = newURL.length ? newURL : '/';
                }
            }
        }
        return newURL;
    }
};
