(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[138],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/kegiatanBKCU/formPendaftaran.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/kegiatanBKCU/formPendaftaran.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    return _defineProperty({
      title: 'FORMULIR PENDAFTARAN DIKLAT',
      titleDesc: 'Daftar Menjadi Peserta Diklat',
      titleIcon: 'icon-plus3',
      level: 2,
      level2Title: 'daftar diklat',
      sasaran: [],
      kelas: 'aktivis',
      tingkatArray: [],
      tingkatName: [],
      formPendaftaran: {
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
      //
      submited: false,
      message: {
        show: false,
        content: ''
      }
    }, "submited", false);
  },
  created: function created() {
    if (this.mode == 'edit') {
      this.formPendaftaran = this.selected;
      this.formPendaftaran.tingkat = this.selected.aktivis.pekerjaan_aktif.tingkat;
      this.formPendaftaran.jabatan = this.selected.aktivis.pekerjaan_aktif.name;
      this.formPendaftaran.cu_id = this.selected.aktivis.pekerjaan_aktif.id_tempat;

      if (this.selected.aktivis.pendidikan_tertinggi) {
        this.formPendaftaran.pendidikan = this.selected.aktivis.pendidikan_tertinggi.tingkat + ' ' + this.selected.aktivis.pendidikan_tertinggi.name;
      }

      this.formPendaftaran.status = this.selected.status;
      this.formPendaftaran.kelamin = this.selected.aktivis.kelamin;
      this.formPendaftaran.agama = this.selected.aktivis.agama;
      this.formPendaftaran.tinggi = this.selected.aktivis.tinggi;
      this.formPendaftaran.tanggal_lahir = this.selected.aktivis.tanggal_lahir;
      this.formPendaftaran.tempat_lahir = this.selected.aktivis.tempat_lahir;
      this.formPendaftaran.name = this.selected.aktivis.name;
      this.formPendaftaran.gambar = this.selected.aktivis.gambar;
      this.formPendaftaran.jabatan = this.selected.pekerjaan_aktif.name;

      if (this.selected.aktivis.pekerjaan_aktif.tipe == 1) {
        this.formPendaftaran.lembaga = this.selected.aktivis.pekerjaan_aktif.cu.name;
      } else if (this.selected.aktivis.pekerjaan_aktif.tipe == 2) {
        this.formPendaftaran.lembaga = this.selected.aktivis.pekerjaan_aktif.lembaga_lain.name;
      } else if (this.selected.aktivis.pekerjaan_aktif.tipe == 3) {
        this.formPendaftaran.lembaga = "PUSKOPCUINA";
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
      this.formPendaftaran.aktivis_id = '';
      this.formPendaftaran.name_nametag = '';
      this.formPendaftaran.name_sertifikat = '';
      this.formPendaftaran.datang = '';
      this.formPendaftaran.pulang = '';
      this.formPendaftaran.keterangan = '';
      this.selectedItem = [];
    },
    selectedRow: function selectedRow(item) {
      this.selectedItem = item;
      this.formPendaftaran.tingkat = item.pekerjaan_aktif.tingkat;
      this.formPendaftaran.name_sertifikat = item.name;

      if (this.tingkatArray.includes(this.formPendaftaran.tingkat)) {
        this.formPendaftaran.aktivis_id = item.id;
        this.formPendaftaran.kegiatan_id = this.item.id;
        this.formPendaftaran.jabatan = item.pekerjaan_aktif.name;
        this.formPendaftaran.cu_id = item.pekerjaan_aktif.id_tempat;

        if (item.pendidikan_tertinggi) {
          this.formPendaftaran.pendidikan = item.pendidikan_tertinggi.tingkat + ' ' + item.pendidikan_tertinggi.name;
        }

        this.formPendaftaran.status = item.status;
        this.formPendaftaran.kelamin = item.kelamin;
        this.formPendaftaran.agama = item.agama;
        this.formPendaftaran.tinggi = item.tinggi;
        this.formPendaftaran.tanggal_lahir = item.tanggal_lahir;
        this.formPendaftaran.tempat_lahir = item.tempat_lahir;
        this.formPendaftaran.name = item.name;
        this.formPendaftaran.gambar = item.gambar;
        this.formPendaftaran.jabatan = item.pekerjaan_aktif.name;

        if (item.pekerjaan_aktif.tipe == 1) {
          this.formPendaftaran.lembaga = item.pekerjaan_aktif.cu.name;
        } else if (item.pekerjaan_aktif.tipe == 2) {
          this.formPendaftaran.lembaga = item.pekerjaan_aktif.lembaga_lain.name;
        } else if (item.pekerjaan_aktif.tipe == 3) {
          this.formPendaftaran.lembaga = "PUSKOPCUINA";
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
        this.$store.dispatch('kegiatanBKCU/checkPeserta', [this.item.id, this.formPendaftaran.aktivis_id]);
      } else {
        this.save();
      }
    },
    createPilih: function createPilih(value) {
      this.itemDataPilih.push(value);
      this.selectedItemPilih = {};
      this.modalTutup();
    },
    editPilih: function editPilih(value) {
      lodash__WEBPACK_IMPORTED_MODULE_0___default.a.remove(this.itemDataPilih, {
        index: value.index
      });

      this.itemDataPilih.push(value);
      this.selectedItemPilih = {};
      this.modalTutup();
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
    modalConfirmOk: function modalConfirmOk() {
      this.modalShow = false;

      if (this.state == 'hapusPanitia') {
        lodash__WEBPACK_IMPORTED_MODULE_0___default.a.remove(this.itemDataPanitia, {
          index: this.selectedItemPanitia.index
        });

        this.selectedItemPanitia = {};
      } else if (this.state == 'hapusPilih') {
        lodash__WEBPACK_IMPORTED_MODULE_0___default.a.remove(this.itemDataPilih, {
          index: this.selectedItemPilih.index
        });

        this.selectedItemPilih = {};
      } else {
        if (this.$route.meta.isDetail) {
          this.$router.push({
            name: this.kelas + 'Detail',
            params: {
              id: this.form.id
            }
          });
        }
      }
    },
    save: function save() {
      var _this = this;

      this.$validator.validateAll('formPendaftaran').then(function (result) {
        if (result) {
          if (_this.mode == 'edit') {
            _this.$store.dispatch('kegiatanBKCU/updatePeserta', [_this.formPendaftaran.id, _this.formPendaftaran]);
          } else {
            _this.formPendaftaran.status = _this.item.status;

            _this.$store.dispatch('kegiatanBKCU/storePeserta', [_this.item.tipe, _this.item.id, _this.formPendaftaran]);
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

/***/ "./resources/assets/js/views/kegiatanBKCU/formPendaftaran.vue":
/*!********************************************************************!*\
  !*** ./resources/assets/js/views/kegiatanBKCU/formPendaftaran.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formPendaftaran_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formPendaftaran.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/kegiatanBKCU/formPendaftaran.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _formPendaftaran_vue_vue_type_custom_index_0_blockType_div__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formPendaftaran.vue?vue&type=custom&index=0&blockType=div */ "./resources/assets/js/views/kegiatanBKCU/formPendaftaran.vue?vue&type=custom&index=0&blockType=div");
/* harmony import */ var _formPendaftaran_vue_vue_type_custom_index_0_blockType_div__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_formPendaftaran_vue_vue_type_custom_index_0_blockType_div__WEBPACK_IMPORTED_MODULE_2__);
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _formPendaftaran_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof _formPendaftaran_vue_vue_type_custom_index_0_blockType_div__WEBPACK_IMPORTED_MODULE_2___default.a === 'function') _formPendaftaran_vue_vue_type_custom_index_0_blockType_div__WEBPACK_IMPORTED_MODULE_2___default()(component)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/kegiatanBKCU/formPendaftaran.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/kegiatanBKCU/formPendaftaran.vue?vue&type=custom&index=0&blockType=div":
/*!**********************************************************************************************************!*\
  !*** ./resources/assets/js/views/kegiatanBKCU/formPendaftaran.vue?vue&type=custom&index=0&blockType=div ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./resources/assets/js/views/kegiatanBKCU/formPendaftaran.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/assets/js/views/kegiatanBKCU/formPendaftaran.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_formPendaftaran_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./formPendaftaran.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/kegiatanBKCU/formPendaftaran.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_formPendaftaran_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ })

}]);