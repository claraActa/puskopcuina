(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/anggotaProdukCuDraft/form.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/anggotaProdukCuDraft/form.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_checkValue_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/checkValue.vue */ "./resources/assets/js/components/checkValue.vue");
/* harmony import */ var _components_message_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/message.vue */ "./resources/assets/js/components/message.vue");
/* harmony import */ var vue_cleave_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-cleave-component */ "./node_modules/vue-cleave-component/dist/vue-cleave.min.js");
/* harmony import */ var vue_cleave_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_cleave_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _api_produkCu_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api/produkCu.js */ "./resources/assets/js/api/produkCu.js");
/* harmony import */ var _components_infoIcon_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/infoIcon.vue */ "./resources/assets/js/components/infoIcon.vue");
/* harmony import */ var _components_datePicker_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/datePicker.vue */ "./resources/assets/js/components/datePicker.vue");
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








/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['selected'],
  components: {
    checkValue: _components_checkValue_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    Message: _components_message_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    Cleave: vue_cleave_component__WEBPACK_IMPORTED_MODULE_4___default.a,
    infoIcon: _components_infoIcon_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    DatePicker: _components_datePicker_vue__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  data: function data() {
    return {
      kelas: 'anggotaCu',
      tipeProduk: '',
      formProduk: {
        anggota_id: '',
        saldo: '',
        cu: {
          id: 0,
          name: ''
        },
        produk_cu: {
          id: 0,
          name: ''
        },
        tanggal: '',
        lama_pinjaman: ''
      },
      formStateProdukCu: [],
      formStateProdukCuStat: '',
      cleaveOption: {
        numeric: {
          numeral: true,
          numeralThousandsGroupStyle: 'thousand',
          numeralDecimalScale: 2,
          numeralDecimalMark: ',',
          delimiter: '.'
        },
        number30: {
          numeral: true,
          numeralIntegerScale: 30,
          numeralDecimalScale: 0,
          stripLeadingZeroes: false,
          delimiter: ''
        },
        number4: {
          numeral: true,
          numeralIntegerScale: 4,
          numeralDecimalScale: 0,
          stripLeadingZeroes: false
        },
        date: {
          date: true,
          datePattern: ['Y', 'm', 'd'],
          delimiter: '-'
        }
      },
      message: {
        show: false,
        content: ''
      },
      submited: false
    };
  },
  created: function created() {
    this.fetchCU();

    if (this.modelCuStat == 'success') {
      this.formProduk = this.selected;
    }

    if (this.currentUser.id_cu == 0) {
      this.changeCu(this.formProduk.cu.id);
    }

    if (this.currentUser.id_cu != 0) {
      this.formProduk.cu.id = this.currentUser.cu.id;
      this.formProduk.cu.name = this.currentUser.cu.name;
      this.fetchProdukCu(this.currentUser.cu.id);
    }
  },
  watch: {
    modelCuStat: function modelCuStat(value) {
      if (value === "success") {
        this.formProduk = this.selected;

        if (this.currentUser.id_cu == 0) {
          this.changeCu(this.formProduk.produk_cu.id_cu);
        }

        this.changeProdukCu(this.formProduk.produk_cu_id);

        if (this.currentUser.id_cu != 0) {
          var cu = {};
          cu.id = this.currentUser.cu.id;
          cu.name = this.currentUser.cu.name;
          this.formProduk.cu = cu;
          this.fetchProdukCu(this.currentUser.cu.id);
        }
      }
    },
    formStateProdukCuStat: function formStateProdukCuStat(value) {
      if (value == "success") {
        this.changeProdukCu(this.formProduk.produk_cu_id);
      }
    }
  },
  methods: {
    changeCu: function changeCu(id) {
      var cu;

      if (id != 0) {
        cu = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.find(this.modelCu, function (o) {
          return o.id == id;
        });

        if (cu) {
          this.formProduk.cu = cu;
        }

        this.fetchProdukCu(id);
      }
    },
    changeProdukCu: function changeProdukCu(id) {
      var produk_cu;

      if (id != 0) {
        produk_cu = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.find(this.formStateProdukCu, function (o) {
          return o.id == id;
        });
      }

      if (produk_cu) {
        this.formProduk.produk_cu.id = produk_cu.id;
        this.formProduk.produk_cu.name = produk_cu.name;

        if (produk_cu.tipe == 'Simpanan Pokok' || produk_cu.tipe == 'Simpanan Wajib' || produk_cu.tipe == 'Simpanan Non Saham') {
          this.tipeProduk = 'simpanan';
        } else {
          this.tipeProduk = 'pinjaman';
        }
      }
    },
    fetchCU: function fetchCU() {
      if (this.formStateCuStat != 'success') {
        this.$store.dispatch('cu/getHeader');
      }
    },
    fetchProdukCu: function fetchProdukCu(id) {
      var _this = this;

      _api_produkCu_js__WEBPACK_IMPORTED_MODULE_5__["default"].getCu(id).then(function (response) {
        _this.formStateProdukCu = response.data.model;
        _this.formStateProdukCuStat = 'success';
      })["catch"](function (error) {
        _this.formStateProdukCu = error.response;
        _this.formStateProdukCuStat = 'fail';
      });
    },
    save: function save() {
      var _this2 = this;

      this.$validator.validateAll('formProduk').then(function (result) {
        if (result) {
          _this2.$store.dispatch(_this2.kelas + '/updateProdukCuDraft', [_this2.formProduk.id, _this2.formProduk]);

          _this2.submited = false;
        } else {
          _this2.submited = true;
        }
      });
    },
    messageClose: function messageClose() {
      this.message.show = false;
    },
    tutup: function tutup() {
      this.$emit('tutup');
    }
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('auth', {
    currentUser: 'currentUser'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('cu', {
    modelCu: 'headerDataS',
    modelCuStat: 'headerDataStatS'
  }))
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/anggotaProdukCuDraft/form.vue?vue&type=template&id=d587dc86&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/anggotaProdukCuDraft/form.vue?vue&type=template&id=d587dc86& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c(
      "form",
      {
        attrs: { "data-vv-scope": "formProduk" },
        on: {
          submit: function ($event) {
            $event.preventDefault()
            return _vm.save.apply(null, arguments)
          },
        },
      },
      [
        _vm.message.show
          ? _c("message", {
              attrs: {
                title: "Oops terjadi kesalahan",
                errorData: _vm.message.content,
                showDebug: false,
              },
              on: { close: _vm.messageClose },
            })
          : _vm._e(),
        _vm._v(" "),
        _c("div", { staticClass: "card card-body text-center" }, [
          _c(
            "ul",
            {
              staticClass:
                "list-inline list-inline-consensed mb-0 font-size-lg",
            },
            [
              _c("li", { staticClass: "list-inline-item" }, [
                _c("b", [_vm._v("CU:")]),
                _vm._v(
                  " " + _vm._s(_vm.selected.cu ? _vm.selected.cu.name : "-")
                ),
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "list-inline-item" }, [
                _c("b", [_vm._v("No. KTP:")]),
                _vm._v(
                  " " +
                    _vm._s(
                      _vm.selected.anggota_cu
                        ? _vm.selected.anggota_cu.nik
                        : "-"
                    )
                ),
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "list-inline-item" }, [
                _c("b", [_vm._v("No. BA:")]),
                _vm._v(" " + _vm._s(_vm.selected.no_ba)),
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "list-inline-item" }, [
                _c("b", [_vm._v("Nama:")]),
                _vm._v(
                  " " +
                    _vm._s(
                      _vm.selected.anggota_cu
                        ? _vm.selected.anggota_cu.name
                        : "-"
                    )
                ),
              ]),
            ]
          ),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-12" }, [
            _c(
              "div",
              {
                staticClass: "form-group",
                class: {
                  "has-error": _vm.errors.has("formProduk.produk_cu_id"),
                },
              },
              [
                _c(
                  "h5",
                  {
                    class: {
                      "text-danger": _vm.errors.has("formProduk.produk_cu.id"),
                    },
                  },
                  [
                    _vm.errors.has("formProduk.produk_cu.id")
                      ? _c("i", { staticClass: "icon-cross2" })
                      : _vm._e(),
                    _vm._v("\n\t\t\t\t\tProduk CU: "),
                    _c("info-icon", {
                      attrs: {
                        message:
                          "Apabila jenis produk yang ingin anda pilih tidak ada, pastikan anda sudah menambahkan data produk di menu Tambah Produk & Pelayanan",
                      },
                    }),
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
                        value: _vm.formProduk.produk_cu.id,
                        expression: "formProduk.produk_cu.id",
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
                      name: "produk_cu_id",
                      "data-width": "100%",
                      "data-vv-as": "Produk CU",
                      disabled: _vm.formStateProdukCu.length === 0,
                    },
                    on: {
                      change: [
                        function ($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function (o) {
                              return o.selected
                            })
                            .map(function (o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.$set(
                            _vm.formProduk.produk_cu,
                            "id",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        },
                        function ($event) {
                          return _vm.changeProdukCu($event.target.value)
                        },
                      ],
                    },
                  },
                  [
                    _c("option", { attrs: { disabled: "", value: "0" } }, [
                      _vm.formStateProdukCuStat === "loading"
                        ? _c("span", [_vm._v("Mohon tunggu...")])
                        : _c("span", [_vm._v("Silahkan pilih Produk CU")]),
                    ]),
                    _vm._v(" "),
                    _vm._l(_vm.formStateProdukCu, function (produk, index) {
                      return _c(
                        "option",
                        { key: index, domProps: { value: produk.id } },
                        [
                          _vm._v(
                            _vm._s(produk.name) + " | " + _vm._s(produk.tipe)
                          ),
                        ]
                      )
                    }),
                  ],
                  2
                ),
                _vm._v(" "),
                _vm.errors.has("formProduk.produk_cu.id")
                  ? _c("small", { staticClass: "text-muted text-danger" }, [
                      _c("i", { staticClass: "icon-arrow-small-right" }),
                      _vm._v(
                        " " +
                          _vm._s(_vm.errors.first("formProduk.produk_cu.id")) +
                          "\n\t\t\t\t"
                      ),
                    ])
                  : _c("small", { staticClass: "text-muted" }, [_vm._v("??")]),
              ]
            ),
          ]),
          _vm._v(" "),
          _vm.tipeProduk != ""
            ? _c("div", { staticClass: "col-md-12" }, [
                _c(
                  "div",
                  {
                    staticClass: "form-group",
                    class: { "has-error": _vm.errors.has("formProduk.no_rek") },
                  },
                  [
                    _c(
                      "h5",
                      {
                        class: {
                          "text-danger": _vm.errors.has("formProduk.no_rek"),
                        },
                      },
                      [
                        _vm.errors.has("formProduk.no_rek")
                          ? _c("i", { staticClass: "icon-cross2" })
                          : _vm._e(),
                        _vm._v("\n\t\t\t\t\tNo. Rekening:\n\t\t\t\t"),
                      ]
                    ),
                    _vm._v(" "),
                    _c("cleave", {
                      directives: [
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: {
                        name: "no_rek",
                        options: _vm.cleaveOption.number30,
                        placeholder: "Silahkan masukkan jumlah no. rekening",
                        "data-vv-as": "No. Rekening",
                      },
                      model: {
                        value: _vm.formProduk.no_rek,
                        callback: function ($$v) {
                          _vm.$set(_vm.formProduk, "no_rek", $$v)
                        },
                        expression: "formProduk.no_rek",
                      },
                    }),
                    _vm._v(" "),
                    _vm.errors.has("formProduk.no_rek")
                      ? _c("small", { staticClass: "text-muted text-danger" }, [
                          _c("i", { staticClass: "icon-arrow-small-right" }),
                          _vm._v(
                            " " +
                              _vm._s(_vm.errors.first("formProduk.no_rek")) +
                              "\n\t\t\t\t"
                          ),
                        ])
                      : _c("small", { staticClass: "text-muted" }, [
                          _vm._v("??\n\t\t\t\t"),
                        ]),
                  ],
                  1
                ),
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.tipeProduk != ""
            ? _c("div", { staticClass: "col-md-12" }, [
                _c(
                  "div",
                  {
                    staticClass: "form-group",
                    class: { "has-error": _vm.errors.has("formProduk.saldo") },
                  },
                  [
                    _c(
                      "h5",
                      {
                        class: {
                          "text-danger": _vm.errors.has("formProduk.saldo"),
                        },
                      },
                      [
                        _vm.errors.has("formProduk.saldo")
                          ? _c("i", { staticClass: "icon-cross2" })
                          : _vm._e(),
                        _vm._v("\n\t\t\t\t\tSaldo:\n\t\t\t\t"),
                      ]
                    ),
                    _vm._v(" "),
                    _c("cleave", {
                      directives: [
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: {
                        name: "saldo",
                        options: _vm.cleaveOption.numeric,
                        placeholder: "Silahkan masukkan jumlah saldo",
                        "data-vv-as": "Saldo",
                      },
                      model: {
                        value: _vm.formProduk.saldo,
                        callback: function ($$v) {
                          _vm.$set(_vm.formProduk, "saldo", $$v)
                        },
                        expression: "formProduk.saldo",
                      },
                    }),
                    _vm._v(" "),
                    _vm.errors.has("formProduk.saldo")
                      ? _c("small", { staticClass: "text-muted text-danger" }, [
                          _c("i", { staticClass: "icon-arrow-small-right" }),
                          _vm._v(
                            " " +
                              _vm._s(_vm.errors.first("formProduk.saldo")) +
                              "\n\t\t\t\t"
                          ),
                        ])
                      : _c("small", { staticClass: "text-muted" }, [
                          _vm._v("??\n\t\t\t\t"),
                        ]),
                  ],
                  1
                ),
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.tipeProduk != ""
            ? _c("div", { staticClass: "col-md-12" }, [
                _c(
                  "div",
                  {
                    staticClass: "form-group",
                    class: {
                      "has-error": _vm.errors.has("formProduk.tanggal_buka"),
                    },
                  },
                  [
                    _c(
                      "h5",
                      {
                        class: {
                          "text-danger": _vm.errors.has(
                            "formProduk.tanggal_buka"
                          ),
                        },
                      },
                      [
                        _vm.errors.has("formProduk.tanggal_buka")
                          ? _c("i", { staticClass: "icon-cross2" })
                          : _vm._e(),
                        _vm._v(" Tanggal Buka:\n\t\t\t\t"),
                        _c("br"),
                        _vm._m(0),
                      ]
                    ),
                    _vm._v(" "),
                    _c("date-picker", {
                      attrs: { defaultDate: _vm.formProduk.tanggal_buka },
                      on: {
                        dateSelected: function ($event) {
                          _vm.formProduk.tanggal_buka = $event
                        },
                      },
                    }),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.formProduk.tanggal_buka,
                          expression: "formProduk.tanggal_buka",
                        },
                        {
                          name: "show",
                          rawName: "v-show",
                          value: false,
                          expression: "false",
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'",
                        },
                      ],
                      attrs: { "data-vv-as": "Tanggal buka" },
                      domProps: { value: _vm.formProduk.tanggal_buka },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.formProduk,
                            "tanggal_buka",
                            $event.target.value
                          )
                        },
                      },
                    }),
                    _vm._v(" "),
                    _vm.errors.has("formProduk.tanggal_buka")
                      ? _c("small", { staticClass: "text-muted text-danger" }, [
                          _c("i", { staticClass: "icon-arrow-small-right" }),
                          _vm._v(
                            " " +
                              _vm._s(
                                _vm.errors.first("formProduk.tanggal_buka")
                              ) +
                              "\n\t\t\t\t"
                          ),
                        ])
                      : _c("small", { staticClass: "text-muted" }, [
                          _vm._v("??\n\t\t\t\t"),
                        ]),
                  ],
                  1
                ),
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.tipeProduk != ""
            ? _c("div", { staticClass: "col-md-12" }, [
                _c(
                  "div",
                  {
                    staticClass: "form-group",
                    class: {
                      "has-error": _vm.errors.has(
                        "formProduk.tanggal_transaksi"
                      ),
                    },
                  },
                  [
                    _c(
                      "h5",
                      {
                        class: {
                          "text-danger": _vm.errors.has(
                            "formProduk.tanggal_transaksi"
                          ),
                        },
                      },
                      [
                        _vm.errors.has("formProduk.tanggal_transaksi")
                          ? _c("i", { staticClass: "icon-cross2" })
                          : _vm._e(),
                        _vm._v(" Tanggal Transaksi:\n\t\t\t\t"),
                        _c("br"),
                        _vm._m(1),
                      ]
                    ),
                    _vm._v(" "),
                    _c("date-picker", {
                      attrs: { defaultDate: _vm.formProduk.tanggal_transaksi },
                      on: {
                        dateSelected: function ($event) {
                          _vm.formProduk.tanggal_transaksi = $event
                        },
                      },
                    }),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.formProduk.tanggal_transaksi,
                          expression: "formProduk.tanggal_transaksi",
                        },
                        {
                          name: "show",
                          rawName: "v-show",
                          value: false,
                          expression: "false",
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'",
                        },
                      ],
                      attrs: { "data-vv-as": "Tanggal transaksi" },
                      domProps: { value: _vm.formProduk.tanggal_transaksi },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.formProduk,
                            "tanggal_transaksi",
                            $event.target.value
                          )
                        },
                      },
                    }),
                    _vm._v(" "),
                    _vm.errors.has("formProduk.tanggal_transaksi")
                      ? _c("small", { staticClass: "text-muted text-danger" }, [
                          _c("i", { staticClass: "icon-arrow-small-right" }),
                          _vm._v(
                            " " +
                              _vm._s(
                                _vm.errors.first("formProduk.tanggal_transaksi")
                              ) +
                              "\n\t\t\t\t"
                          ),
                        ])
                      : _c("small", { staticClass: "text-muted" }, [
                          _vm._v("??\n\t\t\t\t"),
                        ]),
                  ],
                  1
                ),
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.tipeProduk != ""
            ? _c("div", { staticClass: "col-md-12" }, [
                _vm.tipeProduk != "pinjaman"
                  ? _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _vm._m(2),
                        _vm._v(" "),
                        _c("date-picker", {
                          attrs: { defaultDate: _vm.formProduk.tanggal_target },
                          on: {
                            dateSelected: function ($event) {
                              _vm.formProduk.tanggal_target = $event
                            },
                          },
                        }),
                        _vm._v(" "),
                        _c("small", { staticClass: "text-muted" }, [
                          _vm._v("??"),
                        ]),
                      ],
                      1
                    )
                  : _vm._e(),
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.tipeProduk == "pinjaman"
            ? _c("div", { staticClass: "col-md-12" }, [
                _c(
                  "div",
                  {
                    staticClass: "form-group",
                    class: {
                      "has-error": _vm.errors.has("formProduk.lama_pinjaman"),
                    },
                  },
                  [
                    _c(
                      "h5",
                      {
                        class: {
                          "text-danger": _vm.errors.has(
                            "formProduk.lama_pinjaman"
                          ),
                        },
                      },
                      [
                        _vm.errors.has("formProduk.lama_pinjaman")
                          ? _c("i", { staticClass: "icon-cross2" })
                          : _vm._e(),
                        _vm._v("\n\t\t\t\t\tLama Pinjaman (bulan):\n\t\t\t\t"),
                      ]
                    ),
                    _vm._v(" "),
                    _c("cleave", {
                      directives: [
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: {
                        name: "lama_pinjaman",
                        options: _vm.cleaveOption.number4,
                        placeholder: "Silahkan masukkan lama pinjaman",
                        "data-vv-as": "Lama pinjaman",
                      },
                      model: {
                        value: _vm.formProduk.lama_pinjaman,
                        callback: function ($$v) {
                          _vm.$set(_vm.formProduk, "lama_pinjaman", $$v)
                        },
                        expression: "formProduk.lama_pinjaman",
                      },
                    }),
                    _vm._v(" "),
                    _vm.errors.has("formProduk.lama_pinjaman")
                      ? _c("small", { staticClass: "text-muted text-danger" }, [
                          _c("i", { staticClass: "icon-arrow-small-right" }),
                          _vm._v(
                            " " +
                              _vm._s(
                                _vm.errors.first("formProduk.lama_pinjaman")
                              ) +
                              "\n\t\t\t\t"
                          ),
                        ])
                      : _c("small", { staticClass: "text-muted" }, [
                          _vm._v("??\n\t\t\t\t"),
                        ]),
                  ],
                  1
                ),
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.tipeProduk != ""
            ? _c("div", { staticClass: "col-md-12" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("h6", [_vm._v("\n\t\t\t\t\tTujuan:\n\t\t\t\t")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.formProduk.tujuan,
                        expression: "formProduk.tujuan",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      name: "tujuan",
                      placeholder: "Silahkan masukkan tujuan",
                    },
                    domProps: { value: _vm.formProduk.tujuan },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.formProduk, "tujuan", $event.target.value)
                      },
                    },
                  }),
                ]),
              ])
            : _vm._e(),
        ]),
        _vm._v(" "),
        _c("hr"),
        _vm._v(" "),
        _c("div", { staticClass: "text-center d-none d-md-block" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-light",
              attrs: { type: "button" },
              on: {
                click: function ($event) {
                  $event.preventDefault()
                  return _vm.tutup.apply(null, arguments)
                },
              },
            },
            [_c("i", { staticClass: "icon-cross" }), _vm._v(" Tutup")]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-primary",
              attrs: {
                type: "submit",
                disabled: _vm.formProduk.produk_cu_id == "",
              },
            },
            [_c("i", { staticClass: "icon-floppy-disk" }), _vm._v(" Simpan")]
          ),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "d-block d-md-none" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-primary btn-block pb-2",
              attrs: {
                type: "submit",
                disabled: _vm.formProduk.produk_cu_id == "",
              },
            },
            [_c("i", { staticClass: "icon-floppy-disk" }), _vm._v(" Simpan")]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-light btn-block pb-2",
              attrs: { type: "button" },
              on: {
                click: function ($event) {
                  $event.preventDefault()
                  return _vm.tutup.apply(null, arguments)
                },
              },
            },
            [_c("i", { staticClass: "icon-cross" }), _vm._v(" Tutup")]
          ),
        ]),
      ],
      1
    ),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("small", { staticClass: "text-muted" }, [
      _c("i", [_vm._v("Diisi dengan tanggal pembuatan rekening")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("small", { staticClass: "text-muted" }, [
      _c("i", [_vm._v("Diisi dengan tanggal transaksi")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h5", [
      _vm._v("\n\t\t\t\t\tTanggal Target:\n\t\t\t\t\t"),
      _c("br"),
      _c("small", { staticClass: "text-muted" }, [
        _c("i", [
          _vm._v(
            "Untuk simpanan rencana khusus (mis: kendaraan, perumahan) dan diisi dengan tanggal kapan rencana tersebut akan tercapai"
          ),
        ]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/views/anggotaProdukCuDraft/form.vue":
/*!*****************************************************************!*\
  !*** ./resources/assets/js/views/anggotaProdukCuDraft/form.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_vue_vue_type_template_id_d587dc86___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.vue?vue&type=template&id=d587dc86& */ "./resources/assets/js/views/anggotaProdukCuDraft/form.vue?vue&type=template&id=d587dc86&");
/* harmony import */ var _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/anggotaProdukCuDraft/form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _form_vue_vue_type_template_id_d587dc86___WEBPACK_IMPORTED_MODULE_0__["render"],
  _form_vue_vue_type_template_id_d587dc86___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/anggotaProdukCuDraft/form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/anggotaProdukCuDraft/form.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/assets/js/views/anggotaProdukCuDraft/form.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/anggotaProdukCuDraft/form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/anggotaProdukCuDraft/form.vue?vue&type=template&id=d587dc86&":
/*!************************************************************************************************!*\
  !*** ./resources/assets/js/views/anggotaProdukCuDraft/form.vue?vue&type=template&id=d587dc86& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_d587dc86___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=template&id=d587dc86& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/anggotaProdukCuDraft/form.vue?vue&type=template&id=d587dc86&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_d587dc86___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_d587dc86___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);