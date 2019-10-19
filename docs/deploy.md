# Deployment

Zoia can be deployed on any Linux, UNIX or Windows server where Node.js and MongoDB run. 

The API and Web servers can run on a different physical servers.

## Helper script

There is a script which will help you to generate the required configuration files to deploy Zoia on your server.

To generate a set of configuration files and a package to upload to your server, you may execute the following script:

`node bin/package`

The following configuration files are generated:

* *dist/config/nginx*: configuration files for NGINX
* *dist/config/rsyslog.d*: configuration files for rsyslog daemon (for logging purposes
* *dist/config/systemd*: systemd configuration files

The file which can be uploaded to a server is located in a *dist/zoia* directory (as a ZIP archive).

## Static files

The static files which need to be exposed to the Web are located in a *static* directory. The */admin/** server location need to point to the *static/data_admin/admin.html* file.

All other routes need to be checked by the server in the *static* directory first; if none are found, the server (e.g. NGINX) needs to check the corresponding route on the Web server running by Zoia. 

## Web Server

Zoia is running a Web server which handles all requests except of */admin* and */api* routes.

## API Server

Zoia is running an API server which handles all requests to the */api* route.