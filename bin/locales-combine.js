const gettextParser = require('gettext-parser');
const fs = require('fs-extra');

const modules = fs.readdirSync('../modules');
['user', 'admin'].map(t => {
    const locales = fs.readdirSync(`../core/locales`);
    locales.filter(l => l !== '_build').map(locale => {
        const messagesCore = fs.readFileSync(`../core/locales/${locale}/messages.po`);
        const messagesCorePo = gettextParser.po.parse(messagesCore);
        const messagesCoreTrans = messagesCorePo.translations[''];
        modules.map(m => {
            try {
                fs.existsSync(`../modules/${m}/locales/${t}/${locale}/messages.po`);
                const messagesModule = fs.readFileSync(`../modules/${m}/locales/${t}/${locale}/messages.po`);
                const messagesModulePo = gettextParser.po.parse(messagesModule);
                const messagesModuleTrans = messagesModulePo.translations[''];
                Object.keys(messagesModuleTrans).map(mmt => {
                    if (!messagesCoreTrans[mmt]) {
                        messagesCoreTrans[mmt] = messagesModuleTrans[mmt];
                    }
                });
            } catch (e) {
                // Ignore
            }
        });
        const data = gettextParser.po.compile({
            charset: messagesCorePo.charset,
            headers: messagesCorePo.headers,
            translations: {
                '': messagesCoreTrans
            }
        });
        fs.writeFileSync(`../shared/locales/${t}/${locale}/messages.po`, data);
    });
});
