# Installation

Install the latest version of Zoia from Github:

`git clone https://github.com/xtremespb/zoia2.git && cd zoia2`

Install required NPM modules:

`npm i`

Generate configuration files:

`npm run configure`

This script will generate four configuration files: *static/etc/config.json*, *etc/secure.json* and *etc/templates.json*. You may wish to modify them according to your needs.

Build your Zoia ready for production:

`npm run build`

After a sucessful build, you will need to run the installation script:

`npm run install-modules`

You will also need to run the script to install all required defaults (e.g. default "admin" user):

`npm run install-defaults`

To run Zoia, you will need to execute the following scripts:

`node bin/api`
`node bin/web`

After a successful start, check your server configuration, e.g. you may need to following configuration for NGINX server (replace "example.com" with your domain name, "/path/to/zoia" with a path to Zoia root direcotry, "your_api_server_ip" with your Zoia API Server IP address, "your_api_server_port" with your Zoia API Server port):

listen 80;
server_name example.com;
root /path/to/zoia/static;
access_log /path/to/zoia/logs/nginx_siteid_access.log;
error_log /path/to/zoia/logs/nginx_siteid_error.log;
location /admin {
    try_files $uri /data_admin/admin.html;
}
location / {
    try_files $uri @node;
}
location @node {
    proxy_set_header Host $http_host;
    proxy_set_header X-Forwarded-For $remote_addr;
    proxy_pass http://your_api_server_ip:your_api_server_port;
}

After a successful configuration of your web server, you may access your Zoia instance under the following URLs:

http://example.com/
http://example.com/admin (use admin/password to access the administration area)

Read more on how to [deploy](deploy.md) your server.