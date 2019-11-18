/* eslint-disable no-param-reassign */
import locale from './locale';

const loopPath = (data, keyPath, language, callback, path = [], pathData = []) => data.forEach(item => {
    path.push(item.id);
    pathData.push({
        id: item.id,
        title: item.data[language] ? item.data[language].title : ''
    });
    if (keyPath === path.join('/')) {
        callback(pathData);
    } else if (item.children) {
        loopPath(item.children, keyPath, language, callback, path, pathData);
    }
    path.pop();
    pathData.pop();
});

export default {
    getSiteData: async (req, fastify, page, folders, nav) => {
        // const user = await auth.getUserData(req, fastify, db);
        const languagesArr = Object.keys(fastify.zoiaConfig.languages);
        const {
            languages
        } = fastify.zoiaConfig;
        const language = locale.getLocaleFromURL(req);
        const languagePrefixURL = language === Object.keys(fastify.zoiaConfig.languages)[0] ? '' : `/${language}`;
        const title = locale.getSiteTitle(language, req);
        const languagesURL = {};
        let breadcrumbsHTML = '';
        if (folders && folders.data && page) {
            const {
                url
            } = locale.getNonLocalizedURL(req);
            const urlParts = url.split(/\//).filter(i => i.length > 0);
            if (page.filename && urlParts.length && urlParts[urlParts.length - 1] === page.filename) {
                urlParts.pop();
            }
            loopPath(folders.data, urlParts.join('/'), language, breadcrumbsData => {
                let breadcrumbsCurrentPath = '';
                breadcrumbsHTML = breadcrumbsData.map(b => {
                    const bu = b;
                    breadcrumbsCurrentPath = `${breadcrumbsCurrentPath}/${b.id}`;
                    bu.url = breadcrumbsCurrentPath;
                    return bu;
                }).map(b => `<li><a href="${languagePrefixURL}${b.url}">${b.title}</a></li>`).join('');
            });
        }
        breadcrumbsHTML = `<li><a href="${languagePrefixURL || '/'}">${title}</a></li>${breadcrumbsHTML}`;
        const navTree = (nav ? nav.data || [] : []).map(i => {
            const item = i;
            item.url = item.url.match(/^http/) ? item : `${languagePrefixURL}${item.url}`;
            return item;
        });
        languagesArr.map(lang => languagesURL[lang] = locale.getLocaleURL(lang, req));
        return {
            navTree,
            language,
            languagePrefixURL,
            languages,
            languagesArr,
            languagesURL,
            title,
            breadcrumbsHTML,
            useUIkitOnFrontend: fastify.zoiaConfig.useUIkitOnFrontend || false,
            allowRegistration: fastify.zoiaConfig.allowRegistration,
            siteId: fastify.zoiaConfig.id
        };
    }
};
