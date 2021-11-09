(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkbible_webui"] = self["webpackChunkbible_webui"] || []).push([["src_app_product_product_module_ts"], {
    /***/
    3960:
    /*!**************************************************************!*\
      !*** ./src/app/product/product-add/product-add.component.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductAddComponent": function ProductAddComponent() {
          return (
            /* binding */
            _ProductAddComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      9976);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../product.service */
      5528);
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      3301);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      4163);

      function ProductAddComponent_ng_template_1_span_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 26);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "was-validated": a0
        };
      };

      function ProductAddComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h4", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Add New Product");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductAddComponent_ng_template_1_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r4.newListCancelled();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "form", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ProductAddComponent_ng_template_1_Template_form_ngSubmit_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](9);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r6.onSubmit(_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Model");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, ProductAddComponent_ng_template_1_span_33_Template, 1, 0, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "fa-icon", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, " Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "fa-icon", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, " Reset ");

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
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](9);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c0, _r2.submitted && _r2.invalid));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r1.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r1.faSave);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r1.faUndo);
        }
      }

      var _ProductAddComponent = /*#__PURE__*/function () {
        function _ProductAddComponent(productService, modalService) {
          _classCallCheck(this, _ProductAddComponent);

          this.productService = productService;
          this.modalService = modalService;
          this.faPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faPlus;
          this.faSave = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faSave;
          this.faUndo = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faUndo;
          this.loading = false;
        }

        _createClass(_ProductAddComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {//this.form.
          }
        }, {
          key: "onSubmit",
          value: function onSubmit(form) {
            var _this = this;

            if (form.valid) {
              this.loading = true;
              var product = form.value.product;
              product.id = new Date().valueOf().toString();
              console.log(product);
              this.productService.add(product);
              form.resetForm();
              this.newListCancelled();
              setTimeout(function () {
                _this.loading = false;
              }, 1000 * 2);
            }
          }
        }, {
          key: "showModal",
          value: function showModal(template) {
            this.newListModalRef = this.modalService.show(template, {
              focus: true,
              ignoreBackdropClick: true
            });
          }
        }, {
          key: "newListCancelled",
          value: function newListCancelled() {
            this.newListModalRef.hide();
          }
        }]);

        return _ProductAddComponent;
      }();

      _ProductAddComponent.ɵfac = function ProductAddComponent_Factory(t) {
        return new (t || _ProductAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__.BsModalService));
      };

      _ProductAddComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _ProductAddComponent,
        selectors: [["app-product-add"]],
        decls: 3,
        vars: 0,
        consts: [[1, ""], ["newModalTemplate", ""], [1, "modal-header", "clearfix"], [1, "modal-title", "float-left"], ["type", "button", "aria-label", "Close", 1, "close", "float-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "form-group"], [3, "ngClass", "ngSubmit"], ["form", "ngForm"], [1, "row"], ["ngModelGroup", "product", 1, "col-md-12"], [1, "row", "mt-2"], [1, "col-md-6"], [1, "labels"], ["type", "text", "placeholder", "product name", "required", "", "value", "", "name", "name", "ngModel", "", 1, "form-control"], ["type", "text", "value", "", "placeholder", "model", "name", "model", "ngModel", "", "required", "", 1, "form-control"], [1, "row", "mt-3"], [1, "col-md-12"], ["type", "text", "placeholder", "number", "value", "", "name", "number", "ngModel", "", "required", "", 1, "form-control"], ["type", "text", "placeholder", "enter address", "value", "", "name", "address", "ngModel", "", "required", "", "minlength", "10", 1, "form-control"], [1, "mt-5", "text-center"], ["type", "submit", 1, "btn", "btn-outline-success", "mr-2", 3, "disabled"], ["class", "spinner-border spinner-border-sm mr-1", 4, "ngIf"], [3, "icon"], ["type", "reset", 1, "btn", "btn-outline-secondary"], [1, "spinner-border", "spinner-border-sm", "mr-1"]],
        template: function ProductAddComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ProductAddComponent_ng_template_1_Template, 39, 7, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModelGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MinLengthValidator, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FaIconComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LWFkZC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    5370:
    /*!********************************************************************!*\
      !*** ./src/app/product/product-delete/product-delete.component.ts ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductDeleteComponent": function ProductDeleteComponent() {
          return (
            /* binding */
            _ProductDeleteComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      9976);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../product.service */
      5528);
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      3301);
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      4163);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      8583);

      function ProductDeleteComponent_ng_template_2_span_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 14);
        }
      }

      function ProductDeleteComponent_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h4", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Delete Product ?");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductDeleteComponent_ng_template_2_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r3.newListCancelled();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 8);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductDeleteComponent_ng_template_2_Template_button_click_17_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r5.newListCancelled();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " Cancel ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductDeleteComponent_ng_template_2_Template_button_click_20_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r6.onDelete();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, ProductDeleteComponent_ng_template_2_span_21_Template, 1, 0, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "fa-icon", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, " Delete ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r1.product.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r1.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r1.faTrash);
        }
      }

      var _ProductDeleteComponent = /*#__PURE__*/function () {
        function _ProductDeleteComponent(productService, modalService) {
          _classCallCheck(this, _ProductDeleteComponent);

          this.productService = productService;
          this.modalService = modalService;
          this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faTrash;
          this.loading = false;
        }

        _createClass(_ProductDeleteComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log(this.product); //this.form.control.patchValue({product : {name : 'nice name'}});
          }
        }, {
          key: "showModal",
          value: function showModal(template) {
            this.newListModalRef = this.modalService.show(template, {
              focus: true,
              ignoreBackdropClick: true
            });
          }
        }, {
          key: "onDelete",
          value: function onDelete() {
            var _this2 = this;

            this.loading = true;
            this.productService.removePuppy(this.product);
            this.newListCancelled();
            setTimeout(function () {
              _this2.loading = false;
            }, 1000 * 5);
          }
        }, {
          key: "newListCancelled",
          value: function newListCancelled() {
            this.newListModalRef.hide();
          }
        }]);

        return _ProductDeleteComponent;
      }();

      _ProductDeleteComponent.ɵfac = function ProductDeleteComponent_Factory(t) {
        return new (t || _ProductDeleteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__.BsModalService));
      };

      _ProductDeleteComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _ProductDeleteComponent,
        selectors: [["app-product-delete"]],
        inputs: {
          product: "product"
        },
        decls: 4,
        vars: 1,
        consts: [[1, "text-danger", 3, "click"], [3, "icon"], ["newModalTemplate", ""], [1, "modal-header", "clearfix"], [1, "modal-title", "float-left"], ["type", "button", "aria-label", "Close", 1, "close", "float-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, ""], [1, "modal-footer"], [1, "text-right"], [1, "btn", "btn-default", 3, "click"], [1, "btn", "btn-danger", 3, "disabled", "click"], ["class", "spinner-border spinner-border-sm mr-1", 4, "ngIf"], [1, "spinner-border", "spinner-border-sm", "mr-1"]],
        template: function ProductDeleteComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductDeleteComponent_Template_a_click_0_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);

              return ctx.showModal(_r0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "fa-icon", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ProductDeleteComponent_ng_template_2_Template, 24, 4, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faTrash);
          }
        },
        directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FaIconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LWRlbGV0ZS5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    7619:
    /*!********************************************************************!*\
      !*** ./src/app/product/product-detail/product-detail.component.ts ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductDetailComponent": function ProductDetailComponent() {
          return (
            /* binding */
            _ProductDetailComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      9976);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../product.service */
      5528);
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      3301);
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      4163);

      function ProductDetailComponent_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h4", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Product Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductDetailComponent_ng_template_2_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r2.newListCancelled();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductDetailComponent_ng_template_2_Template_button_click_20_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r4.newListCancelled();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " Close ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.product.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.product.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.product.model);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.product.number);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.product.address);
        }
      }

      var _ProductDetailComponent = /*#__PURE__*/function () {
        function _ProductDetailComponent(productService, modalService) {
          _classCallCheck(this, _ProductDetailComponent);

          this.productService = productService;
          this.modalService = modalService;
          this.faPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faPlus;
          this.faSave = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faSave;
          this.faEye = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faEye;
          this.loading = false;
        }

        _createClass(_ProductDetailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "showModal",
          value: function showModal(template) {
            this.newListModalRef = this.modalService.show(template, {
              focus: true,
              ignoreBackdropClick: true
            });
          }
        }, {
          key: "newListCancelled",
          value: function newListCancelled() {
            this.newListModalRef.hide();
          }
        }]);

        return _ProductDetailComponent;
      }();

      _ProductDetailComponent.ɵfac = function ProductDetailComponent_Factory(t) {
        return new (t || _ProductDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__.BsModalService));
      };

      _ProductDetailComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _ProductDetailComponent,
        selectors: [["app-product-detail"]],
        inputs: {
          product: "product"
        },
        decls: 4,
        vars: 1,
        consts: [[1, "text-info", 3, "click"], [3, "icon"], ["newModalTemplate", ""], [1, "modal-header", "clearfix"], [1, "modal-title", "float-left"], ["type", "button", "aria-label", "Close", 1, "close", "float-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, ""], [1, "modal-footer"], [1, "text-right"], [1, "btn", "btn-secondary", 3, "click"]],
        template: function ProductDetailComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductDetailComponent_Template_a_click_0_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);

              return ctx.showModal(_r0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "fa-icon", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ProductDetailComponent_ng_template_2_Template, 23, 5, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faEye);
          }
        },
        directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FaIconComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LWRldGFpbC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    1450:
    /*!****************************************************************!*\
      !*** ./src/app/product/product-edit/product-edit.component.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductEditComponent": function ProductEditComponent() {
          return (
            /* binding */
            _ProductEditComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      9976);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../product.service */
      5528);
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      3301);
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      4163);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      8583);

      function ProductEditComponent_ng_template_2_span_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 28);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "was-validated": a0
        };
      };

      function ProductEditComponent_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h4", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Edit Product");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductEditComponent_ng_template_2_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r4.newListCancelled();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "form", 9, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ProductEditComponent_ng_template_2_Template_form_ngSubmit_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](9);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r6.onSubmit(_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProductEditComponent_ng_template_2_Template_input_ngModelChange_13_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r7.loadProduct.id = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Model");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, ProductEditComponent_ng_template_2_span_34_Template, 1, 0, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, " Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductEditComponent_ng_template_2_Template_button_click_37_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r8.newListCancelled();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, " Close ");

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
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](9);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](7, _c0, _r2.submitted && _r2.invalid));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.loadProduct.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.loadProduct.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.loadProduct.model);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.loadProduct.number);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.loadProduct.address);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.loading);
        }
      }

      var _ProductEditComponent = /*#__PURE__*/function () {
        function _ProductEditComponent(productService, modalService) {
          _classCallCheck(this, _ProductEditComponent);

          this.productService = productService;
          this.modalService = modalService;
          this.faEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faEdit;
          this.loading = false;
        }

        _createClass(_ProductEditComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            //console.log(this.product);
            this.loadProduct = Object.assign({}, this.product);
          }
        }, {
          key: "showModal",
          value: function showModal(template) {
            //console.log(this.product);
            this.newListModalRef = this.modalService.show(template, {
              focus: true,
              "class": 'modal-lg',
              ignoreBackdropClick: true
            });
          }
        }, {
          key: "newListCancelled",
          value: function newListCancelled() {
            this.newListModalRef.hide();
          }
        }, {
          key: "onSubmit",
          value: function onSubmit(form) {
            var _this3 = this;

            console.log(form.value);

            if (form.valid) {
              this.loading = true;
              var product = form.value.product;
              console.log(product);
              this.productService.updatePuppy(product);
              this.newListCancelled();
              setTimeout(function () {
                _this3.loading = false;
                form.resetForm();
              }, 1000 * 2);
            }
          }
        }]);

        return _ProductEditComponent;
      }();

      _ProductEditComponent.ɵfac = function ProductEditComponent_Factory(t) {
        return new (t || _ProductEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__.BsModalService));
      };

      _ProductEditComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _ProductEditComponent,
        selectors: [["app-product-edit"]],
        inputs: {
          product: "product"
        },
        decls: 4,
        vars: 1,
        consts: [[1, "text-warning", 3, "click"], [3, "icon"], ["newModalTemplate", ""], [1, "modal-header", "clearfix"], [1, "modal-title", "float-left"], ["type", "button", "aria-label", "Close", 1, "close", "float-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "form-group"], [3, "ngClass", "ngSubmit"], ["form", "ngForm"], [1, "row"], ["ngModelGroup", "product", 1, "col-md-12"], [1, ""], ["type", "hidden", "name", "id", 3, "ngModel", "ngModelChange"], [1, "row", "mt-2"], [1, "col-md-6"], [1, "labels"], ["type", "text", "placeholder", "product name", "required", "", "name", "name", 1, "form-control", 3, "ngModel"], ["type", "text", "value", "", "placeholder", "model", "name", "model", "required", "", 1, "form-control", 3, "ngModel"], [1, "row", "mt-3"], [1, "col-md-12"], ["type", "text", "placeholder", "number", "name", "number", "required", "", 1, "form-control", 3, "ngModel"], ["type", "text", "placeholder", "enter address", "name", "address", "required", "", "minlength", "10", 1, "form-control", 3, "ngModel"], [1, "mt-5", "text-center"], ["type", "submit", 1, "btn", "btn-outline-success"], ["class", "spinner-border spinner-border-sm mr-1", 4, "ngIf"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "spinner-border", "spinner-border-sm", "mr-1"]],
        template: function ProductEditComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductEditComponent_Template_a_click_0_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);

              return ctx.showModal(_r0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "fa-icon", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ProductEditComponent_ng_template_2_Template, 39, 9, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faEdit);
          }
        },
        directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FaIconComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModelGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MinLengthValidator, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LWVkaXQuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    147:
    /*!****************************************************************!*\
      !*** ./src/app/product/product-list/product-list.component.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductListComponent": function ProductListComponent() {
          return (
            /* binding */
            _ProductListComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      9165);
      /* harmony import */


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      9976);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../product.service */
      5528);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../product-detail/product-detail.component */
      7619);
      /* harmony import */


      var _product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../product-edit/product-edit.component */
      1450);
      /* harmony import */


      var _product_delete_product_delete_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../product-delete/product-delete.component */
      5370);
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      4163);

      function ProductListComponent_li_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " Cras justo odio ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "app-product-detail", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "app-product-edit", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "app-product-delete", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "fa-icon", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductListComponent_li_1_Template_fa_icon_click_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r3.incrementCounter();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "fa-icon", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductListComponent_li_1_Template_fa_icon_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r5.incrementCounter();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, " Current count: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "14");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var product_r1 = ctx.$implicit;
          var i_r2 = ctx.index;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", i_r2 + 1, " : ", product_r1.name, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r0.sampleString, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("product", product_r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("product", product_r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("product", product_r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx_r0.faThumbsUp);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx_r0.faHeart);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.currentCount);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](i_r2 + 1);
        }
      }

      var _ProductListComponent = /*#__PURE__*/function () {
        function _ProductListComponent(productService) {
          _classCallCheck(this, _ProductListComponent);

          this.productService = productService;
          this.products$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable();
          this.faEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faEdit;
          this.faThumbsUp = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faThumbsUp;
          this.faHeart = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faHeart;
          this.faSpinner = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faSpinner;
          this.currentCount = 0;
          this.sampleString = "Some time prior to May 2016, <a href=\"https://motherboard.vice.com/read/rosebuttboard-ip-board\" target=\"_blank\" rel=\"noopener\">the forum known as &quot;Rosebutt Board&quot; was hacked</a> and 107k accounts were exposed. The self-described &quot;top one board for anal fisting, prolapse, huge insertions and rosebutt fans&quot; had email and IP addresses, usernames and weakly stored salted MD5 password hashes hacked from the IP.Board based forum.";
        }

        _createClass(_ProductListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            //this.loadProducts();
            this.products$ = this.productService.puppies$; //this.productService.removePuppy();

            var res = !this.currentCount;
          }
        }, {
          key: "onRemove",
          value: function onRemove(product) {//console.log(product);
            //this.productService.removePuppy(product);
          }
        }, {
          key: "getRandom",
          value: function getRandom(value) {
            return value * Math.random() * 100;
          }
        }, {
          key: "incrementCounter",
          value: function incrementCounter() {
            this.currentCount++;
          }
        }]);

        return _ProductListComponent;
      }();

      _ProductListComponent.ɵfac = function ProductListComponent_Factory(t) {
        return new (t || _ProductListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService));
      };

      _ProductListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _ProductListComponent,
        selectors: [["app-product-list"]],
        decls: 3,
        vars: 3,
        consts: [[1, "list-group", "list-group-numbered"], ["class", "card-shadow list-group-item d-flex justify-content-between align-items-start mb-3", 4, "ngFor", "ngForOf"], [1, "card-shadow", "list-group-item", "d-flex", "justify-content-between", "align-items-start", "mb-3"], [1, "bd-callout", "bd-callout-info"], [1, "text-uppercase"], [1, "", 3, "innerHTML"], [1, ""], [3, "product"], [1, "fa", "fa-2x", "text-primary", 3, "icon", "click"], [1, "fas", "fa-spinner", "fa-spin", "text-danger", 3, "icon", "click"], ["aria-live", "polite"], [1, "row"], [1, "badge", "bg-warning", "rounded-pill"]],
        template: function ProductListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ol", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ProductListComponent_li_1_Template, 23, 10, "li", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, ctx.products$));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_1__.ProductDetailComponent, _product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_2__.ProductEditComponent, _product_delete_product_delete_component__WEBPACK_IMPORTED_MODULE_3__.ProductDeleteComponent, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__.FaIconComponent],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LWxpc3QuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    6329:
    /*!***************************************************!*\
      !*** ./src/app/product/product-routing.module.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductRoutingModule": function ProductRoutingModule() {
          return (
            /* binding */
            _ProductRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _product_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./product.component */
      1659);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var routes = [{
        path: '',
        component: _product_component__WEBPACK_IMPORTED_MODULE_0__.ProductComponent
      }];

      var _ProductRoutingModule = function _ProductRoutingModule() {
        _classCallCheck(this, _ProductRoutingModule);
      };

      _ProductRoutingModule.ɵfac = function ProductRoutingModule_Factory(t) {
        return new (t || _ProductRoutingModule)();
      };

      _ProductRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _ProductRoutingModule
      });
      _ProductRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_ProductRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    9541:
    /*!********************************************************************!*\
      !*** ./src/app/product/product-widget/product-widget.component.ts ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductWidgetComponent": function ProductWidgetComponent() {
          return (
            /* binding */
            _ProductWidgetComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _ProductWidgetComponent = /*#__PURE__*/function () {
        function _ProductWidgetComponent() {
          _classCallCheck(this, _ProductWidgetComponent);
        }

        _createClass(_ProductWidgetComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _ProductWidgetComponent;
      }();

      _ProductWidgetComponent.ɵfac = function ProductWidgetComponent_Factory(t) {
        return new (t || _ProductWidgetComponent)();
      };

      _ProductWidgetComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _ProductWidgetComponent,
        selectors: [["app-product-widget"]],
        decls: 2,
        vars: 0,
        template: function ProductWidgetComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "product-widget works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LXdpZGdldC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    1659:
    /*!**********************************************!*\
      !*** ./src/app/product/product.component.ts ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductComponent": function ProductComponent() {
          return (
            /* binding */
            _ProductComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      9165);
      /* harmony import */


      var _store_product_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./store/product.action */
      7672);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./product.service */
      5528);
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      3301);
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngrx/store */
      6710);
      /* harmony import */


      var _product_add_product_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./product-add/product-add.component */
      3960);
      /* harmony import */


      var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./product-list/product-list.component */
      147);

      var _c0 = ["template"];

      var _ProductComponent = /*#__PURE__*/function () {
        function _ProductComponent(productService, bsModalService, //private productAddComponent: ProductAddComponent
        store) {
          _classCallCheck(this, _ProductComponent);

          this.productService = productService;
          this.bsModalService = bsModalService;
          this.store = store;
          this.products$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable();
          this.displayStyle = "none";
        }

        _createClass(_ProductComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            //this.products$ = this.productService.puppies$;
            this.store.select("products").subscribe(function (res) {
              console.log(res.products); //res.product
            });
          }
        }, {
          key: "onAdd",
          value: function onAdd() {
            this.loadProducts(); //this.modalRef = this.bsModalService.show(ProductAddComponent);
          }
        }, {
          key: "openModal",
          value: function openModal() {
            this.modalRef = this.bsModalService.show(this.template, {
              animated: true,
              backdrop: "static"
            });
          }
        }, {
          key: "openPopup",
          value: function openPopup() {
            this.displayStyle = "block";
          }
        }, {
          key: "closePopup",
          value: function closePopup() {
            this.displayStyle = "none";
          }
        }, {
          key: "loadProducts",
          value: function loadProducts() {
            var products = [];

            for (var i = 0; i < 50; i++) {
              var product = {
                id: "".concat(i * 10 * Math.random()),
                address: "".concat(i * 10 * Math.random()),
                model: "".concat(i * 10 * Math.random()),
                name: "".concat(i * 10 * Math.random()),
                number: "".concat(i * 10 * Math.random())
              };
              products.push(product);
            }

            this.store.dispatch(new _store_product_action__WEBPACK_IMPORTED_MODULE_0__.AddProducts(products));
          }
        }]);

        return _ProductComponent;
      }();

      _ProductComponent.ɵfac = function ProductComponent_Factory(t) {
        return new (t || _ProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_product_service__WEBPACK_IMPORTED_MODULE_1__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__.BsModalService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.Store));
      };

      _ProductComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: _ProductComponent,
        selectors: [["app-product"]],
        viewQuery: function ProductComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.template = _t.first);
          }
        },
        decls: 10,
        vars: 0,
        consts: [[1, "text-primary", "text-center"], [1, "btn", "btn-primary", 3, "click"], [1, ""]],
        template: function ProductComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Product Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProductComponent_Template_button_click_3_listener() {
              return ctx.onAdd();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Add New");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "app-product-add");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "app-product-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          }
        },
        directives: [_product_add_product_add_component__WEBPACK_IMPORTED_MODULE_3__.ProductAddComponent, _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_4__.ProductListComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    1589:
    /*!*******************************************!*\
      !*** ./src/app/product/product.module.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductModule": function ProductModule() {
          return (
            /* binding */
            _ProductModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _product_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./product-routing.module */
      6329);
      /* harmony import */


      var _product_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./product.component */
      1659);
      /* harmony import */


      var _product_add_product_add_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./product-add/product-add.component */
      3960);
      /* harmony import */


      var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./product-list/product-list.component */
      147);
      /* harmony import */


      var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./product-detail/product-detail.component */
      7619);
      /* harmony import */


      var _product_widget_product_widget_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./product-widget/product-widget.component */
      9541);
      /* harmony import */


      var _product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./product-edit/product-edit.component */
      1450);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _product_delete_product_delete_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./product-delete/product-delete.component */
      5370);
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      4163);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _ProductModule = function _ProductModule() {
        _classCallCheck(this, _ProductModule);
      };

      _ProductModule.ɵfac = function ProductModule_Factory(t) {
        return new (t || _ProductModule)();
      };

      _ProductModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
        type: _ProductModule
      });
      _ProductModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__.FontAwesomeModule, _product_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductRoutingModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](_ProductModule, {
          declarations: [_product_component__WEBPACK_IMPORTED_MODULE_1__.ProductComponent, _product_add_product_add_component__WEBPACK_IMPORTED_MODULE_2__.ProductAddComponent, _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_3__.ProductListComponent, _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_4__.ProductDetailComponent, _product_widget_product_widget_component__WEBPACK_IMPORTED_MODULE_5__.ProductWidgetComponent, _product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_6__.ProductEditComponent, _product_delete_product_delete_component__WEBPACK_IMPORTED_MODULE_7__.ProductDeleteComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__.FontAwesomeModule, _product_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductRoutingModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_product_product_module_ts-es5.js.map