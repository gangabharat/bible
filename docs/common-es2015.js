(self["webpackChunkbible_webui"] = self["webpackChunkbible_webui"] || []).push([["common"],{

/***/ 5528:
/*!********************************************!*\
  !*** ./src/app/product/product.service.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductService": function() { return /* binding */ ProductService; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6215);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _shared_notification_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/notification.service */ 7404);



class ProductService {
    constructor(ns) {
        this.ns = ns;
        // Make _puppiesSource private so it's not accessible from the outside, 
        // expose it as puppies$ observable (read-only) instead.
        // Write to _puppiesSource only through specified store methods below.
        this._puppiesSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
        //private readonly _puppiesSource = new BehaviorSubject<Puppy[]>([]);
        // Exposed observable (read-only).
        this.puppies$ = this._puppiesSource.asObservable();
    }
    // Get last value without subscribing to the puppies$ observable (synchronously).
    get() {
        return this._puppiesSource.getValue();
    }
    _setPuppies(puppies) {
        this._puppiesSource.next(puppies);
    }
    load(puppy) {
        const puppies = [...this.get(), puppy];
        this._setPuppies(puppies);
    }
    add(puppy) {
        this.ns.success(puppy.id, `Successfully added product ${puppy.name}`);
        const puppies = [...this.get(), puppy];
        this._setPuppies(puppies);
    }
    updatePuppy(puppy) {
        this.ns.info(puppy.id, `Successfully updated product ${puppy.name}`);
        const puppies = this.get().map(obj => obj.id === puppy.id ? puppy : obj);
        this._setPuppies(puppies);
    }
    removePuppy(puppy) {
        this.ns.info(puppy.id, `Successfully deleted product ${puppy.name}`);
        const puppies = this.get().filter(p => p.id !== puppy.id);
        this._setPuppies(puppies);
    }
}
ProductService.ɵfac = function ProductService_Factory(t) { return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_shared_notification_service__WEBPACK_IMPORTED_MODULE_0__.NotificationService)); };
ProductService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ProductService, factory: ProductService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map