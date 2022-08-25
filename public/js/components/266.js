(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[266],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/kegiatanBKCU/formulirPendaftaran.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/kegiatanBKCU/formulirPendaftaran.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
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
/* harmony import */ var _components_wajibUkuran_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/wajibUkuran.vue */ "./resources/assets/js/components/wajibUkuran.vue");
/* harmony import */ var _helpers_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/form */ "./resources/assets/js/helpers/form.js");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/modal */ "./resources/assets/js/components/modal.vue");
/* harmony import */ var _components_message_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/message.vue */ "./resources/assets/js/components/message.vue");
/* harmony import */ var _components_formButton_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/formButton.vue */ "./resources/assets/js/components/formButton.vue");
/* harmony import */ var _components_formInfo_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/formInfo.vue */ "./resources/assets/js/components/formInfo.vue");
/* harmony import */ var vue_cleave_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vue-cleave-component */ "./node_modules/vue-cleave-component/dist/vue-cleave.min.js");
/* harmony import */ var vue_cleave_component__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(vue_cleave_component__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_datatable_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/datatable.vue */ "./resources/assets/js/components/datatable.vue");
/* harmony import */ var _components_datePicker_vue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/datePicker.vue */ "./resources/assets/js/components/datePicker.vue");
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














/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    pageHeader: _components_pageHeader_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    appModal: _components_modal__WEBPACK_IMPORTED_MODULE_7__["default"],
    message: _components_message_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    formButton: _components_formButton_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    formInfo: _components_formInfo_vue__WEBPACK_IMPORTED_MODULE_10__["default"],
    Cleave: vue_cleave_component__WEBPACK_IMPORTED_MODULE_11___default.a,
    dataTable: _components_datatable_vue__WEBPACK_IMPORTED_MODULE_12__["default"],
    infoIcon: _components_infoIcon_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    wajibBadge: _components_wajibBadge_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    wajibUkuran: _components_wajibUkuran_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    DatePicker: _components_datePicker_vue__WEBPACK_IMPORTED_MODULE_13__["default"]
  },
  data: function data() {
    return {
      title: 'FORMULIR PENDAFTARAN ',
      titleDesc: 'Daftar Menjadi Peserta Diklat',
      titleIcon: 'icon-clipboard6',
      level: 1,
      //level2Title: '',
      //sasaran: [],
      kelas: 'kegiatan_peserta',
      tingkatArray: [],
      tingkatName: [],
      formulirPendaftaran: {
        aktivis_id: '0',
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
        title: 'Pendidikan'
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
      selectedItemPilih: '',
      formPilihMode: '',
      itemDataPilih: [],
      itemDataPilihStat: 'success',
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
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    next(function (vm) {
      return vm.fetch();
    });
  },
  watch: {
    // modelTempatStat(value){
    // 	if(value === "success"){
    // 		this.changeTempat(this.form.id_tempat);
    // 	}
    // },
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
    },
    updateTempatStat: function updateTempatStat(value) {
      this.modalShow = true;
      this.modalState = value;
      this.modalColor = '';

      if (value === "success") {
        this.modalTitle = this.updateTempatResponse.message;
        this.changeRegencies(this.formulirPendaftaran.id_regencies);
      } else {
        this.modalTitle = 'Oops terjadi kesalahan :(';
        this.modalContent = this.updateTempatResponse;
      }
    }
  },
  methods: {
    fetch: function fetch() {
      if (this.$route.meta.mode == 'edit') {
        this.$store.dispatch(this.kelas + '/edit', this.$route.params.id);
      } else {
        // this.checkTipe(this.$route.params.tipe);
        this.$store.dispatch(this.kelas + '/create');
      } // this.$store.dispatch('provinces/get');

    },
    checkTipe: function checkTipe(tipe) {
      if (this.$route.meta.mode == 'edit') {
        this.title = 'Ubah ' + this.level2Title;
        this.titleDesc = 'Mengubah ' + this.level2Title;
        this.titleIcon = 'icon-pencil5';
      } else {
        this.title = 'Tambah ' + this.level2Title;
        this.titleDesc = 'Menambah ' + this.level2Title;
        this.titleIcon = 'icon-plus3';
      }
    },
    createPilih: function createPilih(value) {
      this.itemDataPilih.push(value);
      this.selectedItemPilih = {};
      this.modalTutup();
    },
    editPilih: function editPilih(value) {
      lodash__WEBPACK_IMPORTED_MODULE_1___default.a.remove(this.itemDataPilih, {
        index: value.index
      });

      this.itemDataPilih.push(value);
      this.selectedItemPilih = {};
      this.modalTutup();
    },
    save: function save() {
      var _this = this;

      var formData = Object(_helpers_form__WEBPACK_IMPORTED_MODULE_6__["toMulipartedForm"])(this.formulirPendaftaran, this.$route.meta.mode);
      this.$validator.validateAll('formulirPendaftaran').then(function (result) {
        if (result) {
          if (_this.$route.meta.mode == 'edit') {
            console.log(_this.formulirPendaftaran.gambar_depan);

            _this.$store.dispatch(_this.kelas + '/update', [_this.$route.params.id, formData]);
          } else {
            console.log(_this.formulirPendaftaran.gambar_depan);

            _this.$store.dispatch(_this.kelas + '/store', formData);
          }

          _this.submited = false;
        } else {
          window.scrollTo(0, 0);
          _this.submited = true;
        }
      });
    },
    back: function back() {
      if (this.$route.meta.isDetail) {
        this.$router.push({
          name: this.kelas + 'Detail',
          params: {
            id: this.formulirPendaftaran.id
          }
        });
      } else {
        if (this.$route.meta.mode == 'edit') {
          this.$router.push({
            name: this.kelas,
            params: {
              tipe: this.formulirPendaftaran.tipe,
              periode: this.momentYear()
            }
          });
        } else {
          this.$router.push({
            name: this.kelas,
            params: {
              tipe: this.$route.params.tipe,
              periode: this.momentYear()
            }
          });
        }
      }
    },
    selectedRow: function selectedRow(item, index) {
      this.selectedItemPilih = item;
      this.selectedItemPilih.index = index;
    },
    modalOpen: function modalOpen(state, isMobile, itemMobile) {
      this.modalShow = true;
      this.state = state;

      if (isMobile) {
        this.selectedItemPanitia = itemMobile;
      }

      if (state == 'hapusPanitia') {
        this.modalState = 'confirm-tutup';
        this.modalColor = '';
        this.modalTitle = 'Hapus Panitia/Fasilitator ' + this.selectedItemPanitia.name + ' ?';
        this.modalButton = 'Iya, Hapus';
        this.modalSize = '';
      } else if (state == 'ubahPanitia') {
        this.modalState = 'normal1';
        this.modalColor = 'bg-primary';
        this.modalTitle = 'Ubah Panitia/Fasilitator';
        this.modalButton = 'Ok';
        this.modalSize = 'modal-lg';
        this.formPanitiaMode = 'edit';
      } else if (state == 'tambahPanitia') {
        this.modalState = 'normal1';
        this.modalColor = 'bg-primary';
        this.modalTitle = 'Tambah Panitia/Fasilitator';
        this.modalButton = 'Ok';
        this.modalSize = 'modal-lg';
        this.formPanitiaMode = 'create';
      } else if (state == 'hapusPilih') {
        this.modalState = 'confirm-tutup';
        this.modalColor = '';
        this.modalTitle = 'Hapus Pilihan ' + this.selectedItemPilih.name + ' ?';
        this.modalButton = 'Iya, Hapus';
        this.modalSize = '';
      } else if (state == 'ubahPilih') {
        this.modalState = 'normal1';
        this.modalColor = 'bg-primary';
        this.modalTitle = 'Ubah Pilihan';
        this.modalButton = 'Ok';
        this.modalSize = 'modal-lg';
        this.formPilihMode = 'edit';
      } else if (state == 'tambahPilih') {
        this.modalState = 'normal1';
        this.modalColor = 'bg-primary';
        this.modalTitle = 'Tambah Pilihan';
        this.modalButton = 'Ok';
        this.modalSize = 'modal-lg';
        this.formPilihMode = 'create';
      } else if (state == 'tempat') {
        this.modalState = 'normal2';
        this.modalColor = 'bg-primary';
        this.modalTitle = 'Tambah Tempat';
        this.modalButton = 'Ok';
        this.modalSize = 'modal-lg';
      }
    },
    modalImageShow: function modalImageShow(content) {
      this.modalShow = true;
      this.modalState = 'image';
      this.modalContent = content;
      this.modalSize = '';
      this.modalButton = 'Ok';
    },
    modalConfirmOk: function modalConfirmOk() {
      this.modalShow = false;

      if (this.state == 'hapusPanitia') {
        lodash__WEBPACK_IMPORTED_MODULE_1___default.a.remove(this.itemDataPanitia, {
          index: this.selectedItemPanitia.index
        });

        this.selectedItemPanitia = {};
      } else if (this.state == 'hapusPilih') {
        lodash__WEBPACK_IMPORTED_MODULE_1___default.a.remove(this.itemDataPilih, {
          index: this.selectedItemPilih.index
        });

        this.selectedItemPilih = {};
      } else {
        if (this.$route.meta.isDetail) {
          this.$router.push({
            name: this.kelas + 'Detail',
            params: {
              id: this.formulirPendaftaran.id
            }
          });
        }
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
    }
  },
  computed: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('auth', {
    currentUser: 'currentUser'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('kegiatanBKCU', {
    checkPesertaData: 'data2',
    checkPesertaDataStat: 'dataStat2'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('kegiatan_peserta', {
    itemData: 'dataS',
    itemDataStat: 'dataStatS'
  }))
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/kegiatanBKCU/formulirPendaftaran.vue?vue&type=template&id=11e14dd9&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/kegiatanBKCU/formulirPendaftaran.vue?vue&type=template&id=11e14dd9& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
              _vm.errors.any("formulirPendaftaran") && _vm.submited
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
                    "data-vv-scope": "formulirPendaftaran",
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
                        _c("div", { staticClass: "col-md-6" }, [
                          _c(
                            "div",
                            {
                              staticClass: "form-group",
                              class: {
                                "has-error": _vm.errors.has(
                                  "formulirPendaftaran.name"
                                ),
                              },
                            },
                            [
                              _c(
                                "h5",
                                {
                                  class: {
                                    "text-danger": _vm.errors.has(
                                      "formulirPendaftaran.name"
                                    ),
                                  },
                                },
                                [
                                  _vm.errors.has("formulirPendaftaran.name")
                                    ? _c("i", { staticClass: "icon-cross2" })
                                    : _vm._e(),
                                  _vm._v(
                                    "\n\t\t\t\t\t\t\t\t\t\t\t\tNama Lengkap : "
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
                                    value: _vm.formulirPendaftaran.name,
                                    expression: "formulirPendaftaran.name",
                                  },
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "text",
                                  name: "name",
                                  placeholder: "Silahkan masukkan Nama",
                                  "data-vv-as": "Nama Lengkap",
                                  "data-vv-name": "formulirPendaftaran.name",
                                },
                                domProps: {
                                  value: _vm.formulirPendaftaran.name,
                                },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.formulirPendaftaran,
                                      "name",
                                      $event.target.value
                                    )
                                  },
                                },
                              }),
                              _vm._v(" "),
                              _vm.errors.has("formulirPendaftaran.name")
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
                                            _vm.errors.first(
                                              "formulirPendaftaran.name"
                                            )
                                          ) +
                                          "\n\t\t\t\t\t\t\t\t\t\t\t"
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
                        _c("div", { staticClass: "col-md-6" }, [
                          _c(
                            "div",
                            {
                              staticClass: "form-group",
                              class: {
                                "has-error": _vm.errors.has(
                                  "formulirPendaftaran.umur"
                                ),
                              },
                            },
                            [
                              _c(
                                "h5",
                                {
                                  class: {
                                    "text-danger": _vm.errors.has(
                                      "formulirPendaftaran.umur"
                                    ),
                                  },
                                },
                                [
                                  _vm.errors.has("formulirPendaftaran.umur")
                                    ? _c("i", { staticClass: "icon-cross2" })
                                    : _vm._e(),
                                  _vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\tUmur: "),
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
                                    value: _vm.formulirPendaftaran.umur,
                                    expression: "formulirPendaftaran.umur",
                                  },
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "text",
                                  name: "umur",
                                  placeholder: "Silahkan masukkan Umur",
                                  "data-vv-as": "Umur",
                                  "data-vv-name": "formulirPendaftaran.umur",
                                },
                                domProps: {
                                  value: _vm.formulirPendaftaran.umur,
                                },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.formulirPendaftaran,
                                      "umur",
                                      $event.target.value
                                    )
                                  },
                                },
                              }),
                              _vm._v(" "),
                              _vm.errors.has("formulirPendaftaran.umur")
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
                                            _vm.errors.first(
                                              "formulirPendaftaran.umur"
                                            )
                                          ) +
                                          "\n\t\t\t\t\t\t\t\t\t\t\t"
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
                        _c("div", { staticClass: "col-md-6" }, [
                          _c(
                            "div",
                            {
                              staticClass: "form-group",
                              class: {
                                "has-error": _vm.errors.has(
                                  "formulirPendaftaran.nomor"
                                ),
                              },
                            },
                            [
                              _c(
                                "h5",
                                {
                                  class: {
                                    "text-danger": _vm.errors.has(
                                      "formulirPendaftaran.nomor"
                                    ),
                                  },
                                },
                                [
                                  _vm.errors.has("formulirPendaftaran.nomor")
                                    ? _c("i", { staticClass: "icon-cross2" })
                                    : _vm._e(),
                                  _vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\tNo. HP: "),
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
                                    value: _vm.formulirPendaftaran.nomor,
                                    expression: "formulirPendaftaran.nomor",
                                  },
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "text",
                                  name: "nomor",
                                  placeholder: "Silahkan masukkan Umur",
                                  "data-vv-as": "Nomor Telepon",
                                  "data-vv-name": "formulirPendaftaran.nomor",
                                },
                                domProps: {
                                  value: _vm.formulirPendaftaran.nomor,
                                },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.formulirPendaftaran,
                                      "nomor",
                                      $event.target.value
                                    )
                                  },
                                },
                              }),
                              _vm._v(" "),
                              _vm.errors.has("formulirPendaftaran.nomor")
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
                                            _vm.errors.first(
                                              "formulirPendaftaran.nomor"
                                            )
                                          ) +
                                          "\n\t\t\t\t\t\t\t\t\t\t\t"
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
                        _c("div", { staticClass: "col-md-6" }, [
                          _c(
                            "div",
                            {
                              staticClass: "form-group",
                              class: {
                                "has-error": _vm.errors.has(
                                  "formulirPendaftaran.pendidikan"
                                ),
                              },
                            },
                            [
                              _c(
                                "h5",
                                {
                                  class: {
                                    "text-danger": _vm.errors.has(
                                      "formulirPendaftaran.pendidikan"
                                    ),
                                  },
                                },
                                [
                                  _vm.errors.has(
                                    "formulirPendaftaran.pendidikan"
                                  )
                                    ? _c("i", { staticClass: "icon-cross2" })
                                    : _vm._e(),
                                  _vm._v(
                                    "\n\t\t\t\t\t\t\t\t\t\t\t\tPendidikan terakhir : "
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
                                    value: _vm.formulirPendaftaran.pendidikan,
                                    expression:
                                      "formulirPendaftaran.pendidikan",
                                  },
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "text",
                                  name: "pendidikan",
                                  placeholder:
                                    "Silahkan masukkan Pendidikan Terakhir anda ",
                                  "data-vv-as": "Pendidikan Terakhir",
                                  "data-vv-name":
                                    "formulirPendaftaran.pendidikan",
                                },
                                domProps: {
                                  value: _vm.formulirPendaftaran.pendidikan,
                                },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.formulirPendaftaran,
                                      "pendidikan",
                                      $event.target.value
                                    )
                                  },
                                },
                              }),
                              _vm._v(" "),
                              _vm.errors.has("formulirPendaftaran.pendidikan")
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
                                            _vm.errors.first(
                                              "formulirPendaftaran.pendidikan"
                                            )
                                          ) +
                                          "\n\t\t\t\t\t\t\t\t\t\t\t"
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
                        _c("div", { staticClass: "col-md-6" }, [
                          _c(
                            "div",
                            {
                              staticClass: "form-group",
                              class: {
                                "has-error": _vm.errors.has(
                                  "formulirPendaftaran.tempat_lahir"
                                ),
                              },
                            },
                            [
                              _c(
                                "h5",
                                {
                                  class: {
                                    "text-danger": _vm.errors.has(
                                      "formulirPendaftaran.tempat_lahir"
                                    ),
                                  },
                                },
                                [
                                  _vm.errors.has(
                                    "formulirPendaftaran.tempat_lahir"
                                  )
                                    ? _c("i", { staticClass: "icon-cross2" })
                                    : _vm._e(),
                                  _vm._v(
                                    "\n\t\t\t\t\t\t\t\t\t\t\t\tTempat Lahir: "
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
                                    value: _vm.formulirPendaftaran.tempat_lahir,
                                    expression:
                                      "formulirPendaftaran.tempat_lahir",
                                  },
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "text",
                                  name: "tempat_lahir",
                                  placeholder:
                                    "Silahkan masukkan Tempat Lahir anda",
                                  "data-vv-as": "Tempat Lahir",
                                  "data-vv-name":
                                    "formulirPendaftaran.tempat_lahir",
                                },
                                domProps: {
                                  value: _vm.formulirPendaftaran.tempat_lahir,
                                },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.formulirPendaftaran,
                                      "tempat_lahir",
                                      $event.target.value
                                    )
                                  },
                                },
                              }),
                              _vm._v(" "),
                              _vm.errors.has("formulirPendaftaran.tempat_lahir")
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
                                            _vm.errors.first(
                                              "formulirPendaftaran.tempat_lahir"
                                            )
                                          ) +
                                          "\n\t\t\t\t\t\t\t\t\t\t\t"
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
                        _c("div", { staticClass: "col-md-6" }, [
                          _c(
                            "div",
                            {
                              staticClass: "form-group",
                              class: {
                                "has-error": _vm.errors.has(
                                  "formulirPendaftaran.agama"
                                ),
                              },
                            },
                            [
                              _c(
                                "h5",
                                {
                                  class: {
                                    "text-danger": _vm.errors.has(
                                      "formulirPendaftaran.agama"
                                    ),
                                  },
                                },
                                [
                                  _vm.errors.has("formulirPendaftaran.agama")
                                    ? _c("i", { staticClass: "icon-cross2" })
                                    : _vm._e(),
                                  _vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\tAgama : "),
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
                                    value: _vm.formulirPendaftaran.agama,
                                    expression: "formulirPendaftaran.agama",
                                  },
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "text",
                                  name: "agama",
                                  placeholder: "Silahkan masukkan Agama anda",
                                  "data-vv-as": "Agama",
                                  "data-vv-name": "formulirPendaftaran.agama",
                                },
                                domProps: {
                                  value: _vm.formulirPendaftaran.agama,
                                },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.formulirPendaftaran,
                                      "agama",
                                      $event.target.value
                                    )
                                  },
                                },
                              }),
                              _vm._v(" "),
                              _vm.errors.has("formulirPendaftaran.agama")
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
                                            _vm.errors.first(
                                              "formulirPendaftaran.agama"
                                            )
                                          ) +
                                          "\n\t\t\t\t\t\t\t\t\t\t\t"
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
                        _c("div", { staticClass: "col-md-6" }, [
                          _c(
                            "div",
                            {
                              staticClass: "form-group",
                              class: {
                                "has-error": _vm.errors.has(
                                  "formulirPendaftaran.tinggi"
                                ),
                              },
                            },
                            [
                              _c(
                                "h5",
                                {
                                  class: {
                                    "text-danger": _vm.errors.has(
                                      "formulirPendaftaran.tinggi"
                                    ),
                                  },
                                },
                                [
                                  _vm.errors.has("formulirPendaftaran.tinggi")
                                    ? _c("i", { staticClass: "icon-cross2" })
                                    : _vm._e(),
                                  _vm._v(
                                    "\n\t\t\t\t\t\t\t\t\t\t\t\tTinggi Badan : "
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
                                    value: _vm.formulirPendaftaran.tinggi,
                                    expression: "formulirPendaftaran.tinggi",
                                  },
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "text",
                                  name: "tinggi",
                                  placeholder:
                                    "Silahkan masukkan Tinggi Badan anda",
                                  "data-vv-as": "Tinggi",
                                  "data-vv-name": "formulirPendaftaran.tinggi",
                                },
                                domProps: {
                                  value: _vm.formulirPendaftaran.tinggi,
                                },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.formulirPendaftaran,
                                      "tinggi",
                                      $event.target.value
                                    )
                                  },
                                },
                              }),
                              _vm._v(" "),
                              _vm.errors.has("formulirPendaftaran.tinggi")
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
                                            _vm.errors.first(
                                              "formulirPendaftaran.tinggi"
                                            )
                                          ) +
                                          "\n\t\t\t\t\t\t\t\t\t\t\t"
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
                        _c("div", { staticClass: "col-md-6" }, [
                          _c(
                            "div",
                            {
                              staticClass: "form-group",
                              class: {
                                "has-error": _vm.errors.has(
                                  "formulirPendaftaran.status"
                                ),
                              },
                            },
                            [
                              _c(
                                "h5",
                                {
                                  class: {
                                    "text-danger": _vm.errors.has(
                                      "formulirPendaftaran.status"
                                    ),
                                  },
                                },
                                [
                                  _vm.errors.has("formulirPendaftaran.status")
                                    ? _c("i", { staticClass: "icon-cross2" })
                                    : _vm._e(),
                                  _vm._v(
                                    "\n\t\t\t\t\t\t\t\t\t\t\t\tStatus Perkawinan : "
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
                                    value: _vm.formulirPendaftaran.status,
                                    expression: "formulirPendaftaran.status",
                                  },
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "text",
                                  name: "status",
                                  placeholder: "Belum Menikah / Menikah",
                                  "data-vv-as": "Status Perkawinan",
                                  "data-vv-name": "formulirPendaftaran.status",
                                },
                                domProps: {
                                  value: _vm.formulirPendaftaran.status,
                                },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.formulirPendaftaran,
                                      "status",
                                      $event.target.value
                                    )
                                  },
                                },
                              }),
                              _vm._v(" "),
                              _vm.errors.has("formulirPendaftaran.status")
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
                                            _vm.errors.first(
                                              "formulirPendaftaran.status"
                                            )
                                          ) +
                                          "\n\t\t\t\t\t\t\t\t\t\t\t"
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
                        _c("div", { staticClass: "col-md-6" }, [
                          _c(
                            "div",
                            {
                              staticClass: "form-group",
                              class: {
                                "has-error": _vm.errors.has(
                                  "formulirPendaftaran.tanggal_lahir"
                                ),
                              },
                            },
                            [
                              _c(
                                "h5",
                                {
                                  class: {
                                    "text-danger": _vm.errors.has(
                                      "formulirPendaftaran.tanggal_lahir"
                                    ),
                                  },
                                },
                                [
                                  _vm.errors.has(
                                    "formulirPendaftaran.tanggal_lahir"
                                  )
                                    ? _c("i", { staticClass: "icon-cross2" })
                                    : _vm._e(),
                                  _vm._v(
                                    "\n\t\t\t\t\t\t\t\t\t\t\t\tTanggal Lahir: "
                                  ),
                                  _c("wajib-badge"),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("date-picker", {
                                attrs: {
                                  defaultDate:
                                    _vm.formulirPendaftaran.tanggal_lahir,
                                },
                                on: {
                                  dateSelected: function ($event) {
                                    _vm.formulirPendaftaran.tanggal_lahir =
                                      $event
                                  },
                                },
                              }),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value:
                                      _vm.formulirPendaftaran.tanggal_lahir,
                                    expression:
                                      "formulirPendaftaran.tanggal_lahir",
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
                                attrs: {
                                  "data-vv-as": "Tgl. Lahir",
                                  "data-vv-name":
                                    "formulirPendaftaran.tanggal_lahir",
                                },
                                domProps: {
                                  value: _vm.formulirPendaftaran.tanggal_lahir,
                                },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.formulirPendaftaran,
                                      "tanggal_lahir",
                                      $event.target.value
                                    )
                                  },
                                },
                              }),
                              _vm._v(" "),
                              _vm.errors.has(
                                "formulirPendaftaran.tanggal_lahir"
                              )
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
                                            _vm.errors.first(
                                              "formulirPendaftaran.tanggal_lahir"
                                            )
                                          ) +
                                          "\n\t\t\t\t\t\t\t\t\t\t\t"
                                      ),
                                    ]
                                  )
                                : _c("small", { staticClass: "text-muted" }, [
                                    _vm._v(" "),
                                  ]),
                            ],
                            1
                          ),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-6" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "h5",
                              [_vm._v("Jenis Kelamin: "), _c("wajib-badge")],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "form-check form-check-inline" },
                              [
                                _c(
                                  "label",
                                  { staticClass: "form-check-label-1" },
                                  [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value:
                                            _vm.formulirPendaftaran
                                              .jenis_kelamin,
                                          expression:
                                            "formulirPendaftaran.jenis_kelamin",
                                        },
                                      ],
                                      staticClass: "form-check-input",
                                      attrs: {
                                        type: "checkbox",
                                        value: "P",
                                        "data-vv-name":
                                          "formulirPendaftaran.jenis_kelamin",
                                      },
                                      domProps: {
                                        checked: Array.isArray(
                                          _vm.formulirPendaftaran.jenis_kelamin
                                        )
                                          ? _vm._i(
                                              _vm.formulirPendaftaran
                                                .jenis_kelamin,
                                              "P"
                                            ) > -1
                                          : _vm.formulirPendaftaran
                                              .jenis_kelamin,
                                      },
                                      on: {
                                        change: function ($event) {
                                          var $$a =
                                              _vm.formulirPendaftaran
                                                .jenis_kelamin,
                                            $$el = $event.target,
                                            $$c = $$el.checked ? true : false
                                          if (Array.isArray($$a)) {
                                            var $$v = "P",
                                              $$i = _vm._i($$a, $$v)
                                            if ($$el.checked) {
                                              $$i < 0 &&
                                                _vm.$set(
                                                  _vm.formulirPendaftaran,
                                                  "jenis_kelamin",
                                                  $$a.concat([$$v])
                                                )
                                            } else {
                                              $$i > -1 &&
                                                _vm.$set(
                                                  _vm.formulirPendaftaran,
                                                  "jenis_kelamin",
                                                  $$a
                                                    .slice(0, $$i)
                                                    .concat($$a.slice($$i + 1))
                                                )
                                            }
                                          } else {
                                            _vm.$set(
                                              _vm.formulirPendaftaran,
                                              "jenis_kelamin",
                                              $$c
                                            )
                                          }
                                        },
                                      },
                                    }),
                                    _vm._v(
                                      "\n\t\t\t\t\t\t\t\t\t\t\t\t\tPria\n\t\t\t\t\t\t\t\t\t\t\t\t"
                                    ),
                                  ]
                                ),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "form-check form-check-inline" },
                              [
                                _c(
                                  "label",
                                  { staticClass: "form-check-label-2" },
                                  [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value:
                                            _vm.formulirPendaftaran
                                              .jenis_kelamin,
                                          expression:
                                            "formulirPendaftaran.jenis_kelamin",
                                        },
                                      ],
                                      staticClass: "form-check-input",
                                      attrs: {
                                        type: "checkbox",
                                        value: "W",
                                        "data-vv-name":
                                          "formulirPendaftaran.jenis_kelamin",
                                      },
                                      domProps: {
                                        checked: Array.isArray(
                                          _vm.formulirPendaftaran.jenis_kelamin
                                        )
                                          ? _vm._i(
                                              _vm.formulirPendaftaran
                                                .jenis_kelamin,
                                              "W"
                                            ) > -1
                                          : _vm.formulirPendaftaran
                                              .jenis_kelamin,
                                      },
                                      on: {
                                        change: function ($event) {
                                          var $$a =
                                              _vm.formulirPendaftaran
                                                .jenis_kelamin,
                                            $$el = $event.target,
                                            $$c = $$el.checked ? true : false
                                          if (Array.isArray($$a)) {
                                            var $$v = "W",
                                              $$i = _vm._i($$a, $$v)
                                            if ($$el.checked) {
                                              $$i < 0 &&
                                                _vm.$set(
                                                  _vm.formulirPendaftaran,
                                                  "jenis_kelamin",
                                                  $$a.concat([$$v])
                                                )
                                            } else {
                                              $$i > -1 &&
                                                _vm.$set(
                                                  _vm.formulirPendaftaran,
                                                  "jenis_kelamin",
                                                  $$a
                                                    .slice(0, $$i)
                                                    .concat($$a.slice($$i + 1))
                                                )
                                            }
                                          } else {
                                            _vm.$set(
                                              _vm.formulirPendaftaran,
                                              "jenis_kelamin",
                                              $$c
                                            )
                                          }
                                        },
                                      },
                                    }),
                                    _vm._v(
                                      "\n\t\t\t\t\t\t\t\t\t\t\t\t\tWanita\n\t\t\t\t\t\t\t\t\t\t\t\t"
                                    ),
                                  ]
                                ),
                              ]
                            ),
                          ]),
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
            _vm._v("\n\t\t\t\t" + _vm._s(_vm.modalTitle) + "\n\t\t\t"),
          ]),
        ],
        2
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/views/kegiatanBKCU/formulirPendaftaran.vue":
/*!************************************************************************!*\
  !*** ./resources/assets/js/views/kegiatanBKCU/formulirPendaftaran.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formulirPendaftaran_vue_vue_type_template_id_11e14dd9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formulirPendaftaran.vue?vue&type=template&id=11e14dd9& */ "./resources/assets/js/views/kegiatanBKCU/formulirPendaftaran.vue?vue&type=template&id=11e14dd9&");
/* harmony import */ var _formulirPendaftaran_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formulirPendaftaran.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/kegiatanBKCU/formulirPendaftaran.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _formulirPendaftaran_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _formulirPendaftaran_vue_vue_type_template_id_11e14dd9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _formulirPendaftaran_vue_vue_type_template_id_11e14dd9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/kegiatanBKCU/formulirPendaftaran.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/kegiatanBKCU/formulirPendaftaran.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/assets/js/views/kegiatanBKCU/formulirPendaftaran.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_formulirPendaftaran_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./formulirPendaftaran.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/kegiatanBKCU/formulirPendaftaran.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_formulirPendaftaran_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/kegiatanBKCU/formulirPendaftaran.vue?vue&type=template&id=11e14dd9&":
/*!*******************************************************************************************************!*\
  !*** ./resources/assets/js/views/kegiatanBKCU/formulirPendaftaran.vue?vue&type=template&id=11e14dd9& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_formulirPendaftaran_vue_vue_type_template_id_11e14dd9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./formulirPendaftaran.vue?vue&type=template&id=11e14dd9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/kegiatanBKCU/formulirPendaftaran.vue?vue&type=template&id=11e14dd9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_formulirPendaftaran_vue_vue_type_template_id_11e14dd9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_formulirPendaftaran_vue_vue_type_template_id_11e14dd9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);