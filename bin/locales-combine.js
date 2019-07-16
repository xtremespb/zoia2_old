const gettextParser = require('gettext-parser');
const fs = require('fs-extra');

const modules = fs.readdirSync('../modules');
['user', 'admin'].map(t => {
    const locales = fs.readdirSync(`../shared/locales/${t}`);
    locales.filter(l => l !== '_build').map(locale => {
        const messagesCombined = fs.readFileSync(`../shared/locales/${t}/${locale}/messages.po`);
        const messagesCombinedPo = gettextParser.po.parse(messagesCombined);
        const messagesCombinedTrans = messagesCombinedPo.translations[''];
        modules.map(m => {
            try {
                fs.existsSync(`../modules/${m}/locales/${t}/${locale}/messages.po`);
                const messagesModule = fs.readFileSync(`../modules/${m}/locales/${t}/${locale}/messages.po`);
                const messagesModulePo = gettextParser.po.parse(messagesModule);
                const messagesModuleTrans = messagesModulePo.translations[''];
                Object.keys(messagesModuleTrans).map(mmt => {
                    if (!messagesCombinedTrans[mmt]) {
                        console.log(`Add missing locale to ${t}/${locale}: ${mmt}`);
                        messagesCombinedTrans[mmt] = messagesModuleTrans[mmt];
                    }
                });
            } catch (e) {
                // Ignore
            }
        });
        const data = gettextParser.po.compile({
            charset: messagesCombinedPo.charset,
            headers: messagesCombinedPo.headers,
            translations: {
                '': messagesCombinedTrans
            }
        });
        fs.writeFileSync(`../shared/locales/${t}/${locale}/messages.po`, data);
    });
});
