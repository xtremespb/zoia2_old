/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../../../Users/mma2/Documents/JS/zoia2/shared/api/tools.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../Users/mma2/Documents/JS/zoia2/etc/secure.json":
/*!********************************************************!*\
  !*** c:/Users/mma2/Documents/JS/zoia2/etc/secure.json ***!
  \********************************************************/
/*! exports provided: secret, authTokenExpiresIn, cookieOptions, mongo, httpServer, originCORS, trustProxy, development, loglevel, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"secret\\\":\\\"79a947c3cbecfb5819b03f21eb00b3180e649bea0c189a7f4ff0bdd10e1fd292\\\",\\\"authTokenExpiresIn\\\":\\\"7 days\\\",\\\"cookieOptions\\\":{\\\"expires\\\":14,\\\"path\\\":\\\"/\\\",\\\"domain\\\":\\\"\\\",\\\"secure\\\":false,\\\"sameSite\\\":\\\"strict\\\"},\\\"mongo\\\":{\\\"url\\\":\\\"mongodb://localhost:27017\\\",\\\"dbName\\\":\\\"zoia\\\"},\\\"httpServer\\\":{\\\"ip\\\":\\\"127.0.0.1\\\",\\\"port\\\":3000},\\\"originCORS\\\":\\\"*\\\",\\\"trustProxy\\\":true,\\\"development\\\":false,\\\"loglevel\\\":\\\"info\\\"}\");\n\n//# sourceURL=webpack:///c:/Users/mma2/Documents/JS/zoia2/etc/secure.json?");

/***/ }),

/***/ "../../../Users/mma2/Documents/JS/zoia2/modules sync recursive ^\\.\\/.*\\/database\\.json$":
/*!******************************************************************************!*\
  !*** c:/Users/mma2/Documents/JS/zoia2/modules sync ^\.\/.*\/database\.json$ ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./pages/database.json\": \"../../../Users/mma2/Documents/JS/zoia2/modules/pages/database.json\",\n\t\"./registry/database.json\": \"../../../Users/mma2/Documents/JS/zoia2/modules/registry/database.json\",\n\t\"./users/database.json\": \"../../../Users/mma2/Documents/JS/zoia2/modules/users/database.json\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"../../../Users/mma2/Documents/JS/zoia2/modules sync recursive ^\\\\.\\\\/.*\\\\/database\\\\.json$\";\n\n//# sourceURL=webpack:///c:/Users/mma2/Documents/JS/zoia2/modules_sync_^\\.\\/.*\\/database\\.json$?");

/***/ }),

/***/ "../../../Users/mma2/Documents/JS/zoia2/modules sync recursive ^\\.\\/.*\\/install\\.js$":
/*!***************************************************************************!*\
  !*** c:/Users/mma2/Documents/JS/zoia2/modules sync ^\.\/.*\/install\.js$ ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./pages/install.js\": \"../../../Users/mma2/Documents/JS/zoia2/modules/pages/install.js\",\n\t\"./users/install.js\": \"../../../Users/mma2/Documents/JS/zoia2/modules/users/install.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"../../../Users/mma2/Documents/JS/zoia2/modules sync recursive ^\\\\.\\\\/.*\\\\/install\\\\.js$\";\n\n//# sourceURL=webpack:///c:/Users/mma2/Documents/JS/zoia2/modules_sync_^\\.\\/.*\\/install\\.js$?");

/***/ }),

/***/ "../../../Users/mma2/Documents/JS/zoia2/modules/pages/database.json":
/*!********************************************************************!*\
  !*** c:/Users/mma2/Documents/JS/zoia2/modules/pages/database.json ***!
  \********************************************************************/
/*! exports provided: collections, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"collections\\\":{\\\"pages\\\":{\\\"indexesAsc\\\":[\\\"path\\\",\\\"filename\\\",\\\"data.[language].title\\\"],\\\"indexesDesc\\\":[\\\"path\\\",\\\"filename\\\",\\\"data.[language].title\\\"]}}}\");\n\n//# sourceURL=webpack:///c:/Users/mma2/Documents/JS/zoia2/modules/pages/database.json?");

/***/ }),

/***/ "../../../Users/mma2/Documents/JS/zoia2/modules/pages/install.js":
/*!*****************************************************************!*\
  !*** c:/Users/mma2/Documents/JS/zoia2/modules/pages/install.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! colors */ \"colors\");\n/* harmony import */ var colors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(colors__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* eslint no-console:0 */\n\n\nvar install =\n/*#__PURE__*/\nfunction () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n  /*#__PURE__*/\n  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(db) {\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            console.log(\"\".concat(colors__WEBPACK_IMPORTED_MODULE_2___default.a.green(' * '), \" Inserting or updating default page (/)...\"));\n            _context.next = 3;\n            return db.collection('pages').updateOne({\n              path: '/'\n            }, {\n              $set: {\n                path: '/',\n                data: {\n                  en: {\n                    title: 'Home Page',\n                    content: 'Zoia has been installed successfully.<br />Go to <a href=\"/admin\">admin panel</a> to get things done.'\n                  },\n                  ru: {\n                    title: 'Главная',\n                    content: 'Инсталляция Zoia успешно завершена.<br />Вы можете перейти к <a href=\"/admin\">панели администратора</a> для завершения настройки.'\n                  }\n                }\n              }\n            }, {\n              upsert: true\n            });\n\n          case 3:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function install(_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (install);\n\n//# sourceURL=webpack:///c:/Users/mma2/Documents/JS/zoia2/modules/pages/install.js?");

/***/ }),

/***/ "../../../Users/mma2/Documents/JS/zoia2/modules/registry/database.json":
/*!***********************************************************************!*\
  !*** c:/Users/mma2/Documents/JS/zoia2/modules/registry/database.json ***!
  \***********************************************************************/
/*! exports provided: collections, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"collections\\\":{\\\"registry\\\":{\\\"indexesAsc\\\":[],\\\"indexesDesc\\\":[]}}}\");\n\n//# sourceURL=webpack:///c:/Users/mma2/Documents/JS/zoia2/modules/registry/database.json?");

/***/ }),

/***/ "../../../Users/mma2/Documents/JS/zoia2/modules/users/database.json":
/*!********************************************************************!*\
  !*** c:/Users/mma2/Documents/JS/zoia2/modules/users/database.json ***!
  \********************************************************************/
/*! exports provided: collections, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"collections\\\":{\\\"users\\\":{\\\"indexesAsc\\\":[\\\"username\\\",\\\"password\\\",\\\"sessionId\\\",\\\"email\\\",\\\"active\\\",\\\"admin\\\"],\\\"indexesDesc\\\":[\\\"username\\\",\\\"email\\\",\\\"active\\\",\\\"admin\\\"]}}}\");\n\n//# sourceURL=webpack:///c:/Users/mma2/Documents/JS/zoia2/modules/users/database.json?");

/***/ }),

/***/ "../../../Users/mma2/Documents/JS/zoia2/modules/users/install.js":
/*!*****************************************************************!*\
  !*** c:/Users/mma2/Documents/JS/zoia2/modules/users/install.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! colors */ \"colors\");\n/* harmony import */ var colors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(colors__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n/* eslint no-console:0 */\n\n\n\nvar security = __webpack_require__(/*! ../../etc/secure.json */ \"../../../Users/mma2/Documents/JS/zoia2/etc/secure.json\");\n\nvar install =\n/*#__PURE__*/\nfunction () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n  /*#__PURE__*/\n  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(db) {\n    var passwordHash;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            console.log(\"\".concat(colors__WEBPACK_IMPORTED_MODULE_3___default.a.green(' * '), \" Inserting or updating default user (admin)...\"));\n            passwordHash = crypto__WEBPACK_IMPORTED_MODULE_2___default.a.createHmac('sha512', security.secret).update('password').digest('hex');\n            _context.next = 4;\n            return db.collection('users').updateOne({\n              username: 'admin'\n            }, {\n              $set: {\n                username: 'admin',\n                password: passwordHash,\n                email: 'example@zoiajs.org',\n                active: 1,\n                admin: 1\n              }\n            }, {\n              upsert: true\n            });\n\n          case 4:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function install(_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (install);\n\n//# sourceURL=webpack:///c:/Users/mma2/Documents/JS/zoia2/modules/users/install.js?");

/***/ }),

/***/ "../../../Users/mma2/Documents/JS/zoia2/shared/api/tools.js":
/*!************************************************************!*\
  !*** c:/Users/mma2/Documents/JS/zoia2/shared/api/tools.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"@babel/runtime/helpers/toConsumableArray\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"@babel/runtime/helpers/slicedToArray\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var inquirer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! inquirer */ \"inquirer\");\n/* harmony import */ var inquirer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(inquirer__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var command_line_args__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! command-line-args */ \"command-line-args\");\n/* harmony import */ var command_line_args__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(command_line_args__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var colors_safe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! colors/safe */ \"colors/safe\");\n/* harmony import */ var colors_safe__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(colors_safe__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var fs_extra__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! fs-extra */ \"fs-extra\");\n/* harmony import */ var fs_extra__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(fs_extra__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var gettext_parser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! gettext-parser */ \"gettext-parser\");\n/* harmony import */ var gettext_parser__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(gettext_parser__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash/cloneDeep */ \"lodash/cloneDeep\");\n/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n\n/* eslint no-console:0 */\n\n\n\n\n\n\n\nvar db;\nvar optionDefinitions = [{\n  name: 'install',\n  alias: 'i',\n  type: Boolean\n}, {\n  name: 'modify',\n  alias: 'm',\n  type: Boolean\n}, {\n  name: 'split',\n  alias: 's',\n  type: Boolean\n}, {\n  name: 'combine',\n  alias: 'c',\n  type: Boolean\n}, {\n  name: 'cleanup',\n  alias: 'd',\n  type: Boolean\n}];\nvar options = command_line_args__WEBPACK_IMPORTED_MODULE_5___default()(optionDefinitions);\n\nvar splitLocales = function splitLocales() {\n  console.log(\"\".concat(colors_safe__WEBPACK_IMPORTED_MODULE_6___default.a.green(' * '), \" Spliting locales...\"));\n  ['user', 'admin'].map(function (t) {\n    console.log(\"\".concat(colors_safe__WEBPACK_IMPORTED_MODULE_6___default.a.green(' * '), \" Processing area: \").concat(t));\n    var locales = fs_extra__WEBPACK_IMPORTED_MODULE_7___default.a.readdirSync(\"\".concat(__dirname, \"/../shared/locales/combined/\").concat(t));\n    locales.filter(function (l) {\n      return l !== '_build';\n    }).map(function (locale) {\n      console.log(\"\".concat(colors_safe__WEBPACK_IMPORTED_MODULE_6___default.a.green(' * '), \" Processing locale: \").concat(locale));\n      var transModules = {};\n      var input = fs_extra__WEBPACK_IMPORTED_MODULE_7___default.a.readFileSync(\"\".concat(__dirname, \"/../shared/locales/combined/\").concat(t, \"/\").concat(locale, \"/messages.po\"));\n      var po = gettext_parser__WEBPACK_IMPORTED_MODULE_8___default.a.po.parse(input);\n      var trans = po.translations[''];\n      Object.keys(trans).map(function (i) {\n        if (i && i.length && trans[i] && trans[i].comments) {\n          var reference = trans[i].comments.reference;\n\n          if (reference) {\n            var refArr = reference.split(/\\n/);\n            refArr.map(function (m) {\n              var ms = m.split(/\\//);\n              var area = ms.length >= 2 && ms[0] === 'modules' ? ms[1] : '_core';\n\n              if (!transModules[area]) {\n                transModules[area] = {};\n              }\n\n              transModules[area][i] = trans[i];\n            });\n          }\n        }\n      });\n      Object.keys(transModules).map(function (m) {\n        if (m === '_core') {\n          return;\n        }\n\n        console.log(\"\".concat(colors_safe__WEBPACK_IMPORTED_MODULE_6___default.a.green(' * '), \" Processing module: \").concat(m));\n        var dir = m === '_core' ? \"\".concat(__dirname, \"/../shared/locales/core/\").concat(locale) : \"\".concat(__dirname, \"/../modules/\").concat(m, \"/locales/\").concat(t, \"/\").concat(locale);\n        var filename = m === '_core' ? \"\".concat(__dirname, \"/../shared/locales/core/\").concat(locale, \"/messages.po\") : \"\".concat(__dirname, \"/../modules/\").concat(m, \"/locales/\").concat(t, \"/\").concat(locale, \"/messages.po\");\n        fs_extra__WEBPACK_IMPORTED_MODULE_7___default.a.ensureDirSync(dir);\n        var data = gettext_parser__WEBPACK_IMPORTED_MODULE_8___default.a.po.compile({\n          charset: po.charset,\n          headers: po.headers,\n          translations: {\n            '': transModules[m]\n          }\n        });\n        fs_extra__WEBPACK_IMPORTED_MODULE_7___default.a.writeFileSync(filename, data);\n      });\n    });\n  });\n};\n\nvar combieLocales = function combieLocales() {\n  var modules = Object.keys(__webpack_require__(/*! ../build/modules.json */ \"../../../Users/mma2/Documents/JS/zoia2/shared/build/modules.json\"));\n  console.log(\"\".concat(colors_safe__WEBPACK_IMPORTED_MODULE_6___default.a.green(' * '), \" Combining locales...\"));\n  ['user', 'admin'].map(function (t) {\n    var locales = fs_extra__WEBPACK_IMPORTED_MODULE_7___default.a.readdirSync(\"\".concat(__dirname, \"/../shared/locales/core\"));\n    locales.filter(function (l) {\n      return l !== '_build';\n    }).map(function (locale) {\n      var messagesCore = fs_extra__WEBPACK_IMPORTED_MODULE_7___default.a.readFileSync(\"\".concat(__dirname, \"/../shared/locales/core/\").concat(locale, \"/messages.po\"));\n      var messagesCorePo = gettext_parser__WEBPACK_IMPORTED_MODULE_8___default.a.po.parse(messagesCore);\n      var messagesCoreTrans = messagesCorePo.translations[''];\n      modules.map(function (m) {\n        if (!fs_extra__WEBPACK_IMPORTED_MODULE_7___default.a.existsSync(\"\".concat(__dirname, \"/../../modules/\").concat(m, \"/locales/\").concat(t, \"/\").concat(locale, \"/messages.po\"))) {\n          return;\n        }\n\n        var messagesModule = fs_extra__WEBPACK_IMPORTED_MODULE_7___default.a.readFileSync(\"\".concat(__dirname, \"/../../modules/\").concat(m, \"/locales/\").concat(t, \"/\").concat(locale, \"/messages.po\"));\n        var messagesModulePo = gettext_parser__WEBPACK_IMPORTED_MODULE_8___default.a.po.parse(messagesModule);\n        var messagesModuleTrans = messagesModulePo.translations[''];\n        Object.keys(messagesModuleTrans).map(function (mmt) {\n          if (!messagesCoreTrans[mmt]) {\n            messagesCoreTrans[mmt] = messagesModuleTrans[mmt];\n          }\n        });\n      });\n      var data = gettext_parser__WEBPACK_IMPORTED_MODULE_8___default.a.po.compile({\n        charset: messagesCorePo.charset,\n        headers: messagesCorePo.headers,\n        translations: {\n          '': messagesCoreTrans\n        }\n      });\n      fs_extra__WEBPACK_IMPORTED_MODULE_7___default.a.writeFileSync(\"\".concat(__dirname, \"/../shared/locales/combined/\").concat(t, \"/\").concat(locale, \"/messages.po\"), data);\n    });\n  });\n};\n\nvar cleanupLocales = function cleanupLocales() {\n  var modules = Object.keys(__webpack_require__(/*! ../build/modules.json */ \"../../../Users/mma2/Documents/JS/zoia2/shared/build/modules.json\"));\n  console.log(\"\".concat(colors_safe__WEBPACK_IMPORTED_MODULE_6___default.a.green(' * '), \" Cleaning up combined locales...\"));\n  ['user', 'admin'].map(function (t) {\n    console.log(\"\".concat(colors_safe__WEBPACK_IMPORTED_MODULE_6___default.a.green(' * '), \" Processing area: \").concat(t));\n    var locales = fs_extra__WEBPACK_IMPORTED_MODULE_7___default.a.readdirSync(\"\".concat(__dirname, \"/../shared/locales/combined/\").concat(t));\n    locales.filter(function (l) {\n      return l !== '_build';\n    }).map(function (locale) {\n      console.log(\"\".concat(colors_safe__WEBPACK_IMPORTED_MODULE_6___default.a.green(' * '), \" Processing locale: \").concat(locale));\n      var input = fs_extra__WEBPACK_IMPORTED_MODULE_7___default.a.readFileSync(\"\".concat(__dirname, \"/../shared/locales/combined/\").concat(t, \"/\").concat(locale, \"/messages.po\"));\n      var po = gettext_parser__WEBPACK_IMPORTED_MODULE_8___default.a.po.parse(input);\n      var trans = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_9___default()(po.translations['']);\n      Object.keys(trans).map(function (item) {\n        if (trans[item].comments && trans[item].comments.reference) {\n          var references = trans[item].comments.reference.split(/\\n/).filter(function (ref) {\n            var _ref$split = ref.split(/\\//),\n                _ref$split2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_ref$split, 2),\n                sign = _ref$split2[0],\n                module = _ref$split2[1];\n\n            if (sign === 'modules' && module && modules.indexOf(module) === -1) {\n              return false;\n            }\n\n            return true;\n          });\n\n          if (references.length) {\n            po.translations[''][item].comments.reference = references.join(/\\n/);\n          } else {\n            delete po.translations[''][item];\n          }\n        }\n      });\n      var data = gettext_parser__WEBPACK_IMPORTED_MODULE_8___default.a.po.compile({\n        charset: po.charset,\n        headers: po.headers,\n        translations: po.translations\n      });\n      fs_extra__WEBPACK_IMPORTED_MODULE_7___default.a.writeFileSync(\"\".concat(__dirname, \"/../shared/locales/combined/\").concat(t, \"/\").concat(locale, \"/messages.po\"), data);\n    });\n  });\n};\n\nvar install =\n/*#__PURE__*/\nfunction () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(\n  /*#__PURE__*/\n  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {\n    var security, modules, questions, data, mongoClient;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            security = __webpack_require__(/*! ../../etc/secure.json */ \"../../../Users/mma2/Documents/JS/zoia2/etc/secure.json\");\n            modules = Object.keys(__webpack_require__(/*! ../build/modules.json */ \"../../../Users/mma2/Documents/JS/zoia2/shared/build/modules.json\"));\n            questions = [{\n              type: 'rawlist',\n              name: 'install',\n              message: 'Which modules to process?',\n              choices: ['All', 'None'].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(modules)),\n              \"default\": 'All'\n            }];\n            _context3.prev = 3;\n            console.log(\"This tool will run the module installation scripts.\");\n            console.log(\"Modules available: \".concat(modules.join(', ')));\n            console.log('');\n            _context3.next = 9;\n            return inquirer__WEBPACK_IMPORTED_MODULE_4___default.a.prompt(questions);\n\n          case 9:\n            data = _context3.sent;\n            console.log('');\n            mongoClient = new mongodb__WEBPACK_IMPORTED_MODULE_10__[\"MongoClient\"](security.mongo.url, {\n              useNewUrlParser: true,\n              useUnifiedTopology: true\n            });\n            _context3.next = 14;\n            return mongoClient.connect();\n\n          case 14:\n            db = mongoClient.db(security.mongo.dbName);\n\n            if (!(data.install !== 'None')) {\n              _context3.next = 18;\n              break;\n            }\n\n            _context3.next = 18;\n            return Promise.all((data.install === 'All' ? modules : [data.install]).map(\n            /*#__PURE__*/\n            function () {\n              var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(\n              /*#__PURE__*/\n              _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(m) {\n                var moduleDatabaseConfig, collections, installScript;\n                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n                  while (1) {\n                    switch (_context2.prev = _context2.next) {\n                      case 0:\n                        console.log(\"\".concat(colors_safe__WEBPACK_IMPORTED_MODULE_6___default.a.green(' * '), \" Processing module: \").concat(m, \"...\"));\n                        _context2.prev = 1;\n                        moduleDatabaseConfig = __webpack_require__(\"../../../Users/mma2/Documents/JS/zoia2/modules sync recursive ^\\\\.\\\\/.*\\\\/database\\\\.json$\")(\"./\".concat(m, \"/database.json\"));\n                        collections = Object.keys(moduleDatabaseConfig.collections);\n\n                        if (!collections.length) {\n                          _context2.next = 7;\n                          break;\n                        }\n\n                        _context2.next = 7;\n                        return Promise.all(collections.map(\n                        /*#__PURE__*/\n                        function () {\n                          var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(\n                          /*#__PURE__*/\n                          _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(c) {\n                            var _moduleDatabaseConfig, indexesAsc, indexesDesc, languages, indexes, _indexes;\n\n                            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n                              while (1) {\n                                switch (_context.prev = _context.next) {\n                                  case 0:\n                                    console.log(\"\".concat(colors_safe__WEBPACK_IMPORTED_MODULE_6___default.a.green(' * '), \" Creating collection: \").concat(c, \"...\"));\n                                    _context.prev = 1;\n                                    _context.next = 4;\n                                    return db.createCollection(c);\n\n                                  case 4:\n                                    _context.next = 9;\n                                    break;\n\n                                  case 6:\n                                    _context.prev = 6;\n                                    _context.t0 = _context[\"catch\"](1);\n                                    console.log(\"\".concat(colors_safe__WEBPACK_IMPORTED_MODULE_6___default.a.green(' ! '), \" Collection is not created: \").concat(c, \" (already exists?)\"));\n\n                                  case 9:\n                                    _moduleDatabaseConfig = moduleDatabaseConfig.collections[c], indexesAsc = _moduleDatabaseConfig.indexesAsc, indexesDesc = _moduleDatabaseConfig.indexesDesc;\n                                    languages = fs_extra__WEBPACK_IMPORTED_MODULE_7___default.a.readdirSync(\"\".concat(__dirname, \"/../shared/locales/combined/admin\")).filter(function (i) {\n                                      return i !== '_build';\n                                    });\n\n                                    if (!(indexesAsc && indexesAsc.length)) {\n                                      _context.next = 25;\n                                      break;\n                                    }\n\n                                    console.log(\"\".concat(colors_safe__WEBPACK_IMPORTED_MODULE_6___default.a.green(' * '), \" Creating ASC indexes for collection: \").concat(c, \"...\"));\n                                    indexes = {};\n                                    indexesAsc.map(function (i) {\n                                      if (i.match(/\\[language\\]/i)) {\n                                        languages.map(function (language) {\n                                          var index = i.replace(/\\[language\\]/i, language);\n                                          indexes[index] = 1;\n                                        });\n                                      } else {\n                                        indexes[i] = 1;\n                                      }\n                                    });\n                                    _context.prev = 15;\n                                    _context.next = 18;\n                                    return db.collection(c).createIndex(indexes, {\n                                      name: \"\".concat(m, \"_asc\")\n                                    });\n\n                                  case 18:\n                                    _context.next = 25;\n                                    break;\n\n                                  case 20:\n                                    _context.prev = 20;\n                                    _context.t1 = _context[\"catch\"](15);\n                                    console.log('');\n                                    console.log(colors_safe__WEBPACK_IMPORTED_MODULE_6___default.a.red(_context.t1));\n                                    process.exit(1);\n\n                                  case 25:\n                                    if (!(indexesDesc && indexesDesc.length)) {\n                                      _context.next = 39;\n                                      break;\n                                    }\n\n                                    console.log(\"\".concat(colors_safe__WEBPACK_IMPORTED_MODULE_6___default.a.green(' * '), \" Creating DESC indexes for collection: \").concat(c, \"...\"));\n                                    _indexes = {};\n                                    indexesDesc.map(function (i) {\n                                      if (i.match(/\\[language\\]/i)) {\n                                        languages.map(function (language) {\n                                          var index = i.replace(/\\[language\\]/i, language);\n                                          _indexes[index] = -1;\n                                        });\n                                      } else {\n                                        _indexes[i] = -1;\n                                      }\n                                    });\n                                    _context.prev = 29;\n                                    _context.next = 32;\n                                    return db.collection(c).createIndex(_indexes, {\n                                      name: \"\".concat(m, \"_desc\")\n                                    });\n\n                                  case 32:\n                                    _context.next = 39;\n                                    break;\n\n                                  case 34:\n                                    _context.prev = 34;\n                                    _context.t2 = _context[\"catch\"](29);\n                                    console.log('');\n                                    console.log(colors_safe__WEBPACK_IMPORTED_MODULE_6___default.a.red(_context.t2));\n                                    process.exit(1);\n\n                                  case 39:\n                                  case \"end\":\n                                    return _context.stop();\n                                }\n                              }\n                            }, _callee, null, [[1, 6], [15, 20], [29, 34]]);\n                          }));\n\n                          return function (_x2) {\n                            return _ref3.apply(this, arguments);\n                          };\n                        }()));\n\n                      case 7:\n                        _context2.next = 11;\n                        break;\n\n                      case 9:\n                        _context2.prev = 9;\n                        _context2.t0 = _context2[\"catch\"](1);\n\n                      case 11:\n                        _context2.prev = 11;\n                        console.log(\"\".concat(colors_safe__WEBPACK_IMPORTED_MODULE_6___default.a.green(' * '), \" Running installation script for module: \").concat(m, \"...\"));\n                        installScript = __webpack_require__(\"../../../Users/mma2/Documents/JS/zoia2/modules sync recursive ^\\\\.\\\\/.*\\\\/install\\\\.js$\")(\"./\".concat(m, \"/install.js\"));\n                        _context2.next = 16;\n                        return installScript[\"default\"](db);\n\n                      case 16:\n                        _context2.next = 20;\n                        break;\n\n                      case 18:\n                        _context2.prev = 18;\n                        _context2.t1 = _context2[\"catch\"](11);\n\n                      case 20:\n                      case \"end\":\n                        return _context2.stop();\n                    }\n                  }\n                }, _callee2, null, [[1, 9], [11, 18]]);\n              }));\n\n              return function (_x) {\n                return _ref2.apply(this, arguments);\n              };\n            }()));\n\n          case 18:\n            console.log(\"\".concat(colors_safe__WEBPACK_IMPORTED_MODULE_6___default.a.green(' * '), \" Done\"));\n            mongoClient.close();\n            _context3.next = 27;\n            break;\n\n          case 22:\n            _context3.prev = 22;\n            _context3.t0 = _context3[\"catch\"](3);\n            console.log('');\n            console.log(colors_safe__WEBPACK_IMPORTED_MODULE_6___default.a.red(_context3.t0));\n            process.exit(1);\n\n          case 27:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3, null, [[3, 22]]);\n  }));\n\n  return function install() {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nconsole.log(colors_safe__WEBPACK_IMPORTED_MODULE_6___default.a.green.inverse('\\n                                      '));\nconsole.log(colors_safe__WEBPACK_IMPORTED_MODULE_6___default.a.green.inverse(' Zoia 2 Helper Scripts                '));\nconsole.log(colors_safe__WEBPACK_IMPORTED_MODULE_6___default.a.green.inverse('                                      \\n')); // Do we need to split locales?\n\nif (options.split) {\n  splitLocales();\n  console.log(\"\".concat(colors_safe__WEBPACK_IMPORTED_MODULE_6___default.a.green(' * '), \" Done\"));\n  process.exit(0);\n} // Do we need to combine locales?\n\n\nif (options.combine) {\n  combieLocales();\n  console.log(\"\".concat(colors_safe__WEBPACK_IMPORTED_MODULE_6___default.a.green(' * '), \" Done\"));\n  process.exit(0);\n} // Do we need to clean up locales?\n\n\nif (options.cleanup) {\n  cleanupLocales();\n  console.log(\"\".concat(colors_safe__WEBPACK_IMPORTED_MODULE_6___default.a.green(' * '), \" Done\"));\n  process.exit(0);\n} // Do we need to install?\n\n\nif (options.install) {\n  install();\n} else {\n  console.log('Usage: node tools <--install (--modify)|--split|--combine|--cleanup>\\n\\n --install (-i): run Zoia installation, use --modify (-m) to modify existing config.json file\\n --split (-s): split locales from shared directory to modules\\n --combine locales from modules to shared directory\\n --cleanup (-d): remove unused locale entries from shared directory');\n}\n\n//# sourceURL=webpack:///c:/Users/mma2/Documents/JS/zoia2/shared/api/tools.js?");

/***/ }),

/***/ "../../../Users/mma2/Documents/JS/zoia2/shared/build/modules.json":
/*!******************************************************************!*\
  !*** c:/Users/mma2/Documents/JS/zoia2/shared/build/modules.json ***!
  \******************************************************************/
/*! exports provided: admin, pages, registry, users, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"admin\\\":{\\\"id\\\":\\\"admin\\\",\\\"icon\\\":\\\"\\\",\\\"admin\\\":false,\\\"adminRoute\\\":\\\"/admin/users\\\"},\\\"pages\\\":{\\\"id\\\":\\\"pages\\\",\\\"icon\\\":\\\"file-text\\\",\\\"admin\\\":true,\\\"adminRoute\\\":\\\"/admin/pages\\\"},\\\"registry\\\":{\\\"id\\\":\\\"registry\\\",\\\"icon\\\":\\\"\\\",\\\"admin\\\":false,\\\"adminRoute\\\":\\\"\\\"},\\\"users\\\":{\\\"id\\\":\\\"users\\\",\\\"icon\\\":\\\"users\\\",\\\"admin\\\":true,\\\"adminRoute\\\":\\\"/admin/users\\\"}}\");\n\n//# sourceURL=webpack:///c:/Users/mma2/Documents/JS/zoia2/shared/build/modules.json?");

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/asyncToGenerator\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/asyncToGenerator%22?");

/***/ }),

/***/ "@babel/runtime/helpers/slicedToArray":
/*!*******************************************************!*\
  !*** external "@babel/runtime/helpers/slicedToArray" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/slicedToArray\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/slicedToArray%22?");

/***/ }),

/***/ "@babel/runtime/helpers/toConsumableArray":
/*!***********************************************************!*\
  !*** external "@babel/runtime/helpers/toConsumableArray" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/toConsumableArray\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/toConsumableArray%22?");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/regenerator\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/regenerator%22?");

/***/ }),

/***/ "colors":
/*!*************************!*\
  !*** external "colors" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"colors\");\n\n//# sourceURL=webpack:///external_%22colors%22?");

/***/ }),

/***/ "colors/safe":
/*!******************************!*\
  !*** external "colors/safe" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"colors/safe\");\n\n//# sourceURL=webpack:///external_%22colors/safe%22?");

/***/ }),

/***/ "command-line-args":
/*!************************************!*\
  !*** external "command-line-args" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"command-line-args\");\n\n//# sourceURL=webpack:///external_%22command-line-args%22?");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"crypto\");\n\n//# sourceURL=webpack:///external_%22crypto%22?");

/***/ }),

/***/ "fs-extra":
/*!***************************!*\
  !*** external "fs-extra" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs-extra\");\n\n//# sourceURL=webpack:///external_%22fs-extra%22?");

/***/ }),

/***/ "gettext-parser":
/*!*********************************!*\
  !*** external "gettext-parser" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"gettext-parser\");\n\n//# sourceURL=webpack:///external_%22gettext-parser%22?");

/***/ }),

/***/ "inquirer":
/*!***************************!*\
  !*** external "inquirer" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"inquirer\");\n\n//# sourceURL=webpack:///external_%22inquirer%22?");

/***/ }),

/***/ "lodash/cloneDeep":
/*!***********************************!*\
  !*** external "lodash/cloneDeep" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash/cloneDeep\");\n\n//# sourceURL=webpack:///external_%22lodash/cloneDeep%22?");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb\");\n\n//# sourceURL=webpack:///external_%22mongodb%22?");

/***/ })

/******/ });