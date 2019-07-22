/* eslint no-console:0 */
const inquirer = require('inquirer');
const commandLineArgs = require('command-line-args');
const colors = require('colors/safe');
const fs = require('fs-extra');
const path = require('path');
const crypto = require('crypto');
const uuid = require('uuid/v1');
const gettextParser = require('gettext-parser');
const {
    MongoClient
} = require('mongodb');

let db;
const optionDefinitions = [{
    name: 'modify',
    alias: 'm',
    type: Boolean
}, {
    name: 'split',
    alias: 's',
    type: Boolean
}, {
    name: 'combine',
    alias: 'c',
    type: Boolean
}];
const options = commandLineArgs(optionDefinitions);
const config = require(options.modify && fs.existsSync(`${__dirname}/../etc/config.json`) ? '../etc/config.json' : '../etc/templates/config.json');
const modules = fs.readdirSync(path.join(__dirname, '..', 'modules'));
const questions = [{
        type: 'confirm',
        name: 'configure',
        message: 'Set values in config.json?',
        default: true
    },
    {
        type: 'input',
        name: 'ip',
        message: 'Which IP address should API listen to?',
        default: config.httpServer.ip,
        when: a => a.configure
    },
    {
        type: 'input',
        name: 'port',
        message: 'Which port should API listen to?',
        default: config.httpServer.port,
        when: a => a.configure
    },
    {
        type: 'input',
        name: 'apiURL',
        message: 'Which Zoia API URL to use?',
        default: config.apiURL,
        when: a => a.configure
    },
    {
        type: 'input',
        name: 'mongourl',
        message: 'Mongo server URL?',
        default: config.mongo.url,
        when: a => a.configure
    },
    {
        type: 'input',
        name: 'mongodb',
        message: 'Mongo database name?',
        default: config.mongo.dbName,
        when: a => a.configure
    },
    {
        type: 'rawlist',
        name: 'loglevel',
        message: 'Loglevel?',
        choices: ['info', 'warn', 'error'],
        default: config.loglevel,
        when: a => a.configure
    },
    {
        type: 'rawlist',
        name: 'install',
        message: 'Which modules to process?',
        choices: ['All', 'None', ...modules],
        default: 'All'
    }
];

const splitLocales = () => {
    console.log(`${colors.green(' * ')} Spliting locales...`);
    ['user', 'admin'].map(t => {
        const locales = fs.readdirSync(`${__dirname}/../shared/locales/${t}`);
        locales.filter(l => l !== '_build').map(locale => {
            const transModules = {};
            const input = fs.readFileSync(`${__dirname}/../shared/locales/${t}/${locale}/messages.po`);
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
                            const ms = m.split(/\//);
                            const area = ms.length >= 2 && ms[0] === 'modules' ? ms[1] : '_core';
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
                const dir = m === '_core' ? `${__dirname}/../core/locales/${locale}` : `../modules/${m}/locales/${t}/${locale}`;
                const filename = m === '_core' ? `${__dirname}/../core/locales/${locale}/messages.po` : `../modules/${m}/locales/${t}/${locale}/messages.po`;
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
};

const combieLocales = () => {
    console.log(`${colors.green(' * ')} Combining locales...`);
    ['user', 'admin'].map(t => {
        const locales = fs.readdirSync(`${__dirname}/../core/locales`);
        locales.filter(l => l !== '_build').map(locale => {
            const messagesCore = fs.readFileSync(`${__dirname}/../core/locales/${locale}/messages.po`);
            const messagesCorePo = gettextParser.po.parse(messagesCore);
            const messagesCoreTrans = messagesCorePo.translations[''];
            modules.map(m => {
                if (!fs.existsSync(`${__dirname}/../modules/${m}/locales/${t}/${locale}/messages.po`)) {
                    return;
                }
                const messagesModule = fs.readFileSync(`${__dirname}/../modules/${m}/locales/${t}/${locale}/messages.po`);
                const messagesModulePo = gettextParser.po.parse(messagesModule);
                const messagesModuleTrans = messagesModulePo.translations[''];
                Object.keys(messagesModuleTrans).map(mmt => {
                    if (!messagesCoreTrans[mmt]) {
                        messagesCoreTrans[mmt] = messagesModuleTrans[mmt];
                    }
                });
            });
            const data = gettextParser.po.compile({
                charset: messagesCorePo.charset,
                headers: messagesCorePo.headers,
                translations: {
                    '': messagesCoreTrans
                }
            });
            fs.writeFileSync(`${__dirname}/../shared/locales/${t}/${locale}/messages.po`, data);
        });
    });
};

const install = async () => {
    try {
        console.log(colors.green.inverse('                                      '));
        console.log(colors.green.inverse(' Zoia Installation                    '));
        console.log(colors.green.inverse('                                      '));
        console.log('');
        console.log('This script will generate the configuration file for Zoia,\ncreate the collections in the MongoDB, ensure the database\nindexes, etc.');
        console.log('');
        const data = await inquirer.prompt(questions);
        console.log('');
        if (data.configure) {
            console.log(`${colors.green(' * ')} Saving configuration to config.json file...`);
            config.httpServer.ip = data.ip;
            config.httpServer.port = data.port;
            config.apiURL = data.apiURL;
            config.mongo.url = data.mongourl;
            config.mongo.dbName = data.mongodb;
            config.loglevel = data.loglevel;
            if (!options.modify) {
                config.secret = crypto.createHmac('sha256', uuid()).update(uuid()).digest('hex');
            }
            fs.writeJSONSync('../etc/config.json', config, {
                spaces: 2
            });
        }
        const mongoClient = new MongoClient(config.mongo.url, {
            useNewUrlParser: true
        });
        await mongoClient.connect();
        db = mongoClient.db(config.mongo.dbName);
        if (data.install !== 'None') {
            await Promise.all((data.install === 'All' ? modules : [data.install]).map(async m => {
                console.log(`${colors.green(' * ')} Processing module: ${m}...`);
                if (fs.existsSync(`${__dirname}/../modules/${m}/database.json`)) {
                    const moduleDatabaseConfig = require(`../modules/${m}/database.json`);
                    const collections = Object.keys(moduleDatabaseConfig.collections);
                    if (collections.length) {
                        await Promise.all(collections.map(async c => {
                            console.log(`${colors.green(' * ')} Creating collection: ${c}...`);
                            try {
                                await db.createCollection(c);
                            } catch (e) {
                                console.log('');
                                console.log(colors.red(e));
                                process.exit(1);
                            }
                            const {
                                indexesAsc,
                                indexesDesc
                            } = moduleDatabaseConfig.collections[c];
                            if (indexesAsc && indexesAsc.length) {
                                console.log(`${colors.green(' * ')} Creating ASC indexes for collection: ${c}...`);
                                const indexes = {};
                                indexesAsc.map(i => indexes[i] = 1);
                                try {
                                    await db.collection(c).createIndex(indexes, {
                                        name: `${m}_asc`
                                    });
                                } catch (e) {
                                    console.log('');
                                    console.log(colors.red(e));
                                    process.exit(1);
                                }
                            }
                            if (indexesDesc && indexesDesc.length) {
                                console.log(`${colors.green(' * ')} Creating DESC indexes for collection: ${c}...`);
                                const indexes = {};
                                indexesDesc.map(i => indexes[i] = 1);
                                try {
                                    await db.collection(c).createIndex(indexes, {
                                        name: `${m}_desc`
                                    });
                                } catch (e) {
                                    console.log('');
                                    console.log(colors.red(e));
                                    process.exit(1);
                                }
                            }
                        }));
                    }
                }
                if (fs.existsSync(`${__dirname}/../modules/${m}/install.js`)) {
                    console.log(`${colors.green(' * ')} Running installation script for module: ${m}...`);
                    const installScript = require(`../modules/${m}/install.js`);
                    await installScript(db);
                }
            }));
        }
        console.log(`${colors.green(' * ')} Done`);
        console.log('');
        console.log(`${colors.yellow('Please do the following:\n\n1. Check your')} ${colors.bold('config.js')} ${colors.yellow('file and apply missing changes.\n2. Re-build locales using')} ${colors.bold('npm run rebuild-locales')} ${colors.yellow('command.\n3. Re-build Zoia using')} ${colors.bold('npm run build')} ${colors.yellow('command.')}`);
        mongoClient.close();
    } catch (e) {
        console.log('');
        console.log(colors.red(e));
        process.exit(1);
    }
};

// Do we only need to split locales?
if (options.split) {
    splitLocales();
    console.log(`${colors.green(' * ')} Done`);
    process.exit(0);
}

// Do we only need to combine locales?
if (options.combine) {
    combieLocales();
    console.log(`${colors.green(' * ')} Done`);
    process.exit(0);
}

install();
