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

eval("module.exports = {\n  getBundleName: function(){return \"Web Server - Client Part\"},\n  entries: {\"markoTest_Spxw\":{\"Web Server - Client Part\":{\"css\":[\"markoTest_Spxw_7fed122a.css\"],\"js\":[\"npm.marko.11beca11.js\",\"npm.uikit.aec072b1.js\",\"vendors~markoTest_Spxw.ca0d5454.js\",\"markoTest_Spxw.4046d86d.js\"],\"map\":[\"npm.marko.11beca11.js.map\",\"npm.uikit.aec072b1.js.map\",\"vendors~markoTest_Spxw.ca0d5454.js.map\",\"markoTest_Spxw.4046d86d.js.map\"]}}}\n}\n\n//# sourceURL=webpack:///C:/Users/mma2/Documents/JS/zoia2/__MARKO_WEBPACK__MANIFEST.js?");

/***/ }),

/***/ "../../etc/secure.json":
/*!********************************************************!*\
  !*** C:/Users/mma2/Documents/JS/zoia2/etc/secure.json ***!
  \********************************************************/
/*! exports provided: secret, authTokenExpiresIn, mongo, apiServer, webServer, originCORS, trustProxy, development, loglevel, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"secret\\\":\\\"79a947c3cbecfb5819b03f21eb00b3180e649bea0c189a7f4ff0bdd10e1fd292\\\",\\\"authTokenExpiresIn\\\":\\\"7 days\\\",\\\"mongo\\\":{\\\"url\\\":\\\"mongodb://localhost:27017\\\",\\\"dbName\\\":\\\"zoia\\\"},\\\"apiServer\\\":{\\\"ip\\\":\\\"127.0.0.1\\\",\\\"port\\\":3000},\\\"webServer\\\":{\\\"ip\\\":\\\"127.0.0.1\\\",\\\"port\\\":3001},\\\"originCORS\\\":\\\"*\\\",\\\"trustProxy\\\":true,\\\"development\\\":false,\\\"loglevel\\\":\\\"info\\\"}\");\n\n//# sourceURL=webpack:///C:/Users/mma2/Documents/JS/zoia2/etc/secure.json?");

/***/ }),

/***/ "../../modules lazy recursive ^\\.\\/.*\\/marko\\/index\\.js$":
/*!*************************************************************************************************!*\
  !*** C:/Users/mma2/Documents/JS/zoia2/modules lazy ^\.\/.*\/marko\/index\.js$ namespace object ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./admin/marko/index.js\": [\n\t\t\"../../modules/admin/marko/index.js\",\n\t\t\"main\"\n\t],\n\t\"./pages/marko/index.js\": [\n\t\t\"../../modules/pages/marko/index.js\",\n\t\t\"main\"\n\t],\n\t\"./registry/marko/index.js\": [\n\t\t\"../../modules/registry/marko/index.js\",\n\t\t\"main\"\n\t],\n\t\"./users/marko/index.js\": [\n\t\t\"../../modules/users/marko/index.js\",\n\t\t\"main\"\n\t]\n};\nfunction webpackAsyncContext(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\treturn Promise.resolve().then(function() {\n\t\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\t\te.code = 'MODULE_NOT_FOUND';\n\t\t\tthrow e;\n\t\t});\n\t}\n\n\tvar ids = map[req], id = ids[0];\n\treturn __webpack_require__.e(ids[1]).then(function() {\n\t\treturn __webpack_require__(id);\n\t});\n}\nwebpackAsyncContext.keys = function webpackAsyncContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackAsyncContext.id = \"../../modules lazy recursive ^\\\\.\\\\/.*\\\\/marko\\\\/index\\\\.js$\";\nmodule.exports = webpackAsyncContext;\n\n//# sourceURL=webpack:///C:/Users/mma2/Documents/JS/zoia2/modules_lazy_^\\.\\/.*\\/marko\\/index\\.js$_namespace_object?");

/***/ }),

/***/ "../../modules/admin/marko/index.js":
/*!*********************************************************************!*\
  !*** C:/Users/mma2/Documents/JS/zoia2/modules/admin/marko/index.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// import markoTest from './markoTest';\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => { // fastify\r\n    // fastify.post('/', markoTest(fastify));\r\n});\r\n\n\n//# sourceURL=webpack:///C:/Users/mma2/Documents/JS/zoia2/modules/admin/marko/index.js?");

/***/ }),

/***/ "../../modules/pages/marko/index.js":
/*!*********************************************************************!*\
  !*** C:/Users/mma2/Documents/JS/zoia2/modules/pages/marko/index.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _markoTest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./markoTest */ \"../../modules/pages/marko/markoTest/index.js\");\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (fastify => { // fastify\r\n    fastify.get('/', Object(_markoTest__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(fastify));\r\n});\r\n\n\n//# sourceURL=webpack:///C:/Users/mma2/Documents/JS/zoia2/modules/pages/marko/index.js?");

/***/ }),

/***/ "../../modules/pages/marko/markoTest/components/test/index.marko":
/*!**************************************************************************************************!*\
  !*** C:/Users/mma2/Documents/JS/zoia2/modules/pages/marko/markoTest/components/test/index.marko ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.18.14 - DO NOT EDIT\n\n\nvar marko_template = module.exports = __webpack_require__(/*! marko/src/html */ \"marko/src/html\").t(__filename),\n    marko_component = {\n        onCreate: function() {\n          this.state = {\n              count: 0\n            };\n        },\n        onMount: function() {\n          console.log(\"Mounted in the browser!\");\n\n          console.log(UIkit);\n\n          UIkit.notification({\n              message: \"my-message!\",\n              status: \"primary\",\n              pos: \"top-right\",\n              timeout: 5000\n            });\n        },\n        increment: function() {\n          this.state.count++;\n        }\n      },\n    marko_componentType = \"/zoia2$1.0.0/modules/pages/marko/markoTest/components/test/index.marko\",\n    components_helpers = __webpack_require__(/*! marko/src/runtime/components/helpers */ \"marko/src/runtime/components/helpers\"),\n    marko_renderer = components_helpers.r,\n    marko_defineComponent = components_helpers.c,\n    module_UIkit = __webpack_require__(/*! ../../../../../../shared/utils/uikit-node */ \"../utils/uikit-node.js\"),\n    UIkit = module_UIkit.default || module_UIkit,\n    marko_helpers = __webpack_require__(/*! marko/src/runtime/html/helpers */ \"marko/src/runtime/html/helpers\"),\n    marko_escapeXml = marko_helpers.x;\n\nfunction render(input, out, __component, component, state) {\n  var data = input;\n\n  out.w(\"<button type=\\\"button\\\">Click me - Count: \" +\n    marko_escapeXml(state.count) +\n    \"</button>\");\n}\n\nmarko_template._ = marko_renderer(render, {\n    ___type: marko_componentType\n  }, marko_component);\n\nmarko_template.Component = marko_defineComponent(marko_component, marko_template._);\n\nmarko_template.meta = {\n    id: \"/zoia2$1.0.0/modules/pages/marko/markoTest/components/test/index.marko\",\n    component: \"./index.marko\"\n  };\n\n/* WEBPACK VAR INJECTION */}.call(this, \"/index.js\"))\n\n//# sourceURL=webpack:///C:/Users/mma2/Documents/JS/zoia2/modules/pages/marko/markoTest/components/test/index.marko?");

/***/ }),

/***/ "../../modules/pages/marko/markoTest/components/test2/index.marko":
/*!***************************************************************************************************!*\
  !*** C:/Users/mma2/Documents/JS/zoia2/modules/pages/marko/markoTest/components/test2/index.marko ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.18.14 - DO NOT EDIT\n\n\nvar marko_template = module.exports = __webpack_require__(/*! marko/src/html */ \"marko/src/html\").t(__filename),\n    marko_component = {\n        onCreate: function() {\n          this.state = {\n              count: 0\n            };\n        },\n        onMount: function() {\n          console.log(\"Mounted in the browser! (2)\");\n\n          console.log(UIkit);\n        },\n        increment: function() {\n          this.state.count++;\n        }\n      },\n    marko_componentType = \"/zoia2$1.0.0/modules/pages/marko/markoTest/components/test2/index.marko\",\n    components_helpers = __webpack_require__(/*! marko/src/runtime/components/helpers */ \"marko/src/runtime/components/helpers\"),\n    marko_renderer = components_helpers.r,\n    marko_defineComponent = components_helpers.c,\n    module_UIkit = __webpack_require__(/*! ../../../../../../shared/utils/uikit-node */ \"../utils/uikit-node.js\"),\n    UIkit = module_UIkit.default || module_UIkit,\n    marko_helpers = __webpack_require__(/*! marko/src/runtime/html/helpers */ \"marko/src/runtime/html/helpers\"),\n    marko_escapeXml = marko_helpers.x;\n\nfunction render(input, out, __component, component, state) {\n  var data = input;\n\n  out.w(\"<button type=\\\"button\\\">Click me - Count: \" +\n    marko_escapeXml(state.count) +\n    \"</button>\");\n}\n\nmarko_template._ = marko_renderer(render, {\n    ___type: marko_componentType\n  }, marko_component);\n\nmarko_template.Component = marko_defineComponent(marko_component, marko_template._);\n\nmarko_template.meta = {\n    id: \"/zoia2$1.0.0/modules/pages/marko/markoTest/components/test2/index.marko\",\n    component: \"./index.marko\"\n  };\n\n/* WEBPACK VAR INJECTION */}.call(this, \"/index.js\"))\n\n//# sourceURL=webpack:///C:/Users/mma2/Documents/JS/zoia2/modules/pages/marko/markoTest/components/test2/index.marko?");

/***/ }),

/***/ "../../modules/pages/marko/markoTest/index.js":
/*!*******************************************************************************!*\
  !*** C:/Users/mma2/Documents/JS/zoia2/modules/pages/marko/markoTest/index.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lingui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lingui/core */ \"@lingui/core\");\n/* harmony import */ var _lingui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lingui_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _template_marko__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template.marko */ \"../../modules/pages/marko/markoTest/template.marko?assets\");\n/* harmony import */ var _template_marko__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_template_marko__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _shared_locales_admin_ru_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/locales/admin/ru/messages */ \"../locales/admin/ru/messages.js\");\n/* harmony import */ var _shared_locales_admin_ru_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shared_locales_admin_ru_messages__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst i18n = Object(_lingui_core__WEBPACK_IMPORTED_MODULE_0__[\"setupI18n\"])({\n    language: 'ru',\n    catalogs: {\n        ru: _shared_locales_admin_ru_messages__WEBPACK_IMPORTED_MODULE_2___default.a,\n    },\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => ({\n    async handler(req, rep) {\n        try {\n            const render = await _template_marko__WEBPACK_IMPORTED_MODULE_1___default.a.render({\n                t: {\n                    title: i18n.use('ru')._('Add')\n                }\n            });\n            return rep.code(200).type('text/html').send(render.out.stream.str);\n        } catch (e) {\n            return rep.code(500).send(JSON.stringify({\n                statusCode: 500,\n                error: 'Internal server error',\n                message: e.message\n            }));\n        }\n    }\n}));\n\n\n//# sourceURL=webpack:///C:/Users/mma2/Documents/JS/zoia2/modules/pages/marko/markoTest/index.js?");

/***/ }),

/***/ "../../modules/pages/marko/markoTest/template.marko":
/*!*************************************************************************************!*\
  !*** C:/Users/mma2/Documents/JS/zoia2/modules/pages/marko/markoTest/template.marko ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.18.14 - DO NOT EDIT\n\n\nvar marko_template = module.exports = __webpack_require__(/*! marko/src/html */ \"marko/src/html\").t(__filename),\n    marko_componentType = \"/zoia2$1.0.0/modules/pages/marko/markoTest/template.marko\",\n    components_helpers = __webpack_require__(/*! marko/src/runtime/components/helpers */ \"marko/src/runtime/components/helpers\"),\n    marko_renderer = components_helpers.r,\n    marko_defineComponent = components_helpers.c,\n    marko_helpers = __webpack_require__(/*! marko/src/runtime/html/helpers */ \"marko/src/runtime/html/helpers\"),\n    marko_escapeXml = marko_helpers.x,\n    test_template = __webpack_require__(/*! ./components/test/index.marko */ \"../../modules/pages/marko/markoTest/components/test/index.marko\"),\n    marko_loadTag = marko_helpers.t,\n    test_tag = marko_loadTag(test_template),\n    test2_template = __webpack_require__(/*! ./components/test2/index.marko */ \"../../modules/pages/marko/markoTest/components/test2/index.marko\"),\n    test2_tag = marko_loadTag(test2_template),\n    template_template = __webpack_require__(/*! ../../../../shared/marko/template/index.marko */ \"./template/index.marko\"),\n    template_tag = marko_loadTag(template_template);\n\nfunction render(input, out, __component, component, state) {\n  var data = input;\n\n  template_tag({\n      title: \"\" + input.t.title,\n      renderBody: function(out) {\n        out.w(\"<h1>Hello World from Pages!</h1><p>Global test: \" +\n          marko_escapeXml(input.t.title) +\n          \"</p>\");\n\n        test_tag({}, out, __component, \"3\");\n\n        test2_tag({}, out, __component, \"4\");\n      }\n    }, out, __component, \"0\");\n}\n\nmarko_template._ = marko_renderer(render, {\n    ___implicit: true,\n    ___type: marko_componentType\n  });\n\nmarko_template.Component = marko_defineComponent({}, marko_template._);\n\nmarko_template.meta = {\n    id: \"/zoia2$1.0.0/modules/pages/marko/markoTest/template.marko\",\n    tags: [\n      \"./components/test/index.marko\",\n      \"./components/test2/index.marko\",\n      \"../../../../shared/marko/template/index.marko\"\n    ]\n  };\n\n/* WEBPACK VAR INJECTION */}.call(this, \"/index.js\"))\n\n//# sourceURL=webpack:///C:/Users/mma2/Documents/JS/zoia2/modules/pages/marko/markoTest/template.marko?");

/***/ }),

/***/ "../../modules/pages/marko/markoTest/template.marko?assets":
/*!********************************************************************************************!*\
  !*** C:/Users/mma2/Documents/JS/zoia2/modules/pages/marko/markoTest/template.marko?assets ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.18.14 - DO NOT EDIT\n\n\nvar marko_template = module.exports = __webpack_require__(/*! marko/src/html */ \"marko/src/html\").t(__filename),\n    marko_componentType = \"/zoia2$1.0.0/modules/pages/marko/markoTest/template.marko\",\n    components_helpers = __webpack_require__(/*! marko/src/runtime/components/helpers */ \"marko/src/runtime/components/helpers\"),\n    marko_renderer = components_helpers.r,\n    marko_defineComponent = components_helpers.c,\n    template = __webpack_require__(/*! ./template.marko */ \"../../modules/pages/marko/markoTest/template.marko\"),\n    module_MARKOWEBPACKMANIFEST_module = __webpack_require__(/*! ./..//..//..//..//__MARKO_WEBPACK__MANIFEST.js */ \"../../__MARKO_WEBPACK__MANIFEST.js\"),\n    MARKOWEBPACKMANIFEST_module = module_MARKOWEBPACKMANIFEST_module.default || module_MARKOWEBPACKMANIFEST_module,\n    getBundleName = module_MARKOWEBPACKMANIFEST_module.getBundleName,\n    entries = module_MARKOWEBPACKMANIFEST_module.entries,\n    marko_helpers = __webpack_require__(/*! marko/src/runtime/html/helpers */ \"marko/src/runtime/html/helpers\"),\n    marko_dynamicTag = marko_helpers.d,\n    marko_loadTag = marko_helpers.t,\n    init_components_tag = marko_loadTag(__webpack_require__(/*! marko/src/core-tags/components/init-components-tag */ \"marko/src/core-tags/components/init-components-tag\"));\n\nfunction renderAssets() {\n  const assets = this.___assets;\n  this.___renderAssets = this.___assets = undefined;\n  this.flush = this.___flush;\n  this.end = this.___end;\n\n  if (assets) {\n    this.write(`<script>window.$mwp=${JSON.stringify(__webpack_require__.p)}`)\n\n    if (assets.js) {\n      this.write(\n        `;(function(b,h){var e=[],c=0;h.forEach(function(d,f){var a=b.createElement(\"link\");a.relList&&a.relList.supports&&a.relList.supports(\"preload\")?(a.href=d,a.rel=\"preload\",a.as=\"script\",a.addEventListener(\"load\",function(){e[f]=d;if(c===f)for(var a;a=e[c];c++){var g=b.createElement(\"script\");g.src=a;b.head.appendChild(g)}}),b.head.appendChild(a)):(a=b.createElement(\"script\"),a.src=d,a.defer=!0,b.head.appendChild(a))})})(document,${\n          JSON.stringify(assets.js.map(js => __webpack_require__.p+js))\n        })`\n      );\n    }\n\n    this.write(\"</script>\")\n\n    if (assets.css) {\n      assets.css.forEach(css => {\n        this.write(\n          `<link rel=\"stylesheet\" href=${JSON.stringify(__webpack_require__.p+css)}>`\n        );\n      });\n    }\n  }\n};\n\nfunction outFlushOverride() {\n  this.___renderAssets();\n  this.flush();\n};\n\nfunction outEndOverride(data, encoding, callback) {\n  this.___renderAssets();\n  this.end(data, encoding, callback);\n};\n\nfunction render(input, out, __component, component, state) {\n  var data = input;\n\n  out.___flush = out.flush;\n\n  out.___end = out.end;\n\n  out.___renderAssets = renderAssets;\n\n  out.___assets = entries[\"markoTest_Spxw\"][getBundleName(out.global)];\n\n  out.flush = outFlushOverride;\n\n  out.end = outEndOverride;\n\n  marko_dynamicTag(out, template, function() {\n    return input;\n  }, null, null, null, __component, \"0\");\n\n  init_components_tag({}, out);\n}\n\nmarko_template._ = marko_renderer(render, {\n    ___implicit: true,\n    ___type: marko_componentType\n  });\n\nmarko_template.Component = marko_defineComponent({}, marko_template._);\n\nmarko_template.meta = {\n    id: \"/zoia2$1.0.0/modules/pages/marko/markoTest/template.marko\",\n    tags: [\n      \"./template.marko\",\n      \"marko/src/core-tags/components/init-components-tag\"\n    ]\n  };\n\n/* WEBPACK VAR INJECTION */}.call(this, \"/index.js\"))\n\n//# sourceURL=webpack:///C:/Users/mma2/Documents/JS/zoia2/modules/pages/marko/markoTest/template.marko?");

/***/ }),

/***/ "../../modules/registry/marko/index.js":
/*!************************************************************************!*\
  !*** C:/Users/mma2/Documents/JS/zoia2/modules/registry/marko/index.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// import markoTest from './markoTest';\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => { // fastify\r\n    // fastify.post('/', markoTest(fastify));\r\n});\r\n\n\n//# sourceURL=webpack:///C:/Users/mma2/Documents/JS/zoia2/modules/registry/marko/index.js?");

/***/ }),

/***/ "../../modules/users/marko/index.js":
/*!*********************************************************************!*\
  !*** C:/Users/mma2/Documents/JS/zoia2/modules/users/marko/index.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// import markoTest from './markoTest';\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => { // fastify\r\n    // fastify.post('/', markoTest(fastify));\r\n});\r\n\n\n//# sourceURL=webpack:///C:/Users/mma2/Documents/JS/zoia2/modules/users/marko/index.js?");

/***/ }),

/***/ "../api/logger.js":
/*!************************!*\
  !*** ../api/logger.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _etc_secure_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../etc/secure.json */ \"../../etc/secure.json\");\nvar _etc_secure_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../etc/secure.json */ \"../../etc/secure.json\", 1);\n/* harmony import */ var pino__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pino */ \"pino\");\n/* harmony import */ var pino__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pino__WEBPACK_IMPORTED_MODULE_1__);\n\n// eslint-disable-next-line import/order\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (pino__WEBPACK_IMPORTED_MODULE_1___default()({\n    level: _etc_secure_json__WEBPACK_IMPORTED_MODULE_0__.loglevel\n}));\n\n\n//# sourceURL=webpack:///../api/logger.js?");

/***/ }),

/***/ "../build/modules.json":
/*!*****************************!*\
  !*** ../build/modules.json ***!
  \*****************************/
/*! exports provided: admin, pages, registry, users, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"admin\\\":{\\\"id\\\":\\\"admin\\\",\\\"icon\\\":\\\"\\\",\\\"admin\\\":false,\\\"adminRoute\\\":\\\"/admin/users\\\"},\\\"pages\\\":{\\\"id\\\":\\\"pages\\\",\\\"icon\\\":\\\"file-text\\\",\\\"admin\\\":true,\\\"adminRoute\\\":\\\"/admin/pages\\\"},\\\"registry\\\":{\\\"id\\\":\\\"registry\\\",\\\"icon\\\":\\\"\\\",\\\"admin\\\":false,\\\"adminRoute\\\":\\\"\\\"},\\\"users\\\":{\\\"id\\\":\\\"users\\\",\\\"icon\\\":\\\"users\\\",\\\"admin\\\":true,\\\"adminRoute\\\":\\\"/admin/users\\\"}}\");\n\n//# sourceURL=webpack:///../build/modules.json?");

/***/ }),

/***/ "../locales/admin/ru/messages.js":
/*!***************************************!*\
  !*** ../locales/admin/ru/messages.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* eslint-disable */module.exports={languageData:{\"plurals\":function(n,ord){var s=String(n).split(\".\"),i=s[0],v0=!s[1],i10=i.slice(-1),i100=i.slice(-2);if(ord)return\"other\";return v0&&i10==1&&i100!=11?\"one\":v0&&i10>=2&&i10<=4&&(i100<12||i100>14)?\"few\":v0&&i10==0||v0&&i10>=5&&i10<=9||v0&&i100>=11&&i100<=14?\"many\":\"other\"}},messages:{\"Actions\":\"\\u0414\\u0435\\u0439\\u0441\\u0442\\u0432\\u0438\\u044F\",\"Active\":\"\\u0410\\u043A\\u0442\\u0438\\u0432\\u0435\\u043D\",\"Add\":\"\\u0414\\u043E\\u0431\\u0430\\u0432\\u0438\\u0442\\u044C\",\"Add new base\":\"\\u0414\\u043E\\u0431\\u0430\\u0432\\u0438\\u0442\\u044C \\u0431\\u0430\\u0437\\u0443\",\"Add or remove availability data\":\"\\u0414\\u043E\\u0431\\u0430\\u0432\\u0438\\u0442\\u044C \\u0438\\u043B\\u0438 \\u0443\\u0434\\u0430\\u043B\\u0438\\u0442\\u044C \\u0434\\u0430\\u043D\\u043D\\u044B\\u0435 \\u043E \\u0434\\u043E\\u0441\\u0442\\u0443\\u043F\\u043D\\u043E\\u0441\\u0442\\u0438\",\"Add or remove blocks data\":\"\\u0414\\u043E\\u0431\\u0430\\u0432\\u0438\\u0442\\u044C \\u0438\\u043B\\u0438 \\u0443\\u0434\\u0430\\u043B\\u0438\\u0442\\u044C \\u0434\\u0430\\u043D\\u043D\\u044B\\u0435 \\u043E \\u0431\\u043B\\u043E\\u043A\\u0430\\u0445\",\"Add or remove extras data\":\"\\u0414\\u043E\\u0431\\u0430\\u0432\\u0438\\u0442\\u044C \\u0438\\u043B\\u0438 \\u0443\\u0434\\u0430\\u043B\\u0438\\u0442\\u044C \\u0434\\u0430\\u043D\\u043D\\u044B\\u0435 \\u043E\\u0431 \\u043E\\u043F\\u0446\\u0438\\u044F\\u0445\",\"Add or remove prices data\":\"\\u0414\\u043E\\u0431\\u0430\\u0432\\u0438\\u0442\\u044C \\u0438\\u043B\\u0438 \\u0443\\u0434\\u0430\\u043B\\u0438\\u0442\\u044C \\u0434\\u0430\\u043D\\u043D\\u044B\\u0435 \\u043E \\u0446\\u0435\\u043D\\u0430\\u0445\",\"Administrator\":\"\\u0410\\u0434\\u043C\\u0438\\u043D\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043E\\u0440\",\"Air Conditioneer\":\"\\u041A\\u043E\\u043D\\u0434\\u0438\\u0446\\u0438\\u043E\\u043D\\u0435\\u0440\",\"Anchor\":\"\\u042F\\u043A\\u043E\\u0440\\u044C\",\"Any Day of a Week\":\"\\u041B\\u044E\\u0431\\u043E\\u0439 \\u0434\\u0435\\u043D\\u044C \\u043D\\u0435\\u0434\\u0435\\u043B\\u0438\",\"Any Period\":\"\\u041B\\u044E\\u0431\\u043E\\u0439 \\u043F\\u0435\\u0440\\u0438\\u043E\\u0434\",\"Attach file(s) by dropping them here\":\"\\u0414\\u043E\\u0431\\u0430\\u0432\\u044C\\u0442\\u0435 \\u0444\\u0430\\u0439\\u043B\\u044B, \\u043F\\u0435\\u0440\\u0435\\u0442\\u0430\\u0449\\u0438\\u0432 \\u0438\\u0445,\",\"Attach image(s) by dropping them here\":\"\\u0414\\u043E\\u0431\\u0430\\u0432\\u044C\\u0442\\u0435 \\u0438\\u0437\\u043E\\u0431\\u0440\\u0430\\u0436\\u0435\\u043D\\u0438\\u044F, \\u043F\\u0435\\u0440\\u0435\\u0442\\u0430\\u0449\\u0438\\u0432 \\u0438\\u0445,\",\"Authorize\":\"\\u0410\\u0432\\u0442\\u043E\\u0440\\u0438\\u0437\\u0430\\u0446\\u0438\\u044F\",\"Autopilot\":\"\\u0410\\u0432\\u0442\\u043E\\u043F\\u0438\\u043B\\u043E\\u0442\",\"Availability\":\"\\u0414\\u043E\\u0441\\u0442\\u0443\\u043F\\u043D\\u043E\\u0441\\u0442\\u044C\",\"Avg. Price\":\"\\u0421\\u0440\\u0435\\u0434\\u043D\\u044F\\u044F \\u0446\\u0435\\u043D\\u0430\",\"BBQ\":\"\\u0413\\u0440\\u0438\\u043B\\u044C\",\"Bare Boat\":\"\\u0411\\u0435\\u0437 \\u044D\\u043A\\u0438\\u043F\\u0430\\u0436\\u0430\",\"Base\":\"\\u0411\\u0430\\u0437\\u0430\",\"Base (RU)\":\"\\u0411\\u0430\\u0437\\u0430 (\\u0440\\u0443\\u0441.)\",\"Base not found\":\"\\u0411\\u0430\\u0437\\u0430 \\u043D\\u0435 \\u043D\\u0430\\u0439\\u0434\\u0435\\u043D\\u0430\",\"Bases\":\"\\u0411\\u0430\\u0437\\u044B\",\"Bathrooms\":\"\\u0412\\u0430\\u043D\\u043D\\u044B\\u0435 \\u043A\\u043E\\u043C\\u043D\\u0430\\u0442\\u044B\",\"Beam\":\"\\u0428\\u0438\\u0440\\u0438\\u043D\\u0430\",\"Blocks\":\"\\u0411\\u043B\\u043E\\u043A\\u0438\",\"Boat Photos\":\"\\u0424\\u043E\\u0442\\u043E\\u0433\\u0440\\u0430\\u0444\\u0438\\u0438\",\"Boat Plan\":\"\\u041F\\u043B\\u0430\\u043D\\u044B\",\"Boat not found\":\"\\u042F\\u0445\\u0442\\u0430 \\u043D\\u0435 \\u043D\\u0430\\u0439\\u0434\\u0435\\u043D\\u0430\",\"Boat title\":\"\\u041D\\u0430\\u0437\\u0432\\u0430\\u043D\\u0438\\u0435 \\u044F\\u0445\\u0442\\u044B\",\"Boats\":\"\\u042F\\u0445\\u0442\\u044B\",\"Build Year\":\"\\u0413\\u043E\\u0434 \\u043F\\u043E\\u0441\\u0442\\u0440\\u043E\\u0439\\u043A\\u0438\",\"Cabins\":\"\\u041A\\u0430\\u044E\\u0442\\u044B\",\"Cancel\":\"\\u041E\\u0442\\u043C\\u0435\\u043D\\u0430\",\"Cannot delete one or more bases\":\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430 \\u0432\\u043E \\u0432\\u0440\\u0435\\u043C\\u044F \\u0443\\u0434\\u0430\\u043B\\u0435\\u043D\\u0438\\u044F \\u043E\\u0434\\u043D\\u043E\\u0439 \\u0438\\u043B\\u0438 \\u043D\\u0435\\u0441\\u043A\\u043E\\u043B\\u044C\\u043A\\u0438\\u0445 \\u0431\\u0430\\u0437\",\"Cannot delete one or more boats\":\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430 \\u0432\\u043E \\u0432\\u0440\\u0435\\u043C\\u044F \\u0443\\u0434\\u0430\\u043B\\u0435\\u043D\\u0438\\u044F \\u043E\\u0434\\u043D\\u043E\\u0439 \\u0438\\u043B\\u0438 \\u043D\\u0435\\u0441\\u043A\\u043E\\u043B\\u044C\\u043A\\u0438\\u0445 \\u044F\\u0445\\u0442\",\"Cannot delete one or more countries\":\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430 \\u0432\\u043E \\u0432\\u0440\\u0435\\u043C\\u044F \\u0443\\u0434\\u0430\\u043B\\u0435\\u043D\\u0438\\u044F \\u043E\\u0434\\u043D\\u043E\\u0439 \\u0438\\u043B\\u0438 \\u043D\\u0435\\u0441\\u043A\\u043E\\u043B\\u044C\\u043A\\u0438\\u0445 \\u0441\\u0442\\u0440\\u0430\\u043D\",\"Cannot delete one or more destinations\":\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430 \\u0432\\u043E \\u0432\\u0440\\u0435\\u043C\\u044F \\u0443\\u0434\\u0430\\u043B\\u0435\\u043D\\u0438\\u044F \\u043E\\u0434\\u043D\\u043E\\u0433\\u043E \\u0438\\u043B\\u0438 \\u043D\\u0435\\u0441\\u043A\\u043E\\u043B\\u044C\\u043A\\u0438\\u0445 \\u043D\\u0430\\u043F\\u0440\\u0430\\u0432\\u043B\\u0435\\u043D\\u0438\\u0439\",\"Cannot delete one or more pages\":\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430 \\u0432\\u043E \\u0432\\u0440\\u0435\\u043C\\u044F \\u0443\\u0434\\u0430\\u043B\\u0435\\u043D\\u0438\\u044F \\u043E\\u0434\\u043D\\u043E\\u0439 \\u0438\\u043B\\u0438 \\u043D\\u0435\\u0441\\u043A\\u043E\\u043B\\u044C\\u043A\\u0438\\u0445 \\u0441\\u0442\\u0440\\u0430\\u043D\\u0438\\u0446\",\"Cannot delete one or more users\":\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430 \\u0432\\u043E \\u0432\\u0440\\u0435\\u043C\\u044F \\u0443\\u0434\\u0430\\u043B\\u0435\\u043D\\u0438\\u044F \\u043E\\u0434\\u043D\\u043E\\u0433\\u043E \\u0438\\u043B\\u0438 \\u043D\\u0435\\u0441\\u043A\\u043E\\u043B\\u044C\\u043A\\u0438\\u0445 \\u043F\\u043E\\u043B\\u044C\\u0437\\u043E\\u0432\\u0430\\u0442\\u0435\\u043B\\u0435\\u0439\",\"Cannot duplicate a boat\":\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430 \\u043F\\u0440\\u0438 \\u0441\\u043E\\u0437\\u0434\\u0430\\u043D\\u0438\\u0438 \\u0434\\u0443\\u0431\\u043B\\u0438\\u043A\\u0430\\u0442\\u0430 \\u044F\\u0445\\u0442\\u044B\",\"Cannot update boat record\":\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430 \\u0432\\u043E \\u0432\\u0440\\u0435\\u043C\\u044F \\u043E\\u0431\\u043D\\u043E\\u0432\\u043B\\u0435\\u043D\\u0438\\u044F \\u0437\\u0430\\u043F\\u0438\\u0441\\u0438 \\u0432 \\u0431\\u0430\\u0437\\u0435 \\u0434\\u0430\\u043D\\u043D\\u044B\\u0445\",\"Cannot update database record\":\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430 \\u0432\\u043E \\u0432\\u0440\\u0435\\u043C\\u044F \\u043E\\u0431\\u043D\\u043E\\u0432\\u043B\\u0435\\u043D\\u0438\\u044F \\u0431\\u0430\\u0437\\u044B \\u0434\\u0430\\u043D\\u043D\\u044B\\u0445\",\"Catamaran\":\"\\u041A\\u0430\\u0442\\u0430\\u043C\\u0430\\u0440\\u0430\\u043D\",\"Characteristics\":\"\\u0425\\u0430\\u0440\\u0430\\u043A\\u0442\\u0435\\u0440\\u0438\\u0441\\u0442\\u0438\\u043A\\u0438\",\"Content\":\"\\u041A\\u043E\\u043D\\u0442\\u0435\\u043D\\u0442\",\"Cost\":\"\\u0421\\u0442\\u043E\\u0438\\u043C\\u043E\\u0441\\u0442\\u044C\",\"Could not authorize\":\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430 \\u0432\\u043E \\u0432\\u0440\\u0435\\u043C\\u044F \\u0430\\u0432\\u0442\\u043E\\u0440\\u0438\\u0437\\u0430\\u0446\\u0438\\u0438\",\"Could not authorize on server\":\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430 \\u0432\\u043E \\u0432\\u0440\\u0435\\u043C\\u044F \\u0430\\u0432\\u0442\\u043E\\u0440\\u0438\\u0437\\u0430\\u0446\\u0438\\u0438 \\u043D\\u0430 \\u0441\\u0435\\u0440\\u0432\\u0435\\u0440\\u0435\",\"Could not get a list of bases\":\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430 \\u0432\\u043E \\u0432\\u0440\\u0435\\u043C\\u044F \\u043F\\u043E\\u043B\\u0443\\u0447\\u0435\\u043D\\u0438\\u044F \\u0441\\u043F\\u0438\\u0441\\u043A\\u0430 \\u0431\\u0430\\u0437\",\"Could not get a list of countries\":\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430 \\u0432\\u043E \\u0432\\u0440\\u0435\\u043C\\u044F \\u043F\\u043E\\u043B\\u0443\\u0447\\u0435\\u043D\\u0438\\u044F \\u0441\\u043F\\u0438\\u0441\\u043A\\u0430 \\u0441\\u0442\\u0440\\u0430\\u043D\",\"Could not get a list of destinations\":\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430 \\u0432\\u043E \\u0432\\u0440\\u0435\\u043C\\u044F \\u043F\\u043E\\u043B\\u0443\\u0447\\u0435\\u043D\\u0438\\u044F \\u0441\\u043F\\u0438\\u0441\\u043A\\u0430 \\u043D\\u0430\\u043F\\u0440\\u0430\\u0432\\u043B\\u0435\\u043D\\u0438\\u0439\",\"Could not load data\":\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430 \\u0432\\u043E \\u0432\\u0440\\u0435\\u043C\\u044F \\u0437\\u0430\\u0433\\u0440\\u0443\\u0437\\u043A\\u0438 \\u0434\\u0430\\u043D\\u043D\\u044B\\u0445 \\u0441 \\u0441\\u0435\\u0440\\u0432\\u0435\\u0440\\u0430\",\"Could not load data from server\":\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430 \\u0432\\u043E \\u0432\\u0440\\u0435\\u043C\\u044F \\u0437\\u0430\\u0433\\u0440\\u0443\\u0437\\u043A\\u0438 \\u0434\\u0430\\u043D\\u043D\\u044B\\u0445\",\"Could not load data from server. Please check your URL or try to <0>reload</0> data.\":\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430 \\u0432\\u043E \\u0432\\u0440\\u0435\\u043C\\u044F \\u0437\\u0430\\u0433\\u0440\\u0443\\u0437\\u043A\\u0438 \\u0434\\u0430\\u043D\\u043D\\u044B\\u0445 \\u0441 \\u0441\\u0435\\u0440\\u0432\\u0435\\u0440\\u0430. \\u041F\\u043E\\u0436\\u0430\\u043B\\u0443\\u0439\\u0441\\u0442\\u0430, \\u043F\\u0440\\u043E\\u0432\\u0435\\u0440\\u044C\\u0442\\u0435 \\u0441\\u0441\\u044B\\u043B\\u043A\\u0443 \\u0438\\u043B\\u0438 \\u043F\\u043E\\u043F\\u0440\\u043E\\u0431\\u0443\\u0439\\u0442\\u0435 <0>\\u043E\\u0431\\u043D\\u043E\\u0432\\u0438\\u0442\\u044C</0> \\u0434\\u0430\\u043D\\u043D\\u044B\\u0435.\",\"Could not load site configuration. Please try to reload the page to try again.\":\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430 \\u0432\\u043E \\u0432\\u0440\\u0435\\u043C\\u044F \\u0437\\u0430\\u0433\\u0440\\u0443\\u0437\\u043A\\u0438 \\u043A\\u043E\\u043D\\u0444\\u0438\\u0433\\u0443\\u0440\\u0430\\u0446\\u0438\\u0438 \\u0441\\u0430\\u0439\\u0442\\u0430. \\u041F\\u043E\\u0436\\u0430\\u043B\\u0443\\u0439\\u0441\\u0442\\u0430, \\u043F\\u043E\\u043F\\u0440\\u043E\\u0431\\u0443\\u0439\\u0442\\u0435 \\u043E\\u0431\\u043D\\u043E\\u0432\\u0438\\u0442\\u044C \\u0441\\u0442\\u0440\\u0430\\u043D\\u0438\\u0446\\u0443.\",\"Could not save a page\":\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430 \\u0432\\u043E \\u0432\\u0440\\u0435\\u043C\\u044F \\u0441\\u043E\\u0445\\u0440\\u0430\\u043D\\u0435\\u043D\\u0438\\u044F \\u0441\\u0442\\u0440\\u0430\\u043D\\u0438\\u0446\\u044B\",\"Could not save data\":\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430 \\u0432\\u043E \\u0432\\u0440\\u0435\\u043C\\u044F \\u0441\\u043E\\u0445\\u0440\\u0430\\u043D\\u0435\\u043D\\u0438\\u044F \\u0434\\u0430\\u043D\\u043D\\u044B\\u0445\",\"Countries\":\"\\u0421\\u0442\\u0440\\u0430\\u043D\\u044B\",\"Country\":\"\\u0421\\u0442\\u0440\\u0430\\u043D\\u0430\",\"Country (RU)\":\"\\u0421\\u0442\\u0440\\u0430\\u043D\\u0430 (\\u0440\\u0443\\u0441\\u0441\\u043A\\u0438\\u0439)\",\"Country not found\":\"\\u0421\\u0442\\u0440\\u0430\\u043D\\u0430 \\u043D\\u0435 \\u043D\\u0430\\u0439\\u0434\\u0435\\u043D\\u0430\",\"Create User\":\"\\u0414\\u043E\\u0431\\u0430\\u0432\\u043B\\u0435\\u043D\\u0438\\u0435 \\u043F\\u043E\\u043B\\u044C\\u0437\\u043E\\u0432\\u0430\\u0442\\u0435\\u043B\\u044F\",\"Create new base\":\"\\u0414\\u043E\\u0431\\u0430\\u0432\\u043B\\u0435\\u043D\\u0438\\u0435 \\u0431\\u0430\\u0437\\u044B\",\"Create new boat\":\"\\u0414\\u043E\\u0431\\u0430\\u0432\\u0438\\u0442\\u044C \\u043B\\u043E\\u0434\\u043A\\u0443\",\"Create new country\":\"\\u0414\\u043E\\u0431\\u0430\\u0432\\u043B\\u0435\\u043D\\u0438\\u0435 \\u0441\\u0442\\u0440\\u0430\\u043D\\u044B\",\"Create new destination\":\"\\u0414\\u043E\\u0431\\u0430\\u0432\\u0438\\u0442\\u044C \\u043D\\u0430\\u043F\\u0440\\u0430\\u0432\\u043B\\u0435\\u043D\\u0438\\u0435\",\"Create new page\":\"\\u0421\\u043E\\u0437\\u0430\\u0442\\u044C \\u0441\\u0442\\u0440\\u0430\\u043D\\u0438\\u0446\\u0443\",\"Create new user\":\"\\u0414\\u043E\\u0431\\u0430\\u0432\\u043B\\u0435\\u043D\\u0438\\u0435 \\u043F\\u043E\\u043B\\u044C\\u0437\\u043E\\u0432\\u0430\\u0442\\u0435\\u043B\\u044F\",\"Crew\":\"\\u041A\\u043E\\u043C\\u0430\\u043D\\u0434\\u0430\",\"Crewed\":\"\\u0421 \\u043A\\u043E\\u043C\\u0430\\u043D\\u0434\\u043E\\u0439\",\"Cruise Ship\":\"\\u0422\\u0435\\u043F\\u043B\\u043E\\u0445\\u043E\\u0434\",\"Currency\":\"\\u0412\\u0430\\u043B\\u044E\\u0442\\u0430\",\"Damage Deposit\":\"\\u0421\\u0442\\u0440\\u0430\\u0445\\u043E\\u0432\\u043E\\u0439 \\u0434\\u0435\\u043F\\u043E\\u0437\\u0438\\u0442\",\"Data has been saved successfully\":\"\\u0414\\u0430\\u043D\\u043D\\u044B\\u0435 \\u0443\\u0441\\u043F\\u0435\\u0448\\u043D\\u043E \\u0441\\u043E\\u0445\\u0440\\u0430\\u043D\\u0435\\u043D\\u044B\",\"Delete\":\"\\u0423\\u0434\\u0430\\u043B\\u0435\\u043D\\u0438\\u0435\",\"Delete selected bases\":\"\\u0423\\u0434\\u0430\\u043B\\u0438\\u0442\\u044C \\u0432\\u044B\\u0431\\u0440\\u0430\\u043D\\u043D\\u044B\\u0435 \\u0431\\u0430\\u0437\\u044B\",\"Delete selected boats\":\"\\u0423\\u0434\\u0430\\u043B\\u0438\\u0442\\u044C \\u0432\\u044B\\u0431\\u0440\\u0430\\u043D\\u043D\\u044B\\u0435 \\u043B\\u043E\\u0434\\u043A\\u0438\",\"Delete selected countries\":\"\\u0423\\u0434\\u0430\\u043B\\u0438\\u0442\\u044C \\u0432\\u044B\\u0431\\u0440\\u0430\\u043D\\u043D\\u044B\\u0435 \\u0441\\u0442\\u0440\\u0430\\u043D\\u044B\",\"Delete selected destinations\":\"\\u0423\\u0434\\u0430\\u043B\\u0438\\u0442\\u044C \\u0432\\u044B\\u0431\\u0440\\u0430\\u043D\\u043D\\u044B\\u0435 \\u043D\\u0430\\u043F\\u0440\\u0430\\u0432\\u043B\\u0435\\u043D\\u0438\\u044F\",\"Delete selected pages\":\"\\u0423\\u0434\\u0430\\u043B\\u0438\\u0442\\u044C \\u0432\\u044B\\u0431\\u0440\\u0430\\u043D\\u043D\\u044B\\u0435 \\u0441\\u0442\\u0440\\u0430\\u043D\\u0438\\u0446\\u044B\",\"Delete selected users\":\"\\u0423\\u0434\\u0430\\u043B\\u0435\\u043D\\u0438\\u0435 \\u0432\\u044B\\u0431\\u0440\\u0430\\u043D\\u043D\\u044B\\u0445\",\"Destination\":\"\\u041D\\u0430\\u043F\\u0440\\u0430\\u0432\\u043B\\u0435\\u043D\\u0438\\u0435\",\"Destination (RU)\":\"\\u041D\\u0430\\u043F\\u0440\\u0430\\u0432\\u043B\\u0435\\u043D\\u0438\\u0435 (\\u0440\\u0443\\u0441.)\",\"Destination not found\":\"\\u041D\\u0430\\u043F\\u0440\\u0430\\u0432\\u043B\\u0435\\u043D\\u0438\\u0435 \\u043D\\u0435 \\u043D\\u0430\\u0439\\u0434\\u0435\\u043D\\u043E\",\"Destinations\":\"\\u041D\\u0430\\u043F\\u0440\\u0430\\u0432\\u043B\\u0435\\u043D\\u0438\\u044F\",\"Discounts\":\"\\u0421\\u043A\\u0438\\u0434\\u043A\\u0438\",\"Displayed in browser window\":\"\\u041E\\u0442\\u043E\\u0431\\u0440\\u0430\\u0436\\u0430\\u0435\\u0442\\u0441\\u044F \\u0432 \\u043E\\u043A\\u043D\\u0435 \\u0431\\u0440\\u0430\\u0443\\u0437\\u0435\\u0440\\u0430\",\"Double Berths\":\"\\u0414\\u0432\\u0443\\u0445\\u043C\\u0435\\u0441\\u0442\\u043D\\u044B\\u0435 \\u043A\\u043E\\u0439\\u043A\\u0438\",\"Double Cabins\":\"\\u0414\\u0432\\u0443\\u0445\\u043C\\u0435\\u0441\\u0442\\u043D\\u044B\\u0435 \\u043A\\u0430\\u0431\\u0438\\u043D\\u044B\",\"Draft\":\"\\u041E\\u0441\\u0430\\u0434\\u043A\\u0430\",\"Duplicate\":\"\\u0421\\u043E\\u0437\\u0434\\u0430\\u0442\\u044C \\u0434\\u0443\\u0431\\u043B\\u0438\\u043A\\u0430\\u0442\",\"Duplicate base\":\"\\u0411\\u0430\\u0437\\u0430 \\u0443\\u0436\\u0435 \\u0434\\u043E\\u0431\\u0430\\u0432\\u043B\\u0435\\u043D\\u0430\",\"Duplicate boat\":\"\\u041B\\u043E\\u0434\\u043A\\u0430 \\u0443\\u0436\\u0435 \\u0434\\u043E\\u0431\\u0430\\u0432\\u043B\\u0435\\u043D\\u0430 \\u0432 \\u0441\\u0438\\u0441\\u0442\\u0435\\u043C\\u0443\",\"Duplicate country\":\"\\u0421\\u0442\\u0440\\u0430\\u043D\\u0430 \\u0443\\u0436\\u0435 \\u0434\\u043E\\u0431\\u0430\\u0432\\u043B\\u0435\\u043D\\u0430\",\"Duplicate destination\":\"\\u041D\\u0430\\u043F\\u0440\\u0430\\u0432\\u043B\\u0435\\u043D\\u0438\\u0435 \\u0443\\u0436\\u0435 \\u0434\\u043E\\u0431\\u0430\\u0432\\u043B\\u0435\\u043D\\u043E\",\"Duplicate e-mail\":\"E-mail \\u0443\\u0436\\u0435 \\u0441\\u0443\\u0449\\u0435\\u0441\\u0442\\u0432\\u0443\\u0435\\u0442\",\"Duplicate page\":\"\\u0421\\u0442\\u0440\\u0430\\u043D\\u0438\\u0446\\u0430 \\u0443\\u0436\\u0435 \\u0441\\u0443\\u0449\\u0435\\u0441\\u0442\\u0432\\u0443\\u0435\\u0442\",\"Duplicate page, check filename and path\":\"\\u0421\\u0442\\u0440\\u0430\\u043D\\u0438\\u0446\\u0430 \\u0443\\u0436\\u0435 \\u0441\\u0443\\u0449\\u0435\\u0441\\u0442\\u0432\\u0443\\u0435\\u0442, \\u043F\\u0440\\u043E\\u0432\\u0435\\u0440\\u044C\\u0442\\u0435 \\u0438\\u043C\\u044F \\u0444\\u0430\\u0439\\u043B\\u0430 \\u0438 \\u043F\\u0443\\u0442\\u044C\",\"Duplicate username\":\"\\u0418\\u043C\\u044F \\u043F\\u043E\\u043B\\u044C\\u0437\\u043E\\u0432\\u0430\\u0442\\u0435\\u043B\\u044F \\u0443\\u0436\\u0435 \\u0441\\u0443\\u0449\\u0435\\u0441\\u0442\\u0432\\u0443\\u0435\\u0442\",\"E-mail\":\"E-mail\",\"Each line should contain a new characteristic or a category. Start a new line with an * character to define a category, format: * NAME_EN|NAME_RU, example: \\\"* New Category|\\u041D\\u043E\\u0432\\u0430\\u044F \\u043A\\u0430\\u0442\\u0435\\u0433\\u043E\\u0440\\u0438\\u044F\\\" (without quotes). A line without * at the beginning will be parsed as a characteristic. The format is as following: NAME_EN|NAME_RU,QUANTITY_EN|QUANTITIY_RU,UNIT_EN|UNIT_RU, example: \\\"Boat anchor|\\u042F\\u043A\\u043E\\u0440\\u044C \\u0434\\u043B\\u044F \\u044F\\u0445\\u0442\\u044B,10,meters|\\u043C\\u0435\\u0442\\u0440\\u043E\\u0432\\\" (without quotes).\":\"\\u041A\\u0430\\u0436\\u0434\\u0430\\u044F \\u043D\\u043E\\u0432\\u0430\\u044F \\u0441\\u0442\\u0440\\u043E\\u043A\\u0430 \\u0434\\u043E\\u043B\\u0436\\u043D\\u0430 \\u0441\\u043E\\u0434\\u0435\\u0440\\u0436\\u0430\\u0442\\u044C \\u043A\\u0430\\u0442\\u0435\\u0433\\u043E\\u0440\\u0438\\u044E \\u0438\\u043B\\u0438 \\u0445\\u0430\\u0440\\u0430\\u043A\\u0442\\u0435\\u0440\\u0438\\u0441\\u0442\\u0438\\u043A\\u0443 \\u044F\\u0445\\u0442\\u044B. \\u0414\\u043B\\u044F \\u0434\\u043E\\u0431\\u0430\\u0432\\u043B\\u0435\\u043D\\u0438\\u044F \\u043D\\u043E\\u0432\\u043E\\u0439 \\u043A\\u0430\\u0442\\u0435\\u0433\\u043E\\u0440\\u0438\\u0438 \\u043D\\u0430\\u0447\\u043D\\u0438\\u0442\\u0435 \\u0441\\u0442\\u0440\\u043E\\u043A\\u0443 \\u0441 \\u0441\\u0438\\u043C\\u0432\\u043E\\u043B\\u0430 \\\"*\\\", \\u0444\\u043E\\u0440\\u043C\\u0430\\u0442: * ENGLISH|\\u0420\\u0423\\u0421\\u0421\\u041A\\u0418\\u0419, \\u043D\\u0430\\u043F\\u0440\\u0438\\u043C\\u0435\\u0440: \\\"* New Category|\\u041D\\u043E\\u0432\\u0430\\u044F \\u043A\\u0430\\u0442\\u0435\\u0433\\u043E\\u0440\\u0438\\u044F\\\" (\\u0431\\u0435\\u0437 \\u043A\\u0430\\u0432\\u044B\\u0447\\u0435\\u043A). \\u0421\\u0442\\u0440\\u043E\\u043A\\u0430 \\u0431\\u0435\\u0437 \\u0441\\u0438\\u043C\\u0432\\u043E\\u043B\\u0430 \\\"*\\\" \\u0432 \\u043D\\u0430\\u0447\\u0430\\u043B\\u0435 \\u0431\\u0443\\u0434\\u0435\\u0442 \\u0438\\u043D\\u0442\\u0435\\u0440\\u043F\\u0440\\u0435\\u0442\\u0438\\u0440\\u043E\\u0432\\u0430\\u0442\\u044C\\u0441\\u044F \\u043A\\u0430\\u043A \\u0445\\u0430\\u0440\\u0430\\u043A\\u0442\\u0435\\u0440\\u0438\\u0441\\u0442\\u0438\\u043A\\u0430, \\u0444\\u043E\\u0440\\u043C\\u0430\\u0442 \\u0441\\u043B\\u0435\\u0434\\u0443\\u044E\\u0449\\u0438\\u0439: NAME|\\u041D\\u0410\\u0417\\u0412\\u0410\\u041D\\u0418\\u0415,QUANTITY|\\u041A\\u041E\\u041B-\\u0412\\u041E,UNIT|\\u0415\\u0414\\u0418\\u041D\\u0418\\u0426\\u0410, \\u043D\\u0430\\u043F\\u0440\\u0438\\u043C\\u0435\\u0440: \\\"Boat anchor|\\u042F\\u043A\\u043E\\u0440\\u044C \\u0434\\u043B\\u044F \\u044F\\u0445\\u0442\\u044B,10,meters|\\u043C\\u0435\\u0442\\u0440\\u043E\\u0432\\\" (\\u0431\\u0435\\u0437 \\u043A\\u0430\\u0432\\u044B\\u0447\\u0435\\u043A). \\u041A\\u043E\\u043B\\u0438\\u0447\\u0435\\u0441\\u0442\\u0432\\u043E \\u0438 \\u0435\\u0434\\u0438\\u043D\\u0438\\u0446\\u044B \\u0438\\u0437\\u043C\\u0435\\u0440\\u0435\\u043D\\u0438\\u044F \\u043E\\u043F\\u0446\\u0438\\u043E\\u043D\\u0430\\u043B\\u044C\\u043D\\u044B.\",\"Edit\":\"\\u0420\\u0435\\u0434\\u0430\\u043A\\u0442\\u0438\\u0440\\u043E\\u0432\\u0430\\u043D\\u0438\\u0435\",\"Edit Base\":\"\\u0420\\u0435\\u0434\\u0430\\u043A\\u0442\\u0438\\u0440\\u043E\\u0432\\u0430\\u043D\\u0438\\u044F \\u0431\\u0430\\u0437\\u044B\",\"Edit Boat\":\"\\u0420\\u0435\\u0434\\u0430\\u043A\\u0442\\u0438\\u0440\\u043E\\u0432\\u0430\\u043D\\u0438\\u0435 \\u044F\\u0445\\u0442\\u044B\",\"Edit Country\":\"\\u0420\\u0435\\u0434\\u0430\\u043A\\u0442\\u0438\\u0440\\u043E\\u0432\\u0430\\u043D\\u0438\\u0435 \\u0441\\u0442\\u0440\\u0430\\u043D\\u044B\",\"Edit Destination\":\"\\u0420\\u0435\\u0434\\u0430\\u043A\\u0442\\u0438\\u0440\\u043E\\u0432\\u0430\\u043D\\u0438\\u0435 \\u043D\\u0430\\u043F\\u0440\\u0430\\u0432\\u043B\\u0435\\u043D\\u0438\\u044F\",\"Edit Page\":\"\\u0420\\u0435\\u0434\\u0430\\u043A\\u0442\\u0438\\u0440\\u043E\\u0432\\u0430\\u043D\\u0438\\u0435 \\u0441\\u0442\\u0440\\u0430\\u043D\\u0438\\u0446\\u044B\",\"Edit User\":\"\\u0420\\u0435\\u0434\\u0430\\u043A\\u0442\\u0438\\u0440\\u043E\\u0432\\u0430\\u043D\\u0438\\u0435 \\u043F\\u043E\\u043B\\u044C\\u0437\\u043E\\u0432\\u0430\\u0442\\u0435\\u043B\\u044F\",\"Electric Toilettes\":\"\\u042D\\u043B\\u0435\\u043A\\u0442\\u0440\\u0438\\u0447\\u0435\\u0441\\u043A\\u0438\\u0435 \\u0442\\u0443\\u0430\\u043B\\u0435\\u0442\\u044B\",\"Electric Winch\":\"\\u042D\\u043B\\u0435\\u043A\\u0442\\u0440\\u0438\\u0447\\u0435\\u0441\\u043A\\u0430\\u044F \\u043B\\u0435\\u0431\\u0435\\u0434\\u043A\\u0430\",\"End date\":\"\\u0414\\u0430\\u0442\\u0430 \\u043E\\u043A\\u043E\\u043D\\u0447\\u0430\\u043D\\u0438\\u044F\",\"Equipment & Extras\":\"\\u041E\\u0431\\u043E\\u0440\\u0443\\u0434\\u043E\\u0432\\u0430\\u043D\\u0438\\u0435 \\u0438 \\u0434\\u043E\\u043F\\u043E\\u043B\\u043D\\u0435\\u043D\\u0438\\u044F\",\"Example: username@zoiajs.org\":\"\\u041F\\u0440\\u0438\\u043C\\u0435\\u0440: username@zoiajs.org\",\"Extra is a mandatory\":\"\\u041E\\u043F\\u0446\\u0438\\u044F \\u043E\\u0431\\u044F\\u0437\\u0430\\u0442\\u0435\\u043B\\u044C\\u043D\\u0430 \\u0434\\u043B\\u044F \\u0437\\u0430\\u043A\\u0430\\u0437\\u0430\",\"Extras\":\"\\u041E\\u043F\\u0446\\u0438\\u0438\",\"Field is required\":\"\\u041E\\u0431\\u044F\\u0437\\u0430\\u0442\\u0435\\u043B\\u044C\\u043D\\u043E\\u0435 \\u043F\\u043E\\u043B\\u0435\",\"Filename\":\"\\u0418\\u043C\\u044F \\u0444\\u0430\\u0439\\u043B\\u0430\",\"Format: DAYS=DISCOUNT, DAYS=DISCOUNT, ... (example: 7=5, 14=10)\":\"\\u0424\\u043E\\u0440\\u043C\\u0430\\u0442: \\u0414\\u041D\\u0418=\\u0421\\u041A\\u0418\\u0414\\u041A\\u0410, \\u0414\\u041D\\u0418=\\u0421\\u041A\\u0418\\u0414\\u041A\\u0410, ... (\\u043D\\u0430\\u043F\\u0440\\u0438\\u043C\\u0435\\u0440: 7=5, 14=10)\",\"Format: NAME_EN|NAME_RU, example: \\\"Option|\\u041E\\u043F\\u0446\\u0438\\u044F\\\" (without quotes)\":\"\\u0424\\u043E\\u0440\\u043C\\u0430\\u0442: ENGLISH|\\u0420\\u0423\\u0421\\u0421\\u041A\\u0418\\u0419, \\u043D\\u0430\\u043F\\u0440\\u0438\\u043C\\u0435\\u0440: \\\"Option|\\u041E\\u043F\\u0446\\u0438\\u044F\\\" (\\u0431\\u0435\\u0437 \\u043A\\u0430\\u0432\\u044B\\u0447\\u0435\\u043A)\",\"Friday\":\"\\u041F\\u044F\\u0442\\u043D\\u0438\\u0446\\u0430\",\"Furling Mainsail\":\"\\u0417\\u0430\\u043A\\u0440\\u0443\\u0442\\u043A\\u0438\",\"GPS\":\"GPS\",\"Generator\":\"\\u0413\\u0435\\u043D\\u0435\\u0440\\u0430\\u0442\\u043E\\u0440\",\"Gulet\":\"\\u0413\\u0443\\u043B\\u0435\\u0442\",\"HP\":\"\\u041B.\\u0441.\",\"Heads\":\"\\u0422\\u0443\\u0430\\u043B\\u0435\\u0442\\u044B\",\"Home Base\":\"\\u0414\\u043E\\u043C\\u0430\\u0448\\u043D\\u0430\\u044F\\u044F \\u0431\\u0430\\u0437\\u0430\",\"Houseboat\":\"\\u0425\\u0430\\u0443\\u0441\\u0431\\u043E\\u0442\",\"ID\":\"ID\",\"Inactive\":\"\\u041D\\u0435\\u0430\\u043A\\u0442\\u0438\\u0432\\u0435\\u043D\",\"Internal Error\":\"\\u0412\\u043D\\u0443\\u0442\\u0440\\u0435\\u043D\\u043D\\u044F\\u044F \\u043E\\u0448\\u0438\\u0431\\u043A\\u0430\",\"Invalid format\":\"\\u041D\\u0435\\u0432\\u0435\\u0440\\u043D\\u044B\\u0439 \\u0444\\u043E\\u0440\\u043C\\u0430\\u0442\",\"Invalid username or password\":\"\\u041D\\u0435\\u0432\\u0435\\u0440\\u043D\\u043E\\u0435 \\u0438\\u043C\\u044F \\u043F\\u043E\\u043B\\u044C\\u0437\\u043E\\u0432\\u0430\\u0442\\u0435\\u043B\\u044F \\u0438\\u043B\\u0438 \\u043F\\u0430\\u0440\\u043E\\u043B\\u044C\",\"Latin characters, numbers, _, - (length: 0-64)\":\"\\u041B\\u0430\\u0442. \\u0441\\u0438\\u043C\\u0432\\u043E\\u043B\\u044B/_/-, \\u0434\\u043B\\u0438\\u043D\\u0430: 0-64\",\"Latin chars/_/-, length: 4-32\":\"\\u041B\\u0430\\u0442. \\u0441\\u0438\\u043C\\u0432\\u043E\\u043B\\u044B/_/-, \\u0434\\u043B\\u0438\\u043D\\u0430: 4-32\",\"Length\":\"\\u0414\\u043B\\u0438\\u043D\\u0430\",\"Loading data, please wait\\u2026\":\"\\u0417\\u0430\\u0433\\u0440\\u0443\\u0437\\u043A\\u0430 \\u0434\\u0430\\u043D\\u043D\\u044B\\u0445, \\u043F\\u043E\\u0436\\u0430\\u043B\\u0443\\u0439\\u0441\\u0442\\u0430, \\u043F\\u043E\\u0434\\u043E\\u0436\\u0434\\u0438\\u0442\\u0435\\u2026\",\"Loading site configuration...\":\"\\u0417\\u0430\\u0433\\u0440\\u0443\\u0437\\u043A\\u0430 \\u043A\\u043E\\u043D\\u0444\\u0438\\u0433\\u0443\\u0440\\u0430\\u0446\\u0438\\u0438 \\u0441\\u0430\\u0439\\u0442\\u0430...\",\"Log Out\":\"\\u0412\\u044B\\u0445\\u043E\\u0434\",\"Meters\":\"\\u041C\\u0435\\u0442\\u0440\\u044B\",\"Min. days\":\"\\u041C\\u0438\\u043D. \\u0434\\u043D\\u0435\\u0439\",\"Model\":\"\\u041C\\u043E\\u0434\\u0435\\u043B\\u044C\",\"Monday\":\"\\u041F\\u043E\\u043D\\u0435\\u0434\\u0435\\u043B\\u044C\\u043D\\u0438\\u043A\",\"Monohull\":\"\\u041F\\u0430\\u0440\\u0443\\u0441\\u043D\\u0430\\u044F \\u044F\\u0445\\u0442\\u0430\",\"Motor Boat\":\"\\u041C\\u043E\\u0442\\u043E\\u0440\\u043D\\u0430\\u044F \\u044F\\u0445\\u0442\\u0430\",\"Multiple of 7\":\"\\u041A\\u0440\\u0430\\u0442\\u043D\\u043E \\u0441\\u0435\\u043C\\u0438\",\"Name\":\"\\u0418\\u043C\\u044F\",\"New Base\":\"\\u041D\\u043E\\u0432\\u0430\\u044F \\u0431\\u0430\\u0437\\u0430\",\"New Boat\":\"\\u041D\\u043E\\u0432\\u0430\\u044F \\u044F\\u0445\\u0442\\u0430\",\"New Country\":\"\\u041D\\u043E\\u0432\\u0430\\u044F \\u0441\\u0442\\u0440\\u0430\\u043D\\u0430\",\"New Destination\":\"\\u041D\\u043E\\u0432\\u043E\\u0435 \\u043D\\u0430\\u043F\\u0440\\u0430\\u0432\\u043B\\u0435\\u043D\\u0438\\u0435\",\"New Page\":\"\\u041D\\u043E\\u0432\\u0430\\u044F \\u0441\\u0442\\u0440\\u0430\\u043D\\u0438\\u0446\\u0430\",\"No records to display\":\"\\u041D\\u0435\\u0442 \\u0437\\u0430\\u043F\\u0438\\u0441\\u0435\\u0439 \\u0434\\u043B\\u044F \\u043E\\u0442\\u043E\\u0431\\u0440\\u0430\\u0436\\u0435\\u043D\\u0438\\u044F\",\"Normal User\":\"\\u041F\\u043E\\u043B\\u044C\\u0437\\u043E\\u0432\\u0430\\u0442\\u0435\\u043B\\u044C\",\"Only enter a new password in case you wish to change it for the current user. Password should be at least 8 characters long.\":\"\\u0412\\u0432\\u0435\\u0434\\u0438\\u0442\\u0435 \\u043D\\u043E\\u0432\\u044B\\u0439 \\u043F\\u0430\\u0440\\u043E\\u043B\\u044C \\u0442\\u043E\\u043B\\u044C\\u043A\\u043E \\u0432 \\u0442\\u043E\\u043C \\u0441\\u043B\\u0443\\u0447\\u0430\\u0435, \\u0435\\u0441\\u043B\\u0438 \\u0432\\u044B \\u0445\\u043E\\u0442\\u0438\\u0442\\u0435 \\u0438\\u0437\\u043C\\u0435\\u043D\\u0438\\u0442\\u044C \\u0435\\u0433\\u043E \\u0434\\u043B\\u044F \\u0442\\u0435\\u043A\\u0443\\u0449\\u0435\\u0433\\u043E \\u043F\\u043E\\u043B\\u044C\\u0437\\u043E\\u0432\\u0430\\u0442\\u0435\\u043B\\u044F. \\u041F\\u0430\\u0440\\u043E\\u043B\\u044C \\u0434\\u043E\\u043B\\u0436\\u0435\\u043D \\u0441\\u043E\\u0434\\u0435\\u0440\\u0436\\u0430\\u0442\\u044C \\u043D\\u0435 \\u043C\\u0435\\u043D\\u0435\\u0435 8 \\u0441\\u0438\\u043C\\u0432\\u043E\\u043B\\u043E\\u0432.\",\"Operation complete\":\"\\u041E\\u043F\\u0435\\u0440\\u0430\\u0446\\u0438\\u044F \\u0432\\u044B\\u043F\\u043E\\u043B\\u043D\\u0435\\u043D\\u0430\",\"Options\":\"\\u041E\\u043F\\u0446\\u0438\\u0438\",\"Outboard Motor\":\"\\u0422\\u0443\\u0437\\u0438\\u043A\",\"Page\":\"\\u0421\\u0442\\u0440\\u0430\\u043D\\u0438\\u0446\\u0430\",\"Page not Found\":\"\\u0421\\u0442\\u0440\\u0430\\u043D\\u0438\\u0446\\u0430 \\u043D\\u0435 \\u043D\\u0430\\u0439\\u0434\\u0435\\u043D\\u0430\",\"Page not found\":\"\\u0421\\u0442\\u0440\\u0430\\u043D\\u0438\\u0446\\u0430 \\u043D\\u0435 \\u043D\\u0430\\u0439\\u0434\\u0435\\u043D\\u0430\",\"Pages\":\"\\u041A\\u043E\\u043D\\u0442\\u0435\\u043D\\u0442\",\"Password\":\"\\u041F\\u0430\\u0440\\u043E\\u043B\\u044C\",\"Password is required when creating a new user, should be at least 8 characters long.\":\"\\u041F\\u0430\\u0440\\u043E\\u043B\\u044C \\u0442\\u0440\\u0435\\u0431\\u0443\\u0435\\u0442\\u0441\\u044F \\u043F\\u0440\\u0438 \\u0441\\u043E\\u0437\\u0434\\u0430\\u043D\\u0438\\u0438 \\u043D\\u043E\\u0432\\u043E\\u0433\\u043E \\u043F\\u043E\\u043B\\u044C\\u0437\\u043E\\u0432\\u0430\\u0442\\u0435\\u043B\\u044F, \\u0434\\u043E\\u043B\\u0436\\u0435\\u043D \\u0431\\u044B\\u0442\\u044C \\u043D\\u0435 \\u043C\\u0435\\u043D\\u0435\\u0435 8 \\u0441\\u0438\\u043C\\u0432\\u043E\\u043B\\u043E\\u0432.\",\"Passwords do not match\":\"\\u041F\\u0430\\u0440\\u043E\\u043B\\u044C \\u043D\\u0435 \\u0441\\u043E\\u0432\\u043F\\u0430\\u0434\\u0430\\u0435\\u0442\",\"Path\":\"\\u041F\\u0443\\u0442\\u044C\",\"Pax\":\"\\u041F\\u0430\\u0441\\u0441.\",\"Per\":\"\\u0437\\u0430\",\"Per Week Only\":\"\\u041F\\u043E \\u043D\\u0435\\u0434\\u0435\\u043B\\u044F\\u043C\",\"Permissions\":\"\\u041F\\u0440\\u0430\\u0432\\u0430\",\"Please select an item first\":\"\\u041F\\u043E\\u0436\\u0430\\u043B\\u0443\\u0439\\u0441\\u0442\\u0430, \\u0432\\u044B\\u0431\\u0435\\u0440\\u0438\\u0442\\u0435 \\u044D\\u043B\\u0435\\u043C\\u0435\\u043D\\u0442 \\u0438\\u0437 \\u0441\\u043F\\u0438\\u0441\\u043A\\u0430\",\"Possible Start\":\"\\u0412\\u043E\\u0437\\u043C\\u043E\\u0436\\u043D\\u044B\\u0439 \\u0441\\u0442\\u0430\\u0440\\u0442\",\"Power\":\"\\u041C\\u043E\\u0449\\u043D\\u043E\\u0441\\u0442\\u044C\",\"Powered Catamaran\":\"\\u041C\\u043E\\u0442\\u043E\\u0440\\u043D\\u044B\\u0439 \\u043A\\u0430\\u0442\\u0430\\u043C\\u0430\\u0440\\u0430\\u043D\",\"Prices\":\"\\u0426\\u0435\\u043D\\u044B\",\"Pricing Mode\":\"\\u0420\\u0435\\u0436\\u0438\\u043C\",\"Record with the entered value already exists\":\"\\u0417\\u0430\\u043F\\u0438\\u0441\\u044C \\u0441 \\u0442\\u0430\\u043A\\u0438\\u043C \\u0437\\u043D\\u0430\\u0447\\u0435\\u043D\\u0438\\u0435\\u043C \\u0443\\u0436\\u0435 \\u0441\\u0443\\u0449\\u0435\\u0441\\u0442\\u0432\\u0443\\u0435\\u0442\",\"Refitted Year\":\"\\u0413\\u043E\\u0434 \\u0440\\u0435\\u043C\\u043E\\u043D\\u0442\\u0430\",\"Refresh\":\"\\u041E\\u0431\\u043D\\u043E\\u0432\\u0438\\u0442\\u044C\",\"Regular\":\"\\u041F\\u043E \\u0434\\u043D\\u044F\\u043C\",\"Rent period\":\"\\u041F\\u0435\\u0440\\u0438\\u043E\\u0434 \\u0430\\u0440\\u0435\\u043D\\u0434\\u044B\",\"Repeat Password\":\"\\u041F\\u043E\\u0432\\u0442\\u043E\\u0440 \\u043F\\u0430\\u0440\\u043E\\u043B\\u044F\",\"Required\":\"\\u041E\\u0431\\u044F\\u0437\\u0430\\u0442\\u0435\\u043B\\u044C\\u043D\\u043E\\u0435 \\u043F\\u043E\\u043B\\u0435\",\"Root\":\"\\u041A\\u043E\\u0440\\u043D\\u0435\\u0432\\u0430\\u044F \\u043F\\u0430\\u043F\\u043A\\u0430\",\"Saturday\":\"\\u0421\\u0443\\u0431\\u0431\\u043E\\u0442\\u0430\",\"Save\":\"\\u0421\\u043E\\u0445\\u0440\\u0430\\u043D\\u0438\\u0442\\u044C\",\"Select\":\"\\u0412\\u044B\\u0431\\u0440\\u0430\\u0442\\u044C\",\"Selected image type is not supported\":\"\\u0412\\u044B\\u0431\\u0440\\u0430\\u043D\\u043D\\u044B\\u0439 \\u0442\\u0438\\u043F \\u0438\\u0437\\u043E\\u0431\\u0440\\u0430\\u0436\\u0435\\u043D\\u0438\\u044F \\u043D\\u0435 \\u043F\\u043E\\u0434\\u0434\\u0435\\u0440\\u0436\\u0438\\u0432\\u0430\\u0435\\u0442\\u0441\\u044F\",\"Showers\":\"\\u0414\\u0443\\u0448\\u0438\",\"Single Cabins\":\"\\u041E\\u0434\\u043D\\u043E\\u043C\\u0435\\u0441\\u0442\\u043D\\u044B\\u0435 \\u043A\\u0430\\u044E\\u0442\\u044B\",\"Skipper Cost\":\"\\u0410\\u0440\\u0435\\u043D\\u0434\\u0430 \\u043A\\u0430\\u043F\\u0438\\u0442\\u0430\\u043D\\u0430\",\"Solar Panel\":\"\\u0421\\u043E\\u043B\\u043D\\u0435\\u0447\\u043D\\u044B\\u0435 \\u043F\\u0430\\u043D\\u0435\\u043B\\u0438\",\"Speedboat\":\"\\u041A\\u0430\\u0442\\u0435\\u0440\",\"Start date\":\"\\u0414\\u0430\\u0442\\u0430 \\u043D\\u0430\\u0447\\u0430\\u043B\\u0430\",\"Status\":\"\\u0421\\u0442\\u0430\\u0442\\u0443\\u0441\",\"Sunday\":\"\\u0412\\u043E\\u0441\\u043A\\u0440\\u0435\\u0441\\u0435\\u043D\\u044C\\u0435\",\"The following base(s) will be permanently deleted:\":\"\\u0421\\u043B\\u0435\\u0434\\u0443\\u044E\\u0449\\u0430\\u044F \\u0431\\u0430\\u0437\\u0430(\\u0431\\u0430\\u0437\\u044B) \\u0431\\u0443\\u0434\\u0443\\u0442 \\u0443\\u0434\\u0430\\u043B\\u0435\\u043D\\u044B \\u0431\\u0435\\u0437\\u0432\\u043E\\u0437\\u0432\\u0440\\u0430\\u0442\\u043D\\u043E:\",\"The following boat(s) will be permanently deleted:\":\"\\u0421\\u043B\\u0435\\u0434\\u0443\\u044E\\u0449\\u0430\\u044F \\u044F\\u0445\\u0442\\u0430(\\u044F\\u0445\\u0442\\u044B) \\u0431\\u0443\\u0434\\u0443\\u0442 \\u0443\\u0434\\u0430\\u043B\\u0435\\u043D\\u044B \\u0431\\u0435\\u0437\\u0432\\u043E\\u0437\\u0432\\u0440\\u0430\\u0442\\u043D\\u043E:\",\"The following country(ies) will be permanently deleted:\":\"\\u0421\\u043B\\u0435\\u0434\\u0443\\u044E\\u0449\\u0430\\u044F \\u0441\\u0442\\u0440\\u0430\\u043D\\u0430(\\u0441\\u0442\\u0440\\u0430\\u043D\\u044B) \\u0431\\u0443\\u0434\\u0443\\u0442 \\u0443\\u0434\\u0430\\u043B\\u0435\\u043D\\u044B \\u0431\\u0435\\u0437\\u0432\\u043E\\u0437\\u0432\\u0440\\u0430\\u0442\\u043D\\u043E:\",\"The following destination(s) will be permanently deleted:\":\"\\u0421\\u043B\\u0435\\u0434\\u0443\\u044E\\u0449\\u0435\\u0435 \\u043D\\u0430\\u043F\\u0440\\u0430\\u0432\\u043B\\u0435\\u043D\\u0438\\u0435(\\u043D\\u0430\\u043F\\u0440\\u0430\\u0432\\u043B\\u0435\\u043D\\u0438\\u044F) \\u0431\\u0443\\u0434\\u0443\\u0442 \\u0443\\u0434\\u0430\\u043B\\u0435\\u043D\\u044B \\u0431\\u0435\\u0437\\u0432\\u043E\\u0437\\u0432\\u0440\\u0430\\u0442\\u043D\\u043E:\",\"The following page(s) will be permanently deleted:\":\"\\u0421\\u043B\\u0435\\u0434\\u0443\\u044E\\u0449\\u0438\\u0435 \\u0441\\u0442\\u0440\\u0430\\u043D\\u0438\\u0446\\u044B \\u0431\\u0443\\u0434\\u0443\\u0442 \\u0443\\u0434\\u0430\\u043B\\u0435\\u043D\\u044B \\u043D\\u0430\\u0432\\u0441\\u0435\\u0433\\u0434\\u0430:\",\"The following user(s) will be permanently deleted:\":\"\\u0421\\u043B\\u0435\\u0434\\u0443\\u044E\\u0449\\u0438\\u0435 \\u043F\\u043E\\u043B\\u044C\\u0437\\u043E\\u0432\\u0430\\u0442\\u0435\\u043B\\u0438 \\u0431\\u0443\\u0434\\u0443\\u0442 \\u0443\\u0434\\u0430\\u043B\\u0435\\u043D\\u044B \\u043D\\u0430\\u0432\\u0441\\u0435\\u0433\\u0434\\u0430:\",\"Thruster\":\"\\u041F\\u043E\\u0434\\u0440\\u0443\\u043B\\u0438\\u0432\\u0430\\u044E\\u0449\\u0435\\u0435 \\u0443\\u0441\\u0442\\u0440.\",\"Thursday\":\"\\u0427\\u0435\\u0442\\u0432\\u0435\\u0440\\u0433\",\"Title\":\"\\u0417\\u0430\\u0433\\u043E\\u043B\\u043E\\u0432\\u043E\\u043A\",\"Too short\":\"\\u0421\\u043B\\u0438\\u0448\\u043A\\u043E\\u043C \\u043A\\u043E\\u0440\\u043E\\u043A\\u0438\\u0439\",\"Tuesday\":\"\\u0412\\u0442\\u043E\\u0440\\u043D\\u0438\\u043A\",\"Type\":\"\\u0422\\u0438\\u043F\",\"User not found\":\"\\u041D\\u0435 \\u043D\\u0430\\u0439\\u0434\\u0435\\u043D\",\"Username\":\"\\u0418\\u043C\\u044F \\u043F\\u043E\\u043B\\u044C\\u0437\\u043E\\u0432\\u0430\\u0442\\u0435\\u043B\\u044F\",\"Users\":\"\\u041F\\u043E\\u043B\\u044C\\u0437\\u043E\\u0432\\u0430\\u0442\\u0435\\u043B\\u0438\",\"Water Maker\":\"\\u041E\\u043F\\u0440\\u0435\\u0441\\u043D\\u0438\\u0442\\u0435\\u043B\\u044C \\u0432\\u043E\\u0434\\u044B\",\"Wednesday\":\"\\u0421\\u0440\\u0435\\u0434\\u0430\",\"Wi-Fi\":\"Wi-Fi\",\"Yes\":\"\\u0414\\u0430\",\"bases\":\"\\u0411\\u0430\\u0437\\u044B\",\"boat\":\"\\u044F\\u0445\\u0442\\u0443\",\"boats\":\"\\u042F\\u0445\\u0442\\u044B\",\"countries\":\"\\u0421\\u0442\\u0440\\u0430\\u043D\\u044B\",\"day\":\"\\u0434\\u0435\\u043D\\u044C\",\"destinations\":\"\\u041D\\u0430\\u043F\\u0440\\u0430\\u0432\\u043B\\u0435\\u043D\\u0438\\u044F\",\"mandatory\":\"\\u043E\\u0431\\u044F\\u0437\\u0430\\u0442\\u0435\\u043B\\u044C\\u043D\\u043E\",\"optional\":\"\\u043E\\u043F\\u0446\\u0438\\u043E\\u043D\\u0430\\u043B\\u044C\\u043D\\u043E\",\"or selecting one\":\"\\u0438\\u043B\\u0438 \\u0432\\u044B\\u0431\\u0435\\u0440\\u0438\\u0442\\u0435 \\u043D\\u0430 \\u0434\\u0438\\u0441\\u043A\\u0435\",\"pages\":\"\\u041A\\u043E\\u043D\\u0442\\u0435\\u043D\\u0442\",\"pax\":\"\\u043F\\u0430\\u0441\\u0441.\",\"per\":\"\\u0437\\u0430\",\"stay\":\"\\u043F\\u0435\\u0440\\u0438\\u043E\\u0434 \\u0430\\u0440\\u0435\\u043D\\u0434\\u044B\",\"users\":\"\\u041F\\u043E\\u043B\\u044C\\u0437\\u043E\\u0432\\u0430\\u0442\\u0435\\u043B\\u0438\",\"week\":\"\\u043D\\u0435\\u0434\\u0435\\u043B\\u044E\",\"will be deleted. Are you sure?\":\"\\u0431\\u0443\\u0434\\u0443\\u0442 \\u0443\\u0434\\u0430\\u043B\\u0435\\u043D\\u044B. \\u0412\\u044B \\u0443\\u0432\\u0435\\u0440\\u0435\\u043D\\u044B?\"}};\n\n//# sourceURL=webpack:///../locales/admin/ru/messages.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _etc_secure_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../etc/secure.json */ \"../../etc/secure.json\");\nvar _etc_secure_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../etc/secure.json */ \"../../etc/secure.json\", 1);\n/* harmony import */ var _api_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/logger */ \"../api/logger.js\");\n/* harmony import */ var fastify_mongodb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fastify-mongodb */ \"fastify-mongodb\");\n/* harmony import */ var fastify_mongodb__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fastify_mongodb__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var fastify_url_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fastify-url-data */ \"fastify-url-data\");\n/* harmony import */ var fastify_url_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fastify_url_data__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var fastify_cors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fastify-cors */ \"fastify-cors\");\n/* harmony import */ var fastify_cors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fastify_cors__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var fastify_jwt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! fastify-jwt */ \"fastify-jwt\");\n/* harmony import */ var fastify_jwt__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(fastify_jwt__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var fastify_formbody__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! fastify-formbody */ \"fastify-formbody\");\n/* harmony import */ var fastify_formbody__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(fastify_formbody__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var fastify_multipart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! fastify-multipart */ \"fastify-multipart\");\n/* harmony import */ var fastify_multipart__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(fastify_multipart__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _build_modules_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../build/modules.json */ \"../build/modules.json\");\nvar _build_modules_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../build/modules.json */ \"../build/modules.json\", 1);\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var pino__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! pino */ \"pino\");\n/* harmony import */ var pino__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(pino__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var fastify__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! fastify */ \"fastify\");\n/* harmony import */ var fastify__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(fastify__WEBPACK_IMPORTED_MODULE_11__);\n/* eslint-disable import/order */\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst log = pino__WEBPACK_IMPORTED_MODULE_10___default()({\n    level: _etc_secure_json__WEBPACK_IMPORTED_MODULE_0__.loglevel\n});\nconst fastify = fastify__WEBPACK_IMPORTED_MODULE_11___default()({\n    logger: _api_logger__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    trustProxy: _etc_secure_json__WEBPACK_IMPORTED_MODULE_0__.trustProxy\n});\n\n(async () => {\n    const mongoClient = new mongodb__WEBPACK_IMPORTED_MODULE_9__[\"MongoClient\"](_etc_secure_json__WEBPACK_IMPORTED_MODULE_0__.mongo.url, {\n        useNewUrlParser: true,\n        useUnifiedTopology: true\n    });\n    await mongoClient.connect();\n    fastify.register(fastify_formbody__WEBPACK_IMPORTED_MODULE_6___default.a);\n    fastify.register(fastify_multipart__WEBPACK_IMPORTED_MODULE_7___default.a, {\n        addToBody: true\n    });\n    fastify.register(fastify_url_data__WEBPACK_IMPORTED_MODULE_3___default.a);\n    fastify.register(fastify_mongodb__WEBPACK_IMPORTED_MODULE_2___default.a, {\n        client: mongoClient,\n        database: _etc_secure_json__WEBPACK_IMPORTED_MODULE_0__.mongo.dbName\n    }).register((ff, opts, next) => {\n        ff.mongo.client.db(_etc_secure_json__WEBPACK_IMPORTED_MODULE_0__.mongo.dbName).on('close', () => {\n            log.error('Connection to MongoDB is broken');\n            process.exit(1);\n        });\n        next();\n    });\n    fastify.register(fastify_cors__WEBPACK_IMPORTED_MODULE_4___default.a, {\n        origin: _etc_secure_json__WEBPACK_IMPORTED_MODULE_0__.originCORS\n    });\n    fastify.register(fastify_jwt__WEBPACK_IMPORTED_MODULE_5___default.a, {\n        secret: _etc_secure_json__WEBPACK_IMPORTED_MODULE_0__.secret\n    });\n    await Promise.all(Object.keys(_build_modules_json__WEBPACK_IMPORTED_MODULE_8__).map(async m => {\n        const module = await __webpack_require__(\"../../modules lazy recursive ^\\\\.\\\\/.*\\\\/marko\\\\/index\\\\.js$\")(`./${m}/marko/index.js`);\n        module.default(fastify);\n    }));\n    log.info('Starting Web server...');\n    fastify.listen(_etc_secure_json__WEBPACK_IMPORTED_MODULE_0__.webServer.port, _etc_secure_json__WEBPACK_IMPORTED_MODULE_0__.webServer.ip);\n})().catch(err => {\n    log.error(err);\n    process.exit(1);\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./template/index.marko":
/*!******************************!*\
  !*** ./template/index.marko ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.18.14 - DO NOT EDIT\n\n\nvar marko_template = module.exports = __webpack_require__(/*! marko/src/html */ \"marko/src/html\").t(__filename),\n    marko_componentType = \"/zoia2$1.0.0/shared/marko/template/index.marko\",\n    components_helpers = __webpack_require__(/*! marko/src/runtime/components/helpers */ \"marko/src/runtime/components/helpers\"),\n    marko_renderer = components_helpers.r,\n    marko_defineComponent = components_helpers.c,\n    marko_helpers = __webpack_require__(/*! marko/src/runtime/html/helpers */ \"marko/src/runtime/html/helpers\"),\n    marko_escapeXml = marko_helpers.x,\n    marko_loadTag = marko_helpers.t,\n    component_globals_tag = marko_loadTag(__webpack_require__(/*! marko/src/core-tags/components/component-globals-tag */ \"marko/src/core-tags/components/component-globals-tag\")),\n    marko_dynamicTag = marko_helpers.d,\n    init_components_tag = marko_loadTag(__webpack_require__(/*! marko/src/core-tags/components/init-components-tag */ \"marko/src/core-tags/components/init-components-tag\")),\n    await_reorderer_tag = marko_loadTag(__webpack_require__(/*! marko/src/core-tags/core/await/reorderer-renderer */ \"marko/src/core-tags/core/await/reorderer-renderer\"));\n\nfunction render(input, out, __component, component, state) {\n  var data = input;\n\n  out.w(\"<!DOCTYPE html><html lang=\\\"ru\\\"><head><meta charset=\\\"utf-8\\\"><title>\" +\n    marko_escapeXml(input.title) +\n    \"</title>\");\n\n  out.___renderAssets && out.___renderAssets()\n\n  out.w(\"</head><body>\");\n\n  component_globals_tag({}, out);\n\n  marko_dynamicTag(out, input.renderBody, null, null, null, null, __component, \"5\");\n\n  init_components_tag({}, out);\n\n  await_reorderer_tag({}, out, __component, \"6\");\n\n  out.w(\"</body></html>\");\n}\n\nmarko_template._ = marko_renderer(render, {\n    ___implicit: true,\n    ___type: marko_componentType\n  });\n\nmarko_template.Component = marko_defineComponent({}, marko_template._);\n\nmarko_template.meta = {\n    deps: [\n      {\n          type: \"scss\",\n          code: \"@import \\\"../../styles/uikit.scss\\\";\",\n          virtualPath: \"./index.marko.scss\",\n          path: \"./index.marko\"\n        }\n    ],\n    id: \"/zoia2$1.0.0/shared/marko/template/index.marko\",\n    tags: [\n      \"marko/src/core-tags/components/component-globals-tag\",\n      \"marko/src/core-tags/components/init-components-tag\",\n      \"marko/src/core-tags/core/await/reorderer-renderer\"\n    ]\n  };\n\n/* WEBPACK VAR INJECTION */}.call(this, \"/index.js\"))\n\n//# sourceURL=webpack:///./template/index.marko?");

/***/ }),

/***/ "@lingui/core":
/*!*******************************!*\
  !*** external "@lingui/core" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@lingui/core\");\n\n//# sourceURL=webpack:///external_%22@lingui/core%22?");

/***/ }),

/***/ "fastify":
/*!**************************!*\
  !*** external "fastify" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fastify\");\n\n//# sourceURL=webpack:///external_%22fastify%22?");

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