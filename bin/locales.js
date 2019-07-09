const {
    exec
} = require('child_process');
const gettextParser = require('gettext-parser');
const fs = require('fs');
const {
    createCompiledCatalog
} = require('../node_modules/@lingui/cli/api/compile');

exec('npm run compile', () => {
    const locales = fs.readdirSync('../shared/locales');
    locales.filter(l => l !== '_build').map(locale => {
        const transModules = {};
        const input = fs.readFileSync(`../shared/locales/${locale}/messages.po`);
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
                        let area;
                        const modules = m.split(/\//);
                        if (modules.length >= 2) {
                            area = `${modules[0].replace('modules', 'module')}_${modules[1]}`;
                        } else {
                            [area] = modules;
                        }
                        if (!transModules[area]) {
                            transModules[area] = {};
                        }
                        transModules[area][i] = trans[i];
                    });
                }
            }
        });
        Object.keys(transModules).map(m => {
            const messages = {};
            const moduleData = transModules[m];
            Object.keys(moduleData).map(i => messages[moduleData[i].msgid] = moduleData[i].msgstr.join(''));
            const compiledCatalog = createCompiledCatalog(
                locale,
                messages,
                false,
                'cjs',
                ''
            );
            fs.writeFileSync(`../static/translations/${locale}_${m}.js`, compiledCatalog);
        });
    });
});
