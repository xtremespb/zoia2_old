/* eslint no-console:0 */
const fs = require('fs-extra');
const inquirer = require('inquirer');
const colors = require('colors/safe');
const crypto = require('crypto');
const uuid = require('uuid/v1');
const path = require('path');

const install = async () => {
    const config = require('../shared/templates/config.json');
    const secure = require('../shared/templates/secure.json');
    const api = require('../shared/templates/api.json');
    const site = require('../shared/templates/site.json');
    const questions = [{
            type: 'input',
            name: 'ipAPI',
            message: 'Which IP address should API listen to?',
            default: secure.apiServer.ip,
        },
        {
            type: 'input',
            name: 'portAPI',
            message: 'Which port should API listen to?',
            default: secure.apiServer.port,
        },
        {
            type: 'input',
            name: 'ipWeb',
            message: 'Which IP address should Web Server listen to?',
            default: secure.webServer.ip,
        },
        {
            type: 'input',
            name: 'portWeb',
            message: 'Which port should WebServer listen to?',
            default: secure.webServer.port,
        },
        {
            type: 'input',
            name: 'apiURL',
            message: 'Which Zoia API URL to use?',
            default: api.url,
        },
        {
            type: 'input',
            name: 'user',
            message: 'User to run systemd startup script?',
            default: secure.user,
        },
        {
            type: 'input',
            name: 'group',
            message: 'Group to run systemd startup script?',
            default: secure.group,
        },
        {
            type: 'input',
            name: 'mongourl',
            message: 'Mongo server URL?',
            default: secure.mongo.url,
        },
        {
            type: 'input',
            name: 'mongodb',
            message: 'Mongo database name?',
            default: secure.mongo.dbName,
        },
        {
            type: 'input',
            name: 'serverName',
            message: 'Host name(s) for NGINX config?',
            default: secure.serverName,
        },
        {
            type: 'rawlist',
            name: 'loglevel',
            message: 'Which Log level to use?',
            choices: ['info', 'warn', 'error'],
            default: secure.loglevel,
        }
    ];
    try {
        console.log(`This script will generate the configuration files (config.json and secure.json).`);
        console.log('');
        const data = await inquirer.prompt(questions);
        console.log('');
        secure.apiServer.ip = data.ipAPI;
        secure.apiServer.port = data.portAPI;
        secure.webServer.ip = data.ipWeb;
        secure.webServer.port = data.portWeb;
        api.url = data.apiURL;
        secure.mongo.url = data.mongourl;
        secure.mongo.dbName = data.mongodb;
        secure.loglevel = data.loglevel;
        secure.secret = crypto.createHmac('sha256', uuid()).update(uuid()).digest('hex');
        secure.user = data.user;
        secure.group = data.group;
        console.log(`${colors.green(' * ')} Saving configuration to config.json file...`);
        fs.writeJSONSync(path.resolve(`${__dirname}/../etc/config.json`), config, {
            spaces: 2
        });
        console.log(`${colors.green(' * ')} Saving configuration to secure.json file...`);
        fs.writeJSONSync(path.resolve(`${__dirname}/../etc/secure.json`), secure, {
            spaces: 2
        });
        console.log(`${colors.green(' * ')} Saving configuration to api.json file...`);
        fs.writeJSONSync(path.resolve(`${__dirname}/../etc/api.json`), api, {
            spaces: 2
        });
        console.log(`${colors.green(' * ')} Saving configuration to site.json file...`);
        fs.writeJSONSync(path.resolve(`${__dirname}/../etc/site.json`), site, {
            spaces: 2
        });
        console.log(`${colors.green(' * ')} Done\n`);
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
