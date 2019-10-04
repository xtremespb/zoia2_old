module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/data_user/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../__MARKO_WEBPACK__MANIFEST.js":
/*!*********************************************************************!*\
  !*** C:/Users/mma2/Documents/JS/zoia2/__MARKO_WEBPACK__MANIFEST.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  getBundleName: function(){return \"Web Server - Client Part\"},\n  entries: {\"markoTest_fK4C\":{\"Web Server - Client Part\":{\"css\":[\"markoTest_fK4C_71e29153.css\"],\"js\":[\"npm.marko.11beca11.js\",\"npm.uikit.e8ada015.js\",\"vendors~markoTest_fK4C.053f4074.js\",\"markoTest_fK4C.8fc85916.js\"],\"map\":[\"npm.marko.11beca11.js.map\",\"npm.uikit.e8ada015.js.map\",\"vendors~markoTest_fK4C.053f4074.js.map\",\"markoTest_fK4C.8fc85916.js.map\"]}}}\n}\n\n//# sourceURL=webpack:///C:/Users/mma2/Documents/JS/zoia2/__MARKO_WEBPACK__MANIFEST.js?");

/***/ }),

/***/ "../../etc/config.json":
/*!********************************************************!*\
  !*** C:/Users/mma2/Documents/JS/zoia2/etc/config.json ***!
  \********************************************************/
/*! exports provided: siteTitle, commonItemsLimit, allowRegistration, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"siteTitle\\\":{\\\"en\\\":\\\"Example Website\\\",\\\"ru\\\":\\\"Тестовый веб-сайт\\\"},\\\"commonItemsLimit\\\":12,\\\"allowRegistration\\\":true}\");\n\n//# sourceURL=webpack:///C:/Users/mma2/Documents/JS/zoia2/etc/config.json?");

/***/ }),

/***/ "../../etc/secure.json":
/*!********************************************************!*\
  !*** C:/Users/mma2/Documents/JS/zoia2/etc/secure.json ***!
  \********************************************************/
/*! exports provided: secret, authTokenExpiresIn, mongo, apiServer, webServer, originCORS, trustProxy, development, loglevel, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"secret\\\":\\\"79a947c3cbecfb5819b03f21eb00b3180e649bea0c189a7f4ff0bdd10e1fd292\\\",\\\"authTokenExpiresIn\\\":\\\"7 days\\\",\\\"mongo\\\":{\\\"url\\\":\\\"mongodb://localhost:27017\\\",\\\"dbName\\\":\\\"zoia\\\"},\\\"apiServer\\\":{\\\"ip\\\":\\\"127.0.0.1\\\",\\\"port\\\":3000},\\\"webServer\\\":{\\\"ip\\\":\\\"127.0.0.1\\\",\\\"port\\\":3001},\\\"originCORS\\\":\\\"*\\\",\\\"trustProxy\\\":true,\\\"development\\\":false,\\\"loglevel\\\":\\\"info\\\"}\");\n\n//# sourceURL=webpack:///C:/Users/mma2/Documents/JS/zoia2/etc/secure.json?");

/***/ }),

/***/ "../../etc/site.json":
/*!******************************************************!*\
  !*** C:/Users/mma2/Documents/JS/zoia2/etc/site.json ***!
  \******************************************************/
/*! exports provided: id, languages, cookieOptions, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"id\\\":\\\"zoia2\\\",\\\"languages\\\":{\\\"en\\\":\\\"English\\\",\\\"ru\\\":\\\"Русский\\\"},\\\"cookieOptions\\\":{\\\"expires\\\":604800,\\\"path\\\":\\\"/\\\",\\\"domain\\\":\\\"\\\",\\\"secure\\\":false}}\");\n\n//# sourceURL=webpack:///C:/Users/mma2/Documents/JS/zoia2/etc/site.json?");

/***/ }),

/***/ "../../modules lazy recursive ^\\.\\/.*\\/user\\/index\\.js$":
/*!************************************************************************************************!*\
  !*** C:/Users/mma2/Documents/JS/zoia2/modules lazy ^\.\/.*\/user\/index\.js$ namespace object ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./admin/user/index.js\": [\n\t\t\"../../modules/admin/user/index.js\",\n\t\t\"main\"\n\t],\n\t\"./pages/user/index.js\": [\n\t\t\"../../modules/pages/user/index.js\",\n\t\t\"main\"\n\t],\n\t\"./registry/user/index.js\": [\n\t\t\"../../modules/registry/user/index.js\",\n\t\t\"main\"\n\t],\n\t\"./users/user/index.js\": [\n\t\t\"../../modules/users/user/index.js\",\n\t\t\"main\"\n\t]\n};\nfunction webpackAsyncContext(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\treturn Promise.resolve().then(function() {\n\t\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\t\te.code = 'MODULE_NOT_FOUND';\n\t\t\tthrow e;\n\t\t});\n\t}\n\n\tvar ids = map[req], id = ids[0];\n\treturn __webpack_require__.e(ids[1]).then(function() {\n\t\treturn __webpack_require__(id);\n\t});\n}\nwebpackAsyncContext.keys = function webpackAsyncContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackAsyncContext.id = \"../../modules lazy recursive ^\\\\.\\\\/.*\\\\/user\\\\/index\\\\.js$\";\nmodule.exports = webpackAsyncContext;\n\n//# sourceURL=webpack:///C:/Users/mma2/Documents/JS/zoia2/modules_lazy_^\\.\\/.*\\/user\\/index\\.js$_namespace_object?");

/***/ }),

/***/ "../../modules/admin/user/index.js":
/*!********************************************************************!*\
  !*** C:/Users/mma2/Documents/JS/zoia2/modules/admin/user/index.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// import markoTest from './markoTest';\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => { // fastify\r\n    // fastify.post('/', markoTest(fastify));\r\n});\r\n\n\n//# sourceURL=webpack:///C:/Users/mma2/Documents/JS/zoia2/modules/admin/user/index.js?");

/***/ }),

/***/ "../../modules/pages/user/index.js":
/*!********************************************************************!*\
  !*** C:/Users/mma2/Documents/JS/zoia2/modules/pages/user/index.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _markoTest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./markoTest */ \"../../modules/pages/user/markoTest/index.js\");\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (fastify => { // fastify\r\n    fastify.get('/', Object(_markoTest__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(fastify));\r\n    fastify.get('/ru', Object(_markoTest__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(fastify));\r\n    fastify.get('/en', Object(_markoTest__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(fastify));\r\n    fastify.get('/de', Object(_markoTest__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(fastify));\r\n});\r\n\n\n//# sourceURL=webpack:///C:/Users/mma2/Documents/JS/zoia2/modules/pages/user/index.js?");

/***/ }),

/***/ "../../modules/pages/user/markoTest/components/test/index.marko":
/*!*************************************************************************************************!*\
  !*** C:/Users/mma2/Documents/JS/zoia2/modules/pages/user/markoTest/components/test/index.marko ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.18.14 - DO NOT EDIT\n\n\nvar marko_template = module.exports = __webpack_require__(/*! marko/src/html */ \"marko/src/html\").t(__filename),\n    marko_component = {\n        onCreate: function() {\n          this.state = {\n              count: 0\n            };\n        },\n        onMount: function() {\n          console.log(\"Mounted in the browser!\");\n        },\n        increment: function() {\n          this.state.count++;\n        }\n      },\n    marko_componentType = \"/zoia2$1.0.0/modules/pages/user/markoTest/components/test/index.marko\",\n    components_helpers = __webpack_require__(/*! marko/src/runtime/components/helpers */ \"marko/src/runtime/components/helpers\"),\n    marko_renderer = components_helpers.r,\n    marko_defineComponent = components_helpers.c,\n    marko_helpers = __webpack_require__(/*! marko/src/runtime/html/helpers */ \"marko/src/runtime/html/helpers\"),\n    marko_escapeXml = marko_helpers.x;\n\nfunction render(input, out, __component, component, state) {\n  var data = input;\n\n  out.w(\"<button type=\\\"button\\\">Click me - Count: \" +\n    marko_escapeXml(state.count) +\n    \"</button>\");\n}\n\nmarko_template._ = marko_renderer(render, {\n    ___type: marko_componentType\n  }, marko_component);\n\nmarko_template.Component = marko_defineComponent(marko_component, marko_template._);\n\nmarko_template.meta = {\n    id: \"/zoia2$1.0.0/modules/pages/user/markoTest/components/test/index.marko\",\n    component: \"./index.marko\"\n  };\n\n/* WEBPACK VAR INJECTION */}.call(this, \"/index.js\"))\n\n//# sourceURL=webpack:///C:/Users/mma2/Documents/JS/zoia2/modules/pages/user/markoTest/components/test/index.marko?");

/***/ }),

/***/ "../../modules/pages/user/markoTest/components/test2/index.marko":
/*!**************************************************************************************************!*\
  !*** C:/Users/mma2/Documents/JS/zoia2/modules/pages/user/markoTest/components/test2/index.marko ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.18.14 - DO NOT EDIT\n\n\nvar marko_template = module.exports = __webpack_require__(/*! marko/src/html */ \"marko/src/html\").t(__filename),\n    marko_component = {\n        onCreate: function() {\n          this.state = {\n              count: 0\n            };\n        },\n        onMount: function() {\n          console.log(\"Mounted in the browser! (2)\");\n        },\n        increment: function() {\n          this.state.count++;\n        }\n      },\n    marko_componentType = \"/zoia2$1.0.0/modules/pages/user/markoTest/components/test2/index.marko\",\n    components_helpers = __webpack_require__(/*! marko/src/runtime/components/helpers */ \"marko/src/runtime/components/helpers\"),\n    marko_renderer = components_helpers.r,\n    marko_defineComponent = components_helpers.c,\n    marko_helpers = __webpack_require__(/*! marko/src/runtime/html/helpers */ \"marko/src/runtime/html/helpers\"),\n    marko_escapeXml = marko_helpers.x;\n\nfunction render(input, out, __component, component, state) {\n  var data = input;\n\n  out.w(\"<button type=\\\"button\\\">Click me - Count: \" +\n    marko_escapeXml(state.count) +\n    \"</button>\");\n}\n\nmarko_template._ = marko_renderer(render, {\n    ___type: marko_componentType\n  }, marko_component);\n\nmarko_template.Component = marko_defineComponent(marko_component, marko_template._);\n\nmarko_template.meta = {\n    id: \"/zoia2$1.0.0/modules/pages/user/markoTest/components/test2/index.marko\",\n    component: \"./index.marko\"\n  };\n\n/* WEBPACK VAR INJECTION */}.call(this, \"/index.js\"))\n\n//# sourceURL=webpack:///C:/Users/mma2/Documents/JS/zoia2/modules/pages/user/markoTest/components/test2/index.marko?");

/***/ }),

/***/ "../../modules/pages/user/markoTest/index.js":
/*!******************************************************************************!*\
  !*** C:/Users/mma2/Documents/JS/zoia2/modules/pages/user/markoTest/index.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _template_marko__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template.marko */ \"../../modules/pages/user/markoTest/template.marko?assets\");\n/* harmony import */ var _template_marko__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_template_marko__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _shared_lib_site__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/lib/site */ \"../lib/site.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (fastify => ({\n    async handler(req, rep) {\n        try {\n            const siteData = await _shared_lib_site__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getSiteData(req, fastify, this.mongo.db);\n            const render = await _template_marko__WEBPACK_IMPORTED_MODULE_0___default.a.render({\n                $global: {\n                    siteData,\n                    t: siteData.t\n                }\n            });\n            return rep.code(200).type('text/html').send(render.out.stream.str);\n        } catch (e) {\n            return rep.code(500).send(JSON.stringify({\n                statusCode: 500,\n                error: 'Internal server error',\n                message: e.message\n            }));\n        }\n    }\n}));\n\n\n//# sourceURL=webpack:///C:/Users/mma2/Documents/JS/zoia2/modules/pages/user/markoTest/index.js?");

/***/ }),

/***/ "../../modules/pages/user/markoTest/template.marko":
/*!************************************************************************************!*\
  !*** C:/Users/mma2/Documents/JS/zoia2/modules/pages/user/markoTest/template.marko ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.18.14 - DO NOT EDIT\n\n\nvar marko_template = module.exports = __webpack_require__(/*! marko/src/html */ \"marko/src/html\").t(__filename),\n    marko_componentType = \"/zoia2$1.0.0/modules/pages/user/markoTest/template.marko\",\n    components_helpers = __webpack_require__(/*! marko/src/runtime/components/helpers */ \"marko/src/runtime/components/helpers\"),\n    marko_renderer = components_helpers.r,\n    marko_defineComponent = components_helpers.c,\n    marko_helpers = __webpack_require__(/*! marko/src/runtime/html/helpers */ \"marko/src/runtime/html/helpers\"),\n    marko_escapeXml = marko_helpers.x,\n    test_template = __webpack_require__(/*! ./components/test/index.marko */ \"../../modules/pages/user/markoTest/components/test/index.marko\"),\n    marko_loadTag = marko_helpers.t,\n    test_tag = marko_loadTag(test_template),\n    test2_template = __webpack_require__(/*! ./components/test2/index.marko */ \"../../modules/pages/user/markoTest/components/test2/index.marko\"),\n    test2_tag = marko_loadTag(test2_template),\n    template_template = __webpack_require__(/*! ../../../../shared/marko/template/index.marko */ \"./template/index.marko\"),\n    template_tag = marko_loadTag(template_template);\n\nfunction render(input, out, __component, component, state) {\n  var data = input;\n\n  template_tag({\n      renderBody: function(out) {\n        out.w(\"<h1>Hello World from Pages!</h1><p>Global test: \" +\n          marko_escapeXml(out.global.siteData.title) +\n          \"</p><div><h4>Hello world</h4></div> Test: \" +\n          marko_escapeXml(out.global.t[\"Test\"]) +\n          \"<br> Test: \" +\n          marko_escapeXml(out.global.t[\"Another Test\"]) +\n          \"<br>\");\n\n        test_tag({}, out, __component, \"7\");\n\n        test2_tag({}, out, __component, \"8\");\n      }\n    }, out, __component, \"0\");\n}\n\nmarko_template._ = marko_renderer(render, {\n    ___implicit: true,\n    ___type: marko_componentType\n  });\n\nmarko_template.Component = marko_defineComponent({}, marko_template._);\n\nmarko_template.meta = {\n    id: \"/zoia2$1.0.0/modules/pages/user/markoTest/template.marko\",\n    tags: [\n      \"./components/test/index.marko\",\n      \"./components/test2/index.marko\",\n      \"../../../../shared/marko/template/index.marko\"\n    ]\n  };\n\n/* WEBPACK VAR INJECTION */}.call(this, \"/index.js\"))\n\n//# sourceURL=webpack:///C:/Users/mma2/Documents/JS/zoia2/modules/pages/user/markoTest/template.marko?");

/***/ }),

/***/ "../../modules/pages/user/markoTest/template.marko?assets":
/*!*******************************************************************************************!*\
  !*** C:/Users/mma2/Documents/JS/zoia2/modules/pages/user/markoTest/template.marko?assets ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.18.14 - DO NOT EDIT\n\n\nvar marko_template = module.exports = __webpack_require__(/*! marko/src/html */ \"marko/src/html\").t(__filename),\n    marko_componentType = \"/zoia2$1.0.0/modules/pages/user/markoTest/template.marko\",\n    components_helpers = __webpack_require__(/*! marko/src/runtime/components/helpers */ \"marko/src/runtime/components/helpers\"),\n    marko_renderer = components_helpers.r,\n    marko_defineComponent = components_helpers.c,\n    template = __webpack_require__(/*! ./template.marko */ \"../../modules/pages/user/markoTest/template.marko\"),\n    module_MARKOWEBPACKMANIFEST_module = __webpack_require__(/*! ./..//..//..//..//__MARKO_WEBPACK__MANIFEST.js */ \"../../__MARKO_WEBPACK__MANIFEST.js\"),\n    MARKOWEBPACKMANIFEST_module = module_MARKOWEBPACKMANIFEST_module.default || module_MARKOWEBPACKMANIFEST_module,\n    getBundleName = module_MARKOWEBPACKMANIFEST_module.getBundleName,\n    entries = module_MARKOWEBPACKMANIFEST_module.entries,\n    marko_helpers = __webpack_require__(/*! marko/src/runtime/html/helpers */ \"marko/src/runtime/html/helpers\"),\n    marko_dynamicTag = marko_helpers.d,\n    marko_loadTag = marko_helpers.t,\n    init_components_tag = marko_loadTag(__webpack_require__(/*! marko/src/core-tags/components/init-components-tag */ \"marko/src/core-tags/components/init-components-tag\"));\n\nfunction renderAssets() {\n  const assets = this.___assets;\n  this.___renderAssets = this.___assets = undefined;\n  this.flush = this.___flush;\n  this.end = this.___end;\n\n  if (assets) {\n    this.write(`<script>window.$mwp=${JSON.stringify(__webpack_require__.p)}`)\n\n    if (assets.js) {\n      this.write(\n        `;(function(b,h){var e=[],c=0;h.forEach(function(d,f){var a=b.createElement(\"link\");a.relList&&a.relList.supports&&a.relList.supports(\"preload\")?(a.href=d,a.rel=\"preload\",a.as=\"script\",a.addEventListener(\"load\",function(){e[f]=d;if(c===f)for(var a;a=e[c];c++){var g=b.createElement(\"script\");g.src=a;b.head.appendChild(g)}}),b.head.appendChild(a)):(a=b.createElement(\"script\"),a.src=d,a.defer=!0,b.head.appendChild(a))})})(document,${\n          JSON.stringify(assets.js.map(js => __webpack_require__.p+js))\n        })`\n      );\n    }\n\n    this.write(\"</script>\")\n\n    if (assets.css) {\n      assets.css.forEach(css => {\n        this.write(\n          `<link rel=\"stylesheet\" href=${JSON.stringify(__webpack_require__.p+css)}>`\n        );\n      });\n    }\n  }\n};\n\nfunction outFlushOverride() {\n  this.___renderAssets();\n  this.flush();\n};\n\nfunction outEndOverride(data, encoding, callback) {\n  this.___renderAssets();\n  this.end(data, encoding, callback);\n};\n\nfunction render(input, out, __component, component, state) {\n  var data = input;\n\n  out.___flush = out.flush;\n\n  out.___end = out.end;\n\n  out.___renderAssets = renderAssets;\n\n  out.___assets = entries[\"markoTest_fK4C\"][getBundleName(out.global)];\n\n  out.flush = outFlushOverride;\n\n  out.end = outEndOverride;\n\n  marko_dynamicTag(out, template, function() {\n    return input;\n  }, null, null, null, __component, \"0\");\n\n  init_components_tag({}, out);\n}\n\nmarko_template._ = marko_renderer(render, {\n    ___implicit: true,\n    ___type: marko_componentType\n  });\n\nmarko_template.Component = marko_defineComponent({}, marko_template._);\n\nmarko_template.meta = {\n    id: \"/zoia2$1.0.0/modules/pages/user/markoTest/template.marko\",\n    tags: [\n      \"./template.marko\",\n      \"marko/src/core-tags/components/init-components-tag\"\n    ]\n  };\n\n/* WEBPACK VAR INJECTION */}.call(this, \"/index.js\"))\n\n//# sourceURL=webpack:///C:/Users/mma2/Documents/JS/zoia2/modules/pages/user/markoTest/template.marko?");

/***/ }),

/***/ "../../modules/registry/user/index.js":
/*!***********************************************************************!*\
  !*** C:/Users/mma2/Documents/JS/zoia2/modules/registry/user/index.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// import markoTest from './markoTest';\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => { // fastify\r\n    // fastify.post('/', markoTest(fastify));\r\n});\r\n\n\n//# sourceURL=webpack:///C:/Users/mma2/Documents/JS/zoia2/modules/registry/user/index.js?");

/***/ }),

/***/ "../../modules/users/user/index.js":
/*!********************************************************************!*\
  !*** C:/Users/mma2/Documents/JS/zoia2/modules/users/user/index.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// import markoTest from './markoTest';\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => { // fastify\r\n    // fastify.post('/', markoTest(fastify));\r\n});\r\n\n\n//# sourceURL=webpack:///C:/Users/mma2/Documents/JS/zoia2/modules/users/user/index.js?");

/***/ }),

/***/ "../build/modules.json":
/*!*****************************!*\
  !*** ../build/modules.json ***!
  \*****************************/
/*! exports provided: admin, pages, registry, users, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"admin\\\":{\\\"id\\\":\\\"admin\\\",\\\"icon\\\":\\\"\\\",\\\"admin\\\":false,\\\"adminRoute\\\":\\\"/admin/users\\\"},\\\"pages\\\":{\\\"id\\\":\\\"pages\\\",\\\"icon\\\":\\\"file-text\\\",\\\"admin\\\":true,\\\"adminRoute\\\":\\\"/admin/pages\\\"},\\\"registry\\\":{\\\"id\\\":\\\"registry\\\",\\\"icon\\\":\\\"\\\",\\\"admin\\\":false,\\\"adminRoute\\\":\\\"\\\"},\\\"users\\\":{\\\"id\\\":\\\"users\\\",\\\"icon\\\":\\\"users\\\",\\\"admin\\\":true,\\\"adminRoute\\\":\\\"/admin/users\\\"}}\");\n\n//# sourceURL=webpack:///../build/modules.json?");

/***/ }),

/***/ "../lib/auth.js":
/*!**********************!*\
  !*** ../lib/auth.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _etc_site_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../etc/site.json */ \"../../etc/site.json\");\nvar _etc_site_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../etc/site.json */ \"../../etc/site.json\", 1);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    verifyToken: async (token, fastify, db) => {\n        try {\n            const decodedToken = fastify.jwt.decode(token);\n            if (!decodedToken || !decodedToken.userId || !decodedToken.sessionId || Math.floor(Date.now() / 1000) > decodedToken.exp) {\n                return null;\n            }\n            const user = await db.collection('users').findOne({\n                _id: new mongodb__WEBPACK_IMPORTED_MODULE_0__[\"ObjectId\"](decodedToken.userId)\n            });\n            if (!user || !user.active || user.sessionId !== decodedToken.sessionId) {\n                return null;\n            }\n            return user;\n        } catch (e) {\n            return null;\n        }\n    },\n    getUserData: async (req, fastify, db) => {\n        try {\n            if (req.cookies[`${_etc_site_json__WEBPACK_IMPORTED_MODULE_1__.id}_auth`]) {\n                const token = req.cookies[`${_etc_site_json__WEBPACK_IMPORTED_MODULE_1__.id}_auth`];\n                const decodedToken = fastify.jwt.decode(token);\n                if (!decodedToken || !decodedToken.userId || !decodedToken.sessionId || Math.floor(Date.now() / 1000) > decodedToken.exp) {\n                    return {};\n                }\n                const user = await db.collection('users').findOne({\n                    _id: new mongodb__WEBPACK_IMPORTED_MODULE_0__[\"ObjectId\"](decodedToken.userId)\n                });\n                if (!user || !user.active || user.sessionId !== decodedToken.sessionId) {\n                    return {};\n                }\n                return {\n                    id: user._id,\n                    active: user.active,\n                    admin: user.admin,\n                    username: user.username\n                };\n            }\n        } catch (e) {\n            // Ignore\n        }\n        return {};\n    }\n\n});\n\n\n//# sourceURL=webpack:///../lib/auth.js?");

/***/ }),

/***/ "../lib/locale.js":
/*!************************!*\
  !*** ../lib/locale.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _etc_site_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../etc/site.json */ \"../../etc/site.json\");\nvar _etc_site_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../etc/site.json */ \"../../etc/site.json\", 1);\n/* harmony import */ var _etc_config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../etc/config.json */ \"../../etc/config.json\");\nvar _etc_config_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../etc/config.json */ \"../../etc/config.json\", 1);\n\n\n\nconst languages = Object.keys(_etc_site_json__WEBPACK_IMPORTED_MODULE_0__.languages);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    getLocaleFromURL: req => {\n        if (req) {\n            const url = req.urlData().path;\n            const urlParts = url.split(/\\//);\n            if (urlParts.length > 1) {\n                const firstPartOfURL = urlParts[1];\n                if (languages.indexOf(firstPartOfURL) > -1) {\n                    return firstPartOfURL;\n                }\n            }\n        }\n        return languages[0];\n    },\n    getSiteTitle: language => _etc_config_json__WEBPACK_IMPORTED_MODULE_1__.siteTitle[language]\n});\n\n\n//# sourceURL=webpack:///../lib/locale.js?");

/***/ }),

/***/ "../lib/logger.js":
/*!************************!*\
  !*** ../lib/logger.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _etc_secure_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../etc/secure.json */ \"../../etc/secure.json\");\nvar _etc_secure_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../etc/secure.json */ \"../../etc/secure.json\", 1);\n/* harmony import */ var pino__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pino */ \"pino\");\n/* harmony import */ var pino__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pino__WEBPACK_IMPORTED_MODULE_1__);\n\n// eslint-disable-next-line import/order\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (pino__WEBPACK_IMPORTED_MODULE_1___default()({\n    level: _etc_secure_json__WEBPACK_IMPORTED_MODULE_0__.loglevel\n}));\n\n\n//# sourceURL=webpack:///../lib/logger.js?");

/***/ }),

/***/ "../lib/site.js":
/*!**********************!*\
  !*** ../lib/site.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth */ \"../lib/auth.js\");\n/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locale */ \"../lib/locale.js\");\n/* harmony import */ var _utils_lingui_catalogs_node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/lingui-catalogs-node */ \"../utils/lingui-catalogs-node.js\");\n/* harmony import */ var _etc_site_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../etc/site.json */ \"../../etc/site.json\");\nvar _etc_site_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../etc/site.json */ \"../../etc/site.json\", 1);\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    getSiteData: async (req, fastify, db) => {\n        const user = await _auth__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getUserData(req, fastify, db);\n        const languagesArr = Object.keys(_etc_site_json__WEBPACK_IMPORTED_MODULE_3__.languages);\n        const {\n            languages\n        } = _etc_site_json__WEBPACK_IMPORTED_MODULE_3__;\n        const language = _locale__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getLocaleFromURL(req);\n        const t = Object(_utils_lingui_catalogs_node__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(language);\n        const title = _locale__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getSiteTitle(language);\n        return {\n            user,\n            language,\n            languages,\n            languagesArr,\n            t,\n            title\n        };\n    }\n});\n\n\n//# sourceURL=webpack:///../lib/site.js?");

/***/ }),

/***/ "../locales/user sync recursive ^\\.\\/.*\\/messages\\.js$":
/*!***************************************************!*\
  !*** ../locales/user sync ^\.\/.*\/messages\.js$ ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./en/messages.js\": \"../locales/user/en/messages.js\",\n\t\"./ru/messages.js\": \"../locales/user/ru/messages.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"../locales/user sync recursive ^\\\\.\\\\/.*\\\\/messages\\\\.js$\";\n\n//# sourceURL=webpack:///../locales/user_sync_^\\.\\/.*\\/messages\\.js$?");

/***/ }),

/***/ "../locales/user/en/messages.js":
/*!**************************************!*\
  !*** ../locales/user/en/messages.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* eslint-disable */module.exports={languageData:{\"plurals\":function(n,ord){var s=String(n).split(\".\"),v0=!s[1],t0=Number(s[0])==n,n10=t0&&s[0].slice(-1),n100=t0&&s[0].slice(-2);if(ord)return n10==1&&n100!=11?\"one\":n10==2&&n100!=12?\"two\":n10==3&&n100!=13?\"few\":\"other\";return n==1&&v0?\"one\":\"other\"}},messages:{\"Another Test\":\"Another Test\",\"Log Out\":\"Log Out\",\"Sign In\":\"Sign In\",\"Sign Up\":\"Sign Up\",\"Test\":\"Test\"}};\n\n//# sourceURL=webpack:///../locales/user/en/messages.js?");

/***/ }),

/***/ "../locales/user/ru/messages.js":
/*!**************************************!*\
  !*** ../locales/user/ru/messages.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* eslint-disable */module.exports={languageData:{\"plurals\":function(n,ord){var s=String(n).split(\".\"),i=s[0],v0=!s[1],i10=i.slice(-1),i100=i.slice(-2);if(ord)return\"other\";return v0&&i10==1&&i100!=11?\"one\":v0&&i10>=2&&i10<=4&&(i100<12||i100>14)?\"few\":v0&&i10==0||v0&&i10>=5&&i10<=9||v0&&i100>=11&&i100<=14?\"many\":\"other\"}},messages:{\"Another Test\":\"\\u0415\\u0449\\u0451 \\u0442\\u0435\\u0441\\u0442\",\"Log Out\":\"Log Out\",\"Sign In\":\"Sign In\",\"Sign Up\":\"Sign Up\",\"Test\":\"\\u0422\\u0435\\u0441\\u0442\"}};\n\n//# sourceURL=webpack:///../locales/user/ru/messages.js?");

/***/ }),

/***/ "../utils/lingui-catalogs-node.js":
/*!****************************************!*\
  !*** ../utils/lingui-catalogs-node.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (language => {\n    const {\n        messages\n    } = __webpack_require__(\"../locales/user sync recursive ^\\\\.\\\\/.*\\\\/messages\\\\.js$\")(`./${language}/messages.js`);\n    Object.keys(messages).map(k => messages[k] = messages[k] || k);\n    return messages;\n});\n\n\n//# sourceURL=webpack:///../utils/lingui-catalogs-node.js?");

/***/ }),

/***/ "../utils/uikit-icons-node.js":
/*!************************************!*\
  !*** ../utils/uikit-icons-node.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {};\r\n\n\n//# sourceURL=webpack:///../utils/uikit-icons-node.js?");

/***/ }),

/***/ "../utils/uikit-node.js":
/*!******************************!*\
  !*** ../utils/uikit-node.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {};\r\n\n\n//# sourceURL=webpack:///../utils/uikit-node.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _etc_secure_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../etc/secure.json */ \"../../etc/secure.json\");\nvar _etc_secure_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../etc/secure.json */ \"../../etc/secure.json\", 1);\n/* harmony import */ var _lib_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/logger */ \"../lib/logger.js\");\n/* harmony import */ var fastify_mongodb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fastify-mongodb */ \"fastify-mongodb\");\n/* harmony import */ var fastify_mongodb__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fastify_mongodb__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var fastify_url_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fastify-url-data */ \"fastify-url-data\");\n/* harmony import */ var fastify_url_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fastify_url_data__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var fastify_cors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fastify-cors */ \"fastify-cors\");\n/* harmony import */ var fastify_cors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fastify_cors__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var fastify_jwt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! fastify-jwt */ \"fastify-jwt\");\n/* harmony import */ var fastify_jwt__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(fastify_jwt__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var fastify_formbody__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! fastify-formbody */ \"fastify-formbody\");\n/* harmony import */ var fastify_formbody__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(fastify_formbody__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var fastify_multipart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! fastify-multipart */ \"fastify-multipart\");\n/* harmony import */ var fastify_multipart__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(fastify_multipart__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var fastify_cookie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! fastify-cookie */ \"fastify-cookie\");\n/* harmony import */ var fastify_cookie__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(fastify_cookie__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _build_modules_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../build/modules.json */ \"../build/modules.json\");\nvar _build_modules_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../build/modules.json */ \"../build/modules.json\", 1);\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var pino__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! pino */ \"pino\");\n/* harmony import */ var pino__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(pino__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var fastify__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! fastify */ \"fastify\");\n/* harmony import */ var fastify__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(fastify__WEBPACK_IMPORTED_MODULE_12__);\n/* eslint-disable import/order */\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst log = pino__WEBPACK_IMPORTED_MODULE_11___default()({\n    level: _etc_secure_json__WEBPACK_IMPORTED_MODULE_0__.loglevel\n});\nconst fastify = fastify__WEBPACK_IMPORTED_MODULE_12___default()({\n    logger: _lib_logger__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    trustProxy: _etc_secure_json__WEBPACK_IMPORTED_MODULE_0__.trustProxy\n});\n\n(async () => {\n    const mongoClient = new mongodb__WEBPACK_IMPORTED_MODULE_10__[\"MongoClient\"](_etc_secure_json__WEBPACK_IMPORTED_MODULE_0__.mongo.url, {\n        useNewUrlParser: true,\n        useUnifiedTopology: true\n    });\n    await mongoClient.connect();\n    fastify.register(fastify_formbody__WEBPACK_IMPORTED_MODULE_6___default.a);\n    fastify.register(fastify_multipart__WEBPACK_IMPORTED_MODULE_7___default.a, {\n        addToBody: true\n    });\n    fastify.register(fastify_url_data__WEBPACK_IMPORTED_MODULE_3___default.a);\n    fastify.register(fastify_cookie__WEBPACK_IMPORTED_MODULE_8___default.a);\n    fastify.register(fastify_mongodb__WEBPACK_IMPORTED_MODULE_2___default.a, {\n        client: mongoClient,\n        database: _etc_secure_json__WEBPACK_IMPORTED_MODULE_0__.mongo.dbName\n    }).register((ff, opts, next) => {\n        ff.mongo.client.db(_etc_secure_json__WEBPACK_IMPORTED_MODULE_0__.mongo.dbName).on('close', () => {\n            log.error('Connection to MongoDB is broken');\n            process.exit(1);\n        });\n        next();\n    });\n    fastify.register(fastify_cors__WEBPACK_IMPORTED_MODULE_4___default.a, {\n        origin: _etc_secure_json__WEBPACK_IMPORTED_MODULE_0__.originCORS\n    });\n    fastify.register(fastify_jwt__WEBPACK_IMPORTED_MODULE_5___default.a, {\n        secret: _etc_secure_json__WEBPACK_IMPORTED_MODULE_0__.secret\n    });\n    await Promise.all(Object.keys(_build_modules_json__WEBPACK_IMPORTED_MODULE_9__).map(async m => {\n        const module = await __webpack_require__(\"../../modules lazy recursive ^\\\\.\\\\/.*\\\\/user\\\\/index\\\\.js$\")(`./${m}/user/index.js`);\n        module.default(fastify);\n    }));\n    log.info('Starting Web server...');\n    fastify.listen(_etc_secure_json__WEBPACK_IMPORTED_MODULE_0__.webServer.port, _etc_secure_json__WEBPACK_IMPORTED_MODULE_0__.webServer.ip);\n})().catch(err => {\n    log.error(err);\n    process.exit(1);\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./template/index.marko":
/*!******************************!*\
  !*** ./template/index.marko ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.18.14 - DO NOT EDIT\n\n\nvar marko_template = module.exports = __webpack_require__(/*! marko/src/html */ \"marko/src/html\").t(__filename),\n    marko_componentType = \"/zoia2$1.0.0/shared/marko/template/index.marko\",\n    components_helpers = __webpack_require__(/*! marko/src/runtime/components/helpers */ \"marko/src/runtime/components/helpers\"),\n    marko_renderer = components_helpers.r,\n    marko_defineComponent = components_helpers.c,\n    marko_helpers = __webpack_require__(/*! marko/src/runtime/html/helpers */ \"marko/src/runtime/html/helpers\"),\n    marko_escapeXml = marko_helpers.x,\n    marko_loadTag = marko_helpers.t,\n    component_globals_tag = marko_loadTag(__webpack_require__(/*! marko/src/core-tags/components/component-globals-tag */ \"marko/src/core-tags/components/component-globals-tag\")),\n    uikit_template = __webpack_require__(/*! ../uikit/index.marko */ \"./uikit/index.marko\"),\n    uikit_tag = marko_loadTag(uikit_template),\n    marko_forEach = marko_helpers.f,\n    marko_dynamicTag = marko_helpers.d,\n    init_components_tag = marko_loadTag(__webpack_require__(/*! marko/src/core-tags/components/init-components-tag */ \"marko/src/core-tags/components/init-components-tag\")),\n    await_reorderer_tag = marko_loadTag(__webpack_require__(/*! marko/src/core-tags/core/await/reorderer-renderer */ \"marko/src/core-tags/core/await/reorderer-renderer\"));\n\nfunction render(input, out, __component, component, state) {\n  var data = input;\n\n  out.w(\"<!DOCTYPE html><html><head><title>\" +\n    marko_escapeXml(out.global.siteData.title) +\n    \"</title><meta charset=\\\"utf-8\\\"><meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1\\\"><style type=\\\"text/css\\\">html,body{height:100%}@font-face{font-family:'Source Sans Pro';src:local('Source Sans Pro'),local(SourceSansPro-Regular),url(/zoia/fonts/sourcesanspro.woff2) format(\\\"woff2\\\"),url(/zoia/fonts/sourcesanspro.woff) format(\\\"woff\\\");font-weight:400;font-style:normal}@font-face{font-family:'Source Sans Pro';src:local('Source Sans Pro'),local(SourceSansPro-Bold),url(/zoia/fonts/sourcesansprobold.woff2) format(\\\"woff2\\\"),url(/zoia/fonts/sourcesansprobold.woff) format(\\\"woff\\\");font-weight:700;font-style:normal}@font-face{font-family:'Source Sans Pro';src:local('Source Sans Pro Light'),local(SourceSansPro-Light),url(/zoia/fonts/sourcesansprolight.woff2) format(\\\"woff2\\\"),url(/zoia/fonts/sourcesansprolight.woff) format(\\\"woff\\\");font-weight:300;font-style:normal}@font-face{font-family:'Source Sans Pro';src:local('Source Sans Pro ExtraLight'),local(SourceSansPro-ExtraLight),url(/zoia/fonts/sourcesansproextralight.woff2) format(\\\"woff2\\\"),url(/zoia/fonts/sourcesansproextralight.woff) format(\\\"woff\\\");font-weight:200;font-style:normal}</style>\");\n\n  out.___renderAssets && out.___renderAssets()\n\n  out.w(\"</head><body>\");\n\n  component_globals_tag({}, out);\n\n  uikit_tag({}, out, __component, \"7\");\n\n  out.w(\"<div class=\\\"uk-container\\\"><div class=\\\"za-logo-wrap\\\"><span uk-icon=\\\"icon:menu;ratio:1.6\\\" class=\\\"za-offcanvas-toggle\\\" uk-toggle=\\\"target:#za_mobile_nav\\\"></span><a href=\\\"/\\\"><img src=\\\"/zoia/logo_dark_small.png\\\" class=\\\"uk-margin-top uk-margin-bottom\\\"></a></div><nav class=\\\"uk-navbar-container uk-navbar za-navbar\\\" uk-navbar=\\\"offset:0;mode:click\\\"><div class=\\\"uk-navbar-left\\\"><ul class=\\\"uk-navbar-nav\\\"><li class=\\\"uk-active\\\"><a href=\\\"#\\\">Active</a></li><li><a href=\\\"#\\\">Hello World</a></li></ul></div><div class=\\\"uk-navbar-right\\\"><ul class=\\\"uk-navbar-nav\\\">\");\n\n  if (out.global.siteData.user.username) {\n    out.w(\"<li><a href=\\\"#\\\">\" +\n      marko_escapeXml(out.global.siteData.user.username) +\n      \"&nbsp;<span uk-icon=\\\"icon:triangle-down;ratio:0.6\\\"></span></a><div class=\\\"uk-navbar-dropdown\\\"><ul class=\\\"uk-nav uk-navbar-dropdown-nav\\\"><li><a href=\\\"#\\\">\" +\n      marko_escapeXml(out.global.t[\"Log Out\"]) +\n      \"</a></li></ul></div></li>\");\n  }\n\n  out.w(\"<li><a href=\\\"#\\\"><span uk-icon=\\\"icon: world;ratio:0.95\\\"></span></a><div class=\\\"uk-navbar-dropdown\\\"><ul class=\\\"uk-nav uk-navbar-dropdown-nav\\\">\");\n\n  var $for$0 = 0;\n\n  marko_forEach(out.global.siteData.languagesArr, function(language, index) {\n    var $keyScope$0 = \"[\" + (($for$0++) + \"]\");\n\n    out.w(\"<li><a href=\\\"#\\\">\" +\n      marko_escapeXml(out.global.siteData.languages[language]) +\n      \"</a></li>\");\n  });\n\n  out.w(\"</ul></div></li></ul></div></nav></div><div class=\\\"uk-container\\\"><div class=\\\"za-content\\\">\");\n\n  marko_dynamicTag(out, input.renderBody, null, null, null, null, __component, \"38\");\n\n  out.w(\"</div></div><div id=\\\"za_mobile_nav\\\" uk-offcanvas=\\\"overlay: true\\\"><div class=\\\"uk-offcanvas-bar\\\"><ul class=\\\"uk-nav uk-nav-default\\\"><li class=\\\"uk-active\\\"><a href=\\\"#\\\">Active</a></li><li class=\\\"uk-parent\\\"><a href=\\\"#\\\">Parent</a><ul class=\\\"uk-nav-sub\\\"><li><a href=\\\"#\\\">Sub item</a></li><li><a href=\\\"#\\\">Sub item</a></li></ul></li><li class=\\\"uk-nav-header\\\">Header</li><li><a href=\\\"#\\\"><span class=\\\"uk-margin-small-right\\\" uk-icon=\\\"icon: table\\\"></span> Item</a></li><li><a href=\\\"#\\\"><span class=\\\"uk-margin-small-right\\\" uk-icon=\\\"icon: thumbnails\\\"></span> Item</a></li><li class=\\\"uk-nav-divider\\\"></li><li><a href=\\\"#\\\"><span class=\\\"uk-margin-small-right\\\" uk-icon=\\\"icon: trash\\\"></span> Item</a></li></ul></div></div>\");\n\n  init_components_tag({}, out);\n\n  await_reorderer_tag({}, out, __component, \"62\");\n\n  out.w(\"</body></html>\");\n}\n\nmarko_template._ = marko_renderer(render, {\n    ___implicit: true,\n    ___type: marko_componentType\n  });\n\nmarko_template.Component = marko_defineComponent({}, marko_template._);\n\nmarko_template.meta = {\n    deps: [\n      {\n          type: \"scss\",\n          code: \"@import \\\"../../styles/uikit.scss\\\";\",\n          virtualPath: \"./index.marko.scss\",\n          path: \"./index.marko\"\n        },\n      {\n          type: \"css\",\n          code: \"@import \\\"../../styles/default.css\\\";\",\n          virtualPath: \"./index.marko.css\",\n          path: \"./index.marko\"\n        }\n    ],\n    id: \"/zoia2$1.0.0/shared/marko/template/index.marko\",\n    tags: [\n      \"marko/src/core-tags/components/component-globals-tag\",\n      \"../uikit/index.marko\",\n      \"marko/src/core-tags/components/init-components-tag\",\n      \"marko/src/core-tags/core/await/reorderer-renderer\"\n    ]\n  };\n\n/* WEBPACK VAR INJECTION */}.call(this, \"/index.js\"))\n\n//# sourceURL=webpack:///./template/index.marko?");

/***/ }),

/***/ "./uikit/index.marko":
/*!***************************!*\
  !*** ./uikit/index.marko ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.18.14 - DO NOT EDIT\n\n\nvar marko_template = module.exports = __webpack_require__(/*! marko/src/html */ \"marko/src/html\").t(__filename),\n    marko_component = {\n        onMount: function() {\n          UIkit.use(Icons);\n        }\n      },\n    marko_componentType = \"/zoia2$1.0.0/shared/marko/uikit/index.marko\",\n    components_helpers = __webpack_require__(/*! marko/src/runtime/components/helpers */ \"marko/src/runtime/components/helpers\"),\n    marko_renderer = components_helpers.r,\n    marko_defineComponent = components_helpers.c,\n    module_UIkit = __webpack_require__(/*! ../../utils/uikit-node */ \"../utils/uikit-node.js\"),\n    UIkit = module_UIkit.default || module_UIkit,\n    module_Icons = __webpack_require__(/*! ../../utils/uikit-icons-node */ \"../utils/uikit-icons-node.js\"),\n    Icons = module_Icons.default || module_Icons;\n\nfunction render(input, out, __component, component, state) {\n  var data = input;\n}\n\nmarko_template._ = marko_renderer(render, {\n    ___type: marko_componentType\n  }, marko_component);\n\nmarko_template.Component = marko_defineComponent(marko_component, marko_template._);\n\nmarko_template.meta = {\n    id: \"/zoia2$1.0.0/shared/marko/uikit/index.marko\",\n    component: \"./index.marko\"\n  };\n\n/* WEBPACK VAR INJECTION */}.call(this, \"/index.js\"))\n\n//# sourceURL=webpack:///./uikit/index.marko?");

/***/ }),

/***/ "fastify":
/*!**************************!*\
  !*** external "fastify" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fastify\");\n\n//# sourceURL=webpack:///external_%22fastify%22?");

/***/ }),

/***/ "fastify-cookie":
/*!*********************************!*\
  !*** external "fastify-cookie" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fastify-cookie\");\n\n//# sourceURL=webpack:///external_%22fastify-cookie%22?");

/***/ }),

/***/ "fastify-cors":
/*!*******************************!*\
  !*** external "fastify-cors" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fastify-cors\");\n\n//# sourceURL=webpack:///external_%22fastify-cors%22?");

/***/ }),

/***/ "fastify-formbody":
/*!***********************************!*\
  !*** external "fastify-formbody" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fastify-formbody\");\n\n//# sourceURL=webpack:///external_%22fastify-formbody%22?");

/***/ }),

/***/ "fastify-jwt":
/*!******************************!*\
  !*** external "fastify-jwt" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fastify-jwt\");\n\n//# sourceURL=webpack:///external_%22fastify-jwt%22?");

/***/ }),

/***/ "fastify-mongodb":
/*!**********************************!*\
  !*** external "fastify-mongodb" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fastify-mongodb\");\n\n//# sourceURL=webpack:///external_%22fastify-mongodb%22?");

/***/ }),

/***/ "fastify-multipart":
/*!************************************!*\
  !*** external "fastify-multipart" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fastify-multipart\");\n\n//# sourceURL=webpack:///external_%22fastify-multipart%22?");

/***/ }),

/***/ "fastify-url-data":
/*!***********************************!*\
  !*** external "fastify-url-data" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fastify-url-data\");\n\n//# sourceURL=webpack:///external_%22fastify-url-data%22?");

/***/ }),

/***/ "marko/src/core-tags/components/component-globals-tag":
/*!***********************************************************************!*\
  !*** external "marko/src/core-tags/components/component-globals-tag" ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"marko/src/core-tags/components/component-globals-tag\");\n\n//# sourceURL=webpack:///external_%22marko/src/core-tags/components/component-globals-tag%22?");

/***/ }),

/***/ "marko/src/core-tags/components/init-components-tag":
/*!*********************************************************************!*\
  !*** external "marko/src/core-tags/components/init-components-tag" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"marko/src/core-tags/components/init-components-tag\");\n\n//# sourceURL=webpack:///external_%22marko/src/core-tags/components/init-components-tag%22?");

/***/ }),

/***/ "marko/src/core-tags/core/await/reorderer-renderer":
/*!********************************************************************!*\
  !*** external "marko/src/core-tags/core/await/reorderer-renderer" ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"marko/src/core-tags/core/await/reorderer-renderer\");\n\n//# sourceURL=webpack:///external_%22marko/src/core-tags/core/await/reorderer-renderer%22?");

/***/ }),

/***/ "marko/src/html":
/*!*********************************!*\
  !*** external "marko/src/html" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"marko/src/html\");\n\n//# sourceURL=webpack:///external_%22marko/src/html%22?");

/***/ }),

/***/ "marko/src/runtime/components/helpers":
/*!*******************************************************!*\
  !*** external "marko/src/runtime/components/helpers" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"marko/src/runtime/components/helpers\");\n\n//# sourceURL=webpack:///external_%22marko/src/runtime/components/helpers%22?");

/***/ }),

/***/ "marko/src/runtime/html/helpers":
/*!*************************************************!*\
  !*** external "marko/src/runtime/html/helpers" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"marko/src/runtime/html/helpers\");\n\n//# sourceURL=webpack:///external_%22marko/src/runtime/html/helpers%22?");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb\");\n\n//# sourceURL=webpack:///external_%22mongodb%22?");

/***/ }),

/***/ "pino":
/*!***********************!*\
  !*** external "pino" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"pino\");\n\n//# sourceURL=webpack:///external_%22pino%22?");

/***/ })

/******/ });