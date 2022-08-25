(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[146],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/kegiatanBKCU/formPeserta.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/kegiatanBKCU/formPeserta.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_infoIcon_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/infoIcon.vue */ "./resources/assets/js/components/infoIcon.vue");
/* harmony import */ var _components_checkValue_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/checkValue.vue */ "./resources/assets/js/components/checkValue.vue");
/* harmony import */ var _components_dataviewer2_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/dataviewer2.vue */ "./resources/assets/js/components/dataviewer2.vue");
/* harmony import */ var _components_message_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/message.vue */ "./resources/assets/js/components/message.vue");
/* harmony import */ var _components_datePicker_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/datePicker.vue */ "./resources/assets/js/components/datePicker.vue");
/* harmony import */ var vue_cleave_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-cleave-component */ "./node_modules/vue-cleave-component/dist/vue-cleave.min.js");
/* harmony import */ var vue_cleave_component__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(vue_cleave_component__WEBPACK_IMPORTED_MODULE_7__);
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








/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['mode', 'selected', 'item', 'tingkat'],
  components: {
    DataViewer: _components_dataviewer2_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    checkValue: _components_checkValue_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    Message: _components_message_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    DatePicker: _components_datePicker_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    Cleave: vue_cleave_component__WEBPACK_IMPORTED_MODULE_7___default.a,
    infoIcon: _components_infoIcon_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      title: '',
      kelas: 'aktivis',
      tingkatArray: [],
      tingkatName: [],
      formPeserta: {
        aktivis_id: '',
        kegiatan_id: '',
        cu_id: '',
        keterangan: '',
        tingkat: '',
        name_nametag: '',
        name_sertifikat: '',
        datang: '',
        pulang: ''
      },
      selectedItem: [],
      query: {
        order_column: "name",
        order_direction: "asc",
        filter_match: "and",
        limit: 5,
        page: 1
      },
      columnData: [{
        title: 'No.'
      }, {
        title: 'Foto'
      }, {
        title: 'Nama',
        name: 'name',
        tipe: 'string',
        sort: true,
        hide: false,
        disable: false,
        filter: true,
        filterDefault: true
      }, {
        title: 'Gender'
      }, {
        title: 'CU',
        disable: false
      }, {
        title: 'Tingkat'
      }, {
        title: 'Jabatan'
      }, {
        title: 'Pendidikan'
      }, {
        title: 'Jurusan'
      }, {
        title: 'Tgl. Lahir'
      }, {
        title: 'Tempat Lahir'
      }, {
        title: 'Tinggi'
      }, {
        title: 'Agama'
      }, {
        title: 'Status Pernikahan'
      }],
      cleaveOption: {
        date: {
          date: true,
          datePattern: ['Y', 'm', 'd'],
          delimiter: '-'
        },
        year: {
          date: true,
          datePattern: ['Y']
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
    if (this.mode == 'edit') {
      this.formPeserta = this.selected;
      this.formPeserta.tingkat = this.selected.aktivis.pekerjaan_aktif.tingkat;
      this.formPeserta.jabatan = this.selected.aktivis.pekerjaan_aktif.name;
      this.formPeserta.cu_id = this.selected.aktivis.pekerjaan_aktif.id_tempat;

      if (this.selected.aktivis.pendidikan_tertinggi) {
        this.formPeserta.pendidikan = this.selected.aktivis.pendidikan_tertinggi.tingkat + ' ' + this.selected.aktivis.pendidikan_tertinggi.name;
      }

      this.formPeserta.status = this.selected.status;
      this.formPeserta.kelamin = this.selected.aktivis.kelamin;
      this.formPeserta.agama = this.selected.aktivis.agama;
      this.formPeserta.tinggi = this.selected.aktivis.tinggi;
      this.formPeserta.tanggal_lahir = this.selected.aktivis.tanggal_lahir;
      this.formPeserta.tempat_lahir = this.selected.aktivis.tempat_lahir;
      this.formPeserta.name = this.selected.aktivis.name;
      this.formPeserta.gambar = this.selected.aktivis.gambar;
      this.formPeserta.jabatan = this.selected.pekerjaan_aktif.name;

      if (this.selected.aktivis.pekerjaan_aktif.tipe == 1) {
        this.formPeserta.lembaga = this.selected.aktivis.pekerjaan_aktif.cu.name;
      } else if (this.selected.aktivis.pekerjaan_aktif.tipe == 2) {
        this.formPeserta.lembaga = this.selected.aktivis.pekerjaan_aktif.lembaga_lain.name;
      } else if (this.selected.aktivis.pekerjaan_aktif.tipe == 3) {
        this.formPeserta.lembaga = "PUSKOPCUINA";
      }
    } else {
      var i;

      for (i = 0; i < this.tingkat.length; i++) {
        this.tingkatArray.push(this.tingkat[i].id);
      }

      for (i = 0; i < this.tingkat.length; i++) {
        this.tingkatName.push(this.tingkat[i].name);
      }

      this.fetch(this.query);
    }
  },
  watch: {
    checkPesertaDataStat: function checkPesertaDataStat(value) {
      if (value == 'success') {
        if (this.checkPesertaData) {
          this.message.show = true;
          this.message.content = "Maaf peserta ini sudah terdaftar di pertemuan ini";
          this.deleteSelected();
        } else {
          this.save();
        }
      }
    }
  },
  methods: {
    fetch: function fetch(params) {
      if (this.currentUser.id_cu == 0) {
        this.$store.dispatch('aktivis/index', [params, 'semua', 'aktif']);
        this.disableColumnCu(false);
      } else {
        this.$store.dispatch('aktivis/indexCu', [params, this.currentUser.id_cu, 'semua', 'aktif']);
        this.disableColumnCu(true);
      }
    },
    disableColumnCu: function disableColumnCu(value) {
      this.columnData[4].disable = value;
    },
    deleteSelected: function deleteSelected() {
      this.formPeserta.aktivis_id = '';
      this.formPeserta.name_nametag = '';
      this.formPeserta.name_sertifikat = '';
      this.formPeserta.datang = '';
      this.formPeserta.pulang = '';
      this.formPeserta.keterangan = '';
      this.selectedItem = [];
    },
    selectedRow: function selectedRow(item) {
      this.selectedItem = item;
      this.formPeserta.tingkat = item.pekerjaan_aktif.tingkat;
      this.formPeserta.name_sertifikat = item.name;

      if (this.tingkatArray.includes(this.formPeserta.tingkat)) {
        this.formPeserta.aktivis_id = item.id;
        this.formPeserta.kegiatan_id = this.item.id;
        this.formPeserta.jabatan = item.pekerjaan_aktif.name;
        this.formPeserta.cu_id = item.pekerjaan_aktif.id_tempat;

        if (item.pendidikan_tertinggi) {
          this.formPeserta.pendidikan = item.pendidikan_tertinggi.tingkat + ' ' + item.pendidikan_tertinggi.name;
        }

        this.formPeserta.status = item.status;
        this.formPeserta.kelamin = item.kelamin;
        this.formPeserta.agama = item.agama;
        this.formPeserta.tinggi = item.tinggi;
        this.formPeserta.tanggal_lahir = item.tanggal_lahir;
        this.formPeserta.tempat_lahir = item.tempat_lahir;
        this.formPeserta.name = item.name;
        this.formPeserta.gambar = item.gambar;
        this.formPeserta.jabatan = item.pekerjaan_aktif.name;

        if (item.pekerjaan_aktif.tipe == 1) {
          this.formPeserta.lembaga = item.pekerjaan_aktif.cu.name;
        } else if (item.pekerjaan_aktif.tipe == 2) {
          this.formPeserta.lembaga = item.pekerjaan_aktif.lembaga_lain.name;
        } else if (item.pekerjaan_aktif.tipe == 3) {
          this.formPeserta.lembaga = "PUSKOPCUINA";
        }

        this.message.show = false;
      } else {
        this.message.show = true;
        this.message.content = "Maaf peserta pertemuan ini harus dari tingkat " + this.tingkatName;
        this.selectedItem = '';
      }
    },
    checkPeserta: function checkPeserta() {
      if (this.mode != 'edit') {
        this.$store.dispatch('kegiatanBKCU/checkPeserta', [this.item.id, this.formPeserta.aktivis_id]);
      } else {
        this.save();
      }
    },
    save: function save() {
      var _this = this;

      this.$validator.validateAll('formPeserta').then(function (result) {
        if (result) {
          if (_this.mode == 'edit') {
            _this.$store.dispatch('kegiatanBKCU/updatePeserta', [_this.formPeserta.id, _this.formPeserta]);
          } else {
            _this.formPeserta.status = _this.item.status;

            _this.$store.dispatch('kegiatanBKCU/storePeserta', [_this.item.tipe, _this.item.id, _this.formPeserta]);
          }
        } else {
          _this.submited = true;
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
  computed: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('auth', {
    currentUser: 'currentUser'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('kegiatanBKCU', {
    checkPesertaData: 'data2',
    checkPesertaDataStat: 'dataStat2'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('aktivis', {
    itemData: 'dataS',
    itemDataStat: 'dataStatS'
  }))
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/kegiatanBKCU/formPeserta.vue?vue&type=template&id=31ba210f&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/kegiatanBKCU/formPeserta.vue?vue&type=template&id=31ba210f& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
        attrs: { "data-vv-scope": "formPeserta" },
        on: {
          submit: function ($event) {
            $event.preventDefault()
            return _vm.checkPeserta.apply(null, arguments)
          },
        },
      },
      [
        _c(
          "div",
          {
            staticClass:
              "alert bg-info text-white alert-styled-left alert-dismissible",
          },
          [
            _c(
              "span",
              { staticClass: "font-weight-semibold" },
              [
                _vm._v(
                  "Sasaran peserta untuk kegiatan ini adalah untuk tingkat: \n\t\t\t"
                ),
                _c("br"),
                _vm._v(" "),
                _vm._l(_vm.tingkat, function (sasaran, index) {
                  return _c(
                    "label",
                    { key: index, staticClass: "badge badge-primary ml-1" },
                    [_vm._v("\n\t\t\t\t" + _vm._s(sasaran.name) + "\n\t\t\t")]
                  )
                }),
              ],
              2
            ),
          ]
        ),
        _vm._v(" "),
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
        _vm.formPeserta.aktivis_id
          ? _c("div", { staticClass: "card" }, [
              _c(
                "div",
                {
                  staticClass:
                    "card-header bg-info text-white header-elements-inline",
                },
                [
                  _c("h6", { staticClass: "card-title" }, [
                    _vm._v(_vm._s(_vm.formPeserta.name)),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "header-elements" }, [
                    _vm.mode == "create"
                      ? _c(
                          "button",
                          {
                            staticClass: "btn btn-danger",
                            attrs: { type: "button" },
                            on: {
                              click: function ($event) {
                                $event.preventDefault()
                                return _vm.deleteSelected.apply(null, arguments)
                              },
                            },
                          },
                          [
                            _c("i", { staticClass: "icon-cross2 mr-2" }),
                            _vm._v(" Batal"),
                          ]
                        )
                      : _vm._e(),
                  ]),
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _c(
                  "div",
                  { staticClass: "media flex-column flex-sm-row mt-0 mb-3" },
                  [
                    _c("div", { staticClass: "mr-sm-3 mb-2 mb-sm-0" }, [
                      _c("div", { staticClass: "card-img-actions" }, [
                        _vm.formPeserta.gambar
                          ? _c("img", {
                              staticClass: "img-fluid img-preview rounded",
                              attrs: {
                                src:
                                  "/images/aktivis/" +
                                  _vm.formPeserta.gambar +
                                  ".jpg",
                              },
                            })
                          : _c("img", {
                              staticClass: "img-fluid img-preview rounded",
                              attrs: { src: "/images/no_image.jpg" },
                            }),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "media-body" }, [
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-sm-6" }, [
                          _c("ul", { staticClass: "list list-unstyled mb-0" }, [
                            _c("li", [
                              _c("b", [_vm._v("Gender:")]),
                              _vm._v(" " + _vm._s(_vm.formPeserta.kelamin)),
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _c("b", [_vm._v("Tempat Lahir:")]),
                              _vm._v(
                                " " + _vm._s(_vm.formPeserta.tempat_lahir)
                              ),
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _c("b", [_vm._v("Tgl. Lahir:")]),
                              _vm._v(" "),
                              _c("span", {
                                domProps: {
                                  innerHTML: _vm._s(
                                    _vm.$options.filters.date(
                                      _vm.formPeserta.tanggal_lahir
                                    )
                                  ),
                                },
                              }),
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _c("b", [_vm._v("Status:")]),
                              _vm._v(" " + _vm._s(_vm.formPeserta.status)),
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _c("b", [_vm._v("Tinggi:")]),
                              _vm._v(" " + _vm._s(_vm.formPeserta.tinggi)),
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _c("b", [_vm._v("Agama:")]),
                              _vm._v(" " + _vm._s(_vm.formPeserta.agama)),
                            ]),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-6" }, [
                          _c("ul", { staticClass: "list list-unstyled mb-0" }, [
                            _c("li", [
                              _c("b", [_vm._v("CU:")]),
                              _vm._v(" "),
                              _c("br"),
                              _vm._v(_vm._s(_vm.formPeserta.lembaga)),
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _c("b", [_vm._v("Jabatan:")]),
                              _vm._v(" "),
                              _c("br"),
                              _vm._v(_vm._s(_vm.formPeserta.jabatan)),
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _c("b", [_vm._v("Pendidikan:")]),
                              _vm._v(" "),
                              _c("br"),
                              _vm._v(_vm._s(_vm.formPeserta.pendidikan)),
                            ]),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]
                ),
              ]),
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.formPeserta.aktivis_id == "" && _vm.mode == "create"
          ? _c("data-viewer", {
              attrs: {
                title: "Aktivis",
                columnData: _vm.columnData,
                itemData: _vm.itemData,
                query: _vm.query,
                itemDataStat: _vm.itemDataStat,
                isDasar: "true",
                isNoButtonRow: "true",
              },
              on: { fetch: _vm.fetch },
              scopedSlots: _vm._u(
                [
                  {
                    key: "item-desktop",
                    fn: function (props) {
                      return [
                        _c(
                          "tr",
                          {
                            staticClass: "text-nowrap cursor-pointer",
                            on: {
                              click: function ($event) {
                                return _vm.selectedRow(props.item)
                              },
                            },
                          },
                          [
                            _c("td", [
                              _vm._v(
                                "\n\t\t\t\t\t" +
                                  _vm._s(
                                    props.index +
                                      1 +
                                      (+_vm.itemData.current_page - 1) *
                                        +_vm.itemData.per_page +
                                      "."
                                  ) +
                                  "\n\t\t\t\t"
                              ),
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              props.item.gambar
                                ? _c("img", {
                                    staticClass:
                                      "img-rounded img-fluid wmin-sm",
                                    attrs: {
                                      src:
                                        "/images/" +
                                        _vm.kelas +
                                        "/" +
                                        props.item.gambar +
                                        "n.jpg",
                                    },
                                  })
                                : _c("img", {
                                    staticClass:
                                      "img-rounded img-fluid wmin-sm",
                                    attrs: { src: "/images/no_image.jpg" },
                                  }),
                            ]),
                            _vm._v(" "),
                            _c(
                              "td",
                              [
                                _c("check-value", {
                                  attrs: { value: props.item.name },
                                }),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "td",
                              [
                                _c("check-value", {
                                  attrs: { value: props.item.kelamin },
                                }),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            !_vm.columnData[4].disable
                              ? _c("td", [
                                  props.item.pekerjaan_aktif &&
                                  props.item.pekerjaan_aktif.tipe == 1
                                    ? _c(
                                        "span",
                                        [
                                          props.item.pekerjaan_aktif.cu
                                            ? _c("check-value", {
                                                attrs: {
                                                  value:
                                                    props.item.pekerjaan_aktif
                                                      .cu.name,
                                                },
                                              })
                                            : _c("span", [_vm._v("-")]),
                                        ],
                                        1
                                      )
                                    : props.item.pekerjaan_aktif &&
                                      props.item.pekerjaan_aktif.tipe == 2
                                    ? _c(
                                        "span",
                                        [
                                          props.item.pekerjaan_aktif
                                            .lembaga_lain
                                            ? _c("check-value", {
                                                attrs: {
                                                  value:
                                                    props.item.pekerjaan_aktif
                                                      .lembaga_lain.name,
                                                },
                                              })
                                            : _c("span", [_vm._v("-")]),
                                        ],
                                        1
                                      )
                                    : props.item.pekerjaan_aktif &&
                                      props.item.pekerjaan_aktif.tipe == 3
                                    ? _c("span", [
                                        _vm._v(
                                          "\n\t\t\t\t\t\tPUSKOPCUINA\n\t\t\t\t\t"
                                        ),
                                      ])
                                    : _c("span", [_vm._v("-")]),
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _c("td", {
                              domProps: {
                                innerHTML: _vm._s(
                                  _vm.$options.filters.checkTingkatAktivis(
                                    props.item.pekerjaan_aktif.tingkat
                                  )
                                ),
                              },
                            }),
                            _vm._v(" "),
                            _c(
                              "td",
                              [
                                props.item.pekerjaan_aktif
                                  ? _c("check-value", {
                                      attrs: {
                                        value: props.item.pekerjaan_aktif.name,
                                      },
                                    })
                                  : _c("span", [_vm._v("-")]),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "td",
                              [
                                props.item.pendidikan_tertinggi
                                  ? _c("check-value", {
                                      attrs: {
                                        value:
                                          props.item.pendidikan_tertinggi
                                            .tingkat,
                                      },
                                    })
                                  : _c("span", [_vm._v("-")]),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "td",
                              [
                                props.item.pendidikan_tertinggi
                                  ? _c("check-value", {
                                      attrs: {
                                        value:
                                          props.item.pendidikan_tertinggi.name,
                                      },
                                    })
                                  : _c("span", [_vm._v("-")]),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("td", {
                              domProps: {
                                innerHTML: _vm._s(
                                  _vm.$options.filters.date(
                                    props.item.tanggal_lahir
                                  )
                                ),
                              },
                            }),
                            _vm._v(" "),
                            _c(
                              "td",
                              [
                                _c("check-value", {
                                  attrs: { value: props.item.tempat_lahir },
                                }),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "td",
                              [
                                _c("check-value", {
                                  attrs: { value: props.item.tinggi },
                                }),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "td",
                              [
                                _c("check-value", {
                                  attrs: { value: props.item.agama },
                                }),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "td",
                              [
                                _c("check-value", {
                                  attrs: { value: props.item.status },
                                }),
                              ],
                              1
                            ),
                          ]
                        ),
                      ]
                    },
                  },
                ],
                null,
                false,
                3568210896
              ),
            })
          : _vm._e(),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _vm.item.tipe_tempat == "OFFLINE"
            ? _c("div", { staticClass: "col-md-6" }, [
                _c(
                  "div",
                  {
                    staticClass: "form-group",
                    class: {
                      "has-error": _vm.errors.has("formPeserta.name_nametag"),
                    },
                  },
                  [
                    _c(
                      "h5",
                      {
                        class: {
                          "text-danger": _vm.errors.has(
                            "formPeserta.name_nametag"
                          ),
                        },
                      },
                      [
                        _vm.errors.has("formPeserta.name_nametag")
                          ? _c("i", { staticClass: "icon-cross2" })
                          : _vm._e(),
                        _vm._v("\n\t\t\t\t\tNama di nametag:\n\t\t\t\t"),
                      ]
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
                          value: _vm.formPeserta.name_nametag,
                          expression: "formPeserta.name_nametag",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "name_nametag",
                        placeholder: "Silahkan masukkan nama di nametag",
                        "data-vv-as": "Nama di nametag",
                      },
                      domProps: { value: _vm.formPeserta.name_nametag },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.formPeserta,
                            "name_nametag",
                            $event.target.value
                          )
                        },
                      },
                    }),
                    _vm._v(" "),
                    _vm.errors.has("formPeserta.name_nametag")
                      ? _c("small", { staticClass: "text-muted text-danger" }, [
                          _c("i", { staticClass: "icon-arrow-small-right" }),
                          _vm._v(
                            " " +
                              _vm._s(
                                _vm.errors.first("formPeserta.name_nametag")
                              ) +
                              "\n\t\t\t\t"
                          ),
                        ])
                      : _c("small", { staticClass: "text-muted" }, [
                          _vm._v(" \n\t\t\t\t"),
                        ]),
                  ]
                ),
              ])
            : _vm._e(),
          _vm._v(" "),
          _c(
            "div",
            {
              class: {
                "col-md-6": _vm.item.tipe_tempat == "OFFLINE",
                "col-md-12": _vm.item.tipe_tempat == "ONLINE",
              },
            },
            [
              _c(
                "div",
                {
                  staticClass: "form-group",
                  class: {
                    "has-error": _vm.errors.has("formPeserta.name_nametag"),
                  },
                },
                [
                  _c(
                    "h5",
                    {
                      class: {
                        "text-danger": _vm.errors.has(
                          "formPeserta.name_sertifikat"
                        ),
                      },
                    },
                    [
                      _vm.errors.has("formPeserta.name_sertifikat")
                        ? _c("i", { staticClass: "icon-cross2" })
                        : _vm._e(),
                      _vm._v("\n\t\t\t\t\tNama di sertifikat:\n\t\t\t\t"),
                    ]
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
                        value: _vm.formPeserta.name_sertifikat,
                        expression: "formPeserta.name_sertifikat",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      name: "name_sertifikat",
                      placeholder: "Silahkan masukkan nama di sertifikat",
                      "data-vv-as": "Nama di sertifikat",
                    },
                    domProps: { value: _vm.formPeserta.name_sertifikat },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.formPeserta,
                          "name_sertifikat",
                          $event.target.value
                        )
                      },
                    },
                  }),
                  _vm._v(" "),
                  _vm.errors.has("formPeserta.name_sertifikat")
                    ? _c("small", { staticClass: "text-muted text-danger" }, [
                        _c("i", { staticClass: "icon-arrow-small-right" }),
                        _vm._v(
                          " " +
                            _vm._s(
                              _vm.errors.first("formPeserta.name_sertifikat")
                            ) +
                            "\n\t\t\t\t"
                        ),
                      ])
                    : _c("small", { staticClass: "text-muted" }, [
                        _vm._v(" \n\t\t\t\t"),
                      ]),
                ]
              ),
            ]
          ),
          _vm._v(" "),
          _vm.item.tipe_tempat == "OFFLINE"
            ? _c("div", { staticClass: "col-md-6" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("h5", [_vm._v("Tgl. Kedatangan:")]),
                    _vm._v(" "),
                    _c("date-picker", {
                      attrs: { defaultDate: _vm.formPeserta.datang },
                      on: {
                        dateSelected: function ($event) {
                          _vm.formPeserta.datang = $event
                        },
                      },
                    }),
                  ],
                  1
                ),
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.item.tipe_tempat == "OFFLINE"
            ? _c("div", { staticClass: "col-md-6" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("h5", [_vm._v("Tgl. Pulang:")]),
                    _vm._v(" "),
                    _c("date-picker", {
                      attrs: { defaultDate: _vm.formPeserta.pulang },
                      on: {
                        dateSelected: function ($event) {
                          _vm.formPeserta.pulang = $event
                        },
                      },
                    }),
                  ],
                  1
                ),
              ])
            : _vm._e(),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("h5", [_vm._v("Keterangan:")]),
          _vm._v(" "),
          _c("textarea", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.formPeserta.keterangan,
                expression: "formPeserta.keterangan",
              },
            ],
            staticClass: "form-control",
            attrs: {
              rows: "5",
              type: "text",
              name: "keterangan",
              placeholder: "Silahkan masukkan keterangan",
            },
            domProps: { value: _vm.formPeserta.keterangan },
            on: {
              input: function ($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.formPeserta, "keterangan", $event.target.value)
              },
            },
          }),
        ]),
        _vm._v(" "),
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
                disabled: _vm.formPeserta.aktivis_id == "",
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
                disabled: _vm.formPeserta.aktivis_id == "",
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
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/views/kegiatanBKCU/formPeserta.vue":
/*!****************************************************************!*\
  !*** ./resources/assets/js/views/kegiatanBKCU/formPeserta.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formPeserta_vue_vue_type_template_id_31ba210f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formPeserta.vue?vue&type=template&id=31ba210f& */ "./resources/assets/js/views/kegiatanBKCU/formPeserta.vue?vue&type=template&id=31ba210f&");
/* harmony import */ var _formPeserta_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formPeserta.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/kegiatanBKCU/formPeserta.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _formPeserta_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _formPeserta_vue_vue_type_template_id_31ba210f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _formPeserta_vue_vue_type_template_id_31ba210f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/kegiatanBKCU/formPeserta.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/kegiatanBKCU/formPeserta.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/assets/js/views/kegiatanBKCU/formPeserta.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_formPeserta_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./formPeserta.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/kegiatanBKCU/formPeserta.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_formPeserta_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/kegiatanBKCU/formPeserta.vue?vue&type=template&id=31ba210f&":
/*!***********************************************************************************************!*\
  !*** ./resources/assets/js/views/kegiatanBKCU/formPeserta.vue?vue&type=template&id=31ba210f& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_formPeserta_vue_vue_type_template_id_31ba210f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./formPeserta.vue?vue&type=template&id=31ba210f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/kegiatanBKCU/formPeserta.vue?vue&type=template&id=31ba210f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_formPeserta_vue_vue_type_template_id_31ba210f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_formPeserta_vue_vue_type_template_id_31ba210f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);