# Installation

Install the latest version of Zoia from Github:

* `git clone https://github.com/xtremespb/zoia2.git && cd zoia2`

Install required NPM modules:

* `npm i`

Generate configuration files:

* `npm run configure`

This script will generate four configuration files: *etc/api.json*, *etc/config.json*, *etc/secure.json* and *etc/site.json*. You may wish to modify them according to your needs.

Build your Zoia ready for production:

* `npm run build`

After a sucessful build, you will need to run the installation script:

* `npm run install-modules`

To run Zoia, you will need to execute the following scripts:

* `node bin/api`
* `node bin/web`