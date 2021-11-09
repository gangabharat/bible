(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkbible_webui"] = self["webpackChunkbible_webui"] || []).push([["common"], {
    /***/
    5528:
    /*!********************************************!*\
      !*** ./src/app/product/product.service.ts ***!
      \********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductService": function ProductService() {
          return (
            /* binding */
            _ProductService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      6215);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _shared_notification_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../shared/notification.service */
      7404);

      var _ProductService = /*#__PURE__*/function () {
        function _ProductService(ns) {
          _classCallCheck(this, _ProductService);

          this.ns = ns; // Make _puppiesSource private so it's not accessible from the outside, 
          // expose it as puppies$ observable (read-only) instead.
          // Write to _puppiesSource only through specified store methods below.

          this._puppiesSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]); //private readonly _puppiesSource = new BehaviorSubject<Puppy[]>([]);
          // Exposed observable (read-only).

          this.puppies$ = this._puppiesSource.asObservable();
        } // Get last value without subscribing to the puppies$ observable (synchronously).


        _createClass(_ProductService, [{
          key: "get",
          value: function get() {
            return this._puppiesSource.getValue();
          }
        }, {
          key: "_setPuppies",
          value: function _setPuppies(puppies) {
            this._puppiesSource.next(puppies);
          }
        }, {
          key: "load",
          value: function load(puppy) {
            var puppies = [].concat(_toConsumableArray(this.get()), [puppy]);

            this._setPuppies(puppies);
          }
        }, {
          key: "add",
          value: function add(puppy) {
            this.ns.success(puppy.id, "Successfully added product ".concat(puppy.name));
            var puppies = [].concat(_toConsumableArray(this.get()), [puppy]);

            this._setPuppies(puppies);
          }
        }, {
          key: "updatePuppy",
          value: function updatePuppy(puppy) {
            this.ns.info(puppy.id, "Successfully updated product ".concat(puppy.name));
            var puppies = this.get().map(function (obj) {
              return obj.id === puppy.id ? puppy : obj;
            });

            this._setPuppies(puppies);
          }
        }, {
          key: "removePuppy",
          value: function removePuppy(puppy) {
            this.ns.info(puppy.id, "Successfully deleted product ".concat(puppy.name));
            var puppies = this.get().filter(function (p) {
              return p.id !== puppy.id;
            });

            this._setPuppies(puppies);
          }
        }]);

        return _ProductService;
      }();

      _ProductService.ɵfac = function ProductService_Factory(t) {
        return new (t || _ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_shared_notification_service__WEBPACK_IMPORTED_MODULE_0__.NotificationService));
      };

      _ProductService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _ProductService,
        factory: _ProductService.ɵfac,
        providedIn: 'root'
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map