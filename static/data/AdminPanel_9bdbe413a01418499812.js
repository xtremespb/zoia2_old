(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["AdminPanel"],{

/***/ "../../../Users/mma2/Documents/JS/zoia2/modules/users/frontend/components/UserAuth.jsx":
/*!***************************************************************************************!*\
  !*** c:/Users/mma2/Documents/JS/zoia2/modules/users/frontend/components/UserAuth.jsx ***!
  \***************************************************************************************/
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
/* harmony import */ var uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! uikit */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/uikit/dist/js/uikit.js");
/* harmony import */ var uikit__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(uikit__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! axios */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-router-dom */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! query-string */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _shared_store_configureStore__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../shared/store/configureStore */ "../../../Users/mma2/Documents/JS/zoia2/shared/store/configureStore.js");
/* harmony import */ var _shared_components_FormBuilder_index_jsx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../shared/components/FormBuilder/index.jsx */ "../../../Users/mma2/Documents/JS/zoia2/shared/components/FormBuilder/index.jsx");
/* harmony import */ var _shared_actions_appDataSetLanguage__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../shared/actions/appDataSetLanguage */ "../../../Users/mma2/Documents/JS/zoia2/shared/actions/appDataSetLanguage.js");
/* harmony import */ var _shared_actions_appDataSetToken__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../shared/actions/appDataSetToken */ "../../../Users/mma2/Documents/JS/zoia2/shared/actions/appDataSetToken.js");
/* harmony import */ var _shared_actions_appLinguiSetCatalog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../shared/actions/appLinguiSetCatalog */ "../../../Users/mma2/Documents/JS/zoia2/shared/actions/appLinguiSetCatalog.js");











/* eslint-disable react/prop-types */













__webpack_require__.e(/*! import() | UserAuth */ "UserAuth").then(__webpack_require__.t.bind(null, /*! ./UserAuth.css */ "../../../Users/mma2/Documents/JS/zoia2/modules/users/frontend/components/UserAuth.css", 7));

var UserAuth =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default()(UserAuth, _Component);

  function UserAuth(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, UserAuth);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(UserAuth).call(this, props));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this), "state", {
      language: _this.props.appData.language,
      catalogs: _this.props.appLingui.catalogs
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this), "mounted", false);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this), "componentDidMount", function () {
      document.getElementById('app').classList.add('uk-flex', 'uk-flex-center', 'uk-flex-middle');
      var query = query_string__WEBPACK_IMPORTED_MODULE_17___default.a.parse(window.location.search);

      if (_this.props.appData.token) {
        _shared_store_configureStore__WEBPACK_IMPORTED_MODULE_18__["history"].push(query.redirect || '/');
      }

      _this.mounted = true;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this), "componentWillUnmount", function () {
      _this.mounted = false;
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

                if (_this.mounted) {
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
                }

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

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this), "onSaveSuccessHandler", function (response) {
      if (response.data.statusCode === 200 && response.data.token) {
        _this.props.appDataSetTokenAction(response.data.token);
      }
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
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "uk-card uk-card-default uk-card-body uk-card-small"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_shared_components_FormBuilder_index_jsx__WEBPACK_IMPORTED_MODULE_19__["default"], {
        prefix: "authForm",
        simple: true,
        UIkit: uikit__WEBPACK_IMPORTED_MODULE_14___default.a,
        axios: axios__WEBPACK_IMPORTED_MODULE_15___default.a,
        data: [{
          id: 'username',
          type: 'text',
          css: 'uk-width-1-1',
          label: react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_lingui_react__WEBPACK_IMPORTED_MODULE_11__["Trans"], {
            id: "Username:"
          }),
          autofocus: true
        }, {
          id: 'password',
          type: 'password',
          css: 'uk-width-1-1',
          label: react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_lingui_react__WEBPACK_IMPORTED_MODULE_11__["Trans"], {
            id: "Password:"
          })
        }, {
          id: 'divider1',
          type: 'divider'
        }, {
          id: 'btnLogin',
          type: 'button',
          buttonType: 'submit',
          css: 'uk-button-primary uk-width-1-1 uk-button-large',
          label: react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_lingui_react__WEBPACK_IMPORTED_MODULE_11__["Trans"], {
            id: "Authorize"
          })
        }],
        validation: {
          username: {
            mandatory: true,
            regexp: /^[a-zA-Z0-9_-]+$/
          },
          password: {
            mandatory: true
          }
        },
        lang: {
          ERR_VMANDATORY: _this.i18n._('Field is required'),
          ERR_VFORMAT: _this.i18n._('Invalid format'),
          ERR_LOAD: _this.i18n._('Could not load data from server'),
          ERR_SAVE: _this.i18n._('Could not save data'),
          WILL_BE_DELETED: _this.i18n._('will be deleted. Are you sure?'),
          YES: _this.i18n._('Yes'),
          CANCEL: _this.i18n._('Cancel')
        },
        save: {
          url: 'http://127.0.0.1:3000/api/users/login',
          method: 'POST'
        },
        onSaveSuccess: function onSaveSuccess(response) {
          return _this.onSaveSuccessHandler(response);
        }
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "uk-text-center uk-text-small uk-margin-top"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__["Link"], {
        to: "/users/register"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_lingui_react__WEBPACK_IMPORTED_MODULE_11__["Trans"], {
        id: "Create Account"
      })), "\xA0|\xA0", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__["Link"], {
        to: "/users/password"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_lingui_react__WEBPACK_IMPORTED_MODULE_11__["Trans"], {
        id: "Forgot Password"
      })))));
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

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(UserAuth, [{
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

  return UserAuth;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_13__["connect"])(function (store) {
  return {
    appData: store.appData,
    appLingui: store.appLingui
  };
}, function (dispatch) {
  return {
    appDataSetLanguageAction: function appDataSetLanguageAction(language) {
      return dispatch(Object(_shared_actions_appDataSetLanguage__WEBPACK_IMPORTED_MODULE_20__["default"])(language));
    },
    appDataSetTokenAction: function appDataSetTokenAction(token) {
      return dispatch(Object(_shared_actions_appDataSetToken__WEBPACK_IMPORTED_MODULE_21__["default"])(token));
    },
    appLinguiSetCatalogAction: function appLinguiSetCatalogAction(language, catalog) {
      return dispatch(Object(_shared_actions_appLinguiSetCatalog__WEBPACK_IMPORTED_MODULE_22__["default"])(language, catalog));
    }
  };
})(UserAuth));

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

/***/ "../../../Users/mma2/Documents/JS/zoia2/shared/actions/appDataSetToken.js":
/*!**************************************************************************!*\
  !*** c:/Users/mma2/Documents/JS/zoia2/shared/actions/appDataSetToken.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (v) {
  return {
    type: 'APP_DATA_SET_TOKEN',
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

/***/ "../../../Users/mma2/Documents/JS/zoia2/shared/components/FormBuilder/ZButton.jsx":
/*!**********************************************************************************!*\
  !*** c:/Users/mma2/Documents/JS/zoia2/shared/components/FormBuilder/ZButton.jsx ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ZButton; });
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);







/* eslint react/prop-types:0 */

/* eslint react/button-has-type:0 */


var ZButton =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(ZButton, _Component);

  function ZButton() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ZButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default()(ZButton)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "onButtonClick", function (e) {
      if (_this.props.onButtonClick && typeof _this.props.onButtonClick === 'function') {
        e.preventDefault();

        _this.props.onButtonClick(e, _this.props.originalId);
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "render", function () {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        className: "uk-button zform-margin-right ".concat(_this.props.css),
        onClick: _this.onButtonClick,
        disabled: _this.props.disabled,
        type: _this.props.buttonType || 'button'
      }, _this.props.label);
    });

    return _this;
  }

  return ZButton;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);



/***/ }),

/***/ "../../../Users/mma2/Documents/JS/zoia2/shared/components/FormBuilder/ZCKEditor4.jsx":
/*!*************************************************************************************!*\
  !*** c:/Users/mma2/Documents/JS/zoia2/shared/components/FormBuilder/ZCKEditor4.jsx ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ZCKEditor4; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);








/* eslint react/prop-types:0 */

var DEFAULT_SCRIPT_URL = '//cdn.ckeditor.com/4.11.2/standard/ckeditor.js';

var ZCKEditor4 =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(ZCKEditor4, _Component);

  function ZCKEditor4(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ZCKEditor4);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(ZCKEditor4).call(this, props));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "loadScript", function (url) {
      return new Promise(function (resolve, reject) {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;
        script.addEventListener('load', function () {
          return resolve(script);
        }, false);
        script.addEventListener('error', function () {
          return reject(script);
        }, false);
        document.body.appendChild(script);
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "focus", function () {
      return _this.field.focus();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "onEditorDataChange", function (e) {
      _this.props.onValueChanged && typeof _this.props.onValueChanged === 'function' ? _this.props.onValueChanged(_this.props.originalId, e.editor.getData()) : null;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "render", function () {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: _this.props.cname
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: "uk-form-label",
        htmlFor: _this.props.id
      }, _this.props.label, _this.props.mandatory ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "zform-mandatory"
      }, "*") : null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "uk-form-controls"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        ref: function ref(input) {
          _this.ckeditor = input;
        }
      }), _this.props.error && _this.props.errorMessage ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "uk-label uk-label-danger"
      }, _this.props.errorMessage)) : null, _this.props.helpText ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "uk-text-s)mall uk-text-muted"
      }, _this.props.helpText) : null));
    });

    _this.unmounting = false;
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ZCKEditor4, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (!this.props.scriptLoaded) {
        this.loadScript(this.props.scriptURL || DEFAULT_SCRIPT_URL).then(function () {
          return _this2.onLoad();
        });
      } else {
        this.onLoad();
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(props) {
      var editor = this.editorInstance;

      if (editor && editor.getData() !== props.value) {
        editor.setData(props.value);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unmounting = true;
    }
  }, {
    key: "onLoad",
    value: function onLoad() {
      if (this.unmounting) return;

      if (!window.CKEDITOR) {
        console.error('CKEditor not found');
        return;
      }

      this.editorInstance = window.CKEDITOR.appendTo(this.ckeditor, this.props.config, this.props.content);
      this.editorInstance.on('change', this.onEditorDataChange);
    }
  }]);

  return ZCKEditor4;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ }),

/***/ "../../../Users/mma2/Documents/JS/zoia2/shared/components/FormBuilder/ZCKEditor5.jsx":
/*!*************************************************************************************!*\
  !*** c:/Users/mma2/Documents/JS/zoia2/shared/components/FormBuilder/ZCKEditor5.jsx ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ZCKEditor5; });
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);







/* eslint react/prop-types:0 */


var ZCKEditor5 =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(ZCKEditor5, _Component);

  function ZCKEditor5() {
    var _getPrototypeOf2,
        _this2 = this;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ZCKEditor5);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default()(ZCKEditor5)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "focus", function () {
      return _this.field.focus();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "render", function () {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: _this.props.cname
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        className: "uk-form-label",
        htmlFor: _this.props.id
      }, _this.props.label, _this.props.mandatory ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "zform-mandatory"
      }, "*") : null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "uk-form-controls"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_this2.props.CKEditor, {
        editor: _this.props.editor,
        ref: function ref(field) {
          _this.field = field;
        },
        data: _this.props.value || '',
        onInit: function onInit() {},
        onChange: function onChange(event, editor) {
          if (_this.props.onValueChanged && typeof _this.props.onValueChanged === 'function') {
            var data = editor.getData();

            _this.props.onValueChanged(_this.props.originalId, data);
          }
        },
        onBlur: function onBlur() {},
        onFocus: function onFocus() {}
      }), _this.props.error && _this.props.errorMessage ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "uk-label uk-label-danger"
      }, _this.props.errorMessage)) : null, _this.props.helpText ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "uk-text-small uk-text-muted"
      }, _this.props.helpText) : null));
    });

    return _this;
  }

  return ZCKEditor5;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);



/***/ }),

/***/ "../../../Users/mma2/Documents/JS/zoia2/shared/components/FormBuilder/ZCaptcha.jsx":
/*!***********************************************************************************!*\
  !*** c:/Users/mma2/Documents/JS/zoia2/shared/components/FormBuilder/ZCaptcha.jsx ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ZCaptcha; });
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);







/* eslint react/prop-types:0 */


var ZCaptcha =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(ZCaptcha, _Component);

  function ZCaptcha() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ZCaptcha);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default()(ZCaptcha)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "state", {
      source: 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=' // Blank image

    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "focus", function () {
      return _this.field.focus();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "reloadCaptcha", function (focus) {
      _this.setState({
        source: "".concat(_this.props.source, "?_=").concat(Math.floor(Math.random() * 20))
      });

      _this.props.onValueChanged && typeof _this.props.onValueChanged === 'function' ? _this.props.onValueChanged(_this.props.originalId, '') : null;

      if (focus) {
        _this.field.focus();
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "componentDidMount", function () {
      _this.reloadCaptcha();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "onCaptchaImageClick", function (e) {
      e.preventDefault();

      _this.reloadCaptcha(true);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "render", function () {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: _this.props.cname
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        className: "uk-form-label",
        htmlFor: _this.props.id
      }, _this.props.label, _this.props.mandatory ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "zform-mandatory"
      }, "*") : null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "uk-form-controls"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "uk-flex uk-flex-middle zform-captcha-image-wrap"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        ref: function ref(field) {
          _this.field = field;
        },
        type: "text",
        className: "uk-input uk-form-large uk-form-width-small".concat(_this.props.error ? ' uk-form-danger' : '').concat(_this.props.css ? " ".concat(_this.props.css) : ''),
        value: _this.props.value,
        onChange: function onChange(e) {
          return _this.props.onValueChanged && typeof _this.props.onValueChanged === 'function' ? _this.props.onValueChanged(_this.props.originalId, e.target.value) : null;
        },
        disabled: _this.props.disabled
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "#",
        onClick: _this.onCaptchaImageClick
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        ref: function ref(img) {
          _this.captchaImage = img;
        },
        className: "uk-margin-left",
        src: _this.state.source,
        alt: ""
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        "uk-icon": "icon:refresh;ratio:0.8"
      }))), _this.props.error && _this.props.errorMessage ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "uk-label uk-label-danger"
      }, _this.props.errorMessage)) : null, _this.props.helpText ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "uk-text-small uk-text-muted"
      }, _this.props.helpText) : null));
    });

    return _this;
  }

  return ZCaptcha;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);



/***/ }),

/***/ "../../../Users/mma2/Documents/JS/zoia2/shared/components/FormBuilder/ZCheckbox.jsx":
/*!************************************************************************************!*\
  !*** c:/Users/mma2/Documents/JS/zoia2/shared/components/FormBuilder/ZCheckbox.jsx ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ZCheckbox; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash/cloneDeep */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/lodash/cloneDeep.js");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_8__);








/* eslint react/prop-types:0 */



var ZCheckbox =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(ZCheckbox, _Component);

  function ZCheckbox() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, ZCheckbox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(ZCheckbox)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "focus", function () {
      return _this.field.focus();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "onValueChanged", function (e) {
      var checked = e.target.checked;
      var id = e.target.dataset.id;
      var value = _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(_this.props.value) === 'object' ? lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_8___default()(_this.props.value) : {};
      value[id] = checked;
      _this.props.onValueChanged && typeof _this.props.onValueChanged === 'function' ? _this.props.onValueChanged(_this.props.originalId, value) : null;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "getCheckboxes", function () {
      return Object.keys(_this.props.values).map(function (key) {
        var val = _this.props.values[key];
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
          key: "".concat(_this.props.id, "_checkbox_").concat(key),
          className: "uk-margin-small-right zform-noselect"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
          className: "uk-checkbox",
          type: "checkbox",
          "data-id": key,
          checked: _this.props.value[key] || false,
          onChange: _this.onValueChanged,
          disabled: _this.props.disabled
        }), "\xA0", val);
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "render", function () {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: _this.props.cname
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: "uk-form-label",
        htmlFor: _this.props.id
      }, _this.props.label, _this.props.mandatory ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "zform-mandatory"
      }, "*") : null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "uk-form-controls",
        ref: function ref(field) {
          _this.field = field;
        }
      }, _this.getCheckboxes()), _this.props.error && _this.props.errorMessage ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "uk-label uk-label-danger"
      }, _this.props.errorMessage)) : null, _this.props.helpText ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "uk-text-small uk-text-muted"
      }, _this.props.helpText) : null);
    });

    return _this;
  }

  return ZCheckbox;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ }),

/***/ "../../../Users/mma2/Documents/JS/zoia2/shared/components/FormBuilder/ZDivider.jsx":
/*!***********************************************************************************!*\
  !*** c:/Users/mma2/Documents/JS/zoia2/shared/components/FormBuilder/ZDivider.jsx ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* eslint react/prop-types:0 */

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "uk-margin-top ".concat(props.css || '')
  });
});

/***/ }),

/***/ "../../../Users/mma2/Documents/JS/zoia2/shared/components/FormBuilder/ZFile.jsx":
/*!********************************************************************************!*\
  !*** c:/Users/mma2/Documents/JS/zoia2/shared/components/FormBuilder/ZFile.jsx ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ZFile; });
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);







/* eslint react/prop-types:0 */


var ZFile =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(ZFile, _Component);

  function ZFile() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ZFile);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default()(ZFile)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "onValueChanged", function (e) {
      var files = Array.from(e.target.files);
      _this.props.onValueChanged && typeof _this.props.onValueChanged === 'function' ? _this.props.onValueChanged(_this.props.originalId, files) : null;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "onDropFilesArea", function (e) {
      e.stopPropagation();
      e.preventDefault();

      if (e.dataTransfer && e.dataTransfer.files) {
        var files = Array.from(e.dataTransfer.files);
        _this.props.onValueChanged && typeof _this.props.onValueChanged === 'function' ? _this.props.onValueChanged(_this.props.originalId, files) : null;
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "onFileListItemClick", function (e) {
      e.preventDefault();
      var filename = e.currentTarget.dataset.filename;

      if (_this.props.value.find(function (item) {
        return item.name === filename && !item.lastModified;
      })) {
        _this.props.UIkit.modal.confirm("".concat(filename, " ").concat(_this.props.lang.WILL_BE_DELETED), {
          labels: {
            ok: _this.props.lang.YES,
            cancel: _this.props.lang.CANCEL
          },
          stack: true
        }).then(function () {
          // Okay, delete the file
          var files = _this.props.value.filter(function (item) {
            return item.name !== filename;
          });

          _this.props.onValueChanged && typeof _this.props.onValueChanged === 'function' ? _this.props.onValueChanged(_this.props.originalId, files, true) : null;
        }, function () {// Cancel
        });
      } else {
        var files = _this.props.value.filter(function (item) {
          return item.name !== filename;
        });

        _this.props.onValueChanged && typeof _this.props.onValueChanged === 'function' ? _this.props.onValueChanged(_this.props.originalId, files, true) : null;
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "onDragOverFilesArea", function (e) {
      e.preventDefault();
      e.stopPropagation();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "getFilesList", function () {
      return _this.props.value.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
          key: "".concat(_this.props.id, "_").concat(item.name)
        }, item.name, "\xA0", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
          href: "",
          "uk-icon": "icon:close",
          "data-filename": item.name,
          onClick: _this.onFileListItemClick
        }, "\xA0"));
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "render", function () {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "uk-margin-small-right"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        className: "uk-form-label"
      }, _this.props.label, _this.props.mandatory ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "zform-mandatory"
      }, "*") : null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "zform-drop-area uk-text-center uk-width-large",
        onDragOver: _this.onDragOverFilesArea,
        onDrop: _this.onDropFilesArea
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "uk-text-middle"
      }, _this.props.lang && _this.props.lang.FILE_ATTACH ? _this.props.lang.FILE_ATTACH : 'Attach file(s) by dropping them here', "\xA0", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        className: "zform-upload-btn-wrapper uk-link",
        ref: function ref(field) {
          _this.field = field;
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "file",
        multiple: true,
        onChange: _this.onValueChanged
      }), _this.props.lang && _this.props.lang.FILE_ORSELECT ? _this.props.lang.FILE_ORSELECT : 'or selecting one'))), _this.props.value && Array.isArray(_this.props.value) && _this.props.value.length ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        className: "zform-files-list uk-list"
      }, _this.getFilesList()) : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null));
    });

    return _this;
  }

  return ZFile;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);



/***/ }),

/***/ "../../../Users/mma2/Documents/JS/zoia2/shared/components/FormBuilder/ZLoading.jsx":
/*!***********************************************************************************!*\
  !*** c:/Users/mma2/Documents/JS/zoia2/shared/components/FormBuilder/ZLoading.jsx ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* eslint react/prop-types:0 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "zform-loading uk-flex uk-flex-center uk-flex-middle"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    "uk-spinner": "ratio:2"
  }));
});

/***/ }),

/***/ "../../../Users/mma2/Documents/JS/zoia2/shared/components/FormBuilder/ZRadio.jsx":
/*!*********************************************************************************!*\
  !*** c:/Users/mma2/Documents/JS/zoia2/shared/components/FormBuilder/ZRadio.jsx ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ZRadio; });
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);







/* eslint react/prop-types:0 */


var ZRadio =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(ZRadio, _Component);

  function ZRadio() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ZRadio);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default()(ZRadio)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "focus", function () {
      return _this.field.focus();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "getRadioButtons", function () {
      return Object.keys(_this.props.values).map(function (key) {
        var val = _this.props.values[key];
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
          key: "".concat(_this.props.id, "_radio_").concat(key),
          className: "zform-noselect uk-margin-small-right"
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
          className: "uk-radio",
          type: "radio",
          name: _this.props.id,
          value: key,
          checked: _this.props.value === key,
          onChange: function onChange(e) {
            return _this.props.onValueChanged && typeof _this.props.onValueChanged === 'function' ? _this.props.onValueChanged(_this.props.originalId, e.target.value) : null;
          },
          disabled: _this.props.disabled
        }), "\xA0", val, "W");
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "render", function () {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: _this.props.cname
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        className: "uk-form-label",
        htmlFor: _this.props.id
      }, _this.props.label, _this.props.mandatory ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "zform-mandatory"
      }, "*") : null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "uk-form-controls"
      }, _this.getRadioButtons()), _this.props.error && _this.props.errorMessage ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "uk-label uk-label-danger"
      }, _this.props.errorMessage)) : null, _this.props.helpText ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "uk-text-small uk-text-muted"
      }, _this.props.helpText) : null);
    });

    return _this;
  }

  return ZRadio;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);



/***/ }),

/***/ "../../../Users/mma2/Documents/JS/zoia2/shared/components/FormBuilder/ZSelect.jsx":
/*!**********************************************************************************!*\
  !*** c:/Users/mma2/Documents/JS/zoia2/shared/components/FormBuilder/ZSelect.jsx ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ZSelect; });
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);







/* eslint react/prop-types:0 */


var ZSelect =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(ZSelect, _Component);

  function ZSelect() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ZSelect);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default()(ZSelect)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "focus", function () {
      return _this.field.focus();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "onValueChanged", function (e) {
      var value = e.target.value;
      _this.props.onValueChanged && typeof _this.props.onValueChanged === 'function' ? _this.props.onValueChanged(_this.props.originalId, value) : null;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "getCheckboxes", function () {
      return Object.keys(_this.props.values).map(function (key) {
        var val = _this.props.values[key];
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
          key: "".concat(_this.props.id, "_checkbox_").concat(val),
          className: "uk-margin-small-right"
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
          className: "uk-checkbox",
          type: "checkbox",
          "data-id": key,
          checked: _this.props.value[key],
          onChange: _this.onValueChanged,
          disabled: _this.props.disabled
        }), "\xA0", val);
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "getOptions", function () {
      return Object.keys(_this.props.values).map(function (key) {
        var val = _this.props.values[key];
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
          key: "".concat(_this.props.id, "_option_").concat(val),
          value: key
        }, val);
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "render", function () {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: _this.props.cname
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        className: "uk-form-label",
        htmlFor: _this.props.id
      }, _this.props.label, _this.props.mandatory ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "zform-mandatory"
      }, "*") : null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "uk-form-controls"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("select", {
        ref: function ref(field) {
          _this.field = field;
        },
        id: _this.props.id,
        className: "uk-select".concat(_this.props.error ? ' uk-form-danger' : '').concat(_this.props.css ? " ".concat(_this.props.css) : null),
        value: _this.props.value,
        onChange: _this.onValueChanged,
        disabled: _this.props.disabled
      }, _this.getOptions()), _this.props.error && _this.props.errorMessage ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "uk-label uk-label-danger"
      }, _this.props.errorMessage)) : null, _this.props.helpText ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "uk-text-small uk-text-muted"
      }, _this.props.helpText) : null));
    });

    return _this;
  }

  return ZSelect;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);



/***/ }),

/***/ "../../../Users/mma2/Documents/JS/zoia2/shared/components/FormBuilder/ZText.jsx":
/*!********************************************************************************!*\
  !*** c:/Users/mma2/Documents/JS/zoia2/shared/components/FormBuilder/ZText.jsx ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ZText; });
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);







/* eslint react/prop-types:0 */


var ZText =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(ZText, _Component);

  function ZText() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ZText);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default()(ZText)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "focus", function () {
      return _this.field.focus();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "render", function () {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: _this.props.cname
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        className: "uk-form-label",
        htmlFor: _this.props.id
      }, _this.props.label, _this.props.mandatory ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "zform-mandatory"
      }, "*") : null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "uk-form-controls"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        ref: function ref(field) {
          _this.field = field;
        },
        type: _this.props.type || 'text',
        className: "uk-input".concat(_this.props.error ? ' uk-form-danger' : '').concat(_this.props.css ? " ".concat(_this.props.css) : ''),
        value: _this.props.value,
        onChange: function onChange(e) {
          return _this.props.onValueChanged && typeof _this.props.onValueChanged === 'function' ? _this.props.onValueChanged(_this.props.originalId, e.target.value) : null;
        },
        disabled: _this.props.disabled
      }), _this.props.error && _this.props.errorMessage ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "uk-label uk-label-danger"
      }, _this.props.errorMessage)) : null, _this.props.helpText ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "uk-text-small uk-text-muted"
      }, _this.props.helpText) : null));
    });

    return _this;
  }

  return ZText;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);



/***/ }),

/***/ "../../../Users/mma2/Documents/JS/zoia2/shared/components/FormBuilder/ZTextarea.jsx":
/*!************************************************************************************!*\
  !*** c:/Users/mma2/Documents/JS/zoia2/shared/components/FormBuilder/ZTextarea.jsx ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ZTextarea; });
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);







/* eslint react/prop-types:0 */


var ZTextarea =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(ZTextarea, _Component);

  function ZTextarea() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ZTextarea);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default()(ZTextarea)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "focus", function () {
      return _this.field.focus();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "render", function () {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: _this.props.cname
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        className: "uk-form-label",
        htmlFor: _this.props.id
      }, _this.props.label, _this.props.mandatory ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "zform-mandatory"
      }, "*") : null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "uk-form-controls"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("textarea", {
        ref: function ref(field) {
          _this.field = field;
        },
        type: "text",
        id: _this.props.id,
        className: "uk-input".concat(_this.props.error ? ' uk-form-danger' : '').concat(_this.props.css ? " ".concat(_this.props.css) : ''),
        value: _this.props.value,
        onChange: function onChange(e) {
          return _this.props.onValueChanged && typeof _this.props.onValueChanged === 'function' ? _this.props.onValueChanged(_this.props.originalId, e.target.value) : null;
        },
        disabled: _this.props.disabled
      }), _this.props.error && _this.props.errorMessage ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "uk-label uk-label-danger"
      }, _this.props.errorMessage)) : null, _this.props.helpText ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "uk-text-small uk-text-muted"
      }, _this.props.helpText) : null));
    });

    return _this;
  }

  return ZTextarea;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);



/***/ }),

/***/ "../../../Users/mma2/Documents/JS/zoia2/shared/components/FormBuilder/ZWrap.jsx":
/*!********************************************************************************!*\
  !*** c:/Users/mma2/Documents/JS/zoia2/shared/components/FormBuilder/ZWrap.jsx ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* eslint react/prop-types:0 */

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "uk-flex uk-flex-wrap",
    "uk-margin": "uk-margin"
  }, props.items);
});

/***/ }),

/***/ "../../../Users/mma2/Documents/JS/zoia2/shared/components/FormBuilder/index.jsx":
/*!********************************************************************************!*\
  !*** c:/Users/mma2/Documents/JS/zoia2/shared/components/FormBuilder/index.jsx ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ZFormBuilder; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash/cloneDeep */ "../../../Users/mma2/Documents/JS/zoia2/node_modules/lodash/cloneDeep.js");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _ZButton_jsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ZButton.jsx */ "../../../Users/mma2/Documents/JS/zoia2/shared/components/FormBuilder/ZButton.jsx");
/* harmony import */ var _ZText_jsx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ZText.jsx */ "../../../Users/mma2/Documents/JS/zoia2/shared/components/FormBuilder/ZText.jsx");
/* harmony import */ var _ZTextarea_jsx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ZTextarea.jsx */ "../../../Users/mma2/Documents/JS/zoia2/shared/components/FormBuilder/ZTextarea.jsx");
/* harmony import */ var _ZCKEditor4_jsx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ZCKEditor4.jsx */ "../../../Users/mma2/Documents/JS/zoia2/shared/components/FormBuilder/ZCKEditor4.jsx");
/* harmony import */ var _ZCKEditor5_jsx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ZCKEditor5.jsx */ "../../../Users/mma2/Documents/JS/zoia2/shared/components/FormBuilder/ZCKEditor5.jsx");
/* harmony import */ var _ZFile_jsx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ZFile.jsx */ "../../../Users/mma2/Documents/JS/zoia2/shared/components/FormBuilder/ZFile.jsx");
/* harmony import */ var _ZRadio_jsx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ZRadio.jsx */ "../../../Users/mma2/Documents/JS/zoia2/shared/components/FormBuilder/ZRadio.jsx");
/* harmony import */ var _ZCheckbox_jsx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ZCheckbox.jsx */ "../../../Users/mma2/Documents/JS/zoia2/shared/components/FormBuilder/ZCheckbox.jsx");
/* harmony import */ var _ZSelect_jsx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ZSelect.jsx */ "../../../Users/mma2/Documents/JS/zoia2/shared/components/FormBuilder/ZSelect.jsx");
/* harmony import */ var _ZCaptcha_jsx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ZCaptcha.jsx */ "../../../Users/mma2/Documents/JS/zoia2/shared/components/FormBuilder/ZCaptcha.jsx");
/* harmony import */ var _ZDivider_jsx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ZDivider.jsx */ "../../../Users/mma2/Documents/JS/zoia2/shared/components/FormBuilder/ZDivider.jsx");
/* harmony import */ var _ZWrap_jsx__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./ZWrap.jsx */ "../../../Users/mma2/Documents/JS/zoia2/shared/components/FormBuilder/ZWrap.jsx");
/* harmony import */ var _ZLoading_jsx__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./ZLoading.jsx */ "../../../Users/mma2/Documents/JS/zoia2/shared/components/FormBuilder/ZLoading.jsx");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./style.css */ "../../../Users/mma2/Documents/JS/zoia2/shared/components/FormBuilder/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_24__);








// Import third-party modules


 // Import components













 // Import styles


var ERR_NONE = 0;
var ERR_VMANDATORY = 1;
var ERR_VFORMAT = 2;

var ZFormBuilder =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(ZFormBuilder, _Component);

  function ZFormBuilder(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, ZFormBuilder);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(ZFormBuilder).call(this, props));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "state", {
      dataStorage: {},
      tab: Object.keys(_this.props.tabs)[0],
      tabs: _this.props.defaultTabs,
      errors: {},
      errorMessages: {},
      errorMessage: null,
      loading: false,
      allTabs: {},
      saving: false
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "setFormDataExtra", function (data) {
      _this.formDataExtra = data;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "setFocusOnFields", function () {
      _this.props.data.map(function (item) {
        if (Array.isArray(item)) {
          item.map(function (ai) {
            if (ai.autofocus && !_this.state.loading && _this.fields[ai.id].focus) {
              _this.fields[ai.id].focus();
            }
          });
        } else if (item.autofocus && !_this.state.loading && _this.fields[item.id].focus) {
          _this.fields[item.id].focus();
        }
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "componentDidMount", function () {
      _this.setFocusOnFields(); // This is required no to set focus on "+" icon


      _this.props.UIkit.util.on(_this.tabDivDropdown, 'hidden', function () {
        _this.props.UIkit.tab(_this.tabDiv).show(_this.state.tabs.indexOf(_this.state.tab));
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "onGenericFieldValueChanged", function (id, value) {
      var storage = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_10___default()(_this.state.dataStorage);
      storage[_this.state.tab][id] = value;

      _this.setState({
        dataStorage: storage
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "onFileValueChanged", function (id, value, flagDelete) {
      var storage = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_10___default()(_this.state.dataStorage);
      storage[_this.state.tab][id] = storage[_this.state.tab][id] || [];
      storage[_this.state.tab][id] = flagDelete ? value : [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(value.filter(function (item) {
        return !storage[_this.state.tab][id].find(function (fitem) {
          return fitem.name.toLowerCase() === item.name.toLowerCase();
        });
      })), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(storage[_this.state.tab][id]));

      _this.setState({
        dataStorage: storage
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "getFormItem", function (item, cname) {
      switch (item.type) {
        case 'text':
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_ZText_jsx__WEBPACK_IMPORTED_MODULE_12__["default"], {
            ref: function ref(input) {
              _this.fields[item.id] = input;
            },
            originalId: item.id,
            id: "field_".concat(_this.props.prefix, "_").concat(item.id),
            key: "field_".concat(_this.props.prefix, "_").concat(item.id),
            css: item.css,
            label: item.label,
            cname: cname,
            mandatory: _this.props.validation && _this.props.validation[item.id] && _this.props.validation[item.id].mandatory,
            helpText: item.helpText,
            error: _this.state.errors[_this.state.tab] && _this.state.errors[_this.state.tab][item.id],
            errorMessage: _this.state.errorMessages[_this.state.tab] && _this.state.errorMessages[_this.state.tab][item.id] ? _this.state.errorMessages[_this.state.tab][item.id] : null,
            value: _this.state.dataStorage[_this.state.tab][item.id] || '',
            onValueChanged: _this.onGenericFieldValueChanged,
            disabled: _this.state.loading
          });

        case 'password':
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_ZText_jsx__WEBPACK_IMPORTED_MODULE_12__["default"], {
            ref: function ref(input) {
              _this.fields[item.id] = input;
            },
            originalId: item.id,
            id: "field_".concat(_this.props.prefix, "_").concat(item.id),
            key: "field_".concat(_this.props.prefix, "_").concat(item.id),
            css: item.css,
            label: item.label,
            cname: cname,
            mandatory: _this.props.validation && _this.props.validation[item.id] && _this.props.validation[item.id].mandatory,
            helpText: item.helpText,
            error: _this.state.errors[_this.state.tab] && _this.state.errors[_this.state.tab][item.id],
            errorMessage: _this.state.errorMessages[_this.state.tab] && _this.state.errorMessages[_this.state.tab][item.id] ? _this.state.errorMessages[_this.state.tab][item.id] : null,
            value: _this.state.dataStorage[_this.state.tab][item.id] || '',
            onValueChanged: _this.onGenericFieldValueChanged,
            disabled: _this.state.loading,
            type: "password"
          });

        case 'captcha':
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_ZCaptcha_jsx__WEBPACK_IMPORTED_MODULE_20__["default"], {
            ref: function ref(input) {
              _this.fields[item.id] = input;
            },
            originalId: item.id,
            id: "field_".concat(_this.props.prefix, "_").concat(item.id),
            key: "field_".concat(_this.props.prefix, "_").concat(item.id),
            css: item.css,
            label: item.label,
            cname: cname,
            source: item.source,
            mandatory: _this.props.validation && _this.props.validation[item.id] && _this.props.validation[item.id].mandatory,
            helpText: item.helpText,
            error: _this.state.errors[_this.state.tab] && _this.state.errors[_this.state.tab][item.id],
            errorMessage: _this.state.errorMessages[_this.state.tab] && _this.state.errorMessages[_this.state.tab][item.id] ? _this.state.errorMessages[_this.state.tab][item.id] : null,
            value: _this.state.dataStorage[_this.state.tab][item.id] || '',
            onValueChanged: _this.onGenericFieldValueChanged,
            disabled: _this.state.loading
          });

        case 'textarea':
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_ZTextarea_jsx__WEBPACK_IMPORTED_MODULE_13__["default"], {
            ref: function ref(input) {
              _this.fields[item.id] = input;
            },
            originalId: item.id,
            id: "field_".concat(_this.props.prefix, "_").concat(item.id),
            key: "field_".concat(_this.props.prefix, "_").concat(item.id),
            css: item.css,
            label: item.label,
            cname: cname,
            mandatory: _this.props.validation && _this.props.validation[item.id] && _this.props.validation[item.id].mandatory,
            helpText: item.helpText,
            error: _this.state.errors[_this.state.tab] && _this.state.errors[_this.state.tab][item.id],
            errorMessage: _this.state.errorMessages[_this.state.tab] && _this.state.errorMessages[_this.state.tab][item.id] ? _this.state.errorMessages[_this.state.tab][item.id] : null,
            value: _this.state.dataStorage[_this.state.tab][item.id] || '',
            onValueChanged: _this.onGenericFieldValueChanged,
            disabled: _this.state.loading
          });

        case 'ckeditor5':
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_ZCKEditor5_jsx__WEBPACK_IMPORTED_MODULE_15__["default"], {
            ref: function ref(input) {
              _this.fields[item.id] = input;
            },
            originalId: item.id,
            id: "field_".concat(_this.props.prefix, "_").concat(item.id),
            key: "field_".concat(_this.props.prefix, "_").concat(item.id),
            css: item.css,
            label: item.label,
            cname: cname,
            mandatory: _this.props.validation && _this.props.validation[item.id] && _this.props.validation[item.id].mandatory,
            helpText: item.helpText,
            error: _this.state.errors[_this.state.tab] && _this.state.errors[_this.state.tab][item.id],
            errorMessage: _this.state.errorMessages[_this.state.tab] && _this.state.errorMessages[_this.state.tab][item.id] ? _this.state.errorMessages[_this.state.tab][item.id] : null,
            value: _this.state.dataStorage[_this.state.tab][item.id] || '',
            onValueChanged: _this.onGenericFieldValueChanged,
            disabled: _this.state.loading,
            CKEditor: item.CKEditorInstance,
            editor: item.EditorInstance
          });

        case 'ckeditor4':
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_ZCKEditor4_jsx__WEBPACK_IMPORTED_MODULE_14__["default"], {
            ref: function ref(input) {
              _this.fields[item.id] = input;
            },
            originalId: item.id,
            id: "field_".concat(_this.props.prefix, "_").concat(item.id),
            key: "field_".concat(_this.props.prefix, "_").concat(item.id),
            css: item.css,
            label: item.label,
            cname: cname,
            scriptLoaded: false,
            mandatory: _this.props.validation && _this.props.validation[item.id] && _this.props.validation[item.id].mandatory,
            helpText: item.helpText,
            error: _this.state.errors[_this.state.tab] && _this.state.errors[_this.state.tab][item.id],
            errorMessage: _this.state.errorMessages[_this.state.tab] && _this.state.errorMessages[_this.state.tab][item.id] ? _this.state.errorMessages[_this.state.tab][item.id] : null,
            value: _this.state.dataStorage[_this.state.tab][item.id] || '',
            onValueChanged: _this.onGenericFieldValueChanged,
            disabled: _this.state.loading
          });

        case 'button':
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_ZButton_jsx__WEBPACK_IMPORTED_MODULE_11__["default"], {
            ref: function ref(input) {
              _this.fields[item.id] = input;
            },
            originalId: item.id,
            key: "field_".concat(_this.props.prefix, "_").concat(item.id),
            buttonType: item.buttonType || 'button',
            css: item.css,
            label: item.label,
            disabled: _this.state.loading,
            onButtonClick: item.onButtonClick
          });

        case 'divider':
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_ZDivider_jsx__WEBPACK_IMPORTED_MODULE_21__["default"], {
            key: "field_".concat(_this.props.prefix, "_").concat(_this.props.prefix, "_").concat(item.id),
            css: item.css
          });

        case 'file':
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_ZFile_jsx__WEBPACK_IMPORTED_MODULE_16__["default"], {
            ref: function ref(input) {
              _this.fields[item.id] = input;
            },
            key: "field_".concat(_this.props.prefix, "_").concat(item.id),
            id: "field_".concat(_this.props.prefix, "_").concat(item.id),
            originalId: item.id,
            label: item.label,
            value: _this.state.dataStorage[_this.state.tab][item.id],
            lang: _this.props.lang,
            onValueChanged: _this.onFileValueChanged,
            mandatory: _this.props.validation && _this.props.validation[item.id] && _this.props.validation[item.id].mandatory,
            UIkit: _this.props.UIkit
          });

        case 'radio':
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_ZRadio_jsx__WEBPACK_IMPORTED_MODULE_17__["default"], {
            ref: function ref(input) {
              _this.fields[item.id] = input;
            },
            originalId: item.id,
            id: "field_".concat(_this.props.prefix, "_").concat(item.id),
            key: "field_".concat(item.id),
            css: item.css,
            label: item.label,
            cname: cname,
            mandatory: _this.props.validation && _this.props.validation[item.id] && _this.props.validation[item.id].mandatory,
            helpText: item.helpText,
            error: _this.state.errors[_this.state.tab] && _this.state.errors[_this.state.tab][item.id],
            errorMessage: _this.state.errorMessages[_this.state.tab] && _this.state.errorMessages[_this.state.tab][item.id] ? _this.state.errorMessages[_this.state.tab][item.id] : null,
            value: _this.state.dataStorage[_this.state.tab][item.id] || Object.keys(item.values)[0],
            values: item.values || {},
            onValueChanged: _this.onGenericFieldValueChanged,
            disabled: _this.state.loading
          });

        case 'checkbox':
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_ZCheckbox_jsx__WEBPACK_IMPORTED_MODULE_18__["default"], {
            ref: function ref(input) {
              _this.fields[item.id] = input;
            },
            originalId: item.id,
            id: "field_".concat(_this.props.prefix, "_").concat(item.id),
            key: "field_".concat(item.id),
            css: item.css,
            label: item.label,
            cname: cname,
            mandatory: _this.props.validation && _this.props.validation[item.id] && _this.props.validation[item.id].mandatory,
            helpText: item.helpText,
            error: _this.state.errors[_this.state.tab] && _this.state.errors[_this.state.tab][item.id],
            errorMessage: _this.state.errorMessages[_this.state.tab] && _this.state.errorMessages[_this.state.tab][item.id] ? _this.state.errorMessages[_this.state.tab][item.id] : null,
            value: _this.state.dataStorage[_this.state.tab][item.id] || {},
            values: item.values || {},
            onValueChanged: _this.onGenericFieldValueChanged,
            disabled: _this.state.loading
          });

        case 'select':
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_ZSelect_jsx__WEBPACK_IMPORTED_MODULE_19__["default"], {
            ref: function ref(input) {
              _this.fields[item.id] = input;
            },
            originalId: item.id,
            id: "field_".concat(_this.props.prefix, "_").concat(item.id),
            key: "field_".concat(_this.props.prefix, "_").concat(item.id),
            css: item.css,
            label: item.label,
            cname: cname,
            mandatory: _this.props.validation && _this.props.validation[item.id] && _this.props.validation[item.id].mandatory,
            helpText: item.helpText,
            error: _this.state.errors[_this.state.tab] && _this.state.errors[_this.state.tab][item.id],
            errorMessage: _this.state.errorMessages[_this.state.tab] && _this.state.errorMessages[_this.state.tab][item.id] ? _this.state.errorMessages[_this.state.tab][item.id] : null,
            value: _this.state.dataStorage[_this.state.tab][item.id] || Object.keys(item.values)[0],
            values: item.values || {},
            onValueChanged: _this.onGenericFieldValueChanged,
            disabled: _this.state.loading
          });

        default:
          return null;
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "getFormFields", function () {
      return _this.props.data.map(function (item) {
        if (Array.isArray(item)) {
          var items = item.map(function (ai) {
            return _this.getFormItem(ai, 'uk-width-auto uk-margin-small-right');
          });
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_ZWrap_jsx__WEBPACK_IMPORTED_MODULE_22__["default"], {
            key: "field_".concat(_this.props.prefix, "_wrap_").concat(item[0].id),
            items: items
          });
        }

        return _this.getFormItem(item);
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "getCommonFieldsData", function (id) {
      var data = _this.state.dataStorage;

      if (_this.props.commonFields && _this.state.tab !== id) {
        data = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_10___default()(_this.state.dataStorage);
        Object.values(_this.props.commonFields).map(function (field) {
          data[id] = data[id] || {};
          data[id][field] = _this.state.dataStorage[_this.state.tab][field];
        });
      }

      return data;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "onTabClick", function (e) {
      e.preventDefault();
      var id = e.currentTarget.dataset.id;

      var data = _this.getCommonFieldsData(id);

      _this.setState({
        tab: id,
        dataStorage: data
      }, function () {
        _this.setFocusOnFields();
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "onTabCloseClick", function (e) {
      e.stopPropagation();
      e.preventDefault();

      _this.props.UIkit.tab(_this.tabDiv).show(_this.state.tabs.indexOf(_this.state.tab));

      var id = e.currentTarget.dataset.id;

      var tabsNew = _this.state.tabs.filter(function (item) {
        return item !== id;
      });

      _this.setState({
        tabs: tabsNew
      });

      if (tabsNew.length) {
        _this.setState({
          tab: tabsNew[tabsNew.length - 1]
        });
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "getTabs", function () {
      return _this.state.tabs.map(function (langShort) {
        var langFull = _this.props.tabs[langShort];
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
          key: "".concat(_this.props.prefix, "_tabitem_").concat(langShort),
          className: _this.state.tab === langShort ? 'uk-active' : null
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
          href: "#",
          "data-id": langShort,
          onClick: _this.onTabClick
        }, langFull, "\xA0", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
          onClick: _this.onTabCloseClick,
          type: "button",
          "uk-icon": "icon:close;ratio:0.8",
          "data-id": langShort
        })));
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "onTabsAddClick", function () {
      var tabs = Object.keys(_this.props.tabs);

      _this.props.UIkit.tab(_this.tabDiv).show(tabs.indexOf(_this.state.tab));
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "onRemainingTabClick", function (e) {
      var id = e.currentTarget.dataset.id;
      var tabsNew = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(_this.state.tabs), [id]);

      var data = _this.getCommonFieldsData(id);

      _this.setState({
        tabs: tabsNew,
        tab: id,
        dataStorage: data
      }, function () {
        _this.setFocusOnFields();
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "getRemainingTabsData", function () {
      var defaultTabs = Object.keys(_this.props.tabs);
      var tabs = defaultTabs.filter(function (tab) {
        if (_this.state.tabs.indexOf(tab) === -1) {
          return true;
        }

        return false;
      });
      return tabs;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "loadData", function () {
      _this.setState({
        loading: true
      }, function () {
        _this.props.axios({
          method: _this.props.load.method,
          url: _this.props.load.url,
          responseType: 'json',
          data: {}
        }).then(function (response) {
          _this.setState({
            loading: false
          });

          if (response.data.status !== 1) {
            _this.props.UIkit.notification(response.data.errorMessage || _this.props.lang.ERR_LOAD, {
              status: 'danger'
            });

            if (_this.props.onLoadError && typeof _this.props.onLoadError === 'function') {
              _this.props.onLoadError(response.data.errorMessage || _this.props.lang.ERR_LOAD);
            }

            return;
          }

          _this.deserializeData(response.data.data);
        })["catch"](function () {
          _this.setState({
            loading: false
          });

          _this.props.UIkit.notification(_this.props.lang.ERR_LOAD, {
            status: 'danger'
          });
        });
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "getRemainingTabs", function () {
      var tabs = _this.getRemainingTabsData();

      return tabs.map(function (tab) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
          key: "".concat(_this.props.prefix, "_tabadd_").concat(tab)
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
          href: "#",
          "data-id": tab,
          onClick: _this.onRemainingTabClick
        }, _this.props.tabs[tab]));
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "serializeData", function () {
      var data = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_10___default()(_this.state.dataStorage);
      var formData = new FormData();
      var fields = Object.keys(data[_this.state.tabs[0]]);
      Object.keys(data).filter(function (tab) {
        return _this.state.tabs.indexOf(tab) > -1;
      }).map(function (tab) {
        fields.map(function (field) {
          switch (_this.types[field].type) {
            case 'checkbox':
              data[tab][field] = data[tab][field] || {};
              data[tab][field] = Object.keys(data[tab][field]).map(function (key) {
                return data[tab][field][key] ? key : null;
              }).filter(function (item) {
                return item !== null;
              });
              break;

            case 'file':
              data[tab][field] = data[tab][field] || [];
              break;

            case 'radio':
            case 'select':
              data[tab][field] = data[tab][field] || Object.keys(_this.types[field].values)[0];
              break;

            default:
              data[tab][field] = data[tab][field] || '';
          }
        });
      });

      _this.props.commonFields.map(function (item) {
        data[item] = data[_this.state.tab][item];

        _this.state.tabs.map(function (tab) {
          delete data[tab][item];
        });
      });

      Object.keys(_this.props.tabs).map(function (tab) {
        if (_this.state.tabs.indexOf(tab) === -1) {
          delete data[tab];
        }
      });
      var fileList = [];
      Object.keys(data).map(function (key) {
        if (_this.props.tabs[key]) {
          Object.keys(data[key]).map(function (tkey) {
            if (_this.types[tkey].type === 'file') {
              var arr = [];
              data[key][tkey].map(function (file) {
                if (fileList.indexOf(file.name) === -1 && file.lastModified) {
                  formData.append(file.name, file);
                  fileList.push(file.name);
                }

                arr.push({
                  name: file.name
                });
              });
              data[key][tkey] = arr;
            }
          });
        } else if (_this.types[key].type === 'file') {
          var arr = [];
          data[key].map(function (file) {
            if (fileList.indexOf(file.name) === -1 && file.lastModified) {
              formData.append(file.name, file);
              fileList.push(file.name);
            }

            arr.push({
              name: file.name
            });
          });
          data[key] = arr;
        }
      });
      formData.append('__form_data', JSON.stringify(Object.assign({}, data, _this.formDataExtra)));
      return {
        data: data,
        formData: formData
      };
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "deserializeData", function (_data) {
      var data = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_10___default()(_data);
      var dataStorageNew = {};
      var tabsNew = [];
      Object.keys(_this.props.tabs).map(function (tab) {
        if (data[tab]) {
          dataStorageNew[tab] = {};
          var tabData = data[tab];
          Object.keys(tabData).map(function (field) {
            switch (_this.types[field].type) {
              case 'checkbox':
                dataStorageNew[tab][field] = {};
                data[tab][field].map(function (key) {
                  dataStorageNew[tab][field][key] = true;
                });
                break;

              case 'file':
                dataStorageNew[tab][field] = data[tab][field].map(function (item) {
                  return {
                    name: item.name,
                    size: item.size
                  };
                });
                break;

              default:
                dataStorageNew[tab][field] = data[tab][field];
            }
          });

          if (_this.props.tabs[tab]) {
            tabsNew.push(tab);
          }

          delete data[tab];
        }
      });
      Object.keys(data).map(function (key) {
        tabsNew.map(function (tab) {
          dataStorageNew[tab] = dataStorageNew[tab] || {};

          switch (_this.types[key].type) {
            case 'checkbox':
              dataStorageNew[tab][key] = {};
              data[key].map(function (ckey) {
                dataStorageNew[tab][key][ckey] = true;
              });
              break;

            case 'file':
              dataStorageNew[tab][key] = data[key].map(function (item) {
                return {
                  name: item.name,
                  size: item.size
                };
              });
              break;

            default:
              dataStorageNew[tab][key] = data[key];
          }
        });
      });

      _this.setState({
        tab: tabsNew[0],
        tabs: tabsNew,
        dataStorage: dataStorageNew
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "validateItem", function (id, _value) {
      if (!_this.props.validation || !_this.props.validation[id]) {
        return ERR_NONE;
      }

      var validation = _this.props.validation[id];
      var value = typeof _value === 'string' ? _value.trim() : _value;

      if (validation.mandatory && !value) {
        return ERR_VMANDATORY;
      }

      if (value && validation.regexp && typeof value === 'string') {
        var rex = new RegExp(validation.regexp);

        if (!rex.test(value)) {
          return ERR_VFORMAT;
        }
      }

      return ERR_NONE;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "validateData", function (_data) {
      var data = [];
      Object.keys(_data).map(function (key) {
        if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(_data[key]) === 'object' && Object.keys(_data[key]).length > 0) {
          Object.keys(_data[key]).map(function (skey) {
            data.push({
              id: skey,
              value: _data[key][skey],
              tab: key
            });
          });
        } else if (!_this.props.tabs[key]) {
          data.push({
            id: key,
            value: _data[key]
          });
        }
      });
      var vdata = data.map(function (item) {
        var res = _this.validateItem(item.id, item.value);

        return {
          id: item.id,
          tab: item.tab || null,
          error: res
        };
      }).filter(function (item) {
        return item.error > ERR_NONE;
      });
      return vdata;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "showErrors", function (vdata) {
      var errorsNew = {};
      var errorMessagesNew = {};
      var focus;
      Object.keys(_this.props.tabs).map(function (key) {
        errorsNew[key] = {};
        errorMessagesNew[key] = {};
      });
      vdata.map(function (item) {
        if (item.tab) {
          errorsNew[item.tab][item.id] = true;

          switch (item.error) {
            case ERR_VMANDATORY:
              errorMessagesNew[item.tab][item.id] = _this.props.lang.ERR_VMANDATORY; // eslint-disable-line react/prop-types

              break;

            case ERR_VFORMAT:
              errorMessagesNew[item.tab][item.id] = _this.props.lang.ERR_VFORMAT; // eslint-disable-line react/prop-types

              break;

            default:
              errorMessagesNew[item.tab][item.id] = '';
          }

          if (!focus) {
            focus = true;

            _this.setState({
              tab: item.tab
            }, function () {
              if (_this.fields[item.id].focus) {
                _this.fields[item.id].focus();
              }
            });
          }
        } else {
          _this.state.tabs.map(function (tabNew) {
            errorsNew[tabNew][item.id] = true;

            if (!focus) {
              focus = true;

              _this.setState({
                tab: tabNew
              }, function () {
                if (_this.fields[item.id].focus) {
                  _this.fields[item.id].focus();
                }
              });
            }
          });
        }
      });

      _this.setState({
        errors: errorsNew,
        errorMessages: errorMessagesNew
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "refreshCaptchaFields", function () {
      Object.keys(_this.fields).map(function (f) {
        if (_this.fields[f].reloadCaptcha) {
          _this.fields[f].reloadCaptcha();
        }
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "onFormSubmit", function (e) {
      e.preventDefault();

      if (_this.state.saving) {
        return;
      }

      _this.setState({
        errors: {},
        errorMessage: null
      }, function () {
        _this.setFormDataExtra({
          fex_test: 'Hello world '
        });

        var _this$serializeData = _this.serializeData(),
            data = _this$serializeData.data,
            formData = _this$serializeData.formData;

        var vdata = _this.validateData(data);

        if (vdata && vdata.length) {
          _this.showErrors(vdata);
        } else {
          _this.setState({
            loading: true,
            saving: true
          }, function () {
            _this.props.axios.post(_this.props.save.url, _this.props.simple ? data["default"] : formData, {
              headers: {
                'content-type': _this.props.simple ? 'application/json' : 'multipart/form-data'
              }
            }).then(function (response) {
              _this.setState({
                loading: false,
                saving: false
              });

              if (response.data.status !== 1) {
                _this.refreshCaptchaFields();

                if (_this.props.onSaveError && typeof _this.props.onSaveError === 'function') {
                  _this.props.onSaveError(response.data.errorMessage || _this.props.lang.ERR_SAVE);
                }

                if (response.data.errors) {
                  var errorsSet = {};
                  var errorMessagesSet = {};
                  var tabSet = _this.state.tab;
                  var tabsSet = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_10___default()(_this.state.tabs);
                  Object.keys(response.data.errors).map(function (tab) {
                    if (_this.state.allTabs[tab]) {
                      tabSet = tab;
                      errorsSet[tab] = {};
                      errorMessagesSet[tab] = {};

                      if (_this.state.tabs.indexOf(tab) === -1) {
                        tabsSet.push(tab);
                      }

                      Object.keys(response.data.errors[tab]).map(function (id) {
                        errorsSet[tab][id] = true;

                        if (response.data.errors[tab][id]) {
                          errorMessagesSet[tab][id] = response.data.errors[tab][id];
                        }
                      });
                    }
                  });

                  _this.setState({
                    errors: errorsSet,
                    errorMessages: errorMessagesSet,
                    tabs: tabsSet,
                    tab: tabSet,
                    errorMessage: response.data.errorMessage || _this.props.lang.ERR_SAVE
                  }, function () {
                    var lastTab = Object.keys(response.data.errors)[Object.keys(response.data.errors).length - 1];
                    var firstField = Object.keys(response.data.errors[lastTab])[0];

                    if (_this.state.allTabs[lastTab] && _this.fields[firstField] && _this.fields[firstField].focus) {
                      _this.fields[firstField].focus();
                    }
                  });

                  return;
                }
              }

              if (_this.props.onSaveSuccess && typeof _this.props.onSaveSuccess === 'function') {
                _this.props.onSaveSuccess(response);
              }
            })["catch"](function () {
              _this.refreshCaptchaFields();

              _this.setState({
                loading: false,
                saving: false
              });

              _this.props.UIkit.notification(_this.props.lang.ERR_SAVE, {
                status: 'danger'
              });
            });
          });
        }
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "render", function () {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "zform-wrap"
      }, _this.props.tabs && Object.keys(_this.props.tabs).length > 1 ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", {
        "uk-tab": "",
        ref: function ref(item) {
          _this.tabDiv = item;
        }
      }, _this.getTabs(), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        className: _this.getRemainingTabsData().length || 'uk-hidden',
        ref: function ref(item) {
          _this.tabDiv = item;
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        onClick: _this.onTabsAddClick
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        "uk-icon": "icon:plus;ratio:0.8"
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        "uk-dropdown": "mode:click",
        ref: function ref(item) {
          _this.tabDivDropdown = item;
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", {
        className: "uk-nav uk-dropdown-nav"
      }, _this.getRemainingTabs())))) : null, _this.state.errorMessage ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "uk-alert-danger",
        "uk-alert": "true"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", null, _this.state.errorMessage)) : null, _this.state.tabs.length > 0 ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("form", {
        className: "zform",
        onSubmit: _this.onFormSubmit,
        id: _this.props.prefix,
        "uk-margin": "uk-margin"
      }, _this.getFormFields(), _this.state.loading ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_ZLoading_jsx__WEBPACK_IMPORTED_MODULE_23__["default"], null) : null) : null);
    });

    var values = {};
    var _data2 = props.data;

    _data2.map(function (item) {
      if (Array.isArray(item)) {
        item.map(function (ai) {
          if (ai.type.match(/^(button|divider)$/)) {
            return;
          }

          switch (ai.type) {
            case 'radio':
              values[ai.id] = ai.values ? Object.keys(ai.values)[0] : '';
              break;

            case 'checkbox':
              values[ai.id] = {};
              break;

            default:
              values[ai.id] = '';
          }
        });
      } else {
        if (item.type.match(/^(button|divider)$/)) {
          return;
        }

        switch (item.type) {
          case 'radio':
            values[item.id] = item.values ? Object.keys(item.values)[0] : '';
            break;

          case 'checkbox':
            values[item.id] = {};
            break;

          case 'select':
            values[item.id] = item.values ? Object.keys(item.values)[0] : '';
            break;

          default:
            values[item.id] = '';
        }
      }
    });

    Object.keys(props.tabs).map(function (key) {
      _this.state.dataStorage[key] = {};
      _this.state.allTabs[key] = true;
      _this.state.errors[key] = {};
      _this.state.errorMessages[key] = {};
    });
    _this.state.dataStorage[_this.state.tab] = values;
    _this.types = {};
    _this.fields = {};
    _this.formDataExtra = {};

    _this.props.data.map(function (item) {
      if (Array.isArray(item)) {
        item.map(function (ai) {
          _this.types[ai.id] = {
            type: ai.type,
            values: ai.values
          };
        });
      } else {
        _this.types[item.id] = {
          type: item.type,
          values: item.values
        };
      }
    });

    return _this;
  }

  return ZFormBuilder;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(ZFormBuilder, "propTypes", {
  prefix: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string.isRequired,
  tabs: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.objectOf(prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string),
  defaultTabs: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string),
  data: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.array])).isRequired,
  commonFields: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string),
  validation: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.objectOf(prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object),
  lang: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.objectOf(prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string),
  save: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.objectOf(prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string),
  load: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.objectOf(prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string),
  UIkit: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func.isRequired,
  onLoadError: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
  onSaveError: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
  onSaveSuccess: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
  axios: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func.isRequired,
  simple: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool
});

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(ZFormBuilder, "defaultProps", {
  tabs: {
    "default": 'Default'
  },
  defaultTabs: ['default'],
  commonFields: [],
  validation: {},
  lang: {
    ERR_VMANDATORY: 'Field is required',
    ERR_VFORMAT: 'Invalid format',
    ERR_LOAD: 'Could not load data from server',
    ERR_SAVE: 'Could not save data',
    WILL_BE_DELETED: 'will be deleted. Are you sure?',
    YES: 'Yes',
    CANCEL: 'Cancel'
  },
  save: {
    url: null
  },
  load: {
    url: null,
    method: 'GET'
  },
  onLoadError: null,
  onSaveError: null,
  onSaveSuccess: null,
  simple: false
});



/***/ }),

/***/ "../../../Users/mma2/Documents/JS/zoia2/shared/components/FormBuilder/style.css":
/*!********************************************************************************!*\
  !*** c:/Users/mma2/Documents/JS/zoia2/shared/components/FormBuilder/style.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

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
//# sourceMappingURL=AdminPanel_9bdbe413a01418499812.js.map