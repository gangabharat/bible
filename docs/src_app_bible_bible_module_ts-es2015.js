(self["webpackChunkbible_webui"] = self["webpackChunkbible_webui"] || []).push([["src_app_bible_bible_module_ts"],{

/***/ 3068:
/*!**************************************************************************!*\
  !*** ./src/app/bible/bible-book-chapter/bible-book-chapter.component.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BibleBookChapterComponent": function() { return /* binding */ BibleBookChapterComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _service_bible_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/bible.service */ 9826);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_service_recent_history_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/recent-history.service */ 3090);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);





function BibleBookChapterComponent_div_0_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BibleBookChapterComponent_div_0_button_4_Template_button_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const i_r3 = restoredCtx.index; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r4.onVerse(ctx_r4.form, i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const verse_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", i_r3 + 1, " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", verse_r2.Verse, " ");
} }
function BibleBookChapterComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, BibleBookChapterComponent_div_0_button_4_Template, 4, 2, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx_r0.books[ctx_r0.bibleBook - 1], " : ", ctx_r0.bibleChapters, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.resData.Verse);
} }
class BibleBookChapterComponent {
    //bibleVerse = [{Book : 1,Chapter : 1,Verse :0}];  
    //bibleVerse = [];
    constructor(bibleService, route, recent) {
        this.bibleService = bibleService;
        this.route = route;
        this.recent = recent;
        this.bibleChapters = 0;
        this.bibleBook = 0;
        this.bibleVerse = [];
        this.books = [
            'Genesis',
            'Exodus',
            'Leviticus',
            'Numbers',
            'Deuteronomy',
            'Joshua',
            'Judges',
            'Ruth',
            '1 Samuel',
            '2 Samuel',
            '1 Kings',
            '2 Kings',
            '1 Chronicles',
            '2 Chronicles',
            'Ezra',
            'Nehemiah',
            'Esther',
            'Job',
            'Psalm',
            'Proverbs',
            'Ecclesiastes',
            'Song of Solomon',
            'Isaiah',
            'Jeremiah',
            'Lamentations',
            'Ezekiel',
            'Daniel',
            'Hosea',
            'Joel',
            'Amos',
            'Obadiah',
            'Jonah',
            'Micah',
            'Nahum',
            'Habakkuk',
            'Zephaniah',
            'Haggai',
            'Zechariah',
            'Malachi',
            'Matthew',
            'Mark',
            'Luke',
            'John',
            'Acts',
            'Romans',
            '1 Corinthians',
            '2 Corinthians',
            'Galatians',
            'Ephesians',
            'Philippians',
            'Colossians',
            '1 Thessalonians',
            '2 Thessalonians',
            '1 Timothy',
            '2 Timothy',
            'Titus',
            'Philemon',
            'Hebrews',
            'James',
            '1 Peter',
            '2 Peter',
            '1 John',
            '2 John',
            '3 John',
            'Jude',
            'Revelation'
        ];
        this.route.params.subscribe(res => {
            this.bibleBook = res.book;
            this.bibleChapters = res.chapter;
            //console.log(res);
        });
    }
    ngOnInit() {
        this.bibleService.getBible().subscribe((res) => {
            this.resData = res.Book[this.bibleBook - 1].Chapter[this.bibleChapters - 1];
        });
        //this.bibleVerse = this.recent.dataBibleVerse;
        //this.bibleVerse.push({Book : this.bibleBook-1,Chapter : this.bibleChapters-1,Verse :0 });  
        //this.myObjArray = this.bibleVerse;
        this.recent.save({ Book: this.bibleBook - 1, Chapter: this.bibleChapters - 1, Verse: 0 });
        //console.log(this.bibleVerse);
    }
    addNew() {
        // this.myObjArray.push({Book : this.bibleBook-1,Chapter : this.bibleChapters-1,Verse :0 });  
        // this.recent.save(this.myObjArray); 
        // console.log(this.myObjArray);
    }
}
BibleBookChapterComponent.ɵfac = function BibleBookChapterComponent_Factory(t) { return new (t || BibleBookChapterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_bible_service__WEBPACK_IMPORTED_MODULE_0__.BibleService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_recent_history_service__WEBPACK_IMPORTED_MODULE_1__.RecentHistoryService)); };
BibleBookChapterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BibleBookChapterComponent, selectors: [["app-bible-book-chapter"]], decls: 1, vars: 1, consts: [["class", "", 4, "ngIf"], [1, ""], [1, "list-group"], ["type", "button", 1, "list-group-item", "list-group-item-action", "active"], ["type", "button", "class", "list-group-item list-group-item-action", 3, "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "list-group-item", "list-group-item-action", 3, "click"]], template: function BibleBookChapterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, BibleBookChapterComponent_div_0_Template, 5, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.resData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiaWJsZS1ib29rLWNoYXB0ZXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 7738:
/*!**********************************************************!*\
  !*** ./src/app/bible/bible-book/bible-book.component.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BibleBookComponent": function() { return /* binding */ BibleBookComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _service_bible_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/bible.service */ 9826);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);




class BibleBookComponent {
    constructor(bibleService, route) {
        this.bibleService = bibleService;
        this.route = route;
        this.bibleBook = 0;
        this.route.params.subscribe(res => {
            this.bibleBook = res.book;
        });
    }
    ngOnInit() {
        //this.bibleService._bibleLanguage = "tel";
        this.bibleService.getBible().subscribe((res) => {
            this.resData = res.Book[this.bibleBook];
        });
    }
}
BibleBookComponent.ɵfac = function BibleBookComponent_Factory(t) { return new (t || BibleBookComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_bible_service__WEBPACK_IMPORTED_MODULE_0__.BibleService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute)); };
BibleBookComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BibleBookComponent, selectors: [["app-bible-book"]], decls: 4, vars: 3, consts: [[1, ""], [1, "alert", "alert-primary", 2, "font-family", "Verdana, Geneva, Tahoma, sans-serif", "font-size", "large"]], template: function BibleBookComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, ctx.resData), " ");
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.JsonPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiaWJsZS1ib29rLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 2701:
/*!******************************************************************************!*\
  !*** ./src/app/bible/bible-recent-history/bible-recent-history.component.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BibleRecentHistoryComponent": function() { return /* binding */ BibleRecentHistoryComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_service_recent_history_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/service/recent-history.service */ 3090);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);



class BibleRecentHistoryComponent {
    constructor(recentHistoryService) {
        this.recentHistoryService = recentHistoryService;
        this.bibleVerse = [];
    }
    ngOnInit() {
        this.recentHistoryService.dataBibleVerse.subscribe((res) => {
            this.bibleVerse = res;
        });
    }
}
BibleRecentHistoryComponent.ɵfac = function BibleRecentHistoryComponent_Factory(t) { return new (t || BibleRecentHistoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_recent_history_service__WEBPACK_IMPORTED_MODULE_0__.RecentHistoryService)); };
BibleRecentHistoryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BibleRecentHistoryComponent, selectors: [["app-bible-recent-history"]], decls: 4, vars: 3, template: function BibleRecentHistoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "bible-recent-history works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "json");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\n", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, ctx.bibleVerse), "\n");
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.JsonPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiaWJsZS1yZWNlbnQtaGlzdG9yeS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 1282:
/*!***********************************************!*\
  !*** ./src/app/bible/bible-routing.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BibleRoutingModule": function() { return /* binding */ BibleRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _bible_book_chapter_bible_book_chapter_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bible-book-chapter/bible-book-chapter.component */ 3068);
/* harmony import */ var _bible_book_bible_book_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bible-book/bible-book.component */ 7738);
/* harmony import */ var _bible_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bible.component */ 2005);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);






const routes = [
    { path: '', component: _bible_component__WEBPACK_IMPORTED_MODULE_2__.BibleComponent },
    //{ path: ':id', component: BibleComponent }
    { path: ':book', component: _bible_book_bible_book_component__WEBPACK_IMPORTED_MODULE_1__.BibleBookComponent },
    { path: ':book/:chapter', component: _bible_book_chapter_bible_book_chapter_component__WEBPACK_IMPORTED_MODULE_0__.BibleBookChapterComponent }
];
class BibleRoutingModule {
}
BibleRoutingModule.ɵfac = function BibleRoutingModule_Factory(t) { return new (t || BibleRoutingModule)(); };
BibleRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: BibleRoutingModule });
BibleRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](BibleRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 9854:
/*!***************************************!*\
  !*** ./src/app/bible/bible.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BibleModule": function() { return /* binding */ BibleModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _bible_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bible-routing.module */ 1282);
/* harmony import */ var _bible_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bible.component */ 2005);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _bible_book_bible_book_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bible-book/bible-book.component */ 7738);
/* harmony import */ var _bible_book_chapter_bible_book_chapter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bible-book-chapter/bible-book-chapter.component */ 3068);
/* harmony import */ var _bible_recent_history_bible_recent_history_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bible-recent-history/bible-recent-history.component */ 2701);
/* harmony import */ var _bible_verse_detail_bible_verse_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bible-verse-detail/bible-verse-detail.component */ 3124);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 4163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);










class BibleModule {
}
BibleModule.ɵfac = function BibleModule_Factory(t) { return new (t || BibleModule)(); };
BibleModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: BibleModule });
BibleModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _bible_routing_module__WEBPACK_IMPORTED_MODULE_0__.BibleRoutingModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__.FontAwesomeModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](BibleModule, { declarations: [_bible_component__WEBPACK_IMPORTED_MODULE_1__.BibleComponent,
        _bible_book_bible_book_component__WEBPACK_IMPORTED_MODULE_2__.BibleBookComponent,
        _bible_book_chapter_bible_book_chapter_component__WEBPACK_IMPORTED_MODULE_3__.BibleBookChapterComponent,
        _bible_recent_history_bible_recent_history_component__WEBPACK_IMPORTED_MODULE_4__.BibleRecentHistoryComponent,
        _bible_verse_detail_bible_verse_detail_component__WEBPACK_IMPORTED_MODULE_5__.BibleVerseDetailComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _bible_routing_module__WEBPACK_IMPORTED_MODULE_0__.BibleRoutingModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__.FontAwesomeModule] }); })();


/***/ }),

/***/ 3090:
/*!***************************************************!*\
  !*** ./src/app/service/recent-history.service.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecentHistoryService": function() { return /* binding */ RecentHistoryService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _shared_cache_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/cache.service */ 133);



class RecentHistoryService {
    constructor(cacheService) {
        this.cacheService = cacheService;
        this.dataBibleVerse = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.data = [];
        this.data = cacheService.load("bible-recent");
    }
    save(bibleVerse) {
        //this.data.push(bibleVerse)
        this.cacheService.save({ key: 'bible-recent', data: this.data, expirationMins: 24 * 60 });
        this.dataBibleVerse.emit(this.data);
        console.log(this.data);
    }
}
RecentHistoryService.ɵfac = function RecentHistoryService_Factory(t) { return new (t || RecentHistoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_shared_cache_service__WEBPACK_IMPORTED_MODULE_0__.CacheService)); };
RecentHistoryService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RecentHistoryService, factory: RecentHistoryService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_bible_bible_module_ts-es2015.js.map