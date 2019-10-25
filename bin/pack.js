/* eslint no-console:0 */
const fs = require('fs-extra');
const archiver = require('archiver');
const inquirer = require('inquirer');

const config = require(`${__dirname}/../static/etc/config.json`);
const {
    id
} = config;

const questions = [{
    type: 'rawlist',
    name: 'mode',
    message: 'Which archive do you wish to generate?',
    choices: ['Everything (single archive)', 'Everything (multiple archives)', 'API', 'Admin', 'Web'],
    default: 'everything',
}];

const packAPI = () => {
    const filename = `${id}_api.zip`;
    fs.ensureDirSync(`${__dirname}/../dist/`);
    const output = fs.createWriteStream(`${__dirname}/../dist/${filename}`);
    const archive = archiver('zip', {
        zlib: {
            level: 9
        }
    });
    archive.pipe(output);
    ['package.json', 'package-lock.json', 'README.md', 'LICENSE'].map(f => archive.file(`${__dirname}/../${f}`, {
        name: f
    }));
    ['templates.json', 'secure.json'].map(f => archive.file(`${__dirname}/../etc/${f}`, {
        name: `etc/${f}`
    }));
    archive.directory(`${__dirname}/../static/etc`, 'static/etc');
    archive.directory(`${__dirname}/../static/uploads`, 'static/uploads');
    ['api.js', 'tools.js', 'server-config.js'].map(f => archive.file(`${__dirname}/../bin/${f}`, {
        name: `bin/${f}`
    }));
    archive.finalize();
    output.on('close', () => {
        console.log(`New build package has been created: dist/${filename}`);
        console.log(`${archive.pointer()} total bytes`);
    });
};

const packAdmin = () => {
    const filename = `${id}_admin.zip`;
    fs.ensureDirSync(`${__dirname}/../dist/`);
    const output = fs.createWriteStream(`${__dirname}/../dist/${filename}`);
    const archive = archiver('zip', {
        zlib: {
            level: 9
        }
    });
    archive.pipe(output);
    ['tools.js', 'server-config.js'].map(f => archive.file(`${__dirname}/../bin/${f}`, {
        name: `bin/${f}`
    }));
    ['package.json', 'package-lock.json', 'README.md', 'LICENSE'].map(f => archive.file(`${__dirname}/../${f}`, {
        name: f
    }));
    ['templates.json', 'secure.json'].map(f => archive.file(`${__dirname}/../etc/${f}`, {
        name: `etc/${f}`
    }));
    archive.directory(`${__dirname}/../static/data_admin`, 'static/data_admin');
    archive.directory(`${__dirname}/../static/etc`, 'static/etc');
    archive.directory(`${__dirname}/../static/zoia`, 'static/zoia');
    archive.finalize();
    output.on('close', () => {
        console.log(`New build package has been created: dist/${filename}`);
        console.log(`${archive.pointer()} total bytes`);
    });
};

const packWeb = () => {
    const filename = `${id}_web.zip`;
    fs.ensureDirSync(`${__dirname}/../dist/`);
    const output = fs.createWriteStream(`${__dirname}/../dist/${filename}`);
    const archive = archiver('zip', {
        zlib: {
            level: 9
        }
    });
    archive.pipe(output);
    ['package.json', 'package-lock.json', 'README.md', 'LICENSE'].map(f => archive.file(`${__dirname}/../${f}`, {
        name: f
    }));
    ['templates.json', 'secure.json'].map(f => archive.file(`${__dirname}/../etc/${f}`, {
        name: `etc/${f}`
    }));
    archive.directory(`${__dirname}/../static/data_user`, 'static/data_user');
    archive.directory(`${__dirname}/../static/etc`, 'static/etc');
    archive.directory(`${__dirname}/../static/zoia`, 'static/zoia');
    archive.directory(`${__dirname}/../static/uploads`, 'static/uploads');
    archive.directory(`${__dirname}/../static/custom`, 'static/custom');
    ['web.js', 'tools.js', 'server-config.js'].map(f => archive.file(`${__dirname}/../bin/${f}`, {
        name: `bin/${f}`
    }));
    archive.finalize();
    output.on('close', () => {
        console.log(`New build package has been created: dist/${filename}`);
        console.log(`${archive.pointer()} total bytes`);
    });
};

const packEverything = () => {
    const filename = `${id}.zip`;
    fs.ensureDirSync(`${__dirname}/../dist/`);
    const output = fs.createWriteStream(`${__dirname}/../dist/${filename}`);
    const archive = archiver('zip', {
        zlib: {
            level: 9
        }
    });
    archive.pipe(output);
    ['package.json', 'package-lock.json', 'README.md', 'LICENSE'].map(f => archive.file(`${__dirname}/../${f}`, {
        name: f
    }));
    ['templates.json', 'secure.json'].map(f => archive.file(`${__dirname}/../etc/${f}`, {
        name: `etc/${f}`
    }));
    archive.directory(`${__dirname}/../static`, 'static');
    ['api.js', 'web.js', 'tools.js', 'server-config.js'].map(f => archive.file(`${__dirname}/../bin/${f}`, {
        name: `bin/${f}`
    }));
    archive.finalize();
    output.on('close', () => {
        console.log(`New build package has been created: dist/${filename}`);
        console.log(`${archive.pointer()} total bytes`);
    });
};

const start = async () => {
    const data = await inquirer.prompt(questions);
    console.log('Creating ZIP archive(s) containing required files...');
    switch (data.mode) {
    case 'API':
        packAPI();
        break;
    case 'Web':
        packWeb();
        break;
    case 'Admin':
        packAdmin();
        break;
    case 'Everything (multiple archives)':
        packAPI();
        packWeb();
        packAdmin();
        break;
    default:
        packEverything();
    }
};

start();
