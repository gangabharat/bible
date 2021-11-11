(self["webpackChunkbible_webui"] = self["webpackChunkbible_webui"] || []).push([["src_app_news_news_module_ts"],{

/***/ 5009:
/*!*******************************************!*\
  !*** ./src/app/news/news-http.service.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsHttpService": function() { return /* binding */ NewsHttpService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _shared_http_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/http-client.service */ 6057);


class NewsHttpService {
    constructor(_http) {
        this._http = _http;
        this.url = "https://haveibeenpwned.com/api/v2/breaches";
    }
    getNews() {
        return this._http.get({ url: this.url });
    }
}
NewsHttpService.ɵfac = function NewsHttpService_Factory(t) { return new (t || NewsHttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_shared_http_client_service__WEBPACK_IMPORTED_MODULE_0__.HttpClientService)); };
NewsHttpService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: NewsHttpService, factory: NewsHttpService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1600:
/*!*******************************************************!*\
  !*** ./src/app/news/news-list/news-list.component.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsListComponent": function() { return /* binding */ NewsListComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _shared_directive_scroll_tracker_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/directive/scroll-tracker.directive */ 3310);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);




function NewsListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h5", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "small", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Last updated 3 mins ago");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const news_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", news_r1.LogoPath, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](news_r1.Title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("innerHtml", news_r1.Description, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
class NewsListComponent {
    constructor() {
        this.scrollingFinished = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.newsList = [];
    }
    ngOnInit() {
    }
    onScrollingFinished() {
        this.scrollingFinished.emit();
    }
}
NewsListComponent.ɵfac = function NewsListComponent_Factory(t) { return new (t || NewsListComponent)(); };
NewsListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NewsListComponent, selectors: [["app-news-list"]], inputs: { newsList: "newsList" }, outputs: { scrollingFinished: "scrollingFinished" }, decls: 2, vars: 1, consts: [["scrollTracker", "", 1, "row", 3, "scrollingFinished"], ["class", "card-shadow card mb-1", 4, "ngFor", "ngForOf"], [1, "card-shadow", "card", "mb-1"], [1, "row", "g-0"], [1, "col-md-4"], ["alt", "not found", 1, "img-fluid", "rounded-start", 3, "src"], [1, "col-md-8"], [1, "card-body"], [1, "card-title"], [1, "card-text", 3, "innerHtml"], [1, "card-text"], [1, "text-muted"]], template: function NewsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scrollingFinished", function NewsListComponent_Template_div_scrollingFinished_0_listener() { return ctx.onScrollingFinished(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NewsListComponent_div_1_Template, 12, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.newsList);
    } }, directives: [_shared_directive_scroll_tracker_directive__WEBPACK_IMPORTED_MODULE_0__.ScrollTrackerDirective, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXdzLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 8421:
/*!*********************************************!*\
  !*** ./src/app/news/news-routing.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsRoutingModule": function() { return /* binding */ NewsRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _news_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./news.component */ 6496);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);




const routes = [{ path: '', component: _news_component__WEBPACK_IMPORTED_MODULE_0__.NewsComponent }];
class NewsRoutingModule {
}
NewsRoutingModule.ɵfac = function NewsRoutingModule_Factory(t) { return new (t || NewsRoutingModule)(); };
NewsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NewsRoutingModule });
NewsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NewsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 2404:
/*!***********************************************************!*\
  !*** ./src/app/news/news-widget/news-widget.component.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsWidgetComponent": function() { return /* binding */ NewsWidgetComponent; }
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 9976);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _news_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../news-http.service */ 5009);
/* harmony import */ var _news_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../news.service */ 7063);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);





function NewsWidgetComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h5", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "small", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Last updated 3 mins ago");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const news_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", news_r1.LogoPath, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](news_r1.Title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("innerHtml", news_r1.Description, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
class NewsWidgetComponent {
    constructor(newsHttpService, newsService) {
        this.newsHttpService = newsHttpService;
        this.newsService = newsService;
        //public newsList$ = new Observable<News[]>();
        this.newsList = [];
        this.faEye = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faEye;
        this.faCheck = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faCheck;
        this.faExclamationTriangle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faExclamationTriangle;
    }
    ngOnInit() {
        this.newsService.puppies$.subscribe(res => {
            this.newsList = res;
        });
        // let s = 'ser';
        // s.substr(0,10);
        //  this.newsHttpService.getNews()
        //  .pipe(map(
        //    newval => {
        //      return newval.map(newsone =>{
        //        if(newsone.Description.length > 500){
        //          newsone.Description = newsone.Description.substr(0,500) + '...';
        //        }
        //       return newsone;
        //      } )
        //    }
        //  ))
        //  .subscribe(
        //   (res) =>{
        //       this.newsList = res;
        //       //this.newsService.load(res);
        //   },
        //   (error) =>{
        //   }
        // );
    }
}
NewsWidgetComponent.ɵfac = function NewsWidgetComponent_Factory(t) { return new (t || NewsWidgetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_news_http_service__WEBPACK_IMPORTED_MODULE_0__.NewsHttpService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_news_service__WEBPACK_IMPORTED_MODULE_1__.NewsService)); };
NewsWidgetComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NewsWidgetComponent, selectors: [["app-news-widget"]], decls: 3, vars: 1, consts: [[1, ""], [1, "row"], ["class", "card-shadow card mb-1", 4, "ngFor", "ngForOf"], [1, "card-shadow", "card", "mb-1"], [1, "row", "g-0"], [1, "col-md-4"], ["alt", "not found", 1, "img-fluid", "rounded-start", 3, "src"], [1, "col-md-8"], [1, "card-body"], [1, "card-title"], [1, "card-text", 3, "innerHtml"], [1, "card-text"], [1, "text-muted"]], template: function NewsWidgetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NewsWidgetComponent_div_2_Template, 12, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.newsList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXdzLXdpZGdldC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 6496:
/*!****************************************!*\
  !*** ./src/app/news/news.component.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsComponent": function() { return /* binding */ NewsComponent; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9165);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _news_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./news-http.service */ 5009);
/* harmony import */ var _news_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./news.service */ 7063);
/* harmony import */ var _news_list_news_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./news-list/news-list.component */ 1600);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);






class NewsComponent {
    constructor(newsHttpService, newsService) {
        this.newsHttpService = newsHttpService;
        this.newsService = newsService;
        this.newsData = [];
        this.news$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Observable();
    }
    ngOnInit() {
        this.newsHttpService.getNews().subscribe((res) => {
            this.newsService.load(res);
            this.loadMore();
        });
        this.news$ = this.newsService.puppies$;
    }
    loadMore() {
        this.newsService.loadMore();
    }
    onScrollingFinished() {
        this.newsService.loadMore();
    }
}
NewsComponent.ɵfac = function NewsComponent_Factory(t) { return new (t || NewsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_news_http_service__WEBPACK_IMPORTED_MODULE_0__.NewsHttpService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_news_service__WEBPACK_IMPORTED_MODULE_1__.NewsService)); };
NewsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: NewsComponent, selectors: [["app-news"]], decls: 2, vars: 3, consts: [[3, "newsList", "scrollingFinished"]], template: function NewsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-news-list", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("scrollingFinished", function NewsComponent_Template_app_news_list_scrollingFinished_0_listener() { return ctx.onScrollingFinished(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("newsList", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 1, ctx.news$));
    } }, directives: [_news_list_news_list_component__WEBPACK_IMPORTED_MODULE_2__.NewsListComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXdzLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 1926:
/*!*************************************!*\
  !*** ./src/app/news/news.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsModule": function() { return /* binding */ NewsModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _news_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./news-routing.module */ 8421);
/* harmony import */ var _news_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./news.component */ 6496);
/* harmony import */ var _news_list_news_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./news-list/news-list.component */ 1600);
/* harmony import */ var _news_widget_news_widget_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./news-widget/news-widget.component */ 2404);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 4163);
/* harmony import */ var _shared_directive_scroll_tracker_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/directive/scroll-tracker.directive */ 3310);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);








class NewsModule {
}
NewsModule.ɵfac = function NewsModule_Factory(t) { return new (t || NewsModule)(); };
NewsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: NewsModule });
NewsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _news_routing_module__WEBPACK_IMPORTED_MODULE_0__.NewsRoutingModule,
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FontAwesomeModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](NewsModule, { declarations: [_news_component__WEBPACK_IMPORTED_MODULE_1__.NewsComponent, _news_list_news_list_component__WEBPACK_IMPORTED_MODULE_2__.NewsListComponent, _news_widget_news_widget_component__WEBPACK_IMPORTED_MODULE_3__.NewsWidgetComponent, _shared_directive_scroll_tracker_directive__WEBPACK_IMPORTED_MODULE_4__.ScrollTrackerDirective], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _news_routing_module__WEBPACK_IMPORTED_MODULE_0__.NewsRoutingModule,
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FontAwesomeModule] }); })();


/***/ }),

/***/ 7063:
/*!**************************************!*\
  !*** ./src/app/news/news.service.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsService": function() { return /* binding */ NewsService; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6215);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);


class NewsService {
    constructor() {
        // Make _puppiesSource private so it's not accessible from the outside,
        // expose it as puppies$ observable (read-only) instead.
        // Write to _puppiesSource only through specified store methods below.
        this._puppiesSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
        //private readonly _puppiesSource = new BehaviorSubject<Puppy[]>([]);
        // Exposed observable (read-only).
        this.puppies$ = this._puppiesSource.asObservable();
        this.puppies = [];
        this.allPuppies = [];
    }
    // Get last value without subscribing to the puppies$ observable (synchronously).
    get() {
        return this._puppiesSource.getValue();
    }
    _setPuppies(puppies) {
        this._puppiesSource.next(puppies);
    }
    load(puppy) {
        this.allPuppies = puppy;
    }
    loadMore() {
        if (this.getNextPuppies()) {
            this._setPuppies(this.puppies);
        }
    }
    add(puppy) {
        const puppies = [...this.get(), puppy];
        this._setPuppies(puppies);
    }
    updatePuppy(puppy) {
        const puppies = this.get().map((obj) => obj.Title === puppy.Title ? puppy : obj);
        this._setPuppies(puppies);
    }
    removePuppy(puppy) {
        const puppies = this.get().filter((p) => p.Title !== puppy.Title);
        this._setPuppies(puppies);
    }
    getNextPuppies() {
        if (this.puppies.length >= this.allPuppies.length) {
            return false;
        }
        const remainingLength = Math.min(5, this.allPuppies.length - this.puppies.length);
        this.puppies.push(...this.allPuppies.slice(this.puppies.length, this.puppies.length + remainingLength));
        return true;
    }
}
NewsService.ɵfac = function NewsService_Factory(t) { return new (t || NewsService)(); };
NewsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: NewsService, factory: NewsService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 3310:
/*!**************************************************************!*\
  !*** ./src/app/shared/directive/scroll-tracker.directive.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScrollTrackerDirective": function() { return /* binding */ ScrollTrackerDirective; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);


class ScrollTrackerDirective {
    constructor() {
        this.scrollingFinished = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.emitted = false;
    }
    onScroll() {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && !this.emitted) {
            this.emitted = true;
            this.scrollingFinished.emit();
        }
        else if ((window.innerHeight + window.scrollY) < document.body.offsetHeight) {
            this.emitted = false;
        }
    }
}
ScrollTrackerDirective.ɵfac = function ScrollTrackerDirective_Factory(t) { return new (t || ScrollTrackerDirective)(); };
ScrollTrackerDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ScrollTrackerDirective, selectors: [["", "scrollTracker", ""]], hostBindings: function ScrollTrackerDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function ScrollTrackerDirective_scroll_HostBindingHandler() { return ctx.onScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, outputs: { scrollingFinished: "scrollingFinished" } });


/***/ })

}]);
//# sourceMappingURL=src_app_news_news_module_ts-es2015.js.map