<template>
  <div>
    <!-- page-header -->
    <page-header
      :title="title"
      :titleDesc="titleDesc"
      :titleIcon="titleIcon"
      :level="level"
      :level2Title="level2Title"
      :level2Route="kelas"
      @level2Back="back()"
    ></page-header>

    <!-- content -->
    <div class="page-content pt-0">
      <div class="content-wrapper">
        <div class="content">
          <!-- message -->
          <message
            v-if="errors.any('formUmum') && submited"
            :title="'Oops terjadi kesalahan'"
            :errorItem="errors.items"
          >
          </message>

          <!-- main panel -->
          <form
            @submit.prevent="save"
            enctype="multipart/form-data"
            data-vv-scope="formUmum"
          >
            <!-- informasi umum -->
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <!-- kode -->
                  <div class="col-md-6">
                    <div
                      class="form-group"
                      :class="{ 'has-error': errors.has('formUmum.name') }"
                    >
                      <!-- title -->
                      <h5
                        :class="{ 'text-danger': errors.has('formUmum.name') }"
                      >
                        <i
                          class="icon-cross2"
                          v-if="errors.has('formUmum.name')"
                        ></i>
                        Nama Lengkap : <wajib-badge></wajib-badge>
                      </h5>

                      <!-- text -->
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="Silahkan masukkan Nama Lengkap"
                        v-validate="'required'"
                        data-vv-as="Nama"
                        v-model="formUmum.name"
                      />

                      <!-- error message -->
                      <small
                        class="text-muted text-danger"
                        v-if="errors.has('formUmum.name')"
                      >
                        <i class="icon-arrow-small-right"></i>
                        {{ errors.first("formUmum.name") }}
                      </small>
                      <small class="text-muted" v-else>&nbsp;</small>
                    </div>
                  </div>

                  <!-- name -->
                  <div class="col-md-6">
                    <div
                      class="form-group"
                      :class="{
                        'has-error': errors.has('formUmum.name_nametag'),
                      }"
                    >
                      <!-- title -->
                      <h5
                        :class="{
                          'text-danger': errors.has('formUmum.name_nametag'),
                        }"
                      >
                        <i
                          class="icon-cross2"
                          v-if="errors.has('formUmum.name_nametag')"
                        ></i>
                        Nama di Nametag: <wajib-badge></wajib-badge>
                      </h5>

                      <!-- text -->
                      <input
                        type="text"
                        name="name_nametag"
                        class="form-control"
                        placeholder="Silahkan masukkan Nama Nametag"
                        v-validate="'required'"
                        data-vv-as="name_nametag"
                        v-model="formUmum.name_nametag"
                      />

                      <!-- error message -->
                      <small
                        class="text-muted text-danger"
                        v-if="errors.has('formUmum.name_nametag')"
                      >
                        <i class="icon-arrow-small-right"></i>
                        {{ errors.first("formUmum.name_nametag") }}
                      </small>
                      <small class="text-muted" v-else>&nbsp;</small>
                    </div>
                  </div>

                  <!-- name -->
                  <div class="col-md-6">
                    <div
                      class="form-group"
                      :class="{
                        'has-error': errors.has('formUmum.name_sertifikat'),
                      }"
                    >
                      <!-- title -->
                      <h5
                        :class="{
                          'text-danger': errors.has('formUmum.name_sertifikat'),
                        }"
                      >
                        <i
                          class="icon-cross2"
                          v-if="errors.has('formUmum.name_sertifikat')"
                        ></i>
                        Nama di Sertifikat: <wajib-badge></wajib-badge>
                      </h5>

                      <!-- text -->
                      <input
                        type="text"
                        name="name_sertifikat"
                        class="form-control"
                        placeholder="Silahkan masukkan Nama Sertifikat"
                        v-validate="'required'"
                        data-vv-as="name_sertifikat"
                        v-model="formUmum.name_sertifikat"
                      />

                      <!-- error message -->
                      <small
                        class="text-muted text-danger"
                        v-if="errors.has('formUmum.name_sertifikat')"
                      >
                        <i class="icon-arrow-small-right"></i>
                        {{ errors.first("formUmum.name_sertifikat") }}
                      </small>
                      <small class="text-muted" v-else>&nbsp;</small>
                    </div>
                  </div>

                  <!-- name -->
                  <div class="col-md-6">
                    <div
                      class="form-group"
                      :class="{
                        'has-error': errors.has('formUmum.lembaga'),
                      }"
                    >
                      <!-- title -->
                      <h5
                        :class="{
                          'text-danger': errors.has('formUmum.lembaga'),
                        }"
                      >
                        <i
                          class="icon-cross2"
                          v-if="errors.has('formUmum.lembaga')"
                        ></i>
                        Lembaga Asal: <wajib-badge></wajib-badge>
                      </h5>

                      <!-- text -->
                      <input
                        type="text"
                        name="lembaga"
                        class="form-control"
                        placeholder="Silahkan Asal Lembaga"
                        v-validate="'required'"
                        data-vv-as="lembaga"
                        v-model="formUmum.lembaga"
                      />

                      <!-- error message -->
                      <small
                        class="text-muted text-danger"
                        v-if="errors.has('formUmum.lembaga')"
                      >
                        <i class="icon-arrow-small-right"></i>
                        {{ errors.first("formUmum.lembaga") }}
                      </small>
                      <small class="text-muted" v-else>&nbsp;</small>
                    </div>
                  </div>

                  <!-- name -->
                  <div class="col-md-6">
                    <div
                      class="form-group"
                      :class="{
                        'has-error': errors.has('formUmum.jabatan'),
                      }"
                    >
                      <!-- title -->
                      <h5
                        :class="{
                          'text-danger': errors.has('formUmum.jabatan'),
                        }"
                      >
                        <i
                          class="icon-cross2"
                          v-if="errors.has('formUmum.jabatan')"
                        ></i>
                        Jabatan : <wajib-badge></wajib-badge>
                      </h5>

                      <!-- text -->
                      <input
                        type="text"
                        name="jabatan"
                        class="form-control"
                        placeholder="Silahkan Jabatan"
                        v-validate="'required'"
                        data-vv-as="jabatan"
                        v-model="formUmum.jabatan"
                      />

                      <!-- error message -->
                      <small
                        class="text-muted text-danger"
                        v-if="errors.has('formUmum.jabatan')"
                      >
                        <i class="icon-arrow-small-right"></i>
                        {{ errors.first("formUmum.jabatan") }}
                      </small>
                      <small class="text-muted" v-else>&nbsp;</small>
                    </div>
                  </div>
                  <!-- tgl kedatangan -->
                  <div class="col-md-6">
                    <div class="form-group">
                      <!-- title -->
                      <h5>Tanggal Kedatangan:</h5>
                      <!-- input -->
                      <date-picker
                        @dateSelected="formUmum.datang = $event"
                        :defaultDate="formUmum.datang"
                      ></date-picker>
                    </div>
                  </div>

                  <!-- tgl pulang -->
                  <div class="col-md-6">
                    <div class="form-group">
                      <!-- title -->
                      <h5>Tanggal Pulang:</h5>
                      <!-- input -->
                      <date-picker
                        @dateSelected="formUmum.pulang = $event"
                        :defaultDate="formUmum.pulang"
                      ></date-picker>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- form info -->
            <form-info></form-info>
            <br />

            <!-- form button -->
            <div class="card card-body">
              <form-button
                :cancelState="cancelState"
                :formValidation="'formUmum'"
                @cancelClick="back"
              ></form-button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- modal -->
    <app-modal
      :show="modalShow"
      :state="modalState"
      :title="modalTitle"
      :content="modalContent"
      :size="modalSize"
      :color="modalColor"
      @batal="modalTutup"
      @tutup="modalTutup"
      @confirmOk="modalConfirmOk"
      @successOk="modalTutup"
      @failOk="modalTutup"
      @backgroundClick="modalBackgroundClick"
    >
      <!-- title -->
      <template slot="modal-title">
        {{ modalTitle }}
      </template>
    </app-modal>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import _ from "lodash";
import pageHeader from "../../components/pageHeader.vue";
import infoIcon from "../../components/infoIcon.vue";
import wajibBadge from "../../components/wajibBadge.vue";
import wajibUkuran from "../../components/wajibUkuran.vue";
import { toMulipartedForm } from "../../helpers/form";
import appImageUpload from "../../components/ImageUpload.vue";
import appModal from "../../components/modal";
import message from "../../components/message.vue";
import formButton from "../../components/formButton.vue";
import formInfo from "../../components/formInfo.vue";
import Cleave from "vue-cleave-component";
import dataTable from "../../components/datatable.vue";
import DatePicker from "../../components/datePicker.vue";

export default {
  components: {
    pageHeader,
    appModal,
    appImageUpload,
    message,
    formButton,
    formInfo,
    Cleave,
    dataTable,
    infoIcon,
    wajibBadge,
    wajibUkuran,
    DatePicker,
  },
  //props: ["title", "kelas"],

  data() {
    return {
      title: "FORMULIR PENDAFTARAN DIKLAT",
      titleDesc: "Pendaftaran Diklat",
      titleIcon: "icon-plus3",
      level: 2,
      level2Title: "Diklat",
      kelas: "kegiatanBKCU",
      sasaran: [],
      tempatData: "",

      selectedItem: [],
      query: {
        order_column: "name",
        order_direction: "asc",
        filter_match: "and",
        limit: 10,
        page: 1,
      },
      dataview: "",
      isNoButtonRow: "",
      excelDownloadUrl: "",
      columnData: [
        {
          title: "No.",
          name: "id",
        },
        {
          title: "Nama",
          name: "name",
          tipe: "string",
          sort: true,
          hide: false,
          disable: false,
          filter: true,
          filterDefault: true,
        },
        {
          title: "Nametag",
          name: "name_nametag",
          tipe: "string",
          sort: false,
          hide: false,
          disable: false,
          filter: true,
          filterDefault: false,
        },
        {
          title: "Sertifikat",
          name: "name_sertifikat",
          tipe: "string",
          sort: false,
          hide: false,
          disable: false,
          filter: true,
          filterDefault: false,
        },
      ],
      formUmum: {
        name_sertifikat: "0",
        kegiatan_id: "0",
        cu_id: "0",
        keterangan: "",
        tingkat: "",
        name_nametag: "",
        name_sertifikat: "",
        datang: "",
        pulang: "",
      },
      ckeditorNoImageConfig: {
        toolbar: {
          items: [
            "heading",
            "|",
            "bold",
            "italic",
            "link",
            "bulletedList",
            "numberedList",
            "blockQuote",
            "insertTable",
            "mediaEmbed",
            "undo",
            "redo",
          ],
        },
        table: {
          contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
        },
      },
      cleaveOption: {
        date: {
          date: true,
          datePattern: ["Y", "m", "d"],
          delimiter: "-",
        },
        year: {
          date: true,
          datePattern: ["Y"],
        },
        number12: {
          numeral: true,
          numeralIntegerScale: 12,
          numeralDecimalScale: 0,
          stripLeadingZeroes: false,
          delimiter: "",
        },
        number3: {
          numeral: true,
          numeralIntegerScale: 3,
          numeralDecimalScale: 0,
          stripLeadingZeroes: false,
        },
        numeric: {
          numeral: true,
          numeralThousandsGroupStyle: "thousand",
          numeralDecimalScale: 2,
          numeralDecimalMark: ",",
          delimiter: ".",
        },
      },
      selectedItemPilih: "",
      formPilihMode: "",
      itemDataPilih: [],
      itemDataPilihStat: "success",
      cancelState: "methods",
      state: "",
      modalShow: false,
      modalState: "",
      modalTitle: "",
      modalColor: "",
      modalContent: "",
      modalSize: "",
      submited: false,
    };
  },
  created() {
    this.fetch(this.query);
  },

  beforeRouteEnter(to, from, next) {
    next((vm) => vm.fetch());
  },
  watch: {
    // modelTempatStat(value){
    // 	if(value === "success"){
    // 		this.changeTempat(this.form.id_tempat);
    // 	}
    // },
    updateStat(value) {
      this.modalShow = true;
      this.modalState = value;
      this.modalColor = "";

      if (value === "success") {
        this.modalTitle = this.updateResponse.message;
      } else {
        this.modalTitle = "Oops terjadi kesalahan :(";
        this.modalContent = this.updateResponse;
      }
    },
    updateTempatStat(value) {
      this.modalShow = true;
      this.modalState = value;
      this.modalColor = "";

      if (value === "success") {
        this.modalTitle = this.updateTempatResponse.message;
        this.changeRegencies(this.formUmum.id_regencies);
      } else {
        this.modalTitle = "Oops terjadi kesalahan :(";
        this.modalContent = this.updateTempatResponse;
      }
    },
  },
  methods: {
    fetch() {
      if (this.$route.meta.mode == "edit") {
        this.$store.dispatch(this.kelas + "/edit", this.$route.params.id);
      } else {
         this.checkTipe(this.$route.params.tipe);
        this.$store.dispatch(this.kelas + "/create", this.$route.params.id);
        this.dataview="list";
      }

      // this.$store.dispatch('provinces/get');
    },
    checkTipe(tipe) {
      if (this.$route.meta.mode == "edit") {
        this.title = "Ubah " + this.level2Title;
        this.titleDesc = "Mengubah " + this.level2Title;
        this.titleIcon = "icon-pencil5";
      } else {
        this.title = "Tambah " + this.level2Title;
        this.titleDesc = "Menambah " + this.level2Title;
        this.titleIcon = "icon-plus3";
      }
    },

    createPilih(value) {
      this.itemDataPilih.push(value);
      this.selectedItemPilih = {};
      this.modalTutup();
    },
    editPilih(value) {
      _.remove(this.itemDataPilih, {
        index: value.index,
      });
      this.itemDataPilih.push(value);
      this.selectedItemPilih = {};
      this.modalTutup();
    },
    save() {
      const formData = toMulipartedForm(this.formUmum, this.$route.meta.mode);
      this.$validator.validateAll("formUmum").then((result) => {
        if (result) {
          if (this.$route.meta.mode == "edit") {
            this.$store.dispatch(this.kelas + "/update", [
              this.$route.params.id,
              formData,
            ]);
          } else {
            this.$store.dispatch(this.kelas + "/storeUmum", [
              this.$route.params.id,
              formData,
            ]);
          }
          this.submited = false;
        } else {
          window.scrollTo(0, 0);
          this.submited = true;
        }
      });
    },
    back() {
      if (this.$route.meta.isDetail) {
        this.$router.push({
          name: this.kelas + "Detail",
          params: { id: this.formUmum.id },
        });
      } else {
        if (this.$route.meta.mode == "edit") {
          this.$router.push({
            name: this.kelas,
            params: { tipe: this.formUmum.tipe, periode: this.momentYear() },
          });
        } else {
          this.$router.push({
            name: this.kelas,
            params: {
              tipe: this.$route.params.tipe,
              periode: this.momentYear(),
            },
          });
        }
      }
    },
    selectedRow(item, index) {
      this.selectedItemPilih = item;
      this.selectedItemPilih.index = index;
    },
    modalOpen(state, isMobile, itemMobile) {
      this.modalShow = true;
      this.state = state;

      if (isMobile) {
        this.selectedItemPanitia = itemMobile;
      }

      if (state == "hapusPanitia") {
        this.modalState = "confirm-tutup";
        this.modalColor = "";
        this.modalTitle =
          "Hapus Panitia/Fasilitator " + this.selectedItemPanitia.name + " ?";
        this.modalButton = "Iya, Hapus";
        this.modalSize = "";
      } else if (state == "ubahPanitia") {
        this.modalState = "normal1";
        this.modalColor = "bg-primary";
        this.modalTitle = "Ubah Panitia/Fasilitator";
        this.modalButton = "Ok";
        this.modalSize = "modal-lg";
        this.formPanitiaMode = "edit";
      } else if (state == "tambahPanitia") {
        this.modalState = "normal1";
        this.modalColor = "bg-primary";
        this.modalTitle = "Tambah Panitia/Fasilitator";
        this.modalButton = "Ok";
        this.modalSize = "modal-lg";
        this.formPanitiaMode = "create";
      } else if (state == "hapusPilih") {
        this.modalState = "confirm-tutup";
        this.modalColor = "";
        this.modalTitle = "Hapus Pilihan " + this.selectedItemPilih.name + " ?";
        this.modalButton = "Iya, Hapus";
        this.modalSize = "";
      } else if (state == "ubahPilih") {
        this.modalState = "normal1";
        this.modalColor = "bg-primary";
        this.modalTitle = "Ubah Pilihan";
        this.modalButton = "Ok";
        this.modalSize = "modal-lg";
        this.formPilihMode = "edit";
      } else if (state == "tambahPilih") {
        this.modalState = "normal1";
        this.modalColor = "bg-primary";
        this.modalTitle = "Tambah Pilihan";
        this.modalButton = "Ok";
        this.modalSize = "modal-lg";
        this.formPilihMode = "create";
      } else if (state == "tempat") {
        this.modalState = "normal2";
        this.modalColor = "bg-primary";
        this.modalTitle = "Tambah Tempat";
        this.modalButton = "Ok";
        this.modalSize = "modal-lg";
      }
    },
    modalImageShow(content) {
      this.modalShow = true;
      this.modalState = "image";
      this.modalContent = content;
      this.modalSize = "";
      this.modalButton = "Ok";
    },
    modalConfirmOk() {
      this.modalShow = false;

      if (this.state == "hapusPanitia") {
        _.remove(this.itemDataPanitia, {
          index: this.selectedItemPanitia.index,
        });
        this.selectedItemPanitia = {};
      } else if (this.state == "hapusPilih") {
        _.remove(this.itemDataPilih, {
          index: this.selectedItemPilih.index,
        });
        this.selectedItemPilih = {};
      } else {
        if (this.$route.meta.isDetail) {
          this.$router.push({
            name: this.kelas + "Detail",
            params: { id: this.formUmum.id },
          });
        }
      }
    },
    modalTutup() {
      if (this.updateStat == "success" && this.state == "") {
        this.$store.dispatch(this.kelas + "/resetUpdateStat");
        this.back();
      }
      this.modalShow = false;
    },
    modalBackgroundClick() {
      if (this.modalState === "success") {
        this.modalTutup;
      } else if (this.modalState === "loading") {
        // do nothing
      } else {
        this.modalShow = false;
      }
    },
    processFile(event) {
      this.form.gambar_depan = event.target.files[0];
      this.form.gambar_belakang = event.target.files[0];
    },
    momentYear() {
      return moment().year();
    },
  },
  computed: {
    ...mapGetters("auth", {
      currentUser: "currentUser",
    }),
    ...mapGetters("kegiatanBKCU", {
      form: "data",
      formStat: "dataStat",
      rules: "rules",
      options: "options",
      updateResponse: "update",
      updateStat: "updateStat",
      itemData: "dataS",
      itemDataStat: "dataStatS",
      updateMessage: "update",
    }),
  },
};
</script>