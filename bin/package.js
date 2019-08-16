/* eslint no-console:0 */
const fs = require('fs');
const archiver = require('archiver');
const uuid = require('uuid/v1');

const filename = `${uuid()}.zip`;
const output = fs.createWriteStream(`${__dirname}/../dist/${filename}`);
const archive = archiver('zip', {
    zlib: {
        level: 9
    }
});
output.on('close', () => {
    console.log(`New build package has been created: dist/${filename}`);
    console.log(`${archive.pointer()} total bytes`);
});
archive.pipe(output);
['package.json', 'package-lock.json', 'README.md', 'LICENSE'].map(f => archive.file(`${__dirname}/../${f}`, { name: f }));
['config.json', 'secure.json.map(f => archive.file(`${__dirname}/../etc/${f}`, { name: `etc/${f}` }));
archive.directory(`${__dirname}/../bin`, 'bin');
archive.directory(`${__dirname}/../static`, 'static');
archive.finalize();
