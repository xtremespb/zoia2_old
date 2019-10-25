/* eslint no-console:0 */
const fs = require('fs-extra');
const path = require('path');
const config = require('../static/etc/config.json');
const secure = require('../etc/secure.json');

const systemdAPI = fs.readFileSync(`${__dirname}/../etc/source/systemd-api.service`, 'utf8')
    .replace(/{siteid}/igm, config.id)
    .replace(/{user}/igm, secure.user)
    .replace(/{group}/igm, secure.group)
    .replace(/{path}/igm, path.resolve(`${__dirname}/../bin/api.js`).replace(/\\/gm, '/'));
const systemdWeb = fs.readFileSync(`${__dirname}/../etc/source/systemd-web.service`, 'utf8')
    .replace(/{siteid}/igm, config.id)
    .replace(/{user}/igm, secure.user)
    .replace(/{group}/igm, secure.group)
    .replace(/{path}/igm, path.resolve(`${__dirname}/../bin/web.js`).replace(/\\/gm, '/'));
const rsyslogAPI = fs.readFileSync(`${__dirname}/../etc/source/rsyslog.conf`, 'utf8')
    .replace(/{siteid}/igm, config.id)
    .replace(/{prefix}/igm, 'api')
    .replace(/{filename}/igm, `${config.id}_api.log`)
    .replace(/{path}/igm, path.resolve(`${__dirname}/../logs`).replace(/\\/gm, '/'));
const rsyslogWeb = fs.readFileSync(`${__dirname}/../etc/source/rsyslog.conf`, 'utf8')
    .replace(/{siteid}/igm, config.id)
    .replace(/{prefix}/igm, 'web')
    .replace(/{filename}/igm, `${config.id}_web.log`)
    .replace(/{path}/igm, path.resolve(`${__dirname}/../logs`).replace(/\\/gm, '/'));
const nginx = fs.readFileSync(`${__dirname}/../etc/source/nginx.conf`, 'utf8')
    .replace(/{siteid}/igm, config.id)
    .replace(/{webIP}/igm, secure.webServer.ip)
    .replace(/{webPort}/igm, secure.webServer.port)
    .replace(/{apiIP}/igm, secure.apiServer.ip)
    .replace(/{apiPort}/igm, secure.apiServer.port)
    .replace(/{serverName}/igm, secure.serverName)
    .replace(/{logPath}/igm, path.resolve(`${__dirname}/../logs`).replace(/\\/gm, '/'))
    .replace(/{staticPath}/igm, path.resolve(`${__dirname}/../static`).replace(/\\/gm, '/'));
fs.ensureDirSync(`${__dirname}/../etc/server/systemd`);
fs.ensureDirSync(`${__dirname}/../etc/server/rsyslog.d`);
fs.ensureDirSync(`${__dirname}/../etc/server/nginx`);
console.log(`Writing etc/server/systemd/${config.id}_api.service...`);
fs.writeFileSync(`${__dirname}/../etc/server/systemd/${config.id}_api.service`, systemdAPI);
console.log(`Writing etc/server/systemd/${config.id}_web.service...`);
fs.writeFileSync(`${__dirname}/../etc/server/systemd/${config.id}_web.service`, systemdWeb);
console.log(`Writing etc/server/rsyslog.d/${config.id}_api.conf...`);
fs.writeFileSync(`${__dirname}/../etc/server/rsyslog.d/${config.id}_web.conf`, rsyslogAPI);
console.log(`Writing etc/server/rsyslog.d/${config.id}_web.conf...`);
fs.writeFileSync(`${__dirname}/../etc/server/rsyslog.d/${config.id}_api.conf`, rsyslogWeb);
console.log(`Writing etc/server/nginx/${config.id}.conf...`);
fs.writeFileSync(`${__dirname}/../etc/server/nginx/${config.id}.conf`, nginx);
