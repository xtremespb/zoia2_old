const fs = require('fs-extra');

const modules = fs.readdirSync('../modules');
modules.map(m => {
    try {
        fs.removeSync(`../modules/${m}/locales`);
    } catch (e) {
        console.log(e);
        // Ignore
    }
});
