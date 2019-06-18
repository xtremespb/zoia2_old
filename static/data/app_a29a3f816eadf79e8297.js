/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded CSS chunks
/******/ 	var installedCssChunks = {
/******/ 		"app": 0
/******/ 	}
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({"AdminPanel":"AdminPanel","UsersList":"UsersList","UserAuth":"UserAuth","i18n_0":"i18n_0","i18n_1":"i18n_1"}[chunkId]||chunkId) + "_" + {"AdminPanel":"9bdbe413a01418499812","UsersList":"7d45d8eea64a30cd3767","UserAuth":"450166720d26650b9c1d","i18n_0":"53e249c98a394dc6b421","i18n_1":"bded43d37424705c29d7"}[chunkId] + ".js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// extract-css-chunks-webpack-plugin CSS loading
/******/ 		var cssChunks = {"AdminPanel":1,"UsersList":1,"UserAuth":1};
/******/ 		if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 		else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 			promises.push(installedCssChunks[chunkId] = new Promise(function(resolve, reject) {
/******/ 				var href = "" + ({"AdminPanel":"AdminPanel","UsersList":"UsersList","UserAuth":"UserAuth","i18n_0":"i18n_0","i18n_1":"i18n_1"}[chunkId]||chunkId) + "_" + {"AdminPanel":"9bdbe413a01418499812","UsersList":"7d45d8eea64a30cd3767","UserAuth":"450166720d26650b9c1d","i18n_0":"53e249c98a394dc6b421","i18n_1":"bded43d37424705c29d7"}[chunkId] + ".css";
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var existingLinkTags = document.getElementsByTagName("link");
/******/ 				for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 					var tag = existingLinkTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 					if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return resolve();
/******/ 				}
/******/ 				var existingStyleTags = document.getElementsByTagName("style");
/******/ 				for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 					var tag = existingStyleTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href");
/******/ 					if(dataHref === href || dataHref === fullhref) return resolve();
/******/ 				}
/******/ 				var linkTag = document.createElement("link");
/******/ 				linkTag.rel = "stylesheet";
/******/ 				linkTag.type = "text/css";
/******/ 				linkTag.onload = resolve;
/******/ 				linkTag.onerror = function(event) {
/******/ 					var request = event && event.target && event.target.src || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + request + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.request = request;
/******/ 					delete installedCssChunks[chunkId]
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				};
/******/ 				linkTag.href = fullhref;
/******/
/******/ 				var head = document.getElementsByTagName("head")[0];
/******/ 				head.appendChild(linkTag);
/******/ 			}).then(function() {
/******/ 				installedCssChunks[chunkId] = 0;
/******/ 			}));
/******/ 		}
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
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
/******/ 	__webpack_require__.p = "/data/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["../../../Users/mma2/Documents/JS/zoia2/shared/components/entrypoint.jsx","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../Users/mma2/Documents/JS/zoia2/etc/config.json":
/*!********************************************************!*\
  !*** c:/Users/mma2/Documents/JS/zoia2/etc/config.json ***!
  \********************************************************/
/*! exports provided: siteId, secret, authTokenExpiresIn, httpServer, mongo, languages, development, loglevel, originCORS, default */
/***/ (function(module) {

module.exports = {"siteId":"zoia2","secret":"oqqjgTX8Qb6qhBybD2D5Lknp97V336KJ7TgC8x85o8T8Zcx4t9jhmusS45VmjP3y","authTokenExpiresIn":"7 days","httpServer":{"ip":"127.0.0.1","port":3000},"mongo":{"url":"mongodb://localhost:27017","dbName":"zoia2"},"languages":{"en":"English","ru":"Русский"},"development":false,"loglevel":"info","originCORS":"*"};

/***/ }),

/***/ "../../../Users/mma2/Documents/JS/zoia2/etc/modules.json":
/*!*********************************************************!*\
  !*** c:/Users/mma2/Documents/JS/zoia2/etc/modules.json ***!
  \*********************************************************/
/*! exports provided: users, default */
/***/ (function(module) {

module.exports = {"users":{"id":"users","icon":"users","defaultAdminRoute":"/admin/users"}};

/***/ }),

/***/ "../../../Users/mma2/Documents/JS/zoia2/modules sync recursive ^\\.\\/.*\\/frontend\\/reducers\\/index\\.js$":
/*!*********************************************************************************************!*\
  !*** c:/Users/mma2/Documents/JS/zoia2/modules sync ^\.\/.*\/frontend\/reducers\/index\.js$ ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./users/frontend/reducers/index.js": "../../../Users/mma2/Documents/JS/zoia2/modules/users/frontend/reducers/index.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../Users/mma2/Documents/JS/zoia2/modules sync recursive ^\\.\\/.*\\/frontend\\/reducers\\/index\\.js$";

/***/ }),

/***/ "../../../Users/mma2/Documents/JS/zoia2/modules sync recursive ^\\.\\/.*\\/frontend\\/routes\\.jsx$":
/*!*************************************************************************************!*\
  !*** c:/Users/mma2/Documents/JS/zoia2/modules sync ^\.\/.*\/frontend\/routes\.jsx$ ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./users/frontend/routes.jsx": "../../../Users/mma2/Documents/JS/zoia2/modules/users/frontend/routes.jsx"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../Users/mma2/Documents/JS/zoia2/modules sync recursive ^\\.\\/.*\\/frontend\\/routes\\.jsx$";

/***/ }),

/***/ "../../../Users/mma2/Documents/JS/zoia2/modules/users/frontend/reducers/index.js":
/*!*********************************************************************************!*\
  !*** c:/Users/mma2/Documents/JS/zoia2/modules/users/frontend/reducers/index.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return {};
});

/***/ }),

/***/ "../../../Users/mma2/Documents/JS/zoia2/modules/users/frontend/routes.jsx":
/*!**************************************************************************!*\
  !*** c:/Users/mma2/Documents/JS/zoia2/modules/users/frontend/routes.jsx ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/react-router-dom/esm/react-router-dom.js");


var UserAuth = Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(function () {
  return Promise.all(/*! import() | AdminPanel */[__webpack_require__.e("vendors"), __webpack_require__.e("AdminPanel")]).then(__webpack_require__.bind(null, /*! ./components/UserAuth.jsx */ "../../../Users/mma2/Documents/JS/zoia2/modules/users/frontend/components/UserAuth.jsx"));
});
var UsersList = Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(function () {
  return Promise.all(/*! import() | UsersList */[__webpack_require__.e("vendors"), __webpack_require__.e("UsersList")]).then(__webpack_require__.bind(null, /*! ./components/UsersList.jsx */ "../../../Users/mma2/Documents/JS/zoia2/modules/users/frontend/components/UsersList.jsx"));
});

var getSuspense = function getSuspense() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "uk-flex uk-flex-center uk-flex-middle",
    style: {
      height: '100%'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    "uk-spinner": "ratio:2"
  }));
};

var getAuth = function getAuth() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: getSuspense()
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserAuth, null));
};

var getUsersList = function getUsersList() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: getSuspense()
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UsersList, null));
};

/* harmony default export */ __webpack_exports__["default"] = ([react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  key: "usersAuth",
  path: "/users/auth",
  component: getAuth
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  key: "usersList",
  path: "/admin/users",
  component: getUsersList
})]);

/***/ }),

/***/ "../../../Users/mma2/Documents/JS/zoia2/shared/components/entrypoint.jsx":
/*!*************************************************************************!*\
  !*** c:/Users/mma2/Documents/JS/zoia2/shared/components/entrypoint.jsx ***!
  \*************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/react-redux/es/index.js");
/* harmony import */ var redux_persist_lib_integration_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-persist/lib/integration/react */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/redux-persist/lib/integration/react.js");
/* harmony import */ var redux_persist_lib_integration_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_integration_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! connected-react-router */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/connected-react-router/esm/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! uikit */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/uikit/dist/js/uikit.js");
/* harmony import */ var uikit__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(uikit__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var uikit_dist_js_uikit_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! uikit/dist/js/uikit-icons */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/uikit/dist/js/uikit-icons.js");
/* harmony import */ var uikit_dist_js_uikit_icons__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(uikit_dist_js_uikit_icons__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _uikit_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../uikit.scss */ "../../../Users/mma2/Documents/JS/zoia2/shared/uikit.scss");
/* harmony import */ var _uikit_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_uikit_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _etc_modules_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../etc/modules.json */ "../../../Users/mma2/Documents/JS/zoia2/etc/modules.json");
var _etc_modules_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../etc/modules.json */ "../../../Users/mma2/Documents/JS/zoia2/etc/modules.json", 1);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../store/configureStore */ "../../../Users/mma2/Documents/JS/zoia2/shared/store/configureStore.js");












var _configureStore = Object(_store_configureStore__WEBPACK_IMPORTED_MODULE_10__["default"])(),
    store = _configureStore.store,
    persistor = _configureStore.persistor;

uikit__WEBPACK_IMPORTED_MODULE_6___default.a.use(uikit_dist_js_uikit_icons__WEBPACK_IMPORTED_MODULE_7___default.a);

var getModuleRoutes = function getModuleRoutes() {
  return Object.keys(_etc_modules_json__WEBPACK_IMPORTED_MODULE_9__).map(function (m) {
    return __webpack_require__("../../../Users/mma2/Documents/JS/zoia2/modules sync recursive ^\\.\\/.*\\/frontend\\/routes\\.jsx$")("./".concat(m, "/frontend/routes.jsx"))["default"];
  }).flat();
};

var getNoMatchComponent = function getNoMatchComponent() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "uk-flex uk-flex-center uk-flex-middle uk-flex-column",
    style: {
      height: '100%'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    height: "128px",
    viewBox: "0 0 512 512",
    width: "128px",
    xmlns: "http://www.w3.org/2000/svg"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m0 96v384c0 17.679688 14.320312 32 32 32h448c17.679688 0 32-14.320312 32-32v-384zm0 0",
    fill: "#e1eaf7"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m0 0h512v128h-512zm0 0",
    fill: "#b0bec5"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m64 48h32v32h-32zm0 0",
    fill: "#fff"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m128 48h32v32h-32zm0 0",
    fill: "#fff"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m432 80h-224c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h224c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0",
    fill: "#90a4ae"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m384 320c0 70.691406-57.308594 128-128 128s-128-57.308594-128-128 57.308594-128 128-128 128 57.308594 128 128zm0 0",
    fill: "#e76e54"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m315.3125 283.3125-22.625-22.625-36.6875 36.6875-36.6875-36.6875-22.625 22.625 36.6875 36.6875-36.6875 36.6875 22.625 22.625 36.6875-36.6875 36.6875 36.6875 22.625-22.625-36.6875-36.6875zm0 0"
  })));
};

react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
  store: store
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_persist_lib_integration_react__WEBPACK_IMPORTED_MODULE_3__["PersistGate"], {
  loading: null,
  persistor: persistor
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(connected_react_router__WEBPACK_IMPORTED_MODULE_4__["ConnectedRouter"], {
  history: _store_configureStore__WEBPACK_IMPORTED_MODULE_10__["history"]
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Switch"], null, getModuleRoutes(), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Route"], {
  component: getNoMatchComponent
}))))), document.getElementById('app'));

/***/ }),

/***/ "../../../Users/mma2/Documents/JS/zoia2/shared/reducers/appData.js":
/*!*******************************************************************!*\
  !*** c:/Users/mma2/Documents/JS/zoia2/shared/reducers/appData.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);

var initialState = {
  language: 'en',
  token: null
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'APP_DATA_SET_LANGUAGE':
      return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
        language: action.payload
      });

    case 'APP_DATA_SET_TOKEN':
      return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
        token: action.payload
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "../../../Users/mma2/Documents/JS/zoia2/shared/reducers/appLingui.js":
/*!*********************************************************************!*\
  !*** c:/Users/mma2/Documents/JS/zoia2/shared/reducers/appLingui.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);

var initialState = {
  catalogs: {}
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'APP_LINGUI_SET_CATALOG':
      var _action$payload = action.payload,
          language = _action$payload.language,
          catalog = _action$payload.catalog;
      var catalogs = {
        state: state
      };
      catalogs[language] = catalog;
      return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
        catalogs: catalogs
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "../../../Users/mma2/Documents/JS/zoia2/shared/reducers/index.js":
/*!*****************************************************************!*\
  !*** c:/Users/mma2/Documents/JS/zoia2/shared/reducers/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! connected-react-router */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/connected-react-router/esm/index.js");
/* harmony import */ var _appData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./appData */ "../../../Users/mma2/Documents/JS/zoia2/shared/reducers/appData.js");
/* harmony import */ var _appLingui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./appLingui */ "../../../Users/mma2/Documents/JS/zoia2/shared/reducers/appLingui.js");
/* harmony import */ var _etc_modules_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../etc/modules.json */ "../../../Users/mma2/Documents/JS/zoia2/etc/modules.json");
var _etc_modules_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../etc/modules.json */ "../../../Users/mma2/Documents/JS/zoia2/etc/modules.json", 1);





var moduleReducers = {}; // eslint-disable-next-line global-require

Object.keys(_etc_modules_json__WEBPACK_IMPORTED_MODULE_4__).map(function (m) {
  return moduleReducers[m] = __webpack_require__("../../../Users/mma2/Documents/JS/zoia2/modules sync recursive ^\\.\\/.*\\/frontend\\/reducers\\/index\\.js$")("./".concat(m, "/frontend/reducers/index.js"))["default"]();
});
/* harmony default export */ __webpack_exports__["default"] = (function (history) {
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, moduleReducers, {
    router: Object(connected_react_router__WEBPACK_IMPORTED_MODULE_1__["connectRouter"])(history),
    appData: _appData__WEBPACK_IMPORTED_MODULE_2__["default"],
    appLingui: _appLingui__WEBPACK_IMPORTED_MODULE_3__["default"]
  });
});

/***/ }),

/***/ "../../../Users/mma2/Documents/JS/zoia2/shared/store/configureStore.js":
/*!***********************************************************************!*\
  !*** c:/Users/mma2/Documents/JS/zoia2/shared/store/configureStore.js ***!
  \***********************************************************************/
/*! exports provided: history, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "history", function() { return history; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/redux/es/redux.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-logger */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/redux-logger/dist/redux-logger.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/redux-thunk/es/index.js");
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-persist/lib/storage */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/redux-persist/lib/storage/index.js");
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-persist */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/redux-persist/es/index.js");
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! history */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/history/esm/history.js");
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! connected-react-router */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/connected-react-router/esm/index.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers */ "../../../Users/mma2/Documents/JS/zoia2/shared/reducers/index.js");
/* harmony import */ var _etc_config_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../etc/config.json */ "../../../Users/mma2/Documents/JS/zoia2/etc/config.json");
var _etc_config_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../etc/config.json */ "../../../Users/mma2/Documents/JS/zoia2/etc/config.json", 1);









var history = Object(history__WEBPACK_IMPORTED_MODULE_5__["createBrowserHistory"])();
var persistConfig = {
  key: "".concat(_etc_config_json__WEBPACK_IMPORTED_MODULE_8__.siteId, "_root"),
  storage: redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_3___default.a,
  whitelist: ['appData']
};
var middlewares = [redux_thunk__WEBPACK_IMPORTED_MODULE_2__["default"], Object(connected_react_router__WEBPACK_IMPORTED_MODULE_6__["routerMiddleware"])(history)];

if (_etc_config_json__WEBPACK_IMPORTED_MODULE_8__.development) {
  middlewares.push(redux_logger__WEBPACK_IMPORTED_MODULE_1___default.a);
}

var persistedReducers = Object(redux_persist__WEBPACK_IMPORTED_MODULE_4__["persistCombineReducers"])(persistConfig, Object(_reducers__WEBPACK_IMPORTED_MODULE_7__["default"])(history));
/* harmony default export */ __webpack_exports__["default"] = (function (preloadedState) {
  var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(persistedReducers, preloadedState, Object(redux__WEBPACK_IMPORTED_MODULE_0__["compose"])(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"].apply(void 0, middlewares)));
  var persistor = Object(redux_persist__WEBPACK_IMPORTED_MODULE_4__["persistStore"])(store);
  return {
    store: store,
    persistor: persistor
  };
});

/***/ }),

/***/ "../../../Users/mma2/Documents/JS/zoia2/shared/uikit.scss":
/*!**********************************************************!*\
  !*** c:/Users/mma2/Documents/JS/zoia2/shared/uikit.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

/***/ })

/******/ });
//# sourceMappingURL=app_a29a3f816eadf79e8297.js.map