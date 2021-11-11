(self["webpackChunkbible_webui"] = self["webpackChunkbible_webui"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 2816:
/*!**************************************************************!*\
  !*** ./src/api-authorization/api-authorization.constants.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApplicationName": function() { return /* binding */ ApplicationName; },
/* harmony export */   "ReturnUrlType": function() { return /* binding */ ReturnUrlType; },
/* harmony export */   "QueryParameterNames": function() { return /* binding */ QueryParameterNames; },
/* harmony export */   "LogoutActions": function() { return /* binding */ LogoutActions; },
/* harmony export */   "LoginActions": function() { return /* binding */ LoginActions; },
/* harmony export */   "ApplicationPaths": function() { return /* binding */ ApplicationPaths; }
/* harmony export */ });
const ApplicationName = 'Bible.WebUI';
const ReturnUrlType = 'returnUrl';
const QueryParameterNames = {
    ReturnUrl: ReturnUrlType,
    Message: 'message'
};
const LogoutActions = {
    LogoutCallback: 'logout-callback',
    Logout: 'logout',
    LoggedOut: 'logged-out'
};
const LoginActions = {
    Login: 'login',
    LoginCallback: 'login-callback',
    LoginFailed: 'login-failed',
    Profile: 'profile',
    Register: 'register'
};
let applicationPaths = {
    DefaultLoginRedirectPath: '/',
    ApiAuthorizationClientConfigurationUrl: `/_configuration/${ApplicationName}`,
    Login: `authentication/${LoginActions.Login}`,
    LoginFailed: `authentication/${LoginActions.LoginFailed}`,
    LoginCallback: `authentication/${LoginActions.LoginCallback}`,
    Register: `authentication/${LoginActions.Register}`,
    Profile: `authentication/${LoginActions.Profile}`,
    LogOut: `authentication/${LogoutActions.Logout}`,
    LoggedOut: `authentication/${LogoutActions.LoggedOut}`,
    LogOutCallback: `authentication/${LogoutActions.LogoutCallback}`,
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
applicationPaths = Object.assign(Object.assign({}, applicationPaths), { LoginPathComponents: applicationPaths.Login.split('/'), LoginFailedPathComponents: applicationPaths.LoginFailed.split('/'), RegisterPathComponents: applicationPaths.Register.split('/'), ProfilePathComponents: applicationPaths.Profile.split('/'), LogOutPathComponents: applicationPaths.LogOut.split('/'), LoggedOutPathComponents: applicationPaths.LoggedOut.split('/'), LogOutCallbackPathComponents: applicationPaths.LogOutCallback.split('/') });
const ApplicationPaths = applicationPaths;


/***/ }),

/***/ 985:
/*!***********************************************************!*\
  !*** ./src/api-authorization/api-authorization.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiAuthorizationModule": function() { return /* binding */ ApiAuthorizationModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _login_menu_login_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-menu/login-menu.component */ 8040);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ 8635);
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logout/logout.component */ 6108);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _api_authorization_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api-authorization.constants */ 2816);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);









class ApiAuthorizationModule {
}
ApiAuthorizationModule.ɵfac = function ApiAuthorizationModule_Factory(t) { return new (t || ApiAuthorizationModule)(); };
ApiAuthorizationModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: ApiAuthorizationModule });
ApiAuthorizationModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild([
                { path: _api_authorization_constants__WEBPACK_IMPORTED_MODULE_3__.ApplicationPaths.Register, component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent },
                { path: _api_authorization_constants__WEBPACK_IMPORTED_MODULE_3__.ApplicationPaths.Profile, component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent },
                { path: _api_authorization_constants__WEBPACK_IMPORTED_MODULE_3__.ApplicationPaths.Login, component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent },
                { path: _api_authorization_constants__WEBPACK_IMPORTED_MODULE_3__.ApplicationPaths.LoginFailed, component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent },
                { path: _api_authorization_constants__WEBPACK_IMPORTED_MODULE_3__.ApplicationPaths.LoginCallback, component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent },
                { path: _api_authorization_constants__WEBPACK_IMPORTED_MODULE_3__.ApplicationPaths.LogOut, component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_2__.LogoutComponent },
                { path: _api_authorization_constants__WEBPACK_IMPORTED_MODULE_3__.ApplicationPaths.LoggedOut, component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_2__.LogoutComponent },
                { path: _api_authorization_constants__WEBPACK_IMPORTED_MODULE_3__.ApplicationPaths.LogOutCallback, component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_2__.LogoutComponent }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ApiAuthorizationModule, { declarations: [_login_menu_login_menu_component__WEBPACK_IMPORTED_MODULE_0__.LoginMenuComponent, _login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent, _logout_logout_component__WEBPACK_IMPORTED_MODULE_2__.LogoutComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule], exports: [_login_menu_login_menu_component__WEBPACK_IMPORTED_MODULE_0__.LoginMenuComponent, _login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent, _logout_logout_component__WEBPACK_IMPORTED_MODULE_2__.LogoutComponent] }); })();


/***/ }),

/***/ 6784:
/*!**************************************************!*\
  !*** ./src/api-authorization/authorize.guard.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthorizeGuard": function() { return /* binding */ AuthorizeGuard; }
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 8307);
/* harmony import */ var _api_authorization_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-authorization.constants */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _authorize_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authorize.service */ 2551);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);





class AuthorizeGuard {
    constructor(authorize, router) {
        this.authorize = authorize;
        this.router = router;
    }
    canActivate(_next, state) {
        return this.authorize.isAuthenticated()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(isAuthenticated => this.handleAuthorization(isAuthenticated, state)));
    }
    handleAuthorization(isAuthenticated, state) {
        if (!isAuthenticated) {
            this.router.navigate(_api_authorization_constants__WEBPACK_IMPORTED_MODULE_0__.ApplicationPaths.LoginPathComponents, {
                queryParams: {
                    [_api_authorization_constants__WEBPACK_IMPORTED_MODULE_0__.QueryParameterNames.ReturnUrl]: state.url
                }
            });
        }
    }
}
AuthorizeGuard.ɵfac = function AuthorizeGuard_Factory(t) { return new (t || AuthorizeGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_authorize_service__WEBPACK_IMPORTED_MODULE_1__.AuthorizeService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
AuthorizeGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AuthorizeGuard, factory: AuthorizeGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2551:
/*!****************************************************!*\
  !*** ./src/api-authorization/authorize.service.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationResultStatus": function() { return /* binding */ AuthenticationResultStatus; },
/* harmony export */   "AuthorizeService": function() { return /* binding */ AuthorizeService; }
/* harmony export */ });
/* harmony import */ var oidc_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! oidc-client */ 7000);
/* harmony import */ var oidc_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(oidc_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6215);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 9923);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 9412);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 5257);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 5435);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 8307);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 9773);
/* harmony import */ var _api_authorization_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api-authorization.constants */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7716);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





var AuthenticationResultStatus;
(function (AuthenticationResultStatus) {
    AuthenticationResultStatus[AuthenticationResultStatus["Success"] = 0] = "Success";
    AuthenticationResultStatus[AuthenticationResultStatus["Redirect"] = 1] = "Redirect";
    AuthenticationResultStatus[AuthenticationResultStatus["Fail"] = 2] = "Fail";
})(AuthenticationResultStatus || (AuthenticationResultStatus = {}));
class AuthorizeService {
    constructor() {
        // By default pop ups are disabled because they don't work properly on Edge.
        // If you want to enable pop up authentication simply set this flag to false.
        this.popUpDisabled = true;
        this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
    }
    isAuthenticated() {
        return this.getUser().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(u => !!u));
    }
    getUser() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.concat)(this.userSubject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)(u => !!u)), this.getUserFromStorage().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)(u => !!u), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(u => this.userSubject.next(u))), this.userSubject.asObservable());
    }
    getAccessToken() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.from)(this.ensureUserManagerInitialized())
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.mergeMap)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.from)(this.userManager.getUser())), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(user => user && user.access_token));
    }
    // We try to authenticate the user in three different ways:
    // 1) We try to see if we can authenticate the user silently. This happens
    //    when the user is already logged in on the IdP and is done using a hidden iframe
    //    on the client.
    // 2) We try to authenticate the user using a PopUp Window. This might fail if there is a
    //    Pop-Up blocker or the user has disabled PopUps.
    // 3) If the two methods above fail, we redirect the browser to the IdP to perform a traditional
    //    redirect flow.
    signIn(state) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.ensureUserManagerInitialized();
            let user = null;
            try {
                user = yield this.userManager.signinSilent(this.createArguments());
                this.userSubject.next(user.profile);
                return this.success(state);
            }
            catch (silentError) {
                // User might not be authenticated, fallback to popup authentication
                console.log('Silent authentication error: ', silentError);
                try {
                    if (this.popUpDisabled) {
                        throw new Error('Popup disabled. Change \'authorize.service.ts:AuthorizeService.popupDisabled\' to false to enable it.');
                    }
                    user = yield this.userManager.signinPopup(this.createArguments());
                    this.userSubject.next(user.profile);
                    return this.success(state);
                }
                catch (popupError) {
                    if (popupError.message === 'Popup window closed') {
                        // The user explicitly cancelled the login action by closing an opened popup.
                        return this.error('The user closed the window.');
                    }
                    else if (!this.popUpDisabled) {
                        console.log('Popup authentication error: ', popupError);
                    }
                    // PopUps might be blocked by the user, fallback to redirect
                    try {
                        yield this.userManager.signinRedirect(this.createArguments(state));
                        return this.redirect();
                    }
                    catch (redirectError) {
                        console.log('Redirect authentication error: ', redirectError);
                        return this.error(redirectError);
                    }
                }
            }
        });
    }
    completeSignIn(url) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.ensureUserManagerInitialized();
                const user = yield this.userManager.signinCallback(url);
                this.userSubject.next(user && user.profile);
                return this.success(user && user.state);
            }
            catch (error) {
                console.log('There was an error signing in: ', error);
                return this.error('There was an error signing in.');
            }
        });
    }
    signOut(state) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (this.popUpDisabled) {
                    throw new Error('Popup disabled. Change \'authorize.service.ts:AuthorizeService.popupDisabled\' to false to enable it.');
                }
                yield this.ensureUserManagerInitialized();
                yield this.userManager.signoutPopup(this.createArguments());
                this.userSubject.next(null);
                return this.success(state);
            }
            catch (popupSignOutError) {
                console.log('Popup signout error: ', popupSignOutError);
                try {
                    yield this.userManager.signoutRedirect(this.createArguments(state));
                    return this.redirect();
                }
                catch (redirectSignOutError) {
                    console.log('Redirect signout error: ', popupSignOutError);
                    return this.error(redirectSignOutError);
                }
            }
        });
    }
    completeSignOut(url) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.ensureUserManagerInitialized();
            try {
                const state = yield this.userManager.signoutCallback(url);
                this.userSubject.next(null);
                return this.success(state && state.data);
            }
            catch (error) {
                console.log(`There was an error trying to log out '${error}'.`);
                return this.error(error);
            }
        });
    }
    createArguments(state) {
        return { useReplaceToNavigate: true, data: state };
    }
    error(message) {
        return { status: AuthenticationResultStatus.Fail, message };
    }
    success(state) {
        return { status: AuthenticationResultStatus.Success, state };
    }
    redirect() {
        return { status: AuthenticationResultStatus.Redirect };
    }
    ensureUserManagerInitialized() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.userManager !== undefined) {
                return;
            }
            const response = yield fetch(_api_authorization_constants__WEBPACK_IMPORTED_MODULE_1__.ApplicationPaths.ApiAuthorizationClientConfigurationUrl);
            if (!response.ok) {
                throw new Error(`Could not load settings for '${_api_authorization_constants__WEBPACK_IMPORTED_MODULE_1__.ApplicationName}'`);
            }
            const settings = yield response.json();
            settings.automaticSilentRenew = true;
            settings.includeIdTokenInSilentRenew = true;
            this.userManager = new oidc_client__WEBPACK_IMPORTED_MODULE_0__.UserManager(settings);
            this.userManager.events.addUserSignedOut(() => __awaiter(this, void 0, void 0, function* () {
                yield this.userManager.removeUser();
                this.userSubject.next(null);
            }));
        });
    }
    getUserFromStorage() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.from)(this.ensureUserManagerInitialized())
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.mergeMap)(() => this.userManager.getUser()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(u => u && u.profile));
    }
}
AuthorizeService.ɵfac = function AuthorizeService_Factory(t) { return new (t || AuthorizeService)(); };
AuthorizeService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({ token: AuthorizeService, factory: AuthorizeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8040:
/*!******************************************************************!*\
  !*** ./src/api-authorization/login-menu/login-menu.component.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginMenuComponent": function() { return /* binding */ LoginMenuComponent; }
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _authorize_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../authorize.service */ 2551);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);





const _c0 = function () { return ["/authentication/profile"]; };
const _c1 = function () { return ["/authentication/logout"]; };
const _c2 = function () { return { local: true }; };
function LoginMenuComponent_ul_0_Template(rf, ctx) { if (rf & 1) {
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
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Hello ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 4, ctx_r0.userName), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c1))("state", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c2));
} }
const _c3 = function () { return ["/authentication/register"]; };
const _c4 = function () { return ["/authentication/login"]; };
function LoginMenuComponent_ul_2_Template(rf, ctx) { if (rf & 1) {
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
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c4));
} }
class LoginMenuComponent {
    constructor(authorizeService) {
        this.authorizeService = authorizeService;
    }
    ngOnInit() {
        this.isAuthenticated = this.authorizeService.isAuthenticated();
        this.userName = this.authorizeService.getUser().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(u => u && u.name));
    }
}
LoginMenuComponent.ɵfac = function LoginMenuComponent_Factory(t) { return new (t || LoginMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_authorize_service__WEBPACK_IMPORTED_MODULE_0__.AuthorizeService)); };
LoginMenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginMenuComponent, selectors: [["app-login-menu"]], decls: 4, vars: 6, consts: [["class", "navbar-nav", 4, "ngIf"], [1, "navbar-nav"], [1, "nav-item"], ["title", "Manage", 1, "nav-link", "text-dark", 3, "routerLink"], ["title", "Logout", 1, "nav-link", "text-dark", 3, "routerLink", "state"], [1, "nav-link", "text-dark", 3, "routerLink"]], template: function LoginMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, LoginMenuComponent_ul_0_Template, 8, 9, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LoginMenuComponent_ul_2_Template, 7, 4, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 2, ctx.isAuthenticated));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, ctx.isAuthenticated));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi1tZW51LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 8635:
/*!********************************************************!*\
  !*** ./src/api-authorization/login/login.component.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": function() { return /* binding */ LoginComponent; }
/* harmony export */ });
/* harmony import */ var _authorize_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../authorize.service */ 2551);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6215);
/* harmony import */ var _api_authorization_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api-authorization.constants */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};







// The main responsibility of this component is to handle the user's login process.
// This is the starting point for the login process. Any component that needs to authenticate
// a user can simply perform a redirect to this component with a returnUrl query parameter and
// let the component perform the login and return back to the return url.
class LoginComponent {
    constructor(authorizeService, activatedRoute, router) {
        this.authorizeService = authorizeService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.message = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            const action = this.activatedRoute.snapshot.url[1];
            switch (action.path) {
                case _api_authorization_constants__WEBPACK_IMPORTED_MODULE_1__.LoginActions.Login:
                    yield this.login(this.getReturnUrl());
                    break;
                case _api_authorization_constants__WEBPACK_IMPORTED_MODULE_1__.LoginActions.LoginCallback:
                    yield this.processLoginCallback();
                    break;
                case _api_authorization_constants__WEBPACK_IMPORTED_MODULE_1__.LoginActions.LoginFailed:
                    const message = this.activatedRoute.snapshot.queryParamMap.get(_api_authorization_constants__WEBPACK_IMPORTED_MODULE_1__.QueryParameterNames.Message);
                    this.message.next(message);
                    break;
                case _api_authorization_constants__WEBPACK_IMPORTED_MODULE_1__.LoginActions.Profile:
                    this.redirectToProfile();
                    break;
                case _api_authorization_constants__WEBPACK_IMPORTED_MODULE_1__.LoginActions.Register:
                    this.redirectToRegister();
                    break;
                default:
                    throw new Error(`Invalid action '${action}'`);
            }
        });
    }
    login(returnUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            const state = { returnUrl };
            const result = yield this.authorizeService.signIn(state);
            this.message.next(undefined);
            switch (result.status) {
                case _authorize_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationResultStatus.Redirect:
                    break;
                case _authorize_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationResultStatus.Success:
                    yield this.navigateToReturnUrl(returnUrl);
                    break;
                case _authorize_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationResultStatus.Fail:
                    yield this.router.navigate(_api_authorization_constants__WEBPACK_IMPORTED_MODULE_1__.ApplicationPaths.LoginFailedPathComponents, {
                        queryParams: { [_api_authorization_constants__WEBPACK_IMPORTED_MODULE_1__.QueryParameterNames.Message]: result.message }
                    });
                    break;
                default:
                    throw new Error(`Invalid status result ${result.status}.`);
            }
        });
    }
    processLoginCallback() {
        return __awaiter(this, void 0, void 0, function* () {
            const url = window.location.href;
            const result = yield this.authorizeService.completeSignIn(url);
            switch (result.status) {
                case _authorize_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationResultStatus.Redirect:
                    // There should not be any redirects as completeSignIn never redirects.
                    throw new Error('Should not redirect.');
                case _authorize_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationResultStatus.Success:
                    yield this.navigateToReturnUrl(this.getReturnUrl(result.state));
                    break;
                case _authorize_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationResultStatus.Fail:
                    this.message.next(result.message);
                    break;
            }
        });
    }
    redirectToRegister() {
        this.redirectToApiAuthorizationPath(`${_api_authorization_constants__WEBPACK_IMPORTED_MODULE_1__.ApplicationPaths.IdentityRegisterPath}?returnUrl=${encodeURI('/' + _api_authorization_constants__WEBPACK_IMPORTED_MODULE_1__.ApplicationPaths.Login)}`);
    }
    redirectToProfile() {
        this.redirectToApiAuthorizationPath(_api_authorization_constants__WEBPACK_IMPORTED_MODULE_1__.ApplicationPaths.IdentityManagePath);
    }
    navigateToReturnUrl(returnUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            // It's important that we do a replace here so that we remove the callback uri with the
            // fragment containing the tokens from the browser history.
            yield this.router.navigateByUrl(returnUrl, {
                replaceUrl: true
            });
        });
    }
    getReturnUrl(state) {
        const fromQuery = this.activatedRoute.snapshot.queryParams.returnUrl;
        // If the url is comming from the query string, check that is either
        // a relative url or an absolute url
        if (fromQuery &&
            !(fromQuery.startsWith(`${window.location.origin}/`) ||
                /\/[^\/].*/.test(fromQuery))) {
            // This is an extra check to prevent open redirects.
            throw new Error('Invalid return url. The return url needs to have the same origin as the current page.');
        }
        return (state && state.returnUrl) ||
            fromQuery ||
            _api_authorization_constants__WEBPACK_IMPORTED_MODULE_1__.ApplicationPaths.DefaultLoginRedirectPath;
    }
    redirectToApiAuthorizationPath(apiAuthorizationPath) {
        // It's important that we do a replace here so that when the user hits the back arrow on the
        // browser they get sent back to where it was on the app instead of to an endpoint on this
        // component.
        const redirectUrl = `${window.location.origin}${apiAuthorizationPath}`;
        window.location.replace(redirectUrl);
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_authorize_service__WEBPACK_IMPORTED_MODULE_0__.AuthorizeService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 3, vars: 3, template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, ctx.message));
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 6108:
/*!**********************************************************!*\
  !*** ./src/api-authorization/logout/logout.component.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogoutComponent": function() { return /* binding */ LogoutComponent; }
/* harmony export */ });
/* harmony import */ var _authorize_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../authorize.service */ 2551);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6215);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 5257);
/* harmony import */ var _api_authorization_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api-authorization.constants */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};








// The main responsibility of this component is to handle the user's logout process.
// This is the starting point for the logout process, which is usually initiated when a
// user clicks on the logout button on the LoginMenu component.
class LogoutComponent {
    constructor(authorizeService, activatedRoute, router) {
        this.authorizeService = authorizeService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.message = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            const action = this.activatedRoute.snapshot.url[1];
            switch (action.path) {
                case _api_authorization_constants__WEBPACK_IMPORTED_MODULE_1__.LogoutActions.Logout:
                    if (!!window.history.state.local) {
                        yield this.logout(this.getReturnUrl());
                    }
                    else {
                        // This prevents regular links to <app>/authentication/logout from triggering a logout
                        this.message.next('The logout was not initiated from within the page.');
                    }
                    break;
                case _api_authorization_constants__WEBPACK_IMPORTED_MODULE_1__.LogoutActions.LogoutCallback:
                    yield this.processLogoutCallback();
                    break;
                case _api_authorization_constants__WEBPACK_IMPORTED_MODULE_1__.LogoutActions.LoggedOut:
                    this.message.next('You successfully logged out!');
                    break;
                default:
                    throw new Error(`Invalid action '${action}'`);
            }
        });
    }
    logout(returnUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            const state = { returnUrl };
            const isauthenticated = yield this.authorizeService.isAuthenticated().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1)).toPromise();
            if (isauthenticated) {
                const result = yield this.authorizeService.signOut(state);
                switch (result.status) {
                    case _authorize_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationResultStatus.Redirect:
                        break;
                    case _authorize_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationResultStatus.Success:
                        yield this.navigateToReturnUrl(returnUrl);
                        break;
                    case _authorize_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationResultStatus.Fail:
                        this.message.next(result.message);
                        break;
                    default:
                        throw new Error('Invalid authentication result status.');
                }
            }
            else {
                this.message.next('You successfully logged out!');
            }
        });
    }
    processLogoutCallback() {
        return __awaiter(this, void 0, void 0, function* () {
            const url = window.location.href;
            const result = yield this.authorizeService.completeSignOut(url);
            switch (result.status) {
                case _authorize_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationResultStatus.Redirect:
                    // There should not be any redirects as the only time completeAuthentication finishes
                    // is when we are doing a redirect sign in flow.
                    throw new Error('Should not redirect.');
                case _authorize_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationResultStatus.Success:
                    yield this.navigateToReturnUrl(this.getReturnUrl(result.state));
                    break;
                case _authorize_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationResultStatus.Fail:
                    this.message.next(result.message);
                    break;
                default:
                    throw new Error('Invalid authentication result status.');
            }
        });
    }
    navigateToReturnUrl(returnUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.router.navigateByUrl(returnUrl, {
                replaceUrl: true
            });
        });
    }
    getReturnUrl(state) {
        const fromQuery = this.activatedRoute.snapshot.queryParams.returnUrl;
        // If the url is comming from the query string, check that is either
        // a relative url or an absolute url
        if (fromQuery &&
            !(fromQuery.startsWith(`${window.location.origin}/`) ||
                /\/[^\/].*/.test(fromQuery))) {
            // This is an extra check to prevent open redirects.
            throw new Error('Invalid return url. The return url needs to have the same origin as the current page.');
        }
        return (state && state.returnUrl) ||
            fromQuery ||
            _api_authorization_constants__WEBPACK_IMPORTED_MODULE_1__.ApplicationPaths.LoggedOut;
    }
}
LogoutComponent.ɵfac = function LogoutComponent_Factory(t) { return new (t || LogoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_authorize_service__WEBPACK_IMPORTED_MODULE_0__.AuthorizeService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
LogoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: LogoutComponent, selectors: [["app-logout"]], decls: 3, vars: 3, template: function LogoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, ctx.message));
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dvdXQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routes": function() { return /* binding */ routes; },
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_api_authorization_authorize_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/api-authorization/authorize.guard */ 6784);
/* harmony import */ var _bible_bible_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bible/bible.component */ 2005);
/* harmony import */ var _counter_counter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./counter/counter.component */ 5693);
/* harmony import */ var _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fetch-data/fetch-data.component */ 9339);
/* harmony import */ var _shared_component_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/component/not-found/not-found.component */ 3248);
/* harmony import */ var _todo_todo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todo/todo.component */ 3805);
/* harmony import */ var _token_token_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./token/token.component */ 4865);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);










const routes = [
    { path: 'counter', component: _counter_counter_component__WEBPACK_IMPORTED_MODULE_2__.CounterComponent },
    { path: 'fetch-data', component: _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_3__.FetchDataComponent },
    { path: '', component: _bible_bible_component__WEBPACK_IMPORTED_MODULE_1__.BibleComponent, pathMatch: 'full' },
    { path: 'todo', component: _todo_todo_component__WEBPACK_IMPORTED_MODULE_5__.TodoComponent, canActivate: [src_api_authorization_authorize_guard__WEBPACK_IMPORTED_MODULE_0__.AuthorizeGuard] },
    { path: 'token', component: _token_token_component__WEBPACK_IMPORTED_MODULE_6__.TokenComponent, canActivate: [src_api_authorization_authorize_guard__WEBPACK_IMPORTED_MODULE_0__.AuthorizeGuard] },
    { path: 'bible', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_bible_bible_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./bible/bible.module */ 9854)).then(m => m.BibleModule) },
    { path: 'product', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_product_product_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./product/product.module */ 1589)).then(m => m.ProductModule) },
    { path: 'news', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_news_news_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./news/news.module */ 1926)).then(m => m.NewsModule) },
    { path: 'contacts', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_contacts_contacts_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./contacts/contacts.module */ 6808)).then(m => m.ContactsModule) },
    { path: '**', component: _shared_component_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__.NotFoundComponent },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _shared_http_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/http-client.service */ 6057);
/* harmony import */ var _shared_push_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/push-notification.service */ 7407);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 9344);
/* harmony import */ var _shared_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/notification.service */ 7404);
/* harmony import */ var _shared_manage_http_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/manage-http-request.service */ 3594);
/* harmony import */ var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nav-menu/nav-menu.component */ 6499);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9895);









function AppComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AppComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", data_r2, " ");
} }
class AppComponent {
    constructor(httpClient, pushNotification, ts, notificationService, httpRequesthandler) {
        this.httpClient = httpClient;
        this.pushNotification = pushNotification;
        this.ts = ts;
        this.notificationService = notificationService;
        this.httpRequesthandler = httpRequesthandler;
        this.title = "app";
        this.loadData = [];
        this.isLoading = false;
    }
    ngOnInit() {
        // this.loadUsers().then(res =>{
        //   //console.log(res);
        // })
        this.httpRequesthandler.httpLoader.subscribe((res) => {
            this.isLoading = res;
        });
        //this.httpClient.get({url:"https://jsonplaceholder.typicode.com/photos"}).subscribe();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_http_client_service__WEBPACK_IMPORTED_MODULE_0__.HttpClientService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_push_notification_service__WEBPACK_IMPORTED_MODULE_1__.PushNotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_notification_service__WEBPACK_IMPORTED_MODULE_2__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_manage_http_request_service__WEBPACK_IMPORTED_MODULE_3__.ManageHttpRequestService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 2, consts: [[1, "container"], ["class", "text-center text-info fixed-top", 4, "ngIf"], ["class", "", 4, "ngFor", "ngForOf"], [1, "text-center", "text-info", "fixed-top"], ["role", "status", 1, "spinner-border"], [1, ""], ["role", "alert", 1, "alert", "alert-success"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-nav-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, AppComponent_div_3_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, AppComponent_div_4_Template, 3, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.loadData);
    } }, directives: [_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_4__.NavMenuComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterOutlet], encapsulation: 2 });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 4163);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-toastr */ 9344);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav-menu/nav-menu.component */ 6499);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _counter_counter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./counter/counter.component */ 5693);
/* harmony import */ var _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fetch-data/fetch-data.component */ 9339);
/* harmony import */ var _todo_todo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todo/todo.component */ 3805);
/* harmony import */ var src_api_authorization_api_authorization_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/api-authorization/api-authorization.module */ 985);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser/animations */ 5835);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ 3301);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _token_token_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./token/token.component */ 4865);
/* harmony import */ var _shared_interceptor_http_request_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/interceptor/http-request.interceptor */ 9675);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/shared.module */ 4466);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngrx/store */ 6710);
/* harmony import */ var _store_app_reducer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./store/app.reducer */ 5754);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 7716);

























class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ providers: [
        //{ provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HTTP_INTERCEPTORS, useClass: _shared_interceptor_http_request_interceptor__WEBPACK_IMPORTED_MODULE_10__.HttpRequestInterceptor, multi: true },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_16__.FontAwesomeModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__.SharedModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule,
            src_api_authorization_api_authorization_module__WEBPACK_IMPORTED_MODULE_6__.ApiAuthorizationModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__.AppRoutingModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__.BrowserAnimationsModule,
            ngx_toastr__WEBPACK_IMPORTED_MODULE_19__.ToastrModule.forRoot({
                timeOut: 1000 * 30,
                enableHtml: true,
                positionClass: 'toast-top-right',
                //preventDuplicates: true,
                progressBar: true
            }),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__.ModalModule.forRoot(),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_20__.StoreModule.forRoot(_store_app_reducer__WEBPACK_IMPORTED_MODULE_12__.appReducer)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
        _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_1__.NavMenuComponent,
        _home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent,
        _counter_counter_component__WEBPACK_IMPORTED_MODULE_3__.CounterComponent,
        _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_4__.FetchDataComponent,
        _todo_todo_component__WEBPACK_IMPORTED_MODULE_5__.TodoComponent,
        _token_token_component__WEBPACK_IMPORTED_MODULE_9__.TokenComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.BrowserModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_16__.FontAwesomeModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__.SharedModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule,
        src_api_authorization_api_authorization_module__WEBPACK_IMPORTED_MODULE_6__.ApiAuthorizationModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_8__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__.BrowserAnimationsModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_19__.ToastrModule, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__.ModalModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_20__.StoreRootModule] }); })();


/***/ }),

/***/ 3124:
/*!**************************************************************************!*\
  !*** ./src/app/bible/bible-verse-detail/bible-verse-detail.component.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BibleVerseDetailComponent": function() { return /* binding */ BibleVerseDetailComponent; }
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 9976);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-bootstrap/modal */ 3301);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 4163);




class BibleVerseDetailComponent {
    constructor(bsModalService) {
        this.bsModalService = bsModalService;
        this.faShare = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faShare;
    }
    ngOnInit() { }
    onClose() {
        this.bsModalService._hideModal(1);
    }
}
BibleVerseDetailComponent.ɵfac = function BibleVerseDetailComponent_Factory(t) { return new (t || BibleVerseDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_0__.BsModalService)); };
BibleVerseDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BibleVerseDetailComponent, selectors: [["app-bible-verse-detail"]], decls: 19, vars: 13, consts: [[1, "modal-header", "clearfix"], [1, "modal-title", "float-left"], [1, "badge", "badge-pill", "badge-success", "font-italic"], ["type", "button", "aria-label", "Close", 1, "close", "float-right", 3, "click"], ["aria-hidden", "true"], [1, "card-body"], [1, "alert", "alert-success", "fade", "show"], ["target", "_blank", 3, "href"], [3, "icon"], [1, "card-text"], [1, "card-title"]], template: function BibleVerseDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BibleVerseDetailComponent_Template_button_click_5_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Read the Word; Spread the Word. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "fa-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "h1", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"](" ", ctx.bibleBookIndex.book, " ", ctx.chapter, " : ", ctx.verseNumber, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.bibleBookIndex.abbr);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate4"]("href", "https://api.whatsapp.com/send?text=", ctx.verse.Verse, " - ", ctx.bibleBookIndex.book, " ", ctx.chapter, " : ", ctx.verseNumber, "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faShare);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.verse.Verse);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"](" ", ctx.bibleBookIndex.abbr, " ", ctx.chapter, " : ", ctx.verseNumber, " ");
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FaIconComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiaWJsZS12ZXJzZS1kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 2005:
/*!******************************************!*\
  !*** ./src/app/bible/bible.component.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BibleComponent": function() { return /* binding */ BibleComponent; }
/* harmony export */ });
/* harmony import */ var _bible_verse_detail_bible_verse_detail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bible-verse-detail/bible-verse-detail.component */ 3124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _service_bible_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/bible.service */ 9826);
/* harmony import */ var _service_bible_book_index_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/bible-book-index.service */ 4494);
/* harmony import */ var _service_bible_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/bible-store.service */ 8612);
/* harmony import */ var _service_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/notification.service */ 7320);
/* harmony import */ var _shared_push_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/push-notification.service */ 7407);
/* harmony import */ var _shared_audio_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/audio.service */ 8784);
/* harmony import */ var _shared_cache_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/cache.service */ 133);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/modal */ 3301);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 8583);












function BibleComponent_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bookIndex_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("value", i_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"](" ", bookIndex_r5.book, " (", bookIndex_r5.chapters.length, ") ");
} }
function BibleComponent_option_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bibleChapter_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("value", bibleChapter_r7.chapter);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"](" ", bibleChapter_r7.chapter, " (", bibleChapter_r7.verses, ") ");
} }
function BibleComponent_option_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const languages_r9 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", languages_r9)("selected", ctx_r3.selectedbibleLanguage);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", languages_r9, " ");
} }
function BibleComponent_div_26_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function BibleComponent_div_26_button_1_Template_button_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r15); const i_r13 = restoredCtx.index; const verse_r12 = restoredCtx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r14.onVerse(ctx_r14.bibleBookIndex[ctx_r14.book], ctx_r14.chapter, i_r13 + 1, verse_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const verse_r12 = ctx.$implicit;
    const i_r13 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", i_r13 + 1, " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", verse_r12.Verse, " ");
} }
function BibleComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, BibleComponent_div_26_button_1_Template, 4, 2, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r4.bibleChapter.Verse);
} }
class BibleComponent {
    constructor(bibleService, bibleBookIndexService, bibleStoreService, notificationService, pushNotificationsService, audioService, cacheService, bsModalService) {
        this.bibleService = bibleService;
        this.bibleBookIndexService = bibleBookIndexService;
        this.bibleStoreService = bibleStoreService;
        this.notificationService = notificationService;
        this.pushNotificationsService = pushNotificationsService;
        this.audioService = audioService;
        this.cacheService = cacheService;
        this.bsModalService = bsModalService;
        this.bibleBookIndex = [];
        this.bibleChapters = [];
        this.bibleChaptersCount = 0;
        this.book = 0;
        this.chapter = 0;
        this.verses = 0;
        this.bibleLanguages = [];
        this.selectedbibleBook = "0";
        this.selectedbibleChapter = "1";
        this.selectedbibleLanguage = "-1";
        this.pushNotificationsService.requestPermission();
    }
    ngOnInit() {
        this.bibleLanguages = this.bibleService.bibleLanguages;
        let hasSelectedBible = !!this.cacheService.load("selectedBible");
        if (!hasSelectedBible) {
            this.cacheService.save({
                key: "selectedBible",
                data: { Book: 0, Chapter: 1, Language: "english" },
            });
        }
        let selectedBible = this.cacheService.load("selectedBible");
        if (selectedBible) {
            this.bibleService.BibleLanguage = selectedBible.Language;
            this.selectedbibleLanguage = selectedBible.Language;
            this.selectedbibleBook = selectedBible.Book;
            this.selectedbibleChapter = selectedBible.Chapter;
        }
        this.book = +this.selectedbibleBook;
        this.chapter = +this.selectedbibleChapter;
        this.getSelectLanguageBible();
        this.loadBibleIndex();
    }
    loadBibleIndex() {
        this.bibleBookIndexService
            .getBibleBookIndex()
            .subscribe((bibleBookIndexRes) => {
            this.bibleBookIndex = bibleBookIndexRes;
            this.loadBibleChapterIndex();
        });
    }
    loadBibleChapterIndex() {
        this.selectedBibleBookIndex = this.bibleBookIndex.find((x, index) => {
            return index == this.book;
        });
    }
    getSelectLanguageBible() {
        let selectedBible = this.cacheService.load("selectedBible");
        this.bibleService.BibleLanguage = selectedBible.Language;
        this.bibleService.getBible().subscribe((res) => {
            this.bibleData = res;
            this.loadSelectedBible();
        });
    }
    loadSelectedBible() {
        var _a;
        this.bibleChapter =
            (_a = this.bibleData.Book[this.book]) === null || _a === void 0 ? void 0 : _a.Chapter[this.chapter - 1];
        this.bibleChapters = this.bibleData.Book[this.book].Chapter;
        this.getBibleChaptersCount();
    }
    getBibleChaptersCount() {
        return this.bibleData.Book[this.book].Chapter.length;
    }
    onBookChangeEvent(form) {
        this.book = +form.value.Book;
        form.control.patchValue({ Chapter: 1 });
        this.chapter = +form.value.Chapter;
        this.cacheService.save({ key: "selectedBible", data: form.value });
        this.loadSelectedBible();
        this.loadBibleChapterIndex();
    }
    onChapterChangeEvent(form) {
        this.cacheService.save({ key: "selectedBible", data: form.value });
        this.book = +form.value.Book;
        this.chapter = +form.value.Chapter;
        this.loadSelectedBible();
    }
    onLanguageChangeEvent(form) {
        this.cacheService.save({ key: "selectedBible", data: form.value });
        this.book = +form.value.Book;
        this.chapter = +form.value.Chapter;
        this.getSelectLanguageBible();
    }
    onVerse(bibleBookIndex, chapter, verseNumber, verse) {
        this.bsModalService.show(_bible_verse_detail_bible_verse_detail_component__WEBPACK_IMPORTED_MODULE_0__.BibleVerseDetailComponent, {
            initialState: { bibleBookIndex, chapter, verseNumber, verse },
            animated: true,
            class: "modal-lg",
        });
    }
}
BibleComponent.ɵfac = function BibleComponent_Factory(t) { return new (t || BibleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_service_bible_service__WEBPACK_IMPORTED_MODULE_1__.BibleService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_service_bible_book_index_service__WEBPACK_IMPORTED_MODULE_2__.BibleBookIndexService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_service_bible_store_service__WEBPACK_IMPORTED_MODULE_3__.BibleStoreService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_service_notification_service__WEBPACK_IMPORTED_MODULE_4__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_shared_push_notification_service__WEBPACK_IMPORTED_MODULE_5__.PushNotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_shared_audio_service__WEBPACK_IMPORTED_MODULE_6__.AudioService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_shared_cache_service__WEBPACK_IMPORTED_MODULE_7__.CacheService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__.BsModalService)); };
BibleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: BibleComponent, selectors: [["app-bible"]], decls: 27, vars: 10, consts: [[1, "list-group", "mb-5"], [1, "list-group-item", "list-group-item-action", "active", "sticky-top"], ["form", "ngForm"], [1, "row"], [1, "col"], [1, "position-absolute", "top-0", "start-100", "translate-middle", "badge", "rounded-pill", "bg-danger"], ["name", "Book", 1, "form-control", 3, "ngModel", "change"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "Chapter", 1, "form-control", 3, "ngModel", "change"], ["name", "Language", 1, "form-control", "text-capitalize", 3, "ngModel", "change"], [3, "value", "selected", 4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "value"], [3, "value", "selected"], ["type", "button", "class", "list-group-item list-group-item-action card-shadow", 3, "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "list-group-item", "list-group-item-action", "card-shadow", 3, "click"]], template: function BibleComponent_Template(rf, ctx) { if (rf & 1) {
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "form", null, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "Book ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function BibleComponent_Template_select_change_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r16); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](3); return ctx.onBookChangeEvent(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](11, BibleComponent_option_11_Template, 2, 3, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "Chapter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function BibleComponent_Template_select_change_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r16); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](3); return ctx.onChapterChangeEvent(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](18, BibleComponent_option_18_Template, 2, 3, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21, "Language ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function BibleComponent_Template_select_change_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r16); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](3); return ctx.onLanguageChangeEvent(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](25, BibleComponent_option_25_Template, 2, 3, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](26, BibleComponent_div_26_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", 66, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.selectedbibleBook);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.bibleBookIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx.selectedBibleBookIndex.chapters.length, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.selectedbibleChapter);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.selectedBibleBookIndex.chapters);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx.bibleLanguages.length, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.selectedbibleLanguage);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.bibleLanguages);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.bibleChapter);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgSelectMultipleOption"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiaWJsZS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 5693:
/*!**********************************************!*\
  !*** ./src/app/counter/counter.component.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CounterComponent": function() { return /* binding */ CounterComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class CounterComponent {
    constructor() {
        this.currentCount = 0;
    }
    incrementCounter() {
        this.currentCount++;
    }
}
CounterComponent.ɵfac = function CounterComponent_Factory(t) { return new (t || CounterComponent)(); };
CounterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CounterComponent, selectors: [["app-counter-component"]], decls: 10, vars: 1, consts: [["aria-live", "polite"], [1, "btn", "btn-primary", 3, "click"]], template: function CounterComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CounterComponent_Template_button_click_8_listener() { return ctx.incrementCounter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Increment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentCount);
    } }, encapsulation: 2 });


/***/ }),

/***/ 9339:
/*!****************************************************!*\
  !*** ./src/app/fetch-data/fetch-data.component.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FetchDataComponent": function() { return /* binding */ FetchDataComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _web_api_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../web-api-client */ 814);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);



function FetchDataComponent_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function FetchDataComponent_table_5_tr_12_Template(rf, ctx) { if (rf & 1) {
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
} if (rf & 2) {
    const forecast_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](forecast_r3.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](forecast_r3.temperatureC);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](forecast_r3.temperatureF);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](forecast_r3.summary);
} }
function FetchDataComponent_table_5_Template(rf, ctx) { if (rf & 1) {
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
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.forecasts);
} }
class FetchDataComponent {
    constructor(client) {
        this.client = client;
        client.get().subscribe(result => {
            this.forecasts = result;
        }, error => console.error(error));
    }
}
FetchDataComponent.ɵfac = function FetchDataComponent_Factory(t) { return new (t || FetchDataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_web_api_client__WEBPACK_IMPORTED_MODULE_0__.WeatherForecastClient)); };
FetchDataComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FetchDataComponent, selectors: [["app-fetch-data"]], decls: 6, vars: 2, consts: [["id", "tableLabel"], [4, "ngIf"], ["class", "table table-striped", "aria-labelledby", "tableLabel", 4, "ngIf"], ["aria-labelledby", "tableLabel", 1, "table", "table-striped"], [4, "ngFor", "ngForOf"]], template: function FetchDataComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Weather forecast");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "This component demonstrates fetching data from the server.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, FetchDataComponent_p_4_Template, 3, 0, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, FetchDataComponent_table_5_Template, 13, 1, "table", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.forecasts);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.forecasts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], encapsulation: 2 });


/***/ }),

/***/ 5067:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": function() { return /* binding */ HomeComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class HomeComponent {
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 67, vars: 0, consts: [["href", "https://get.asp.net/"], ["href", "https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx"], ["href", "https://angular.io/"], ["href", "http://www.typescriptlang.org/"], ["href", "http://getbootstrap.com/"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, encapsulation: 2 });


/***/ }),

/***/ 6499:
/*!************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavMenuComponent": function() { return /* binding */ NavMenuComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);



const _c0 = function () { return ["/"]; };
const _c1 = function (a0) { return { show: a0 }; };
const _c2 = function () { return ["link-active"]; };
const _c3 = function () { return { exact: true }; };
const _c4 = function () { return ["/bible"]; };
const _c5 = function () { return ["/bible", "audio"]; };
class NavMenuComponent {
    constructor() {
        this.isExpanded = false;
    }
    collapse() {
        this.isExpanded = false;
    }
    toggle() {
        this.isExpanded = !this.isExpanded;
    }
}
NavMenuComponent.ɵfac = function NavMenuComponent_Factory(t) { return new (t || NavMenuComponent)(); };
NavMenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavMenuComponent, selectors: [["app-nav-menu"]], decls: 19, vars: 16, consts: [[1, "navbar", "navbar-expand-sm", "navbar-toggleable-sm", "navbar-light", "border-bottom", "box-shadow", "mb-3"], [1, "container"], [1, "navbar-brand", 3, "routerLink"], [1, "text-uppercase"], ["type", "button", "data-toggle", "collapse", "data-target", ".navbar-collapse", "aria-label", "Toggle navigation", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], [1, "navbar-collapse", "collapse", "d-sm-inline-flex", "flex-sm-row-reverse", 3, "ngClass"], [1, "navbar-nav", "flex-grow"], [1, "nav-item", 3, "routerLinkActive", "routerLinkActiveOptions"], [1, "nav-link", "text-dark", 3, "routerLink"], [1, "nav-item"]], template: function NavMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Bible");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavMenuComponent_Template_button_click_6_listener() { return ctx.toggle(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Audio Bible");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", ctx.isExpanded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c1, ctx.isExpanded));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c2))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c5));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive], styles: ["a.navbar-brand[_ngcontent-%COMP%] {\n  white-space: normal;\n  text-align: center;\n  word-break: break-all;\n}\n\nhtml[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n@media (min-width: 768px) {\n  html[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n\n.box-shadow[_ngcontent-%COMP%] {\n  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.05);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBQ0E7RUFDRTtJQUNFLGVBQUE7RUFFRjtBQUNGOztBQUNBO0VBQ0UsaURBQUE7QUFDRiIsImZpbGUiOiJuYXYtbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImEubmF2YmFyLWJyYW5kIHtcclxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbn1cclxuXHJcbmh0bWwge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICBodG1sIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbn1cclxuXHJcbi5ib3gtc2hhZG93IHtcclxuICBib3gtc2hhZG93OiAwIC4yNXJlbSAuNzVyZW0gcmdiYSgwLCAwLCAwLCAuMDUpO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 7672:
/*!*************************************************!*\
  !*** ./src/app/product/store/product.action.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADD_PRODUCT": function() { return /* binding */ ADD_PRODUCT; },
/* harmony export */   "ADD_PRODUCTS": function() { return /* binding */ ADD_PRODUCTS; },
/* harmony export */   "UPDATE_PRODUCT": function() { return /* binding */ UPDATE_PRODUCT; },
/* harmony export */   "DELETE_PRODUCT": function() { return /* binding */ DELETE_PRODUCT; },
/* harmony export */   "AddProduct": function() { return /* binding */ AddProduct; },
/* harmony export */   "AddProducts": function() { return /* binding */ AddProducts; },
/* harmony export */   "UpdateProduct": function() { return /* binding */ UpdateProduct; },
/* harmony export */   "DeleteProduct": function() { return /* binding */ DeleteProduct; }
/* harmony export */ });
const ADD_PRODUCT = "ADD_PRODUCT";
const ADD_PRODUCTS = "ADD_PRODUCTS";
const UPDATE_PRODUCT = "UPDATE_PRODUCT";
const DELETE_PRODUCT = "DELETE_PRODUCT";
class AddProduct {
    constructor(payload) {
        this.payload = payload;
        this.type = ADD_PRODUCT;
    }
}
class AddProducts {
    constructor(payload) {
        this.payload = payload;
        this.type = ADD_PRODUCTS;
    }
}
class UpdateProduct {
    constructor(payload) {
        this.payload = payload;
        this.type = UPDATE_PRODUCT;
    }
}
class DeleteProduct {
    constructor(payload) {
        this.payload = payload;
        this.type = DELETE_PRODUCT;
    }
}


/***/ }),

/***/ 5559:
/*!**************************************************!*\
  !*** ./src/app/product/store/product.reducer.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "productReducer": function() { return /* binding */ productReducer; }
/* harmony export */ });
/* harmony import */ var _product_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product.action */ 7672);

//step 2 create initial state of the store
const initialState = {
    products: [
        {
            id: "1",
            address: "New Add",
            model: "mode",
            name: "name",
            number: " number",
        },
        {
            id: "2",
            address: "New Add",
            model: "mode",
            name: "name",
            number: " number",
        },
    ],
};
//step 3 create reducer of the store
function productReducer(state = initialState, action) {
    switch (action.type) {
        case _product_action__WEBPACK_IMPORTED_MODULE_0__.ADD_PRODUCT:
            return Object.assign(Object.assign({}, state), { products: [...state.products, action.payload] });
        case _product_action__WEBPACK_IMPORTED_MODULE_0__.ADD_PRODUCTS:
            return Object.assign(Object.assign({}, state), { products: [...state.products, ...action.payload] });
        case _product_action__WEBPACK_IMPORTED_MODULE_0__.UPDATE_PRODUCT:
            const product = state.products[action.payload.index];
            const updateProuct = Object.assign(Object.assign({}, product), action.payload.product);
            const updateProucts = [...state.products];
            updateProucts[action.payload.index] = updateProuct;
            return Object.assign(Object.assign({}, state), { products: [] });
        case _product_action__WEBPACK_IMPORTED_MODULE_0__.DELETE_PRODUCT:
            return Object.assign(Object.assign({}, state), { products: state.products.filter((x, index) => {
                    return index !== action.payload;
                }) });
        default:
            return state;
    }
}


/***/ }),

/***/ 4494:
/*!*****************************************************!*\
  !*** ./src/app/service/bible-book-index.service.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BibleBookIndexService": function() { return /* binding */ BibleBookIndexService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _shared_http_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/http-client.service */ 6057);


class BibleBookIndexService {
    constructor(_http) {
        this._http = _http;
        this._bibleLanguagePath = "assets/bible/bible-book-info.json";
    }
    getBibleBookIndex() {
        return this._http.get({
            url: this._bibleLanguagePath,
            cacheMins: 0,
        });
    }
}
BibleBookIndexService.ɵfac = function BibleBookIndexService_Factory(t) { return new (t || BibleBookIndexService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_shared_http_client_service__WEBPACK_IMPORTED_MODULE_0__.HttpClientService)); };
BibleBookIndexService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BibleBookIndexService, factory: BibleBookIndexService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 8612:
/*!************************************************!*\
  !*** ./src/app/service/bible-store.service.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BibleStoreService": function() { return /* binding */ BibleStoreService; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6215);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);


class BibleStoreService {
    constructor() {
        // Make _puppiesSource private so it's not accessible from the outside, 
        // expose it as puppies$ observable (read-only) instead.
        // Write to _puppiesSource only through specified store methods below.
        this._puppiesSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
        // Exposed observable (read-only).
        this.puppies$ = this._puppiesSource.asObservable();
    }
    // Get last value without subscribing to the puppies$ observable (synchronously).
    getPuppies() {
        return this._puppiesSource.getValue();
    }
    _setPuppies(puppies) {
        this._puppiesSource.next(puppies);
    }
    addPuppy(puppy) {
        const puppies = [...this.getPuppies(), puppy];
        this._setPuppies(puppies);
    }
    removePuppy(puppy) {
        const puppies = this.getPuppies().filter(p => p.Book !== puppy.Book);
        this._setPuppies(puppies);
    }
    adoptPuppy(puppy) {
        // const puppies = this.getPuppies().map(p =>
        //   p.Book === puppy.Book ? new Puppy({ ...p, ...{ adopted: true } }) : p
        // );
        // this._setPuppies(puppies);
    }
}
BibleStoreService.ɵfac = function BibleStoreService_Factory(t) { return new (t || BibleStoreService)(); };
BibleStoreService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BibleStoreService, factory: BibleStoreService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9826:
/*!******************************************!*\
  !*** ./src/app/service/bible.service.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BibleService": function() { return /* binding */ BibleService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _shared_http_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/http-client.service */ 6057);


class BibleService {
    constructor(_http) {
        this._http = _http;
        this._bibleLanguage = "english";
        this._bibleLanguagePath = "assets/bible/english/bible.json";
        this.bibleLanguages = [
            "afrikaans",
            "bengali",
            "english",
            "gujarati",
            "hindi",
            "indonesian",
            "kannada",
            "malayalam",
            "nepali",
            "oriya",
            "punjabi",
            "sepedi",
            "tamil",
            "telugu",
            "xhosa",
            "zulu",
        ];
    }
    set BibleLanguage(value) {
        //let initialPath = `assets/bible/${this.initialLanguage}/bible.json`;
        let selectedBible = this.bibleLanguages.find((lang) => lang == value.toLowerCase());
        if (selectedBible) {
            this._bibleLanguagePath = `assets/bible/${selectedBible}/bible.json`;
            this._bibleLanguage = selectedBible;
        }
        //return initialPath;
    }
    get BibleLanguage() {
        return this._bibleLanguage;
    }
    getBible() {
        return this._http.get({
            url: this._bibleLanguagePath,
            cacheMins: 0,
        });
    }
}
BibleService.ɵfac = function BibleService_Factory(t) { return new (t || BibleService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_shared_http_client_service__WEBPACK_IMPORTED_MODULE_0__.HttpClientService)); };
BibleService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BibleService, factory: BibleService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 7320:
/*!*************************************************!*\
  !*** ./src/app/service/notification.service.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationService": function() { return /* binding */ NotificationService; },
/* harmony export */   "NotificationOptions": function() { return /* binding */ NotificationOptions; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ 9344);


class NotificationService {
    constructor(toastr) {
        this.toastr = toastr;
    }
    /**
     * info
     */
    info(title, message, notificationOptions) {
        this.toastr.info(message, title, notificationOptions);
    }
    /**
     * success
     */
    success(title, message, notificationOptions) {
        this.toastr.success(message, title, notificationOptions);
    }
    /**
   * warning
   */
    warning(title, message, notificationOptions) {
        this.toastr.warning(message, title, notificationOptions);
    }
    /**
     * error
     */
    error(title, message, notificationOptions) {
        this.toastr.error(message, title, notificationOptions);
    }
    /**
   * show
   */
    show(title, message, notificationOptions) {
        this.toastr.show(message, title, notificationOptions);
    }
}
NotificationService.ɵfac = function NotificationService_Factory(t) { return new (t || NotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__.ToastrService)); };
NotificationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NotificationService, factory: NotificationService.ɵfac, providedIn: 'root' });
class NotificationOptions {
    constructor() {
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
    }
}


/***/ }),

/***/ 8784:
/*!*****************************************!*\
  !*** ./src/app/shared/audio.service.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AudioService": function() { return /* binding */ AudioService; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6215);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);


class AudioService {
    constructor() {
        this.timeElapsed = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('00:00');
        this.timeRemaining = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('-00:00');
        this.percentElapsed = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(0);
        this.percentLoaded = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(0);
        this.playerStatus = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('paused');
        this.calculateTime = (evt) => {
            let ct = this.audio.currentTime;
            let d = this.audio.duration;
            this.setTimeElapsed(ct);
            this.setPercentElapsed(d, ct);
            this.setTimeRemaining(d, ct);
        };
        this.calculatePercentLoaded = (evt) => {
            if (this.audio.duration > 0) {
                for (var i = 0; i < this.audio.buffered.length; i++) {
                    if (this.audio.buffered.start(this.audio.buffered.length - 1 - i) < this.audio.currentTime) {
                        let percent = (this.audio.buffered.end(this.audio.buffered.length - 1 - i) / this.audio.duration) * 100;
                        this.setPercentLoaded(percent);
                        break;
                    }
                }
            }
        };
        this.setPlayerStatus = (evt) => {
            switch (evt.type) {
                case 'playing':
                    this.playerStatus.next('playing');
                    break;
                case 'pause':
                    this.playerStatus.next('paused');
                    break;
                case 'waiting':
                    this.playerStatus.next('loading');
                    break;
                case 'ended':
                    this.playerStatus.next('ended');
                    break;
                default:
                    this.playerStatus.next('paused');
                    break;
            }
        };
        this.audio = new Audio();
        this.attachListeners();
    }
    attachListeners() {
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
    getAudio() {
        return this.audio;
    }
    /**
     * This is typically a URL to an MP3 file
     * @param src
     */
    setAudio(src) {
        this.audio.src = src;
        this.playAudio();
    }
    /**
     * The method to play audio
     */
    playAudio() {
        this.audio.play();
    }
    /**
     * The method to pause audio
     */
    pauseAudio() {
        this.audio.pause();
    }
    /**
     * Method to seek to a position on the audio track (in milliseconds, I think),
     * @param position
     */
    seekAudio(position) {
        this.audio.currentTime = position;
    }
    /**
     * This formats the audio's elapsed time into a human readable format, could be refactored into a Pipe.
     * It takes the audio track's "currentTime" property as an argument. It is called from the, calulateTime method.
     * @param ct
     */
    setTimeElapsed(ct) {
        let seconds = Math.floor(ct % 60), displaySecs = (seconds < 10) ? '0' + seconds : seconds, minutes = Math.floor((ct / 60) % 60), displayMins = (minutes < 10) ? '0' + minutes : minutes;
        this.timeElapsed.next(displayMins + ':' + displaySecs);
    }
    /**
     * This method takes the track's "duration" and "currentTime" properties to calculate the remaing time the track has
     * left to play. It is called from the calculateTime method.
     * @param d
     * @param t
     */
    setTimeRemaining(d, t) {
        let remaining;
        let timeLeft = d - t, seconds = Math.floor(timeLeft % 60) || 0, remainingSeconds = seconds < 10 ? '0' + seconds : seconds, minutes = Math.floor((timeLeft / 60) % 60) || 0, remainingMinutes = minutes < 10 ? '0' + minutes : minutes, hours = Math.floor(((timeLeft / 60) / 60) % 60) || 0;
        // remaining = (hours === 0)
        if (hours === 0) {
            remaining = '-' + remainingMinutes + ':' + remainingSeconds;
        }
        else {
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
    setPercentElapsed(d, ct) {
        this.percentElapsed.next((Math.floor((100 / d) * ct)) || 0);
    }
    /**
     * This method takes the track's "duration" and "currentTime" properties to calculate the percent of time elapsed.
     * This is valuable for setting the position of a range input. It is called from the calculatePercentLoaded method.
     * @param p
     */
    setPercentLoaded(p) {
        this.percentLoaded.next(parseInt(p, 10) || 0);
    }
    /**
     * This method returns an Observable whose value is the track's percent loaded
     */
    getPercentLoaded() {
        return this.percentLoaded.asObservable();
    }
    /**
     * This method returns an Observable whose value is the track's percent elapsed
     */
    getPercentElapsed() {
        return this.percentElapsed.asObservable();
    }
    /**
     * This method returns an Observable whose value is the track's percent loaded
     */
    getTimeElapsed() {
        return this.timeElapsed.asObservable();
    }
    /**
     * This method returns an Observable whose value is the track's time remaining
     */
    getTimeRemaining() {
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
    getPlayerStatus() {
        return this.playerStatus.asObservable();
    }
    /**
     * Convenience method to toggle the audio between playing and paused
     */
    toggleAudio() {
        (this.audio.paused) ? this.audio.play() : this.audio.pause();
    }
}
AudioService.ɵfac = function AudioService_Factory(t) { return new (t || AudioService)(); };
AudioService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AudioService, factory: AudioService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 133:
/*!*****************************************!*\
  !*** ./src/app/shared/cache.service.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CacheService": function() { return /* binding */ CacheService; },
/* harmony export */   "LocalStorageSaveOptions": function() { return /* binding */ LocalStorageSaveOptions; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class CacheService {
    constructor() { }
    save(options) {
        // Set default values for optionals
        options.expirationMins = options.expirationMins || 0;
        // Set expiration date in miliseconds
        const expirationMS = options.expirationMins !== 0 ? options.expirationMins * 60 * 1000 : 0;
        const record = {
            value: typeof options.data === 'string' ? options.data : JSON.stringify(options.data),
            expiration: expirationMS !== 0 ? new Date().getTime() + expirationMS : null,
            hasExpiration: expirationMS !== 0 ? true : false
        };
        localStorage.setItem(options.key, JSON.stringify(record));
    }
    load(key) {
        // Get cached data from localstorage
        const item = localStorage.getItem(key);
        if (item !== null) {
            const record = JSON.parse(item);
            const now = new Date().getTime();
            // Expired data will return null
            if (!record || (record.hasExpiration && record.expiration <= now)) {
                return null;
            }
            else {
                return JSON.parse(record.value);
            }
        }
        return null;
    }
    remove(key) {
        localStorage.removeItem(key);
    }
    cleanLocalStorage() {
        localStorage.clear();
    }
}
CacheService.ɵfac = function CacheService_Factory(t) { return new (t || CacheService)(); };
CacheService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CacheService, factory: CacheService.ɵfac, providedIn: 'root' });
class LocalStorageSaveOptions {
}


/***/ }),

/***/ 3248:
/*!*******************************************************************!*\
  !*** ./src/app/shared/component/not-found/not-found.component.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundComponent": function() { return /* binding */ NotFoundComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 27, vars: 0, consts: [[1, "container"], [1, "first-four"], [1, "cog-wheel1"], [1, "cog1"], [1, "top"], [1, "down"], [1, "left-top"], [1, "left-down"], [1, "right-top"], [1, "right-down"], [1, "left"], [1, "right"], [1, "cog-wheel2"], [1, "cog2"], [1, "second-four"], [1, "wrong-para"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap\");\r\n\r\n@import url(\"https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700\");\r\n\r\n*[_ngcontent-%COMP%]{\r\n  margin:0;\r\n  padding:0;\r\n  box-sizing:border-box;\r\n}\r\n\r\nbody[_ngcontent-%COMP%]{\r\n  overflow:hidden;\r\n  background-color: #f4f6ff;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]{\r\n  width:100vw;\r\n  height:100vh;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-family: \"Poppins\", sans-serif;\r\n  position: relative;\r\n  left:6vmin;\r\n  text-align: center;\r\n}\r\n\r\n.cog-wheel1[_ngcontent-%COMP%], .cog-wheel2[_ngcontent-%COMP%]{\r\n  transform:scale(0.7);\r\n}\r\n\r\n.cog1[_ngcontent-%COMP%], .cog2[_ngcontent-%COMP%]{\r\n  width:40vmin;\r\n  height:40vmin;\r\n  border-radius:50%;\r\n  border:6vmin solid #f3c623;\r\n  position: relative;\r\n}\r\n\r\n.cog2[_ngcontent-%COMP%]{\r\n  border:6vmin solid #4f8a8b;\r\n}\r\n\r\n.top[_ngcontent-%COMP%], .down[_ngcontent-%COMP%], .left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%], .left-top[_ngcontent-%COMP%], .left-down[_ngcontent-%COMP%], .right-top[_ngcontent-%COMP%], .right-down[_ngcontent-%COMP%]{\r\n  width:10vmin;\r\n  height:10vmin;\r\n  background-color: #f3c623;\r\n  position: absolute;\r\n}\r\n\r\n.cog2[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%], .cog2[_ngcontent-%COMP%]   .down[_ngcontent-%COMP%], .cog2[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%], .cog2[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%], .cog2[_ngcontent-%COMP%]   .left-top[_ngcontent-%COMP%], .cog2[_ngcontent-%COMP%]   .left-down[_ngcontent-%COMP%], .cog2[_ngcontent-%COMP%]   .right-top[_ngcontent-%COMP%], .cog2[_ngcontent-%COMP%]   .right-down[_ngcontent-%COMP%]{\r\n  background-color: #4f8a8b;\r\n}\r\n\r\n.top[_ngcontent-%COMP%]{\r\n  top:-14vmin;\r\n  left:9vmin;\r\n}\r\n\r\n.down[_ngcontent-%COMP%]{\r\n  bottom:-14vmin;\r\n  left:9vmin;\r\n}\r\n\r\n.left[_ngcontent-%COMP%]{\r\n  left:-14vmin;\r\n  top:9vmin;\r\n}\r\n\r\n.right[_ngcontent-%COMP%]{\r\n  right:-14vmin;\r\n  top:9vmin;\r\n}\r\n\r\n.left-top[_ngcontent-%COMP%]{\r\n  transform:rotateZ(-45deg);\r\n  left:-8vmin;\r\n  top:-8vmin;\r\n}\r\n\r\n.left-down[_ngcontent-%COMP%]{\r\n  transform:rotateZ(45deg);\r\n  left:-8vmin;\r\n  top:25vmin;\r\n}\r\n\r\n.right-top[_ngcontent-%COMP%]{\r\n  transform:rotateZ(45deg);\r\n  right:-8vmin;\r\n  top:-8vmin;\r\n}\r\n\r\n.right-down[_ngcontent-%COMP%]{\r\n  transform:rotateZ(-45deg);\r\n  right:-8vmin;\r\n  top:25vmin;\r\n}\r\n\r\n.cog2[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  left:-10.2vmin;\r\n  bottom:10vmin;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]{\r\n  color:#142833;\r\n}\r\n\r\n.first-four[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  left:6vmin;\r\n  font-size:40vmin;\r\n}\r\n\r\n.second-four[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  right:18vmin;\r\n  z-index: -1;\r\n  font-size:40vmin;\r\n}\r\n\r\n.wrong-para[_ngcontent-%COMP%]{\r\n  font-family: \"Montserrat\", sans-serif;\r\n  position: absolute;\r\n  bottom:15vmin;\r\n  padding:3vmin 12vmin 3vmin 3vmin;\r\n  font-weight:600;\r\n  color:#092532;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFGQUFxRjs7QUFFckYsaUZBQWlGOztBQUVqRjtFQUNFLFFBQVE7RUFDUixTQUFTO0VBQ1QscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0NBQWtDO0VBQ2xDLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsMEJBQTBCO0VBQzFCLGtCQUFrQjtBQUNwQjs7QUFHQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixXQUFXO0VBQ1gsVUFBVTtBQUNaOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixVQUFVO0FBQ1o7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixnQ0FBZ0M7RUFDaEMsZUFBZTtFQUNmLGFBQWE7QUFDZiIsImZpbGUiOiJub3QtZm91bmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRANzAwJmRpc3BsYXk9c3dhcFwiKTtcclxuXHJcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6NDAwLDUwMCw2MDAsNzAwXCIpO1xyXG5cclxuKntcclxuICBtYXJnaW46MDtcclxuICBwYWRkaW5nOjA7XHJcbiAgYm94LXNpemluZzpib3JkZXItYm94O1xyXG59XHJcblxyXG5ib2R5e1xyXG4gIG92ZXJmbG93OmhpZGRlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNmZmO1xyXG59XHJcblxyXG4uY29udGFpbmVye1xyXG4gIHdpZHRoOjEwMHZ3O1xyXG4gIGhlaWdodDoxMDB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OjZ2bWluO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNvZy13aGVlbDEsIC5jb2ctd2hlZWwye1xyXG4gIHRyYW5zZm9ybTpzY2FsZSgwLjcpO1xyXG59XHJcblxyXG4uY29nMSwgLmNvZzJ7XHJcbiAgd2lkdGg6NDB2bWluO1xyXG4gIGhlaWdodDo0MHZtaW47XHJcbiAgYm9yZGVyLXJhZGl1czo1MCU7XHJcbiAgYm9yZGVyOjZ2bWluIHNvbGlkICNmM2M2MjM7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5cclxuLmNvZzJ7XHJcbiAgYm9yZGVyOjZ2bWluIHNvbGlkICM0ZjhhOGI7XHJcbn1cclxuXHJcbi50b3AsIC5kb3duLCAubGVmdCwgLnJpZ2h0LCAubGVmdC10b3AsIC5sZWZ0LWRvd24sIC5yaWdodC10b3AsIC5yaWdodC1kb3due1xyXG4gIHdpZHRoOjEwdm1pbjtcclxuICBoZWlnaHQ6MTB2bWluO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2M2MjM7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4uY29nMiAudG9wLC5jb2cyICAuZG93biwuY29nMiAgLmxlZnQsLmNvZzIgIC5yaWdodCwuY29nMiAgLmxlZnQtdG9wLC5jb2cyICAubGVmdC1kb3duLC5jb2cyICAucmlnaHQtdG9wLC5jb2cyICAucmlnaHQtZG93bntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGY4YThiO1xyXG59XHJcblxyXG4udG9we1xyXG4gIHRvcDotMTR2bWluO1xyXG4gIGxlZnQ6OXZtaW47XHJcbn1cclxuXHJcbi5kb3due1xyXG4gIGJvdHRvbTotMTR2bWluO1xyXG4gIGxlZnQ6OXZtaW47XHJcbn1cclxuXHJcbi5sZWZ0e1xyXG4gIGxlZnQ6LTE0dm1pbjtcclxuICB0b3A6OXZtaW47XHJcbn1cclxuXHJcbi5yaWdodHtcclxuICByaWdodDotMTR2bWluO1xyXG4gIHRvcDo5dm1pbjtcclxufVxyXG5cclxuLmxlZnQtdG9we1xyXG4gIHRyYW5zZm9ybTpyb3RhdGVaKC00NWRlZyk7XHJcbiAgbGVmdDotOHZtaW47XHJcbiAgdG9wOi04dm1pbjtcclxufVxyXG5cclxuLmxlZnQtZG93bntcclxuICB0cmFuc2Zvcm06cm90YXRlWig0NWRlZyk7XHJcbiAgbGVmdDotOHZtaW47XHJcbiAgdG9wOjI1dm1pbjtcclxufVxyXG5cclxuLnJpZ2h0LXRvcHtcclxuICB0cmFuc2Zvcm06cm90YXRlWig0NWRlZyk7XHJcbiAgcmlnaHQ6LTh2bWluO1xyXG4gIHRvcDotOHZtaW47XHJcbn1cclxuXHJcbi5yaWdodC1kb3due1xyXG4gIHRyYW5zZm9ybTpyb3RhdGVaKC00NWRlZyk7XHJcbiAgcmlnaHQ6LTh2bWluO1xyXG4gIHRvcDoyNXZtaW47XHJcbn1cclxuXHJcbi5jb2cye1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0Oi0xMC4ydm1pbjtcclxuICBib3R0b206MTB2bWluO1xyXG59XHJcblxyXG5oMXtcclxuICBjb2xvcjojMTQyODMzO1xyXG59XHJcblxyXG4uZmlyc3QtZm91cntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGVmdDo2dm1pbjtcclxuICBmb250LXNpemU6NDB2bWluO1xyXG59XHJcblxyXG4uc2Vjb25kLWZvdXJ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHJpZ2h0OjE4dm1pbjtcclxuICB6LWluZGV4OiAtMTtcclxuICBmb250LXNpemU6NDB2bWluO1xyXG59XHJcblxyXG4ud3JvbmctcGFyYXtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbToxNXZtaW47XHJcbiAgcGFkZGluZzozdm1pbiAxMnZtaW4gM3ZtaW4gM3ZtaW47XHJcbiAgZm9udC13ZWlnaHQ6NjAwO1xyXG4gIGNvbG9yOiMwOTI1MzI7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 6057:
/*!***********************************************!*\
  !*** ./src/app/shared/http-client.service.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpClientService": function() { return /* binding */ HttpClientService; },
/* harmony export */   "HttpOptions": function() { return /* binding */ HttpOptions; },
/* harmony export */   "Verbs": function() { return /* binding */ Verbs; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 5917);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 3190);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _cache_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cache.service */ 133);





class HttpClientService {
    constructor(http, _cacheService) {
        this.http = http;
        this._cacheService = _cacheService;
    }
    get(options) {
        return this.httpCall(Verbs.GET, options);
    }
    delete(options) {
        return this.httpCall(Verbs.DELETE, options);
    }
    post(options) {
        return this.httpCall(Verbs.POST, options);
    }
    put(options) {
        return this.httpCall(Verbs.PUT, options);
    }
    httpCall(verb, options) {
        // Setup default values
        options.body = options.body || null;
        options.cacheMins = options.cacheMins || 0;
        if (options.cacheMins > 0) {
            // Get data from cache
            const data = this._cacheService.load(options.url);
            // Return data from cache
            if (data !== null) {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(data);
            }
        }
        return this.http.request(verb, options.url, {
            body: options.body
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)(response => {
            if (options.cacheMins > 0) {
                // Data will be cached
                this._cacheService.save({
                    key: options.url,
                    data: response,
                    expirationMins: options.cacheMins
                });
            }
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(response);
        }));
    }
}
HttpClientService.ɵfac = function HttpClientService_Factory(t) { return new (t || HttpClientService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_cache_service__WEBPACK_IMPORTED_MODULE_0__.CacheService)); };
HttpClientService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: HttpClientService, factory: HttpClientService.ɵfac, providedIn: 'root' });
class HttpOptions {
}
var Verbs;
(function (Verbs) {
    Verbs["GET"] = "GET";
    Verbs["PUT"] = "PUT";
    Verbs["POST"] = "POST";
    Verbs["DELETE"] = "DELETE";
})(Verbs || (Verbs = {}));


/***/ }),

/***/ 9675:
/*!****************************************************************!*\
  !*** ./src/app/shared/interceptor/http-request.interceptor.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpRequestInterceptor": function() { return /* binding */ HttpRequestInterceptor; }
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 205);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 8307);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _manage_http_request_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../manage-http-request.service */ 3594);





class HttpRequestInterceptor {
    constructor(httpRequestHandler) {
        this.httpRequestHandler = httpRequestHandler;
    }
    intercept(req, next) {
        this.httpRequestHandler.setLoaderStatus(true);
        console.log(req);
        //Modify request before sent 
        let modreq = req.clone({
        //url: 'https://jsonplaceholder.typicode.com/werwerwer'
        });
        return next.handle(modreq).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(event => {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpEventType.Response) {
                console.log(event);
                this.httpRequestHandler.setLoaderStatus(false);
            }
        }, () => {
        }), 
        //Catch Errors from the URL
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(err => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(err);
        }));
    }
}
HttpRequestInterceptor.ɵfac = function HttpRequestInterceptor_Factory(t) { return new (t || HttpRequestInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_manage_http_request_service__WEBPACK_IMPORTED_MODULE_0__.ManageHttpRequestService)); };
HttpRequestInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: HttpRequestInterceptor, factory: HttpRequestInterceptor.ɵfac });


/***/ }),

/***/ 3594:
/*!*******************************************************!*\
  !*** ./src/app/shared/manage-http-request.service.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageHttpRequestService": function() { return /* binding */ ManageHttpRequestService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);


class ManageHttpRequestService {
    constructor() {
        this.requestStatus = false;
        this.httpLoader = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    setLoaderStatus(loadStatus) {
        this.httpLoader.emit(loadStatus);
    }
}
ManageHttpRequestService.ɵfac = function ManageHttpRequestService_Factory(t) { return new (t || ManageHttpRequestService)(); };
ManageHttpRequestService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ManageHttpRequestService, factory: ManageHttpRequestService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7404:
/*!************************************************!*\
  !*** ./src/app/shared/notification.service.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationService": function() { return /* binding */ NotificationService; },
/* harmony export */   "NotificationOptions": function() { return /* binding */ NotificationOptions; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ 9344);


class NotificationService {
    constructor(toastr) {
        this.toastr = toastr;
    }
    /**
     * info
     */
    info(title, message, notificationOptions) {
        this.toastr.info(message, title, notificationOptions);
    }
    /**
     * success
     */
    success(title, message, notificationOptions) {
        this.toastr.success(message, title, notificationOptions);
    }
    /**
   * warning
   */
    warning(title, message, notificationOptions) {
        this.toastr.warning(message, title, notificationOptions);
    }
    /**
     * error
     */
    error(title, message, notificationOptions) {
        this.toastr.error(message, title, notificationOptions);
    }
    /**
   * show
   */
    show(title, message, notificationOptions) {
        this.toastr.show(message, title, notificationOptions);
    }
}
NotificationService.ɵfac = function NotificationService_Factory(t) { return new (t || NotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__.ToastrService)); };
NotificationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NotificationService, factory: NotificationService.ɵfac, providedIn: 'root' });
class NotificationOptions {
    constructor() {
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
    }
}


/***/ }),

/***/ 7407:
/*!*****************************************************!*\
  !*** ./src/app/shared/push-notification.service.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PushNotificationsService": function() { return /* binding */ PushNotificationsService; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 9165);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);


class PushNotificationsService {
    constructor() {
        this.data = [];
        this.permission = this.isSupported() ? 'default' : 'denied';
    }
    isSupported() {
        return 'Notification' in window;
    }
    sendPushNotification(title, message) {
        this.data = [];
        this.data.push({
            'title': title,
            'alertContent': message
        });
        this.generateNotification(this.data);
    }
    requestPermission() {
        let self = this;
        if ('Notification' in window) {
            Notification.requestPermission(function (status) {
                return self.permission = status;
            });
        }
    }
    create(title, options) {
        let self = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(function (obs) {
            if (!('Notification' in window)) {
                console.log('Notifications are not available in this environment');
                obs.complete();
            }
            if (self.permission !== 'granted') {
                console.log("The user hasn't granted you permission to send push notifications");
                obs.complete();
            }
            let _notify = new Notification(title, options);
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
    generateNotification(source) {
        let self = this;
        source.forEach((item) => {
            let options = {
                body: item.alertContent,
                //icon: "../../assets/images/bell-icon.png"
            };
            let notify = self.create(item.title, options).subscribe();
        });
    }
}
PushNotificationsService.ɵfac = function PushNotificationsService_Factory(t) { return new (t || PushNotificationsService)(); };
PushNotificationsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PushNotificationsService, factory: PushNotificationsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": function() { return /* binding */ SharedModule; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[
        // FormsModule,
        // BrowserModule       
        ]] });


/***/ }),

/***/ 5754:
/*!**************************************!*\
  !*** ./src/app/store/app.reducer.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appReducer": function() { return /* binding */ appReducer; }
/* harmony export */ });
/* harmony import */ var _product_store_product_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../product/store/product.reducer */ 5559);

const appReducer = {
    products: _product_store_product_reducer__WEBPACK_IMPORTED_MODULE_0__.productReducer
};


/***/ }),

/***/ 3805:
/*!****************************************!*\
  !*** ./src/app/todo/todo.component.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TodoComponent": function() { return /* binding */ TodoComponent; }
/* harmony export */ });
/* harmony import */ var _web_api_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../web-api-client */ 814);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 9976);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ 3301);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 4163);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);








function TodoComponent_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "active": a0 }; };
function TodoComponent_div_5_li_9_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TodoComponent_div_5_li_9_Template_li_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16); const list_r13 = restoredCtx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r15.selectedList = list_r13; });
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
} if (rf & 2) {
    const list_r13 = ctx.$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c0, ctx_r11.selectedList == list_r13));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", list_r13.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r11.remainingItems(list_r13));
} }
function TodoComponent_div_5_div_10_li_7_input_5_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function TodoComponent_div_5_div_10_li_7_input_5_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25); const item_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; return item_r18.title = $event; })("keyup.enter", function TodoComponent_div_5_div_10_li_7_input_5_Template_input_keyup_enter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25); const item_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r26.updateItem(item_r18, true); })("blur", function TodoComponent_div_5_div_10_li_7_input_5_Template_input_blur_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25); const item_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r28.updateItem(item_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const i_r19 = ctx_r30.index;
    const item_r18 = ctx_r30.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("id", "itemTitle" + i_r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", item_r18.title);
} }
const _c1 = function (a0) { return { "done-todo": a0 }; };
function TodoComponent_div_5_div_10_li_7_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TodoComponent_div_5_div_10_li_7_div_6_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const item_r18 = ctx_r32.$implicit; const i_r19 = ctx_r32.index; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r31.editItem(item_r18, "itemTitle" + i_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c1, item_r18.done));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r18.title);
} }
function TodoComponent_div_5_div_10_li_7_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TodoComponent_div_5_div_10_li_7_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r36); const item_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](10); return ctx_r35.showItemDetailsModal(_r5, item_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "fa-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r22.faEllipsisH);
} }
function TodoComponent_div_5_div_10_li_7_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function TodoComponent_div_5_div_10_li_7_Template_input_ngModelChange_3_listener($event) { const item_r18 = ctx.$implicit; return item_r18.done = $event; })("change", function TodoComponent_div_5_div_10_li_7_Template_input_change_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r40); const item_r18 = restoredCtx.$implicit; const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r39.updateItem(item_r18); });
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
} if (rf & 2) {
    const item_r18 = ctx.$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", item_r18.done);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r18 == ctx_r17.selectedItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r18 != ctx_r17.selectedItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r18.id != 0);
} }
function TodoComponent_div_5_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h2", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TodoComponent_div_5_div_10_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r42); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](8); return ctx_r41.showListOptionsModal(_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "fa-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ul", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, TodoComponent_div_5_div_10_li_7_Template, 9, 4, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TodoComponent_div_5_div_10_Template_li_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r42); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r43.addItem(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Add Item...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r12.selectedList.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r12.faEllipsisH);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r12.selectedList.items);
} }
function TodoComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h2", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Lists");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TodoComponent_div_5_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](14); return ctx_r44.showNewListModal(_r9); });
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
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r1.faPlus);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.vm.lists);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.selectedList);
} }
function TodoComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 1, ctx_r2.vm));
} }
function TodoComponent_ng_template_7_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 1, ctx_r46.listOptionsEditor));
} }
function TodoComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h4", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "List Options");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TodoComponent_ng_template_7_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r48); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r47.listOptionsModalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function TodoComponent_ng_template_7_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r48); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r49.listOptionsEditor.title = $event; })("keyup.enter", function TodoComponent_ng_template_7_Template_input_keyup_enter_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r48); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r50.updateListOptions(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, TodoComponent_ng_template_7_div_11_Template, 4, 3, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TodoComponent_ng_template_7_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r48); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](12); return ctx_r51.confirmDeleteList(_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TodoComponent_ng_template_7_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r48); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r52.listOptionsModalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TodoComponent_ng_template_7_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r48); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r53.updateListOptions(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r4.listOptionsEditor.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.debug);
} }
function TodoComponent_ng_template_9_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r57 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", list_r57.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](list_r57.title);
} }
function TodoComponent_ng_template_9_option_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const level_r58 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", level_r58.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](level_r58.name);
} }
function TodoComponent_ng_template_9_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 1, ctx_r56.itemDetailsEditor));
} }
function TodoComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h4", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Item Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TodoComponent_ng_template_9_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r60); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r59.itemDetailsModalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\u00D7");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function TodoComponent_ng_template_9_Template_select_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r60); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r61.itemDetailsEditor.listId = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, TodoComponent_ng_template_9_option_12_Template, 2, 2, "option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "label", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Priority");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "select", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function TodoComponent_ng_template_9_Template_select_ngModelChange_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r60); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r62.itemDetailsEditor.priority = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, TodoComponent_ng_template_9_option_17_Template, 2, 2, "option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Note");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "textarea", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function TodoComponent_ng_template_9_Template_textarea_ngModelChange_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r60); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r63.itemDetailsEditor.note = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, TodoComponent_ng_template_9_div_22_Template, 4, 3, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TodoComponent_ng_template_9_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r60); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r64.deleteItem(ctx_r64.selectedItem); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TodoComponent_ng_template_9_Template_button_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r60); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r65.itemDetailsModalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TodoComponent_ng_template_9_Template_button_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r60); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r66.updateItemDetails(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
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
} }
function TodoComponent_ng_template_11_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 1, ctx_r67.selectedList));
} }
function TodoComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h4", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TodoComponent_ng_template_11_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r69); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r68.deleteListModalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\u00D7");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TodoComponent_ng_template_11_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r69); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r70.deleteListModalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TodoComponent_ng_template_11_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r69); const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r71.deleteListConfirmed(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Delete \"", ctx_r8.selectedList == null ? null : ctx_r8.selectedList.title, "\"?");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.debug);
} }
function TodoComponent_ng_template_13_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r72.newListEditor.error, " ");
} }
function TodoComponent_ng_template_13_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 1, ctx_r73.newListEditor));
} }
const _c2 = function (a0) { return { "is-invalid": a0 }; };
function TodoComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h4", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "New List");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TodoComponent_ng_template_13_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r75); const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r74.newListCancelled(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function TodoComponent_ng_template_13_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r75); const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r76.newListEditor.title = $event; })("keyup.enter", function TodoComponent_ng_template_13_Template_input_keyup_enter_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r75); const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r77.addList(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, TodoComponent_ng_template_13_div_11_Template, 2, 1, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, TodoComponent_ng_template_13_div_12_Template, 4, 3, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TodoComponent_ng_template_13_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r75); const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r78.newListCancelled(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TodoComponent_ng_template_13_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r75); const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r79.addList(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Create");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r10.newListEditor.title)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c2, ctx_r10.newListEditor.error));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r10.newListEditor.error);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r10.debug);
} }
class TodoComponent {
    constructor(listsClient, itemsClient, modalService) {
        this.listsClient = listsClient;
        this.itemsClient = itemsClient;
        this.modalService = modalService;
        this.debug = false;
        this.newListEditor = {};
        this.listOptionsEditor = {};
        this.itemDetailsEditor = {};
        this.faPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faPlus;
        this.faEllipsisH = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faEllipsisH;
        listsClient.get().subscribe(result => {
            this.vm = result;
            if (this.vm.lists.length) {
                this.selectedList = this.vm.lists[0];
            }
        }, error => console.error(error));
    }
    // Lists
    remainingItems(list) {
        return list.items.filter(t => !t.done).length;
    }
    showNewListModal(template) {
        this.newListModalRef = this.modalService.show(template);
        setTimeout(() => document.getElementById("title").focus(), 250);
    }
    newListCancelled() {
        this.newListModalRef.hide();
        this.newListEditor = {};
    }
    addList() {
        let list = _web_api_client__WEBPACK_IMPORTED_MODULE_0__.TodoListDto.fromJS({
            id: 0,
            title: this.newListEditor.title,
            items: [],
        });
        this.listsClient.create({ title: this.newListEditor.title }).subscribe(result => {
            list.id = result;
            this.vm.lists.push(list);
            this.selectedList = list;
            this.newListModalRef.hide();
            this.newListEditor = {};
        }, error => {
            let errors = JSON.parse(error.response);
            if (errors && errors.Title) {
                this.newListEditor.error = errors.Title[0];
            }
            setTimeout(() => document.getElementById("title").focus(), 250);
        });
    }
    showListOptionsModal(template) {
        this.listOptionsEditor = {
            id: this.selectedList.id,
            title: this.selectedList.title,
        };
        this.listOptionsModalRef = this.modalService.show(template);
    }
    updateListOptions() {
        this.listsClient.update(this.selectedList.id, _web_api_client__WEBPACK_IMPORTED_MODULE_0__.UpdateTodoListCommand.fromJS(this.listOptionsEditor))
            .subscribe(() => {
            this.selectedList.title = this.listOptionsEditor.title,
                this.listOptionsModalRef.hide();
            this.listOptionsEditor = {};
        }, error => console.error(error));
    }
    confirmDeleteList(template) {
        this.listOptionsModalRef.hide();
        this.deleteListModalRef = this.modalService.show(template);
    }
    deleteListConfirmed() {
        this.listsClient.delete(this.selectedList.id).subscribe(() => {
            this.deleteListModalRef.hide();
            this.vm.lists = this.vm.lists.filter(t => t.id != this.selectedList.id);
            this.selectedList = this.vm.lists.length ? this.vm.lists[0] : null;
        }, error => console.error(error));
    }
    // Items
    showItemDetailsModal(template, item) {
        this.selectedItem = item;
        this.itemDetailsEditor = Object.assign({}, this.selectedItem);
        this.itemDetailsModalRef = this.modalService.show(template);
    }
    updateItemDetails() {
        this.itemsClient.updateItemDetails(this.selectedItem.id, _web_api_client__WEBPACK_IMPORTED_MODULE_0__.UpdateTodoItemDetailCommand.fromJS(this.itemDetailsEditor))
            .subscribe(() => {
            if (this.selectedItem.listId != this.itemDetailsEditor.listId) {
                this.selectedList.items = this.selectedList.items.filter(i => i.id != this.selectedItem.id);
                let listIndex = this.vm.lists.findIndex(l => l.id == this.itemDetailsEditor.listId);
                this.selectedItem.listId = this.itemDetailsEditor.listId;
                this.vm.lists[listIndex].items.push(this.selectedItem);
            }
            this.selectedItem.priority = this.itemDetailsEditor.priority;
            this.selectedItem.note = this.itemDetailsEditor.note;
            this.itemDetailsModalRef.hide();
            this.itemDetailsEditor = {};
        }, error => console.error(error));
    }
    addItem() {
        let item = _web_api_client__WEBPACK_IMPORTED_MODULE_0__.TodoItemDto.fromJS({
            id: 0,
            listId: this.selectedList.id,
            priority: this.vm.priorityLevels[0].value,
            title: '',
            done: false
        });
        this.selectedList.items.push(item);
        let index = this.selectedList.items.length - 1;
        this.editItem(item, 'itemTitle' + index);
    }
    editItem(item, inputId) {
        this.selectedItem = item;
        setTimeout(() => document.getElementById(inputId).focus(), 100);
    }
    updateItem(item, pressedEnter = false) {
        let isNewItem = item.id == 0;
        if (!item.title.trim()) {
            this.deleteItem(item);
            return;
        }
        if (item.id == 0) {
            this.itemsClient.create(_web_api_client__WEBPACK_IMPORTED_MODULE_0__.CreateTodoItemCommand.fromJS(Object.assign(Object.assign({}, item), { listId: this.selectedList.id })))
                .subscribe(result => {
                item.id = result;
            }, error => console.error(error));
        }
        else {
            this.itemsClient.update(item.id, _web_api_client__WEBPACK_IMPORTED_MODULE_0__.UpdateTodoItemCommand.fromJS(item))
                .subscribe(() => console.log('Update succeeded.'), error => console.error(error));
        }
        this.selectedItem = null;
        if (isNewItem && pressedEnter) {
            this.addItem();
        }
    }
    // Delete item
    deleteItem(item) {
        if (this.itemDetailsModalRef) {
            this.itemDetailsModalRef.hide();
        }
        if (item.id == 0) {
            let itemIndex = this.selectedList.items.indexOf(this.selectedItem);
            this.selectedList.items.splice(itemIndex, 1);
        }
        else {
            this.itemsClient.delete(item.id).subscribe(() => this.selectedList.items = this.selectedList.items.filter(t => t.id != item.id), error => console.error(error));
        }
    }
}
TodoComponent.ɵfac = function TodoComponent_Factory(t) { return new (t || TodoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_web_api_client__WEBPACK_IMPORTED_MODULE_0__.TodoListsClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_web_api_client__WEBPACK_IMPORTED_MODULE_0__.TodoItemsClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__.BsModalService)); };
TodoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TodoComponent, selectors: [["app-todo-component"]], decls: 15, vars: 3, consts: [[4, "ngIf"], ["listOptionsModalTemplate", ""], ["itemDetailsModalTemplate", ""], ["deleteListModalTemplate", ""], ["newListModalTemplate", ""], [1, "row"], [1, "col-sm-4"], [1, "clearfix"], [1, "float-left"], ["title", "Add List...", 1, "btn", "btn-default", "float-right", 3, "click"], [3, "icon"], [1, "list-group"], ["class", "list-group-item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["class", "col-sm-8", 4, "ngIf"], [1, "list-group-item", 3, "ngClass", "click"], [1, "float-right", "text-right"], [1, "badge", "badge-light"], [1, "col-sm-8"], ["id", "listOptions", "title", "List Options...", 1, "btn", "btn-default", "float-right", 3, "click"], ["id", "todo-items", 1, "list-group", "mb-2"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "list-group-item", 3, "click"], [1, "btn", "btn-default"], [1, "list-group-item"], [1, "d-flex"], [1, "todo-item-checkbox"], ["type", "checkbox", 3, "ngModel", "ngModelChange", "change"], [1, "flex-fill"], ["type", "text", "class", "form-control item-input-control", "autofocus", "autofocus", 3, "id", "ngModel", "ngModelChange", "keyup.enter", "blur", 4, "ngIf"], ["class", "todo-item-title", "class", "form-control item-input-control", 3, "ngClass", "click", 4, "ngIf"], [1, "todo-item-commands"], ["class", "btn btn-default btn-xs", "role", "button", 3, "click", 4, "ngIf"], ["type", "text", "autofocus", "autofocus", 1, "form-control", "item-input-control", 3, "id", "ngModel", "ngModelChange", "keyup.enter", "blur"], [1, "form-control", "item-input-control", 3, "ngClass", "click"], ["role", "button", 1, "btn", "btn-default", "btn-xs", 3, "click"], [1, "modal-header", "clearfix"], [1, "modal-title", "float-left"], ["type", "button", "aria-label", "Close", 1, "close", "float-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "form-group"], ["for", "inputListTitle"], ["type", "text", "id", "inputListTitle", "placeholder", "List name...", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup.enter"], [1, "modal-footer"], [1, "btn", "btn-default", "text-danger", 3, "click"], [1, "float-right"], [1, "btn", "btn-default", 3, "click"], [1, "btn", "btn-primary", 3, "click"], [1, "form"], ["for", "list"], [1, "form-control", 3, "ngModel", "ngModelChange"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["for", "priority"], ["for", "note"], ["id", "note", "rows", "3", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "ngValue"], [1, "text-right"], ["type", "button", 1, "btn", "btn-default", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], ["for", "title"], ["type", "text", "id", "title", "placeholder", "List title...", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange", "keyup.enter"], ["class", "invalid-feedback", 4, "ngIf"], [1, "invalid-feedback"]], template: function TodoComponent_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.vm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.vm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.debug);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FaIconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.JsonPipe], styles: ["#listOptions[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n#todo-items[_ngcontent-%COMP%]   .item-input-control[_ngcontent-%COMP%] {\n  border: 0;\n  box-shadow: none;\n  background-color: transparent;\n}\n\n#todo-items[_ngcontent-%COMP%]   .done-todo[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n}\n\n#todo-items[_ngcontent-%COMP%]   .todo-item-title[_ngcontent-%COMP%] {\n  padding-top: 8px;\n}\n\n#todo-items[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%] {\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\n\n#todo-items[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .btn-xs[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n#todo-items[_ngcontent-%COMP%]   .todo-item-checkbox[_ngcontent-%COMP%] {\n  padding-top: 8px;\n}\n\n#todo-items[_ngcontent-%COMP%]   .todo-item-commands[_ngcontent-%COMP%] {\n  padding-top: 4px;\n}\n\n.modal-footer[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGOztBQUdFO0VBQ0UsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7QUFBSjs7QUFHRTtFQUNFLDZCQUFBO0FBREo7O0FBSUU7RUFDRSxnQkFBQTtBQUZKOztBQUtFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQUhKOztBQUtJO0VBQ0UsVUFBQTtBQUhOOztBQU9FO0VBQ0UsZ0JBQUE7QUFMSjs7QUFRRTtFQUNFLGdCQUFBO0FBTko7O0FBVUE7RUFDRSxjQUFBO0FBUEYiLCJmaWxlIjoidG9kby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNsaXN0T3B0aW9ucyB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4jdG9kby1pdGVtcyB7XHJcbiAgLml0ZW0taW5wdXQtY29udHJvbCB7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG5cclxuICAuZG9uZS10b2RvIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG4gIH1cclxuXHJcbiAgLnRvZG8taXRlbS10aXRsZSB7XHJcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gIH1cclxuXHJcbiAgLmxpc3QtZ3JvdXAtaXRlbSB7XHJcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDhweDtcclxuXHJcbiAgICAuYnRuLXhzIHtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC50b2RvLWl0ZW0tY2hlY2tib3gge1xyXG4gICAgcGFkZGluZy10b3A6IDhweDtcclxuICB9XHJcblxyXG4gIC50b2RvLWl0ZW0tY29tbWFuZHMge1xyXG4gICAgcGFkZGluZy10b3A6IDRweDtcclxuICB9XHJcbn1cclxuXHJcbi5tb2RhbC1mb290ZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 4865:
/*!******************************************!*\
  !*** ./src/app/token/token.component.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TokenComponent": function() { return /* binding */ TokenComponent; }
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 9976);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _api_authorization_authorize_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api-authorization/authorize.service */ 2551);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 4163);





function TokenComponent_div_2_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Copied!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TokenComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TokenComponent_div_2_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.copyToClipboard(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "fa-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\u00A0Copy ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, TokenComponent_div_2_span_16_Template, 2, 0, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.token);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r0.faCopy);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.isCopied);
} }
function TokenComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Error getting JWT");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Something went wrong getting your access token from the auth service. Please try again. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class TokenComponent {
    constructor(authorizeService) {
        this.authorizeService = authorizeService;
        this.faCopy = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faCopy;
    }
    ngOnInit() {
        this.isCopied = false;
        this.authorizeService.getAccessToken().subscribe((t) => {
            this.token = "Bearer " + t;
            this.isError = false;
        }, (err) => {
            this.isError = true;
        });
    }
    copyToClipboard() {
        const selBox = document.createElement("textarea");
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
}
TokenComponent.ɵfac = function TokenComponent_Factory(t) { return new (t || TokenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_api_authorization_authorize_service__WEBPACK_IMPORTED_MODULE_0__.AuthorizeService)); };
TokenComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TokenComponent, selectors: [["app-token-component"]], decls: 4, vars: 2, consts: [[4, "ngIf"], ["href", "https://jwt.io/", "target", "_blank"], [1, "card"], [1, "card-body"], ["id", "tokenContent"], [1, "btn", "btn-primary", 3, "click"], [3, "icon"], ["role", "alert", 1, "alert", "alert-danger"]], template: function TokenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "JWT");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TokenComponent_div_2_Template, 17, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TokenComponent_div_3_Template, 5, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isError);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isError);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FaIconComponent], encapsulation: 2 });


/***/ }),

/***/ 814:
/*!***********************************!*\
  !*** ./src/app/web-api-client.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API_BASE_URL": function() { return /* binding */ API_BASE_URL; },
/* harmony export */   "EmployeeClient": function() { return /* binding */ EmployeeClient; },
/* harmony export */   "TodoItemsClient": function() { return /* binding */ TodoItemsClient; },
/* harmony export */   "TodoListsClient": function() { return /* binding */ TodoListsClient; },
/* harmony export */   "WeatherForecastClient": function() { return /* binding */ WeatherForecastClient; },
/* harmony export */   "PaginatedListOfTodoItemDto": function() { return /* binding */ PaginatedListOfTodoItemDto; },
/* harmony export */   "TodoItemDto": function() { return /* binding */ TodoItemDto; },
/* harmony export */   "CreateTodoItemCommand": function() { return /* binding */ CreateTodoItemCommand; },
/* harmony export */   "UpdateTodoItemCommand": function() { return /* binding */ UpdateTodoItemCommand; },
/* harmony export */   "UpdateTodoItemDetailCommand": function() { return /* binding */ UpdateTodoItemDetailCommand; },
/* harmony export */   "PriorityLevel": function() { return /* binding */ PriorityLevel; },
/* harmony export */   "TodosVm": function() { return /* binding */ TodosVm; },
/* harmony export */   "PriorityLevelDto": function() { return /* binding */ PriorityLevelDto; },
/* harmony export */   "TodoListDto": function() { return /* binding */ TodoListDto; },
/* harmony export */   "CreateTodoListCommand": function() { return /* binding */ CreateTodoListCommand; },
/* harmony export */   "UpdateTodoListCommand": function() { return /* binding */ UpdateTodoListCommand; },
/* harmony export */   "WeatherForecast": function() { return /* binding */ WeatherForecast; },
/* harmony export */   "SwaggerException": function() { return /* binding */ SwaggerException; }
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 9773);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 205);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 5917);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 9165);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* tslint:disable */
/* eslint-disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.9.4.0 (NJsonSchema v10.3.1.0 (Newtonsoft.Json v12.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming






const API_BASE_URL = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('API_BASE_URL');
class EmployeeClient {
    constructor(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
    }
    getAll() {
        let url_ = this.baseUrl + "/api/Employee";
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)((response_) => {
            return this.processGetAll(response_);
        })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((response_) => {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponseBase) {
                try {
                    return this.processGetAll(response_);
                }
                catch (e) {
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(e);
                }
            }
            else
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(response_);
        }));
    }
    processGetAll(response) {
        const status = response.status;
        const responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponse ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        let _headers = {};
        if (response.headers) {
            for (let key of response.headers.keys()) {
                _headers[key] = response.headers.get(key);
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(_responseText => {
                let result200 = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                if (Array.isArray(resultData200)) {
                    result200 = [];
                    for (let item of resultData200)
                        result200.push(item);
                }
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(_responseText => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(null);
    }
    post(value) {
        let url_ = this.baseUrl + "/api/Employee";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(value);
        let options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                "Content-Type": "application/json",
            })
        };
        return this.http.request("post", url_, options_).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)((response_) => {
            return this.processPost(response_);
        })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((response_) => {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponseBase) {
                try {
                    return this.processPost(response_);
                }
                catch (e) {
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(e);
                }
            }
            else
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(response_);
        }));
    }
    processPost(response) {
        const status = response.status;
        const responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponse ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        let _headers = {};
        if (response.headers) {
            for (let key of response.headers.keys()) {
                _headers[key] = response.headers.get(key);
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(_responseText => {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(null);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(_responseText => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(null);
    }
    get(id) {
        let url_ = this.baseUrl + "/api/Employee/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)((response_) => {
            return this.processGet(response_);
        })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((response_) => {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponseBase) {
                try {
                    return this.processGet(response_);
                }
                catch (e) {
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(e);
                }
            }
            else
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(response_);
        }));
    }
    processGet(response) {
        const status = response.status;
        const responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponse ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        let _headers = {};
        if (response.headers) {
            for (let key of response.headers.keys()) {
                _headers[key] = response.headers.get(key);
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(_responseText => {
                let result200 = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : null;
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(_responseText => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(null);
    }
    put(id, value) {
        let url_ = this.baseUrl + "/api/Employee/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(value);
        let options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                "Content-Type": "application/json",
            })
        };
        return this.http.request("put", url_, options_).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)((response_) => {
            return this.processPut(response_);
        })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((response_) => {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponseBase) {
                try {
                    return this.processPut(response_);
                }
                catch (e) {
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(e);
                }
            }
            else
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(response_);
        }));
    }
    processPut(response) {
        const status = response.status;
        const responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponse ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        let _headers = {};
        if (response.headers) {
            for (let key of response.headers.keys()) {
                _headers[key] = response.headers.get(key);
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(_responseText => {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(null);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(_responseText => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(null);
    }
    delete(id) {
        let url_ = this.baseUrl + "/api/Employee/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({})
        };
        return this.http.request("delete", url_, options_).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)((response_) => {
            return this.processDelete(response_);
        })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((response_) => {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponseBase) {
                try {
                    return this.processDelete(response_);
                }
                catch (e) {
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(e);
                }
            }
            else
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(response_);
        }));
    }
    processDelete(response) {
        const status = response.status;
        const responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponse ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        let _headers = {};
        if (response.headers) {
            for (let key of response.headers.keys()) {
                _headers[key] = response.headers.get(key);
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(_responseText => {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(null);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(_responseText => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(null);
    }
}
EmployeeClient.ɵfac = function EmployeeClient_Factory(t) { return new (t || EmployeeClient)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](API_BASE_URL, 8)); };
EmployeeClient.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EmployeeClient, factory: EmployeeClient.ɵfac, providedIn: 'root' });
class TodoItemsClient {
    constructor(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
    }
    getTodoItemsWithPagination(listId, pageNumber, pageSize) {
        let url_ = this.baseUrl + "/api/TodoItems?";
        if (listId === null)
            throw new Error("The parameter 'listId' cannot be null.");
        else if (listId !== undefined)
            url_ += "ListId=" + encodeURIComponent("" + listId) + "&";
        if (pageNumber === null)
            throw new Error("The parameter 'pageNumber' cannot be null.");
        else if (pageNumber !== undefined)
            url_ += "PageNumber=" + encodeURIComponent("" + pageNumber) + "&";
        if (pageSize === null)
            throw new Error("The parameter 'pageSize' cannot be null.");
        else if (pageSize !== undefined)
            url_ += "PageSize=" + encodeURIComponent("" + pageSize) + "&";
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)((response_) => {
            return this.processGetTodoItemsWithPagination(response_);
        })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((response_) => {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponseBase) {
                try {
                    return this.processGetTodoItemsWithPagination(response_);
                }
                catch (e) {
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(e);
                }
            }
            else
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(response_);
        }));
    }
    processGetTodoItemsWithPagination(response) {
        const status = response.status;
        const responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponse ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        let _headers = {};
        if (response.headers) {
            for (let key of response.headers.keys()) {
                _headers[key] = response.headers.get(key);
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(_responseText => {
                let result200 = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = PaginatedListOfTodoItemDto.fromJS(resultData200);
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(_responseText => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(null);
    }
    create(command) {
        let url_ = this.baseUrl + "/api/TodoItems";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(command);
        let options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request("post", url_, options_).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)((response_) => {
            return this.processCreate(response_);
        })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((response_) => {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponseBase) {
                try {
                    return this.processCreate(response_);
                }
                catch (e) {
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(e);
                }
            }
            else
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(response_);
        }));
    }
    processCreate(response) {
        const status = response.status;
        const responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponse ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        let _headers = {};
        if (response.headers) {
            for (let key of response.headers.keys()) {
                _headers[key] = response.headers.get(key);
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(_responseText => {
                let result200 = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : null;
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(_responseText => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(null);
    }
    update(id, command) {
        let url_ = this.baseUrl + "/api/TodoItems/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(command);
        let options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                "Content-Type": "application/json",
                "Accept": "application/octet-stream"
            })
        };
        return this.http.request("put", url_, options_).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)((response_) => {
            return this.processUpdate(response_);
        })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((response_) => {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponseBase) {
                try {
                    return this.processUpdate(response_);
                }
                catch (e) {
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(e);
                }
            }
            else
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(response_);
        }));
    }
    processUpdate(response) {
        const status = response.status;
        const responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponse ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        let _headers = {};
        if (response.headers) {
            for (let key of response.headers.keys()) {
                _headers[key] = response.headers.get(key);
            }
        }
        if (status === 200 || status === 206) {
            const contentDisposition = response.headers ? response.headers.get("content-disposition") : undefined;
            const fileNameMatch = contentDisposition ? /filename="?([^"]*?)"?(;|$)/g.exec(contentDisposition) : undefined;
            const fileName = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[1] : undefined;
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)({ fileName: fileName, data: responseBlob, status: status, headers: _headers });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(_responseText => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(null);
    }
    delete(id) {
        let url_ = this.baseUrl + "/api/TodoItems/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                "Accept": "application/octet-stream"
            })
        };
        return this.http.request("delete", url_, options_).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)((response_) => {
            return this.processDelete(response_);
        })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((response_) => {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponseBase) {
                try {
                    return this.processDelete(response_);
                }
                catch (e) {
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(e);
                }
            }
            else
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(response_);
        }));
    }
    processDelete(response) {
        const status = response.status;
        const responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponse ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        let _headers = {};
        if (response.headers) {
            for (let key of response.headers.keys()) {
                _headers[key] = response.headers.get(key);
            }
        }
        if (status === 200 || status === 206) {
            const contentDisposition = response.headers ? response.headers.get("content-disposition") : undefined;
            const fileNameMatch = contentDisposition ? /filename="?([^"]*?)"?(;|$)/g.exec(contentDisposition) : undefined;
            const fileName = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[1] : undefined;
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)({ fileName: fileName, data: responseBlob, status: status, headers: _headers });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(_responseText => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(null);
    }
    updateItemDetails(id, command) {
        let url_ = this.baseUrl + "/api/TodoItems/UpdateItemDetails?";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(command);
        let options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                "Content-Type": "application/json",
                "Accept": "application/octet-stream"
            })
        };
        return this.http.request("put", url_, options_).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)((response_) => {
            return this.processUpdateItemDetails(response_);
        })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((response_) => {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponseBase) {
                try {
                    return this.processUpdateItemDetails(response_);
                }
                catch (e) {
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(e);
                }
            }
            else
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(response_);
        }));
    }
    processUpdateItemDetails(response) {
        const status = response.status;
        const responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponse ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        let _headers = {};
        if (response.headers) {
            for (let key of response.headers.keys()) {
                _headers[key] = response.headers.get(key);
            }
        }
        if (status === 200 || status === 206) {
            const contentDisposition = response.headers ? response.headers.get("content-disposition") : undefined;
            const fileNameMatch = contentDisposition ? /filename="?([^"]*?)"?(;|$)/g.exec(contentDisposition) : undefined;
            const fileName = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[1] : undefined;
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)({ fileName: fileName, data: responseBlob, status: status, headers: _headers });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(_responseText => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(null);
    }
}
TodoItemsClient.ɵfac = function TodoItemsClient_Factory(t) { return new (t || TodoItemsClient)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](API_BASE_URL, 8)); };
TodoItemsClient.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TodoItemsClient, factory: TodoItemsClient.ɵfac, providedIn: 'root' });
class TodoListsClient {
    constructor(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
    }
    get() {
        let url_ = this.baseUrl + "/api/TodoLists";
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)((response_) => {
            return this.processGet(response_);
        })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((response_) => {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponseBase) {
                try {
                    return this.processGet(response_);
                }
                catch (e) {
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(e);
                }
            }
            else
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(response_);
        }));
    }
    processGet(response) {
        const status = response.status;
        const responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponse ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        let _headers = {};
        if (response.headers) {
            for (let key of response.headers.keys()) {
                _headers[key] = response.headers.get(key);
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(_responseText => {
                let result200 = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = TodosVm.fromJS(resultData200);
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(_responseText => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(null);
    }
    create(command) {
        let url_ = this.baseUrl + "/api/TodoLists";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(command);
        let options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request("post", url_, options_).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)((response_) => {
            return this.processCreate(response_);
        })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((response_) => {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponseBase) {
                try {
                    return this.processCreate(response_);
                }
                catch (e) {
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(e);
                }
            }
            else
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(response_);
        }));
    }
    processCreate(response) {
        const status = response.status;
        const responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponse ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        let _headers = {};
        if (response.headers) {
            for (let key of response.headers.keys()) {
                _headers[key] = response.headers.get(key);
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(_responseText => {
                let result200 = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : null;
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(_responseText => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(null);
    }
    get2(id) {
        let url_ = this.baseUrl + "/api/TodoLists/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                "Accept": "application/octet-stream"
            })
        };
        return this.http.request("get", url_, options_).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)((response_) => {
            return this.processGet2(response_);
        })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((response_) => {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponseBase) {
                try {
                    return this.processGet2(response_);
                }
                catch (e) {
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(e);
                }
            }
            else
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(response_);
        }));
    }
    processGet2(response) {
        const status = response.status;
        const responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponse ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        let _headers = {};
        if (response.headers) {
            for (let key of response.headers.keys()) {
                _headers[key] = response.headers.get(key);
            }
        }
        if (status === 200 || status === 206) {
            const contentDisposition = response.headers ? response.headers.get("content-disposition") : undefined;
            const fileNameMatch = contentDisposition ? /filename="?([^"]*?)"?(;|$)/g.exec(contentDisposition) : undefined;
            const fileName = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[1] : undefined;
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)({ fileName: fileName, data: responseBlob, status: status, headers: _headers });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(_responseText => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(null);
    }
    update(id, command) {
        let url_ = this.baseUrl + "/api/TodoLists/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(command);
        let options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                "Content-Type": "application/json",
                "Accept": "application/octet-stream"
            })
        };
        return this.http.request("put", url_, options_).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)((response_) => {
            return this.processUpdate(response_);
        })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((response_) => {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponseBase) {
                try {
                    return this.processUpdate(response_);
                }
                catch (e) {
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(e);
                }
            }
            else
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(response_);
        }));
    }
    processUpdate(response) {
        const status = response.status;
        const responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponse ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        let _headers = {};
        if (response.headers) {
            for (let key of response.headers.keys()) {
                _headers[key] = response.headers.get(key);
            }
        }
        if (status === 200 || status === 206) {
            const contentDisposition = response.headers ? response.headers.get("content-disposition") : undefined;
            const fileNameMatch = contentDisposition ? /filename="?([^"]*?)"?(;|$)/g.exec(contentDisposition) : undefined;
            const fileName = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[1] : undefined;
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)({ fileName: fileName, data: responseBlob, status: status, headers: _headers });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(_responseText => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(null);
    }
    delete(id) {
        let url_ = this.baseUrl + "/api/TodoLists/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                "Accept": "application/octet-stream"
            })
        };
        return this.http.request("delete", url_, options_).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)((response_) => {
            return this.processDelete(response_);
        })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((response_) => {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponseBase) {
                try {
                    return this.processDelete(response_);
                }
                catch (e) {
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(e);
                }
            }
            else
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(response_);
        }));
    }
    processDelete(response) {
        const status = response.status;
        const responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponse ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        let _headers = {};
        if (response.headers) {
            for (let key of response.headers.keys()) {
                _headers[key] = response.headers.get(key);
            }
        }
        if (status === 200 || status === 206) {
            const contentDisposition = response.headers ? response.headers.get("content-disposition") : undefined;
            const fileNameMatch = contentDisposition ? /filename="?([^"]*?)"?(;|$)/g.exec(contentDisposition) : undefined;
            const fileName = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[1] : undefined;
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)({ fileName: fileName, data: responseBlob, status: status, headers: _headers });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(_responseText => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(null);
    }
}
TodoListsClient.ɵfac = function TodoListsClient_Factory(t) { return new (t || TodoListsClient)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](API_BASE_URL, 8)); };
TodoListsClient.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TodoListsClient, factory: TodoListsClient.ɵfac, providedIn: 'root' });
class WeatherForecastClient {
    constructor(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
    }
    get() {
        let url_ = this.baseUrl + "/api/WeatherForecast";
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)((response_) => {
            return this.processGet(response_);
        })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((response_) => {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponseBase) {
                try {
                    return this.processGet(response_);
                }
                catch (e) {
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(e);
                }
            }
            else
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(response_);
        }));
    }
    processGet(response) {
        const status = response.status;
        const responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponse ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        let _headers = {};
        if (response.headers) {
            for (let key of response.headers.keys()) {
                _headers[key] = response.headers.get(key);
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(_responseText => {
                let result200 = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                if (Array.isArray(resultData200)) {
                    result200 = [];
                    for (let item of resultData200)
                        result200.push(WeatherForecast.fromJS(item));
                }
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(_responseText => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(null);
    }
}
WeatherForecastClient.ɵfac = function WeatherForecastClient_Factory(t) { return new (t || WeatherForecastClient)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](API_BASE_URL, 8)); };
WeatherForecastClient.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WeatherForecastClient, factory: WeatherForecastClient.ɵfac, providedIn: 'root' });
class PaginatedListOfTodoItemDto {
    constructor(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    init(_data) {
        if (_data) {
            if (Array.isArray(_data["items"])) {
                this.items = [];
                for (let item of _data["items"])
                    this.items.push(TodoItemDto.fromJS(item));
            }
            this.pageIndex = _data["pageIndex"];
            this.totalPages = _data["totalPages"];
            this.totalCount = _data["totalCount"];
            this.hasPreviousPage = _data["hasPreviousPage"];
            this.hasNextPage = _data["hasNextPage"];
        }
    }
    static fromJS(data) {
        data = typeof data === 'object' ? data : {};
        let result = new PaginatedListOfTodoItemDto();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === 'object' ? data : {};
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items)
                data["items"].push(item.toJSON());
        }
        data["pageIndex"] = this.pageIndex;
        data["totalPages"] = this.totalPages;
        data["totalCount"] = this.totalCount;
        data["hasPreviousPage"] = this.hasPreviousPage;
        data["hasNextPage"] = this.hasNextPage;
        return data;
    }
}
class TodoItemDto {
    constructor(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    init(_data) {
        if (_data) {
            this.id = _data["id"];
            this.listId = _data["listId"];
            this.title = _data["title"];
            this.done = _data["done"];
            this.priority = _data["priority"];
            this.note = _data["note"];
        }
    }
    static fromJS(data) {
        data = typeof data === 'object' ? data : {};
        let result = new TodoItemDto();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["listId"] = this.listId;
        data["title"] = this.title;
        data["done"] = this.done;
        data["priority"] = this.priority;
        data["note"] = this.note;
        return data;
    }
}
class CreateTodoItemCommand {
    constructor(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    init(_data) {
        if (_data) {
            this.listId = _data["listId"];
            this.title = _data["title"];
        }
    }
    static fromJS(data) {
        data = typeof data === 'object' ? data : {};
        let result = new CreateTodoItemCommand();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === 'object' ? data : {};
        data["listId"] = this.listId;
        data["title"] = this.title;
        return data;
    }
}
class UpdateTodoItemCommand {
    constructor(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    init(_data) {
        if (_data) {
            this.id = _data["id"];
            this.title = _data["title"];
            this.done = _data["done"];
        }
    }
    static fromJS(data) {
        data = typeof data === 'object' ? data : {};
        let result = new UpdateTodoItemCommand();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["title"] = this.title;
        data["done"] = this.done;
        return data;
    }
}
class UpdateTodoItemDetailCommand {
    constructor(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    init(_data) {
        if (_data) {
            this.id = _data["id"];
            this.listId = _data["listId"];
            this.priority = _data["priority"];
            this.note = _data["note"];
        }
    }
    static fromJS(data) {
        data = typeof data === 'object' ? data : {};
        let result = new UpdateTodoItemDetailCommand();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["listId"] = this.listId;
        data["priority"] = this.priority;
        data["note"] = this.note;
        return data;
    }
}
var PriorityLevel;
(function (PriorityLevel) {
    PriorityLevel[PriorityLevel["None"] = 0] = "None";
    PriorityLevel[PriorityLevel["Low"] = 1] = "Low";
    PriorityLevel[PriorityLevel["Medium"] = 2] = "Medium";
    PriorityLevel[PriorityLevel["High"] = 3] = "High";
})(PriorityLevel || (PriorityLevel = {}));
class TodosVm {
    constructor(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    init(_data) {
        if (_data) {
            if (Array.isArray(_data["priorityLevels"])) {
                this.priorityLevels = [];
                for (let item of _data["priorityLevels"])
                    this.priorityLevels.push(PriorityLevelDto.fromJS(item));
            }
            if (Array.isArray(_data["lists"])) {
                this.lists = [];
                for (let item of _data["lists"])
                    this.lists.push(TodoListDto.fromJS(item));
            }
        }
    }
    static fromJS(data) {
        data = typeof data === 'object' ? data : {};
        let result = new TodosVm();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === 'object' ? data : {};
        if (Array.isArray(this.priorityLevels)) {
            data["priorityLevels"] = [];
            for (let item of this.priorityLevels)
                data["priorityLevels"].push(item.toJSON());
        }
        if (Array.isArray(this.lists)) {
            data["lists"] = [];
            for (let item of this.lists)
                data["lists"].push(item.toJSON());
        }
        return data;
    }
}
class PriorityLevelDto {
    constructor(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    init(_data) {
        if (_data) {
            this.value = _data["value"];
            this.name = _data["name"];
        }
    }
    static fromJS(data) {
        data = typeof data === 'object' ? data : {};
        let result = new PriorityLevelDto();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === 'object' ? data : {};
        data["value"] = this.value;
        data["name"] = this.name;
        return data;
    }
}
class TodoListDto {
    constructor(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    init(_data) {
        if (_data) {
            this.id = _data["id"];
            this.title = _data["title"];
            this.colour = _data["colour"];
            if (Array.isArray(_data["items"])) {
                this.items = [];
                for (let item of _data["items"])
                    this.items.push(TodoItemDto.fromJS(item));
            }
        }
    }
    static fromJS(data) {
        data = typeof data === 'object' ? data : {};
        let result = new TodoListDto();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["title"] = this.title;
        data["colour"] = this.colour;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items)
                data["items"].push(item.toJSON());
        }
        return data;
    }
}
class CreateTodoListCommand {
    constructor(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    init(_data) {
        if (_data) {
            this.title = _data["title"];
        }
    }
    static fromJS(data) {
        data = typeof data === 'object' ? data : {};
        let result = new CreateTodoListCommand();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === 'object' ? data : {};
        data["title"] = this.title;
        return data;
    }
}
class UpdateTodoListCommand {
    constructor(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    init(_data) {
        if (_data) {
            this.id = _data["id"];
            this.title = _data["title"];
        }
    }
    static fromJS(data) {
        data = typeof data === 'object' ? data : {};
        let result = new UpdateTodoListCommand();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["title"] = this.title;
        return data;
    }
}
class WeatherForecast {
    constructor(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    init(_data) {
        if (_data) {
            this.date = _data["date"] ? new Date(_data["date"].toString()) : undefined;
            this.temperatureC = _data["temperatureC"];
            this.temperatureF = _data["temperatureF"];
            this.summary = _data["summary"];
        }
    }
    static fromJS(data) {
        data = typeof data === 'object' ? data : {};
        let result = new WeatherForecast();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === 'object' ? data : {};
        data["date"] = this.date ? this.date.toISOString() : undefined;
        data["temperatureC"] = this.temperatureC;
        data["temperatureF"] = this.temperatureF;
        data["summary"] = this.summary;
        return data;
    }
}
class SwaggerException extends Error {
    constructor(message, status, response, headers, result) {
        super();
        this.isSwaggerException = true;
        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }
    static isSwaggerException(obj) {
        return obj.isSwaggerException === true;
    }
}
function throwException(message, status, response, headers, result) {
    if (result !== null && result !== undefined)
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(result);
    else
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(new SwaggerException(message, status, response, headers, null));
}
function blobToText(blob) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_6__.Observable((observer) => {
        if (!blob) {
            observer.next("");
            observer.complete();
        }
        else {
            let reader = new FileReader();
            reader.onload = event => {
                observer.next(event.target.result);
                observer.complete();
            };
            reader.readAsText(blob);
        }
    });
}


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBaseUrl": function() { return /* binding */ getBaseUrl; }
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
const providers = [
    { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];
if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(4431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main-es2015.js.map