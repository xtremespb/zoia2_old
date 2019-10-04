import site from '../../etc/site.json';
import config from '../../etc/config.json';

const languages = Object.keys(site.languages);

export default {
    getLocaleFromURL: req => {
        if (req) {
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
    getSiteTitle: language => config.siteTitle[language]
};
