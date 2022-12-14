(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[97],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/artikelSimo/form.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/artikelSimo/form.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
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
/* harmony import */ var _helpers_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../helpers/auth */ "./resources/assets/js/helpers/auth.js");
/* harmony import */ var _helpers_url_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../helpers/url.js */ "./resources/assets/js/helpers/url.js");
/* harmony import */ var _components_wajibBadge_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/wajibBadge.vue */ "./resources/assets/js/components/wajibBadge.vue");
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











/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    pageHeader: _components_pageHeader_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    appModal: _components_modal__WEBPACK_IMPORTED_MODULE_4__["default"],
    appImageUpload: _components_ImageUpload_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    message: _components_message_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    formButton: _components_formButton_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    formInfo: _components_formInfo_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    wajibBadge: _components_wajibBadge_vue__WEBPACK_IMPORTED_MODULE_10__["default"]
  },
  data: function data() {
    return {
      title: 'Tambah Artikel SIMO',
      titleDesc: 'Menambah artikel simo baru',
      titleIcon: 'icon-plus3',
      level2Title: 'Artikel SIMO',
      kelas: 'artikelSimo',
      id_cu: '',
      utama: '',
      UploadAdapter: function UploadAdapter(loader) {
        var _this = this;

        this.loader = loader;

        this.upload = function () {
          var body = new FormData();
          var user = Object(_helpers_auth__WEBPACK_IMPORTED_MODULE_8__["getLocalUser"])();
          var token = user.token;
          body.append('gambar', _this.loader.file);
          return fetch(_helpers_url_js__WEBPACK_IMPORTED_MODULE_9__["url_config"].api_url + 'artikelSimo/upload', {
            headers: {
              "Authorization": 'Bearer ' + token
            },
            body: body,
            method: 'POST'
          }).then(function (response) {
            return response.json();
          }).then(function (downloadUrl) {
            return {
              "default": downloadUrl
            };
          })["catch"](function (error) {
            console.log(error);
          });
        };

        this.abort = function () {
          console.log('Abort upload.');
        };
      },
      modalShow: false,
      modalState: '',
      modalTitle: '',
      modalColor: '',
      modalContent: '',
      submited: false,
      submitedKategori: false,
      submitedPenulis: false
    };
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    next(function (vm) {
      return vm.fetch();
    });
  },
  created: function created() {
    if (this.currentUser.id_cu === 0) {
      if (this.modelCuStat != 'success') {
        this.$store.dispatch('cu/getHeader');
      }
    }

    if (this.$route.meta.mode !== 'edit' && this.form.id_cu === undefined) {
      this.form.id_cu = this.currentUser.id_cu;
      this.changeCU(this.currentUser.id_cu);
    }
  },
  watch: {
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
      if (this.currentUser.id_cu === 0) {
        if (this.modelCuStat != 'success') {
          this.$store.dispatch('cu/getHeader');
        }
      }

      if (this.$route.meta.mode === 'edit') {
        this.$store.dispatch(this.kelas + '/edit', this.$route.params.id);
        this.title = 'Ubah Artikel SIMO';
        this.titleDesc = 'Mengubah artikel Simo';
        this.titleIcon = 'icon-pencil5';
      } else {
        this.title = 'Tambah Artikel SIMO';
        this.titleDesc = 'Menambah artikel Simo';
        this.titleIcon = 'icon-plus3';
        this.$store.dispatch(this.kelas + '/create');
      }
    },
    save: function save() {
      var _this2 = this;

      var formData = Object(_helpers_form__WEBPACK_IMPORTED_MODULE_2__["toMulipartedForm"])(this.form, this.$route.meta.mode);
      this.$validator.validateAll('form').then(function (result) {
        if (result) {
          if (_this2.$route.meta.mode === 'edit') {
            _this2.$store.dispatch(_this2.kelas + '/update', [_this2.$route.params.id, formData]);
          } else {
            _this2.$store.dispatch(_this2.kelas + '/store', formData);
          }

          _this2.submited = false;
        } else {
          window.scrollTo(0, 0);
          _this2.submited = true;
        }
      });
    },
    back: function back() {
      this.$router.push({
        name: this.kelas
      });
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
    },
    processFile: function processFile(event) {
      this.form.gambar = event.target.files[0];
    }
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('auth', {
    currentUser: 'currentUser'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('artikelSimo', {
    form: 'data',
    formStat: 'dataStat',
    rules: 'rules',
    options: 'options',
    updateResponse: 'update',
    updateStat: 'updateStat'
  }))
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./public/css/admin/ckeditor-document-style.css?vue&type=style&index=0&id=28df5362&lang=css&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./public/css/admin/ckeditor-document-style.css?vue&type=style&index=0&id=28df5362&lang=css&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".document-editor[data-v-28df5362] {\n  border: 1px solid var(--ck-color-base-border);\n  border-radius: var(--ck-border-radius);\n\n  /* Set vertical boundaries for the document editor. */\n  max-height: 700px;\n\n  /* This element is a flex container for easier rendering. */\n  display: flex;\n  flex-flow: column nowrap;\n}\n.document-editor__toolbar[data-v-28df5362] {\n  /* Make sure the toolbar container is always above the editable. */\n  z-index: 1;\n\n  /* Create the illusion of the toolbar floating over the editable. */\n  box-shadow: 0 0 5px hsla( 0,0%,0%,.2 );\n\n  /* Use the CKEditor CSS variables to keep the UI consistent. */\n  border-bottom: 1px solid var(--ck-color-toolbar-border);\n}\n\n/* Adjust the look of the toolbar inside the container. */\n.document-editor__toolbar .ck-toolbar[data-v-28df5362] {\n  border: 0;\n  border-radius: 0;\n}\n\n/* Make the editable container look like the inside of a native word processor application. */\n.document-editor__editable-container[data-v-28df5362] {\n  padding: calc( 2 * var(--ck-spacing-large) );\n  background: var(--ck-color-base-foreground);\n\n  /* Make it possible to scroll the \"page\" of the edited content. */\n  overflow-y: scroll;\n}\n.document-editor__editable-container .ck-editor__editable[data-v-28df5362] {\n  /* Set the dimensions of the \"page\". */\n  width: 98%;\n  /* min-height: 21cm; */\n\n  /* Keep the \"page\" off the boundaries of the container. */\n  padding: 1cm 2cm 2cm;\n\n  border: 1px hsl( 0,0%,82.7% ) solid;\n  border-radius: var(--ck-border-radius);\n  background: white;\n\n  /* The \"page\" should cast a slight shadow (3D illusion). */\n  box-shadow: 0 0 5px hsla( 0,0%,0%,.1 );\n\n  /* Center the \"page\". */\n  margin: 0 auto;\n}\n\n/* Set the default font for the \"page\" of the content. */\n.document-editor .ck-content[data-v-28df5362],\n.document-editor .ck-heading-dropdown .ck-list .ck-button__label[data-v-28df5362] {\n  font: 16px/1.6 \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n\n/* Adjust the headings dropdown to host some larger heading styles. */\n.document-editor .ck-heading-dropdown .ck-list .ck-button__label[data-v-28df5362] {\n  line-height: calc( 1.7 * var(--ck-line-height-base) * var(--ck-font-size-base) );\n  min-width: 6em;\n}\n\n/* Scale down all heading previews because they are way too big to be presented in the UI.\nPreserve the relative scale, though. */\n.document-editor .ck-heading-dropdown .ck-list .ck-button:not(.ck-heading_paragraph) .ck-button__label[data-v-28df5362] {\n  transform: scale(0.8);\n  transform-origin: left;\n}\n\n/* Set the styles for \"Heading 1\". */\n.document-editor .ck-content h2[data-v-28df5362],\n.document-editor .ck-heading-dropdown .ck-heading_heading1 .ck-button__label[data-v-28df5362] {\n  font-size: 2.18em;\n  font-weight: normal;\n}\n.document-editor .ck-content h2[data-v-28df5362] {\n  line-height: 1.37em;\n  padding-top: .342em;\n  margin-bottom: .142em;\n}\n\n/* Set the styles for \"Heading 2\". */\n.document-editor .ck-content h3[data-v-28df5362],\n.document-editor .ck-heading-dropdown .ck-heading_heading2 .ck-button__label[data-v-28df5362] {\n  font-size: 1.75em;\n  font-weight: normal;\n  color: hsl( 203, 100%, 50% );\n}\n.document-editor .ck-heading-dropdown .ck-heading_heading2.ck-on .ck-button__label[data-v-28df5362] {\n  color: var(--ck-color-list-button-on-text);\n}\n\n/* Set the styles for \"Heading 2\". */\n.document-editor .ck-content h3[data-v-28df5362] {\n  line-height: 1.86em;\n  padding-top: .171em;\n  margin-bottom: .357em;\n}\n\n/* Set the styles for \"Heading 3\". */\n.document-editor .ck-content h4[data-v-28df5362],\n.document-editor .ck-heading-dropdown .ck-heading_heading3 .ck-button__label[data-v-28df5362] {\n  font-size: 1.31em;\n  font-weight: bold;\n}\n.document-editor .ck-content h4[data-v-28df5362] {\n  line-height: 1.24em;\n  padding-top: .286em;\n  margin-bottom: .952em;\n}\n\n/* Set the styles for \"Paragraph\". */\n.document-editor .ck-content p[data-v-28df5362] {\n  font-size: 1em;\n  line-height: 1.63em;\n  padding-top: .5em;\n  margin-bottom: 1.13em;\n}\n\n/* Make the block quoted text serif with some additional spacing. */\n.document-editor .ck-content blockquote[data-v-28df5362] {\n  font-family: Georgia, serif;\n  margin-left: calc( 2 * var(--ck-spacing-large) );\n  margin-right: calc( 2 * var(--ck-spacing-large) );\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./public/css/admin/ckeditor-document-style.css?vue&type=style&index=0&id=28df5362&lang=css&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./public/css/admin/ckeditor-document-style.css?vue&type=style&index=0&id=28df5362&lang=css&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!./ckeditor-document-style.css?vue&type=style&index=0&id=28df5362&lang=css&scoped=true& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./public/css/admin/ckeditor-document-style.css?vue&type=style&index=0&id=28df5362&lang=css&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/artikelSimo/form.vue?vue&type=template&id=28df5362&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/artikelSimo/form.vue?vue&type=template&id=28df5362&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
                        _c("div", { staticClass: "col-md-6" }, [
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
                                  _vm._v("\n\t\t\t\t\t\t\t\t\t\t\tJudul: "),
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
                                    value: "required|min:5",
                                    expression: "'required|min:5'",
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
                                    "Silahkan masukkan judul artikel",
                                  "data-vv-as": "Judul",
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
                                    _vm._v("??"),
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
                                "has-error": _vm.errors.has("form.utamakan"),
                              },
                            },
                            [
                              _c(
                                "h5",
                                {
                                  class: {
                                    "text-danger":
                                      _vm.errors.has("form.utamakan"),
                                  },
                                },
                                [
                                  _vm.errors.has("form.utamakan")
                                    ? _c("i", { staticClass: "icon-cross2" })
                                    : _vm._e(),
                                  _vm._v("\n\t\t\t\t\t\t\t\t\t\t\tUtamakan: "),
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
                                      value: _vm.form.utamakan,
                                      expression: "form.utamakan",
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
                                    name: "utamakan",
                                    "data-width": "100%",
                                    "data-vv-as": "utamakan",
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
                                        "utamakan",
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
                                    [_vm._v("Silahkan pilih tipe")]
                                  ),
                                  _vm._v(" "),
                                  _c("option", { attrs: { value: "1" } }, [
                                    _vm._v("Jadikan artikel utama"),
                                  ]),
                                  _vm._v(" "),
                                  _c("option", { attrs: { value: "0" } }, [
                                    _vm._v("Tidak jadikan artikel utama"),
                                  ]),
                                ]
                              ),
                              _vm._v(" "),
                              _c("br"),
                              _vm._v(" "),
                              _vm.errors.has("form.utamakan")
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
                                            _vm.errors.first("form.utamakan")
                                          ) +
                                          "\n\t\t\t\t\t\t\t\t\t\t"
                                      ),
                                    ]
                                  )
                                : _c("small", { staticClass: "text-muted" }, [
                                    _vm._v("??\n\t\t\t\t\t\t\t\t\t\t"),
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
                              _c("h5", [_vm._v("Gambar Utama:")]),
                              _vm._v(" "),
                              _c("app-image-upload", {
                                attrs: {
                                  image_loc: "/images/artikel_simo/",
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
                        _vm._m(0),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-12" }, [
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c("h5", [_vm._v("Ringkasan:")]),
                              _vm._v(" "),
                              _c("ckeditor", {
                                attrs: { type: "classic" },
                                model: {
                                  value: _vm.form.ringkasan,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.form, "ringkasan", $$v)
                                  },
                                  expression: "form.ringkasan",
                                },
                              }),
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
                              _c("h5", [_vm._v("Isi Artikel:")]),
                              _vm._v(" "),
                              _c("ckeditor", {
                                attrs: {
                                  type: "classic",
                                  "upload-adapter": _vm.UploadAdapter,
                                },
                                model: {
                                  value: _vm.form.content,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.form, "content", $$v)
                                  },
                                  expression: "form.content",
                                },
                              }),
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
      _c(
        "app-modal",
        {
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
        },
        [
          _c("template", { slot: "modal-title" }, [
            _vm._v("\n\t\t\t" + _vm._s(_vm.modalTitle) + "\n\t\t"),
          ]),
          _vm._v(" "),
          _c(
            "template",
            { slot: "modal-body1" },
            [
              _c("form-penulis", {
                attrs: { id_cu: _vm.id_cu },
                on: { cancelClick: _vm.modalTutup },
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "template",
            { slot: "modal-body2" },
            [
              _c("form-kategori", {
                attrs: { id_cu: _vm.id_cu },
                on: { cancelClick: _vm.modalTutup },
              }),
            ],
            1
          ),
          _vm._v("]\n\n\t"),
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
    return _c("div", { staticClass: "col-md-12" }, [_c("br")])
  },
]
render._withStripped = true



/***/ }),

/***/ "./public/css/admin/ckeditor-document-style.css?vue&type=style&index=0&id=28df5362&lang=css&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./public/css/admin/ckeditor-document-style.css?vue&type=style&index=0&id=28df5362&lang=css&scoped=true& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_ckeditor_document_style_css_vue_type_style_index_0_id_28df5362_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!./ckeditor-document-style.css?vue&type=style&index=0&id=28df5362&lang=css&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./public/css/admin/ckeditor-document-style.css?vue&type=style&index=0&id=28df5362&lang=css&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_ckeditor_document_style_css_vue_type_style_index_0_id_28df5362_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_ckeditor_document_style_css_vue_type_style_index_0_id_28df5362_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_ckeditor_document_style_css_vue_type_style_index_0_id_28df5362_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_ckeditor_document_style_css_vue_type_style_index_0_id_28df5362_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/assets/js/helpers/url.js":
/*!********************************************!*\
  !*** ./resources/assets/js/helpers/url.js ***!
  \********************************************/
/*! exports provided: url_config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "url_config", function() { return url_config; });
var api_url = '';

switch ("development") {
  case 'development':
    api_url = 'https://bkcuvue.test/api/';
    break;

  case 'production':
    api_url = 'https://puskopcuina.org/api/';
    break;
}

var url_config = {
  api_url: api_url
};

/***/ }),

/***/ "./resources/assets/js/views/artikelSimo/form.vue":
/*!********************************************************!*\
  !*** ./resources/assets/js/views/artikelSimo/form.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_vue_vue_type_template_id_28df5362_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.vue?vue&type=template&id=28df5362&scoped=true& */ "./resources/assets/js/views/artikelSimo/form.vue?vue&type=template&id=28df5362&scoped=true&");
/* harmony import */ var _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/artikelSimo/form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _public_css_admin_ckeditor_document_style_css_vue_type_style_index_0_id_28df5362_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../public/css/admin/ckeditor-document-style.css?vue&type=style&index=0&id=28df5362&lang=css&scoped=true& */ "./public/css/admin/ckeditor-document-style.css?vue&type=style&index=0&id=28df5362&lang=css&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _form_vue_vue_type_template_id_28df5362_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _form_vue_vue_type_template_id_28df5362_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "28df5362",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/artikelSimo/form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/artikelSimo/form.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/assets/js/views/artikelSimo/form.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/artikelSimo/form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/artikelSimo/form.vue?vue&type=template&id=28df5362&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/assets/js/views/artikelSimo/form.vue?vue&type=template&id=28df5362&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_28df5362_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=template&id=28df5362&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/artikelSimo/form.vue?vue&type=template&id=28df5362&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_28df5362_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_28df5362_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);