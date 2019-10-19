export default {
    getLocaleFromURL: (req, config) => {
        if (req && req.urlData()) {
            const url = req.urlData().path;
            const urlParts = url.split(/\//);
            if (urlParts.length > 1) {
                const firstPartOfURL = urlParts[1];
                if (config.languages.indexOf(firstPartOfURL) > -1) {
                    return firstPartOfURL;
                }
            }
        }
        return config.languages[0];
    },
    getSiteTitle: (language, config) => config.siteTitle[language],
    getLocaleURL: (language, req, config) => {
        let newURL = req && req.urlData() ? req.urlData().path : null;
        if (newURL) {
            const url = req.urlData().path;
            const urlParts = url.split(/\//);
            if (urlParts.length > 1) {
                const firstPartOfURL = urlParts[1];
                if (config.languages.indexOf(firstPartOfURL) > -1) {
                    urlParts[1] = language;
                    if (urlParts[1] === config.languages[0]) {
                        urlParts.splice(1, 1);
                    }
                    if (urlParts.length === 2 && language !== config.languages[0]) {
                        urlParts[1] = language;
                    }
                } else if (language !== config.languages[0]) {
                    urlParts.splice(1, 0, language);
                }
            }
            newURL = urlParts.join('/') || '/';
        }
        newURL = newURL.length > 1 ? newURL.replace(/\/$/, '') : newURL;
        return newURL;
    },
    getNonLocalizedURL: (req, config) => {
        const data = {};
        if (req && req.urlData()) {
            const url = req.urlData().path;
            const urlParts = url.split(/\//);
            if (urlParts.length > 1) {
                const firstPartOfURL = urlParts[1];
                if (config.languages.indexOf(firstPartOfURL) > -1) {
                    [data.language] = urlParts.splice(1, 1);
                } else {
                    [data.language] = config.languages;
                }
                data.url = urlParts.join('/') || '/';
                data.url = data.url.length > 1 ? data.url.replace(/\/$/, '') : data.url;
            }
        }
        return data;
    }
};
