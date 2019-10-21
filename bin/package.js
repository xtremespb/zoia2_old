/* eslint no-console:0 */
const fs = require('fs-extra');
const archiver = require('archiver');
const path = require('path');
const uuid = require('uuid/v1');
const config = require('../static/etc/config.json');
const secure = require('../etc/secure.json');

const filename = `${uuid()}.zip`;
const output = fs.createWriteStream(`${__dirname}/../dist/zoia/${filename}`);
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
['web.js', 'api.js', 'tools.js'].map(f => archive.file(`${__dirname}/../bin/${f}`, {
    name: `bin/${f}`
}));
archive.directory(`${__dirname}/../static`, 'static');
archive.finalize();
console.log('Creating ZIP archive containing required files...');
output.on('close', () => {
    console.log(`New build package has been created: dist/${filename}`);
    console.log(`${archive.pointer()} total bytes`);
    const systemdAPI = fs.readFileSync(`${__dirname}/../shared/templates/systemd-api.service`, 'utf8')
        .replace(/{siteid}/igm, config.id)
        .replace(/{user}/igm, secure.user)
        .replace(/{group}/igm, secure.group)
        .replace(/{path}/igm, path.resolve(`${__dirname}/../bin/api.js`).replace(/\\/gm, '/'));
    const systemdWeb = fs.readFileSync(`${__dirname}/../shared/templates/systemd-web.service`, 'utf8')
        .replace(/{siteid}/igm, config.id)
        .replace(/{user}/igm, secure.user)
        .replace(/{group}/igm, secure.group)
        .replace(/{path}/igm, path.resolve(`${__dirname}/../bin/api.js`).replace(/\\/gm, '/'));
    const rsyslogAPI = fs.readFileSync(`${__dirname}/../shared/templates/rsyslog.conf`, 'utf8')
        .replace(/{siteid}/igm, config.id)
        .replace(/{prefix}/igm, 'api')
        .replace(/{filename}/igm, `${config.id}_api.log`)
        .replace(/{path}/igm, path.resolve(`${__dirname}/../logs`).replace(/\\/gm, '/'));
    const rsyslogWeb = fs.readFileSync(`${__dirname}/../shared/templates/rsyslog.conf`, 'utf8')
        .replace(/{siteid}/igm, config.id)
        .replace(/{prefix}/igm, 'web')
        .replace(/{filename}/igm, `${config.id}_web.log`)
        .replace(/{path}/igm, path.resolve(`${__dirname}/../logs`).replace(/\\/gm, '/'));
    const nginx = fs.readFileSync(`${__dirname}/../shared/templates/nginx.conf`, 'utf8')
        .replace(/{siteid}/igm, config.id)
        .replace(/{webIP}/igm, secure.webServer.ip)
        .replace(/{webPort}/igm, secure.webServer.port)
        .replace(/{serverName}/igm, secure.serverName)
        .replace(/{logPath}/igm, path.resolve(`${__dirname}/../logs`).replace(/\\/gm, '/'))
        .replace(/{staticPath}/igm, path.resolve(`${__dirname}/../static`).replace(/\\/gm, '/'));
    console.log(`Writing systemd/${config.id}_api.service...`);
    fs.writeFileSync(`${__dirname}/../dist/config/systemd/${config.id}_api.service`, systemdAPI);
    console.log(`Writing systemd/${config.id}_web.service...`);
    fs.writeFileSync(`${__dirname}/../dist/config/systemd/${config.id}_web.service`, systemdWeb);
    console.log(`Writing rsyslog.d/${config.id}_api.conf...`);
    fs.writeFileSync(`${__dirname}/../dist/config/rsyslog.d/${config.id}_web.conf`, rsyslogAPI);
    console.log(`Writing rsyslog.d/${config.id}_web.conf...`);
    fs.writeFileSync(`${__dirname}/../dist/config/rsyslog.d/${config.id}_api.conf`, rsyslogWeb);
    console.log(`Writing nginx/${config.id}.conf...`);
    fs.writeFileSync(`${__dirname}/../dist/config/nginx/${config.id}.conf`, nginx);
});
