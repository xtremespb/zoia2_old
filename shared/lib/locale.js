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
        if (newURL) {
            const url = req.urlData().path;
            const urlParts = url.split(/\//);
            if (urlParts.length > 1) {
                const firstPartOfURL = urlParts[1];
                if (languages.indexOf(firstPartOfURL) > -1) {
                    urlParts[1] = language;
                    if (urlParts[1] === languages[0]) {
                        urlParts.splice(1, 1);
                    }
                    if (urlParts.length === 2 && language !== languages[0]) {
                        urlParts[1] = language;
                    }
                } else if (language !== languages[0]) {
                    urlParts.splice(1, 0, language);
                }
            }
            newURL = urlParts.join('/') || '/';
        }
        return newURL;
    },
    getNonLocalizedURL: req => {
        const data = {};
        if (req && req.urlData()) {
            const url = req.urlData().path;
            const urlParts = url.split(/\//);
            if (urlParts.length > 1) {
                const firstPartOfURL = urlParts[1];
                if (languages.indexOf(firstPartOfURL) > -1) {
                    data.language = urlParts.splice(1, 1);
                } else {
                    [data.language] = languages;
                }
                data.url = urlParts.join('/') || '/';
            }
        }
        return data;
    }
};
