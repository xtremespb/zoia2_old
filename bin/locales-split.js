const gettextParser = require('gettext-parser');
const fs = require('fs-extra');

['user', 'admin'].map(t => {
    const locales = fs.readdirSync(`../shared/locales/${t}`);
    locales.filter(l => l !== '_build').map(locale => {
        const transModules = {};
        const input = fs.readFileSync(`../shared/locales/${t}/${locale}/messages.po`);
        const po = gettextParser.po.parse(input);
        const trans = po.translations[''];
        Object.keys(trans).map(i => {
            if (i && i.length && trans[i] && trans[i].comments) {
                const {
                    reference
                } = trans[i].comments;
                if (reference) {
                    const refArr = reference.split(/\n/);
                    refArr.map(m => {
                        const modules = m.split(/\//);
                        if (modules.length >= 2) {
                            if (modules[0] === 'modules') {
                                const area = modules[1];
                                if (!transModules[area]) {
                                    transModules[area] = {};
                                }
                                transModules[area][i] = trans[i];
                            }
                        }
                    });
                }
            }
        });
        Object.keys(transModules).map(m => {
            fs.ensureDirSync(`../modules/${m}/locales/${t}/${locale}`);
            const data = gettextParser.po.compile({
                charset: po.charset,
                headers: po.headers,
                translations: {
                    '': transModules[m]
                }
            });
            fs.writeFileSync(`../modules/${m}/locales/${t}/${locale}/messages.po`, data);
        });
    });
});
