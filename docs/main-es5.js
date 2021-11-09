(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

  function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkbible_webui"] = self["webpackChunkbible_webui"] || []).push([["main"], {
    /***/
    8255:
    /*!*******************************************************!*\
      !*** ./$_lazy_route_resources/ lazy namespace object ***!
      \*******************************************************/

    /***/
    function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 8255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    2816:
    /*!**************************************************************!*\
      !*** ./src/api-authorization/api-authorization.constants.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ApplicationName": function ApplicationName() {
          return (
            /* binding */
            _ApplicationName
          );
        },

        /* harmony export */
        "ReturnUrlType": function ReturnUrlType() {
          return (
            /* binding */
            _ReturnUrlType
          );
        },

        /* harmony export */
        "QueryParameterNames": function QueryParameterNames() {
          return (
            /* binding */
            _QueryParameterNames
          );
        },

        /* harmony export */
        "LogoutActions": function LogoutActions() {
          return (
            /* binding */
            _LogoutActions
          );
        },

        /* harmony export */
        "LoginActions": function LoginActions() {
          return (
            /* binding */
            _LoginActions
          );
        },

        /* harmony export */
        "ApplicationPaths": function ApplicationPaths() {
          return (
            /* binding */
            _ApplicationPaths
          );
        }
        /* harmony export */

      });

      var _ApplicationName = 'Bible.WebUI';
      var _ReturnUrlType = 'returnUrl';
      var _QueryParameterNames = {
        ReturnUrl: _ReturnUrlType,
        Message: 'message'
      };
      var _LogoutActions = {
        LogoutCallback: 'logout-callback',
        Logout: 'logout',
        LoggedOut: 'logged-out'
      };
      var _LoginActions = {
        Login: 'login',
        LoginCallback: 'login-callback',
        LoginFailed: 'login-failed',
        Profile: 'profile',
        Register: 'register'
      };
      var applicationPaths = {
        DefaultLoginRedirectPath: '/',
        ApiAuthorizationClientConfigurationUrl: "/_configuration/".concat(_ApplicationName),
        Login: "authentication/".concat(_LoginActions.Login),
        LoginFailed: "authentication/".concat(_LoginActions.LoginFailed),
        LoginCallback: "authentication/".concat(_LoginActions.LoginCallback),
        Register: "authentication/".concat(_LoginActions.Register),
        Profile: "authentication/".concat(_LoginActions.Profile),
        LogOut: "authentication/".concat(_LogoutActions.Logout),
        LoggedOut: "authentication/".concat(_LogoutActions.LoggedOut),
        LogOutCallback: "authentication/".concat(_LogoutActions.LogoutCallback),
        LoginPathComponents: [],
        LoginFailedPathComponents: [],
        LoginCallbackPathComponents: [],
        RegisterPathComponents: [],
        ProfilePathComponents: [],
        LogOutPathComponents: [],
        LoggedOutPathComponents: [],
        LogOutCallbackPathComponents: [],
        IdentityRegisterPath: '/Identity/Account/Register',
        IdentityManagePath: '/Identity/Account/Manage'
      };
      applicationPaths = Object.assign(Object.assign({}, applicationPaths), {
        LoginPathComponents: applicationPaths.Login.split('/'),
        LoginFailedPathComponents: applicationPaths.LoginFailed.split('/'),
        RegisterPathComponents: applicationPaths.Register.split('/'),
        ProfilePathComponents: applicationPaths.Profile.split('/'),
        LogOutPathComponents: applicationPaths.LogOut.split('/'),
        LoggedOutPathComponents: applicationPaths.LoggedOut.split('/'),
        LogOutCallbackPathComponents: applicationPaths.LogOutCallback.split('/')
      });
      var _ApplicationPaths = applicationPaths;
      /***/
    },

    /***/
    985:
    /*!***********************************************************!*\
      !*** ./src/api-authorization/api-authorization.module.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ApiAuthorizationModule": function ApiAuthorizationModule() {
          return (
            /* binding */
            _ApiAuthorizationModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _login_menu_login_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./login-menu/login-menu.component */
      8040);
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./login/login.component */
      8635);
      /* harmony import */


      var _logout_logout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./logout/logout.component */
      6108);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _api_authorization_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./api-authorization.constants */
      2816);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      1841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _ApiAuthorizationModule = function _ApiAuthorizationModule() {
        _classCallCheck(this, _ApiAuthorizationModule);
      };

      _ApiAuthorizationModule.ɵfac = function ApiAuthorizationModule_Factory(t) {
        return new (t || _ApiAuthorizationModule)();
      };

      _ApiAuthorizationModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: _ApiAuthorizationModule
      });
      _ApiAuthorizationModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild([{
          path: _api_authorization_constants__WEBPACK_IMPORTED_MODULE_3__.ApplicationPaths.Register,
          component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent
        }, {
          path: _api_authorization_constants__WEBPACK_IMPORTED_MODULE_3__.ApplicationPaths.Profile,
          component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent
        }, {
          path: _api_authorization_constants__WEBPACK_IMPORTED_MODULE_3__.ApplicationPaths.Login,
          component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent
        }, {
          path: _api_authorization_constants__WEBPACK_IMPORTED_MODULE_3__.ApplicationPaths.LoginFailed,
          component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent
        }, {
          path: _api_authorization_constants__WEBPACK_IMPORTED_MODULE_3__.ApplicationPaths.LoginCallback,
          component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent
        }, {
          path: _api_authorization_constants__WEBPACK_IMPORTED_MODULE_3__.ApplicationPaths.LogOut,
          component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_2__.LogoutComponent
        }, {
          path: _api_authorization_constants__WEBPACK_IMPORTED_MODULE_3__.ApplicationPaths.LoggedOut,
          component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_2__.LogoutComponent
        }, {
          path: _api_authorization_constants__WEBPACK_IMPORTED_MODULE_3__.ApplicationPaths.LogOutCallback,
          component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_2__.LogoutComponent
        }])]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](_ApiAuthorizationModule, {
          declarations: [_login_menu_login_menu_component__WEBPACK_IMPORTED_MODULE_0__.LoginMenuComponent, _login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent, _logout_logout_component__WEBPACK_IMPORTED_MODULE_2__.LogoutComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
          exports: [_login_menu_login_menu_component__WEBPACK_IMPORTED_MODULE_0__.LoginMenuComponent, _login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent, _logout_logout_component__WEBPACK_IMPORTED_MODULE_2__.LogoutComponent]
        });
      })();
      /***/

    },

    /***/
    6784:
    /*!**************************************************!*\
      !*** ./src/api-authorization/authorize.guard.ts ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthorizeGuard": function AuthorizeGuard() {
          return (
            /* binding */
            _AuthorizeGuard
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      8307);
      /* harmony import */


      var _api_authorization_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./api-authorization.constants */
      2816);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _authorize_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./authorize.service */
      2551);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      9895);

      var _AuthorizeGuard = /*#__PURE__*/function () {
        function _AuthorizeGuard(authorize, router) {
          _classCallCheck(this, _AuthorizeGuard);

          this.authorize = authorize;
          this.router = router;
        }

        _createClass(_AuthorizeGuard, [{
          key: "canActivate",
          value: function canActivate(_next, state) {
            var _this = this;

            return this.authorize.isAuthenticated().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(function (isAuthenticated) {
              return _this.handleAuthorization(isAuthenticated, state);
            }));
          }
        }, {
          key: "handleAuthorization",
          value: function handleAuthorization(isAuthenticated, state) {
            if (!isAuthenticated) {
              this.router.navigate(_api_authorization_constants__WEBPACK_IMPORTED_MODULE_0__.ApplicationPaths.LoginPathComponents, {
                queryParams: _defineProperty({}, _api_authorization_constants__WEBPACK_IMPORTED_MODULE_0__.QueryParameterNames.ReturnUrl, state.url)
              });
            }
          }
        }]);

        return _AuthorizeGuard;
      }();

      _AuthorizeGuard.ɵfac = function AuthorizeGuard_Factory(t) {
        return new (t || _AuthorizeGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_authorize_service__WEBPACK_IMPORTED_MODULE_1__.AuthorizeService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
      };

      _AuthorizeGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: _AuthorizeGuard,
        factory: _AuthorizeGuard.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    2551:
    /*!****************************************************!*\
      !*** ./src/api-authorization/authorize.service.ts ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthenticationResultStatus": function AuthenticationResultStatus() {
          return (
            /* binding */
            _AuthenticationResultStatus
          );
        },

        /* harmony export */
        "AuthorizeService": function AuthorizeService() {
          return (
            /* binding */
            _AuthorizeService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var oidc_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! oidc-client */
      7000);
      /* harmony import */


      var oidc_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(oidc_client__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      6215);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      9923);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs */
      9412);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      8002);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      5257);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      5435);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      8307);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs/operators */
      9773);
      /* harmony import */


      var _api_authorization_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./api-authorization.constants */
      2816);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
          });
        }

        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }

          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }

          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }

          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };

      var _AuthenticationResultStatus;

      (function (AuthenticationResultStatus) {
        AuthenticationResultStatus[AuthenticationResultStatus["Success"] = 0] = "Success";
        AuthenticationResultStatus[AuthenticationResultStatus["Redirect"] = 1] = "Redirect";
        AuthenticationResultStatus[AuthenticationResultStatus["Fail"] = 2] = "Fail";
      })(_AuthenticationResultStatus || (_AuthenticationResultStatus = {}));

      var _AuthorizeService = /*#__PURE__*/function () {
        function _AuthorizeService() {
          _classCallCheck(this, _AuthorizeService);

          // By default pop ups are disabled because they don't work properly on Edge.
          // If you want to enable pop up authentication simply set this flag to false.
          this.popUpDisabled = true;
          this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
        }

        _createClass(_AuthorizeService, [{
          key: "isAuthenticated",
          value: function isAuthenticated() {
            return this.getUser().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(function (u) {
              return !!u;
            }));
          }
        }, {
          key: "getUser",
          value: function getUser() {
            var _this2 = this;

            return (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.concat)(this.userSubject.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)(function (u) {
              return !!u;
            })), this.getUserFromStorage().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)(function (u) {
              return !!u;
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(function (u) {
              return _this2.userSubject.next(u);
            })), this.userSubject.asObservable());
          }
        }, {
          key: "getAccessToken",
          value: function getAccessToken() {
            var _this3 = this;

            return (0, rxjs__WEBPACK_IMPORTED_MODULE_8__.from)(this.ensureUserManagerInitialized()).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.mergeMap)(function () {
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_8__.from)(_this3.userManager.getUser());
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(function (user) {
              return user && user.access_token;
            }));
          } // We try to authenticate the user in three different ways:
          // 1) We try to see if we can authenticate the user silently. This happens
          //    when the user is already logged in on the IdP and is done using a hidden iframe
          //    on the client.
          // 2) We try to authenticate the user using a PopUp Window. This might fail if there is a
          //    Pop-Up blocker or the user has disabled PopUps.
          // 3) If the two methods above fail, we redirect the browser to the IdP to perform a traditional
          //    redirect flow.

        }, {
          key: "signIn",
          value: function signIn(state) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var user;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.ensureUserManagerInitialized();

                    case 2:
                      user = null;
                      _context.prev = 3;
                      _context.next = 6;
                      return this.userManager.signinSilent(this.createArguments());

                    case 6:
                      user = _context.sent;
                      this.userSubject.next(user.profile);
                      return _context.abrupt("return", this.success(state));

                    case 11:
                      _context.prev = 11;
                      _context.t0 = _context["catch"](3);
                      // User might not be authenticated, fallback to popup authentication
                      console.log('Silent authentication error: ', _context.t0);
                      _context.prev = 14;

                      if (!this.popUpDisabled) {
                        _context.next = 17;
                        break;
                      }

                      throw new Error('Popup disabled. Change \'authorize.service.ts:AuthorizeService.popupDisabled\' to false to enable it.');

                    case 17:
                      _context.next = 19;
                      return this.userManager.signinPopup(this.createArguments());

                    case 19:
                      user = _context.sent;
                      this.userSubject.next(user.profile);
                      return _context.abrupt("return", this.success(state));

                    case 24:
                      _context.prev = 24;
                      _context.t1 = _context["catch"](14);

                      if (!(_context.t1.message === 'Popup window closed')) {
                        _context.next = 30;
                        break;
                      }

                      return _context.abrupt("return", this.error('The user closed the window.'));

                    case 30:
                      if (!this.popUpDisabled) {
                        console.log('Popup authentication error: ', _context.t1);
                      }

                    case 31:
                      _context.prev = 31;
                      _context.next = 34;
                      return this.userManager.signinRedirect(this.createArguments(state));

                    case 34:
                      return _context.abrupt("return", this.redirect());

                    case 37:
                      _context.prev = 37;
                      _context.t2 = _context["catch"](31);
                      console.log('Redirect authentication error: ', _context.t2);
                      return _context.abrupt("return", this.error(_context.t2));

                    case 41:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this, [[3, 11], [14, 24], [31, 37]]);
            }));
          }
        }, {
          key: "completeSignIn",
          value: function completeSignIn(url) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var user;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.prev = 0;
                      _context2.next = 3;
                      return this.ensureUserManagerInitialized();

                    case 3:
                      _context2.next = 5;
                      return this.userManager.signinCallback(url);

                    case 5:
                      user = _context2.sent;
                      this.userSubject.next(user && user.profile);
                      return _context2.abrupt("return", this.success(user && user.state));

                    case 10:
                      _context2.prev = 10;
                      _context2.t0 = _context2["catch"](0);
                      console.log('There was an error signing in: ', _context2.t0);
                      return _context2.abrupt("return", this.error('There was an error signing in.'));

                    case 14:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this, [[0, 10]]);
            }));
          }
        }, {
          key: "signOut",
          value: function signOut(state) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.prev = 0;

                      if (!this.popUpDisabled) {
                        _context3.next = 3;
                        break;
                      }

                      throw new Error('Popup disabled. Change \'authorize.service.ts:AuthorizeService.popupDisabled\' to false to enable it.');

                    case 3:
                      _context3.next = 5;
                      return this.ensureUserManagerInitialized();

                    case 5:
                      _context3.next = 7;
                      return this.userManager.signoutPopup(this.createArguments());

                    case 7:
                      this.userSubject.next(null);
                      return _context3.abrupt("return", this.success(state));

                    case 11:
                      _context3.prev = 11;
                      _context3.t0 = _context3["catch"](0);
                      console.log('Popup signout error: ', _context3.t0);
                      _context3.prev = 14;
                      _context3.next = 17;
                      return this.userManager.signoutRedirect(this.createArguments(state));

                    case 17:
                      return _context3.abrupt("return", this.redirect());

                    case 20:
                      _context3.prev = 20;
                      _context3.t1 = _context3["catch"](14);
                      console.log('Redirect signout error: ', _context3.t0);
                      return _context3.abrupt("return", this.error(_context3.t1));

                    case 24:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this, [[0, 11], [14, 20]]);
            }));
          }
        }, {
          key: "completeSignOut",
          value: function completeSignOut(url) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var state;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.ensureUserManagerInitialized();

                    case 2:
                      _context4.prev = 2;
                      _context4.next = 5;
                      return this.userManager.signoutCallback(url);

                    case 5:
                      state = _context4.sent;
                      this.userSubject.next(null);
                      return _context4.abrupt("return", this.success(state && state.data));

                    case 10:
                      _context4.prev = 10;
                      _context4.t0 = _context4["catch"](2);
                      console.log("There was an error trying to log out '".concat(_context4.t0, "'."));
                      return _context4.abrupt("return", this.error(_context4.t0));

                    case 14:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this, [[2, 10]]);
            }));
          }
        }, {
          key: "createArguments",
          value: function createArguments(state) {
            return {
              useReplaceToNavigate: true,
              data: state
            };
          }
        }, {
          key: "error",
          value: function error(message) {
            return {
              status: _AuthenticationResultStatus.Fail,
              message: message
            };
          }
        }, {
          key: "success",
          value: function success(state) {
            return {
              status: _AuthenticationResultStatus.Success,
              state: state
            };
          }
        }, {
          key: "redirect",
          value: function redirect() {
            return {
              status: _AuthenticationResultStatus.Redirect
            };
          }
        }, {
          key: "ensureUserManagerInitialized",
          value: function ensureUserManagerInitialized() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this4 = this;

              var response, settings;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      if (!(this.userManager !== undefined)) {
                        _context6.next = 2;
                        break;
                      }

                      return _context6.abrupt("return");

                    case 2:
                      _context6.next = 4;
                      return fetch(_api_authorization_constants__WEBPACK_IMPORTED_MODULE_1__.ApplicationPaths.ApiAuthorizationClientConfigurationUrl);

                    case 4:
                      response = _context6.sent;

                      if (response.ok) {
                        _context6.next = 7;
                        break;
                      }

                      throw new Error("Could not load settings for '".concat(_api_authorization_constants__WEBPACK_IMPORTED_MODULE_1__.ApplicationName, "'"));

                    case 7:
                      _context6.next = 9;
                      return response.json();

                    case 9:
                      settings = _context6.sent;
                      settings.automaticSilentRenew = true;
                      settings.includeIdTokenInSilentRenew = true;
                      this.userManager = new oidc_client__WEBPACK_IMPORTED_MODULE_0__.UserManager(settings);
                      this.userManager.events.addUserSignedOut(function () {
                        return __awaiter(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                          return regeneratorRuntime.wrap(function _callee5$(_context5) {
                            while (1) {
                              switch (_context5.prev = _context5.next) {
                                case 0:
                                  _context5.next = 2;
                                  return this.userManager.removeUser();

                                case 2:
                                  this.userSubject.next(null);

                                case 3:
                                case "end":
                                  return _context5.stop();
                              }
                            }
                          }, _callee5, this);
                        }));
                      });

                    case 14:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "getUserFromStorage",
          value: function getUserFromStorage() {
            var _this5 = this;

            return (0, rxjs__WEBPACK_IMPORTED_MODULE_8__.from)(this.ensureUserManagerInitialized()).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.mergeMap)(function () {
              return _this5.userManager.getUser();
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(function (u) {
              return u && u.profile;
            }));
          }
        }]);

        return _AuthorizeService;
      }();

      _AuthorizeService.ɵfac = function AuthorizeService_Factory(t) {
        return new (t || _AuthorizeService)();
      };

      _AuthorizeService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({
        token: _AuthorizeService,
        factory: _AuthorizeService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    8040:
    /*!******************************************************************!*\
      !*** ./src/api-authorization/login-menu/login-menu.component.ts ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoginMenuComponent": function LoginMenuComponent() {
          return (
            /* binding */
            _LoginMenuComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      8002);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _authorize_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../authorize.service */
      2551);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      9895);

      var _c0 = function _c0() {
        return ["/authentication/profile"];
      };

      var _c1 = function _c1() {
        return ["/authentication/logout"];
      };

      var _c2 = function _c2() {
        return {
          local: true
        };
      };

      function LoginMenuComponent_ul_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Logout");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Hello ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 4, ctx_r0.userName), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c1))("state", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c2));
        }
      }

      var _c3 = function _c3() {
        return ["/authentication/register"];
      };

      var _c4 = function _c4() {
        return ["/authentication/login"];
      };

      function LoginMenuComponent_ul_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c4));
        }
      }

      var _LoginMenuComponent = /*#__PURE__*/function () {
        function _LoginMenuComponent(authorizeService) {
          _classCallCheck(this, _LoginMenuComponent);

          this.authorizeService = authorizeService;
        }

        _createClass(_LoginMenuComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.isAuthenticated = this.authorizeService.isAuthenticated();
            this.userName = this.authorizeService.getUser().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(function (u) {
              return u && u.name;
            }));
          }
        }]);

        return _LoginMenuComponent;
      }();

      _LoginMenuComponent.ɵfac = function LoginMenuComponent_Factory(t) {
        return new (t || _LoginMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_authorize_service__WEBPACK_IMPORTED_MODULE_0__.AuthorizeService));
      };

      _LoginMenuComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _LoginMenuComponent,
        selectors: [["app-login-menu"]],
        decls: 4,
        vars: 6,
        consts: [["class", "navbar-nav", 4, "ngIf"], [1, "navbar-nav"], [1, "nav-item"], ["title", "Manage", 1, "nav-link", "text-dark", 3, "routerLink"], ["title", "Logout", 1, "nav-link", "text-dark", 3, "routerLink", "state"], [1, "nav-link", "text-dark", 3, "routerLink"]],
        template: function LoginMenuComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, LoginMenuComponent_ul_0_Template, 8, 9, "ul", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LoginMenuComponent_ul_2_Template, 7, 4, "ul", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 2, ctx.isAuthenticated));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, ctx.isAuthenticated));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi1tZW51LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    8635:
    /*!********************************************************!*\
      !*** ./src/api-authorization/login/login.component.ts ***!
      \********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoginComponent": function LoginComponent() {
          return (
            /* binding */
            _LoginComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _authorize_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../authorize.service */
      2551);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      6215);
      /* harmony import */


      var _api_authorization_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../api-authorization.constants */
      2816);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      8583);

      var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
          });
        }

        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }

          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }

          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }

          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      }; // The main responsibility of this component is to handle the user's login process.
      // This is the starting point for the login process. Any component that needs to authenticate
      // a user can simply perform a redirect to this component with a returnUrl query parameter and
      // let the component perform the login and return back to the return url.


      var _LoginComponent = /*#__PURE__*/function () {
        function _LoginComponent(authorizeService, activatedRoute, router) {
          _classCallCheck(this, _LoginComponent);

          this.authorizeService = authorizeService;
          this.activatedRoute = activatedRoute;
          this.router = router;
          this.message = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
        }

        _createClass(_LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var action, message;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      action = this.activatedRoute.snapshot.url[1];
                      _context7.t0 = action.path;
                      _context7.next = _context7.t0 === _api_authorization_constants__WEBPACK_IMPORTED_MODULE_1__.LoginActions.Login ? 4 : _context7.t0 === _api_authorization_constants__WEBPACK_IMPORTED_MODULE_1__.LoginActions.LoginCallback ? 7 : _context7.t0 === _api_authorization_constants__WEBPACK_IMPORTED_MODULE_1__.LoginActions.LoginFailed ? 10 : _context7.t0 === _api_authorization_constants__WEBPACK_IMPORTED_MODULE_1__.LoginActions.Profile ? 13 : _context7.t0 === _api_authorization_constants__WEBPACK_IMPORTED_MODULE_1__.LoginActions.Register ? 15 : 17;
                      break;

                    case 4:
                      _context7.next = 6;
                      return this.login(this.getReturnUrl());

                    case 6:
                      return _context7.abrupt("break", 18);

                    case 7:
                      _context7.next = 9;
                      return this.processLoginCallback();

                    case 9:
                      return _context7.abrupt("break", 18);

                    case 10:
                      message = this.activatedRoute.snapshot.queryParamMap.get(_api_authorization_constants__WEBPACK_IMPORTED_MODULE_1__.QueryParameterNames.Message);
                      this.message.next(message);
                      return _context7.abrupt("break", 18);

                    case 13:
                      this.redirectToProfile();
                      return _context7.abrupt("break", 18);

                    case 15:
                      this.redirectToRegister();
                      return _context7.abrupt("break", 18);

                    case 17:
                      throw new Error("Invalid action '".concat(action, "'"));

                    case 18:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "login",
          value: function login(returnUrl) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var state, result;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      state = {
                        returnUrl: returnUrl
                      };
                      _context8.next = 3;
                      return this.authorizeService.signIn(state);

                    case 3:
                      result = _context8.sent;
                      this.message.next(undefined);
                      _context8.t0 = result.status;
                      _context8.next = _context8.t0 === _authorize_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationResultStatus.Redirect ? 8 : _context8.t0 === _authorize_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationResultStatus.Success ? 9 : _context8.t0 === _authorize_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationResultStatus.Fail ? 12 : 15;
                      break;

                    case 8:
                      return _context8.abrupt("break", 16);

                    case 9:
                      _context8.next = 11;
                      return this.navigateToReturnUrl(returnUrl);

                    case 11:
                      return _context8.abrupt("break", 16);

                    case 12:
                      _context8.next = 14;
                      return this.router.navigate(_api_authorization_constants__WEBPACK_IMPORTED_MODULE_1__.ApplicationPaths.LoginFailedPathComponents, {
                        queryParams: _defineProperty({}, _api_authorization_constants__WEBPACK_IMPORTED_MODULE_1__.QueryParameterNames.Message, result.message)
                      });

                    case 14:
                      return _context8.abrupt("break", 16);

                    case 15:
                      throw new Error("Invalid status result ".concat(result.status, "."));

                    case 16:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "processLoginCallback",
          value: function processLoginCallback() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var url, result;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      url = window.location.href;
                      _context9.next = 3;
                      return this.authorizeService.completeSignIn(url);

                    case 3:
                      result = _context9.sent;
                      _context9.t0 = result.status;
                      _context9.next = _context9.t0 === _authorize_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationResultStatus.Redirect ? 7 : _context9.t0 === _authorize_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationResultStatus.Success ? 8 : _context9.t0 === _authorize_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationResultStatus.Fail ? 11 : 13;
                      break;

                    case 7:
                      throw new Error('Should not redirect.');

                    case 8:
                      _context9.next = 10;
                      return this.navigateToReturnUrl(this.getReturnUrl(result.state));

                    case 10:
                      return _context9.abrupt("break", 13);

                    case 11:
                      this.message.next(result.message);
                      return _context9.abrupt("break", 13);

                    case 13:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "redirectToRegister",
          value: function redirectToRegister() {
            this.redirectToApiAuthorizationPath("".concat(_api_authorization_constants__WEBPACK_IMPORTED_MODULE_1__.ApplicationPaths.IdentityRegisterPath, "?returnUrl=").concat(encodeURI('/' + _api_authorization_constants__WEBPACK_IMPORTED_MODULE_1__.ApplicationPaths.Login)));
          }
        }, {
          key: "redirectToProfile",
          value: function redirectToProfile() {
            this.redirectToApiAuthorizationPath(_api_authorization_constants__WEBPACK_IMPORTED_MODULE_1__.ApplicationPaths.IdentityManagePath);
          }
        }, {
          key: "navigateToReturnUrl",
          value: function navigateToReturnUrl(returnUrl) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      _context10.next = 2;
                      return this.router.navigateByUrl(returnUrl, {
                        replaceUrl: true
                      });

                    case 2:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          }
        }, {
          key: "getReturnUrl",
          value: function getReturnUrl(state) {
            var fromQuery = this.activatedRoute.snapshot.queryParams.returnUrl; // If the url is comming from the query string, check that is either
            // a relative url or an absolute url

            if (fromQuery && !(fromQuery.startsWith("".concat(window.location.origin, "/")) || /\/[^\/].*/.test(fromQuery))) {
              // This is an extra check to prevent open redirects.
              throw new Error('Invalid return url. The return url needs to have the same origin as the current page.');
            }

            return state && state.returnUrl || fromQuery || _api_authorization_constants__WEBPACK_IMPORTED_MODULE_1__.ApplicationPaths.DefaultLoginRedirectPath;
          }
        }, {
          key: "redirectToApiAuthorizationPath",
          value: function redirectToApiAuthorizationPath(apiAuthorizationPath) {
            // It's important that we do a replace here so that when the user hits the back arrow on the
            // browser they get sent back to where it was on the app instead of to an endpoint on this
            // component.
            var redirectUrl = "".concat(window.location.origin).concat(apiAuthorizationPath);
            window.location.replace(redirectUrl);
          }
        }]);

        return _LoginComponent;
      }();

      _LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || _LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_authorize_service__WEBPACK_IMPORTED_MODULE_0__.AuthorizeService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
      };

      _LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _LoginComponent,
        selectors: [["app-login"]],
        decls: 3,
        vars: 3,
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, ctx.message));
          }
        },
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    6108:
    /*!**********************************************************!*\
      !*** ./src/api-authorization/logout/logout.component.ts ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LogoutComponent": function LogoutComponent() {
          return (
            /* binding */
            _LogoutComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _authorize_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../authorize.service */
      2551);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      6215);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      5257);
      /* harmony import */


      var _api_authorization_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../api-authorization.constants */
      2816);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      8583);

      var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
          });
        }

        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }

          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }

          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }

          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      }; // The main responsibility of this component is to handle the user's logout process.
      // This is the starting point for the logout process, which is usually initiated when a
      // user clicks on the logout button on the LoginMenu component.


      var _LogoutComponent = /*#__PURE__*/function () {
        function _LogoutComponent(authorizeService, activatedRoute, router) {
          _classCallCheck(this, _LogoutComponent);

          this.authorizeService = authorizeService;
          this.activatedRoute = activatedRoute;
          this.router = router;
          this.message = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
        }

        _createClass(_LogoutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              var action;
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      action = this.activatedRoute.snapshot.url[1];
                      _context11.t0 = action.path;
                      _context11.next = _context11.t0 === _api_authorization_constants__WEBPACK_IMPORTED_MODULE_1__.LogoutActions.Logout ? 4 : _context11.t0 === _api_authorization_constants__WEBPACK_IMPORTED_MODULE_1__.LogoutActions.LogoutCallback ? 11 : _context11.t0 === _api_authorization_constants__WEBPACK_IMPORTED_MODULE_1__.LogoutActions.LoggedOut ? 14 : 16;
                      break;

                    case 4:
                      if (!window.history.state.local) {
                        _context11.next = 9;
                        break;
                      }

                      _context11.next = 7;
                      return this.logout(this.getReturnUrl());

                    case 7:
                      _context11.next = 10;
                      break;

                    case 9:
                      // This prevents regular links to <app>/authentication/logout from triggering a logout
                      this.message.next('The logout was not initiated from within the page.');

                    case 10:
                      return _context11.abrupt("break", 17);

                    case 11:
                      _context11.next = 13;
                      return this.processLogoutCallback();

                    case 13:
                      return _context11.abrupt("break", 17);

                    case 14:
                      this.message.next('You successfully logged out!');
                      return _context11.abrupt("break", 17);

                    case 16:
                      throw new Error("Invalid action '".concat(action, "'"));

                    case 17:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));
          }
        }, {
          key: "logout",
          value: function logout(returnUrl) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              var state, isauthenticated, result;
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      state = {
                        returnUrl: returnUrl
                      };
                      _context12.next = 3;
                      return this.authorizeService.isAuthenticated().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1)).toPromise();

                    case 3:
                      isauthenticated = _context12.sent;

                      if (!isauthenticated) {
                        _context12.next = 20;
                        break;
                      }

                      _context12.next = 7;
                      return this.authorizeService.signOut(state);

                    case 7:
                      result = _context12.sent;
                      _context12.t0 = result.status;
                      _context12.next = _context12.t0 === _authorize_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationResultStatus.Redirect ? 11 : _context12.t0 === _authorize_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationResultStatus.Success ? 12 : _context12.t0 === _authorize_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationResultStatus.Fail ? 15 : 17;
                      break;

                    case 11:
                      return _context12.abrupt("break", 18);

                    case 12:
                      _context12.next = 14;
                      return this.navigateToReturnUrl(returnUrl);

                    case 14:
                      return _context12.abrupt("break", 18);

                    case 15:
                      this.message.next(result.message);
                      return _context12.abrupt("break", 18);

                    case 17:
                      throw new Error('Invalid authentication result status.');

                    case 18:
                      _context12.next = 21;
                      break;

                    case 20:
                      this.message.next('You successfully logged out!');

                    case 21:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));
          }
        }, {
          key: "processLogoutCallback",
          value: function processLogoutCallback() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              var url, result;
              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      url = window.location.href;
                      _context13.next = 3;
                      return this.authorizeService.completeSignOut(url);

                    case 3:
                      result = _context13.sent;
                      _context13.t0 = result.status;
                      _context13.next = _context13.t0 === _authorize_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationResultStatus.Redirect ? 7 : _context13.t0 === _authorize_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationResultStatus.Success ? 8 : _context13.t0 === _authorize_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationResultStatus.Fail ? 11 : 13;
                      break;

                    case 7:
                      throw new Error('Should not redirect.');

                    case 8:
                      _context13.next = 10;
                      return this.navigateToReturnUrl(this.getReturnUrl(result.state));

                    case 10:
                      return _context13.abrupt("break", 14);

                    case 11:
                      this.message.next(result.message);
                      return _context13.abrupt("break", 14);

                    case 13:
                      throw new Error('Invalid authentication result status.');

                    case 14:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this);
            }));
          }
        }, {
          key: "navigateToReturnUrl",
          value: function navigateToReturnUrl(returnUrl) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      _context14.next = 2;
                      return this.router.navigateByUrl(returnUrl, {
                        replaceUrl: true
                      });

                    case 2:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));
          }
        }, {
          key: "getReturnUrl",
          value: function getReturnUrl(state) {
            var fromQuery = this.activatedRoute.snapshot.queryParams.returnUrl; // If the url is comming from the query string, check that is either
            // a relative url or an absolute url

            if (fromQuery && !(fromQuery.startsWith("".concat(window.location.origin, "/")) || /\/[^\/].*/.test(fromQuery))) {
              // This is an extra check to prevent open redirects.
              throw new Error('Invalid return url. The return url needs to have the same origin as the current page.');
            }

            return state && state.returnUrl || fromQuery || _api_authorization_constants__WEBPACK_IMPORTED_MODULE_1__.ApplicationPaths.LoggedOut;
          }
        }]);

        return _LogoutComponent;
      }();

      _LogoutComponent.ɵfac = function LogoutComponent_Factory(t) {
        return new (t || _LogoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_authorize_service__WEBPACK_IMPORTED_MODULE_0__.AuthorizeService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
      };

      _LogoutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _LogoutComponent,
        selectors: [["app-logout"]],
        decls: 3,
        vars: 3,
        template: function LogoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, ctx.message));
          }
        },
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dvdXQuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    158:
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "routes": function routes() {
          return (
            /* binding */
            _routes
          );
        },

        /* harmony export */
        "AppRoutingModule": function AppRoutingModule() {
          return (
            /* binding */
            _AppRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var src_api_authorization_authorize_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/api-authorization/authorize.guard */
      6784);
      /* harmony import */


      var _bible_bible_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./bible/bible.component */
      2005);
      /* harmony import */


      var _counter_counter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./counter/counter.component */
      5693);
      /* harmony import */


      var _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./fetch-data/fetch-data.component */
      9339);
      /* harmony import */


      var _shared_component_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./shared/component/not-found/not-found.component */
      3248);
      /* harmony import */


      var _todo_todo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./todo/todo.component */
      3805);
      /* harmony import */


      var _token_token_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./token/token.component */
      4865);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _routes = [{
        path: 'counter',
        component: _counter_counter_component__WEBPACK_IMPORTED_MODULE_2__.CounterComponent
      }, {
        path: 'fetch-data',
        component: _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_3__.FetchDataComponent
      }, {
        path: '',
        component: _bible_bible_component__WEBPACK_IMPORTED_MODULE_1__.BibleComponent,
        pathMatch: 'full'
      }, {
        path: 'todo',
        component: _todo_todo_component__WEBPACK_IMPORTED_MODULE_5__.TodoComponent,
        canActivate: [src_api_authorization_authorize_guard__WEBPACK_IMPORTED_MODULE_0__.AuthorizeGuard]
      }, {
        path: 'token',
        component: _token_token_component__WEBPACK_IMPORTED_MODULE_6__.TokenComponent,
        canActivate: [src_api_authorization_authorize_guard__WEBPACK_IMPORTED_MODULE_0__.AuthorizeGuard]
      }, {
        path: 'bible',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_bible_bible_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./bible/bible.module */
          9854)).then(function (m) {
            return m.BibleModule;
          });
        }
      }, {
        path: 'product',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e("src_app_product_product_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./product/product.module */
          1589)).then(function (m) {
            return m.ProductModule;
          });
        }
      }, {
        path: 'news',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_news_news_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./news/news.module */
          1926)).then(function (m) {
            return m.NewsModule;
          });
        }
      }, {
        path: 'contacts',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e("src_app_contacts_contacts_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./contacts/contacts.module */
          6808)).then(function (m) {
            return m.ContactsModule;
          });
        }
      }, {
        path: '**',
        component: _shared_component_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__.NotFoundComponent
      }];

      var _AppRoutingModule = function _AppRoutingModule() {
        _classCallCheck(this, _AppRoutingModule);
      };

      _AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || _AppRoutingModule)();
      };

      _AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
        type: _AppRoutingModule
      });
      _AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forRoot(_routes, {
          relativeLinkResolution: 'legacy'
        })], _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](_AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    5041:
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _shared_http_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./shared/http-client.service */
      6057);
      /* harmony import */


      var _shared_push_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./shared/push-notification.service */
      7407);
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-toastr */
      9344);
      /* harmony import */


      var _shared_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./shared/notification.service */
      7404);
      /* harmony import */


      var _shared_manage_http_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./shared/manage-http-request.service */
      3594);
      /* harmony import */


      var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./nav-menu/nav-menu.component */
      6499);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      9895);

      function AppComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function AppComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", data_r2, " ");
        }
      }

      var _AppComponent = /*#__PURE__*/function () {
        function _AppComponent(httpClient, pushNotification, ts, notificationService, httpRequesthandler) {
          _classCallCheck(this, _AppComponent);

          this.httpClient = httpClient;
          this.pushNotification = pushNotification;
          this.ts = ts;
          this.notificationService = notificationService;
          this.httpRequesthandler = httpRequesthandler;
          this.title = "app";
          this.loadData = [];
          this.isLoading = false;
        }

        _createClass(_AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            // this.loadUsers().then(res =>{
            //   //console.log(res);
            // })
            this.httpRequesthandler.httpLoader.subscribe(function (res) {
              _this6.isLoading = res;
            }); //this.httpClient.get({url:"https://jsonplaceholder.typicode.com/photos"}).subscribe();
          }
        }]);

        return _AppComponent;
      }();

      _AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || _AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_http_client_service__WEBPACK_IMPORTED_MODULE_0__.HttpClientService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_push_notification_service__WEBPACK_IMPORTED_MODULE_1__.PushNotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_notification_service__WEBPACK_IMPORTED_MODULE_2__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_manage_http_request_service__WEBPACK_IMPORTED_MODULE_3__.ManageHttpRequestService));
      };

      _AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: _AppComponent,
        selectors: [["app-root"]],
        decls: 6,
        vars: 2,
        consts: [[1, "container"], ["class", "text-center text-info fixed-top", 4, "ngIf"], ["class", "", 4, "ngFor", "ngForOf"], [1, "text-center", "text-info", "fixed-top"], ["role", "status", 1, "spinner-border"], [1, ""], ["role", "alert", 1, "alert", "alert-success"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "body");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-nav-menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, AppComponent_div_3_Template, 2, 0, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, AppComponent_div_4_Template, 3, 1, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.loadData);
          }
        },
        directives: [_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_4__.NavMenuComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterOutlet],
        encapsulation: 2
      });
      /***/
    },

    /***/
    6747:
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/platform-browser */
      9075);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/common/http */
      1841);
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      4163);
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ngx-toastr */
      9344);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app.component */
      5041);
      /* harmony import */


      var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./nav-menu/nav-menu.component */
      6499);
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home/home.component */
      5067);
      /* harmony import */


      var _counter_counter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./counter/counter.component */
      5693);
      /* harmony import */


      var _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./fetch-data/fetch-data.component */
      9339);
      /* harmony import */


      var _todo_todo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./todo/todo.component */
      3805);
      /* harmony import */


      var src_api_authorization_api_authorization_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/api-authorization/api-authorization.module */
      985);
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      5835);
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      3301);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app-routing.module */
      158);
      /* harmony import */


      var _token_token_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./token/token.component */
      4865);
      /* harmony import */


      var _shared_interceptor_http_request_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./shared/interceptor/http-request.interceptor */
      9675);
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./shared/shared.module */
      4466);
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @ngrx/store */
      6710);
      /* harmony import */


      var _store_app_reducer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./store/app.reducer */
      5754);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _AppModule = function _AppModule() {
        _classCallCheck(this, _AppModule);
      };

      _AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || _AppModule)();
      };

      _AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({
        type: _AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
      });
      _AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({
        providers: [//{ provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true },
        {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HTTP_INTERCEPTORS,
          useClass: _shared_interceptor_http_request_interceptor__WEBPACK_IMPORTED_MODULE_10__.HttpRequestInterceptor,
          multi: true
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.BrowserModule.withServerTransition({
          appId: 'ng-cli-universal'
        }), _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_16__.FontAwesomeModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__.SharedModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule, src_api_authorization_api_authorization_module__WEBPACK_IMPORTED_MODULE_6__.ApiAuthorizationModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_8__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__.BrowserAnimationsModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_19__.ToastrModule.forRoot({
          timeOut: 1000 * 30,
          enableHtml: true,
          positionClass: 'toast-top-right',
          //preventDuplicates: true,
          progressBar: true
        }), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__.ModalModule.forRoot(), _ngrx_store__WEBPACK_IMPORTED_MODULE_20__.StoreModule.forRoot(_store_app_reducer__WEBPACK_IMPORTED_MODULE_12__.appReducer)]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](_AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_1__.NavMenuComponent, _home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent, _counter_counter_component__WEBPACK_IMPORTED_MODULE_3__.CounterComponent, _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_4__.FetchDataComponent, _todo_todo_component__WEBPACK_IMPORTED_MODULE_5__.TodoComponent, _token_token_component__WEBPACK_IMPORTED_MODULE_9__.TokenComponent],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.BrowserModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_16__.FontAwesomeModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__.SharedModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule, src_api_authorization_api_authorization_module__WEBPACK_IMPORTED_MODULE_6__.ApiAuthorizationModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_8__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__.BrowserAnimationsModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_19__.ToastrModule, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__.ModalModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_20__.StoreRootModule]
        });
      })();
      /***/

    },

    /***/
    3124:
    /*!**************************************************************************!*\
      !*** ./src/app/bible/bible-verse-detail/bible-verse-detail.component.ts ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BibleVerseDetailComponent": function BibleVerseDetailComponent() {
          return (
            /* binding */
            _BibleVerseDetailComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _BibleVerseDetailComponent = /*#__PURE__*/function () {
        function _BibleVerseDetailComponent() {
          _classCallCheck(this, _BibleVerseDetailComponent);
        }

        _createClass(_BibleVerseDetailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _BibleVerseDetailComponent;
      }();

      _BibleVerseDetailComponent.ɵfac = function BibleVerseDetailComponent_Factory(t) {
        return new (t || _BibleVerseDetailComponent)();
      };

      _BibleVerseDetailComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _BibleVerseDetailComponent,
        selectors: [["app-bible-verse-detail"]],
        decls: 6,
        vars: 4,
        consts: [[1, "card-body"], [1, "card-text"], [1, "card-title"]],
        template: function BibleVerseDetailComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.verse.Verse);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", ctx.book, " ", ctx.chapter, " : ", ctx.verseNumber, "");
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiaWJsZS12ZXJzZS1kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    2005:
    /*!******************************************!*\
      !*** ./src/app/bible/bible.component.ts ***!
      \******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BibleComponent": function BibleComponent() {
          return (
            /* binding */
            _BibleComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _bible_verse_detail_bible_verse_detail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./bible-verse-detail/bible-verse-detail.component */
      3124);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _service_bible_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../service/bible.service */
      9826);
      /* harmony import */


      var _service_bible_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../service/bible-store.service */
      8612);
      /* harmony import */


      var _service_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../service/notification.service */
      7320);
      /* harmony import */


      var _shared_push_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../shared/push-notification.service */
      7407);
      /* harmony import */


      var _shared_audio_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../shared/audio.service */
      8784);
      /* harmony import */


      var _shared_cache_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../shared/cache.service */
      133);
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      3301);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      8583);

      function BibleComponent_option_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var book_r4 = ctx.$implicit;
          var i_r5 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("value", i_r5);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", book_r4, " ");
        }
      }

      function BibleComponent_option_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var languages_r6 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", languages_r6)("selected", ctx_r2.selectedbibleLanguage);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", languages_r6, " ");
        }
      }

      function BibleComponent_div_21_button_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BibleComponent_div_21_button_1_Template_button_click_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r12);

            var i_r10 = restoredCtx.index;
            var verse_r9 = restoredCtx.$implicit;

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);

            return ctx_r11.onVerse(ctx_r11.books[ctx_r11.book], ctx_r11.chapter, i_r10 + 1, verse_r9);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var verse_r9 = ctx.$implicit;
          var i_r10 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", i_r10 + 1, " : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", verse_r9.Verse, " ");
        }
      }

      function BibleComponent_div_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, BibleComponent_div_21_button_1_Template, 4, 2, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r3.bibleChapter.Verse);
        }
      }

      var _BibleComponent = /*#__PURE__*/function () {
        function _BibleComponent(bibleService, bibleStoreService, notificationService, pushNotificationsService, audioService, cacheService, bsModalService) {
          _classCallCheck(this, _BibleComponent);

          this.bibleService = bibleService;
          this.bibleStoreService = bibleStoreService;
          this.notificationService = notificationService;
          this.pushNotificationsService = pushNotificationsService;
          this.audioService = audioService;
          this.cacheService = cacheService;
          this.bsModalService = bsModalService;
          this.book = 0;
          this.chapter = 0;
          this.verses = 0;
          this.bibleLanguages = [];
          this.selectedbibleBook = "0";
          this.selectedbibleChapter = "1";
          this.selectedbibleLanguage = "-1";
          this.books = ["Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy", "Joshua", "Judges", "Ruth", "1 Samuel", "2 Samuel", "1 Kings", "2 Kings", "1 Chronicles", "2 Chronicles", "Ezra", "Nehemiah", "Esther", "Job", "Psalm", "Proverbs", "Ecclesiastes", "Song of Solomon", "Isaiah", "Jeremiah", "Lamentations", "Ezekiel", "Daniel", "Hosea", "Joel", "Amos", "Obadiah", "Jonah", "Micah", "Nahum", "Habakkuk", "Zephaniah", "Haggai", "Zechariah", "Malachi", "Matthew", "Mark", "Luke", "John", "Acts", "Romans", "1 Corinthians", "2 Corinthians", "Galatians", "Ephesians", "Philippians", "Colossians", "1 Thessalonians", "2 Thessalonians", "1 Timothy", "2 Timothy", "Titus", "Philemon", "Hebrews", "James", "1 Peter", "2 Peter", "1 John", "2 John", "3 John", "Jude", "Revelation"];
          this.pushNotificationsService.requestPermission();
        }

        _createClass(_BibleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.bibleLanguages = this.bibleService.bibleLanguages;
            var hasSelectedBible = !!this.cacheService.load("selectedBible");

            if (!hasSelectedBible) {
              this.cacheService.save({
                key: "selectedBible",
                data: {
                  Book: 0,
                  Chapter: 1,
                  Language: "english"
                }
              });
            }

            var selectedBible = this.cacheService.load("selectedBible");

            if (selectedBible) {
              this.bibleService.BibleLanguage = selectedBible.Language;
              this.selectedbibleLanguage = selectedBible.Language;
              this.selectedbibleBook = selectedBible.Book;
              this.selectedbibleChapter = selectedBible.Chapter;
            }

            this.book = +this.selectedbibleBook;
            this.chapter = +this.selectedbibleChapter;
            this.getSelectLanguageBible();
          }
        }, {
          key: "getSelectLanguageBible",
          value: function getSelectLanguageBible() {
            var _this7 = this;

            var selectedBible = this.cacheService.load("selectedBible");
            this.bibleService.BibleLanguage = selectedBible.Language;
            this.bibleService.getBible().subscribe(function (res) {
              _this7.bibleData = res;

              _this7.getSelectedBible();
            });
          }
        }, {
          key: "getSelectedBible",
          value: function getSelectedBible() {
            var _a;

            this.bibleChapter = (_a = this.bibleData.Book[this.book]) === null || _a === void 0 ? void 0 : _a.Chapter[this.chapter - 1];
          }
        }, {
          key: "onbibleLanguagesChangeEvent",
          value: function onbibleLanguagesChangeEvent(form) {
            this.cacheService.save({
              key: "selectedBible",
              data: form.value
            });
            this.book = +form.value.Book;
            this.chapter = +form.value.Chapter;
            this.getSelectLanguageBible();
          }
        }, {
          key: "onChangeEvent",
          value: function onChangeEvent(form) {
            this.cacheService.save({
              key: "selectedBible",
              data: form.value
            });
            this.book = +form.value.Book;
            this.chapter = +form.value.Chapter;
            this.getSelectedBible();
          }
        }, {
          key: "onVerse",
          value: function onVerse(book, chapter, verseNumber, verse) {
            this.bsModalService.show(_bible_verse_detail_bible_verse_detail_component__WEBPACK_IMPORTED_MODULE_0__.BibleVerseDetailComponent, {
              initialState: {
                book: book,
                chapter: chapter,
                verseNumber: verseNumber,
                verse: verse
              },
              animated: true,
              "class": "modal-lg"
            });
          }
        }]);

        return _BibleComponent;
      }();

      _BibleComponent.ɵfac = function BibleComponent_Factory(t) {
        return new (t || _BibleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_service_bible_service__WEBPACK_IMPORTED_MODULE_1__.BibleService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_service_bible_store_service__WEBPACK_IMPORTED_MODULE_2__.BibleStoreService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_service_notification_service__WEBPACK_IMPORTED_MODULE_3__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_push_notification_service__WEBPACK_IMPORTED_MODULE_4__.PushNotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_audio_service__WEBPACK_IMPORTED_MODULE_5__.AudioService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_cache_service__WEBPACK_IMPORTED_MODULE_6__.CacheService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__.BsModalService));
      };

      _BibleComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
        type: _BibleComponent,
        selectors: [["app-bible"]],
        decls: 22,
        vars: 6,
        consts: [[1, "list-group", "mb-5"], [1, "list-group-item", "list-group-item-action", "active", "sticky-top"], ["form", "ngForm"], [1, "row"], [1, "col"], ["name", "Book", 1, "form-control", 3, "ngModel", "change"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "number", "placeholder", "Chapter", "name", "Chapter", "min", "1", "max", "150", 1, "form-control", 3, "ngModel", "change"], ["name", "Language", 1, "form-control", "text-capitalize", 3, "ngModel", "change"], ["value", "-1"], [3, "value", "selected", 4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "value"], [3, "value", "selected"], ["type", "button", "class", "list-group-item list-group-item-action card-shadow", 3, "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "list-group-item", "list-group-item-action", "card-shadow", 3, "click"]],
        template: function BibleComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "form", null, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "Book");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "select", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function BibleComponent_Template_select_change_8_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r13);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](3);

              return ctx.onChangeEvent(_r0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, BibleComponent_option_9_Template, 2, 2, "option", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "Chapter");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function BibleComponent_Template_input_change_13_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r13);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](3);

              return ctx.onChangeEvent(_r0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, "Language");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "select", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function BibleComponent_Template_select_change_17_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r13);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](3);

              return ctx.onbibleLanguagesChangeEvent(_r0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "option", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, "--select--");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](20, BibleComponent_option_20_Template, 2, 3, "option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, BibleComponent_div_21_Template, 2, 1, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.selectedbibleBook);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.books);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.selectedbibleChapter);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.selectedbibleLanguage);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.bibleLanguages);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.bibleChapter);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiaWJsZS5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    5693:
    /*!**********************************************!*\
      !*** ./src/app/counter/counter.component.ts ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CounterComponent": function CounterComponent() {
          return (
            /* binding */
            _CounterComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _CounterComponent = /*#__PURE__*/function () {
        function _CounterComponent() {
          _classCallCheck(this, _CounterComponent);

          this.currentCount = 0;
        }

        _createClass(_CounterComponent, [{
          key: "incrementCounter",
          value: function incrementCounter() {
            this.currentCount++;
          }
        }]);

        return _CounterComponent;
      }();

      _CounterComponent.ɵfac = function CounterComponent_Factory(t) {
        return new (t || _CounterComponent)();
      };

      _CounterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _CounterComponent,
        selectors: [["app-counter-component"]],
        decls: 10,
        vars: 1,
        consts: [["aria-live", "polite"], [1, "btn", "btn-primary", 3, "click"]],
        template: function CounterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Counter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "This is a simple example of an Angular component.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Current count: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CounterComponent_Template_button_click_8_listener() {
              return ctx.incrementCounter();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Increment");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentCount);
          }
        },
        encapsulation: 2
      });
      /***/
    },

    /***/
    9339:
    /*!****************************************************!*\
      !*** ./src/app/fetch-data/fetch-data.component.ts ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FetchDataComponent": function FetchDataComponent() {
          return (
            /* binding */
            _FetchDataComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _web_api_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../web-api-client */
      814);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      8583);

      function FetchDataComponent_p_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "em");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Loading...");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function FetchDataComponent_table_5_tr_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var forecast_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](forecast_r3.date);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](forecast_r3.temperatureC);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](forecast_r3.temperatureF);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](forecast_r3.summary);
        }
      }

      function FetchDataComponent_table_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Temp. (C)");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Temp. (F)");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Summary");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, FetchDataComponent_table_5_tr_12_Template, 9, 4, "tr", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.forecasts);
        }
      }

      var _FetchDataComponent = function _FetchDataComponent(client) {
        var _this8 = this;

        _classCallCheck(this, _FetchDataComponent);

        this.client = client;
        client.get().subscribe(function (result) {
          _this8.forecasts = result;
        }, function (error) {
          return console.error(error);
        });
      };

      _FetchDataComponent.ɵfac = function FetchDataComponent_Factory(t) {
        return new (t || _FetchDataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_web_api_client__WEBPACK_IMPORTED_MODULE_0__.WeatherForecastClient));
      };

      _FetchDataComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _FetchDataComponent,
        selectors: [["app-fetch-data"]],
        decls: 6,
        vars: 2,
        consts: [["id", "tableLabel"], [4, "ngIf"], ["class", "table table-striped", "aria-labelledby", "tableLabel", 4, "ngIf"], ["aria-labelledby", "tableLabel", 1, "table", "table-striped"], [4, "ngFor", "ngForOf"]],
        template: function FetchDataComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Weather forecast");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "This component demonstrates fetching data from the server.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, FetchDataComponent_p_4_Template, 3, 0, "p", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, FetchDataComponent_table_5_Template, 13, 1, "table", 2);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.forecasts);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.forecasts);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf],
        encapsulation: 2
      });
      /***/
    },

    /***/
    5067:
    /*!****************************************!*\
      !*** ./src/app/home/home.component.ts ***!
      \****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomeComponent": function HomeComponent() {
          return (
            /* binding */
            _HomeComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _HomeComponent = function _HomeComponent() {
        _classCallCheck(this, _HomeComponent);
      };

      _HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || _HomeComponent)();
      };

      _HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _HomeComponent,
        selectors: [["app-home"]],
        decls: 67,
        vars: 0,
        consts: [["href", "https://get.asp.net/"], ["href", "https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx"], ["href", "https://angular.io/"], ["href", "http://www.typescriptlang.org/"], ["href", "http://getbootstrap.com/"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Hello, world!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Welcome to your new single-page application, built with:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "ASP.NET Core");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "C#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " for cross-platform server-side code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Angular");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "TypeScript");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " for client-side code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Bootstrap");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " for layout and styling");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "To help you get started, we've also set up:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Client-side navigation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, ". For example, click ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "em");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Counter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " then ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "em");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Back");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " to return here.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Angular CLI integration");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, ". In development mode, there's no need to run ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "ng serve");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, ". It runs in the background automatically, so your client-side resources are dynamically built on demand and the page refreshes when you modify any file.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Efficient production builds");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, ". In production mode, development-time features are disabled, and your ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "dotnet publish");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " configuration automatically invokes ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "ng build");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " to produce minified, ahead-of-time compiled JavaScript files.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "The ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "ClientApp");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " subdirectory is a standard Angular CLI application. If you open a command prompt in that directory, you can run any ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "ng");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " command (e.g., ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "ng test");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "), or use ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "npm");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " to install extra packages into it.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        encapsulation: 2
      });
      /***/
    },

    /***/
    6499:
    /*!************************************************!*\
      !*** ./src/app/nav-menu/nav-menu.component.ts ***!
      \************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NavMenuComponent": function NavMenuComponent() {
          return (
            /* binding */
            _NavMenuComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      8583);

      var _c0 = function _c0() {
        return ["/"];
      };

      var _c1 = function _c1(a0) {
        return {
          show: a0
        };
      };

      var _c2 = function _c2() {
        return ["link-active"];
      };

      var _c3 = function _c3() {
        return {
          exact: true
        };
      };

      var _c4 = function _c4() {
        return ["/bible"];
      };

      var _NavMenuComponent = /*#__PURE__*/function () {
        function _NavMenuComponent() {
          _classCallCheck(this, _NavMenuComponent);

          this.isExpanded = false;
        }

        _createClass(_NavMenuComponent, [{
          key: "collapse",
          value: function collapse() {
            this.isExpanded = false;
          }
        }, {
          key: "toggle",
          value: function toggle() {
            this.isExpanded = !this.isExpanded;
          }
        }]);

        return _NavMenuComponent;
      }();

      _NavMenuComponent.ɵfac = function NavMenuComponent_Factory(t) {
        return new (t || _NavMenuComponent)();
      };

      _NavMenuComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _NavMenuComponent,
        selectors: [["app-nav-menu"]],
        decls: 16,
        vars: 14,
        consts: [[1, "navbar", "navbar-expand-sm", "navbar-toggleable-sm", "navbar-light", "border-bottom", "box-shadow", "mb-3"], [1, "container"], [1, "navbar-brand", 3, "routerLink"], [1, "text-uppercase"], ["type", "button", "data-toggle", "collapse", "data-target", ".navbar-collapse", "aria-label", "Toggle navigation", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], [1, "navbar-collapse", "collapse", "d-sm-inline-flex", "flex-sm-row-reverse", 3, "ngClass"], [1, "navbar-nav", "flex-grow"], [1, "nav-item", 3, "routerLinkActive", "routerLinkActiveOptions"], [1, "nav-link", "text-dark", 3, "routerLink"], [1, "nav-item"]],
        template: function NavMenuComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Bible");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavMenuComponent_Template_button_click_6_listener() {
              return ctx.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Bible");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", ctx.isExpanded);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c1, ctx.isExpanded));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c2))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c3));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c4));
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive],
        styles: ["a.navbar-brand[_ngcontent-%COMP%] {\n  white-space: normal;\n  text-align: center;\n  word-break: break-all;\n}\n\nhtml[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n@media (min-width: 768px) {\n  html[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n\n.box-shadow[_ngcontent-%COMP%] {\n  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.05);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBQ0E7RUFDRTtJQUNFLGVBQUE7RUFFRjtBQUNGOztBQUNBO0VBQ0UsaURBQUE7QUFDRiIsImZpbGUiOiJuYXYtbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImEubmF2YmFyLWJyYW5kIHtcclxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbn1cclxuXHJcbmh0bWwge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICBodG1sIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbn1cclxuXHJcbi5ib3gtc2hhZG93IHtcclxuICBib3gtc2hhZG93OiAwIC4yNXJlbSAuNzVyZW0gcmdiYSgwLCAwLCAwLCAuMDUpO1xyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    7672:
    /*!*************************************************!*\
      !*** ./src/app/product/store/product.action.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ADD_PRODUCT": function ADD_PRODUCT() {
          return (
            /* binding */
            _ADD_PRODUCT
          );
        },

        /* harmony export */
        "ADD_PRODUCTS": function ADD_PRODUCTS() {
          return (
            /* binding */
            _ADD_PRODUCTS
          );
        },

        /* harmony export */
        "UPDATE_PRODUCT": function UPDATE_PRODUCT() {
          return (
            /* binding */
            _UPDATE_PRODUCT
          );
        },

        /* harmony export */
        "DELETE_PRODUCT": function DELETE_PRODUCT() {
          return (
            /* binding */
            _DELETE_PRODUCT
          );
        },

        /* harmony export */
        "AddProduct": function AddProduct() {
          return (
            /* binding */
            _AddProduct
          );
        },

        /* harmony export */
        "AddProducts": function AddProducts() {
          return (
            /* binding */
            _AddProducts
          );
        },

        /* harmony export */
        "UpdateProduct": function UpdateProduct() {
          return (
            /* binding */
            _UpdateProduct
          );
        },

        /* harmony export */
        "DeleteProduct": function DeleteProduct() {
          return (
            /* binding */
            _DeleteProduct
          );
        }
        /* harmony export */

      });

      var _ADD_PRODUCT = "ADD_PRODUCT";
      var _ADD_PRODUCTS = "ADD_PRODUCTS";
      var _UPDATE_PRODUCT = "UPDATE_PRODUCT";
      var _DELETE_PRODUCT = "DELETE_PRODUCT";

      var _AddProduct = function _AddProduct(payload) {
        _classCallCheck(this, _AddProduct);

        this.payload = payload;
        this.type = _ADD_PRODUCT;
      };

      var _AddProducts = function _AddProducts(payload) {
        _classCallCheck(this, _AddProducts);

        this.payload = payload;
        this.type = _ADD_PRODUCTS;
      };

      var _UpdateProduct = function _UpdateProduct(payload) {
        _classCallCheck(this, _UpdateProduct);

        this.payload = payload;
        this.type = _UPDATE_PRODUCT;
      };

      var _DeleteProduct = function _DeleteProduct(payload) {
        _classCallCheck(this, _DeleteProduct);

        this.payload = payload;
        this.type = _DELETE_PRODUCT;
      };
      /***/

    },

    /***/
    5559:
    /*!**************************************************!*\
      !*** ./src/app/product/store/product.reducer.ts ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "productReducer": function productReducer() {
          return (
            /* binding */
            _productReducer
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _product_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./product.action */
      7672); //step 2 create initial state of the store


      var initialState = {
        products: [{
          id: "1",
          address: "New Add",
          model: "mode",
          name: "name",
          number: " number"
        }, {
          id: "2",
          address: "New Add",
          model: "mode",
          name: "name",
          number: " number"
        }]
      }; //step 3 create reducer of the store

      function _productReducer() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
          case _product_action__WEBPACK_IMPORTED_MODULE_0__.ADD_PRODUCT:
            return Object.assign(Object.assign({}, state), {
              products: [].concat(_toConsumableArray(state.products), [action.payload])
            });

          case _product_action__WEBPACK_IMPORTED_MODULE_0__.ADD_PRODUCTS:
            return Object.assign(Object.assign({}, state), {
              products: [].concat(_toConsumableArray(state.products), _toConsumableArray(action.payload))
            });

          case _product_action__WEBPACK_IMPORTED_MODULE_0__.UPDATE_PRODUCT:
            var product = state.products[action.payload.index];
            var updateProuct = Object.assign(Object.assign({}, product), action.payload.product);

            var updateProucts = _toConsumableArray(state.products);

            updateProucts[action.payload.index] = updateProuct;
            return Object.assign(Object.assign({}, state), {
              products: []
            });

          case _product_action__WEBPACK_IMPORTED_MODULE_0__.DELETE_PRODUCT:
            return Object.assign(Object.assign({}, state), {
              products: state.products.filter(function (x, index) {
                return index !== action.payload;
              })
            });

          default:
            return state;
        }
      }
      /***/

    },

    /***/
    8612:
    /*!************************************************!*\
      !*** ./src/app/service/bible-store.service.ts ***!
      \************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BibleStoreService": function BibleStoreService() {
          return (
            /* binding */
            _BibleStoreService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      6215);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _BibleStoreService = /*#__PURE__*/function () {
        function _BibleStoreService() {
          _classCallCheck(this, _BibleStoreService);

          // Make _puppiesSource private so it's not accessible from the outside, 
          // expose it as puppies$ observable (read-only) instead.
          // Write to _puppiesSource only through specified store methods below.
          this._puppiesSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]); // Exposed observable (read-only).

          this.puppies$ = this._puppiesSource.asObservable();
        } // Get last value without subscribing to the puppies$ observable (synchronously).


        _createClass(_BibleStoreService, [{
          key: "getPuppies",
          value: function getPuppies() {
            return this._puppiesSource.getValue();
          }
        }, {
          key: "_setPuppies",
          value: function _setPuppies(puppies) {
            this._puppiesSource.next(puppies);
          }
        }, {
          key: "addPuppy",
          value: function addPuppy(puppy) {
            var puppies = [].concat(_toConsumableArray(this.getPuppies()), [puppy]);

            this._setPuppies(puppies);
          }
        }, {
          key: "removePuppy",
          value: function removePuppy(puppy) {
            var puppies = this.getPuppies().filter(function (p) {
              return p.Book !== puppy.Book;
            });

            this._setPuppies(puppies);
          }
        }, {
          key: "adoptPuppy",
          value: function adoptPuppy(puppy) {// const puppies = this.getPuppies().map(p =>
            //   p.Book === puppy.Book ? new Puppy({ ...p, ...{ adopted: true } }) : p
            // );
            // this._setPuppies(puppies);
          }
        }]);

        return _BibleStoreService;
      }();

      _BibleStoreService.ɵfac = function BibleStoreService_Factory(t) {
        return new (t || _BibleStoreService)();
      };

      _BibleStoreService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _BibleStoreService,
        factory: _BibleStoreService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    9826:
    /*!******************************************!*\
      !*** ./src/app/service/bible.service.ts ***!
      \******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BibleService": function BibleService() {
          return (
            /* binding */
            _BibleService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _shared_http_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../shared/http-client.service */
      6057);

      var _BibleService = /*#__PURE__*/function () {
        function _BibleService(_http) {
          _classCallCheck(this, _BibleService);

          this._http = _http;
          this._bibleLanguage = "english";
          this._bibleLanguagePath = "assets/bible/english/bible.json";
          this.bibleLanguages = ["afrikaans", "bengali", "english", "gujarati", "hindi", "indonesian", "kannada", "malayalam", "nepali", "oriya", "punjabi", "sepedi", "tamil", "telugu", "xhosa", "zulu"];
        }

        _createClass(_BibleService, [{
          key: "BibleLanguage",
          get: function get() {
            return this._bibleLanguage;
          },
          set: function set(value) {
            //let initialPath = `assets/bible/${this.initialLanguage}/bible.json`;
            var selectedBible = this.bibleLanguages.find(function (lang) {
              return lang == value.toLowerCase();
            });

            if (selectedBible) {
              this._bibleLanguagePath = "assets/bible/".concat(selectedBible, "/bible.json");
              this._bibleLanguage = selectedBible;
            } //return initialPath;

          }
        }, {
          key: "getBible",
          value: function getBible() {
            return this._http.get({
              url: this._bibleLanguagePath,
              cacheMins: 0
            });
          }
        }]);

        return _BibleService;
      }();

      _BibleService.ɵfac = function BibleService_Factory(t) {
        return new (t || _BibleService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_shared_http_client_service__WEBPACK_IMPORTED_MODULE_0__.HttpClientService));
      };

      _BibleService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _BibleService,
        factory: _BibleService.ɵfac,
        providedIn: "root"
      });
      /***/
    },

    /***/
    7320:
    /*!*************************************************!*\
      !*** ./src/app/service/notification.service.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NotificationService": function NotificationService() {
          return (
            /* binding */
            _NotificationService
          );
        },

        /* harmony export */
        "NotificationOptions": function NotificationOptions() {
          return (
            /* binding */
            _NotificationOptions
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-toastr */
      9344);

      var _NotificationService = /*#__PURE__*/function () {
        function _NotificationService(toastr) {
          _classCallCheck(this, _NotificationService);

          this.toastr = toastr;
        }
        /**
         * info
         */


        _createClass(_NotificationService, [{
          key: "info",
          value: function info(title, message, notificationOptions) {
            this.toastr.info(message, title, notificationOptions);
          }
          /**
           * success
           */

        }, {
          key: "success",
          value: function success(title, message, notificationOptions) {
            this.toastr.success(message, title, notificationOptions);
          }
          /**
          * warning
          */

        }, {
          key: "warning",
          value: function warning(title, message, notificationOptions) {
            this.toastr.warning(message, title, notificationOptions);
          }
          /**
           * error
           */

        }, {
          key: "error",
          value: function error(title, message, notificationOptions) {
            this.toastr.error(message, title, notificationOptions);
          }
          /**
          * show
          */

        }, {
          key: "show",
          value: function show(title, message, notificationOptions) {
            this.toastr.show(message, title, notificationOptions);
          }
        }]);

        return _NotificationService;
      }();

      _NotificationService.ɵfac = function NotificationService_Factory(t) {
        return new (t || _NotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__.ToastrService));
      };

      _NotificationService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _NotificationService,
        factory: _NotificationService.ɵfac,
        providedIn: 'root'
      });

      var _NotificationOptions = function _NotificationOptions() {
        _classCallCheck(this, _NotificationOptions);

        // disableTimeOut: boolean | 'timeOut' | 'extendedTimeOut';
        // extendedTimeOut: number;
        // progressAnimation: ProgressAnimationType;
        // toastClass: string;
        // titleClass: string;
        // messageClass: string;
        // easing: string;
        // easeTime: string | number;
        // tapToDismiss: boolean;
        // toastComponent?: ComponentType<any>;
        // onActivateTick: boolean;
        // newestOnTop: boolean;
        // url: string = "test";
        // body?: any
        // cacheMins?: number
        this.timeOut = 1000 * 30;
        this.closeButton = true;
        this.enableHtml = true;
        this.progressBar = true;
        this.from = "bottom";
        this.align = "right";
        this.positionClass = 'toast-' + this.from + '-' + this.align;
      };
      /***/

    },

    /***/
    8784:
    /*!*****************************************!*\
      !*** ./src/app/shared/audio.service.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AudioService": function AudioService() {
          return (
            /* binding */
            _AudioService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      6215);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _AudioService = /*#__PURE__*/function () {
        function _AudioService() {
          var _this9 = this;

          _classCallCheck(this, _AudioService);

          this.timeElapsed = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('00:00');
          this.timeRemaining = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('-00:00');
          this.percentElapsed = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(0);
          this.percentLoaded = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(0);
          this.playerStatus = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('paused');

          this.calculateTime = function (evt) {
            var ct = _this9.audio.currentTime;
            var d = _this9.audio.duration;

            _this9.setTimeElapsed(ct);

            _this9.setPercentElapsed(d, ct);

            _this9.setTimeRemaining(d, ct);
          };

          this.calculatePercentLoaded = function (evt) {
            if (_this9.audio.duration > 0) {
              for (var i = 0; i < _this9.audio.buffered.length; i++) {
                if (_this9.audio.buffered.start(_this9.audio.buffered.length - 1 - i) < _this9.audio.currentTime) {
                  var percent = _this9.audio.buffered.end(_this9.audio.buffered.length - 1 - i) / _this9.audio.duration * 100;

                  _this9.setPercentLoaded(percent);

                  break;
                }
              }
            }
          };

          this.setPlayerStatus = function (evt) {
            switch (evt.type) {
              case 'playing':
                _this9.playerStatus.next('playing');

                break;

              case 'pause':
                _this9.playerStatus.next('paused');

                break;

              case 'waiting':
                _this9.playerStatus.next('loading');

                break;

              case 'ended':
                _this9.playerStatus.next('ended');

                break;

              default:
                _this9.playerStatus.next('paused');

                break;
            }
          };

          this.audio = new Audio();
          this.attachListeners();
        }

        _createClass(_AudioService, [{
          key: "attachListeners",
          value: function attachListeners() {
            this.audio.addEventListener('timeupdate', this.calculateTime, false);
            this.audio.addEventListener('playing', this.setPlayerStatus, false);
            this.audio.addEventListener('pause', this.setPlayerStatus, false);
            this.audio.addEventListener('progress', this.calculatePercentLoaded, false);
            this.audio.addEventListener('waiting', this.setPlayerStatus, false);
            this.audio.addEventListener('ended', this.setPlayerStatus, false);
          }
          /**
           * If you need the audio instance in your component for some reason, use this.
           */

        }, {
          key: "getAudio",
          value: function getAudio() {
            return this.audio;
          }
          /**
           * This is typically a URL to an MP3 file
           * @param src
           */

        }, {
          key: "setAudio",
          value: function setAudio(src) {
            this.audio.src = src;
            this.playAudio();
          }
          /**
           * The method to play audio
           */

        }, {
          key: "playAudio",
          value: function playAudio() {
            this.audio.play();
          }
          /**
           * The method to pause audio
           */

        }, {
          key: "pauseAudio",
          value: function pauseAudio() {
            this.audio.pause();
          }
          /**
           * Method to seek to a position on the audio track (in milliseconds, I think),
           * @param position
           */

        }, {
          key: "seekAudio",
          value: function seekAudio(position) {
            this.audio.currentTime = position;
          }
          /**
           * This formats the audio's elapsed time into a human readable format, could be refactored into a Pipe.
           * It takes the audio track's "currentTime" property as an argument. It is called from the, calulateTime method.
           * @param ct
           */

        }, {
          key: "setTimeElapsed",
          value: function setTimeElapsed(ct) {
            var seconds = Math.floor(ct % 60),
                displaySecs = seconds < 10 ? '0' + seconds : seconds,
                minutes = Math.floor(ct / 60 % 60),
                displayMins = minutes < 10 ? '0' + minutes : minutes;
            this.timeElapsed.next(displayMins + ':' + displaySecs);
          }
          /**
           * This method takes the track's "duration" and "currentTime" properties to calculate the remaing time the track has
           * left to play. It is called from the calculateTime method.
           * @param d
           * @param t
           */

        }, {
          key: "setTimeRemaining",
          value: function setTimeRemaining(d, t) {
            var remaining;
            var timeLeft = d - t,
                seconds = Math.floor(timeLeft % 60) || 0,
                remainingSeconds = seconds < 10 ? '0' + seconds : seconds,
                minutes = Math.floor(timeLeft / 60 % 60) || 0,
                remainingMinutes = minutes < 10 ? '0' + minutes : minutes,
                hours = Math.floor(timeLeft / 60 / 60 % 60) || 0; // remaining = (hours === 0)

            if (hours === 0) {
              remaining = '-' + remainingMinutes + ':' + remainingSeconds;
            } else {
              remaining = '-' + hours + ':' + remainingMinutes + ':' + remainingSeconds;
            }

            this.timeRemaining.next(remaining);
          }
          /**
           * This method takes the track's "duration" and "currentTime" properties to calculate the percent of time elapsed.
           * This is valuable for setting the position of a range input. It is called from the calculateTime method.
           * @param d
           * @param ct
           */

        }, {
          key: "setPercentElapsed",
          value: function setPercentElapsed(d, ct) {
            this.percentElapsed.next(Math.floor(100 / d * ct) || 0);
          }
          /**
           * This method takes the track's "duration" and "currentTime" properties to calculate the percent of time elapsed.
           * This is valuable for setting the position of a range input. It is called from the calculatePercentLoaded method.
           * @param p
           */

        }, {
          key: "setPercentLoaded",
          value: function setPercentLoaded(p) {
            this.percentLoaded.next(parseInt(p, 10) || 0);
          }
          /**
           * This method returns an Observable whose value is the track's percent loaded
           */

        }, {
          key: "getPercentLoaded",
          value: function getPercentLoaded() {
            return this.percentLoaded.asObservable();
          }
          /**
           * This method returns an Observable whose value is the track's percent elapsed
           */

        }, {
          key: "getPercentElapsed",
          value: function getPercentElapsed() {
            return this.percentElapsed.asObservable();
          }
          /**
           * This method returns an Observable whose value is the track's percent loaded
           */

        }, {
          key: "getTimeElapsed",
          value: function getTimeElapsed() {
            return this.timeElapsed.asObservable();
          }
          /**
           * This method returns an Observable whose value is the track's time remaining
           */

        }, {
          key: "getTimeRemaining",
          value: function getTimeRemaining() {
            return this.timeRemaining.asObservable();
          }
          /**
           * This method returns an Observable whose value is the current status of the player.
           * This is useful inside your component to key off certain values, for example:
           *   - Show pause button when player status is 'playing'
           *   - Show play button when player status is 'paused'
           *   - Show loading indicator when player status is 'loading'
           *
           * See the setPlayer method for values.
           */

        }, {
          key: "getPlayerStatus",
          value: function getPlayerStatus() {
            return this.playerStatus.asObservable();
          }
          /**
           * Convenience method to toggle the audio between playing and paused
           */

        }, {
          key: "toggleAudio",
          value: function toggleAudio() {
            this.audio.paused ? this.audio.play() : this.audio.pause();
          }
        }]);

        return _AudioService;
      }();

      _AudioService.ɵfac = function AudioService_Factory(t) {
        return new (t || _AudioService)();
      };

      _AudioService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _AudioService,
        factory: _AudioService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    133:
    /*!*****************************************!*\
      !*** ./src/app/shared/cache.service.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CacheService": function CacheService() {
          return (
            /* binding */
            _CacheService
          );
        },

        /* harmony export */
        "LocalStorageSaveOptions": function LocalStorageSaveOptions() {
          return (
            /* binding */
            _LocalStorageSaveOptions
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _CacheService = /*#__PURE__*/function () {
        function _CacheService() {
          _classCallCheck(this, _CacheService);
        }

        _createClass(_CacheService, [{
          key: "save",
          value: function save(options) {
            // Set default values for optionals
            options.expirationMins = options.expirationMins || 0; // Set expiration date in miliseconds

            var expirationMS = options.expirationMins !== 0 ? options.expirationMins * 60 * 1000 : 0;
            var record = {
              value: typeof options.data === 'string' ? options.data : JSON.stringify(options.data),
              expiration: expirationMS !== 0 ? new Date().getTime() + expirationMS : null,
              hasExpiration: expirationMS !== 0 ? true : false
            };
            localStorage.setItem(options.key, JSON.stringify(record));
          }
        }, {
          key: "load",
          value: function load(key) {
            // Get cached data from localstorage
            var item = localStorage.getItem(key);

            if (item !== null) {
              var record = JSON.parse(item);
              var now = new Date().getTime(); // Expired data will return null

              if (!record || record.hasExpiration && record.expiration <= now) {
                return null;
              } else {
                return JSON.parse(record.value);
              }
            }

            return null;
          }
        }, {
          key: "remove",
          value: function remove(key) {
            localStorage.removeItem(key);
          }
        }, {
          key: "cleanLocalStorage",
          value: function cleanLocalStorage() {
            localStorage.clear();
          }
        }]);

        return _CacheService;
      }();

      _CacheService.ɵfac = function CacheService_Factory(t) {
        return new (t || _CacheService)();
      };

      _CacheService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _CacheService,
        factory: _CacheService.ɵfac,
        providedIn: 'root'
      });

      var _LocalStorageSaveOptions = function _LocalStorageSaveOptions() {
        _classCallCheck(this, _LocalStorageSaveOptions);
      };
      /***/

    },

    /***/
    3248:
    /*!*******************************************************************!*\
      !*** ./src/app/shared/component/not-found/not-found.component.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NotFoundComponent": function NotFoundComponent() {
          return (
            /* binding */
            _NotFoundComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _NotFoundComponent = /*#__PURE__*/function () {
        function _NotFoundComponent() {
          _classCallCheck(this, _NotFoundComponent);
        }

        _createClass(_NotFoundComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _NotFoundComponent;
      }();

      _NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) {
        return new (t || _NotFoundComponent)();
      };

      _NotFoundComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _NotFoundComponent,
        selectors: [["app-not-found"]],
        decls: 27,
        vars: 0,
        consts: [[1, "container"], [1, "first-four"], [1, "cog-wheel1"], [1, "cog1"], [1, "top"], [1, "down"], [1, "left-top"], [1, "left-down"], [1, "right-top"], [1, "right-down"], [1, "left"], [1, "right"], [1, "cog-wheel2"], [1, "cog2"], [1, "second-four"], [1, "wrong-para"]],
        template: function NotFoundComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h1", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Uh Oh! Page not found!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap\");\r\n\r\n@import url(\"https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700\");\r\n\r\n*[_ngcontent-%COMP%]{\r\n  margin:0;\r\n  padding:0;\r\n  box-sizing:border-box;\r\n}\r\n\r\nbody[_ngcontent-%COMP%]{\r\n  overflow:hidden;\r\n  background-color: #f4f6ff;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]{\r\n  width:100vw;\r\n  height:100vh;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-family: \"Poppins\", sans-serif;\r\n  position: relative;\r\n  left:6vmin;\r\n  text-align: center;\r\n}\r\n\r\n.cog-wheel1[_ngcontent-%COMP%], .cog-wheel2[_ngcontent-%COMP%]{\r\n  transform:scale(0.7);\r\n}\r\n\r\n.cog1[_ngcontent-%COMP%], .cog2[_ngcontent-%COMP%]{\r\n  width:40vmin;\r\n  height:40vmin;\r\n  border-radius:50%;\r\n  border:6vmin solid #f3c623;\r\n  position: relative;\r\n}\r\n\r\n.cog2[_ngcontent-%COMP%]{\r\n  border:6vmin solid #4f8a8b;\r\n}\r\n\r\n.top[_ngcontent-%COMP%], .down[_ngcontent-%COMP%], .left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%], .left-top[_ngcontent-%COMP%], .left-down[_ngcontent-%COMP%], .right-top[_ngcontent-%COMP%], .right-down[_ngcontent-%COMP%]{\r\n  width:10vmin;\r\n  height:10vmin;\r\n  background-color: #f3c623;\r\n  position: absolute;\r\n}\r\n\r\n.cog2[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%], .cog2[_ngcontent-%COMP%]   .down[_ngcontent-%COMP%], .cog2[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%], .cog2[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%], .cog2[_ngcontent-%COMP%]   .left-top[_ngcontent-%COMP%], .cog2[_ngcontent-%COMP%]   .left-down[_ngcontent-%COMP%], .cog2[_ngcontent-%COMP%]   .right-top[_ngcontent-%COMP%], .cog2[_ngcontent-%COMP%]   .right-down[_ngcontent-%COMP%]{\r\n  background-color: #4f8a8b;\r\n}\r\n\r\n.top[_ngcontent-%COMP%]{\r\n  top:-14vmin;\r\n  left:9vmin;\r\n}\r\n\r\n.down[_ngcontent-%COMP%]{\r\n  bottom:-14vmin;\r\n  left:9vmin;\r\n}\r\n\r\n.left[_ngcontent-%COMP%]{\r\n  left:-14vmin;\r\n  top:9vmin;\r\n}\r\n\r\n.right[_ngcontent-%COMP%]{\r\n  right:-14vmin;\r\n  top:9vmin;\r\n}\r\n\r\n.left-top[_ngcontent-%COMP%]{\r\n  transform:rotateZ(-45deg);\r\n  left:-8vmin;\r\n  top:-8vmin;\r\n}\r\n\r\n.left-down[_ngcontent-%COMP%]{\r\n  transform:rotateZ(45deg);\r\n  left:-8vmin;\r\n  top:25vmin;\r\n}\r\n\r\n.right-top[_ngcontent-%COMP%]{\r\n  transform:rotateZ(45deg);\r\n  right:-8vmin;\r\n  top:-8vmin;\r\n}\r\n\r\n.right-down[_ngcontent-%COMP%]{\r\n  transform:rotateZ(-45deg);\r\n  right:-8vmin;\r\n  top:25vmin;\r\n}\r\n\r\n.cog2[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  left:-10.2vmin;\r\n  bottom:10vmin;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]{\r\n  color:#142833;\r\n}\r\n\r\n.first-four[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  left:6vmin;\r\n  font-size:40vmin;\r\n}\r\n\r\n.second-four[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  right:18vmin;\r\n  z-index: -1;\r\n  font-size:40vmin;\r\n}\r\n\r\n.wrong-para[_ngcontent-%COMP%]{\r\n  font-family: \"Montserrat\", sans-serif;\r\n  position: absolute;\r\n  bottom:15vmin;\r\n  padding:3vmin 12vmin 3vmin 3vmin;\r\n  font-weight:600;\r\n  color:#092532;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFGQUFxRjs7QUFFckYsaUZBQWlGOztBQUVqRjtFQUNFLFFBQVE7RUFDUixTQUFTO0VBQ1QscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0NBQWtDO0VBQ2xDLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsMEJBQTBCO0VBQzFCLGtCQUFrQjtBQUNwQjs7QUFHQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixXQUFXO0VBQ1gsVUFBVTtBQUNaOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixVQUFVO0FBQ1o7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixnQ0FBZ0M7RUFDaEMsZUFBZTtFQUNmLGFBQWE7QUFDZiIsImZpbGUiOiJub3QtZm91bmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRANzAwJmRpc3BsYXk9c3dhcFwiKTtcclxuXHJcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6NDAwLDUwMCw2MDAsNzAwXCIpO1xyXG5cclxuKntcclxuICBtYXJnaW46MDtcclxuICBwYWRkaW5nOjA7XHJcbiAgYm94LXNpemluZzpib3JkZXItYm94O1xyXG59XHJcblxyXG5ib2R5e1xyXG4gIG92ZXJmbG93OmhpZGRlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNmZmO1xyXG59XHJcblxyXG4uY29udGFpbmVye1xyXG4gIHdpZHRoOjEwMHZ3O1xyXG4gIGhlaWdodDoxMDB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OjZ2bWluO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNvZy13aGVlbDEsIC5jb2ctd2hlZWwye1xyXG4gIHRyYW5zZm9ybTpzY2FsZSgwLjcpO1xyXG59XHJcblxyXG4uY29nMSwgLmNvZzJ7XHJcbiAgd2lkdGg6NDB2bWluO1xyXG4gIGhlaWdodDo0MHZtaW47XHJcbiAgYm9yZGVyLXJhZGl1czo1MCU7XHJcbiAgYm9yZGVyOjZ2bWluIHNvbGlkICNmM2M2MjM7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5cclxuLmNvZzJ7XHJcbiAgYm9yZGVyOjZ2bWluIHNvbGlkICM0ZjhhOGI7XHJcbn1cclxuXHJcbi50b3AsIC5kb3duLCAubGVmdCwgLnJpZ2h0LCAubGVmdC10b3AsIC5sZWZ0LWRvd24sIC5yaWdodC10b3AsIC5yaWdodC1kb3due1xyXG4gIHdpZHRoOjEwdm1pbjtcclxuICBoZWlnaHQ6MTB2bWluO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2M2MjM7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4uY29nMiAudG9wLC5jb2cyICAuZG93biwuY29nMiAgLmxlZnQsLmNvZzIgIC5yaWdodCwuY29nMiAgLmxlZnQtdG9wLC5jb2cyICAubGVmdC1kb3duLC5jb2cyICAucmlnaHQtdG9wLC5jb2cyICAucmlnaHQtZG93bntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGY4YThiO1xyXG59XHJcblxyXG4udG9we1xyXG4gIHRvcDotMTR2bWluO1xyXG4gIGxlZnQ6OXZtaW47XHJcbn1cclxuXHJcbi5kb3due1xyXG4gIGJvdHRvbTotMTR2bWluO1xyXG4gIGxlZnQ6OXZtaW47XHJcbn1cclxuXHJcbi5sZWZ0e1xyXG4gIGxlZnQ6LTE0dm1pbjtcclxuICB0b3A6OXZtaW47XHJcbn1cclxuXHJcbi5yaWdodHtcclxuICByaWdodDotMTR2bWluO1xyXG4gIHRvcDo5dm1pbjtcclxufVxyXG5cclxuLmxlZnQtdG9we1xyXG4gIHRyYW5zZm9ybTpyb3RhdGVaKC00NWRlZyk7XHJcbiAgbGVmdDotOHZtaW47XHJcbiAgdG9wOi04dm1pbjtcclxufVxyXG5cclxuLmxlZnQtZG93bntcclxuICB0cmFuc2Zvcm06cm90YXRlWig0NWRlZyk7XHJcbiAgbGVmdDotOHZtaW47XHJcbiAgdG9wOjI1dm1pbjtcclxufVxyXG5cclxuLnJpZ2h0LXRvcHtcclxuICB0cmFuc2Zvcm06cm90YXRlWig0NWRlZyk7XHJcbiAgcmlnaHQ6LTh2bWluO1xyXG4gIHRvcDotOHZtaW47XHJcbn1cclxuXHJcbi5yaWdodC1kb3due1xyXG4gIHRyYW5zZm9ybTpyb3RhdGVaKC00NWRlZyk7XHJcbiAgcmlnaHQ6LTh2bWluO1xyXG4gIHRvcDoyNXZtaW47XHJcbn1cclxuXHJcbi5jb2cye1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0Oi0xMC4ydm1pbjtcclxuICBib3R0b206MTB2bWluO1xyXG59XHJcblxyXG5oMXtcclxuICBjb2xvcjojMTQyODMzO1xyXG59XHJcblxyXG4uZmlyc3QtZm91cntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGVmdDo2dm1pbjtcclxuICBmb250LXNpemU6NDB2bWluO1xyXG59XHJcblxyXG4uc2Vjb25kLWZvdXJ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHJpZ2h0OjE4dm1pbjtcclxuICB6LWluZGV4OiAtMTtcclxuICBmb250LXNpemU6NDB2bWluO1xyXG59XHJcblxyXG4ud3JvbmctcGFyYXtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbToxNXZtaW47XHJcbiAgcGFkZGluZzozdm1pbiAxMnZtaW4gM3ZtaW4gM3ZtaW47XHJcbiAgZm9udC13ZWlnaHQ6NjAwO1xyXG4gIGNvbG9yOiMwOTI1MzI7XHJcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    3310:
    /*!**************************************************************!*\
      !*** ./src/app/shared/directive/scroll-tracker.directive.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ScrollTrackerDirective": function ScrollTrackerDirective() {
          return (
            /* binding */
            _ScrollTrackerDirective
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _ScrollTrackerDirective = /*#__PURE__*/function () {
        function _ScrollTrackerDirective() {
          _classCallCheck(this, _ScrollTrackerDirective);

          this.scrollingFinished = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.emitted = false;
        }

        _createClass(_ScrollTrackerDirective, [{
          key: "onScroll",
          value: function onScroll() {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight && !this.emitted) {
              this.emitted = true;
              this.scrollingFinished.emit();
            } else if (window.innerHeight + window.scrollY < document.body.offsetHeight) {
              this.emitted = false;
            }
          }
        }]);

        return _ScrollTrackerDirective;
      }();

      _ScrollTrackerDirective.ɵfac = function ScrollTrackerDirective_Factory(t) {
        return new (t || _ScrollTrackerDirective)();
      };

      _ScrollTrackerDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _ScrollTrackerDirective,
        selectors: [["", "scrollTracker", ""]],
        hostBindings: function ScrollTrackerDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function ScrollTrackerDirective_scroll_HostBindingHandler() {
              return ctx.onScroll();
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
          }
        },
        outputs: {
          scrollingFinished: "scrollingFinished"
        }
      });
      /***/
    },

    /***/
    6057:
    /*!***********************************************!*\
      !*** ./src/app/shared/http-client.service.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HttpClientService": function HttpClientService() {
          return (
            /* binding */
            _HttpClientService
          );
        },

        /* harmony export */
        "HttpOptions": function HttpOptions() {
          return (
            /* binding */
            _HttpOptions
          );
        },

        /* harmony export */
        "Verbs": function Verbs() {
          return (
            /* binding */
            _Verbs
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      5917);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      3190);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      1841);
      /* harmony import */


      var _cache_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./cache.service */
      133);

      var _HttpClientService = /*#__PURE__*/function () {
        function _HttpClientService(http, _cacheService) {
          _classCallCheck(this, _HttpClientService);

          this.http = http;
          this._cacheService = _cacheService;
        }

        _createClass(_HttpClientService, [{
          key: "get",
          value: function get(options) {
            return this.httpCall(_Verbs.GET, options);
          }
        }, {
          key: "delete",
          value: function _delete(options) {
            return this.httpCall(_Verbs.DELETE, options);
          }
        }, {
          key: "post",
          value: function post(options) {
            return this.httpCall(_Verbs.POST, options);
          }
        }, {
          key: "put",
          value: function put(options) {
            return this.httpCall(_Verbs.PUT, options);
          }
        }, {
          key: "httpCall",
          value: function httpCall(verb, options) {
            var _this10 = this;

            // Setup default values
            options.body = options.body || null;
            options.cacheMins = options.cacheMins || 0;

            if (options.cacheMins > 0) {
              // Get data from cache
              var data = this._cacheService.load(options.url); // Return data from cache


              if (data !== null) {
                return (0, rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(data);
              }
            }

            return this.http.request(verb, options.url, {
              body: options.body
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)(function (response) {
              if (options.cacheMins > 0) {
                // Data will be cached
                _this10._cacheService.save({
                  key: options.url,
                  data: response,
                  expirationMins: options.cacheMins
                });
              }

              return (0, rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(response);
            }));
          }
        }]);

        return _HttpClientService;
      }();

      _HttpClientService.ɵfac = function HttpClientService_Factory(t) {
        return new (t || _HttpClientService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_cache_service__WEBPACK_IMPORTED_MODULE_0__.CacheService));
      };

      _HttpClientService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: _HttpClientService,
        factory: _HttpClientService.ɵfac,
        providedIn: 'root'
      });

      var _HttpOptions = function _HttpOptions() {
        _classCallCheck(this, _HttpOptions);
      };

      var _Verbs;

      (function (Verbs) {
        Verbs["GET"] = "GET";
        Verbs["PUT"] = "PUT";
        Verbs["POST"] = "POST";
        Verbs["DELETE"] = "DELETE";
      })(_Verbs || (_Verbs = {}));
      /***/

    },

    /***/
    9675:
    /*!****************************************************************!*\
      !*** ./src/app/shared/interceptor/http-request.interceptor.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HttpRequestInterceptor": function HttpRequestInterceptor() {
          return (
            /* binding */
            _HttpRequestInterceptor
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      1841);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      205);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      8307);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      5304);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _manage_http_request_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../manage-http-request.service */
      3594);

      var _HttpRequestInterceptor = /*#__PURE__*/function () {
        function _HttpRequestInterceptor(httpRequestHandler) {
          _classCallCheck(this, _HttpRequestInterceptor);

          this.httpRequestHandler = httpRequestHandler;
        }

        _createClass(_HttpRequestInterceptor, [{
          key: "intercept",
          value: function intercept(req, next) {
            var _this11 = this;

            this.httpRequestHandler.setLoaderStatus(true);
            console.log(req); //Modify request before sent 

            var modreq = req.clone({//url: 'https://jsonplaceholder.typicode.com/werwerwer'
            });
            return next.handle(modreq).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(function (event) {
              if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpEventType.Response) {
                console.log(event);

                _this11.httpRequestHandler.setLoaderStatus(false);
              }
            }, function () {}), //Catch Errors from the URL
            (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(function (err) {
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(err);
            }));
          }
        }]);

        return _HttpRequestInterceptor;
      }();

      _HttpRequestInterceptor.ɵfac = function HttpRequestInterceptor_Factory(t) {
        return new (t || _HttpRequestInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_manage_http_request_service__WEBPACK_IMPORTED_MODULE_0__.ManageHttpRequestService));
      };

      _HttpRequestInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
        token: _HttpRequestInterceptor,
        factory: _HttpRequestInterceptor.ɵfac
      });
      /***/
    },

    /***/
    3594:
    /*!*******************************************************!*\
      !*** ./src/app/shared/manage-http-request.service.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ManageHttpRequestService": function ManageHttpRequestService() {
          return (
            /* binding */
            _ManageHttpRequestService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _ManageHttpRequestService = /*#__PURE__*/function () {
        function _ManageHttpRequestService() {
          _classCallCheck(this, _ManageHttpRequestService);

          this.requestStatus = false;
          this.httpLoader = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        }

        _createClass(_ManageHttpRequestService, [{
          key: "setLoaderStatus",
          value: function setLoaderStatus(loadStatus) {
            this.httpLoader.emit(loadStatus);
          }
        }]);

        return _ManageHttpRequestService;
      }();

      _ManageHttpRequestService.ɵfac = function ManageHttpRequestService_Factory(t) {
        return new (t || _ManageHttpRequestService)();
      };

      _ManageHttpRequestService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _ManageHttpRequestService,
        factory: _ManageHttpRequestService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    7404:
    /*!************************************************!*\
      !*** ./src/app/shared/notification.service.ts ***!
      \************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NotificationService": function NotificationService() {
          return (
            /* binding */
            _NotificationService2
          );
        },

        /* harmony export */
        "NotificationOptions": function NotificationOptions() {
          return (
            /* binding */
            _NotificationOptions2
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-toastr */
      9344);

      var _NotificationService2 = /*#__PURE__*/function () {
        function _NotificationService2(toastr) {
          _classCallCheck(this, _NotificationService2);

          this.toastr = toastr;
        }
        /**
         * info
         */


        _createClass(_NotificationService2, [{
          key: "info",
          value: function info(title, message, notificationOptions) {
            this.toastr.info(message, title, notificationOptions);
          }
          /**
           * success
           */

        }, {
          key: "success",
          value: function success(title, message, notificationOptions) {
            this.toastr.success(message, title, notificationOptions);
          }
          /**
          * warning
          */

        }, {
          key: "warning",
          value: function warning(title, message, notificationOptions) {
            this.toastr.warning(message, title, notificationOptions);
          }
          /**
           * error
           */

        }, {
          key: "error",
          value: function error(title, message, notificationOptions) {
            this.toastr.error(message, title, notificationOptions);
          }
          /**
          * show
          */

        }, {
          key: "show",
          value: function show(title, message, notificationOptions) {
            this.toastr.show(message, title, notificationOptions);
          }
        }]);

        return _NotificationService2;
      }();

      _NotificationService2.ɵfac = function NotificationService_Factory(t) {
        return new (t || _NotificationService2)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__.ToastrService));
      };

      _NotificationService2.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _NotificationService2,
        factory: _NotificationService2.ɵfac,
        providedIn: 'root'
      });

      var _NotificationOptions2 = function _NotificationOptions2() {
        _classCallCheck(this, _NotificationOptions2);

        // disableTimeOut: boolean | 'timeOut' | 'extendedTimeOut';
        // extendedTimeOut: number;
        // progressAnimation: ProgressAnimationType;
        // toastClass: string;
        // titleClass: string;
        // messageClass: string;
        // easing: string;
        // easeTime: string | number;
        // tapToDismiss: boolean;
        // toastComponent?: ComponentType<any>;
        // onActivateTick: boolean;
        // newestOnTop: boolean;
        // url: string = "test";
        // body?: any
        // cacheMins?: number
        this.timeOut = 1000 * 30;
        this.closeButton = true;
        this.enableHtml = true;
        this.progressBar = true;
        this.from = "bottom";
        this.align = "right";
        this.positionClass = 'toast-' + this.from + '-' + this.align;
      };
      /***/

    },

    /***/
    7407:
    /*!*****************************************************!*\
      !*** ./src/app/shared/push-notification.service.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PushNotificationsService": function PushNotificationsService() {
          return (
            /* binding */
            _PushNotificationsService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      9165);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _PushNotificationsService = /*#__PURE__*/function () {
        function _PushNotificationsService() {
          _classCallCheck(this, _PushNotificationsService);

          this.data = [];
          this.permission = this.isSupported() ? 'default' : 'denied';
        }

        _createClass(_PushNotificationsService, [{
          key: "isSupported",
          value: function isSupported() {
            return 'Notification' in window;
          }
        }, {
          key: "sendPushNotification",
          value: function sendPushNotification(title, message) {
            this.data = [];
            this.data.push({
              'title': title,
              'alertContent': message
            });
            this.generateNotification(this.data);
          }
        }, {
          key: "requestPermission",
          value: function requestPermission() {
            var self = this;

            if ('Notification' in window) {
              Notification.requestPermission(function (status) {
                return self.permission = status;
              });
            }
          }
        }, {
          key: "create",
          value: function create(title, options) {
            var self = this;
            return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(function (obs) {
              if (!('Notification' in window)) {
                console.log('Notifications are not available in this environment');
                obs.complete();
              }

              if (self.permission !== 'granted') {
                console.log("The user hasn't granted you permission to send push notifications");
                obs.complete();
              }

              var _notify = new Notification(title, options);

              _notify.onshow = function (e) {
                return obs.next({
                  notification: _notify,
                  event: e
                });
              };

              _notify.onclick = function (e) {
                return obs.next({
                  notification: _notify,
                  event: e
                });
              };

              _notify.onerror = function (e) {
                return obs.error({
                  notification: _notify,
                  event: e
                });
              };

              _notify.onclose = function () {
                return obs.complete();
              };
            });
          }
        }, {
          key: "generateNotification",
          value: function generateNotification(source) {
            var self = this;
            source.forEach(function (item) {
              var options = {
                body: item.alertContent //icon: "../../assets/images/bell-icon.png"

              };
              var notify = self.create(item.title, options).subscribe();
            });
          }
        }]);

        return _PushNotificationsService;
      }();

      _PushNotificationsService.ɵfac = function PushNotificationsService_Factory(t) {
        return new (t || _PushNotificationsService)();
      };

      _PushNotificationsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _PushNotificationsService,
        factory: _PushNotificationsService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    4466:
    /*!*****************************************!*\
      !*** ./src/app/shared/shared.module.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SharedModule": function SharedModule() {
          return (
            /* binding */
            _SharedModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _directive_scroll_tracker_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./directive/scroll-tracker.directive */
      3310);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _SharedModule = function _SharedModule() {
        _classCallCheck(this, _SharedModule);
      };

      _SharedModule.ɵfac = function SharedModule_Factory(t) {
        return new (t || _SharedModule)();
      };

      _SharedModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _SharedModule
      });
      _SharedModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[// FormsModule,
          // BrowserModule       
        ]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_SharedModule, {
          declarations: [_directive_scroll_tracker_directive__WEBPACK_IMPORTED_MODULE_0__.ScrollTrackerDirective]
        });
      })();
      /***/

    },

    /***/
    5754:
    /*!**************************************!*\
      !*** ./src/app/store/app.reducer.ts ***!
      \**************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "appReducer": function appReducer() {
          return (
            /* binding */
            _appReducer
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _product_store_product_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../product/store/product.reducer */
      5559);

      var _appReducer = {
        products: _product_store_product_reducer__WEBPACK_IMPORTED_MODULE_0__.productReducer
      };
      /***/
    },

    /***/
    3805:
    /*!****************************************!*\
      !*** ./src/app/todo/todo.component.ts ***!
      \****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TodoComponent": function TodoComponent() {
          return (
            /* binding */
            _TodoComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _web_api_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../web-api-client */
      814);
      /* harmony import */


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      9976);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      3301);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      4163);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      3679);

      function TodoComponent_p_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "em");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Loading...");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "active": a0
        };
      };

      function TodoComponent_div_5_li_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TodoComponent_div_5_li_9_Template_li_click_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16);

            var list_r13 = restoredCtx.$implicit;

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r15.selectedList = list_r13;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var list_r13 = ctx.$implicit;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c0, ctx_r11.selectedList == list_r13));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", list_r13.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r11.remainingItems(list_r13));
        }
      }

      function TodoComponent_div_5_div_10_li_7_input_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "input", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function TodoComponent_div_5_div_10_li_7_input_5_Template_input_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25);

            var item_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

            return item_r18.title = $event;
          })("keyup.enter", function TodoComponent_div_5_div_10_li_7_input_5_Template_input_keyup_enter_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25);

            var item_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

            return ctx_r26.updateItem(item_r18, true);
          })("blur", function TodoComponent_div_5_div_10_li_7_input_5_Template_input_blur_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25);

            var item_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

            return ctx_r28.updateItem(item_r18);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          var i_r19 = ctx_r30.index;
          var item_r18 = ctx_r30.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("id", "itemTitle" + i_r19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", item_r18.title);
        }
      }

      var _c1 = function _c1(a0) {
        return {
          "done-todo": a0
        };
      };

      function TodoComponent_div_5_div_10_li_7_div_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TodoComponent_div_5_div_10_li_7_div_6_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r33);

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            var item_r18 = ctx_r32.$implicit;
            var i_r19 = ctx_r32.index;

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

            return ctx_r31.editItem(item_r18, "itemTitle" + i_r19);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c1, item_r18.done));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r18.title);
        }
      }

      function TodoComponent_div_5_div_10_li_7_button_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TodoComponent_div_5_div_10_li_7_button_8_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r36);

            var item_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

            var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](10);

            return ctx_r35.showItemDetailsModal(_r5, item_r18);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "fa-icon", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r22.faEllipsisH);
        }
      }

      function TodoComponent_div_5_div_10_li_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function TodoComponent_div_5_div_10_li_7_Template_input_ngModelChange_3_listener($event) {
            var item_r18 = ctx.$implicit;
            return item_r18.done = $event;
          })("change", function TodoComponent_div_5_div_10_li_7_Template_input_change_3_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r40);

            var item_r18 = restoredCtx.$implicit;

            var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

            return ctx_r39.updateItem(item_r18);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, TodoComponent_div_5_div_10_li_7_input_5_Template, 1, 2, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, TodoComponent_div_5_div_10_li_7_div_6_Template, 3, 4, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, TodoComponent_div_5_div_10_li_7_button_8_Template, 2, 1, "button", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r18 = ctx.$implicit;

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", item_r18.done);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r18 == ctx_r17.selectedItem);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r18 != ctx_r17.selectedItem);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r18.id != 0);
        }
      }

      function TodoComponent_div_5_div_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h2", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TodoComponent_div_5_div_10_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r42);

            var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](8);

            return ctx_r41.showListOptionsModal(_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "fa-icon", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ul", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, TodoComponent_div_5_div_10_li_7_Template, 9, 4, "li", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TodoComponent_div_5_div_10_Template_li_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r42);

            var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r43.addItem();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Add Item...");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r12.selectedList.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r12.faEllipsisH);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r12.selectedList.items);
        }
      }

      function TodoComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h2", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Lists");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TodoComponent_div_5_Template_button_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r45);

            var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](14);

            return ctx_r44.showNewListModal(_r9);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "fa-icon", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ul", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, TodoComponent_div_5_li_9_Template, 7, 5, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, TodoComponent_div_5_div_10_Template, 11, 3, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r1.faPlus);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.vm.lists);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.selectedList);
        }
      }

      function TodoComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "json");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 1, ctx_r2.vm));
        }
      }

      function TodoComponent_ng_template_7_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "json");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 1, ctx_r46.listOptionsEditor));
        }
      }

      function TodoComponent_ng_template_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h4", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "List Options");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TodoComponent_ng_template_7_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r48);

            var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r47.listOptionsModalRef.hide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "label", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "input", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function TodoComponent_ng_template_7_Template_input_ngModelChange_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r48);

            var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r49.listOptionsEditor.title = $event;
          })("keyup.enter", function TodoComponent_ng_template_7_Template_input_keyup_enter_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r48);

            var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r50.updateListOptions();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, TodoComponent_ng_template_7_div_11_Template, 4, 3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TodoComponent_ng_template_7_Template_button_click_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r48);

            var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](12);

            return ctx_r51.confirmDeleteList(_r7);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TodoComponent_ng_template_7_Template_button_click_18_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r48);

            var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r52.listOptionsModalRef.hide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "button", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TodoComponent_ng_template_7_Template_button_click_20_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r48);

            var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r53.updateListOptions();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Update");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r4.listOptionsEditor.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.debug);
        }
      }

      function TodoComponent_ng_template_9_option_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var list_r57 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", list_r57.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](list_r57.title);
        }
      }

      function TodoComponent_ng_template_9_option_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var level_r58 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", level_r58.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](level_r58.name);
        }
      }

      function TodoComponent_ng_template_9_div_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "json");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 1, ctx_r56.itemDetailsEditor));
        }
      }

      function TodoComponent_ng_template_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h4", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Item Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TodoComponent_ng_template_9_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r60);

            var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r59.itemDetailsModalRef.hide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "label", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "List");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "select", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function TodoComponent_ng_template_9_Template_select_ngModelChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r60);

            var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r61.itemDetailsEditor.listId = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, TodoComponent_ng_template_9_option_12_Template, 2, 2, "option", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "label", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Priority");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "select", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function TodoComponent_ng_template_9_Template_select_ngModelChange_16_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r60);

            var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r62.itemDetailsEditor.priority = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, TodoComponent_ng_template_9_option_17_Template, 2, 2, "option", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "label", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Note");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "textarea", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function TodoComponent_ng_template_9_Template_textarea_ngModelChange_21_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r60);

            var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r63.itemDetailsEditor.note = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, TodoComponent_ng_template_9_div_22_Template, 4, 3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "button", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TodoComponent_ng_template_9_Template_button_click_26_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r60);

            var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r64.deleteItem(ctx_r64.selectedItem);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "button", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TodoComponent_ng_template_9_Template_button_click_29_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r60);

            var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r65.itemDetailsModalRef.hide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "button", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TodoComponent_ng_template_9_Template_button_click_31_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r60);

            var ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r66.updateItemDetails();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Update");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r6.itemDetailsEditor.listId);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r6.vm.lists);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r6.itemDetailsEditor.priority);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r6.vm.priorityLevels);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r6.itemDetailsEditor.note);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.debug);
        }
      }

      function TodoComponent_ng_template_11_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "json");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 1, ctx_r67.selectedList));
        }
      }

      function TodoComponent_ng_template_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h4", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TodoComponent_ng_template_11_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r69);

            var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r68.deleteListModalRef.hide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "All items will be permanently deleted. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, TodoComponent_ng_template_11_div_9_Template, 4, 3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TodoComponent_ng_template_11_Template_button_click_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r69);

            var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r70.deleteListModalRef.hide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TodoComponent_ng_template_11_Template_button_click_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r69);

            var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r71.deleteListConfirmed();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Delete \"", ctx_r8.selectedList == null ? null : ctx_r8.selectedList.title, "\"?");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.debug);
        }
      }

      function TodoComponent_ng_template_13_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r72.newListEditor.error, " ");
        }
      }

      function TodoComponent_ng_template_13_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "json");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 1, ctx_r73.newListEditor));
        }
      }

      var _c2 = function _c2(a0) {
        return {
          "is-invalid": a0
        };
      };

      function TodoComponent_ng_template_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h4", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "New List");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TodoComponent_ng_template_13_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r75);

            var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r74.newListCancelled();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "label", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "input", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function TodoComponent_ng_template_13_Template_input_ngModelChange_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r75);

            var ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r76.newListEditor.title = $event;
          })("keyup.enter", function TodoComponent_ng_template_13_Template_input_keyup_enter_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r75);

            var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r77.addList();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, TodoComponent_ng_template_13_div_11_Template, 2, 1, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, TodoComponent_ng_template_13_div_12_Template, 4, 3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TodoComponent_ng_template_13_Template_button_click_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r75);

            var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r78.newListCancelled();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TodoComponent_ng_template_13_Template_button_click_17_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r75);

            var ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r79.addList();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Create");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r10.newListEditor.title)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c2, ctx_r10.newListEditor.error));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r10.newListEditor.error);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r10.debug);
        }
      }

      var _TodoComponent = /*#__PURE__*/function () {
        function _TodoComponent(listsClient, itemsClient, modalService) {
          var _this12 = this;

          _classCallCheck(this, _TodoComponent);

          this.listsClient = listsClient;
          this.itemsClient = itemsClient;
          this.modalService = modalService;
          this.debug = false;
          this.newListEditor = {};
          this.listOptionsEditor = {};
          this.itemDetailsEditor = {};
          this.faPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faPlus;
          this.faEllipsisH = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faEllipsisH;
          listsClient.get().subscribe(function (result) {
            _this12.vm = result;

            if (_this12.vm.lists.length) {
              _this12.selectedList = _this12.vm.lists[0];
            }
          }, function (error) {
            return console.error(error);
          });
        } // Lists


        _createClass(_TodoComponent, [{
          key: "remainingItems",
          value: function remainingItems(list) {
            return list.items.filter(function (t) {
              return !t.done;
            }).length;
          }
        }, {
          key: "showNewListModal",
          value: function showNewListModal(template) {
            this.newListModalRef = this.modalService.show(template);
            setTimeout(function () {
              return document.getElementById("title").focus();
            }, 250);
          }
        }, {
          key: "newListCancelled",
          value: function newListCancelled() {
            this.newListModalRef.hide();
            this.newListEditor = {};
          }
        }, {
          key: "addList",
          value: function addList() {
            var _this13 = this;

            var list = _web_api_client__WEBPACK_IMPORTED_MODULE_0__.TodoListDto.fromJS({
              id: 0,
              title: this.newListEditor.title,
              items: []
            });

            this.listsClient.create({
              title: this.newListEditor.title
            }).subscribe(function (result) {
              list.id = result;

              _this13.vm.lists.push(list);

              _this13.selectedList = list;

              _this13.newListModalRef.hide();

              _this13.newListEditor = {};
            }, function (error) {
              var errors = JSON.parse(error.response);

              if (errors && errors.Title) {
                _this13.newListEditor.error = errors.Title[0];
              }

              setTimeout(function () {
                return document.getElementById("title").focus();
              }, 250);
            });
          }
        }, {
          key: "showListOptionsModal",
          value: function showListOptionsModal(template) {
            this.listOptionsEditor = {
              id: this.selectedList.id,
              title: this.selectedList.title
            };
            this.listOptionsModalRef = this.modalService.show(template);
          }
        }, {
          key: "updateListOptions",
          value: function updateListOptions() {
            var _this14 = this;

            this.listsClient.update(this.selectedList.id, _web_api_client__WEBPACK_IMPORTED_MODULE_0__.UpdateTodoListCommand.fromJS(this.listOptionsEditor)).subscribe(function () {
              _this14.selectedList.title = _this14.listOptionsEditor.title, _this14.listOptionsModalRef.hide();
              _this14.listOptionsEditor = {};
            }, function (error) {
              return console.error(error);
            });
          }
        }, {
          key: "confirmDeleteList",
          value: function confirmDeleteList(template) {
            this.listOptionsModalRef.hide();
            this.deleteListModalRef = this.modalService.show(template);
          }
        }, {
          key: "deleteListConfirmed",
          value: function deleteListConfirmed() {
            var _this15 = this;

            this.listsClient["delete"](this.selectedList.id).subscribe(function () {
              _this15.deleteListModalRef.hide();

              _this15.vm.lists = _this15.vm.lists.filter(function (t) {
                return t.id != _this15.selectedList.id;
              });
              _this15.selectedList = _this15.vm.lists.length ? _this15.vm.lists[0] : null;
            }, function (error) {
              return console.error(error);
            });
          } // Items

        }, {
          key: "showItemDetailsModal",
          value: function showItemDetailsModal(template, item) {
            this.selectedItem = item;
            this.itemDetailsEditor = Object.assign({}, this.selectedItem);
            this.itemDetailsModalRef = this.modalService.show(template);
          }
        }, {
          key: "updateItemDetails",
          value: function updateItemDetails() {
            var _this16 = this;

            this.itemsClient.updateItemDetails(this.selectedItem.id, _web_api_client__WEBPACK_IMPORTED_MODULE_0__.UpdateTodoItemDetailCommand.fromJS(this.itemDetailsEditor)).subscribe(function () {
              if (_this16.selectedItem.listId != _this16.itemDetailsEditor.listId) {
                _this16.selectedList.items = _this16.selectedList.items.filter(function (i) {
                  return i.id != _this16.selectedItem.id;
                });

                var listIndex = _this16.vm.lists.findIndex(function (l) {
                  return l.id == _this16.itemDetailsEditor.listId;
                });

                _this16.selectedItem.listId = _this16.itemDetailsEditor.listId;

                _this16.vm.lists[listIndex].items.push(_this16.selectedItem);
              }

              _this16.selectedItem.priority = _this16.itemDetailsEditor.priority;
              _this16.selectedItem.note = _this16.itemDetailsEditor.note;

              _this16.itemDetailsModalRef.hide();

              _this16.itemDetailsEditor = {};
            }, function (error) {
              return console.error(error);
            });
          }
        }, {
          key: "addItem",
          value: function addItem() {
            var item = _web_api_client__WEBPACK_IMPORTED_MODULE_0__.TodoItemDto.fromJS({
              id: 0,
              listId: this.selectedList.id,
              priority: this.vm.priorityLevels[0].value,
              title: '',
              done: false
            });

            this.selectedList.items.push(item);
            var index = this.selectedList.items.length - 1;
            this.editItem(item, 'itemTitle' + index);
          }
        }, {
          key: "editItem",
          value: function editItem(item, inputId) {
            this.selectedItem = item;
            setTimeout(function () {
              return document.getElementById(inputId).focus();
            }, 100);
          }
        }, {
          key: "updateItem",
          value: function updateItem(item) {
            var pressedEnter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var isNewItem = item.id == 0;

            if (!item.title.trim()) {
              this.deleteItem(item);
              return;
            }

            if (item.id == 0) {
              this.itemsClient.create(_web_api_client__WEBPACK_IMPORTED_MODULE_0__.CreateTodoItemCommand.fromJS(Object.assign(Object.assign({}, item), {
                listId: this.selectedList.id
              }))).subscribe(function (result) {
                item.id = result;
              }, function (error) {
                return console.error(error);
              });
            } else {
              this.itemsClient.update(item.id, _web_api_client__WEBPACK_IMPORTED_MODULE_0__.UpdateTodoItemCommand.fromJS(item)).subscribe(function () {
                return console.log('Update succeeded.');
              }, function (error) {
                return console.error(error);
              });
            }

            this.selectedItem = null;

            if (isNewItem && pressedEnter) {
              this.addItem();
            }
          } // Delete item

        }, {
          key: "deleteItem",
          value: function deleteItem(item) {
            var _this17 = this;

            if (this.itemDetailsModalRef) {
              this.itemDetailsModalRef.hide();
            }

            if (item.id == 0) {
              var itemIndex = this.selectedList.items.indexOf(this.selectedItem);
              this.selectedList.items.splice(itemIndex, 1);
            } else {
              this.itemsClient["delete"](item.id).subscribe(function () {
                return _this17.selectedList.items = _this17.selectedList.items.filter(function (t) {
                  return t.id != item.id;
                });
              }, function (error) {
                return console.error(error);
              });
            }
          }
        }]);

        return _TodoComponent;
      }();

      _TodoComponent.ɵfac = function TodoComponent_Factory(t) {
        return new (t || _TodoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_web_api_client__WEBPACK_IMPORTED_MODULE_0__.TodoListsClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_web_api_client__WEBPACK_IMPORTED_MODULE_0__.TodoItemsClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__.BsModalService));
      };

      _TodoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _TodoComponent,
        selectors: [["app-todo-component"]],
        decls: 15,
        vars: 3,
        consts: [[4, "ngIf"], ["listOptionsModalTemplate", ""], ["itemDetailsModalTemplate", ""], ["deleteListModalTemplate", ""], ["newListModalTemplate", ""], [1, "row"], [1, "col-sm-4"], [1, "clearfix"], [1, "float-left"], ["title", "Add List...", 1, "btn", "btn-default", "float-right", 3, "click"], [3, "icon"], [1, "list-group"], ["class", "list-group-item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["class", "col-sm-8", 4, "ngIf"], [1, "list-group-item", 3, "ngClass", "click"], [1, "float-right", "text-right"], [1, "badge", "badge-light"], [1, "col-sm-8"], ["id", "listOptions", "title", "List Options...", 1, "btn", "btn-default", "float-right", 3, "click"], ["id", "todo-items", 1, "list-group", "mb-2"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "list-group-item", 3, "click"], [1, "btn", "btn-default"], [1, "list-group-item"], [1, "d-flex"], [1, "todo-item-checkbox"], ["type", "checkbox", 3, "ngModel", "ngModelChange", "change"], [1, "flex-fill"], ["type", "text", "class", "form-control item-input-control", "autofocus", "autofocus", 3, "id", "ngModel", "ngModelChange", "keyup.enter", "blur", 4, "ngIf"], ["class", "todo-item-title", "class", "form-control item-input-control", 3, "ngClass", "click", 4, "ngIf"], [1, "todo-item-commands"], ["class", "btn btn-default btn-xs", "role", "button", 3, "click", 4, "ngIf"], ["type", "text", "autofocus", "autofocus", 1, "form-control", "item-input-control", 3, "id", "ngModel", "ngModelChange", "keyup.enter", "blur"], [1, "form-control", "item-input-control", 3, "ngClass", "click"], ["role", "button", 1, "btn", "btn-default", "btn-xs", 3, "click"], [1, "modal-header", "clearfix"], [1, "modal-title", "float-left"], ["type", "button", "aria-label", "Close", 1, "close", "float-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "form-group"], ["for", "inputListTitle"], ["type", "text", "id", "inputListTitle", "placeholder", "List name...", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup.enter"], [1, "modal-footer"], [1, "btn", "btn-default", "text-danger", 3, "click"], [1, "float-right"], [1, "btn", "btn-default", 3, "click"], [1, "btn", "btn-primary", 3, "click"], [1, "form"], ["for", "list"], [1, "form-control", 3, "ngModel", "ngModelChange"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["for", "priority"], ["for", "note"], ["id", "note", "rows", "3", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "ngValue"], [1, "text-right"], ["type", "button", 1, "btn", "btn-default", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], ["for", "title"], ["type", "text", "id", "title", "placeholder", "List title...", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange", "keyup.enter"], ["class", "invalid-feedback", 4, "ngIf"], [1, "invalid-feedback"]],
        template: function TodoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Todo");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "This is a complex todo list component.");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, TodoComponent_p_4_Template, 3, 0, "p", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, TodoComponent_div_5_Template, 11, 3, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, TodoComponent_div_6_Template, 4, 3, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, TodoComponent_ng_template_7_Template, 22, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, TodoComponent_ng_template_9_Template, 33, 6, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, TodoComponent_ng_template_11_Template, 16, 2, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, TodoComponent_ng_template_13_Template, 19, 6, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.vm);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.vm);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.debug);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FaIconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.JsonPipe],
        styles: ["#listOptions[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n#todo-items[_ngcontent-%COMP%]   .item-input-control[_ngcontent-%COMP%] {\n  border: 0;\n  box-shadow: none;\n  background-color: transparent;\n}\n\n#todo-items[_ngcontent-%COMP%]   .done-todo[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n}\n\n#todo-items[_ngcontent-%COMP%]   .todo-item-title[_ngcontent-%COMP%] {\n  padding-top: 8px;\n}\n\n#todo-items[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%] {\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\n\n#todo-items[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .btn-xs[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n#todo-items[_ngcontent-%COMP%]   .todo-item-checkbox[_ngcontent-%COMP%] {\n  padding-top: 8px;\n}\n\n#todo-items[_ngcontent-%COMP%]   .todo-item-commands[_ngcontent-%COMP%] {\n  padding-top: 4px;\n}\n\n.modal-footer[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGOztBQUdFO0VBQ0UsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7QUFBSjs7QUFHRTtFQUNFLDZCQUFBO0FBREo7O0FBSUU7RUFDRSxnQkFBQTtBQUZKOztBQUtFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQUhKOztBQUtJO0VBQ0UsVUFBQTtBQUhOOztBQU9FO0VBQ0UsZ0JBQUE7QUFMSjs7QUFRRTtFQUNFLGdCQUFBO0FBTko7O0FBVUE7RUFDRSxjQUFBO0FBUEYiLCJmaWxlIjoidG9kby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNsaXN0T3B0aW9ucyB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4jdG9kby1pdGVtcyB7XHJcbiAgLml0ZW0taW5wdXQtY29udHJvbCB7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG5cclxuICAuZG9uZS10b2RvIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG4gIH1cclxuXHJcbiAgLnRvZG8taXRlbS10aXRsZSB7XHJcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gIH1cclxuXHJcbiAgLmxpc3QtZ3JvdXAtaXRlbSB7XHJcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDhweDtcclxuXHJcbiAgICAuYnRuLXhzIHtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC50b2RvLWl0ZW0tY2hlY2tib3gge1xyXG4gICAgcGFkZGluZy10b3A6IDhweDtcclxuICB9XHJcblxyXG4gIC50b2RvLWl0ZW0tY29tbWFuZHMge1xyXG4gICAgcGFkZGluZy10b3A6IDRweDtcclxuICB9XHJcbn1cclxuXHJcbi5tb2RhbC1mb290ZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    4865:
    /*!******************************************!*\
      !*** ./src/app/token/token.component.ts ***!
      \******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TokenComponent": function TokenComponent() {
          return (
            /* binding */
            _TokenComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      9976);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _api_authorization_authorize_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../api-authorization/authorize.service */
      2551);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      4163);

      function TokenComponent_div_2_span_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Copied!");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function TokenComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " This component demonstrates interacting with the authorization service to retrieve your ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "JSON web token (JWT)");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, ". ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TokenComponent_div_2_Template_button_click_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r3.copyToClipboard();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "fa-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\xA0Copy ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, TokenComponent_div_2_span_16_Template, 2, 0, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.token);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r0.faCopy);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.isCopied);
        }
      }

      function TokenComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Error getting JWT");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Something went wrong getting your access token from the auth service. Please try again. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var _TokenComponent = /*#__PURE__*/function () {
        function _TokenComponent(authorizeService) {
          _classCallCheck(this, _TokenComponent);

          this.authorizeService = authorizeService;
          this.faCopy = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faCopy;
        }

        _createClass(_TokenComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this18 = this;

            this.isCopied = false;
            this.authorizeService.getAccessToken().subscribe(function (t) {
              _this18.token = "Bearer " + t;
              _this18.isError = false;
            }, function (err) {
              _this18.isError = true;
            });
          }
        }, {
          key: "copyToClipboard",
          value: function copyToClipboard() {
            var selBox = document.createElement("textarea");
            selBox.style.position = "fixed";
            selBox.style.left = "0";
            selBox.style.top = "0";
            selBox.style.opacity = "0";
            selBox.value = this.token;
            document.body.appendChild(selBox);
            selBox.focus();
            selBox.select();
            document.execCommand("copy");
            document.body.removeChild(selBox);
            this.isCopied = true;
          }
        }]);

        return _TokenComponent;
      }();

      _TokenComponent.ɵfac = function TokenComponent_Factory(t) {
        return new (t || _TokenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_api_authorization_authorize_service__WEBPACK_IMPORTED_MODULE_0__.AuthorizeService));
      };

      _TokenComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _TokenComponent,
        selectors: [["app-token-component"]],
        decls: 4,
        vars: 2,
        consts: [[4, "ngIf"], ["href", "https://jwt.io/", "target", "_blank"], [1, "card"], [1, "card-body"], ["id", "tokenContent"], [1, "btn", "btn-primary", 3, "click"], [3, "icon"], ["role", "alert", 1, "alert", "alert-danger"]],
        template: function TokenComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "JWT");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TokenComponent_div_2_Template, 17, 3, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TokenComponent_div_3_Template, 5, 0, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isError);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isError);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FaIconComponent],
        encapsulation: 2
      });
      /***/
    },

    /***/
    814:
    /*!***********************************!*\
      !*** ./src/app/web-api-client.ts ***!
      \***********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "API_BASE_URL": function API_BASE_URL() {
          return (
            /* binding */
            _API_BASE_URL
          );
        },

        /* harmony export */
        "EmployeeClient": function EmployeeClient() {
          return (
            /* binding */
            _EmployeeClient
          );
        },

        /* harmony export */
        "TodoItemsClient": function TodoItemsClient() {
          return (
            /* binding */
            _TodoItemsClient
          );
        },

        /* harmony export */
        "TodoListsClient": function TodoListsClient() {
          return (
            /* binding */
            _TodoListsClient
          );
        },

        /* harmony export */
        "WeatherForecastClient": function WeatherForecastClient() {
          return (
            /* binding */
            _WeatherForecastClient
          );
        },

        /* harmony export */
        "PaginatedListOfTodoItemDto": function PaginatedListOfTodoItemDto() {
          return (
            /* binding */
            _PaginatedListOfTodoItemDto
          );
        },

        /* harmony export */
        "TodoItemDto": function TodoItemDto() {
          return (
            /* binding */
            _TodoItemDto
          );
        },

        /* harmony export */
        "CreateTodoItemCommand": function CreateTodoItemCommand() {
          return (
            /* binding */
            _CreateTodoItemCommand
          );
        },

        /* harmony export */
        "UpdateTodoItemCommand": function UpdateTodoItemCommand() {
          return (
            /* binding */
            _UpdateTodoItemCommand
          );
        },

        /* harmony export */
        "UpdateTodoItemDetailCommand": function UpdateTodoItemDetailCommand() {
          return (
            /* binding */
            _UpdateTodoItemDetailCommand
          );
        },

        /* harmony export */
        "PriorityLevel": function PriorityLevel() {
          return (
            /* binding */
            _PriorityLevel
          );
        },

        /* harmony export */
        "TodosVm": function TodosVm() {
          return (
            /* binding */
            _TodosVm
          );
        },

        /* harmony export */
        "PriorityLevelDto": function PriorityLevelDto() {
          return (
            /* binding */
            _PriorityLevelDto
          );
        },

        /* harmony export */
        "TodoListDto": function TodoListDto() {
          return (
            /* binding */
            _TodoListDto
          );
        },

        /* harmony export */
        "CreateTodoListCommand": function CreateTodoListCommand() {
          return (
            /* binding */
            _CreateTodoListCommand
          );
        },

        /* harmony export */
        "UpdateTodoListCommand": function UpdateTodoListCommand() {
          return (
            /* binding */
            _UpdateTodoListCommand
          );
        },

        /* harmony export */
        "WeatherForecast": function WeatherForecast() {
          return (
            /* binding */
            _WeatherForecast
          );
        },

        /* harmony export */
        "SwaggerException": function SwaggerException() {
          return (
            /* binding */
            _SwaggerException
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      9773);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      5304);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      205);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      5917);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      9165);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      1841);
      /* tslint:disable */

      /* eslint-disable */
      //----------------------
      // <auto-generated>
      //     Generated using the NSwag toolchain v13.9.4.0 (NJsonSchema v10.3.1.0 (Newtonsoft.Json v12.0.0.0)) (http://NSwag.org)
      // </auto-generated>
      //----------------------
      // ReSharper disable InconsistentNaming


      var _API_BASE_URL = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('API_BASE_URL');

      var _EmployeeClient = /*#__PURE__*/function () {
        function _EmployeeClient(http, baseUrl) {
          _classCallCheck(this, _EmployeeClient);

          this.jsonParseReviver = undefined;
          this.http = http;
          this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
        }

        _createClass(_EmployeeClient, [{
          key: "getAll",
          value: function getAll() {
            var _this19 = this;

            var url_ = this.baseUrl + "/api/Employee";
            url_ = url_.replace(/[?&]$/, "");
            var options_ = {
              observe: "response",
              responseType: "blob",
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                "Accept": "application/json"
              })
            };
            return this.http.request("get", url_, options_).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(function (response_) {
              return _this19.processGetAll(response_);
            })).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(function (response_) {
              if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponseBase) {
                try {
                  return _this19.processGetAll(response_);
                } catch (e) {
                  return (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(e);
                }
              } else return (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(response_);
            }));
          }
        }, {
          key: "processGetAll",
          value: function processGetAll(response) {
            var _this20 = this;

            var status = response.status;
            var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponse ? response.body : response.error instanceof Blob ? response.error : undefined;
            var _headers = {};

            if (response.headers) {
              var _iterator = _createForOfIteratorHelper(response.headers.keys()),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var key = _step.value;
                  _headers[key] = response.headers.get(key);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            }

            if (status === 200) {
              return blobToText(responseBlob).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this20.jsonParseReviver);

                if (Array.isArray(resultData200)) {
                  result200 = [];

                  var _iterator2 = _createForOfIteratorHelper(resultData200),
                      _step2;

                  try {
                    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                      var item = _step2.value;
                      result200.push(item);
                    }
                  } catch (err) {
                    _iterator2.e(err);
                  } finally {
                    _iterator2.f();
                  }
                }

                return (0, rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(result200);
              }));
            } else if (status !== 200 && status !== 204) {
              return blobToText(responseBlob).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
              }));
            }

            return (0, rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(null);
          }
        }, {
          key: "post",
          value: function post(value) {
            var _this21 = this;

            var url_ = this.baseUrl + "/api/Employee";
            url_ = url_.replace(/[?&]$/, "");
            var content_ = JSON.stringify(value);
            var options_ = {
              body: content_,
              observe: "response",
              responseType: "blob",
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                "Content-Type": "application/json"
              })
            };
            return this.http.request("post", url_, options_).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(function (response_) {
              return _this21.processPost(response_);
            })).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(function (response_) {
              if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponseBase) {
                try {
                  return _this21.processPost(response_);
                } catch (e) {
                  return (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(e);
                }
              } else return (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(response_);
            }));
          }
        }, {
          key: "processPost",
          value: function processPost(response) {
            var status = response.status;
            var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponse ? response.body : response.error instanceof Blob ? response.error : undefined;
            var _headers = {};

            if (response.headers) {
              var _iterator3 = _createForOfIteratorHelper(response.headers.keys()),
                  _step3;

              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var key = _step3.value;
                  _headers[key] = response.headers.get(key);
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
            }

            if (status === 200) {
              return blobToText(responseBlob).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(function (_responseText) {
                return (0, rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(null);
              }));
            } else if (status !== 200 && status !== 204) {
              return blobToText(responseBlob).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
              }));
            }

            return (0, rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(null);
          }
        }, {
          key: "get",
          value: function get(id) {
            var _this22 = this;

            var url_ = this.baseUrl + "/api/Employee/{id}";
            if (id === undefined || id === null) throw new Error("The parameter 'id' must be defined.");
            url_ = url_.replace("{id}", encodeURIComponent("" + id));
            url_ = url_.replace(/[?&]$/, "");
            var options_ = {
              observe: "response",
              responseType: "blob",
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                "Accept": "application/json"
              })
            };
            return this.http.request("get", url_, options_).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(function (response_) {
              return _this22.processGet(response_);
            })).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(function (response_) {
              if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponseBase) {
                try {
                  return _this22.processGet(response_);
                } catch (e) {
                  return (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(e);
                }
              } else return (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(response_);
            }));
          }
        }, {
          key: "processGet",
          value: function processGet(response) {
            var _this23 = this;

            var status = response.status;
            var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponse ? response.body : response.error instanceof Blob ? response.error : undefined;
            var _headers = {};

            if (response.headers) {
              var _iterator4 = _createForOfIteratorHelper(response.headers.keys()),
                  _step4;

              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                  var key = _step4.value;
                  _headers[key] = response.headers.get(key);
                }
              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }
            }

            if (status === 200) {
              return blobToText(responseBlob).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this23.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : null;
                return (0, rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(result200);
              }));
            } else if (status !== 200 && status !== 204) {
              return blobToText(responseBlob).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
              }));
            }

            return (0, rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(null);
          }
        }, {
          key: "put",
          value: function put(id, value) {
            var _this24 = this;

            var url_ = this.baseUrl + "/api/Employee/{id}";
            if (id === undefined || id === null) throw new Error("The parameter 'id' must be defined.");
            url_ = url_.replace("{id}", encodeURIComponent("" + id));
            url_ = url_.replace(/[?&]$/, "");
            var content_ = JSON.stringify(value);
            var options_ = {
              body: content_,
              observe: "response",
              responseType: "blob",
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                "Content-Type": "application/json"
              })
            };
            return this.http.request("put", url_, options_).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(function (response_) {
              return _this24.processPut(response_);
            })).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(function (response_) {
              if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponseBase) {
                try {
                  return _this24.processPut(response_);
                } catch (e) {
                  return (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(e);
                }
              } else return (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(response_);
            }));
          }
        }, {
          key: "processPut",
          value: function processPut(response) {
            var status = response.status;
            var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponse ? response.body : response.error instanceof Blob ? response.error : undefined;
            var _headers = {};

            if (response.headers) {
              var _iterator5 = _createForOfIteratorHelper(response.headers.keys()),
                  _step5;

              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                  var key = _step5.value;
                  _headers[key] = response.headers.get(key);
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }
            }

            if (status === 200) {
              return blobToText(responseBlob).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(function (_responseText) {
                return (0, rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(null);
              }));
            } else if (status !== 200 && status !== 204) {
              return blobToText(responseBlob).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
              }));
            }

            return (0, rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(null);
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            var _this25 = this;

            var url_ = this.baseUrl + "/api/Employee/{id}";
            if (id === undefined || id === null) throw new Error("The parameter 'id' must be defined.");
            url_ = url_.replace("{id}", encodeURIComponent("" + id));
            url_ = url_.replace(/[?&]$/, "");
            var options_ = {
              observe: "response",
              responseType: "blob",
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({})
            };
            return this.http.request("delete", url_, options_).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(function (response_) {
              return _this25.processDelete(response_);
            })).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(function (response_) {
              if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponseBase) {
                try {
                  return _this25.processDelete(response_);
                } catch (e) {
                  return (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(e);
                }
              } else return (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(response_);
            }));
          }
        }, {
          key: "processDelete",
          value: function processDelete(response) {
            var status = response.status;
            var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponse ? response.body : response.error instanceof Blob ? response.error : undefined;
            var _headers = {};

            if (response.headers) {
              var _iterator6 = _createForOfIteratorHelper(response.headers.keys()),
                  _step6;

              try {
                for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                  var key = _step6.value;
                  _headers[key] = response.headers.get(key);
                }
              } catch (err) {
                _iterator6.e(err);
              } finally {
                _iterator6.f();
              }
            }

            if (status === 200) {
              return blobToText(responseBlob).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(function (_responseText) {
                return (0, rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(null);
              }));
            } else if (status !== 200 && status !== 204) {
              return blobToText(responseBlob).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
              }));
            }

            return (0, rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(null);
          }
        }]);

        return _EmployeeClient;
      }();

      _EmployeeClient.ɵfac = function EmployeeClient_Factory(t) {
        return new (t || _EmployeeClient)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_API_BASE_URL, 8));
      };

      _EmployeeClient.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _EmployeeClient,
        factory: _EmployeeClient.ɵfac,
        providedIn: 'root'
      });

      var _TodoItemsClient = /*#__PURE__*/function () {
        function _TodoItemsClient(http, baseUrl) {
          _classCallCheck(this, _TodoItemsClient);

          this.jsonParseReviver = undefined;
          this.http = http;
          this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
        }

        _createClass(_TodoItemsClient, [{
          key: "getTodoItemsWithPagination",
          value: function getTodoItemsWithPagination(listId, pageNumber, pageSize) {
            var _this26 = this;

            var url_ = this.baseUrl + "/api/TodoItems?";
            if (listId === null) throw new Error("The parameter 'listId' cannot be null.");else if (listId !== undefined) url_ += "ListId=" + encodeURIComponent("" + listId) + "&";
            if (pageNumber === null) throw new Error("The parameter 'pageNumber' cannot be null.");else if (pageNumber !== undefined) url_ += "PageNumber=" + encodeURIComponent("" + pageNumber) + "&";
            if (pageSize === null) throw new Error("The parameter 'pageSize' cannot be null.");else if (pageSize !== undefined) url_ += "PageSize=" + encodeURIComponent("" + pageSize) + "&";
            url_ = url_.replace(/[?&]$/, "");
            var options_ = {
              observe: "response",
              responseType: "blob",
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                "Accept": "application/json"
              })
            };
            return this.http.request("get", url_, options_).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(function (response_) {
              return _this26.processGetTodoItemsWithPagination(response_);
            })).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(function (response_) {
              if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponseBase) {
                try {
                  return _this26.processGetTodoItemsWithPagination(response_);
                } catch (e) {
                  return (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(e);
                }
              } else return (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(response_);
            }));
          }
        }, {
          key: "processGetTodoItemsWithPagination",
          value: function processGetTodoItemsWithPagination(response) {
            var _this27 = this;

            var status = response.status;
            var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponse ? response.body : response.error instanceof Blob ? response.error : undefined;
            var _headers = {};

            if (response.headers) {
              var _iterator7 = _createForOfIteratorHelper(response.headers.keys()),
                  _step7;

              try {
                for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                  var key = _step7.value;
                  _headers[key] = response.headers.get(key);
                }
              } catch (err) {
                _iterator7.e(err);
              } finally {
                _iterator7.f();
              }
            }

            if (status === 200) {
              return blobToText(responseBlob).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this27.jsonParseReviver);
                result200 = _PaginatedListOfTodoItemDto.fromJS(resultData200);
                return (0, rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(result200);
              }));
            } else if (status !== 200 && status !== 204) {
              return blobToText(responseBlob).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
              }));
            }

            return (0, rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(null);
          }
        }, {
          key: "create",
          value: function create(command) {
            var _this28 = this;

            var url_ = this.baseUrl + "/api/TodoItems";
            url_ = url_.replace(/[?&]$/, "");
            var content_ = JSON.stringify(command);
            var options_ = {
              body: content_,
              observe: "response",
              responseType: "blob",
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                "Content-Type": "application/json",
                "Accept": "application/json"
              })
            };
            return this.http.request("post", url_, options_).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(function (response_) {
              return _this28.processCreate(response_);
            })).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(function (response_) {
              if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponseBase) {
                try {
                  return _this28.processCreate(response_);
                } catch (e) {
                  return (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(e);
                }
              } else return (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(response_);
            }));
          }
        }, {
          key: "processCreate",
          value: function processCreate(response) {
            var _this29 = this;

            var status = response.status;
            var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponse ? response.body : response.error instanceof Blob ? response.error : undefined;
            var _headers = {};

            if (response.headers) {
              var _iterator8 = _createForOfIteratorHelper(response.headers.keys()),
                  _step8;

              try {
                for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                  var key = _step8.value;
                  _headers[key] = response.headers.get(key);
                }
              } catch (err) {
                _iterator8.e(err);
              } finally {
                _iterator8.f();
              }
            }

            if (status === 200) {
              return blobToText(responseBlob).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this29.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : null;
                return (0, rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(result200);
              }));
            } else if (status !== 200 && status !== 204) {
              return blobToText(responseBlob).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
              }));
            }

            return (0, rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(null);
          }
        }, {
          key: "update",
          value: function update(id, command) {
            var _this30 = this;

            var url_ = this.baseUrl + "/api/TodoItems/{id}";
            if (id === undefined || id === null) throw new Error("The parameter 'id' must be defined.");
            url_ = url_.replace("{id}", encodeURIComponent("" + id));
            url_ = url_.replace(/[?&]$/, "");
            var content_ = JSON.stringify(command);
            var options_ = {
              body: content_,
              observe: "response",
              responseType: "blob",
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                "Content-Type": "application/json",
                "Accept": "application/octet-stream"
              })
            };
            return this.http.request("put", url_, options_).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(function (response_) {
              return _this30.processUpdate(response_);
            })).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(function (response_) {
              if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponseBase) {
                try {
                  return _this30.processUpdate(response_);
                } catch (e) {
                  return (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(e);
                }
              } else return (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(response_);
            }));
          }
        }, {
          key: "processUpdate",
          value: function processUpdate(response) {
            var status = response.status;
            var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponse ? response.body : response.error instanceof Blob ? response.error : undefined;
            var _headers = {};

            if (response.headers) {
              var _iterator9 = _createForOfIteratorHelper(response.headers.keys()),
                  _step9;

              try {
                for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                  var key = _step9.value;
                  _headers[key] = response.headers.get(key);
                }
              } catch (err) {
                _iterator9.e(err);
              } finally {
                _iterator9.f();
              }
            }

            if (status === 200 || status === 206) {
              var contentDisposition = response.headers ? response.headers.get("content-disposition") : undefined;
              var fileNameMatch = contentDisposition ? /filename="?([^"]*?)"?(;|$)/g.exec(contentDisposition) : undefined;
              var fileName = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[1] : undefined;
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_5__.of)({
                fileName: fileName,
                data: responseBlob,
                status: status,
                headers: _headers
              });
            } else if (status !== 200 && status !== 204) {
              return blobToText(responseBlob).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
              }));
            }

            return (0, rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(null);
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            var _this31 = this;

            var url_ = this.baseUrl + "/api/TodoItems/{id}";
            if (id === undefined || id === null) throw new Error("The parameter 'id' must be defined.");
            url_ = url_.replace("{id}", encodeURIComponent("" + id));
            url_ = url_.replace(/[?&]$/, "");
            var options_ = {
              observe: "response",
              responseType: "blob",
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                "Accept": "application/octet-stream"
              })
            };
            return this.http.request("delete", url_, options_).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(function (response_) {
              return _this31.processDelete(response_);
            })).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(function (response_) {
              if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponseBase) {
                try {
                  return _this31.processDelete(response_);
                } catch (e) {
                  return (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(e);
                }
              } else return (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(response_);
            }));
          }
        }, {
          key: "processDelete",
          value: function processDelete(response) {
            var status = response.status;
            var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponse ? response.body : response.error instanceof Blob ? response.error : undefined;
            var _headers = {};

            if (response.headers) {
              var _iterator10 = _createForOfIteratorHelper(response.headers.keys()),
                  _step10;

              try {
                for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                  var key = _step10.value;
                  _headers[key] = response.headers.get(key);
                }
              } catch (err) {
                _iterator10.e(err);
              } finally {
                _iterator10.f();
              }
            }

            if (status === 200 || status === 206) {
              var contentDisposition = response.headers ? response.headers.get("content-disposition") : undefined;
              var fileNameMatch = contentDisposition ? /filename="?([^"]*?)"?(;|$)/g.exec(contentDisposition) : undefined;
              var fileName = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[1] : undefined;
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_5__.of)({
                fileName: fileName,
                data: responseBlob,
                status: status,
                headers: _headers
              });
            } else if (status !== 200 && status !== 204) {
              return blobToText(responseBlob).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
              }));
            }

            return (0, rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(null);
          }
        }, {
          key: "updateItemDetails",
          value: function updateItemDetails(id, command) {
            var _this32 = this;

            var url_ = this.baseUrl + "/api/TodoItems/UpdateItemDetails?";
            if (id === null) throw new Error("The parameter 'id' cannot be null.");else if (id !== undefined) url_ += "id=" + encodeURIComponent("" + id) + "&";
            url_ = url_.replace(/[?&]$/, "");
            var content_ = JSON.stringify(command);
            var options_ = {
              body: content_,
              observe: "response",
              responseType: "blob",
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                "Content-Type": "application/json",
                "Accept": "application/octet-stream"
              })
            };
            return this.http.request("put", url_, options_).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(function (response_) {
              return _this32.processUpdateItemDetails(response_);
            })).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(function (response_) {
              if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponseBase) {
                try {
                  return _this32.processUpdateItemDetails(response_);
                } catch (e) {
                  return (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(e);
                }
              } else return (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(response_);
            }));
          }
        }, {
          key: "processUpdateItemDetails",
          value: function processUpdateItemDetails(response) {
            var status = response.status;
            var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponse ? response.body : response.error instanceof Blob ? response.error : undefined;
            var _headers = {};

            if (response.headers) {
              var _iterator11 = _createForOfIteratorHelper(response.headers.keys()),
                  _step11;

              try {
                for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                  var key = _step11.value;
                  _headers[key] = response.headers.get(key);
                }
              } catch (err) {
                _iterator11.e(err);
              } finally {
                _iterator11.f();
              }
            }

            if (status === 200 || status === 206) {
              var contentDisposition = response.headers ? response.headers.get("content-disposition") : undefined;
              var fileNameMatch = contentDisposition ? /filename="?([^"]*?)"?(;|$)/g.exec(contentDisposition) : undefined;
              var fileName = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[1] : undefined;
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_5__.of)({
                fileName: fileName,
                data: responseBlob,
                status: status,
                headers: _headers
              });
            } else if (status !== 200 && status !== 204) {
              return blobToText(responseBlob).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
              }));
            }

            return (0, rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(null);
          }
        }]);

        return _TodoItemsClient;
      }();

      _TodoItemsClient.ɵfac = function TodoItemsClient_Factory(t) {
        return new (t || _TodoItemsClient)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_API_BASE_URL, 8));
      };

      _TodoItemsClient.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _TodoItemsClient,
        factory: _TodoItemsClient.ɵfac,
        providedIn: 'root'
      });

      var _TodoListsClient = /*#__PURE__*/function () {
        function _TodoListsClient(http, baseUrl) {
          _classCallCheck(this, _TodoListsClient);

          this.jsonParseReviver = undefined;
          this.http = http;
          this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
        }

        _createClass(_TodoListsClient, [{
          key: "get",
          value: function get() {
            var _this33 = this;

            var url_ = this.baseUrl + "/api/TodoLists";
            url_ = url_.replace(/[?&]$/, "");
            var options_ = {
              observe: "response",
              responseType: "blob",
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                "Accept": "application/json"
              })
            };
            return this.http.request("get", url_, options_).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(function (response_) {
              return _this33.processGet(response_);
            })).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(function (response_) {
              if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponseBase) {
                try {
                  return _this33.processGet(response_);
                } catch (e) {
                  return (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(e);
                }
              } else return (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(response_);
            }));
          }
        }, {
          key: "processGet",
          value: function processGet(response) {
            var _this34 = this;

            var status = response.status;
            var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponse ? response.body : response.error instanceof Blob ? response.error : undefined;
            var _headers = {};

            if (response.headers) {
              var _iterator12 = _createForOfIteratorHelper(response.headers.keys()),
                  _step12;

              try {
                for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                  var key = _step12.value;
                  _headers[key] = response.headers.get(key);
                }
              } catch (err) {
                _iterator12.e(err);
              } finally {
                _iterator12.f();
              }
            }

            if (status === 200) {
              return blobToText(responseBlob).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this34.jsonParseReviver);
                result200 = _TodosVm.fromJS(resultData200);
                return (0, rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(result200);
              }));
            } else if (status !== 200 && status !== 204) {
              return blobToText(responseBlob).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
              }));
            }

            return (0, rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(null);
          }
        }, {
          key: "create",
          value: function create(command) {
            var _this35 = this;

            var url_ = this.baseUrl + "/api/TodoLists";
            url_ = url_.replace(/[?&]$/, "");
            var content_ = JSON.stringify(command);
            var options_ = {
              body: content_,
              observe: "response",
              responseType: "blob",
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                "Content-Type": "application/json",
                "Accept": "application/json"
              })
            };
            return this.http.request("post", url_, options_).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(function (response_) {
              return _this35.processCreate(response_);
            })).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(function (response_) {
              if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponseBase) {
                try {
                  return _this35.processCreate(response_);
                } catch (e) {
                  return (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(e);
                }
              } else return (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(response_);
            }));
          }
        }, {
          key: "processCreate",
          value: function processCreate(response) {
            var _this36 = this;

            var status = response.status;
            var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponse ? response.body : response.error instanceof Blob ? response.error : undefined;
            var _headers = {};

            if (response.headers) {
              var _iterator13 = _createForOfIteratorHelper(response.headers.keys()),
                  _step13;

              try {
                for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                  var key = _step13.value;
                  _headers[key] = response.headers.get(key);
                }
              } catch (err) {
                _iterator13.e(err);
              } finally {
                _iterator13.f();
              }
            }

            if (status === 200) {
              return blobToText(responseBlob).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this36.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : null;
                return (0, rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(result200);
              }));
            } else if (status !== 200 && status !== 204) {
              return blobToText(responseBlob).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
              }));
            }

            return (0, rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(null);
          }
        }, {
          key: "get2",
          value: function get2(id) {
            var _this37 = this;

            var url_ = this.baseUrl + "/api/TodoLists/{id}";
            if (id === undefined || id === null) throw new Error("The parameter 'id' must be defined.");
            url_ = url_.replace("{id}", encodeURIComponent("" + id));
            url_ = url_.replace(/[?&]$/, "");
            var options_ = {
              observe: "response",
              responseType: "blob",
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                "Accept": "application/octet-stream"
              })
            };
            return this.http.request("get", url_, options_).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(function (response_) {
              return _this37.processGet2(response_);
            })).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(function (response_) {
              if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponseBase) {
                try {
                  return _this37.processGet2(response_);
                } catch (e) {
                  return (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(e);
                }
              } else return (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(response_);
            }));
          }
        }, {
          key: "processGet2",
          value: function processGet2(response) {
            var status = response.status;
            var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponse ? response.body : response.error instanceof Blob ? response.error : undefined;
            var _headers = {};

            if (response.headers) {
              var _iterator14 = _createForOfIteratorHelper(response.headers.keys()),
                  _step14;

              try {
                for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
                  var key = _step14.value;
                  _headers[key] = response.headers.get(key);
                }
              } catch (err) {
                _iterator14.e(err);
              } finally {
                _iterator14.f();
              }
            }

            if (status === 200 || status === 206) {
              var contentDisposition = response.headers ? response.headers.get("content-disposition") : undefined;
              var fileNameMatch = contentDisposition ? /filename="?([^"]*?)"?(;|$)/g.exec(contentDisposition) : undefined;
              var fileName = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[1] : undefined;
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_5__.of)({
                fileName: fileName,
                data: responseBlob,
                status: status,
                headers: _headers
              });
            } else if (status !== 200 && status !== 204) {
              return blobToText(responseBlob).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
              }));
            }

            return (0, rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(null);
          }
        }, {
          key: "update",
          value: function update(id, command) {
            var _this38 = this;

            var url_ = this.baseUrl + "/api/TodoLists/{id}";
            if (id === undefined || id === null) throw new Error("The parameter 'id' must be defined.");
            url_ = url_.replace("{id}", encodeURIComponent("" + id));
            url_ = url_.replace(/[?&]$/, "");
            var content_ = JSON.stringify(command);
            var options_ = {
              body: content_,
              observe: "response",
              responseType: "blob",
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                "Content-Type": "application/json",
                "Accept": "application/octet-stream"
              })
            };
            return this.http.request("put", url_, options_).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(function (response_) {
              return _this38.processUpdate(response_);
            })).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(function (response_) {
              if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponseBase) {
                try {
                  return _this38.processUpdate(response_);
                } catch (e) {
                  return (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(e);
                }
              } else return (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(response_);
            }));
          }
        }, {
          key: "processUpdate",
          value: function processUpdate(response) {
            var status = response.status;
            var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponse ? response.body : response.error instanceof Blob ? response.error : undefined;
            var _headers = {};

            if (response.headers) {
              var _iterator15 = _createForOfIteratorHelper(response.headers.keys()),
                  _step15;

              try {
                for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
                  var key = _step15.value;
                  _headers[key] = response.headers.get(key);
                }
              } catch (err) {
                _iterator15.e(err);
              } finally {
                _iterator15.f();
              }
            }

            if (status === 200 || status === 206) {
              var contentDisposition = response.headers ? response.headers.get("content-disposition") : undefined;
              var fileNameMatch = contentDisposition ? /filename="?([^"]*?)"?(;|$)/g.exec(contentDisposition) : undefined;
              var fileName = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[1] : undefined;
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_5__.of)({
                fileName: fileName,
                data: responseBlob,
                status: status,
                headers: _headers
              });
            } else if (status !== 200 && status !== 204) {
              return blobToText(responseBlob).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
              }));
            }

            return (0, rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(null);
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            var _this39 = this;

            var url_ = this.baseUrl + "/api/TodoLists/{id}";
            if (id === undefined || id === null) throw new Error("The parameter 'id' must be defined.");
            url_ = url_.replace("{id}", encodeURIComponent("" + id));
            url_ = url_.replace(/[?&]$/, "");
            var options_ = {
              observe: "response",
              responseType: "blob",
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                "Accept": "application/octet-stream"
              })
            };
            return this.http.request("delete", url_, options_).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(function (response_) {
              return _this39.processDelete(response_);
            })).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(function (response_) {
              if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponseBase) {
                try {
                  return _this39.processDelete(response_);
                } catch (e) {
                  return (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(e);
                }
              } else return (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(response_);
            }));
          }
        }, {
          key: "processDelete",
          value: function processDelete(response) {
            var status = response.status;
            var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponse ? response.body : response.error instanceof Blob ? response.error : undefined;
            var _headers = {};

            if (response.headers) {
              var _iterator16 = _createForOfIteratorHelper(response.headers.keys()),
                  _step16;

              try {
                for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
                  var key = _step16.value;
                  _headers[key] = response.headers.get(key);
                }
              } catch (err) {
                _iterator16.e(err);
              } finally {
                _iterator16.f();
              }
            }

            if (status === 200 || status === 206) {
              var contentDisposition = response.headers ? response.headers.get("content-disposition") : undefined;
              var fileNameMatch = contentDisposition ? /filename="?([^"]*?)"?(;|$)/g.exec(contentDisposition) : undefined;
              var fileName = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[1] : undefined;
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_5__.of)({
                fileName: fileName,
                data: responseBlob,
                status: status,
                headers: _headers
              });
            } else if (status !== 200 && status !== 204) {
              return blobToText(responseBlob).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
              }));
            }

            return (0, rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(null);
          }
        }]);

        return _TodoListsClient;
      }();

      _TodoListsClient.ɵfac = function TodoListsClient_Factory(t) {
        return new (t || _TodoListsClient)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_API_BASE_URL, 8));
      };

      _TodoListsClient.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _TodoListsClient,
        factory: _TodoListsClient.ɵfac,
        providedIn: 'root'
      });

      var _WeatherForecastClient = /*#__PURE__*/function () {
        function _WeatherForecastClient(http, baseUrl) {
          _classCallCheck(this, _WeatherForecastClient);

          this.jsonParseReviver = undefined;
          this.http = http;
          this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
        }

        _createClass(_WeatherForecastClient, [{
          key: "get",
          value: function get() {
            var _this40 = this;

            var url_ = this.baseUrl + "/api/WeatherForecast";
            url_ = url_.replace(/[?&]$/, "");
            var options_ = {
              observe: "response",
              responseType: "blob",
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                "Accept": "application/json"
              })
            };
            return this.http.request("get", url_, options_).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(function (response_) {
              return _this40.processGet(response_);
            })).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(function (response_) {
              if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponseBase) {
                try {
                  return _this40.processGet(response_);
                } catch (e) {
                  return (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(e);
                }
              } else return (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(response_);
            }));
          }
        }, {
          key: "processGet",
          value: function processGet(response) {
            var _this41 = this;

            var status = response.status;
            var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponse ? response.body : response.error instanceof Blob ? response.error : undefined;
            var _headers = {};

            if (response.headers) {
              var _iterator17 = _createForOfIteratorHelper(response.headers.keys()),
                  _step17;

              try {
                for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
                  var key = _step17.value;
                  _headers[key] = response.headers.get(key);
                }
              } catch (err) {
                _iterator17.e(err);
              } finally {
                _iterator17.f();
              }
            }

            if (status === 200) {
              return blobToText(responseBlob).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this41.jsonParseReviver);

                if (Array.isArray(resultData200)) {
                  result200 = [];

                  var _iterator18 = _createForOfIteratorHelper(resultData200),
                      _step18;

                  try {
                    for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
                      var item = _step18.value;
                      result200.push(_WeatherForecast.fromJS(item));
                    }
                  } catch (err) {
                    _iterator18.e(err);
                  } finally {
                    _iterator18.f();
                  }
                }

                return (0, rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(result200);
              }));
            } else if (status !== 200 && status !== 204) {
              return blobToText(responseBlob).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
              }));
            }

            return (0, rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(null);
          }
        }]);

        return _WeatherForecastClient;
      }();

      _WeatherForecastClient.ɵfac = function WeatherForecastClient_Factory(t) {
        return new (t || _WeatherForecastClient)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_API_BASE_URL, 8));
      };

      _WeatherForecastClient.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _WeatherForecastClient,
        factory: _WeatherForecastClient.ɵfac,
        providedIn: 'root'
      });

      var _PaginatedListOfTodoItemDto = /*#__PURE__*/function () {
        function _PaginatedListOfTodoItemDto(data) {
          _classCallCheck(this, _PaginatedListOfTodoItemDto);

          if (data) {
            for (var property in data) {
              if (data.hasOwnProperty(property)) this[property] = data[property];
            }
          }
        }

        _createClass(_PaginatedListOfTodoItemDto, [{
          key: "init",
          value: function init(_data) {
            if (_data) {
              if (Array.isArray(_data["items"])) {
                this.items = [];

                var _iterator19 = _createForOfIteratorHelper(_data["items"]),
                    _step19;

                try {
                  for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
                    var item = _step19.value;
                    this.items.push(_TodoItemDto.fromJS(item));
                  }
                } catch (err) {
                  _iterator19.e(err);
                } finally {
                  _iterator19.f();
                }
              }

              this.pageIndex = _data["pageIndex"];
              this.totalPages = _data["totalPages"];
              this.totalCount = _data["totalCount"];
              this.hasPreviousPage = _data["hasPreviousPage"];
              this.hasNextPage = _data["hasNextPage"];
            }
          }
        }, {
          key: "toJSON",
          value: function toJSON(data) {
            data = typeof data === 'object' ? data : {};

            if (Array.isArray(this.items)) {
              data["items"] = [];

              var _iterator20 = _createForOfIteratorHelper(this.items),
                  _step20;

              try {
                for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
                  var item = _step20.value;
                  data["items"].push(item.toJSON());
                }
              } catch (err) {
                _iterator20.e(err);
              } finally {
                _iterator20.f();
              }
            }

            data["pageIndex"] = this.pageIndex;
            data["totalPages"] = this.totalPages;
            data["totalCount"] = this.totalCount;
            data["hasPreviousPage"] = this.hasPreviousPage;
            data["hasNextPage"] = this.hasNextPage;
            return data;
          }
        }], [{
          key: "fromJS",
          value: function fromJS(data) {
            data = typeof data === 'object' ? data : {};
            var result = new _PaginatedListOfTodoItemDto();
            result.init(data);
            return result;
          }
        }]);

        return _PaginatedListOfTodoItemDto;
      }();

      var _TodoItemDto = /*#__PURE__*/function () {
        function _TodoItemDto(data) {
          _classCallCheck(this, _TodoItemDto);

          if (data) {
            for (var property in data) {
              if (data.hasOwnProperty(property)) this[property] = data[property];
            }
          }
        }

        _createClass(_TodoItemDto, [{
          key: "init",
          value: function init(_data) {
            if (_data) {
              this.id = _data["id"];
              this.listId = _data["listId"];
              this.title = _data["title"];
              this.done = _data["done"];
              this.priority = _data["priority"];
              this.note = _data["note"];
            }
          }
        }, {
          key: "toJSON",
          value: function toJSON(data) {
            data = typeof data === 'object' ? data : {};
            data["id"] = this.id;
            data["listId"] = this.listId;
            data["title"] = this.title;
            data["done"] = this.done;
            data["priority"] = this.priority;
            data["note"] = this.note;
            return data;
          }
        }], [{
          key: "fromJS",
          value: function fromJS(data) {
            data = typeof data === 'object' ? data : {};
            var result = new _TodoItemDto();
            result.init(data);
            return result;
          }
        }]);

        return _TodoItemDto;
      }();

      var _CreateTodoItemCommand = /*#__PURE__*/function () {
        function _CreateTodoItemCommand(data) {
          _classCallCheck(this, _CreateTodoItemCommand);

          if (data) {
            for (var property in data) {
              if (data.hasOwnProperty(property)) this[property] = data[property];
            }
          }
        }

        _createClass(_CreateTodoItemCommand, [{
          key: "init",
          value: function init(_data) {
            if (_data) {
              this.listId = _data["listId"];
              this.title = _data["title"];
            }
          }
        }, {
          key: "toJSON",
          value: function toJSON(data) {
            data = typeof data === 'object' ? data : {};
            data["listId"] = this.listId;
            data["title"] = this.title;
            return data;
          }
        }], [{
          key: "fromJS",
          value: function fromJS(data) {
            data = typeof data === 'object' ? data : {};
            var result = new _CreateTodoItemCommand();
            result.init(data);
            return result;
          }
        }]);

        return _CreateTodoItemCommand;
      }();

      var _UpdateTodoItemCommand = /*#__PURE__*/function () {
        function _UpdateTodoItemCommand(data) {
          _classCallCheck(this, _UpdateTodoItemCommand);

          if (data) {
            for (var property in data) {
              if (data.hasOwnProperty(property)) this[property] = data[property];
            }
          }
        }

        _createClass(_UpdateTodoItemCommand, [{
          key: "init",
          value: function init(_data) {
            if (_data) {
              this.id = _data["id"];
              this.title = _data["title"];
              this.done = _data["done"];
            }
          }
        }, {
          key: "toJSON",
          value: function toJSON(data) {
            data = typeof data === 'object' ? data : {};
            data["id"] = this.id;
            data["title"] = this.title;
            data["done"] = this.done;
            return data;
          }
        }], [{
          key: "fromJS",
          value: function fromJS(data) {
            data = typeof data === 'object' ? data : {};
            var result = new _UpdateTodoItemCommand();
            result.init(data);
            return result;
          }
        }]);

        return _UpdateTodoItemCommand;
      }();

      var _UpdateTodoItemDetailCommand = /*#__PURE__*/function () {
        function _UpdateTodoItemDetailCommand(data) {
          _classCallCheck(this, _UpdateTodoItemDetailCommand);

          if (data) {
            for (var property in data) {
              if (data.hasOwnProperty(property)) this[property] = data[property];
            }
          }
        }

        _createClass(_UpdateTodoItemDetailCommand, [{
          key: "init",
          value: function init(_data) {
            if (_data) {
              this.id = _data["id"];
              this.listId = _data["listId"];
              this.priority = _data["priority"];
              this.note = _data["note"];
            }
          }
        }, {
          key: "toJSON",
          value: function toJSON(data) {
            data = typeof data === 'object' ? data : {};
            data["id"] = this.id;
            data["listId"] = this.listId;
            data["priority"] = this.priority;
            data["note"] = this.note;
            return data;
          }
        }], [{
          key: "fromJS",
          value: function fromJS(data) {
            data = typeof data === 'object' ? data : {};
            var result = new _UpdateTodoItemDetailCommand();
            result.init(data);
            return result;
          }
        }]);

        return _UpdateTodoItemDetailCommand;
      }();

      var _PriorityLevel;

      (function (PriorityLevel) {
        PriorityLevel[PriorityLevel["None"] = 0] = "None";
        PriorityLevel[PriorityLevel["Low"] = 1] = "Low";
        PriorityLevel[PriorityLevel["Medium"] = 2] = "Medium";
        PriorityLevel[PriorityLevel["High"] = 3] = "High";
      })(_PriorityLevel || (_PriorityLevel = {}));

      var _TodosVm = /*#__PURE__*/function () {
        function _TodosVm(data) {
          _classCallCheck(this, _TodosVm);

          if (data) {
            for (var property in data) {
              if (data.hasOwnProperty(property)) this[property] = data[property];
            }
          }
        }

        _createClass(_TodosVm, [{
          key: "init",
          value: function init(_data) {
            if (_data) {
              if (Array.isArray(_data["priorityLevels"])) {
                this.priorityLevels = [];

                var _iterator21 = _createForOfIteratorHelper(_data["priorityLevels"]),
                    _step21;

                try {
                  for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
                    var item = _step21.value;
                    this.priorityLevels.push(_PriorityLevelDto.fromJS(item));
                  }
                } catch (err) {
                  _iterator21.e(err);
                } finally {
                  _iterator21.f();
                }
              }

              if (Array.isArray(_data["lists"])) {
                this.lists = [];

                var _iterator22 = _createForOfIteratorHelper(_data["lists"]),
                    _step22;

                try {
                  for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
                    var _item = _step22.value;
                    this.lists.push(_TodoListDto.fromJS(_item));
                  }
                } catch (err) {
                  _iterator22.e(err);
                } finally {
                  _iterator22.f();
                }
              }
            }
          }
        }, {
          key: "toJSON",
          value: function toJSON(data) {
            data = typeof data === 'object' ? data : {};

            if (Array.isArray(this.priorityLevels)) {
              data["priorityLevels"] = [];

              var _iterator23 = _createForOfIteratorHelper(this.priorityLevels),
                  _step23;

              try {
                for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
                  var item = _step23.value;
                  data["priorityLevels"].push(item.toJSON());
                }
              } catch (err) {
                _iterator23.e(err);
              } finally {
                _iterator23.f();
              }
            }

            if (Array.isArray(this.lists)) {
              data["lists"] = [];

              var _iterator24 = _createForOfIteratorHelper(this.lists),
                  _step24;

              try {
                for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
                  var _item2 = _step24.value;
                  data["lists"].push(_item2.toJSON());
                }
              } catch (err) {
                _iterator24.e(err);
              } finally {
                _iterator24.f();
              }
            }

            return data;
          }
        }], [{
          key: "fromJS",
          value: function fromJS(data) {
            data = typeof data === 'object' ? data : {};
            var result = new _TodosVm();
            result.init(data);
            return result;
          }
        }]);

        return _TodosVm;
      }();

      var _PriorityLevelDto = /*#__PURE__*/function () {
        function _PriorityLevelDto(data) {
          _classCallCheck(this, _PriorityLevelDto);

          if (data) {
            for (var property in data) {
              if (data.hasOwnProperty(property)) this[property] = data[property];
            }
          }
        }

        _createClass(_PriorityLevelDto, [{
          key: "init",
          value: function init(_data) {
            if (_data) {
              this.value = _data["value"];
              this.name = _data["name"];
            }
          }
        }, {
          key: "toJSON",
          value: function toJSON(data) {
            data = typeof data === 'object' ? data : {};
            data["value"] = this.value;
            data["name"] = this.name;
            return data;
          }
        }], [{
          key: "fromJS",
          value: function fromJS(data) {
            data = typeof data === 'object' ? data : {};
            var result = new _PriorityLevelDto();
            result.init(data);
            return result;
          }
        }]);

        return _PriorityLevelDto;
      }();

      var _TodoListDto = /*#__PURE__*/function () {
        function _TodoListDto(data) {
          _classCallCheck(this, _TodoListDto);

          if (data) {
            for (var property in data) {
              if (data.hasOwnProperty(property)) this[property] = data[property];
            }
          }
        }

        _createClass(_TodoListDto, [{
          key: "init",
          value: function init(_data) {
            if (_data) {
              this.id = _data["id"];
              this.title = _data["title"];
              this.colour = _data["colour"];

              if (Array.isArray(_data["items"])) {
                this.items = [];

                var _iterator25 = _createForOfIteratorHelper(_data["items"]),
                    _step25;

                try {
                  for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
                    var item = _step25.value;
                    this.items.push(_TodoItemDto.fromJS(item));
                  }
                } catch (err) {
                  _iterator25.e(err);
                } finally {
                  _iterator25.f();
                }
              }
            }
          }
        }, {
          key: "toJSON",
          value: function toJSON(data) {
            data = typeof data === 'object' ? data : {};
            data["id"] = this.id;
            data["title"] = this.title;
            data["colour"] = this.colour;

            if (Array.isArray(this.items)) {
              data["items"] = [];

              var _iterator26 = _createForOfIteratorHelper(this.items),
                  _step26;

              try {
                for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
                  var item = _step26.value;
                  data["items"].push(item.toJSON());
                }
              } catch (err) {
                _iterator26.e(err);
              } finally {
                _iterator26.f();
              }
            }

            return data;
          }
        }], [{
          key: "fromJS",
          value: function fromJS(data) {
            data = typeof data === 'object' ? data : {};
            var result = new _TodoListDto();
            result.init(data);
            return result;
          }
        }]);

        return _TodoListDto;
      }();

      var _CreateTodoListCommand = /*#__PURE__*/function () {
        function _CreateTodoListCommand(data) {
          _classCallCheck(this, _CreateTodoListCommand);

          if (data) {
            for (var property in data) {
              if (data.hasOwnProperty(property)) this[property] = data[property];
            }
          }
        }

        _createClass(_CreateTodoListCommand, [{
          key: "init",
          value: function init(_data) {
            if (_data) {
              this.title = _data["title"];
            }
          }
        }, {
          key: "toJSON",
          value: function toJSON(data) {
            data = typeof data === 'object' ? data : {};
            data["title"] = this.title;
            return data;
          }
        }], [{
          key: "fromJS",
          value: function fromJS(data) {
            data = typeof data === 'object' ? data : {};
            var result = new _CreateTodoListCommand();
            result.init(data);
            return result;
          }
        }]);

        return _CreateTodoListCommand;
      }();

      var _UpdateTodoListCommand = /*#__PURE__*/function () {
        function _UpdateTodoListCommand(data) {
          _classCallCheck(this, _UpdateTodoListCommand);

          if (data) {
            for (var property in data) {
              if (data.hasOwnProperty(property)) this[property] = data[property];
            }
          }
        }

        _createClass(_UpdateTodoListCommand, [{
          key: "init",
          value: function init(_data) {
            if (_data) {
              this.id = _data["id"];
              this.title = _data["title"];
            }
          }
        }, {
          key: "toJSON",
          value: function toJSON(data) {
            data = typeof data === 'object' ? data : {};
            data["id"] = this.id;
            data["title"] = this.title;
            return data;
          }
        }], [{
          key: "fromJS",
          value: function fromJS(data) {
            data = typeof data === 'object' ? data : {};
            var result = new _UpdateTodoListCommand();
            result.init(data);
            return result;
          }
        }]);

        return _UpdateTodoListCommand;
      }();

      var _WeatherForecast = /*#__PURE__*/function () {
        function _WeatherForecast(data) {
          _classCallCheck(this, _WeatherForecast);

          if (data) {
            for (var property in data) {
              if (data.hasOwnProperty(property)) this[property] = data[property];
            }
          }
        }

        _createClass(_WeatherForecast, [{
          key: "init",
          value: function init(_data) {
            if (_data) {
              this.date = _data["date"] ? new Date(_data["date"].toString()) : undefined;
              this.temperatureC = _data["temperatureC"];
              this.temperatureF = _data["temperatureF"];
              this.summary = _data["summary"];
            }
          }
        }, {
          key: "toJSON",
          value: function toJSON(data) {
            data = typeof data === 'object' ? data : {};
            data["date"] = this.date ? this.date.toISOString() : undefined;
            data["temperatureC"] = this.temperatureC;
            data["temperatureF"] = this.temperatureF;
            data["summary"] = this.summary;
            return data;
          }
        }], [{
          key: "fromJS",
          value: function fromJS(data) {
            data = typeof data === 'object' ? data : {};
            var result = new _WeatherForecast();
            result.init(data);
            return result;
          }
        }]);

        return _WeatherForecast;
      }();

      var _SwaggerException = /*#__PURE__*/function (_Error) {
        _inherits(_SwaggerException, _Error);

        var _super = _createSuper(_SwaggerException);

        function _SwaggerException(message, status, response, headers, result) {
          var _this42;

          _classCallCheck(this, _SwaggerException);

          _this42 = _super.call(this);
          _this42.isSwaggerException = true;
          _this42.message = message;
          _this42.status = status;
          _this42.response = response;
          _this42.headers = headers;
          _this42.result = result;
          return _this42;
        }

        _createClass(_SwaggerException, null, [{
          key: "isSwaggerException",
          value: function isSwaggerException(obj) {
            return obj.isSwaggerException === true;
          }
        }]);

        return _SwaggerException;
      }( /*#__PURE__*/_wrapNativeSuper(Error));

      function throwException(message, status, response, headers, result) {
        if (result !== null && result !== undefined) return (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(result);else return (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(new _SwaggerException(message, status, response, headers, null));
      }

      function blobToText(blob) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_6__.Observable(function (observer) {
          if (!blob) {
            observer.next("");
            observer.complete();
          } else {
            var reader = new FileReader();

            reader.onload = function (event) {
              observer.next(event.target.result);
              observer.complete();
            };

            reader.readAsText(blob);
          }
        });
      }
      /***/

    },

    /***/
    2340:
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment = {
        production: false
      };
      /*
       * In development mode, to ignore zone related error stack frames such as
       * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
       * import the following file, but please comment it out in production mode
       * because it will have performance impact when throw error
       */
      // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    4431:
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "getBaseUrl": function getBaseUrl() {
          return (
            /* binding */
            _getBaseUrl
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      9075);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      6747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      2340);

      function _getBaseUrl() {
        return document.getElementsByTagName('base')[0].href;
      }

      var providers = [{
        provide: 'BASE_URL',
        useFactory: _getBaseUrl,
        deps: []
      }];

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.log(err);
      });
      /***/

    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    "use strict";
    /******/

    /******/

    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(4431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map