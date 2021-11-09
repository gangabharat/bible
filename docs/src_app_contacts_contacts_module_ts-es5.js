(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkbible_webui"] = self["webpackChunkbible_webui"] || []).push([["src_app_contacts_contacts_module_ts"], {
    /***/
    3799:
    /*!***************************************************************!*\
      !*** ./src/app/contacts/contact-add/contact-add.component.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ContactAddComponent": function ContactAddComponent() {
          return (
            /* binding */
            _ContactAddComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var src_app_product_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/product/product.service */
      5528);
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      3301);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);

      function ContactAddComponent_button_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ContactAddComponent_button_3_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r3.onClose();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function ContactAddComponent_span_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 25);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "was-validated": a0
        };
      };

      var _ContactAddComponent = /*#__PURE__*/function () {
        function _ContactAddComponent(productService, bsModalService) {
          _classCallCheck(this, _ContactAddComponent);

          this.productService = productService;
          this.bsModalService = bsModalService;
          this.loading = false;
          this.hideClose = false;
        }

        _createClass(_ContactAddComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {//console.log(this.parentObject);
          }
        }, {
          key: "onSubmit",
          value: function onSubmit(form) {
            if (form.valid) {
              //this.loading = true;
              var product = form.value.product;
              product.id = new Date().valueOf().toString();
              console.log(product);
              this.productService.add(product);
              form.resetForm(); //this.newListCancelled();

              setTimeout(function () {//this.loading = false;
              }, 1000 * 2);
            }
          }
        }, {
          key: "onClose",
          value: function onClose() {
            //this.bsModalService.hide(1);
            this.bsModalService._hideModal(1); //this.bsModalService.h

          }
        }]);

        return _ContactAddComponent;
      }();

      _ContactAddComponent.ɵfac = function ContactAddComponent_Factory(t) {
        return new (t || _ContactAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_product_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__.BsModalService));
      };

      _ContactAddComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _ContactAddComponent,
        selectors: [["app-contact-add"]],
        decls: 35,
        vars: 6,
        consts: [[1, "modal-header", "clearfix"], [1, "modal-title", "float-left"], ["type", "button", "class", "close float-right", "aria-label", "Close", 3, "click", 4, "ngIf"], [1, "modal-body"], [1, "form-group"], [3, "ngClass", "ngSubmit"], ["form", "ngForm"], [1, "row"], ["ngModelGroup", "product", 1, "col-md-12"], [1, ""], [1, "row", "mt-2"], [1, "col-md-6"], [1, "labels"], ["type", "text", "placeholder", "product name", "required", "", "value", "", "name", "name", "ngModel", "", 1, "form-control"], ["type", "text", "value", "", "placeholder", "model", "name", "model", "ngModel", "", "required", "", 1, "form-control"], [1, "row", "mt-3"], [1, "col-md-12"], ["type", "text", "placeholder", "number", "value", "", "name", "number", "ngModel", "", "required", "", 1, "form-control"], ["type", "text", "placeholder", "enter address", "value", "", "name", "address", "ngModel", "", "required", "", "minlength", "10", 1, "form-control"], [1, "mt-5", "text-center"], ["type", "submit", 1, "btn", "btn-outline-success", "mr-2", 3, "disabled"], ["class", "spinner-border spinner-border-sm mr-1", 4, "ngIf"], ["type", "reset", 1, "btn", "btn-outline-secondary"], ["type", "button", "aria-label", "Close", 1, "close", "float-right", 3, "click"], ["aria-hidden", "true"], [1, "spinner-border", "spinner-border-sm", "mr-1"]],
        template: function ContactAddComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h4", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Add New Product");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ContactAddComponent_button_3_Template, 3, 0, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "form", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ContactAddComponent_Template_form_ngSubmit_6_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);

              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](7);

              return ctx.onSubmit(_r1);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Model");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, ContactAddComponent_span_31_Template, 1, 0, "span", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, " Save ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, " Reset ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.hideClose);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c0, _r1.submitted && _r1.invalid));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModelGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MinLengthValidator],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0LWFkZC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    6832:
    /*!*********************************************************************!*\
      !*** ./src/app/contacts/contact-delete/contact-delete.component.ts ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ContactDeleteComponent": function ContactDeleteComponent() {
          return (
            /* binding */
            _ContactDeleteComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var src_app_product_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/product/product.service */
      5528);
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      3301);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      8583);

      function ContactDeleteComponent_span_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 11);
        }
      }

      var _ContactDeleteComponent = /*#__PURE__*/function () {
        function _ContactDeleteComponent(productService, bsModalService) {
          _classCallCheck(this, _ContactDeleteComponent);

          this.productService = productService;
          this.bsModalService = bsModalService;
          this.loading = false;
        }

        _createClass(_ContactDeleteComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onDelete",
          value: function onDelete() {
            this.productService.removePuppy(this.product); //this.bsModalService.hide(1);

            this.bsModalService._hideModal(1);
          }
        }]);

        return _ContactDeleteComponent;
      }();

      _ContactDeleteComponent.ɵfac = function ContactDeleteComponent_Factory(t) {
        return new (t || _ContactDeleteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_product_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__.BsModalService));
      };

      _ContactDeleteComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _ContactDeleteComponent,
        selectors: [["app-contact-delete"]],
        inputs: {
          product: "product"
        },
        decls: 23,
        vars: 3,
        consts: [[1, "modal-header", "clearfix"], [1, "modal-title", "float-left"], ["type", "button", "aria-label", "Close", 1, "close", "float-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, ""], [1, "modal-footer"], [1, "text-right"], [1, "btn", "btn-default", 3, "click"], [1, "btn", "btn-danger", 3, "disabled", "click"], ["class", "spinner-border spinner-border-sm mr-1", 4, "ngIf"], [1, "spinner-border", "spinner-border-sm", "mr-1"]],
        template: function ContactDeleteComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h4", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Delete Product ?");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ContactDeleteComponent_Template_button_click_3_listener() {
              return ctx.onDelete();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Are you sure you want to delete product ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "? Your product will also be deleted. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "To confirm deletion, click Delete button.");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ContactDeleteComponent_Template_button_click_17_listener() {
              return ctx.onDelete();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, " \xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ContactDeleteComponent_Template_button_click_20_listener() {
              return ctx.onDelete();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, ContactDeleteComponent_span_21_Template, 1, 0, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, " Delete ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.product.name, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0LWRlbGV0ZS5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    6414:
    /*!*********************************************************************!*\
      !*** ./src/app/contacts/contact-detail/contact-detail.component.ts ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ContactDetailComponent": function ContactDetailComponent() {
          return (
            /* binding */
            _ContactDetailComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      3301);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var src_app_product_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/product/product.service */
      5528);

      var _ContactDetailComponent = /*#__PURE__*/function () {
        function _ContactDetailComponent(bsModalService, route, productService) {
          _classCallCheck(this, _ContactDetailComponent);

          this.bsModalService = bsModalService;
          this.route = route;
          this.productService = productService;
        }

        _createClass(_ContactDetailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {//const id = this.route.snapshot.params["id"];
            // console.log(this.route);
            // const findProduct = this.productService.get().filter((x) => {
            //   x.id === this.id;
            // });
            // if (findProduct) {
            //   this.product = findProduct[0];
            // }
            //console.log(this.productService.get().fiiin);
          }
        }, {
          key: "onClose",
          value: function onClose() {
            //this.bsModalService.hide(1);
            this.bsModalService._hideModal(1); //this.bsModalService.h

          }
        }]);

        return _ContactDetailComponent;
      }();

      _ContactDetailComponent.ɵfac = function ContactDetailComponent_Factory(t) {
        return new (t || _ContactDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_0__.BsModalService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_product_product_service__WEBPACK_IMPORTED_MODULE_1__.ProductService));
      };

      _ContactDetailComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _ContactDetailComponent,
        selectors: [["app-contact-detail"]],
        inputs: {
          product: "product",
          news: "news"
        },
        decls: 19,
        vars: 6,
        consts: [[1, "modal-header", "clearfix"], [1, "modal-title", "float-left"], ["type", "button", "aria-label", "Close", 1, "close", "float-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, ""]],
        template: function ContactDetailComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h4", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Product Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ContactDetailComponent_Template_button_click_3_listener() {
              return ctx.onClose();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.news, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.product.id);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.product.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.product.model);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.product.number);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.product.address);
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0LWRldGFpbC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    1837:
    /*!*****************************************************************!*\
      !*** ./src/app/contacts/contact-edit/contact-edit.component.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ContactEditComponent": function ContactEditComponent() {
          return (
            /* binding */
            _ContactEditComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _ContactEditComponent = /*#__PURE__*/function () {
        function _ContactEditComponent() {
          _classCallCheck(this, _ContactEditComponent);
        }

        _createClass(_ContactEditComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _ContactEditComponent;
      }();

      _ContactEditComponent.ɵfac = function ContactEditComponent_Factory(t) {
        return new (t || _ContactEditComponent)();
      };

      _ContactEditComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _ContactEditComponent,
        selectors: [["app-contact-edit"]],
        decls: 2,
        vars: 0,
        template: function ContactEditComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "contact-edit works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0LWVkaXQuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    9069:
    /*!*****************************************************************!*\
      !*** ./src/app/contacts/contact-list/contact-list.component.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ContactListComponent": function ContactListComponent() {
          return (
            /* binding */
            _ContactListComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _ContactListComponent = /*#__PURE__*/function () {
        function _ContactListComponent() {
          _classCallCheck(this, _ContactListComponent);
        }

        _createClass(_ContactListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _ContactListComponent;
      }();

      _ContactListComponent.ɵfac = function ContactListComponent_Factory(t) {
        return new (t || _ContactListComponent)();
      };

      _ContactListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _ContactListComponent,
        selectors: [["app-contact-list"]],
        decls: 2,
        vars: 0,
        template: function ContactListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "contact-list works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0LWxpc3QuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    1014:
    /*!*****************************************************!*\
      !*** ./src/app/contacts/contacts-routing.module.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ContactsRoutingModule": function ContactsRoutingModule() {
          return (
            /* binding */
            _ContactsRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _contact_add_contact_add_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./contact-add/contact-add.component */
      3799);
      /* harmony import */


      var _contact_detail_contact_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./contact-detail/contact-detail.component */
      6414);
      /* harmony import */


      var _contacts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./contacts.component */
      3630);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var routes = [{
        path: "",
        component: _contacts_component__WEBPACK_IMPORTED_MODULE_2__.ContactsComponent
      }, {
        path: "add",
        component: _contact_add_contact_add_component__WEBPACK_IMPORTED_MODULE_0__.ContactAddComponent
      }, {
        path: "details/:id",
        component: _contact_detail_contact_detail_component__WEBPACK_IMPORTED_MODULE_1__.ContactDetailComponent
      }];

      var _ContactsRoutingModule = function _ContactsRoutingModule() {
        _classCallCheck(this, _ContactsRoutingModule);
      };

      _ContactsRoutingModule.ɵfac = function ContactsRoutingModule_Factory(t) {
        return new (t || _ContactsRoutingModule)();
      };

      _ContactsRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: _ContactsRoutingModule
      });
      _ContactsRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](_ContactsRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    3630:
    /*!************************************************!*\
      !*** ./src/app/contacts/contacts.component.ts ***!
      \************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ContactsComponent": function ContactsComponent() {
          return (
            /* binding */
            _ContactsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      9165);
      /* harmony import */


      var _contact_add_contact_add_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./contact-add/contact-add.component */
      3799);
      /* harmony import */


      var _contact_delete_contact_delete_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./contact-delete/contact-delete.component */
      6832);
      /* harmony import */


      var _contact_detail_contact_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./contact-detail/contact-detail.component */
      6414);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      3301);
      /* harmony import */


      var _product_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../product/product.service */
      5528);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      8583);

      var _c0 = ["form"];

      function ContactsComponent_span_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "span", 18);
        }
      }

      var _c1 = function _c1(a0) {
        return {
          "was-validated": a0
        };
      };

      var _ContactsComponent = /*#__PURE__*/function () {
        function _ContactsComponent(bsModalService, productService) {
          _classCallCheck(this, _ContactsComponent);

          this.bsModalService = bsModalService;
          this.productService = productService;
          this.products$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Observable();
          this.loading = false;
        }

        _createClass(_ContactsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.products$ = this.productService.puppies$;
            this.initialProduct = {
              name: "firs",
              model: "nice",
              address: "add",
              id: "1",
              number: "sf"
            };
          }
        }, {
          key: "onLoad",
          value: function onLoad() {}
        }, {
          key: "onAdd",
          value: function onAdd() {
            this.bsModalRef = this.bsModalService.show(_contact_add_contact_add_component__WEBPACK_IMPORTED_MODULE_0__.ContactAddComponent, {
              initialState: {
                hideClose: true
              }
            });
          }
        }, {
          key: "onDetails",
          value: function onDetails(product) {
            this.bsModalRef = this.bsModalService.show(_contact_detail_contact_detail_component__WEBPACK_IMPORTED_MODULE_2__.ContactDetailComponent, {
              initialState: {
                product: product,
                hideClose: false
              }
            });
          }
        }, {
          key: "onRemove",
          value: function onRemove(product) {
            this.bsModalRef = this.bsModalService.show(_contact_delete_contact_delete_component__WEBPACK_IMPORTED_MODULE_1__.ContactDeleteComponent, {
              initialState: {
                product: product,
                hideClose: false
              }
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit(form) {
            console.log(form);
          }
        }]);

        return _ContactsComponent;
      }();

      _ContactsComponent.ɵfac = function ContactsComponent_Factory(t) {
        return new (t || _ContactsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__.BsModalService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_product_product_service__WEBPACK_IMPORTED_MODULE_4__.ProductService));
      };

      _ContactsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: _ContactsComponent,
        selectors: [["app-contacts"]],
        viewQuery: function ContactsComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.form = _t.first);
          }
        },
        decls: 31,
        vars: 9,
        consts: [[1, "btn", "btn-primary", 3, "click"], [3, "ngClass", "ngSubmit"], ["form", "ngForm"], [1, "row"], [1, "col-md-12"], ["ngModelGroup", "product", 1, ""], [1, "row", "mt-2"], [1, "col-md-6"], [1, "labels"], ["type", "text", "placeholder", "product name", "required", "", "value", "", "name", "name", 1, "form-control", 3, "ngModel"], ["type", "text", "value", "", "placeholder", "model", "name", "model", "required", "", 1, "form-control", 3, "ngModel"], [1, "row", "mt-3"], ["type", "text", "placeholder", "number", "value", "", "name", "number", "required", "", 1, "form-control", 3, "ngModel"], ["type", "text", "placeholder", "enter address", "value", "", "name", "address", "required", "", 1, "form-control", 3, "ngModel"], [1, "mt-5", "text-center"], ["type", "submit", 1, "btn", "btn-outline-success", "mr-2", 3, "disabled"], ["class", "spinner-border spinner-border-sm mr-1", 4, "ngIf"], ["type", "reset", 1, "btn", "btn-outline-secondary"], [1, "spinner-border", "spinner-border-sm", "mr-1"]],
        template: function ContactsComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ContactsComponent_Template_button_click_0_listener() {
              return ctx.onLoad();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Load");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "form", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function ContactsComponent_Template_form_ngSubmit_2_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](3);

              return ctx.onSubmit(_r0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Model");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, ContactsComponent_span_27_Template, 1, 0, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, " Save ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "Reset");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](7, _c1, _r0.submitted && _r0.invalid));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.initialProduct.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.initialProduct.model);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.initialProduct.number);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.initialProduct.address);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.loading);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModelGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0cy5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    6808:
    /*!*********************************************!*\
      !*** ./src/app/contacts/contacts.module.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ContactsModule": function ContactsModule() {
          return (
            /* binding */
            _ContactsModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _contacts_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./contacts-routing.module */
      1014);
      /* harmony import */


      var _contacts_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./contacts.component */
      3630);
      /* harmony import */


      var _contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./contact-list/contact-list.component */
      9069);
      /* harmony import */


      var _contact_add_contact_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./contact-add/contact-add.component */
      3799);
      /* harmony import */


      var _contact_detail_contact_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./contact-detail/contact-detail.component */
      6414);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _contact_edit_contact_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./contact-edit/contact-edit.component */
      1837);
      /* harmony import */


      var _contact_delete_contact_delete_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./contact-delete/contact-delete.component */
      6832);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _ContactsModule = function _ContactsModule() {
        _classCallCheck(this, _ContactsModule);
      };

      _ContactsModule.ɵfac = function ContactsModule_Factory(t) {
        return new (t || _ContactsModule)();
      };

      _ContactsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
        type: _ContactsModule
      });
      _ContactsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _contacts_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContactsRoutingModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](_ContactsModule, {
          declarations: [_contacts_component__WEBPACK_IMPORTED_MODULE_1__.ContactsComponent, _contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_2__.ContactListComponent, _contact_add_contact_add_component__WEBPACK_IMPORTED_MODULE_3__.ContactAddComponent, _contact_detail_contact_detail_component__WEBPACK_IMPORTED_MODULE_4__.ContactDetailComponent, _contact_edit_contact_edit_component__WEBPACK_IMPORTED_MODULE_5__.ContactEditComponent, _contact_delete_contact_delete_component__WEBPACK_IMPORTED_MODULE_6__.ContactDeleteComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _contacts_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContactsRoutingModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_contacts_contacts_module_ts-es5.js.map