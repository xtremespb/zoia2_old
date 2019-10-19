# Configuration files

To generate configuration files, you may run the following command:

* `npm run configure`

Zoia can be configured using different configuration files:

* *api.json*: API-related configuration
* *config.json*: common configuration file (exposed to the public)
* *secure.json*: server-related configuration file (not exposed to the public)
* *site.json*: configuration which is related to a specific website

## api.json

* *url*: URL where the API Server can be reached

## config.json

* *siteTitle*: a title of your website which is used to display in a browser window
* *commonItemsLimit*: how many items to display in all generic dynamic tables (admin area)
* *allowRegistration*: allow new user sign ups
* *wysiwyg*: use WYSIWYG editor (where applicable)

## secure.json

* *secret*: a random string used to encrypt data
* *authTokenExpiresIn*: authentication token expiration time
* *mongo.url*: an URL which can be used to connect to the MongoDB server
* *mongo.dbName*: MongoDB database
* *originCORS*: CORS origin (if API server is located on a different server)
* *trustProxy*: should a proxy be trusted (useful if you are running API or Web servers behind proxy)
* *apiServer.ip*: API Server IP address
* *apiServer.port*: API Server port
* *webServer.ip*: Web Server IP
* *webServer.port*: Web Server port
* *development*: use development mode for your Zoia instance (useful only if you are a developer)
* *loglevel*: either "info", "warn" or "error"
* *stackTrace*: display stack traces in Log files
* *user*: an username which will be used to run Zoia (useful for systemd configuration) - optional
* *group*: a group which will be used to run Zoia (useful for systemd configuration) - optional
* *serverName*: server name(s) which are used for NGINX configuration - optional

## site.json

* *id*: uniquie Zoia instance ID
* *languages[]*: an array of Zoia languages available
* *cookieOptions*: cookie options
* *useUIkitOnFrontend*: set to *true* if your frontend template uses UIkit CSS framework
* *templates[]*: an array of templates available