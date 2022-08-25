(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[141],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/kegiatanBKCU/formulirPendaftaranDaftarPeserta.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/kegiatanBKCU/formulirPendaftaranDaftarPeserta.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _components_dataviewer2_vue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/dataviewer2.vue */ "./resources/assets/js/components/dataviewer2.vue");
/* harmony import */ var _components_checkValue_vue__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/checkValue.vue */ "./resources/assets/js/components/checkValue.vue");
var _methods, _props$components$dat;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//















 //import daftarCU from '../../components/daftarCU.vue';

/* harmony default export */ __webpack_exports__["default"] = (_props$components$dat = {
  props: ['mode', 'selected', 'item', 'tingkat'],
  components: {
    DataViewer: _components_dataviewer2_vue__WEBPACK_IMPORTED_MODULE_14__["default"],
    pageHeader: _components_pageHeader_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    appModal: _components_modal__WEBPACK_IMPORTED_MODULE_7__["default"],
    formButton: _components_formButton_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    formInfo: _components_formInfo_vue__WEBPACK_IMPORTED_MODULE_10__["default"],
    Cleave: vue_cleave_component__WEBPACK_IMPORTED_MODULE_11___default.a,
    dataTable: _components_datatable_vue__WEBPACK_IMPORTED_MODULE_12__["default"],
    infoIcon: _components_infoIcon_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    wajibBadge: _components_wajibBadge_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    wajibUkuran: _components_wajibUkuran_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    DatePicker: _components_datePicker_vue__WEBPACK_IMPORTED_MODULE_13__["default"],
    checkValue: _components_checkValue_vue__WEBPACK_IMPORTED_MODULE_15__["default"],
    Message: _components_message_vue__WEBPACK_IMPORTED_MODULE_8__["default"]
  },
  data: function data() {
    return {
      title: '',
      kelas: 'aktivis',
      tingkatArray: [],
      tingkatName: [],
      formulirPendaftaranDaftarPeserta: {
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
      this.formulirPendaftaranDaftarPeserta = this.selected;
      this.formulirPendaftaranDaftarPeserta.tingkat = this.selected.aktivis.pekerjaan_aktif.tingkat;
      this.formulirPendaftaranDaftarPeserta.jabatan = this.selected.aktivis.pekerjaan_aktif.name;
      this.formulirPendaftaranDaftarPeserta.cu_id = this.selected.aktivis.pekerjaan_aktif.id_tempat;

      if (this.selected.aktivis.pendidikan_tertinggi) {
        this.formulirPendaftaranDaftarPeserta.pendidikan = this.selected.aktivis.pendidikan_tertinggi.tingkat + ' ' + this.selected.aktivis.pendidikan_tertinggi.name;
      }

      this.formulirPendaftaranDaftarPeserta.status = this.selected.status;
      this.formulirPendaftaranDaftarPeserta.kelamin = this.selected.aktivis.kelamin;
      this.formulirPendaftaranDaftarPeserta.agama = this.selected.aktivis.agama;
      this.formulirPendaftaranDaftarPeserta.tinggi = this.selected.aktivis.tinggi;
      this.formulirPendaftaranDaftarPeserta.tanggal_lahir = this.selected.aktivis.tanggal_lahir;
      this.formulirPendaftaranDaftarPeserta.tempat_lahir = this.selected.aktivis.tempat_lahir;
      this.formulirPendaftaranDaftarPeserta.name = this.selected.aktivis.name;
      this.formulirPendaftaranDaftarPeserta.gambar = this.selected.aktivis.gambar;
      this.formulirPendaftaranDaftarPeserta.jabatan = this.selected.pekerjaan_aktif.name;

      if (this.selected.aktivis.pekerjaan_aktif.tipe == 1) {
        this.formulirPendaftaranDaftarPeserta.lembaga = this.selected.aktivis.pekerjaan_aktif.cu.name;
      } else if (this.selected.aktivis.pekerjaan_aktif.tipe == 2) {
        this.formulirPendaftaranDaftarPeserta.lembaga = this.selected.aktivis.pekerjaan_aktif.lembaga_lain.name;
      } else if (this.selected.aktivis.pekerjaan_aktif.tipe == 3) {
        this.formulirPendaftaranDaftarPeserta.lembaga = "PUSKOPCUINA";
      }
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
  }
}, _defineProperty(_props$components$dat, "watch", {
  // modelTempatStat(value){
  // 	if(value === "success"){
  // 		this.changeTempat(this.form.id_tempat);
  // 	}
  // },
  itemStat: function itemStat(value) {
    if (value === "success") {
      this.hideColumn();
      this.checkTipe(this.item.tipe);

      if (this.currentUser.aktivis) {
        if (this.item.status == 4) {
          this.checkPanitia();
        }
      } else {
        this.modalOpen('pesertaTidakTerdaftar');
      }

      this.fetchPesertaTerdaftar(this.queryPesertaTerdaftar);
      this.fetchCountPeserta();
      this.fetchCountKeputusan();
      this.fetchCountPertanyaan();
      this.fetchlistMateri2();
      var valDalam;

      var _iterator = _createForOfIteratorHelper(this.item.panitia_dalam),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          valDalam = _step.value;
          this.itemDataPanitia.push(valDalam);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var valLuar;

      var _iterator2 = _createForOfIteratorHelper(this.item.panitia_luar),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          valLuar = _step2.value;
          this.itemDataPanitia.push(valLuar);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      var valLuarLembaga;

      var _iterator3 = _createForOfIteratorHelper(this.item.panitia_luar_lembaga),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          valLuarLembaga = _step3.value;
          this.itemDataPanitia.push(valLuarLembaga);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
  }
}), _defineProperty(_props$components$dat, "methods", (_methods = {
  //fetch(){
  //	if(this.$route.meta.mode == 'edit'){
  //		this.$store.dispatch(this.kelas + '/edit',this.$route.params.id);	
  //	} else {
  //  	this.checkTipe(this.$route.params.tipe);
  //	this.$store.dispatch(this.kelas + '/create', this.$route.params.id);
  //	this.dataview='list';
  //}
  // this.$store.dispatch('provinces/get');
  //},
  fetch: function fetch(params) {
    if (this.currentUser.id_cu == 0) {
      this.$store.dispatch('aktivis/index', [params, 'semua', 'aktif']);
      this.disableColumnCu(false);
    } else {
      this.$store.dispatch('aktivis/indexCu', [params, this.currentUser.id_cu, 'semua', 'aktif']);
      this.disableColumnCu(true);
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

    this.$validator.validateAll('formulirPendaftaranDaftarPeserta').then(function (result) {
      if (result) {
        if (_this.$route.meta.mode == 'edit') {
          _this.$store.dispatch('kegiatanBKCU/updatePeserta', [_this.$route.params.id, _this.formulirPendaftaranDaftarPeserta]);
        } else {
          _this.$store.dispatch('kegiatanBKCU/storePeserta', [_this.$route.params.id, _this.formulirPendaftaranDaftarPeserta]);
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
          id: this.formulirPendaftaranDaftarPesertaDaftarPeserta.id
        }
      });
    } else {
      if (this.$route.meta.mode == 'edit') {
        this.$router.push({
          name: this.kelas,
          params: {
            id: this.formulirPendaftaranDaftarPeserta.id,
            periode: this.momentYear()
          }
        });
      }
    }
  },
  selectedRow: function selectedRow(item) {
    this.selectedItem = item;
    this.formulirPendaftaranDaftarPeserta.tingkat = item.pekerjaan_aktif.tingkat;
    this.formulirPendaftaranDaftarPeserta.name_sertifikat = item.name;

    if (this.tingkatArray.includes(this.formulirPendaftaranDaftarPeserta.tingkat)) {
      this.formulirPendaftaranDaftarPeserta.aktivis_id = item.id;
      this.formulirPendaftaranDaftarPeserta.kegiatan_id = this.item.id;
      this.formulirPendaftaranDaftarPeserta.jabatan = item.pekerjaan_aktif.name;
      this.formulirPendaftaranDaftarPeserta.cu_id = item.pekerjaan_aktif.id_tempat;

      if (item.pendidikan_tertinggi) {
        this.formulirPendaftaranDaftarPeserta.pendidikan = item.pendidikan_tertinggi.tingkat + ' ' + item.pendidikan_tertinggi.name;
      }

      this.formulirPendaftaranDaftarPeserta.status = item.status;
      this.formulirPendaftaranDaftarPeserta.kelamin = item.kelamin;
      this.formulirPendaftaranDaftarPeserta.agama = item.agama;
      this.formulirPendaftaranDaftarPeserta.tinggi = item.tinggi;
      this.formulirPendaftaranDaftarPeserta.tanggal_lahir = item.tanggal_lahir;
      this.formulirPendaftaranDaftarPeserta.tempat_lahir = item.tempat_lahir;
      this.formulirPendaftaranDaftarPeserta.name = item.name;
      this.formulirPendaftaranDaftarPeserta.gambar = item.gambar;
      this.formulirPendaftaranDaftarPeserta.jabatan = item.pekerjaan_aktif.name;

      if (item.pekerjaan_aktif.tipe == 1) {
        this.formulirPendaftaranDaftarPeserta.lembaga = item.pekerjaan_aktif.cu.name;
      } else if (item.pekerjaan_aktif.tipe == 2) {
        this.formulirPendaftaranDaftarPeserta.lembaga = item.pekerjaan_aktif.lembaga_lain.name;
      } else if (item.pekerjaan_aktif.tipe == 3) {
        this.formulirPendaftaranDaftarPeserta.lembaga = "PUSKOPCUINA";
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
      this.$store.dispatch('kegiatanBKCU/checkPeserta', [this.item.id, this.formulirPendaftaranDaftarPeserta.aktivis_id]);
    } else {
      this.save();
    }
  }
}, _defineProperty(_methods, "selectedRow", function selectedRow(item, index) {
  this.selectedItemPilih = item;
  this.selectedItemPilih.index = index;
}), _defineProperty(_methods, "momentYear", function momentYear() {
  return moment().year();
}), _methods)), _defineProperty(_props$components$dat, "computed", _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('auth', {
  currentUser: 'currentUser'
})), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('kegiatanBKCU', {
  itemData: 'dataS',
  itemDataStat: 'dataStatS',
  updateMessage: 'update',
  updateStat: 'updateStat'
})), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('aktivis', {
  itemData: 'dataS',
  itemDataStat: 'dataStatS'
}))), _props$components$dat);

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/kegiatanBKCU/formulirPendaftaranDaftarPeserta.vue?vue&type=template&id=0c52fc9a&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/kegiatanBKCU/formulirPendaftaranDaftarPeserta.vue?vue&type=template&id=0c52fc9a& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
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
      _vm.formulirPendaftaranDaftarPeserta.aktivis_id == "" &&
      _vm.mode == "create"
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
                                  staticClass: "img-rounded img-fluid wmin-sm",
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
                                  staticClass: "img-rounded img-fluid wmin-sm",
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
                                                  props.item.pekerjaan_aktif.cu
                                                    .name,
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
                                        props.item.pekerjaan_aktif.lembaga_lain
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
                                        props.item.pendidikan_tertinggi.tingkat,
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
      _c("data-viewer", {
        attrs: {
          title: _vm.title,
          columnData: _vm.columnData,
          itemData: _vm.itemData,
          query: _vm.query,
          itemDataStat: _vm.itemDataStat,
        },
        on: { fetch: _vm.fetch },
        scopedSlots: _vm._u([
          {
            key: "item-desktop",
            fn: function (props) {
              return [
                _c(
                  "tr",
                  {
                    staticClass: "text-nowrap",
                    class: { "bg-info": _vm.selectedItem.id === props.item.id },
                  },
                  [
                    !_vm.columnData[0].hide
                      ? _c("td", [
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
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    !_vm.columnData[1].hide
                      ? _c(
                          "td",
                          [
                            _c("check-value", {
                              attrs: { value: props.item.name },
                            }),
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    !_vm.columnData[2].hide
                      ? _c(
                          "td",
                          [
                            _c("check-value", {
                              attrs: { value: props.item.umur },
                            }),
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    !_vm.columnData[3].hide
                      ? _c(
                          "td",
                          [
                            _c("check-value", {
                              attrs: { value: props.item.nomor },
                            }),
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    !_vm.columnData[4].hide
                      ? _c(
                          "td",
                          [
                            _c("check-value", {
                              attrs: { value: props.item.pendidikan },
                            }),
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    !_vm.columnData[5].hide
                      ? _c(
                          "td",
                          [
                            _c("check-value", {
                              attrs: { value: props.item.tempat_lahir },
                            }),
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    !_vm.columnData[6].hide
                      ? _c(
                          "td",
                          [
                            _c("check-value", {
                              attrs: { value: props.item.agama },
                            }),
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    !_vm.columnData[7].hide
                      ? _c(
                          "td",
                          [
                            _c("check-value", {
                              attrs: { value: props.item.tinggi },
                            }),
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    !_vm.columnData[8].hide
                      ? _c(
                          "td",
                          [
                            _c("check-value", {
                              attrs: { value: props.item.status_pernikahan },
                            }),
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    !_vm.columnData[9].hide
                      ? _c(
                          "td",
                          [
                            _c("check-value", {
                              attrs: { value: props.item.tanggal_lahir },
                            }),
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    !_vm.columnData[10].hide
                      ? _c(
                          "td",
                          [
                            _c("check-value", {
                              attrs: { value: props.item.kelamin },
                            }),
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    !_vm.columnData[11].hide
                      ? _c(
                          "td",
                          [
                            _c("check-value", {
                              attrs: { value: props.item.name_nametag },
                            }),
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    !_vm.columnData[12].hide
                      ? _c(
                          "td",
                          [
                            _c("check-value", {
                              attrs: { value: props.item.name_sertifikat },
                            }),
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    !_vm.columnData[13].hide
                      ? _c(
                          "td",
                          [
                            _c("check-value", {
                              attrs: { value: props.item.datang },
                            }),
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    !_vm.columnData[14].hide
                      ? _c(
                          "td",
                          [
                            _c("check-value", {
                              attrs: { value: props.item.pulang },
                            }),
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    !_vm.columnData[15].hide
                      ? _c(
                          "td",
                          [
                            _c("check-value", {
                              attrs: { value: props.item.keterangan },
                            }),
                          ],
                          1
                        )
                      : _vm._e(),
                  ]
                ),
              ]
            },
          },
          {
            key: "item-mobile",
            fn: function (props) {
              return [
                _c("div", { staticClass: "col-lg-4 col-md-6" }, [
                  _c("div", { staticClass: "card cursor-pointer" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "card-header bg-light header-elements-inline",
                      },
                      [
                        _c(
                          "h6",
                          { staticClass: "card-title" },
                          [
                            _c("check-value", {
                              attrs: { value: props.item.kode_sertifikat },
                            }),
                          ],
                          1
                        ),
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "card-body" }, [
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-sm-6" }, [
                          _c("ul", { staticClass: "list list-unstyled mb-1" }, [
                            _c("li", [
                              _vm._v("No.: "),
                              _c("span", { staticClass: "text-muted" }, [
                                _vm._v(_vm._s(props.item.id)),
                              ]),
                            ]),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-6" }, [
                          _c("ul", { staticClass: "list list-unstyled mb-1" }, [
                            _c("li", [
                              _vm._v("Nama: "),
                              _c("span", { staticClass: "text-muted" }, [
                                _vm._v(_vm._s(props.item.name)),
                              ]),
                            ]),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-6" }, [
                          _c("ul", { staticClass: "list list-unstyled mb-1" }, [
                            _c("li", [
                              _vm._v("Jenis Kelamin: "),
                              _c("span", { staticClass: "text-muted" }, [
                                _vm._v(_vm._s(props.item.genre)),
                              ]),
                            ]),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-6" }, [
                          _c("ul", { staticClass: "list list-unstyled mb-1" }, [
                            _c("li", [
                              _vm._v("Umur: "),
                              _c("span", { staticClass: "text-muted" }, [
                                _vm._v(_vm._s(props.item.umur)),
                              ]),
                            ]),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-6" }, [
                          _c("ul", { staticClass: "list list-unstyled mb-1" }, [
                            _c("li", [
                              _vm._v("Tanggal Lahir: "),
                              _c("span", { staticClass: "text-muted" }, [
                                _vm._v(_vm._s(props.item.tanggal_lahir)),
                              ]),
                            ]),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-6" }, [
                          _c("ul", { staticClass: "list list-unstyled mb-1" }, [
                            _c("li", [
                              _vm._v("Tempat Lahir: "),
                              _c("span", { staticClass: "text-muted" }, [
                                _vm._v(_vm._s(props.item.tempat_lahir)),
                              ]),
                            ]),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-6" }, [
                          _c("ul", { staticClass: "list list-unstyled mb-1" }, [
                            _c("li", [
                              _vm._v("Tinggi Badan: "),
                              _c("span", { staticClass: "text-muted" }, [
                                _vm._v(_vm._s(props.item.agama)),
                              ]),
                            ]),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-6" }, [
                          _c("ul", { staticClass: "list list-unstyled mb-1" }, [
                            _c("li", [
                              _vm._v("Agama : "),
                              _c("span", { staticClass: "text-muted" }, [
                                _vm._v(_vm._s(props.item.tinggi)),
                              ]),
                            ]),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-6" }, [
                          _c("ul", { staticClass: "list list-unstyled mb-1" }, [
                            _c("li", [
                              _vm._v("Pendidikan Terakhir: "),
                              _c("span", { staticClass: "text-muted" }, [
                                _vm._v(_vm._s(props.item.pendidikan)),
                              ]),
                            ]),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-6" }, [
                          _c("ul", { staticClass: "list list-unstyled mb-1" }, [
                            _c("li", [
                              _vm._v("Status Pernikahan: "),
                              _c("span", { staticClass: "text-muted" }, [
                                _vm._v(_vm._s(props.item.status_pernikahan)),
                              ]),
                            ]),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-6" }, [
                          _c("ul", { staticClass: "list list-unstyled mb-1" }, [
                            _c("li", [
                              _vm._v("Alamat: "),
                              _c("span", { staticClass: "text-muted" }, [
                                _vm._v(_vm._s(props.item.alamat)),
                              ]),
                            ]),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-6" }, [
                          _c("ul", { staticClass: "list list-unstyled mb-1" }, [
                            _c("li", [
                              _vm._v("No. HP: "),
                              _c("span", { staticClass: "text-muted" }, [
                                _vm._v(_vm._s(props.item.nomor_hp)),
                              ]),
                            ]),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-6" }, [
                          _c("ul", { staticClass: "list list-unstyled mb-1" }, [
                            _c("li", [
                              _vm._v("Email: "),
                              _c("span", { staticClass: "text-muted" }, [
                                _vm._v(_vm._s(props.item.email)),
                              ]),
                            ]),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
              ]
            },
          },
        ]),
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/views/kegiatanBKCU/formulirPendaftaranDaftarPeserta.vue":
/*!*************************************************************************************!*\
  !*** ./resources/assets/js/views/kegiatanBKCU/formulirPendaftaranDaftarPeserta.vue ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formulirPendaftaranDaftarPeserta_vue_vue_type_template_id_0c52fc9a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formulirPendaftaranDaftarPeserta.vue?vue&type=template&id=0c52fc9a& */ "./resources/assets/js/views/kegiatanBKCU/formulirPendaftaranDaftarPeserta.vue?vue&type=template&id=0c52fc9a&");
/* harmony import */ var _formulirPendaftaranDaftarPeserta_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formulirPendaftaranDaftarPeserta.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/kegiatanBKCU/formulirPendaftaranDaftarPeserta.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _formulirPendaftaranDaftarPeserta_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _formulirPendaftaranDaftarPeserta_vue_vue_type_template_id_0c52fc9a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _formulirPendaftaranDaftarPeserta_vue_vue_type_template_id_0c52fc9a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/kegiatanBKCU/formulirPendaftaranDaftarPeserta.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/kegiatanBKCU/formulirPendaftaranDaftarPeserta.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************!*\
  !*** ./resources/assets/js/views/kegiatanBKCU/formulirPendaftaranDaftarPeserta.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_formulirPendaftaranDaftarPeserta_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./formulirPendaftaranDaftarPeserta.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/kegiatanBKCU/formulirPendaftaranDaftarPeserta.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_formulirPendaftaranDaftarPeserta_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/kegiatanBKCU/formulirPendaftaranDaftarPeserta.vue?vue&type=template&id=0c52fc9a&":
/*!********************************************************************************************************************!*\
  !*** ./resources/assets/js/views/kegiatanBKCU/formulirPendaftaranDaftarPeserta.vue?vue&type=template&id=0c52fc9a& ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_formulirPendaftaranDaftarPeserta_vue_vue_type_template_id_0c52fc9a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./formulirPendaftaranDaftarPeserta.vue?vue&type=template&id=0c52fc9a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/kegiatanBKCU/formulirPendaftaranDaftarPeserta.vue?vue&type=template&id=0c52fc9a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_formulirPendaftaranDaftarPeserta_vue_vue_type_template_id_0c52fc9a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_formulirPendaftaranDaftarPeserta_vue_vue_type_template_id_0c52fc9a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);