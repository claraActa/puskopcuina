(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[110],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/jalinanIuran/form.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/jalinanIuran/form.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_pageHeader_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/pageHeader.vue */ "./resources/assets/js/components/pageHeader.vue");
/* harmony import */ var _components_infoIcon_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/infoIcon.vue */ "./resources/assets/js/components/infoIcon.vue");
/* harmony import */ var _components_wajibBadge_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/wajibBadge.vue */ "./resources/assets/js/components/wajibBadge.vue");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/modal */ "./resources/assets/js/components/modal.vue");
/* harmony import */ var _components_message_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/message.vue */ "./resources/assets/js/components/message.vue");
/* harmony import */ var _components_formButton_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/formButton.vue */ "./resources/assets/js/components/formButton.vue");
/* harmony import */ var _components_formInfo_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/formInfo.vue */ "./resources/assets/js/components/formInfo.vue");
/* harmony import */ var vue_cleave_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue-cleave-component */ "./node_modules/vue-cleave-component/dist/vue-cleave.min.js");
/* harmony import */ var vue_cleave_component__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(vue_cleave_component__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_datatable_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/datatable.vue */ "./resources/assets/js/components/datatable.vue");
/* harmony import */ var _components_datePicker_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/datePicker.vue */ "./resources/assets/js/components/datePicker.vue");
/* harmony import */ var _components_checkValue_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/checkValue.vue */ "./resources/assets/js/components/checkValue.vue");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    pageHeader: _components_pageHeader_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    appModal: _components_modal__WEBPACK_IMPORTED_MODULE_5__["default"],
    message: _components_message_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    formButton: _components_formButton_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    formInfo: _components_formInfo_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    Cleave: vue_cleave_component__WEBPACK_IMPORTED_MODULE_9___default.a,
    dataTable: _components_datatable_vue__WEBPACK_IMPORTED_MODULE_10__["default"],
    infoIcon: _components_infoIcon_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    wajibBadge: _components_wajibBadge_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    DatePicker: _components_datePicker_vue__WEBPACK_IMPORTED_MODULE_11__["default"],
    checkValue: _components_checkValue_vue__WEBPACK_IMPORTED_MODULE_12__["default"]
  },
  data: function data() {
    return {
      title: 'Tambah Setoran Solidaritas Jalinan',
      titleDesc: 'Menambah iuran Jalinan baru',
      titleIcon: 'icon-plus3',
      level: 2,
      level2Title: 'Setoran Solidaritas Jalinan',
      kelas: 'jalinanIuran',
      sasaran: [],
      tempatData: '',
      idCu: '',
      periodeBulan: '',
      periodeTahun: '',
      itemTahun: [],
      tabName: 'iuran',
      cleaveOption: {
        date: {
          date: true,
          datePattern: ['Y', 'm', 'd'],
          delimiter: '-'
        },
        year: {
          date: true,
          datePattern: ['Y']
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
      anggotaMasukData: [],
      cancelState: 'methods',
      state: '',
      modalShow: false,
      modalState: '',
      modalTitle: '',
      modalColor: '',
      modalContent: '',
      modalSize: '',
      submited: false
    };
  },
  created: function created() {
    this.formStat == '';
    this.anggotaDataStat == '';

    if (this.currentUser.id_cu != 0) {
      this.changeCU(this.currentUser.id_cu);
    } else {
      if (this.currentUser.id_pus !== undefined) {
        this.fetchCU();
      }
    }

    this.generateYear();
  },
  watch: {
    anggotaDataStat: function anggotaDataStat(value) {
      if (value == 'success') {
        this.anggotaData.forEach(function (column) {});
      }
    },
    anggotaKeluarDataStat: function anggotaKeluarDataStat(value) {
      if (value == 'success') {}
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
      this.$store.dispatch(this.kelas + '/edit', this.$route.params.id);
    },
    fetchCU: function fetchCU() {
      if (this.modelCuStat != 'success') {
        this.$store.dispatch('cu/getHeader');
      }
    },
    save: function save() {
      var _this = this;

      this.form.id_cu = this.idCu;
      this.state = '';
      this.$validator.validateAll('form').then(function (result) {
        if (result) {
          if (_this.$route.meta.mode == 'edit') {
            _this.$store.dispatch(_this.kelas + '/update', [_this.$route.params.id, _this.form]);
          } else {
            _this.$store.dispatch(_this.kelas + '/store', _this.form);
          }

          _this.submited = false;
        } else {
          window.scrollTo(0, 0);
          _this.submited = true;
        }
      });
    },
    back: function back() {
      this.$router.push({
        name: this.kelas
      });
    },
    changeTab: function changeTab(value) {
      this.tabName = value;
    },
    selectedRow: function selectedRow(item, index) {
      this.selectedItemCalon = item;
      this.selectedItemCalon.index = index;
    },
    selectedRow2: function selectedRow2(item, index) {
      this.selectedItemSuara = item;
      this.selectedItemSuara.index = index;
    },
    modalOpen: function modalOpen(state, isMobile, itemMobile) {
      this.modalShow = true;
      this.state = state;

      if (isMobile) {
        this.selectedItemCalon = itemMobile;
      }

      if (state == 'hapusCalon') {
        this.modalState = 'confirm-tutup';
        this.modalColor = '';
        this.modalTitle = 'Hapus Calon' + this.selectedItemCalon.name + ' ?';
        this.modalButton = 'Iya, Hapus';
        this.modalSize = '';
      } else if (state == 'ubahCalon') {
        this.modalState = 'normal1';
        this.modalColor = 'bg-primary';
        this.modalTitle = 'Ubah Calon';
        this.modalButton = 'Ok';
        this.modalSize = 'modal-lg';
        this.formCalonMode = 'edit';
      } else if (state == 'tambahCalon') {
        this.modalState = 'normal1';
        this.modalColor = 'bg-primary';
        this.modalTitle = 'Tambah Calon';
        this.modalButton = 'Ok';
        this.modalSize = 'modal-lg';
        this.formCalonMode = 'create';
      }
    },
    modalConfirmOk: function modalConfirmOk() {
      this.modalShow = false;

      if (this.state == 'hapusCalon') {
        lodash__WEBPACK_IMPORTED_MODULE_1___default.a.remove(this.itemDataCalon, {
          index: this.selectedItemCalon.index
        });

        this.selectedItemCalon = {};
      }
    },
    modalTutup: function modalTutup() {
      if (this.updateStat == 'success' && this.state == '') {
        this.$store.dispatch(this.kelas + '/resetUpdateStat');
        this.back();
      }

      this.modalShow = false;
    },
    modalBackgroundClick: function modalBackgroundClick() {
      if (this.modalState === 'success') {
        this.modalTutup;
      } else if (this.modalState === 'loading') {// do nothing
      } else {
        this.modalShow = false;
      }
    },
    momentYear: function momentYear() {
      return moment().year();
    },
    generateYear: function generateYear() {
      var years = function years(back) {
        var year = new Date().getFullYear();
        return Array.from({
          length: back
        }, function (v, i) {
          return year - back + i + 1;
        });
      };

      this.itemTahun = years(5);
    }
  },
  computed: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('auth', {
    currentUser: 'currentUser'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('cu', {
    modelCu: 'headerDataS',
    modelCuStat: 'headerDataStatS'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('jalinanIuran', {
    form: 'data',
    produkData: 'dataS',
    formStat: 'dataStat',
    rules: 'rules',
    options: 'options',
    updateResponse: 'update',
    updateStat: 'updateStat'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('anggotaCu', {
    anggotaData: 'dataS',
    anggotaDataStat: 'dataStatS',
    anggotaKeluarData: 'dataS2',
    anggotaKeluarDataStat: 'dataStatS2'
  }))
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/jalinanIuran/form.vue?vue&type=template&id=1bd85044&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/jalinanIuran/form.vue?vue&type=template&id=1bd85044& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
          level: _vm.level,
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
                      title: "Oops terjadi kesalahan",
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
                        this.currentUser.id_cu == 0
                          ? _c("div", { staticClass: "col-sm-4" }, [
                              _c("div", { staticClass: "input-group" }, [
                                _vm._m(0),
                                _vm._v(" "),
                                _c(
                                  "select",
                                  {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.idCu,
                                        expression: "idCu",
                                      },
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      name: "idCu",
                                      "data-width": "100%",
                                      disabled: _vm.modelCuStat === "loading",
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
                                        _vm.idCu = $event.target.multiple
                                          ? $$selectedVal
                                          : $$selectedVal[0]
                                      },
                                    },
                                  },
                                  [
                                    _c(
                                      "option",
                                      { attrs: { disabled: "", value: "" } },
                                      [_vm._v("Silahkan pilih data")]
                                    ),
                                    _vm._v(" "),
                                    _vm._t("default"),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      { attrs: { disabled: "", value: "" } },
                                      [_vm._v("----------------")]
                                    ),
                                    _vm._v(" "),
                                    _vm._l(_vm.modelCu, function (cu, index) {
                                      return _c(
                                        "option",
                                        {
                                          key: index,
                                          domProps: { value: cu.id },
                                        },
                                        [_vm._v(_vm._s(cu.name))]
                                      )
                                    }),
                                  ],
                                  2
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "input-group-append" },
                                  [
                                    _c(
                                      "button",
                                      {
                                        staticClass: "btn btn-light",
                                        attrs: {
                                          disabled:
                                            _vm.modelCuStat === "loading",
                                        },
                                        on: { click: _vm.fetchCU },
                                      },
                                      [
                                        _c("i", {
                                          staticClass: "icon-sync",
                                          class: {
                                            spinner:
                                              _vm.modelCuStat === "loading",
                                          },
                                        }),
                                      ]
                                    ),
                                  ]
                                ),
                              ]),
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            class: {
                              "col-sm-6": _vm.currentUser.id_cu == 0,
                              "col-sm-12": _vm.currentUser.id_cu != 0,
                            },
                          },
                          [
                            _c("div", { staticClass: "row" }, [
                              _c("div", { staticClass: "col-6" }, [
                                _c("div", { staticClass: "input-group" }, [
                                  _vm._m(1),
                                  _vm._v(" "),
                                  _c(
                                    "select",
                                    {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.periodeBulan,
                                          expression: "periodeBulan",
                                        },
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        name: "periodeBulan",
                                        "data-width": "100%",
                                        disabled: _vm.idCu == "",
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
                                          _vm.periodeBulan = $event.target
                                            .multiple
                                            ? $$selectedVal
                                            : $$selectedVal[0]
                                        },
                                      },
                                    },
                                    [
                                      _c(
                                        "option",
                                        { attrs: { disabled: "", value: "" } },
                                        [_vm._v("Bulan")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "option",
                                        { attrs: { disabled: "", value: "" } },
                                        [_vm._v("----------------")]
                                      ),
                                      _vm._v(" "),
                                      _c("option", { attrs: { value: "1" } }, [
                                        _vm._v("1"),
                                      ]),
                                      _vm._v(" "),
                                      _c("option", { attrs: { value: "2" } }, [
                                        _vm._v("2"),
                                      ]),
                                      _vm._v(" "),
                                      _c("option", { attrs: { value: "3" } }, [
                                        _vm._v("3"),
                                      ]),
                                      _vm._v(" "),
                                      _c("option", { attrs: { value: "4" } }, [
                                        _vm._v("4"),
                                      ]),
                                      _vm._v(" "),
                                      _c("option", { attrs: { value: "5" } }, [
                                        _vm._v("5"),
                                      ]),
                                      _vm._v(" "),
                                      _c("option", { attrs: { value: "6" } }, [
                                        _vm._v("6"),
                                      ]),
                                      _vm._v(" "),
                                      _c("option", { attrs: { value: "7" } }, [
                                        _vm._v("7"),
                                      ]),
                                      _vm._v(" "),
                                      _c("option", { attrs: { value: "8" } }, [
                                        _vm._v("8"),
                                      ]),
                                      _vm._v(" "),
                                      _c("option", { attrs: { value: "9" } }, [
                                        _vm._v("9"),
                                      ]),
                                      _vm._v(" "),
                                      _c("option", { attrs: { value: "10" } }, [
                                        _vm._v("10"),
                                      ]),
                                      _vm._v(" "),
                                      _c("option", { attrs: { value: "11" } }, [
                                        _vm._v("11"),
                                      ]),
                                      _vm._v(" "),
                                      _c("option", { attrs: { value: "12" } }, [
                                        _vm._v("12"),
                                      ]),
                                    ]
                                  ),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-6" }, [
                                _c("div", { staticClass: "input-group" }, [
                                  _vm._m(2),
                                  _vm._v(" "),
                                  _c(
                                    "select",
                                    {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.periodeTahun,
                                          expression: "periodeTahun",
                                        },
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        name: "periodeTahun",
                                        "data-width": "100%",
                                        disabled: _vm.periodeBulan == "",
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
                                          _vm.periodeTahun = $event.target
                                            .multiple
                                            ? $$selectedVal
                                            : $$selectedVal[0]
                                        },
                                      },
                                    },
                                    [
                                      _c(
                                        "option",
                                        { attrs: { disabled: "", value: "" } },
                                        [_vm._v("Tahun")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "option",
                                        { attrs: { disabled: "", value: "" } },
                                        [_vm._v("----------------")]
                                      ),
                                      _vm._v(" "),
                                      _vm._l(
                                        _vm.itemTahun,
                                        function (y, index) {
                                          return _c(
                                            "option",
                                            {
                                              key: index,
                                              domProps: { value: y },
                                            },
                                            [_vm._v(_vm._s(y))]
                                          )
                                        }
                                      ),
                                    ],
                                    2
                                  ),
                                ]),
                              ]),
                            ]),
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-2" }, [
                          _vm.formStat != "loading" &&
                          _vm.anggotaDataStat != "loading"
                            ? _c(
                                "button",
                                {
                                  staticClass:
                                    "btn btn-light btn-icon btn-block",
                                  attrs: {
                                    type: "button",
                                    disabled: _vm.periodeTahun == "",
                                  },
                                  on: {
                                    click: function ($event) {
                                      $event.preventDefault()
                                      return _vm.fetch()
                                    },
                                  },
                                },
                                [
                                  _c("i", { staticClass: "icon-folder-open3" }),
                                  _vm._v("  Buat\n\t\t\t\t\t\t\t\t\t"),
                                ]
                              )
                            : _c(
                                "button",
                                {
                                  staticClass:
                                    "btn btn-light btn-icon btn-block",
                                  attrs: { type: "button" },
                                },
                                [_c("i", { staticClass: "icon-sync spinner" })]
                              ),
                        ]),
                      ]),
                    ]),
                  ]),
                  _vm._v(" "),
                  _vm.formStat == "success"
                    ? _c(
                        "div",
                        [
                          _c("div", { staticClass: "card" }, [
                            _c("div", { staticClass: "nav-tabs-responsive" }, [
                              _c(
                                "ul",
                                {
                                  staticClass:
                                    "nav nav-tabs nav-tabs-solid  bg-light mb-0",
                                },
                                [
                                  _c("li", { staticClass: "nav-item" }, [
                                    _c(
                                      "a",
                                      {
                                        staticClass: "nav-link",
                                        class: {
                                          active: _vm.tabName == "iuran",
                                        },
                                        attrs: { href: "#" },
                                        on: {
                                          click: function ($event) {
                                            $event.preventDefault()
                                            return _vm.changeTab("iuran")
                                          },
                                        },
                                      },
                                      [
                                        _c("i", {
                                          staticClass: "icon-menu7 mr-2",
                                        }),
                                        _vm._v(
                                          "\n\t\t\t\t\t\t\t\t\t\tIuran\n\t\t\t\t\t\t\t\t\t"
                                        ),
                                      ]
                                    ),
                                  ]),
                                  _vm._v(" "),
                                  _c("li", { staticClass: "nav-item" }, [
                                    _c(
                                      "a",
                                      {
                                        staticClass: "nav-link",
                                        class: {
                                          active: _vm.tabName == "masuk",
                                        },
                                        attrs: { href: "#" },
                                        on: {
                                          click: function ($event) {
                                            $event.preventDefault()
                                            return _vm.changeTab("masuk")
                                          },
                                        },
                                      },
                                      [
                                        _c("i", {
                                          staticClass: "icon-equalizer mr-2",
                                        }),
                                        _vm._v(
                                          "\n\t\t\t\t\t\t\t\t\t\tAnggota Masuk\n\t\t\t\t\t\t\t\t\t"
                                        ),
                                      ]
                                    ),
                                  ]),
                                  _vm._v(" "),
                                  _c("li", { staticClass: "nav-item" }, [
                                    _c(
                                      "a",
                                      {
                                        staticClass: "nav-link",
                                        class: {
                                          active: _vm.tabName == "keluar",
                                        },
                                        attrs: { href: "#" },
                                        on: {
                                          click: function ($event) {
                                            $event.preventDefault()
                                            return _vm.changeTab("keluar")
                                          },
                                        },
                                      },
                                      [
                                        _c("i", {
                                          staticClass: "icon-equalizer mr-2",
                                        }),
                                        _vm._v(
                                          "\n\t\t\t\t\t\t\t\t\t\tAnggota Keluar\n\t\t\t\t\t\t\t\t\t"
                                        ),
                                      ]
                                    ),
                                  ]),
                                  _vm._v(" "),
                                  _c("li", { staticClass: "nav-item" }, [
                                    _c(
                                      "a",
                                      {
                                        staticClass: "nav-link",
                                        class: {
                                          active: _vm.tabName == "simp5",
                                        },
                                        attrs: { href: "#" },
                                        on: {
                                          click: function ($event) {
                                            $event.preventDefault()
                                            return _vm.changeTab("simp5")
                                          },
                                        },
                                      },
                                      [
                                        _c("i", {
                                          staticClass: "icon-equalizer mr-2",
                                        }),
                                        _vm._v(
                                          "\n\t\t\t\t\t\t\t\t\t\tSIMP > 5JT\n\t\t\t\t\t\t\t\t\t"
                                        ),
                                      ]
                                    ),
                                  ]),
                                  _vm._v(" "),
                                  _c("li", { staticClass: "nav-item" }, [
                                    _c(
                                      "a",
                                      {
                                        staticClass: "nav-link",
                                        class: {
                                          active: _vm.tabName == "simp10",
                                        },
                                        attrs: { href: "#" },
                                        on: {
                                          click: function ($event) {
                                            $event.preventDefault()
                                            return _vm.changeTab("simp10")
                                          },
                                        },
                                      },
                                      [
                                        _c("i", {
                                          staticClass: "icon-equalizer mr-2",
                                        }),
                                        _vm._v(
                                          "\n\t\t\t\t\t\t\t\t\t\tSIMP > 10JT | 60 S.d. 70 Thn\n\t\t\t\t\t\t\t\t\t"
                                        ),
                                      ]
                                    ),
                                  ]),
                                  _vm._v(" "),
                                  _c("li", { staticClass: "nav-item" }, [
                                    _c(
                                      "a",
                                      {
                                        staticClass: "nav-link",
                                        class: {
                                          active: _vm.tabName == "simp701",
                                        },
                                        attrs: { href: "#" },
                                        on: {
                                          click: function ($event) {
                                            $event.preventDefault()
                                            return _vm.changeTab("simp701")
                                          },
                                        },
                                      },
                                      [
                                        _c("i", {
                                          staticClass: "icon-equalizer mr-2",
                                        }),
                                        _vm._v(
                                          "\n\t\t\t\t\t\t\t\t\t\t> 70 Thn | Masuk < 60 Thn\n\t\t\t\t\t\t\t\t\t"
                                        ),
                                      ]
                                    ),
                                  ]),
                                  _vm._v(" "),
                                  _c("li", { staticClass: "nav-item" }, [
                                    _c(
                                      "a",
                                      {
                                        staticClass: "nav-link",
                                        class: {
                                          active: _vm.tabName == "simp702",
                                        },
                                        attrs: { href: "#" },
                                        on: {
                                          click: function ($event) {
                                            $event.preventDefault()
                                            return _vm.changeTab("simp702")
                                          },
                                        },
                                      },
                                      [
                                        _c("i", {
                                          staticClass: "icon-equalizer mr-2",
                                        }),
                                        _vm._v(
                                          "\n\t\t\t\t\t\t\t\t\t\t> 70 Thn | Masuk > 60 Thn\n\t\t\t\t\t\t\t\t\t"
                                        ),
                                      ]
                                    ),
                                  ]),
                                  _vm._v(" "),
                                  _c("li", { staticClass: "nav-item" }, [
                                    _c(
                                      "a",
                                      {
                                        staticClass: "nav-link",
                                        class: {
                                          active: _vm.tabName == "simp703",
                                        },
                                        attrs: { href: "#" },
                                        on: {
                                          click: function ($event) {
                                            $event.preventDefault()
                                            return _vm.changeTab("simp703")
                                          },
                                        },
                                      },
                                      [
                                        _c("i", {
                                          staticClass: "icon-equalizer mr-2",
                                        }),
                                        _vm._v(
                                          "\n\t\t\t\t\t\t\t\t\t\t> 70 Thn | Masuk > 70 Thn\n\t\t\t\t\t\t\t\t\t"
                                        ),
                                      ]
                                    ),
                                  ]),
                                ]
                              ),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c(
                            "transition",
                            {
                              attrs: {
                                "enter-active-class": "animated fadeIn",
                                mode: "out-in",
                              },
                            },
                            [
                              _c(
                                "div",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: _vm.tabName == "iuran",
                                      expression: "tabName == 'iuran'",
                                    },
                                  ],
                                },
                                [
                                  _c("div", { staticClass: "row" }, [
                                    _c("div", { staticClass: "col-lg-6" }, [
                                      _c("div", { staticClass: "card" }, [
                                        _c(
                                          "div",
                                          {
                                            staticClass: "card-header bg-white",
                                          },
                                          [
                                            _c(
                                              "h5",
                                              { staticClass: "card-title" },
                                              [
                                                _vm._v(
                                                  "Santunan Solidaritas (TUNAS)"
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "card-body" },
                                          [
                                            _c("div", { staticClass: "card" }, [
                                              _c(
                                                "div",
                                                { staticClass: "card-header" },
                                                [
                                                  _c("b", [
                                                    _vm._v(
                                                      "A. Simpanan yang disolidaritaskan"
                                                    ),
                                                  ]),
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "table-responsive",
                                                },
                                                [
                                                  _c(
                                                    "table",
                                                    { staticClass: "table" },
                                                    [
                                                      _c(
                                                        "tbody",
                                                        [
                                                          _vm._l(
                                                            _vm.form.produk,
                                                            function (
                                                              produk,
                                                              index
                                                            ) {
                                                              return produk.tipe ==
                                                                "Simpanan Pokok" ||
                                                                produk.tipe ==
                                                                  "Simpanan Wajib" ||
                                                                produk.tipe ==
                                                                  "Simpanan Non Saham"
                                                                ? _c("tr", [
                                                                    _c("th", [
                                                                      _vm._v(
                                                                        _vm._s(
                                                                          produk.name
                                                                        )
                                                                      ),
                                                                    ]),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "td",
                                                                      {
                                                                        staticClass:
                                                                          "text-right",
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "check-value",
                                                                          {
                                                                            attrs:
                                                                              {
                                                                                value:
                                                                                  produk.saldo,
                                                                                valueType:
                                                                                  "currency",
                                                                              },
                                                                          }
                                                                        ),
                                                                      ],
                                                                      1
                                                                    ),
                                                                  ])
                                                                : _vm._e()
                                                            }
                                                          ),
                                                          _vm._v(" "),
                                                          _c("tr", [
                                                            _c("th", [
                                                              _vm._v(
                                                                "Jumlah Simpanan yang disolidaritaskan"
                                                              ),
                                                            ]),
                                                            _vm._v(" "),
                                                            _c("td", {
                                                              staticClass:
                                                                "text-right",
                                                            }),
                                                          ]),
                                                        ],
                                                        2
                                                      ),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                            ]),
                                            _vm._v(" "),
                                            _c("div", { staticClass: "card" }, [
                                              _c(
                                                "div",
                                                { staticClass: "card-header" },
                                                [
                                                  _c("b", [
                                                    _vm._v(
                                                      "B. Simpanan sebagai pengurang"
                                                    ),
                                                  ]),
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "table-responsive",
                                                },
                                                [
                                                  _c(
                                                    "table",
                                                    { staticClass: "table" },
                                                    [
                                                      _c("tbody", [
                                                        _c("tr", [
                                                          _c("th", [
                                                            _vm._v(
                                                              "1. Simpanan usia 0 s.d 1 thn diatas plafon (5.000.000)"
                                                            ),
                                                          ]),
                                                          _vm._v(" "),
                                                          _c(
                                                            "td",
                                                            {
                                                              staticClass:
                                                                "text-right",
                                                            },
                                                            [
                                                              _c(
                                                                "check-value",
                                                                {
                                                                  attrs: {
                                                                    value:
                                                                      _vm.form
                                                                        .total_sheet_3,
                                                                    valueType:
                                                                      "currency",
                                                                  },
                                                                }
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("tr", [
                                                          _c("th", [
                                                            _vm._v(
                                                              "2. Simpanan usia > 1 s.d 70 thn diatas plafon (50.000.000)"
                                                            ),
                                                          ]),
                                                          _vm._v(" "),
                                                          _c(
                                                            "td",
                                                            {
                                                              staticClass:
                                                                "text-right",
                                                            },
                                                            [
                                                              _c(
                                                                "check-value",
                                                                {
                                                                  attrs: {
                                                                    value:
                                                                      _vm.form
                                                                        .total_sheet_4,
                                                                    valueType:
                                                                      "currency",
                                                                  },
                                                                }
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("tr", [
                                                          _c("th", [
                                                            _vm._v(
                                                              "3. Simpanan usia masuk 60 s.d 70 thn diatas plafon (10.000.000)"
                                                            ),
                                                          ]),
                                                          _vm._v(" "),
                                                          _c(
                                                            "td",
                                                            {
                                                              staticClass:
                                                                "text-right",
                                                            },
                                                            [
                                                              _c(
                                                                "check-value",
                                                                {
                                                                  attrs: {
                                                                    value:
                                                                      _vm.form
                                                                        .total_sheet_5,
                                                                    valueType:
                                                                      "currency",
                                                                  },
                                                                }
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("tr", [
                                                          _c("th", [
                                                            _vm._v(
                                                              "4. Pertambahan simpanan usia diatas  70 thn - yang menjadi anggota CU pada usia di bawah 60 tahun (Maks. 50 juta)"
                                                            ),
                                                          ]),
                                                          _vm._v(" "),
                                                          _c(
                                                            "td",
                                                            {
                                                              staticClass:
                                                                "text-right",
                                                            },
                                                            [
                                                              _c(
                                                                "check-value",
                                                                {
                                                                  attrs: {
                                                                    value:
                                                                      _vm.form
                                                                        .total_sheet_6,
                                                                    valueType:
                                                                      "currency",
                                                                  },
                                                                }
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("tr", [
                                                          _c("th", [
                                                            _vm._v(
                                                              "5. Pertambahan simpanan usia diatas  70 thn - yang menjadi anggota CU pada usia 60 s.d 70 tahun (Maks. 10 juta)"
                                                            ),
                                                          ]),
                                                          _vm._v(" "),
                                                          _c(
                                                            "td",
                                                            {
                                                              staticClass:
                                                                "text-right",
                                                            },
                                                            [
                                                              _c(
                                                                "check-value",
                                                                {
                                                                  attrs: {
                                                                    value:
                                                                      _vm.form
                                                                        .total_sheet_7,
                                                                    valueType:
                                                                      "currency",
                                                                  },
                                                                }
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("tr", [
                                                          _c("th", [
                                                            _vm._v(
                                                              "6. Pertambahan simpanan usia diatas  70 thn - Anggota masuk usia diatas 70 tahun"
                                                            ),
                                                          ]),
                                                          _vm._v(" "),
                                                          _c(
                                                            "td",
                                                            {
                                                              staticClass:
                                                                "text-right",
                                                            },
                                                            [
                                                              _c(
                                                                "check-value",
                                                                {
                                                                  attrs: {
                                                                    value:
                                                                      _vm.form
                                                                        .total_sheet_8,
                                                                    valueType:
                                                                      "currency",
                                                                  },
                                                                }
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("tr", [
                                                          _c("th", [
                                                            _vm._v(
                                                              "7. Simpanan Kapitalisasi anggota baru  < 30 hari sejak menjadi anggota"
                                                            ),
                                                          ]),
                                                          _vm._v(" "),
                                                          _c(
                                                            "td",
                                                            {
                                                              staticClass:
                                                                "text-right",
                                                            },
                                                            [
                                                              _c(
                                                                "check-value",
                                                                {
                                                                  attrs: {
                                                                    value:
                                                                      _vm.form
                                                                        .total_sheet_9,
                                                                    valueType:
                                                                      "currency",
                                                                  },
                                                                }
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("tr", [
                                                          _c("th", [
                                                            _vm._v(
                                                              "8. Simpanan kapitalisasi  yang piutangnya tidak pernah diangsur 3 bln berturut-turut atau lebih"
                                                            ),
                                                          ]),
                                                          _vm._v(" "),
                                                          _c(
                                                            "td",
                                                            {
                                                              staticClass:
                                                                "text-right",
                                                            },
                                                            [
                                                              _c(
                                                                "check-value",
                                                                {
                                                                  attrs: {
                                                                    value:
                                                                      _vm.form
                                                                        .total_sheet_10,
                                                                    valueType:
                                                                      "currency",
                                                                  },
                                                                }
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("tr", [
                                                          _c("th", [
                                                            _vm._v(
                                                              "9. Simpanan lembaga yang diatasnamakan lembaga atau perorangan"
                                                            ),
                                                          ]),
                                                          _vm._v(" "),
                                                          _c(
                                                            "td",
                                                            {
                                                              staticClass:
                                                                "text-right",
                                                            },
                                                            [
                                                              _c(
                                                                "check-value",
                                                                {
                                                                  attrs: {
                                                                    value:
                                                                      _vm.form
                                                                        .total_sheet_11,
                                                                    valueType:
                                                                      "currency",
                                                                  },
                                                                }
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("tr", [
                                                          _c("th", [
                                                            _vm._v(
                                                              "Jumlah Simpanan sebagai pengurang"
                                                            ),
                                                          ]),
                                                          _vm._v(" "),
                                                          _c(
                                                            "td",
                                                            {
                                                              staticClass:
                                                                "text-right",
                                                            },
                                                            [
                                                              _c(
                                                                "check-value",
                                                                {
                                                                  attrs: {
                                                                    value:
                                                                      _vm.form
                                                                        .total_sheet_3,
                                                                    valueType:
                                                                      "currency",
                                                                  },
                                                                }
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                        ]),
                                                      ]),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                            ]),
                                            _vm._v(" "),
                                            _c("div", { staticClass: "card" }, [
                                              _c(
                                                "div",
                                                { staticClass: "card-header" },
                                                [
                                                  _c("b", [
                                                    _vm._v(
                                                      "C. Simpanan Yang Disolidaritaskan"
                                                    ),
                                                  ]),
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "table-responsive",
                                                },
                                                [
                                                  _c(
                                                    "table",
                                                    { staticClass: "table" },
                                                    [
                                                      _c("tbody", [
                                                        _c("tr", [
                                                          _c("th", [
                                                            _vm._v("A - B"),
                                                          ]),
                                                          _vm._v(" "),
                                                          _c(
                                                            "td",
                                                            {
                                                              staticClass:
                                                                "text-right",
                                                            },
                                                            [_vm._v("0")]
                                                          ),
                                                        ]),
                                                      ]),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                            ]),
                                            _vm._v(" "),
                                            _c("div", { staticClass: "card" }, [
                                              _c(
                                                "div",
                                                { staticClass: "card-header" },
                                                [_c("b", [_vm._v("D. Iuran")])]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "table-responsive",
                                                },
                                                [
                                                  _c(
                                                    "table",
                                                    { staticClass: "table" },
                                                    [
                                                      _c("tbody", [
                                                        _c("tr", [
                                                          _c("th", [
                                                            _vm._v(
                                                              "Setoran Solidaritas Tunas"
                                                            ),
                                                          ]),
                                                          _vm._v(" "),
                                                          _c(
                                                            "td",
                                                            {
                                                              staticClass:
                                                                "text-right",
                                                            },
                                                            [_vm._v("0")]
                                                          ),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("tr", [
                                                          _c("th", [
                                                            _vm._v(
                                                              "Pembulatan Setoran Solidaritas Tunas"
                                                            ),
                                                          ]),
                                                          _vm._v(" "),
                                                          _c(
                                                            "td",
                                                            {
                                                              staticClass:
                                                                "text-right",
                                                            },
                                                            [_vm._v("0")]
                                                          ),
                                                        ]),
                                                      ]),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                            ]),
                                          ]
                                        ),
                                      ]),
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-lg-6" }, [
                                      _c("div", { staticClass: "card" }, [
                                        _c(
                                          "div",
                                          {
                                            staticClass: "card-header bg-white",
                                          },
                                          [
                                            _c(
                                              "h5",
                                              { staticClass: "card-title" },
                                              [
                                                _vm._v(
                                                  "Perlindungan Piutang Anggota (LINTANG)"
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "card-body" },
                                          [
                                            _c("div", { staticClass: "card" }, [
                                              _c(
                                                "div",
                                                { staticClass: "card-header" },
                                                [
                                                  _c("b", [
                                                    _vm._v(
                                                      "A. Piutang yang disolidaritaskan"
                                                    ),
                                                  ]),
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "table-responsive",
                                                },
                                                [
                                                  _c(
                                                    "table",
                                                    { staticClass: "table" },
                                                    [
                                                      _c(
                                                        "tbody",
                                                        [
                                                          _vm._l(
                                                            _vm.form.produk,
                                                            function (
                                                              produk,
                                                              index
                                                            ) {
                                                              return produk.tipe ==
                                                                "Pinjaman Kapitalisasi" ||
                                                                produk.tipe ==
                                                                  "Pinjaman Umum" ||
                                                                produk.tipe ==
                                                                  "Pinjaman Produktif"
                                                                ? _c(
                                                                    "tr",
                                                                    {
                                                                      key: index,
                                                                    },
                                                                    [
                                                                      _c("th", [
                                                                        _vm._v(
                                                                          _vm._s(
                                                                            produk.name
                                                                          )
                                                                        ),
                                                                      ]),
                                                                      _vm._v(
                                                                        " "
                                                                      ),
                                                                      _c(
                                                                        "td",
                                                                        {
                                                                          staticClass:
                                                                            "text-right",
                                                                        },
                                                                        [
                                                                          _c(
                                                                            "check-value",
                                                                            {
                                                                              attrs:
                                                                                {
                                                                                  value:
                                                                                    produk.saldo,
                                                                                  valueType:
                                                                                    "currency",
                                                                                },
                                                                            }
                                                                          ),
                                                                        ],
                                                                        1
                                                                      ),
                                                                    ]
                                                                  )
                                                                : _vm._e()
                                                            }
                                                          ),
                                                          _vm._v(" "),
                                                          _c("tr", [
                                                            _c("th", [
                                                              _vm._v(
                                                                "Jumlah Piutang yang disolidaritaskan"
                                                              ),
                                                            ]),
                                                            _vm._v(" "),
                                                            _c("td", {
                                                              staticClass:
                                                                "text-right",
                                                            }),
                                                          ]),
                                                        ],
                                                        2
                                                      ),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                            ]),
                                            _vm._v(" "),
                                            _c("div", { staticClass: "card" }, [
                                              _c(
                                                "div",
                                                { staticClass: "card-header" },
                                                [
                                                  _c("b", [
                                                    _vm._v(
                                                      "B. Piutang sebagai pengurang"
                                                    ),
                                                  ]),
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "table-responsive",
                                                },
                                                [
                                                  _c(
                                                    "table",
                                                    { staticClass: "table" },
                                                    [
                                                      _c("tbody", [
                                                        _c("tr", [
                                                          _c("th", [
                                                            _vm._v(
                                                              "1. Saldo piutang cair usia dewasa s.d 60 thn diatas plafon (150.000.000)"
                                                            ),
                                                          ]),
                                                          _vm._v(" "),
                                                          _c(
                                                            "td",
                                                            {
                                                              staticClass:
                                                                "text-right",
                                                            },
                                                            [
                                                              _c(
                                                                "check-value",
                                                                {
                                                                  attrs: {
                                                                    value:
                                                                      _vm.form
                                                                        .total_sheet_12,
                                                                    valueType:
                                                                      "currency",
                                                                  },
                                                                }
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("tr", [
                                                          _c("th", [
                                                            _vm._v(
                                                              "2. Saldo piutang cair diatas usia 60 s.d 70 thn diatas plafon (50.000.000)"
                                                            ),
                                                          ]),
                                                          _vm._v(" "),
                                                          _c(
                                                            "td",
                                                            {
                                                              staticClass:
                                                                "text-right",
                                                            },
                                                            [
                                                              _c(
                                                                "check-value",
                                                                {
                                                                  attrs: {
                                                                    value:
                                                                      _vm.form
                                                                        .total_sheet_13,
                                                                    valueType:
                                                                      "currency",
                                                                  },
                                                                }
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("tr", [
                                                          _c("th", [
                                                            _vm._v(
                                                              "3. Saldo piutang kapitalisasi diatas plafon (25.000.000)"
                                                            ),
                                                          ]),
                                                          _vm._v(" "),
                                                          _c(
                                                            "td",
                                                            {
                                                              staticClass:
                                                                "text-right",
                                                            },
                                                            [
                                                              _c(
                                                                "check-value",
                                                                {
                                                                  attrs: {
                                                                    value:
                                                                      _vm.form
                                                                        .total_sheet_14,
                                                                    valueType:
                                                                      "currency",
                                                                  },
                                                                }
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("tr", [
                                                          _c("th", [
                                                            _vm._v(
                                                              "4. Saldo piutang usia diatas 70 tahun"
                                                            ),
                                                          ]),
                                                          _vm._v(" "),
                                                          _c(
                                                            "td",
                                                            {
                                                              staticClass:
                                                                "text-right",
                                                            },
                                                            [
                                                              _c(
                                                                "check-value",
                                                                {
                                                                  attrs: {
                                                                    value:
                                                                      _vm.form
                                                                        .total_sheet_15,
                                                                    valueType:
                                                                      "currency",
                                                                  },
                                                                }
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("tr", [
                                                          _c("th", [
                                                            _vm._v(
                                                              "5. Saldo piutang macet  lebih dari 6 bulan berturut-turut"
                                                            ),
                                                          ]),
                                                          _vm._v(" "),
                                                          _c(
                                                            "td",
                                                            {
                                                              staticClass:
                                                                "text-right",
                                                            },
                                                            [
                                                              _c(
                                                                "check-value",
                                                                {
                                                                  attrs: {
                                                                    value:
                                                                      _vm.form
                                                                        .total_sheet_16,
                                                                    valueType:
                                                                      "currency",
                                                                  },
                                                                }
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("tr", [
                                                          _c("th", [
                                                            _vm._v(
                                                              "6. Saldo piutang kapitalisasi anggota baru < 30 hari sejak menjadi anggota"
                                                            ),
                                                          ]),
                                                          _vm._v(" "),
                                                          _c(
                                                            "td",
                                                            {
                                                              staticClass:
                                                                "text-right",
                                                            },
                                                            [
                                                              _c(
                                                                "check-value",
                                                                {
                                                                  attrs: {
                                                                    value:
                                                                      _vm.form
                                                                        .total_sheet_17,
                                                                    valueType:
                                                                      "currency",
                                                                  },
                                                                }
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("tr", [
                                                          _c("th", [
                                                            _vm._v(
                                                              "7. Saldo piutang kapitalisasi yang tidak pernah diangsur ≥ 3 bln berturut-turut"
                                                            ),
                                                          ]),
                                                          _vm._v(" "),
                                                          _c(
                                                            "td",
                                                            {
                                                              staticClass:
                                                                "text-right",
                                                            },
                                                            [
                                                              _c(
                                                                "check-value",
                                                                {
                                                                  attrs: {
                                                                    value:
                                                                      _vm.form
                                                                        .total_sheet_18,
                                                                    valueType:
                                                                      "currency",
                                                                  },
                                                                }
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("tr", [
                                                          _c("th", [
                                                            _vm._v(
                                                              "8. Saldo piutang dengan tujuan untuk biaya berobat sendiri"
                                                            ),
                                                          ]),
                                                          _vm._v(" "),
                                                          _c(
                                                            "td",
                                                            {
                                                              staticClass:
                                                                "text-right",
                                                            },
                                                            [
                                                              _c(
                                                                "check-value",
                                                                {
                                                                  attrs: {
                                                                    value:
                                                                      _vm.form
                                                                        .total_sheet_19,
                                                                    valueType:
                                                                      "currency",
                                                                  },
                                                                }
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("tr", [
                                                          _c("th", [
                                                            _vm._v(
                                                              "9. Saldo piutang lembaga atas nama perorangan atau nama lembaga"
                                                            ),
                                                          ]),
                                                          _vm._v(" "),
                                                          _c(
                                                            "td",
                                                            {
                                                              staticClass:
                                                                "text-right",
                                                            },
                                                            [
                                                              _c(
                                                                "check-value",
                                                                {
                                                                  attrs: {
                                                                    value:
                                                                      _vm.form
                                                                        .total_sheet_20,
                                                                    valueType:
                                                                      "currency",
                                                                  },
                                                                }
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("tr", [
                                                          _c("th", [
                                                            _vm._v(
                                                              "10. Saldo piutang produktif  diatas plafon (300.000.000)"
                                                            ),
                                                          ]),
                                                          _vm._v(" "),
                                                          _c(
                                                            "td",
                                                            {
                                                              staticClass:
                                                                "text-right",
                                                            },
                                                            [
                                                              _c(
                                                                "check-value",
                                                                {
                                                                  attrs: {
                                                                    value:
                                                                      _vm.form
                                                                        .total_sheet_21,
                                                                    valueType:
                                                                      "currency",
                                                                  },
                                                                }
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("tr", [
                                                          _c("th", [
                                                            _vm._v(
                                                              "11. Saldo piutang produktif dan piutang lain diatas plafon (300.000.000)"
                                                            ),
                                                          ]),
                                                          _vm._v(" "),
                                                          _c(
                                                            "td",
                                                            {
                                                              staticClass:
                                                                "text-right",
                                                            },
                                                            [
                                                              _c(
                                                                "check-value",
                                                                {
                                                                  attrs: {
                                                                    value:
                                                                      _vm.form
                                                                        .total_sheet_22,
                                                                    valueType:
                                                                      "currency",
                                                                  },
                                                                }
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("tr", [
                                                          _c("th", [
                                                            _vm._v(
                                                              "12. Saldo piutang kapitalisasi yang umur piutang diatas 5 tahun"
                                                            ),
                                                          ]),
                                                          _vm._v(" "),
                                                          _c(
                                                            "td",
                                                            {
                                                              staticClass:
                                                                "text-right",
                                                            },
                                                            [
                                                              _c(
                                                                "check-value",
                                                                {
                                                                  attrs: {
                                                                    value:
                                                                      _vm.form
                                                                        .total_sheet_23,
                                                                    valueType:
                                                                      "currency",
                                                                  },
                                                                }
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("tr", [
                                                          _c("th", [
                                                            _vm._v(
                                                              "13. Saldo piutang selain  kapitalisasi yang umur piutang diatas 15 tahun"
                                                            ),
                                                          ]),
                                                          _vm._v(" "),
                                                          _c(
                                                            "td",
                                                            {
                                                              staticClass:
                                                                "text-right",
                                                            },
                                                            [
                                                              _c(
                                                                "check-value",
                                                                {
                                                                  attrs: {
                                                                    value:
                                                                      _vm.form
                                                                        .total_sheet_24,
                                                                    valueType:
                                                                      "currency",
                                                                  },
                                                                }
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("tr", [
                                                          _c("th", [
                                                            _vm._v(
                                                              "14. Saldo piutang yang angsuran ditarik dari simpanan saham (SP dan SW)"
                                                            ),
                                                          ]),
                                                          _vm._v(" "),
                                                          _c(
                                                            "td",
                                                            {
                                                              staticClass:
                                                                "text-right",
                                                            },
                                                            [
                                                              _c(
                                                                "check-value",
                                                                {
                                                                  attrs: {
                                                                    value:
                                                                      _vm.form
                                                                        .total_sheet_25,
                                                                    valueType:
                                                                      "currency",
                                                                  },
                                                                }
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("tr", [
                                                          _c("th", [
                                                            _vm._v(
                                                              "15. Saldo piutang luar biasa usia < 17 tahun dan belum menikah"
                                                            ),
                                                          ]),
                                                          _vm._v(" "),
                                                          _c(
                                                            "td",
                                                            {
                                                              staticClass:
                                                                "text-right",
                                                            },
                                                            [
                                                              _c(
                                                                "check-value",
                                                                {
                                                                  attrs: {
                                                                    value:
                                                                      _vm.form
                                                                        .total_sheet_26,
                                                                    valueType:
                                                                      "currency",
                                                                  },
                                                                }
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("tr", [
                                                          _c("th", [
                                                            _vm._v(
                                                              "Jumlah Simpanan sebagai pengurang"
                                                            ),
                                                          ]),
                                                          _vm._v(" "),
                                                          _c(
                                                            "td",
                                                            {
                                                              staticClass:
                                                                "text-right",
                                                            },
                                                            [_vm._v("0")]
                                                          ),
                                                        ]),
                                                      ]),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                            ]),
                                            _vm._v(" "),
                                            _c("div", { staticClass: "card" }, [
                                              _c(
                                                "div",
                                                { staticClass: "card-header" },
                                                [
                                                  _c("b", [
                                                    _vm._v(
                                                      "C. Piutang Yang Disolidaritaskan"
                                                    ),
                                                  ]),
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "table-responsive",
                                                },
                                                [
                                                  _c(
                                                    "table",
                                                    { staticClass: "table" },
                                                    [
                                                      _c("tbody", [
                                                        _c("tr", [
                                                          _c("th", [
                                                            _vm._v("A - B"),
                                                          ]),
                                                          _vm._v(" "),
                                                          _c(
                                                            "td",
                                                            {
                                                              staticClass:
                                                                "text-right",
                                                            },
                                                            [_vm._v("0")]
                                                          ),
                                                        ]),
                                                      ]),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                            ]),
                                            _vm._v(" "),
                                            _c("div", { staticClass: "card" }, [
                                              _c(
                                                "div",
                                                { staticClass: "card-header" },
                                                [_c("b", [_vm._v("D. Iuran")])]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "table-responsive",
                                                },
                                                [
                                                  _c(
                                                    "table",
                                                    { staticClass: "table" },
                                                    [
                                                      _c("tbody", [
                                                        _c("tr", [
                                                          _c("th", [
                                                            _vm._v(
                                                              "Setoran Solidaritas Lintang"
                                                            ),
                                                          ]),
                                                          _vm._v(" "),
                                                          _c(
                                                            "td",
                                                            {
                                                              staticClass:
                                                                "text-right",
                                                            },
                                                            [_vm._v("0")]
                                                          ),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("tr", [
                                                          _c("th", [
                                                            _vm._v(
                                                              "Pembulatan Setoran Solidaritas Lintang"
                                                            ),
                                                          ]),
                                                          _vm._v(" "),
                                                          _c(
                                                            "td",
                                                            {
                                                              staticClass:
                                                                "text-right",
                                                            },
                                                            [_vm._v("0")]
                                                          ),
                                                        ]),
                                                      ]),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                            ]),
                                          ]
                                        ),
                                      ]),
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-lg-12" }, [
                                      _c("div", { staticClass: "card" }, [
                                        _c(
                                          "div",
                                          {
                                            staticClass: "card-header bg-white",
                                          },
                                          [
                                            _c(
                                              "h5",
                                              { staticClass: "card-title" },
                                              [_vm._v("Total")]
                                            ),
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "table-responsive" },
                                          [
                                            _c(
                                              "table",
                                              { staticClass: "table" },
                                              [
                                                _c("tbody", [
                                                  _c("tr", [
                                                    _c("th", [
                                                      _vm._v(
                                                        "Jumlah Setoran Solidaritas Jalinan ( TUNAS + LINTANG )"
                                                      ),
                                                    ]),
                                                    _vm._v(" "),
                                                    _c(
                                                      "td",
                                                      {
                                                        staticClass:
                                                          "text-right",
                                                      },
                                                      [_vm._v("0")]
                                                    ),
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("tr", [
                                                    _c("th", [
                                                      _vm._v(
                                                        "Jumlah Setoran Solidaritas Jalinan Yang Dibayarkan"
                                                      ),
                                                    ]),
                                                    _vm._v(" "),
                                                    _c(
                                                      "td",
                                                      {
                                                        staticClass:
                                                          "text-right",
                                                      },
                                                      [_vm._v("0")]
                                                    ),
                                                  ]),
                                                ]),
                                              ]
                                            ),
                                          ]
                                        ),
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
                                          cancelState: _vm.cancelState,
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
                            ]
                          ),
                        ],
                        1
                      )
                    : _vm.formStat == "loading"
                    ? _c("div", [_vm._m(3)])
                    : _c("div", [
                        _c(
                          "div",
                          { staticClass: "card card-body" },
                          [
                            _c("form-button", {
                              attrs: {
                                cancelState: _vm.cancelState,
                                isSingleButton: true,
                              },
                              on: { cancelClick: _vm.back },
                            }),
                          ],
                          1
                        ),
                      ]),
                ]
              ),
            ],
            1
          ),
        ]),
      ]),
      _vm._v(" "),
      _c(
        "app-modal",
        {
          attrs: {
            show: _vm.modalShow,
            state: _vm.modalState,
            title: _vm.modalTitle,
            content: _vm.modalContent,
            size: _vm.modalSize,
            color: _vm.modalColor,
          },
          on: {
            batal: _vm.modalTutup,
            tutup: _vm.modalTutup,
            confirmOk: _vm.modalConfirmOk,
            successOk: _vm.modalTutup,
            failOk: _vm.modalTutup,
            backgroundClick: _vm.modalBackgroundClick,
          },
        },
        [
          _c("template", { slot: "modal-title" }, [
            _vm._v("\n\t\t\t" + _vm._s(_vm.modalTitle) + "\n\t\t"),
          ]),
          _vm._v(" "),
          _c("template", { slot: "modal-body1" }),
        ],
        2
      ),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [_vm._v("Pilih CU")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [_vm._v("Pilih Bulan")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [_vm._v(" Pilih Tahun")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card" }, [
      _c("div", { staticClass: "card-body" }, [
        _c("h4", [_vm._v("Mohon tunggu...")]),
        _vm._v(" "),
        _c("div", { staticClass: "progress" }, [
          _c(
            "div",
            {
              staticClass:
                "progress-bar progress-bar-info progress-bar-striped progress-bar-animated",
              staticStyle: { width: "100%" },
            },
            [_c("span", { staticClass: "sr-only" }, [_vm._v("100% Complete")])]
          ),
        ]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/views/jalinanIuran/form.vue":
/*!*********************************************************!*\
  !*** ./resources/assets/js/views/jalinanIuran/form.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_vue_vue_type_template_id_1bd85044___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.vue?vue&type=template&id=1bd85044& */ "./resources/assets/js/views/jalinanIuran/form.vue?vue&type=template&id=1bd85044&");
/* harmony import */ var _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/jalinanIuran/form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _form_vue_vue_type_template_id_1bd85044___WEBPACK_IMPORTED_MODULE_0__["render"],
  _form_vue_vue_type_template_id_1bd85044___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/jalinanIuran/form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/jalinanIuran/form.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/assets/js/views/jalinanIuran/form.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/jalinanIuran/form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/jalinanIuran/form.vue?vue&type=template&id=1bd85044&":
/*!****************************************************************************************!*\
  !*** ./resources/assets/js/views/jalinanIuran/form.vue?vue&type=template&id=1bd85044& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_1bd85044___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=template&id=1bd85044& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/jalinanIuran/form.vue?vue&type=template&id=1bd85044&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_1bd85044___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_1bd85044___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);