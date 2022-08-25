(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[118],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/laporanCu/draftTp.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/laporanCu/draftTp.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_pageHeader_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/pageHeader.vue */ "./resources/assets/js/components/pageHeader.vue");
/* harmony import */ var _components_message_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/message.vue */ "./resources/assets/js/components/message.vue");
/* harmony import */ var _components_datatable_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/datatable.vue */ "./resources/assets/js/components/datatable.vue");
/* harmony import */ var _components_checkValue_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/checkValue.vue */ "./resources/assets/js/components/checkValue.vue");
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





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    pageHeader: _components_pageHeader_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    message: _components_message_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    dataTable: _components_datatable_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    checkValue: _components_checkValue_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      title: 'Laporan Draft',
      kelas: 'laporanTp',
      titleDesc: 'Mengelola data laporan dari file excel',
      titleIcon: 'icon-stats-bars2',
      selectedItem: [],
      columnData: [{
        title: 'No.'
      }, {
        title: "TP/KP"
      }, {
        title: 'No. TP/KP'
      }, {
        title: 'Periode'
      }, {
        title: "Lelaki Biasa"
      }, {
        title: "Lelaki L.Biasa"
      }, {
        title: "Perempuan Biasa"
      }, {
        title: "Perempuan L.Biasa"
      }, {
        title: "Total Anggota"
      }, {
        title: "Total Anggota Lalu"
      }, {
        title: "Aset"
      }, {
        title: "Aset Lalu"
      }, {
        title: "Aset Masalah"
      }, {
        title: "Aset Tdk Menghasilkan"
      }, {
        title: "Aktiva Lancar"
      }, {
        title: "Simp. Saham"
      }, {
        title: "Simp. Saham Lalu"
      }, {
        title: "Simp. Saham Des"
      }, {
        title: "Simp. Nonsaham Unggulan"
      }, {
        title: "Simp. Nonsaham Harian"
      }, {
        title: "Hutang SPD"
      }, {
        title: "Hutang Tdk Berbiaya"
      }, {
        title: "Total Hutang Pihak Ke-3"
      }, {
        title: "Piutang Beredar"
      }, {
        title: "Piutang Bersih"
      }, {
        title: "Piutang Anggota"
      }, {
        title: "Piutang Lalai 1-12 Bulan"
      }, {
        title: "Piutang Lalai > 12 Bulan"
      }, {
        title: "Rasio Piutang Beredar"
      }, {
        title: "Rasio Piutang Lalai"
      }, {
        title: "DCR"
      }, {
        title: "DCU"
      }, {
        title: "Iuran Gedung"
      }, {
        title: "Donasi"
      }, {
        title: "BJS Saham"
      }, {
        title: "Beban Penyisihan DCR"
      }, {
        title: "Investasi Likuid"
      }, {
        title: "Total Pendapatan"
      }, {
        title: "Total Biaya"
      }, {
        title: "SHU"
      }, {
        title: "SHU Lalu"
      }, {
        title: "Rata-rata Aset"
      }, {
        title: "Laju Inflasi"
      }, {
        title: "Harga Pasar"
      }, {
        title: "Tgl. Buat"
      }, {
        title: "Tgl. Ubah"
      }],
      state: '',
      modalShow: false,
      modalState: '',
      modalTitle: '',
      modalContent: '',
      modalButton: ''
    };
  },
  created: function created() {
    this.fetch();
  },
  watch: {},
  methods: {
    fetch: function fetch() {
      this.$store.dispatch(this.kelas + "/indexTpDraft", this.currentUser.id);
    },
    selectedRow: function selectedRow(item) {
      this.selectedItem = item;
    },
    ubahData: function ubahData(id) {
      this.$router.push({
        name: this.kelas + "EditDraft",
        params: {
          id: id
        }
      });
    },
    modalConfirmOpen: function modalConfirmOpen(state, isMobile, itemMobile) {
      this.modalShow = true;
      this.modalState = "confirm-tutup";
      this.state = state;

      if (isMobile) {
        this.selectedItem = itemMobile;
      }

      if (state == "simpan") {
        this.modalTitle = "Simpan " + this.title + " ini?";
        this.modalButton = "Iya, Simpan";
      } else if (state == "hapus") {
        this.modalTitle = "Hapus " + this.title + " ini?";
        this.modalButton = "Iya, Hapus";
      } else if (state == "hapus_semua") {
        this.modalTitle = "Hapus semua laporan draft ini?";
        this.modalButton = "Iya, Hapus";
      }
    },
    modalTutup: function modalTutup() {
      this.modalShow = false;
      this.$store.dispatch(this.kelas + "/resetUpdateStat");
    },
    modalConfirmOk: function modalConfirmOk() {
      if (this.state == "hapus") {
        this.$store.dispatch(this.kelas + "/destroyDraft", this.selectedItem.id);
      } else if (this.state == "hapus_semua") {
        this.$store.dispatch(this.kelas + "/destroyDraftAll");
      } else if (this.state == "simpan") {
        this.$store.dispatch(this.kelas + "/storeDraftAll");
      }
    }
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])("auth", {
    currentUser: "currentUser"
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('laporanTp', {
    itemData: 'dataS',
    itemDataStat: 'dataStatS'
  }))
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/laporanCu/draftTp.vue?vue&type=template&id=55bf1c88&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/laporanCu/draftTp.vue?vue&type=template&id=55bf1c88& ***!
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
        },
      }),
      _vm._v(" "),
      _c("div", { staticClass: "page-content pt-0" }, [
        _c("div", { staticClass: "content-wrapper" }, [
          _c(
            "div",
            { staticClass: "content" },
            [
              _vm.itemDataStat === "fail"
                ? _c("message", {
                    attrs: {
                      title: "Oops terjadi kesalahan:",
                      errorData: _vm.itemData,
                    },
                  })
                : _vm._e(),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "card" },
                [
                  _c("div", { staticClass: "card-header d-print-none" }, [
                    _c("div", { staticClass: "row" }, [
                      _c(
                        "div",
                        {
                          staticClass:
                            "col-md-8 col-lg-10 pb-2 d-none d-sm-block",
                        },
                        [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-light mb-1",
                              on: {
                                click: function ($event) {
                                  $event.preventDefault()
                                  return _vm.modalConfirmOpen("simpan")
                                },
                              },
                            },
                            [
                              _c("i", { staticClass: "icon-floppy-disk" }),
                              _vm._v(
                                " Simpan ke laporan statistik Tp\n\t\t\t\t\t\t\t\t\t"
                              ),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-light mb-1",
                              attrs: { disabled: !_vm.selectedItem.id },
                              on: {
                                click: function ($event) {
                                  $event.preventDefault()
                                  return _vm.ubahData(_vm.selectedItem.id)
                                },
                              },
                            },
                            [
                              _c("i", { staticClass: "icon-pencil5" }),
                              _vm._v(" Ubah\n\t\t\t\t\t\t\t\t\t"),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-light btn-icon mb-1",
                              attrs: { disabled: !_vm.selectedItem.id },
                              on: {
                                click: function ($event) {
                                  $event.preventDefault()
                                  return _vm.modalConfirmOpen("hapus")
                                },
                              },
                            },
                            [
                              _c("i", { staticClass: "icon-bin2" }),
                              _vm._v(" Hapus\n\t\t\t\t\t\t\t\t\t"),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-light btn-icon mb-1",
                              attrs: { disabled: !_vm.selectedItem.id },
                              on: {
                                click: function ($event) {
                                  $event.preventDefault()
                                  return _vm.modalConfirmOpen("hapus_semua")
                                },
                              },
                            },
                            [
                              _c("i", { staticClass: "icon-bin2" }),
                              _vm._v(" Hapus Semua\n\t\t\t\t\t\t\t\t\t"),
                            ]
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-md-12 pb-2 d-block d-sm-none" },
                        [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-light btn-block",
                              on: {
                                click: function ($event) {
                                  $event.preventDefault()
                                  return _vm.modalConfirmOpen("simpan")
                                },
                              },
                            },
                            [
                              _c("i", { staticClass: "icon-floppy-disk" }),
                              _vm._v(
                                "Simpan ke laporan statistik Tp\n\t\t\t\t\t\t\t\t\t"
                              ),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-light btn-block",
                              attrs: { disabled: !_vm.selectedItem.id },
                              on: {
                                click: function ($event) {
                                  $event.preventDefault()
                                  return _vm.ubahData(_vm.selectedItem.id)
                                },
                              },
                            },
                            [
                              _c("i", { staticClass: "icon-pencil5" }),
                              _vm._v(" Ubah\n\t\t\t\t\t\t\t\t\t"),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass:
                                "btn btn-light btn-icon btn-block mb-1",
                              attrs: { disabled: !_vm.selectedItem.id },
                              on: {
                                click: function ($event) {
                                  $event.preventDefault()
                                  return _vm.modalConfirmOpen("hapus")
                                },
                              },
                            },
                            [
                              _c("i", { staticClass: "icon-bin2" }),
                              _vm._v(" Hapus\n\t\t\t\t\t\t\t\t\t"),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass:
                                "btn btn-light btn-icon btn-block mb-1",
                              attrs: { disabled: !_vm.selectedItem.id },
                              on: {
                                click: function ($event) {
                                  $event.preventDefault()
                                  return _vm.modalConfirmOpen("hapus_semua")
                                },
                              },
                            },
                            [
                              _c("i", { staticClass: "icon-bin2" }),
                              _vm._v(" Hapus Semua\n\t\t\t\t\t\t\t\t\t"),
                            ]
                          ),
                        ]
                      ),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("data-table", {
                    attrs: {
                      items: _vm.itemData,
                      columnData: _vm.columnData,
                      itemDataStat: _vm.itemDataStat,
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "item-desktop",
                        fn: function (props) {
                          return [
                            props.item
                              ? _c(
                                  "tr",
                                  {
                                    staticClass: "text-nowrap",
                                    class: {
                                      "bg-info":
                                        _vm.selectedItem.id === props.item.id,
                                    },
                                    on: {
                                      click: function ($event) {
                                        return _vm.selectedRow(props.item)
                                      },
                                    },
                                  },
                                  [
                                    _c("td", [_vm._v(_vm._s(props.index + 1))]),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      [
                                        props.item.tp
                                          ? _c("check-value", {
                                              attrs: {
                                                value: props.item.tp.name,
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
                                        _c("check-value", {
                                          attrs: { value: props.item.no_tp },
                                        }),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(
                                        _vm._s(
                                          _vm._f("dateMonth")(
                                            props.item.periode
                                          )
                                        )
                                      ),
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      [
                                        _c("check-value", {
                                          attrs: {
                                            value: props.item.l_biasa,
                                            valueType: "currency",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      [
                                        _c("check-value", {
                                          attrs: {
                                            value: props.item.l_lbiasa,
                                            valueType: "currency",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      [
                                        _c("check-value", {
                                          attrs: {
                                            value: props.item.p_biasa,
                                            valueType: "currency",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      [
                                        _c("check-value", {
                                          attrs: {
                                            value: props.item.p_lbiasa,
                                            valueType: "currency",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      [
                                        _c("check-value", {
                                          attrs: {
                                            value: props.item.total_anggota,
                                            valueType: "currency",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      [
                                        _c("check-value", {
                                          attrs: {
                                            value:
                                              props.item.total_anggota_lalu,
                                            valueType: "currency",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      [
                                        _c("check-value", {
                                          attrs: {
                                            value: props.item.aset,
                                            valueType: "currency",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      [
                                        _c("check-value", {
                                          attrs: {
                                            value: props.item.aset_lalu,
                                            valueType: "currency",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      [
                                        _c("check-value", {
                                          attrs: {
                                            value: props.item.aset_masalah,
                                            valueType: "currency",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      [
                                        _c("check-value", {
                                          attrs: {
                                            value:
                                              props.item
                                                .aset_tidak_menghasilkan,
                                            valueType: "currency",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      [
                                        _c("check-value", {
                                          attrs: {
                                            value: props.item.aktiva_lancar,
                                            valueType: "currency",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      [
                                        _c("check-value", {
                                          attrs: {
                                            value: props.item.simpanan_saham,
                                            valueType: "currency",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      [
                                        _c("check-value", {
                                          attrs: {
                                            value:
                                              props.item.simpanan_saham_lalu,
                                            valueType: "currency",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      [
                                        _c("check-value", {
                                          attrs: {
                                            value:
                                              props.item.simpanan_saham_des,
                                            valueType: "currency",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      [
                                        _c("check-value", {
                                          attrs: {
                                            value: props.item.nonsaham_unggulan,
                                            valueType: "currency",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      [
                                        _c("check-value", {
                                          attrs: {
                                            value: props.item.nonsaham_harian,
                                            valueType: "currency",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      [
                                        _c("check-value", {
                                          attrs: {
                                            value: props.item.hutang_spd,
                                            valueType: "currency",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      [
                                        _c("check-value", {
                                          attrs: {
                                            value:
                                              props.item
                                                .hutang_tidak_berbiaya_30hari,
                                            valueType: "currency",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      [
                                        _c("check-value", {
                                          attrs: {
                                            value:
                                              props.item.total_hutang_pihak3,
                                            valueType: "currency",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      [
                                        _c("check-value", {
                                          attrs: {
                                            value: props.item.piutang_beredar,
                                            valueType: "currency",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      [
                                        _c("check-value", {
                                          attrs: {
                                            value: props.item.piutang_bersih,
                                            valueType: "currency",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      [
                                        _c("check-value", {
                                          attrs: {
                                            value: props.item.piutang_anggota,
                                            valueType: "currency",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      [
                                        _c("check-value", {
                                          attrs: {
                                            value:
                                              props.item.piutang_lalai_1bulan,
                                            valueType: "currency",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      [
                                        _c("check-value", {
                                          attrs: {
                                            value:
                                              props.item.piutang_lalai_12bulan,
                                            valueType: "currency",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      [
                                        _c("check-value", {
                                          attrs: {
                                            value: props.item.rasio_beredar,
                                            valueType: "percentage",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      [
                                        _c("check-value", {
                                          attrs: {
                                            value: props.item.rasio_lalai,
                                            valueType: "percentage",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      [
                                        _c("check-value", {
                                          attrs: {
                                            value: props.item.dcr,
                                            valueType: "currency",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      [
                                        _c("check-value", {
                                          attrs: {
                                            value: props.item.dcu,
                                            valueType: "currency",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      [
                                        _c("check-value", {
                                          attrs: {
                                            value: props.item.dana_gedung,
                                            valueType: "currency",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      [
                                        _c("check-value", {
                                          attrs: {
                                            value: props.item.donasi,
                                            valueType: "currency",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      [
                                        _c("check-value", {
                                          attrs: {
                                            value: props.item.bjs_saham,
                                            valueType: "currency",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      [
                                        _c("check-value", {
                                          attrs: {
                                            value:
                                              props.item.beban_penyisihan_dcr,
                                            valueType: "currency",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      [
                                        _c("check-value", {
                                          attrs: {
                                            value: props.item.investasi_likuid,
                                            valueType: "currency",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      [
                                        _c("check-value", {
                                          attrs: {
                                            value: props.item.total_pendapatan,
                                            valueType: "currency",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      [
                                        _c("check-value", {
                                          attrs: {
                                            value: props.item.total_biaya,
                                            valueType: "currency",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      [
                                        _c("check-value", {
                                          attrs: {
                                            value: props.item.shu,
                                            valueType: "currency",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      [
                                        _c("check-value", {
                                          attrs: {
                                            value: props.item.shu_lalu,
                                            valueType: "currency",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      [
                                        _c("check-value", {
                                          attrs: {
                                            value: props.item.rata_aset,
                                            valueType: "currency",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      [
                                        _c("check-value", {
                                          attrs: {
                                            value: props.item.laju_inflasi,
                                            valueType: "percentage",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      [
                                        _c("check-value", {
                                          attrs: {
                                            value: props.item.harga_pasar,
                                            valueType: "percentage",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c("td", {
                                      domProps: {
                                        innerHTML: _vm._s(
                                          _vm.$options.filters.dateTime(
                                            props.item.created_at
                                          )
                                        ),
                                      },
                                    }),
                                    _vm._v(" "),
                                    _c("td", [
                                      props.item.created_at !==
                                      props.item.updated_at
                                        ? _c("span", {
                                            domProps: {
                                              innerHTML: _vm._s(
                                                _vm.$options.filters.dateTime(
                                                  props.item.updated_at
                                                )
                                              ),
                                            },
                                          })
                                        : _c("span", [_vm._v("-")]),
                                    ]),
                                  ]
                                )
                              : _vm._e(),
                          ]
                        },
                      },
                    ]),
                  }),
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
          button: _vm.modalButton,
        },
        on: {
          tutup: _vm.modalTutup,
          confirmOk: _vm.modalConfirmOk,
          successOk: _vm.modalTutup,
          failOk: _vm.modalTutup,
          backgroundClick: _vm.modalTutup,
        },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/views/laporanCu/draftTp.vue":
/*!*********************************************************!*\
  !*** ./resources/assets/js/views/laporanCu/draftTp.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _draftTp_vue_vue_type_template_id_55bf1c88___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./draftTp.vue?vue&type=template&id=55bf1c88& */ "./resources/assets/js/views/laporanCu/draftTp.vue?vue&type=template&id=55bf1c88&");
/* harmony import */ var _draftTp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./draftTp.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/laporanCu/draftTp.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _draftTp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _draftTp_vue_vue_type_template_id_55bf1c88___WEBPACK_IMPORTED_MODULE_0__["render"],
  _draftTp_vue_vue_type_template_id_55bf1c88___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/laporanCu/draftTp.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/laporanCu/draftTp.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/assets/js/views/laporanCu/draftTp.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_draftTp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./draftTp.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/laporanCu/draftTp.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_draftTp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/laporanCu/draftTp.vue?vue&type=template&id=55bf1c88&":
/*!****************************************************************************************!*\
  !*** ./resources/assets/js/views/laporanCu/draftTp.vue?vue&type=template&id=55bf1c88& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_draftTp_vue_vue_type_template_id_55bf1c88___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./draftTp.vue?vue&type=template&id=55bf1c88& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/laporanCu/draftTp.vue?vue&type=template&id=55bf1c88&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_draftTp_vue_vue_type_template_id_55bf1c88___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_draftTp_vue_vue_type_template_id_55bf1c88___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);