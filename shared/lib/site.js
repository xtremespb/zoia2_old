/* eslint-disable no-param-reassign */
import auth from './auth';
import locale from './locale';
import catalogs from '../utils/lingui-catalogs-node';
import site from '../../etc/site.json';
import config from '../../etc/config.json';

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
    getSiteData: async (req, fastify, db, page) => {
        const user = await auth.getUserData(req, fastify, db);
        const languagesArr = Object.keys(site.languages);
        const {
            languages
        } = site;
        const language = locale.getLocaleFromURL(req);
        const languagePrefixURL = language === Object.keys(site.languages)[0] ? '' : `/${language}`;
        const t = catalogs(language);
        const title = locale.getSiteTitle(language);
        const languagesURL = {};
        const navDB = await db.collection('registry').findOne({
            _id: 'nav_folder_tree'
        });
        const pagesFolderDB = await db.collection('registry').findOne({
            _id: 'pages_folder_tree'
        });
        let breadcrumbsHTML = '';
        if (pagesFolderDB && pagesFolderDB.data && page) {
            const {
                url
            } = locale.getNonLocalizedURL(req);
            const urlParts = url.split(/\//).filter(i => i.length > 0);
            if (page.filename && urlParts.length && urlParts[urlParts.length - 1] === page.filename) {
                urlParts.pop();
            }
            loopPath(pagesFolderDB.data, urlParts.join('/'), language, breadcrumbsData => {
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
        const navTree = (navDB ? navDB.data || [] : []).map(i => {
            const item = i;
            item.url = item.url.match(/^http/) ? item : `${languagePrefixURL}${item.url}`;
            return item;
        });
        languagesArr.map(lang => languagesURL[lang] = locale.getLocaleURL(lang, req));
        return {
            navTree,
            user,
            language,
            languagePrefixURL,
            languages,
            languagesArr,
            languagesURL,
            t,
            title,
            breadcrumbsHTML,
            useUIkitOnFrontend: site.useUIkitOnFrontend || false,
            allowRegistration: config.allowRegistration
        };
    }
};
