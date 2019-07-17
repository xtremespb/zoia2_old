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
                        const area = modules.length >= 2 && modules[0] === 'modules' ? modules[1] : '_core';
                        if (!transModules[area]) {
                            transModules[area] = {};
                        }
                        transModules[area][i] = trans[i];
                    });
                }
            }
        });
        Object.keys(transModules).map(m => {
            if (m === '_core' && t !== 'user') {
                return;
            }
            const dir = m === '_core' ? `../core/locales/${locale}` : `../modules/${m}/locales/${t}/${locale}`;
            const filename = m === '_core' ? `../core/locales/${locale}/messages.po` : `../modules/${m}/locales/${t}/${locale}/messages.po`;
            fs.ensureDirSync(dir);
            const data = gettextParser.po.compile({
                charset: po.charset,
                headers: po.headers,
                translations: {
                    '': transModules[m]
                }
            });
            fs.writeFileSync(filename, data);
        });
    });
});
