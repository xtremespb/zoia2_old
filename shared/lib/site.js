import auth from './auth';
import locale from './locale';
import catalogs from '../utils/lingui-catalogs-node';
import site from '../../etc/site.json';

export default {
    getSiteData: async (req, fastify, db) => {
        const user = await auth.getUserData(req, fastify, db);
        const languagesArr = Object.keys(site.languages);
        const {
            languages
        } = site;
        const language = locale.getLocaleFromURL(req);
        const languagePrefixURL = language === site.languages[0] ? '' : `/${language}`;
        const t = catalogs(language);
        const title = locale.getSiteTitle(language);
        const languagesURL = {};
        const foldersDB = await db.collection('registry').findOne({
            _id: 'nav_folder_tree'
        });
        const navTree = (foldersDB ? foldersDB.data || [] : []).map(i => {
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
            title
        };
    }
};
