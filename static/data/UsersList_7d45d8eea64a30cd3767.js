(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["UsersList"],{

/***/ "../../../Users/mma2/Documents/JS/zoia2/modules/users/frontend/components/UsersList.jsx":
/*!****************************************************************************************!*\
  !*** c:/Users/mma2/Documents/JS/zoia2/modules/users/frontend/components/UsersList.jsx ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @lingui/react */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/@lingui/react/index.js");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/react-redux/es/index.js");








/* eslint-disable react/prop-types */


var AdminPanel = Object(react__WEBPACK_IMPORTED_MODULE_7__["lazy"])(function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../../../../shared/components/AdminPanel/AdminPanel.jsx */ "../../../Users/mma2/Documents/JS/zoia2/shared/components/AdminPanel/AdminPanel.jsx"));
});

var UserList =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(UserList, _Component);

  function UserList() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, UserList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default()(UserList)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "render", function () {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(AdminPanel, null);
    });

    return _this;
  }

  return UserList;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(function (store) {
  return {
    appData: store.appData
  };
})(UserList));

/***/ }),

/***/ "../../../Users/mma2/Documents/JS/zoia2/shared/actions/appDataSetLanguage.js":
/*!*****************************************************************************!*\
  !*** c:/Users/mma2/Documents/JS/zoia2/shared/actions/appDataSetLanguage.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (v) {
  return {
    type: 'APP_DATA_SET_LANGUAGE',
    payload: v
  };
});

/***/ }),

/***/ "../../../Users/mma2/Documents/JS/zoia2/shared/actions/appLinguiSetCatalog.js":
/*!******************************************************************************!*\
  !*** c:/Users/mma2/Documents/JS/zoia2/shared/actions/appLinguiSetCatalog.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (language, catalog) {
  return {
    type: 'APP_LINGUI_SET_CATALOG',
    payload: {
      language: language,
      catalog: catalog
    }
  };
});

/***/ }),

/***/ "../../../Users/mma2/Documents/JS/zoia2/shared/components/AdminPanel/AdminPanel.css":
/*!************************************************************************************!*\
  !*** c:/Users/mma2/Documents/JS/zoia2/shared/components/AdminPanel/AdminPanel.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ "../../../Users/mma2/Documents/JS/zoia2/shared/components/AdminPanel/AdminPanel.jsx":
/*!************************************************************************************!*\
  !*** c:/Users/mma2/Documents/JS/zoia2/shared/components/AdminPanel/AdminPanel.jsx ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @lingui/react */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/@lingui/react/index.js");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _lingui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @lingui/core */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/@lingui/core/index.js");
/* harmony import */ var _lingui_core__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_lingui_core__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-redux */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-router-dom */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _actions_appDataSetLanguage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../actions/appDataSetLanguage */ "../../../Users/mma2/Documents/JS/zoia2/shared/actions/appDataSetLanguage.js");
/* harmony import */ var _actions_appLinguiSetCatalog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../actions/appLinguiSetCatalog */ "../../../Users/mma2/Documents/JS/zoia2/shared/actions/appLinguiSetCatalog.js");
/* harmony import */ var _etc_modules_json__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../etc/modules.json */ "../../../Users/mma2/Documents/JS/zoia2/etc/modules.json");
var _etc_modules_json__WEBPACK_IMPORTED_MODULE_17___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../etc/modules.json */ "../../../Users/mma2/Documents/JS/zoia2/etc/modules.json", 1);
/* harmony import */ var _etc_config_json__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../etc/config.json */ "../../../Users/mma2/Documents/JS/zoia2/etc/config.json");
var _etc_config_json__WEBPACK_IMPORTED_MODULE_18___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../etc/config.json */ "../../../Users/mma2/Documents/JS/zoia2/etc/config.json", 1);
/* harmony import */ var _AdminPanel_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./AdminPanel.css */ "../../../Users/mma2/Documents/JS/zoia2/shared/components/AdminPanel/AdminPanel.css");
/* harmony import */ var _AdminPanel_css__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_AdminPanel_css__WEBPACK_IMPORTED_MODULE_19__);











/* eslint-disable react/prop-types */











var AdminPanel =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default()(AdminPanel, _Component);

  function AdminPanel(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, AdminPanel);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(AdminPanel).call(this, props));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this), "state", {
      language: _this.props.appData.language,
      catalogs: _this.props.appLingui.catalogs
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this), "loadCatalog",
    /*#__PURE__*/
    function () {
      var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(language) {
        var catalog;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return __webpack_require__("../../../Users/mma2/Documents/JS/zoia2/shared/locales lazy recursive ^\\.\\/.*\\/messages\\.js$")("./".concat(language, "/messages.js"));

              case 2:
                catalog = _context.sent;

                _this.setState(function (state) {
                  var catalogs = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state.catalogs, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()({}, language, catalog));

                  var newData = {
                    language: language,
                    catalogs: catalogs
                  };
                  _this.i18n = Object(_lingui_core__WEBPACK_IMPORTED_MODULE_12__["setupI18n"])(newData);

                  _this.props.appLinguiSetCatalogAction(language, catalog);

                  return newData;
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this), "resizeNav", function () {
      return document.getElementById('z2a_nav_wrap') ? document.getElementById('z2a_nav_wrap').style.height = "".concat(window.innerHeight - 64, "px") : null;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this), "componentDidMount", function () {
      window.onresize = _this.resizeNav;

      _this.resizeNav();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this), "getModulesList", function (prefix) {
      return _this.i18n ? Object.keys(_etc_modules_json__WEBPACK_IMPORTED_MODULE_17__).map(function (id) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
          key: "".concat(prefix, "_").concat(id)
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__["Link"], {
          to: _etc_modules_json__WEBPACK_IMPORTED_MODULE_17__[id].defaultAdminRoute
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          "uk-icon": "icon:".concat(_etc_modules_json__WEBPACK_IMPORTED_MODULE_17__[id].icon, ";ratio:0.95")
        }), "\xA0", _this.i18n._(id)));
      }) : null;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this), "onLanguageClick", function (e) {
      _this.setState({
        language: e.currentTarget.dataset.lang
      });

      _this.props.appDataSetLanguageAction(e.currentTarget.dataset.lang);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this), "getLanguagesList", function (prefix) {
      return Object.keys(_etc_config_json__WEBPACK_IMPORTED_MODULE_18__.languages).map(function (lang) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
          key: "".concat(prefix, "_").concat(lang)
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
          href: "#",
          "data-lang": lang,
          onClick: _this.onLanguageClick
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          className: "flag-icon flag-icon-".concat(lang)
        }), "\xA0\xA0", _etc_config_json__WEBPACK_IMPORTED_MODULE_18__.languages[lang]));
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this), "render", function () {
      var _this$state = _this.state,
          catalogs = _this$state.catalogs,
          language = _this$state.language;

      if (!catalogs || !catalogs[language]) {
        return null;
      }

      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_lingui_react__WEBPACK_IMPORTED_MODULE_11__["I18nProvider"], {
        language: _this.props.appData.language,
        catalogs: _this.state.catalogs
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("nav", {
        className: "uk-navbar-container uk-dark",
        "uk-navbar": "true",
        "uk-sticky": "true"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "uk-navbar-left"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "uk-navbar-item uk-logo"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "uk-hidden@m uk-margin-small-right"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "",
        className: "uk-icon-link",
        "uk-icon": "icon:menu;ratio:1.5",
        "uk-toggle": "target: #offcanvas-nav"
      }), "\xA0"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: ""
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "/zoia/logo.png",
        width: "86",
        height: "30",
        alt: ""
      })))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "uk-navbar-right"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", {
        className: "uk-navbar-nav"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "flag-icon flag-icon-".concat(_this.props.appData.language, " flag-icon-switch")
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "uk-navbar-dropdown",
        "uk-dropdown": "mode:click;offset:-20"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", {
        className: "uk-nav uk-navbar-dropdown-nav"
      }, _this.getLanguagesList('desktop')))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "#"
      }, "username"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "uk-navbar-dropdown",
        "uk-dropdown": "mode:click;offset:-20"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", {
        className: "uk-nav uk-navbar-dropdown-nav"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: ""
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_lingui_react__WEBPACK_IMPORTED_MODULE_11__["Trans"], {
        id: "Log Out"
      }))))))))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "uk-grid-collapse uk-grid"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "uk-width-small z2a-navleft-column-wrap uk-visible@m"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        id: "z2a_nav_wrap"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "z2a-navleft"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", {
        className: "uk-nav uk-nav-default"
      }, _this.getModulesList('desktop')))))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "uk-width-expand"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "z2a-content-wrap"
      }, _this.props.children)))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        id: "offcanvas-nav",
        "uk-offcanvas": "overlay:true"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "uk-offcanvas-bar"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", {
        className: "uk-nav uk-nav-default"
      }, _this.getModulesList('mobile')))));
    });

    if (!_this.state.catalogs[_this.state.language]) {
      _this.loadCatalog(_this.state.language);
    } else {
      _this.i18n = Object(_lingui_core__WEBPACK_IMPORTED_MODULE_12__["setupI18n"])({
        language: _this.state.language,
        catalogs: _this.state.catalogs
      });
    }

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(AdminPanel, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      var catalogs = nextState.catalogs,
          language = nextState.language;

      if (language !== this.props.appData.language) {
        if (!catalogs[language]) {
          this.loadCatalog(language);
          return false;
        }

        this.i18n = Object(_lingui_core__WEBPACK_IMPORTED_MODULE_12__["setupI18n"])({
          language: language,
          catalogs: catalogs
        });
      }

      return true;
    }
  }]);

  return AdminPanel;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_13__["connect"])(function (store) {
  return {
    appData: store.appData,
    appLingui: store.appLingui
  };
}, function (dispatch) {
  return {
    appDataSetLanguageAction: function appDataSetLanguageAction(language) {
      return dispatch(Object(_actions_appDataSetLanguage__WEBPACK_IMPORTED_MODULE_15__["default"])(language));
    },
    appLinguiSetCatalogAction: function appLinguiSetCatalogAction(language, catalog) {
      return dispatch(Object(_actions_appLinguiSetCatalog__WEBPACK_IMPORTED_MODULE_16__["default"])(language, catalog));
    }
  };
})(AdminPanel));

/***/ }),

/***/ "../../../Users/mma2/Documents/JS/zoia2/shared/locales lazy recursive ^\\.\\/.*\\/messages\\.js$":
/*!****************************************************************************************************!*\
  !*** c:/Users/mma2/Documents/JS/zoia2/shared/locales lazy ^\.\/.*\/messages\.js$ namespace object ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./en/messages.js": [
		"../../../Users/mma2/Documents/JS/zoia2/shared/locales/en/messages.js",
		"i18n_0"
	],
	"./ru/messages.js": [
		"../../../Users/mma2/Documents/JS/zoia2/shared/locales/ru/messages.js",
		"i18n_1"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__.t(id, 7);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../Users/mma2/Documents/JS/zoia2/shared/locales lazy recursive ^\\.\\/.*\\/messages\\.js$";
module.exports = webpackAsyncContext;

/***/ })

}]);
//# sourceMappingURL=UsersList_7d45d8eea64a30cd3767.js.map