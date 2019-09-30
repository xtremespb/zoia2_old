/* eslint no-console:0 */
const fs = require('fs-extra');
const inquirer = require('inquirer');
const colors = require('colors/safe');
const crypto = require('crypto');
const uuid = require('uuid/v1');

const install = async () => {
    const config = require('../shared/templates/config.json');
    const security = require('../shared/templates/secure.json');
    const api = require('../shared/templates/api.json');
    const site = require('../shared/templates/site.json');
    const questions = [{
            type: 'input',
            name: 'ipAPI',
            message: 'Which IP address should API listen to?',
            default: security.apiServer.ip,
        },
        {
            type: 'input',
            name: 'portAPI',
            message: 'Which port should API listen to?',
            default: security.apiServer.port,
        },
        {
            type: 'input',
            name: 'ipWeb',
            message: 'Which IP address should Web Server listen to?',
            default: security.webServer.ip,
        },
        {
            type: 'input',
            name: 'portWeb',
            message: 'Which port should WebServer listen to?',
            default: security.wevServer.port,
        },
        {
            type: 'input',
            name: 'apiURL',
            message: 'Which Zoia API URL to use?',
            default: api.url,
        },
        {
            type: 'input',
            name: 'mongourl',
            message: 'Mongo server URL?',
            default: security.mongo.url,
        },
        {
            type: 'input',
            name: 'mongodb',
            message: 'Mongo database name?',
            default: security.mongo.dbName,
        },
        {
            type: 'rawlist',
            name: 'loglevel',
            message: 'Loglevel?',
            choices: ['info', 'warn', 'error'],
            default: security.loglevel,
        }
    ];
    try {
        console.log(`This script will generate the configuration files (config.json and secure.json).`);
        console.log('');
        const data = await inquirer.prompt(questions);
        console.log('');
        security.apiServer.ip = data.ipAPI;
        security.apiServer.port = data.portAPI;
        security.webServer.ip = data.ipWeb;
        security.webServer.port = data.portWeb;
        api.url = data.apiURL;
        security.mongo.url = data.mongourl;
        security.mongo.dbName = data.mongodb;
        security.loglevel = data.loglevel;
        security.secret = crypto.createHmac('sha256', uuid()).update(uuid()).digest('hex');
        console.log(`${colors.green(' * ')} Saving configuration to config.json file...`);
        fs.writeJSONSync(`${__dirname}/../etc/config.json`, config, {
            spaces: 2
        });
        console.log(`${colors.green(' * ')} Saving configuration to secure.json file...`);
        fs.writeJSONSync(`${__dirname}/../etc/secure.json`, security, {
            spaces: 2
        });
        console.log(`${colors.green(' * ')} Saving configuration to api.json file...`);
        fs.writeJSONSync(`${__dirname}/../etc/api.json`, api, {
            spaces: 2
        });
        console.log(`${colors.green(' * ')} Saving configuration to site.json file...`);
        fs.writeJSONSync(`${__dirname}/../etc/site.json`, site, {
            spaces: 2
        });
        console.log(`${colors.green(' * ')} Done`);
    } catch (e) {
        console.log('');
        console.log(colors.red(e));
        process.exit(1);
    }
};

console.log(colors.green.inverse('\n                                      '));
console.log(colors.green.inverse(' Zoia 2 Configurator                  '));
console.log(colors.green.inverse('                                      \n'));

install();
