(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[123],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/produkCu/form.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/produkCu/form.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_pageHeader_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/pageHeader.vue */ "./resources/assets/js/components/pageHeader.vue");
/* harmony import */ var _helpers_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/form */ "./resources/assets/js/helpers/form.js");
/* harmony import */ var _components_ImageUpload_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/ImageUpload.vue */ "./resources/assets/js/components/ImageUpload.vue");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/modal */ "./resources/assets/js/components/modal.vue");
/* harmony import */ var _components_message_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/message.vue */ "./resources/assets/js/components/message.vue");
/* harmony import */ var _components_formButton_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/formButton.vue */ "./resources/assets/js/components/formButton.vue");
/* harmony import */ var _components_formInfo_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/formInfo.vue */ "./resources/assets/js/components/formInfo.vue");
/* harmony import */ var vue_cleave_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-cleave-component */ "./node_modules/vue-cleave-component/dist/vue-cleave.min.js");
/* harmony import */ var vue_cleave_component__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(vue_cleave_component__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_wajibBadge_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/wajibBadge.vue */ "./resources/assets/js/components/wajibBadge.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//










/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    pageHeader: _components_pageHeader_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    appModal: _components_modal__WEBPACK_IMPORTED_MODULE_4__["default"],
    appImageUpload: _components_ImageUpload_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    message: _components_message_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    formButton: _components_formButton_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    formInfo: _components_formInfo_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    Cleave: vue_cleave_component__WEBPACK_IMPORTED_MODULE_8___default.a,
    wajibBadge: _components_wajibBadge_vue__WEBPACK_IMPORTED_MODULE_9__["default"]
  },
  data: function data() {
    return {
      title: '',
      titleDesc: '',
      titleIcon: '',
      kelas: 'produkCu',
      level2Title: 'Produk dan Pelayanan',
      cleaveOption: {
        date: {
          date: true,
          datePattern: ['Y', 'm', 'd'],
          delimiter: '-'
        },
        number12: {
          numeral: true,
          numeralIntegerScale: 12,
          numeralDecimalScale: 0,
          stripLeadingZeroes: false,
          delimiter: ''
        },
        number3: {
          numeral: true,
          numeralIntegerScale: 3,
          numeralDecimalScale: 0,
          stripLeadingZeroes: false
        },
        numeric: {
          numeral: true,
          numeralThousandsGroupStyle: 'thousand',
          numeralDecimalScale: 2,
          numeralDecimalMark: ',',
          delimiter: '.'
        }
      },
      isDisabledName: false,
      modalShow: false,
      modalState: '',
      modalTitle: '',
      modalColor: '',
      modalContent: '',
      submited: false
    };
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    next(function (vm) {
      return vm.fetch();
    });
  },
  created: function created() {
    if (this.currentUser.id_cu == 0) {
      if (this.modelCuStat != 'success') {
        this.$store.dispatch('cu/getHeader');
      }
    }

    if (this.$route.meta.mode !== 'edit' && this.form.id_cu == undefined) {
      this.form.id_cu = this.currentUser.id_cu;
    } // check permission


    if (this.$route.meta.mode === 'edit') {
      if (!this.currentUser.can || !this.currentUser.can['update_produk_cu']) {
        this.$router.push({
          name: 'notFound'
        });
      }
    } else {
      if (!this.currentUser.can || !this.currentUser.can['create_produk_cu']) {
        this.$router.push({
          name: 'notFound'
        });
      }
    }
  },
  watch: {
    formStat: function formStat(value) {
      if (value === "success") {
        if (this.$route.meta.mode !== 'edit') {
          this.form.id_cu = this.currentUser.id_cu;
        } else {
          this.checkUser('update_produk_cu', this.form.id_cu);
        }
      }
    },
    updateStat: function updateStat(value) {
      this.modalShow = true;
      this.modalState = value;
      this.modalColor = '';

      if (value === "success") {
        this.modalTitle = this.updateResponse.message;
      } else {
        this.modalTitle = 'Oops terjadi kesalahan :(';
        this.modalContent = this.updateResponse;
      }
    }
  },
  methods: {
    fetch: function fetch() {
      if (this.$route.meta.mode === 'edit') {
        this.$store.dispatch(this.kelas + '/edit', this.$route.params.id);
        this.title = 'Ubah ' + this.level2Title;
        this.titleDesc = 'Mengubah ' + this.level2Title;
        this.titleIcon = 'icon-pencil5';
      } else {
        this.title = 'Tambah ' + this.level2Title;
        this.titleDesc = 'Menambah ' + this.level2Title;
        this.titleIcon = 'icon-plus3';
        this.$store.dispatch(this.kelas + '/create');
      }
    },
    checkUser: function checkUser(permission, id_cu) {
      if (this.currentUser) {
        if (!this.currentUser.can || !this.currentUser.can[permission]) {
          this.$router.push('/notFound');
        }

        if (!id_cu || this.currentUser.id_cu) {
          if (this.currentUser.id_cu != 0 && this.currentUser.id_cu != id_cu) {
            this.$router.push('/notFound');
          }
        }
      }
    },
    save: function save() {
      var _this = this;

      var formData = Object(_helpers_form__WEBPACK_IMPORTED_MODULE_2__["toMulipartedForm"])(this.form, this.$route.meta.mode);
      this.$validator.validateAll('form').then(function (result) {
        if (result) {
          if (_this.$route.meta.mode === 'edit') {
            _this.$store.dispatch(_this.kelas + '/update', [_this.$route.params.id, formData]);
          } else {
            _this.$store.dispatch(_this.kelas + '/store', formData);
          }

          _this.submited = false;
        } else {
          window.scrollTo(0, 0);
          _this.submited = true;
        }
      });
    },
    changeTipe: function changeTipe(value) {
      if (value == 'Simpanan Pokok') {
        this.form.name = 'Simpanan Pokok';
        this.form.jalinan = 1;
        this.isDisabledName = true;
      } else if (value == 'Simpanan Wajib') {
        this.form.name = 'Simpanan Wajib';
        this.form.jalinan = 1;
        this.isDisabledName = true;
      } else {
        this.form.jalinan = '';
        this.form.name = '';
        this.isDisabledName = false;
      }
    },
    back: function back() {
      if (this.$route.meta.mode == 'edit' && this.currentUser.id_cu == 0) {
        this.$router.push({
          name: this.kelas + 'Cu',
          params: {
            cu: 'semua'
          }
        });
      } else {
        if (this.currentUser.id_cu == 0) {
          this.$router.push({
            name: this.kelas + 'Cu',
            params: {
              cu: 'semua'
            }
          });
        } else {
          this.$router.push({
            name: this.kelas + 'Cu',
            params: {
              cu: this.currentUser.id_cu
            }
          });
        }
      }
    },
    modalTutup: function modalTutup() {
      if (this.updateStat === 'success') {
        this.back();
      }

      this.modalShow = false;
      this.submitedKategori = false;
      this.submitedPenulis = false;
    },
    modalBackgroundClick: function modalBackgroundClick() {
      if (this.modalState === 'success') {
        this.modalTutup;
      } else if (this.modalState === 'loading') {// do nothing
      } else {
        this.modalShow = false;
      }
    }
  },
  computed: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('auth', {
    currentUser: 'currentUser'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('produkCu', {
    form: 'data',
    formStat: 'dataStat',
    rules: 'rules',
    options: 'options',
    updateResponse: 'update',
    updateStat: 'updateStat'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('cu', {
    modelCU: 'headerDataS',
    modelCUStat: 'headerDataStatS'
  }))
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/produkCu/form.vue?vue&type=template&id=634522b1&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/produkCu/form.vue?vue&type=template&id=634522b1& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("page-header", {
        attrs: {
          title: _vm.title,
          titleDesc: _vm.titleDesc,
          titleIcon: _vm.titleIcon,
          level: 2,
          level2Title: _vm.level2Title,
          level2Route: _vm.kelas,
        },
        on: {
          level2Back: function ($event) {
            return _vm.back()
          },
        },
      }),
      _vm._v(" "),
      _c("div", { staticClass: "page-content pt-0" }, [
        _c("div", { staticClass: "content-wrapper" }, [
          _c(
            "div",
            { staticClass: "content" },
            [
              _vm.errors.any("form") && _vm.submited
                ? _c("message", {
                    attrs: {
                      title: "Oops, terjadi kesalahan",
                      errorItem: _vm.errors.items,
                    },
                  })
                : _vm._e(),
              _vm._v(" "),
              _c(
                "form",
                {
                  attrs: {
                    enctype: "multipart/form-data",
                    "data-vv-scope": "form",
                  },
                  on: {
                    submit: function ($event) {
                      $event.preventDefault()
                      return _vm.save.apply(null, arguments)
                    },
                  },
                },
                [
                  _c("div", { staticClass: "card" }, [
                    _c("div", { staticClass: "card-body" }, [
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-md-12" }, [
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c("h5", [_vm._v("Foto:")]),
                              _vm._v(" "),
                              _c("app-image-upload", {
                                attrs: {
                                  image_loc: "/images/produk_cu/",
                                  image_temp: _vm.form.gambar,
                                },
                                model: {
                                  value: _vm.form.gambar,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.form, "gambar", $$v)
                                  },
                                  expression: "form.gambar",
                                },
                              }),
                            ],
                            1
                          ),
                        ]),
                        _vm._v(" "),
                        _vm.currentUser.id_cu === 0
                          ? _c("div", { staticClass: "col-md-4" }, [
                              _c(
                                "div",
                                {
                                  staticClass: "form-group",
                                  class: {
                                    "has-error": _vm.errors.has("form.id_cu"),
                                  },
                                },
                                [
                                  _c(
                                    "h5",
                                    {
                                      class: {
                                        "text-danger":
                                          _vm.errors.has("form.id_cu"),
                                      },
                                    },
                                    [
                                      _vm.errors.has("form.id_cu")
                                        ? _c("i", {
                                            staticClass: "icon-cross2",
                                          })
                                        : _vm._e(),
                                      _vm._v("\n\t\t\t\t\t\t\t\t\t\t\tCU: "),
                                      _c("wajib-badge"),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "select",
                                    {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.id_cu,
                                          expression: "form.id_cu",
                                        },
                                        {
                                          name: "validate",
                                          rawName: "v-validate",
                                          value: "required",
                                          expression: "'required'",
                                        },
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        name: "id_cu",
                                        "data-width": "100%",
                                        "data-vv-as": "CU",
                                        disabled: _vm.modelCU.length === 0,
                                      },
                                      on: {
                                        change: function ($event) {
                                          var $$selectedVal =
                                            Array.prototype.filter
                                              .call(
                                                $event.target.options,
                                                function (o) {
                                                  return o.selected
                                                }
                                              )
                                              .map(function (o) {
                                                var val =
                                                  "_value" in o
                                                    ? o._value
                                                    : o.value
                                                return val
                                              })
                                          _vm.$set(
                                            _vm.form,
                                            "id_cu",
                                            $event.target.multiple
                                              ? $$selectedVal
                                              : $$selectedVal[0]
                                          )
                                        },
                                      },
                                    },
                                    [
                                      _c(
                                        "option",
                                        { attrs: { disabled: "", value: "0" } },
                                        [
                                          _vm.modelCUStat === "loading"
                                            ? _c("span", [
                                                _vm._v("Mohon tunggu..."),
                                              ])
                                            : _c("span", [
                                                _vm._v("Silahkan pilih CU"),
                                              ]),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _vm._l(_vm.modelCU, function (cu) {
                                        return cu
                                          ? _c(
                                              "option",
                                              { domProps: { value: cu.id } },
                                              [_vm._v(_vm._s(cu.name))]
                                            )
                                          : _vm._e()
                                      }),
                                    ],
                                    2
                                  ),
                                  _vm._v(" "),
                                  _vm.errors.has("form.id_cu")
                                    ? _c(
                                        "small",
                                        {
                                          staticClass: "text-muted text-danger",
                                        },
                                        [
                                          _c("i", {
                                            staticClass:
                                              "icon-arrow-small-right",
                                          }),
                                          _vm._v(
                                            " " +
                                              _vm._s(
                                                _vm.errors.first("form.id_cu")
                                              ) +
                                              "\n\t\t\t\t\t\t\t\t\t\t"
                                          ),
                                        ]
                                      )
                                    : _c(
                                        "small",
                                        { staticClass: "text-muted" },
                                        [_vm._v(" ")]
                                      ),
                                ]
                              ),
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-4" }, [
                          _c(
                            "div",
                            {
                              staticClass: "form-group",
                              class: {
                                "has-error": _vm.errors.has("form.tipe"),
                              },
                            },
                            [
                              _c(
                                "h5",
                                {
                                  class: {
                                    "text-danger": _vm.errors.has("form.tipe"),
                                  },
                                },
                                [
                                  _vm.errors.has("form.tipe")
                                    ? _c("i", { staticClass: "icon-cross2" })
                                    : _vm._e(),
                                  _vm._v(
                                    "\n\t\t\t\t\t\t\t\t\t\t\tTipe Produk: "
                                  ),
                                  _c("wajib-badge"),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "select",
                                {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.tipe,
                                      expression: "form.tipe",
                                    },
                                    {
                                      name: "validate",
                                      rawName: "v-validate",
                                      value: "required",
                                      expression: "'required'",
                                    },
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    name: "tipe",
                                    "data-width": "100%",
                                    "data-vv-as": "Tipe Produk",
                                  },
                                  on: {
                                    change: [
                                      function ($event) {
                                        var $$selectedVal =
                                          Array.prototype.filter
                                            .call(
                                              $event.target.options,
                                              function (o) {
                                                return o.selected
                                              }
                                            )
                                            .map(function (o) {
                                              var val =
                                                "_value" in o
                                                  ? o._value
                                                  : o.value
                                              return val
                                            })
                                        _vm.$set(
                                          _vm.form,
                                          "tipe",
                                          $event.target.multiple
                                            ? $$selectedVal
                                            : $$selectedVal[0]
                                        )
                                      },
                                      function ($event) {
                                        return _vm.changeTipe(
                                          $event.target.value
                                        )
                                      },
                                    ],
                                  },
                                },
                                [
                                  _c(
                                    "option",
                                    { attrs: { disabled: "", value: "" } },
                                    [_vm._v("Silahkan pilih tipe produk")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "option",
                                    { attrs: { value: "Simpanan Pokok" } },
                                    [_vm._v("Simpanan Pokok")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "option",
                                    { attrs: { value: "Simpanan Wajib" } },
                                    [_vm._v("Simpanan Wajib")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "option",
                                    { attrs: { value: "Simpanan Non Saham" } },
                                    [_vm._v("Simpanan Non Saham")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "option",
                                    {
                                      attrs: { value: "Pinjaman Kapitalisasi" },
                                    },
                                    [_vm._v("Pinjaman Kapitalisasi")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "option",
                                    { attrs: { value: "Pinjaman Umum" } },
                                    [_vm._v("Pinjaman Umum")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "option",
                                    { attrs: { value: "Pinjaman Produktif" } },
                                    [_vm._v("Pinjaman Produktif")]
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _vm.errors.has("form.tipe")
                                ? _c(
                                    "small",
                                    { staticClass: "text-muted text-danger" },
                                    [
                                      _c("i", {
                                        staticClass: "icon-arrow-small-right",
                                      }),
                                      _vm._v(
                                        " " +
                                          _vm._s(
                                            _vm.errors.first("form.tipe")
                                          ) +
                                          "\n\t\t\t\t\t\t\t\t\t\t"
                                      ),
                                    ]
                                  )
                                : _c("small", { staticClass: "text-muted" }, [
                                    _vm._v(" "),
                                  ]),
                            ]
                          ),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-4" }, [
                          _c(
                            "div",
                            {
                              staticClass: "form-group",
                              class: {
                                "has-error": _vm.errors.has("form.kode_produk"),
                              },
                            },
                            [
                              _c(
                                "h5",
                                {
                                  class: {
                                    "text-danger":
                                      _vm.errors.has("form.kode_produk"),
                                  },
                                },
                                [
                                  _vm.errors.has("form.kode_produk")
                                    ? _c("i", { staticClass: "icon-cross2" })
                                    : _vm._e(),
                                  _vm._v(
                                    "\n\t\t\t\t\t\t\t\t\t\t\tKode Produk & Pelayanan: "
                                  ),
                                  _c("wajib-badge"),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "validate",
                                    rawName: "v-validate",
                                    value: "required",
                                    expression: "'required'",
                                  },
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.kode_produk,
                                    expression: "form.kode_produk",
                                  },
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "text",
                                  name: "kode_produk",
                                  placeholder:
                                    "Silahkan masukkan kode produk dan pelayanan",
                                  "data-vv-as": "Kode Produk dan Pelayanan",
                                },
                                domProps: { value: _vm.form.kode_produk },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "kode_produk",
                                      $event.target.value
                                    )
                                  },
                                },
                              }),
                              _vm._v(" "),
                              _vm.errors.has("form.kode_produk")
                                ? _c(
                                    "small",
                                    { staticClass: "text-muted text-danger" },
                                    [
                                      _c("i", {
                                        staticClass: "icon-arrow-small-right",
                                      }),
                                      _vm._v(
                                        " " +
                                          _vm._s(
                                            _vm.errors.first("form.kode_produk")
                                          ) +
                                          "\n\t\t\t\t\t\t\t\t\t\t"
                                      ),
                                    ]
                                  )
                                : _c("small", { staticClass: "text-muted" }, [
                                    _vm._v(" "),
                                  ]),
                            ]
                          ),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-4" }, [
                          _c(
                            "div",
                            {
                              staticClass: "form-group",
                              class: {
                                "has-error": _vm.errors.has("form.name"),
                              },
                            },
                            [
                              _c(
                                "h5",
                                {
                                  class: {
                                    "text-danger": _vm.errors.has("form.name"),
                                  },
                                },
                                [
                                  _vm.errors.has("form.name")
                                    ? _c("i", { staticClass: "icon-cross2" })
                                    : _vm._e(),
                                  _vm._v("\n\t\t\t\t\t\t\t\t\t\t\tNama: "),
                                  _c("wajib-badge"),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "validate",
                                    rawName: "v-validate",
                                    value: "required",
                                    expression: "'required'",
                                  },
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.name,
                                    expression: "form.name",
                                  },
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "text",
                                  name: "name",
                                  placeholder:
                                    "Silahkan masukkan nama produk dan pelayanan",
                                  "data-vv-as": "Nama",
                                  disabled: _vm.isDisabledName,
                                },
                                domProps: { value: _vm.form.name },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "name",
                                      $event.target.value
                                    )
                                  },
                                },
                              }),
                              _vm._v(" "),
                              _vm.errors.has("form.name")
                                ? _c(
                                    "small",
                                    { staticClass: "text-muted text-danger" },
                                    [
                                      _c("i", {
                                        staticClass: "icon-arrow-small-right",
                                      }),
                                      _vm._v(
                                        " " +
                                          _vm._s(
                                            _vm.errors.first("form.name")
                                          ) +
                                          "\n\t\t\t\t\t\t\t\t\t\t"
                                      ),
                                    ]
                                  )
                                : _c("small", { staticClass: "text-muted" }, [
                                    _vm._v(" "),
                                  ]),
                            ]
                          ),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-8" }, [
                          _c(
                            "div",
                            {
                              staticClass: "form-group",
                              class: {
                                "has-error": _vm.errors.has("form.jalinan"),
                              },
                            },
                            [
                              _c(
                                "h5",
                                {
                                  class: {
                                    "text-danger":
                                      _vm.errors.has("form.jalinan"),
                                  },
                                },
                                [
                                  _vm.errors.has("form.jalinan")
                                    ? _c("i", { staticClass: "icon-cross2" })
                                    : _vm._e(),
                                  _vm._v(
                                    "\n\t\t\t\t\t\t\t\t\t\t\tDisolidaritaskan Jalinan?\n\t\t\t\t\t\t\t\t\t\t"
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "select",
                                {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.jalinan,
                                      expression: "form.jalinan",
                                    },
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    name: "jalinan",
                                    "data-width": "100%",
                                    disabled: _vm.isDisabledName,
                                  },
                                  on: {
                                    change: function ($event) {
                                      var $$selectedVal = Array.prototype.filter
                                        .call(
                                          $event.target.options,
                                          function (o) {
                                            return o.selected
                                          }
                                        )
                                        .map(function (o) {
                                          var val =
                                            "_value" in o ? o._value : o.value
                                          return val
                                        })
                                      _vm.$set(
                                        _vm.form,
                                        "jalinan",
                                        $event.target.multiple
                                          ? $$selectedVal
                                          : $$selectedVal[0]
                                      )
                                    },
                                  },
                                },
                                [
                                  _c(
                                    "option",
                                    { attrs: { disabled: "", value: "" } },
                                    [
                                      _vm._v(
                                        "Silahkan pilih apakah simpanan ini disolidaritaskan Jalinan"
                                      ),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("option", { attrs: { value: "1" } }, [
                                    _vm._v("Iya, disolidaritaskan Jalinan"),
                                  ]),
                                  _vm._v(" "),
                                  _c("option", { attrs: { value: "0" } }, [
                                    _vm._v("Tidak disolidaritaskan Jalinan"),
                                  ]),
                                ]
                              ),
                              _vm._v(" "),
                              _c("br"),
                              _vm._v(" "),
                              _vm.errors.has("form.jalinan")
                                ? _c(
                                    "small",
                                    { staticClass: "text-muted text-danger" },
                                    [
                                      _c("i", {
                                        staticClass: "icon-arrow-small-right",
                                      }),
                                      _vm._v(
                                        " " +
                                          _vm._s(
                                            _vm.errors.first("form.jalinan")
                                          ) +
                                          "\n\t\t\t\t\t\t\t\t\t\t"
                                      ),
                                    ]
                                  )
                                : _c("small", { staticClass: "text-muted" }, [
                                    _vm._v(" \n\t\t\t\t\t\t\t\t\t\t"),
                                  ]),
                            ]
                          ),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-12" }, [
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c("h5", [_vm._v("Keterangan:")]),
                              _vm._v(" "),
                              _c("ckeditor", {
                                attrs: { type: "classic" },
                                model: {
                                  value: _vm.form.keterangan,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.form, "keterangan", $$v)
                                  },
                                  expression: "form.keterangan",
                                },
                              }),
                              _vm._v(" "),
                              _c("small", { staticClass: "text-muted" }, [
                                _vm._v(" "),
                              ]),
                            ],
                            1
                          ),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-12" }, [
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c("h5", [_vm._v("Aturan Setor:")]),
                              _vm._v(" "),
                              _c("ckeditor", {
                                attrs: { type: "classic" },
                                model: {
                                  value: _vm.form.aturan_setor,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.form, "aturan_setor", $$v)
                                  },
                                  expression: "form.aturan_setor",
                                },
                              }),
                              _vm._v(" "),
                              _c("small", { staticClass: "text-muted" }, [
                                _vm._v(" "),
                              ]),
                            ],
                            1
                          ),
                        ]),
                        _vm._v(" "),
                        _vm.form.tipe == "Simpanan Pokok" ||
                        _vm.form.tipe == "Simpanan Wajib" ||
                        _vm.form.tipe == "Simpanan Non Saham"
                          ? _c("div", { staticClass: "col-md-12" }, [
                              _c(
                                "div",
                                { staticClass: "form-group" },
                                [
                                  _c("h5", [_vm._v("Aturan Tarik:")]),
                                  _vm._v(" "),
                                  _c("ckeditor", {
                                    attrs: { type: "classic" },
                                    model: {
                                      value: _vm.form.aturan_tarik,
                                      callback: function ($$v) {
                                        _vm.$set(_vm.form, "aturan_tarik", $$v)
                                      },
                                      expression: "form.aturan_tarik",
                                    },
                                  }),
                                  _vm._v(" "),
                                  _c("small", { staticClass: "text-muted" }, [
                                    _vm._v(" "),
                                  ]),
                                ],
                                1
                              ),
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-12" }, [
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c("h5", [_vm._v("Aturan Balas Jasa:")]),
                              _vm._v(" "),
                              _c("ckeditor", {
                                attrs: { type: "classic" },
                                model: {
                                  value: _vm.form.aturan_balas_jasa,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.form, "aturan_balas_jasa", $$v)
                                  },
                                  expression: "form.aturan_balas_jasa",
                                },
                              }),
                              _vm._v(" "),
                              _c("small", { staticClass: "text-muted" }, [
                                _vm._v(" "),
                              ]),
                            ],
                            1
                          ),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-12" }, [
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c("h5", [_vm._v("Aturan Lain:")]),
                              _vm._v(" "),
                              _c("ckeditor", {
                                attrs: { type: "classic" },
                                model: {
                                  value: _vm.form.aturan_lain,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.form, "aturan_lain", $$v)
                                  },
                                  expression: "form.aturan_lain",
                                },
                              }),
                              _vm._v(" "),
                              _c("small", { staticClass: "text-muted" }, [
                                _vm._v(" "),
                              ]),
                            ],
                            1
                          ),
                        ]),
                      ]),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("form-info"),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "card card-body" },
                    [
                      _c("form-button", {
                        attrs: {
                          cancelState: "methods",
                          formValidation: "form",
                        },
                        on: { cancelClick: _vm.back },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ]),
      ]),
      _vm._v(" "),
      _c("app-modal", {
        attrs: {
          show: _vm.modalShow,
          state: _vm.modalState,
          title: _vm.modalTitle,
          content: _vm.modalContent,
          color: _vm.modalColor,
        },
        on: {
          batal: _vm.modalTutup,
          tutup: _vm.modalTutup,
          successOk: _vm.modalTutup,
          failOk: _vm.modalTutup,
          backgroundClick: _vm.modalBackgroundClick,
        },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/views/produkCu/form.vue":
/*!*****************************************************!*\
  !*** ./resources/assets/js/views/produkCu/form.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_vue_vue_type_template_id_634522b1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.vue?vue&type=template&id=634522b1& */ "./resources/assets/js/views/produkCu/form.vue?vue&type=template&id=634522b1&");
/* harmony import */ var _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/produkCu/form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _form_vue_vue_type_template_id_634522b1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _form_vue_vue_type_template_id_634522b1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/produkCu/form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/produkCu/form.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/assets/js/views/produkCu/form.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/produkCu/form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/produkCu/form.vue?vue&type=template&id=634522b1&":
/*!************************************************************************************!*\
  !*** ./resources/assets/js/views/produkCu/form.vue?vue&type=template&id=634522b1& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_634522b1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=template&id=634522b1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/produkCu/form.vue?vue&type=template&id=634522b1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_634522b1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_634522b1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);