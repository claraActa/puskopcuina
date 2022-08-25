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
            v-if="errors.any('formulirPendaftaran') && submited"
            :title="'Oops terjadi kesalahan'"
            :errorItem="errors.items"
          >
          </message>

          <!-- main panel -->
          <form
            @submit.prevent="save"
            enctype="multipart/form-data"
            data-vv-scope="formulirPendaftaran"
          >
            <!-- informasi umum -->
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <!--form action="{{ route('formulirPendaftaran.storeFormulirPendaftaran') }}" method="POST" id="editForm">
									 //@csrf-->
                  <!-- nama -->
                  <div class="col-md-6">
                    <div
                      class="form-group"
                      :class="{
                        'has-error': errors.has('formulirPendaftaran.name'),
                      }"
                    >
                      <!-- title -->
                      <h5
                        :class="{
                          'text-danger': errors.has('formulirPendaftaran.name'),
                        }"
                      >
                        <i
                          class="icon-cross2"
                          v-if="errors.has('formulirPendaftaran.name')"
                        ></i>
                        Nama Lengkap : <wajib-badge></wajib-badge>
                      </h5>

                      <!-- text -->
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="Silahkan masukkan Nama"
                        v-validate="'required'"
                        data-vv-as="Nama Lengkap"
                        v-model="formulirPendaftaran.name"
                        data-vv-name="formulirPendaftaran.name"
                      />

                      <!-- error message -->
                      <small
                        class="text-muted text-danger"
                        v-if="errors.has('formulirPendaftaran.name')"
                      >
                        <i class="icon-arrow-small-right"></i>
                        {{ errors.first("formulirPendaftaran.name") }}
                      </small>
                      <small class="text-muted" v-else>&nbsp;</small>
                    </div>
                  </div>

                  <!-- umur -->
                  <div class="col-md-6">
                    <div
                      class="form-group"
                      :class="{
                        'has-error': errors.has('formulirPendaftaran.umur'),
                      }"
                    >
                      <!-- title -->
                      <h5
                        :class="{
                          'text-danger': errors.has('formulirPendaftaran.umur'),
                        }"
                      >
                        <i
                          class="icon-cross2"
                          v-if="errors.has('formulirPendaftaran.umur')"
                        ></i>
                        Umur: <wajib-badge></wajib-badge>
                      </h5>

                      <!-- text -->
                      <input
                        type="text"
                        name="umur"
                        class="form-control"
                        placeholder="Silahkan masukkan Umur"
                        v-validate="'required'"
                        data-vv-as="Umur"
                        v-model="formulirPendaftaran.umur"
                        data-vv-name="formulirPendaftaran.umur"
                      />

                      <!-- error message -->
                      <small
                        class="text-muted text-danger"
                        v-if="errors.has('formulirPendaftaran.umur')"
                      >
                        <i class="icon-arrow-small-right"></i>
                        {{ errors.first("formulirPendaftaran.umur") }}
                      </small>
                      <small class="text-muted" v-else>&nbsp;</small>
                    </div>
                  </div>

                  <!-- nomor telepon -->
                  <div class="col-md-6">
                    <div
                      class="form-group"
                      :class="{
                        'has-error': errors.has('formulirPendaftaran.nomor'),
                      }"
                    >
                      <!-- title -->
                      <h5
                        :class="{
                          'text-danger': errors.has(
                            'formulirPendaftaran.nomor'
                          ),
                        }"
                      >
                        <i
                          class="icon-cross2"
                          v-if="errors.has('formulirPendaftaran.nomor')"
                        ></i>
                        No. HP: <wajib-badge></wajib-badge>
                      </h5>

                      <!-- text -->
                      <input
                        type="text"
                        name="nomor"
                        class="form-control"
                        placeholder="Silahkan masukkan Nomor"
                        v-validate="'required'"
                        data-vv-as="Nomor Telepon"
                        v-model="formulirPendaftaran.nomor"
                        data-vv-name="formulirPendaftaran.nomor"
                      />

                      <!-- error message -->
                      <small
                        class="text-muted text-danger"
                        v-if="errors.has('formulirPendaftaran.nomor')"
                      >
                        <i class="icon-arrow-small-right"></i>
                        {{ errors.first("formulirPendaftaran.nomor") }}
                      </small>
                      <small class="text-muted" v-else>&nbsp;</small>
                    </div>
                  </div>

                  <!-- pendidikan -->
                  <div class="col-md-6">
                    <div
                      class="form-group"
                      :class="{
                        'has-error': errors.has(
                          'formulirPendaftaran.pendidikan'
                        ),
                      }"
                    >
                      <!-- title -->
                      <h5
                        :class="{
                          'text-danger': errors.has(
                            'formulirPendaftaran.pendidikan'
                          ),
                        }"
                      >
                        <i
                          class="icon-cross2"
                          v-if="errors.has('formulirPendaftaran.pendidikan')"
                        ></i>
                        Pendidikan terakhir : <wajib-badge></wajib-badge>
                      </h5>

                      <!-- text -->
                      <input
                        type="text"
                        name="pendidikan"
                        class="form-control"
                        placeholder="Silahkan masukkan Pendidikan Terakhir anda "
                        v-validate="'required'"
                        data-vv-as="Pendidikan Terakhir"
                        v-model="formulirPendaftaran.pendidikan"
                        data-vv-name="formulirPendaftaran.pendidikan"
                      />

                      <!-- error message -->
                      <small
                        class="text-muted text-danger"
                        v-if="errors.has('formulirPendaftaran.pendidikan')"
                      >
                        <i class="icon-arrow-small-right"></i>
                        {{ errors.first("formulirPendaftaran.pendidikan") }}
                      </small>
                      <small class="text-muted" v-else>&nbsp;</small>
                    </div>
                  </div>
                  <!-- tempat lahir -->
                  <div class="col-md-6">
                    <div
                      class="form-group"
                      :class="{
                        'has-error': errors.has(
                          'formulirPendaftaran.tempat_lahir'
                        ),
                      }"
                    >
                      <!-- title -->
                      <h5
                        :class="{
                          'text-danger': errors.has(
                            'formulirPendaftaran.tempat_lahir'
                          ),
                        }"
                      >
                        <i
                          class="icon-cross2"
                          v-if="errors.has('formulirPendaftaran.tempat_lahir')"
                        ></i>
                        Tempat Lahir: <wajib-badge></wajib-badge>
                      </h5>

                      <!-- text -->
                      <input
                        type="text"
                        name="tempat_lahir"
                        class="form-control"
                        placeholder="Silahkan masukkan Tempat Lahir anda"
                        v-validate="'required'"
                        data-vv-as="Tempat Lahir"
                        v-model="formulirPendaftaran.tempat_lahir"
                        data-vv-name="formulirPendaftaran.tempat_lahir"
                      />

                      <!-- error message -->
                      <small
                        class="text-muted text-danger"
                        v-if="errors.has('formulirPendaftaran.tempat_lahir')"
                      >
                        <i class="icon-arrow-small-right"></i>
                        {{ errors.first("formulirPendaftaran.tempat_lahir") }}
                      </small>
                      <small class="text-muted" v-else>&nbsp;</small>
                    </div>
                  </div>
                  <!-- agama -->
                  <div class="col-md-6">
                    <div
                      class="form-group"
                      :class="{
                        'has-error': errors.has('formulirPendaftaran.agama'),
                      }"
                    >
                      <!-- title -->
                      <h5
                        :class="{
                          'text-danger': errors.has(
                            'formulirPendaftaran.agama'
                          ),
                        }"
                      >
                        <i
                          class="icon-cross2"
                          v-if="errors.has('formulirPendaftaran.agama')"
                        ></i>
                        Agama : <wajib-badge></wajib-badge>
                      </h5>

                      <!-- text -->
                      <input
                        type="text"
                        name="agama"
                        class="form-control"
                        placeholder="Silahkan masukkan Agama anda"
                        v-validate="'required'"
                        data-vv-as="Agama"
                        v-model="formulirPendaftaran.agama"
                        data-vv-name="formulirPendaftaran.agama"
                      />

                      <!-- error message -->
                      <small
                        class="text-muted text-danger"
                        v-if="errors.has('formulirPendaftaran.agama')"
                      >
                        <i class="icon-arrow-small-right"></i>
                        {{ errors.first("formulirPendaftaran.agama") }}
                      </small>
                      <small class="text-muted" v-else>&nbsp;</small>
                    </div>
                  </div>

                  <!-- tinggi -->
                  <div class="col-md-6">
                    <div
                      class="form-group"
                      :class="{
                        'has-error': errors.has('formulirPendaftaran.tinggi'),
                      }"
                    >
                      <!-- title -->
                      <h5
                        :class="{
                          'text-danger': errors.has(
                            'formulirPendaftaran.tinggi'
                          ),
                        }"
                      >
                        <i
                          class="icon-cross2"
                          v-if="errors.has('formulirPendaftaran.tinggi')"
                        ></i>
                        Tinggi Badan : <wajib-badge></wajib-badge>
                      </h5>
                      <!-- text -->
                      <input
                        type="text"
                        name="tinggi"
                        class="form-control"
                        placeholder="Silahkan masukkan Tinggi Badan anda"
                        v-validate="'required'"
                        data-vv-as="Tinggi"
                        v-model="formulirPendaftaran.tinggi"
                        data-vv-name="formulirPendaftaran.tinggi"
                      />

                      <!-- error message -->
                      <small
                        class="text-muted text-danger"
                        v-if="errors.has('formulirPendaftaran.tinggi')"
                      >
                        <i class="icon-arrow-small-right"></i>
                        {{ errors.first("formulirPendaftaran.tinggi") }}
                      </small>
                      <small class="text-muted" v-else>&nbsp;</small>
                    </div>
                  </div>

                  <!-- status pernikahan -->
                  <div class="col-md-6">
                    <div
                      class="form-group"
                      :class="{
                        'has-error': errors.has(
                          'formulirPendaftaran.status_pernikahan'
                        ),
                      }"
                    >
                      <!-- title -->
                      <h5
                        :class="{
                          'text-danger': errors.has(
                            'formulirPendaftaran.status_pernikahan'
                          ),
                        }"
                      >
                        <i
                          class="icon-cross2"
                          v-if="
                            errors.has('formulirPendaftaran.status_pernikahan')
                          "
                        ></i>
                        Status Perkawinan : <wajib-badge></wajib-badge>
                      </h5>
                      <!-- text -->
                      <input
                        type="text"
                        name="tinggi"
                        class="form-control"
                        placeholder="Belum Menikah / Menikah"
                        v-validate="'required'"
                        data-vv-as="Status"
                        v-model="formulirPendaftaran.status_pernikahan"
                        data-vv-name="formulirPendaftaran.status_pernikahan"
                      />

                      <!-- error message -->
                      <small
                        class="text-muted text-danger"
                        v-if="
                          errors.has('formulirPendaftaran.status_pernikahan')
                        "
                      >
                        <i class="icon-arrow-small-right"></i>
                        {{
                          errors.first("formulirPendaftaran.status_pernikahan")
                        }}
                      </small>
                      <small class="text-muted" v-else>&nbsp;</small>
                    </div>
                  </div>

                  <!-- tanggal lahir -->
                  <div class="col-md-6">
                    <div
                      class="form-group"
                      :class="{
                        'has-error': errors.has(
                          'formulirPendaftaran.tanggal_lahir'
                        ),
                      }"
                    >
                      <!-- title -->
                      <h5
                        :class="{
                          'text-danger': errors.has(
                            'formulirPendaftaran.tanggal_lahir'
                          ),
                        }"
                      >
                        <i
                          class="icon-cross2"
                          v-if="errors.has('formulirPendaftaran.tanggal_lahir')"
                        ></i>
                        Tanggal Lahir: <wajib-badge></wajib-badge>
                      </h5>

                      <!-- input -->
                      <date-picker
                        @dateSelected="
                          formulirPendaftaran.tanggal_lahir = $event
                        "
                        :defaultDate="formulirPendaftaran.tanggal_lahir"
                      ></date-picker>
                      <input
                        v-model="formulirPendaftaran.tanggal_lahir"
                        v-show="false"
                        data-vv-name="formulirPendaftaran.tanggal_lahir"
                      />

                      <!-- error message -->
                      <small
                        class="text-muted text-danger"
                        v-if="errors.has('formulirPendaftaran.tanggal_lahir')"
                      >
                        <i class="icon-arrow-small-right"></i>
                        {{ errors.first("formulirPendaftaran.tanggal_lahir") }}
                      </small>
                      <small class="text-muted" v-else>&nbsp;</small>
                    </div>
                  </div>

                  <!-- gender -->
                  <div class="col-md-6">
                    <div
                      class="form-group"
                      :class="{
                        'has-error': errors.has('formulirPendaftaran.kelamin'),
                      }"
                    >
                      <!-- title -->
                      <h5
                        :class="{
                          'text-danger': errors.has(
                            'formulirPendaftaran.kelamin'
                          ),
                        }"
                      >
                        <i
                          class="icon-cross2"
                          v-if="errors.has('formulirPendaftaran.kelamin')"
                        ></i>
                        Jenis Kelamin : <wajib-badge></wajib-badge>
                      </h5>
                      <!-- text -->
                      <input
                        type="text"
                        name="kelamin"
                        class="form-control"
                        placeholder="Pria / Wanita"
                        v-validate="'required'"
                        data-vv-as="Jenis Kelamin"
                        v-model="formulirPendaftaran.kelamin"
                        data-vv-name="formulirPendaftaran.kelamin"
                      />

                      <!-- error message -->
                      <small
                        class="text-muted text-danger"
                        v-if="errors.has('formulirPendaftaran.kelamin')"
                      >
                        <i class="icon-arrow-small-right"></i>
                        {{ errors.first("formulirPendaftaran.kelamin") }}
                      </small>
                      <small class="text-muted" v-else>&nbsp;</small>
                    </div>
                  </div>

                  <!-- name nametag -->
                  <div class="col-md-6">
                    <div
                      class="form-group"
                      :class="{
                        'has-error': errors.has(
                          'formulirPendaftaran.name_nametag'
                        ),
                      }"
                    >
                      <!-- title -->
                      <h5
                        :class="{
                          'text-danger': errors.has(
                            'formulirPendaftaran.name_nametag'
                          ),
                        }"
                      >
                        <i
                          class="icon-cross2"
                          v-if="errors.has('formulirPendaftaran.name_nametag')"
                        ></i>
                        Nama di nametag:
                      </h5>
                      <!-- text -->
                      <input
                        type="text"
                        name="name_nametag"
                        class="form-control"
                        placeholder="Silahkan masukkan nama di nametag"
                        v-validate="'required'"
                        data-vv-as="Nama di nametag"
                        v-model="formulirPendaftaran.name_nametag"
                      />
                      <!-- error message -->
                      <small
                        class="text-muted text-danger"
                        v-if="errors.has('formulirPendaftaran.name_nametag')"
                      >
                        <i class="icon-arrow-small-right"></i>
                        {{ errors.first("formulirPendaftaran.name_nametag") }}
                      </small>
                      <small class="text-muted" v-else>&nbsp;</small>
                    </div>
                  </div>

                  <!-- name sertifikat -->
                  <div class="col-md-6">
                    <div
                      class="form-group"
                      :class="{
                        'has-error': errors.has(
                          'formulirPendaftaran.name_nametag'
                        ),
                      }"
                    >
                      <!-- title -->
                      <h5
                        :class="{
                          'text-danger': errors.has(
                            'formulirPendaftaran.name_sertifikat'
                          ),
                        }"
                      >
                        <i
                          class="icon-cross2"
                          v-if="
                            errors.has('formulirPendaftaran.name_sertifikat')
                          "
                        ></i>
                        Nama di sertifikat:
                      </h5>
                      <!-- text -->
                      <input
                        type="text"
                        name="name_sertifikat"
                        class="form-control"
                        placeholder="Silahkan masukkan nama di sertifikat"
                        v-validate="'required'"
                        data-vv-as="Nama di sertifikat"
                        v-model="formulirPendaftaran.name_sertifikat"
                      />
                      <!-- error message -->
                      <small
                        class="text-muted text-danger"
                        v-if="errors.has('formulirPendaftaran.name_sertifikat')"
                      >
                        <i class="icon-arrow-small-right"></i>
                        {{
                          errors.first("formulirPendaftaran.name_sertifikat")
                        }}
                      </small>
                      <small class="text-muted" v-else>&nbsp; </small>
                    </div>
                  </div>

                  <!-- tgl kedatangan -->
                  <div class="col-md-6">
                    <div class="form-group">
                      <!-- title -->
                      <h5>Tgl. Kedatangan:</h5>
                      <!-- input -->
                      <date-picker
                        @dateSelected="formulirPendaftaran.datang = $event"
                        :defaultDate="formulirPendaftaran.datang"
                      ></date-picker>
                    </div>
                  </div>

                  <!-- tgl pulang -->
                  <div class="col-md-6">
                    <div class="form-group">
                      <!-- title -->
                      <h5>Tgl. Pulang:</h5>
                      <!-- input -->
                      <date-picker
                        @dateSelected="formulirPendaftaran.pulang = $event"
                        :defaultDate="formulirPendaftaran.pulang"
                      ></date-picker>
                    </div>
                  </div>

                  <!-- keterangan -->

                  <div class="form-group">
                    <!-- title -->
                    <h5>Keterangan:</h5>
                    <!-- textarea -->
                    <textarea
                      rows="10"
                      type="text"
                      name="keterangan"
                      class="form-control"
                      placeholder="Silahkan masukkan keterangan"
                      v-model="formulirPendaftaran.keterangan"
                    ></textarea>
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
                  :formValidation="'formulirPendaftaran'"
                  @cancelClick="back"
                ></form-button>

                <button
                  class="btn bg-warning-400 btn-block mb-2"
                  @click.prevent="
                    formulirPendaftaranDaftarPeserta(selectedItem.id)
                  "
                >
                  <i class="icon-clipboard6"></i> Formulir Pendaftaran Diklat
                </button>
              </div>
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
import appModal from "../../components/modal";
import Message from "../../components/message.vue";
import formButton from "../../components/formButton.vue";
import formInfo from "../../components/formInfo.vue";
import Cleave from "vue-cleave-component";
import dataTable from "../../components/datatable.vue";
import DatePicker from "../../components/datePicker.vue";
import DataViewer from "../../components/dataviewer2.vue";
import checkValue from "../../components/checkValue.vue";
import formulirPendaftaranDaftarPeserta from "./formulirPendaftaranDaftarPeserta.vue";

//import daftarCU from '../../components/daftarCU.vue';

export default {
  props: ["mode", "selected", "item", "tingkat", "kelas"],
  components: {
    DataViewer,
    pageHeader,
    appModal,
    formButton,
    formInfo,
    Cleave,
    dataTable,
    infoIcon,
    wajibBadge,
    wajibUkuran,
    DatePicker,
    checkValue,
    Message,
    formulirPendaftaranDaftarPeserta,
  },
  data() {
    return {
      title: "Formulir Pendaftaran",
      titleDesc: "Formulir Pendaftaran Diklat",
      titleIcon: "icon-plus3",
      level: 2,

      level2Title: "Pendaftaran",
      sasaran: [],
      tempatData: "",
      tingkatArray: [],
      tingkatName: [],
      cancelState: "methods",
      formulirPendaftaran: {
        aktivis_id: "0",
        kegiatan_id: "0",
        cu_id: "0",
        keterangan: "",
        tingkat: "",
        name_nametag: "",
        name_sertifikat: "",
        datang: "",
        pulang: "",
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
      selectedItem: [],
      query: {
        order_column: "name",
        order_direction: "asc",
        filter_match: "and",
        limit: 5,
        page: 1,
      },
      columnData: [
        { title: "No." },
        { title: "Foto" },
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
        { title: "Gender" },
        { title: "CU", disable: false },
        { title: "Tingkat" },
        { title: "Jabatan" },
        { title: "Pendidikan" },
        { title: "Jurusan" },
        { title: "Tgl. Lahir" },
        { title: "Tempat Lahir" },
        { title: "Tinggi" },
        { title: "Agama" },
        { title: "Status Pernikahan" },
      ],
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
      },
      message: {
        show: false,
        content: "",
      },

      submited: false,
    };
  },
  created() {
    if (this.mode == "edit") {
      this.formulirPendaftaran = this.selected;
      this.formulirPendaftaran.tingkat =
        this.selected.aktivis.pekerjaan_aktif.tingkat;
      this.formulirPendaftaran.jabatan =
        this.selected.aktivis.pekerjaan_aktif.name;
      this.formulirPendaftaran.cu_id =
        this.selected.aktivis.pekerjaan_aktif.id_tempat;
      if (this.selected.aktivis.pendidikan_tertinggi) {
        this.formulirPendaftaran.pendidikan =
          this.selected.aktivis.pendidikan_tertinggi.tingkat +
          " " +
          this.selected.aktivis.pendidikan_tertinggi.name;
      }
      this.formulirPendaftaran.status = this.selected.status;
      this.formulirPendaftaran.kelamin = this.selected.aktivis.kelamin;
      this.formulirPendaftaran.agama = this.selected.aktivis.agama;
      this.formulirPendaftaran.tinggi = this.selected.aktivis.tinggi;
      this.formulirPendaftaran.tanggal_lahir =
        this.selected.aktivis.tanggal_lahir;
      this.formulirPendaftaran.tempat_lahir =
        this.selected.aktivis.tempat_lahir;
      this.formulirPendaftaran.name = this.selected.aktivis.name;
      this.formulirPendaftaran.gambar = this.selected.aktivis.gambar;
      this.formulirPendaftaran.jabatan = this.selected.pekerjaan_aktif.name;

      if (this.selected.aktivis.pekerjaan_aktif.tipe == 1) {
        this.formulirPendaftaran.lembaga =
          this.selected.aktivis.pekerjaan_aktif.cu.name;
      } else if (this.selected.aktivis.pekerjaan_aktif.tipe == 2) {
        this.formulirPendaftaran.lembaga =
          this.selected.aktivis.pekerjaan_aktif.lembaga_lain.name;
      } else if (this.selected.aktivis.pekerjaan_aktif.tipe == 3) {
        this.formulirPendaftaran.lembaga = "PUSKOPCUINA";
      }
    }
  },
  watch: {
    checkPesertaDataStat(value) {
      if (value == "success") {
        if (this.checkPesertaData) {
          this.message.show = true;
          this.message.content =
            "Maaf peserta ini sudah terdaftar di pertemuan ini";
          this.deleteSelected();
        } else {
          this.save();
        }
      }
    },
  },

  //beforeRouteEnter(to, from, next) {
  //	next(vm => vm.fetch());
  //},
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
        this.changeRegencies(this.formulirPendaftaran.id_regencies);
      } else {
        this.modalTitle = "Oops terjadi kesalahan :(";
        this.modalContent = this.updateTempatResponse;
      }
    },

    itemStat(value) {
      if (value === "success") {
        this.hideColumn();
        this.checkTipe(this.item.tipe);

        if (this.currentUser.aktivis) {
          if (this.item.status == 4) {
            this.checkPanitia();
          }
        } else {
          this.modalOpen("pesertaTidakTerdaftar");
        }

        this.fetchPesertaTerdaftar(this.queryPesertaTerdaftar);
        this.fetchCountPeserta();
        this.fetchCountKeputusan();
        this.fetchCountPertanyaan();
        this.fetchlistMateri2();

        var valDalam;
        for (valDalam of this.item.panitia_dalam) {
          this.itemDataPanitia.push(valDalam);
        }

        var valLuar;
        for (valLuar of this.item.panitia_luar) {
          this.itemDataPanitia.push(valLuar);
        }

        var valLuarLembaga;
        for (valLuarLembaga of this.item.panitia_luar_lembaga) {
          this.itemDataPanitia.push(valLuarLembaga);
        }
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
        this.dataview = "list";
      }

      this.$store.dispatch("provinces/get");
    },
    //fetch(params){
    //	if(this.currentUser.id_cu == 0){
    //		this.$store.dispatch('aktivis/index', [params,'semua','aktif']);
    //		this.disableColumnCu(false);
    //	}else{
    //		this.$store.dispatch('aktivis/indexCu', [params,this.currentUser.id_cu,'semua','aktif'])
    //		this.disableColumnCu(true);
    //	}
    //},

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
      this.$validator.validateAll("formulirPendaftaran").then((result) => {
        if (result) {
          if (this.$route.meta.mode == "edit") {
            this.$store.dispatch("kegiatanBKCU/updatePeserta", [
              this.$route.params.id,
              this.formulirPendaftaran,
            ]);
          } else {
            this.$store.dispatch("kegiatanBKCU/storePeserta", [
              this.$route.params.id,
              this.formulirPendaftaran,
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
          params: { id: this.formulirPendaftaran.id },
        });
      } else {
        if (this.$route.meta.mode == "edit") {
          this.$router.push({
            name: this.kelas,
            params: {
              tipe: this.formulirPendaftaran.tipe,
              periode: this.momentYear(),
            },
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
    selectedRow(item) {
      this.selectedItem = item;
      this.formulirPendaftaran.tingkat = item.pekerjaan_aktif.tingkat;
      this.formulirPendaftaran.name_sertifikat = item.name;

      if (this.tingkatArray.includes(this.formulirPendaftaran.tingkat)) {
        this.formulirPendaftaran.aktivis_id = item.id;
        this.formulirPendaftaran.kegiatan_id = this.item.id;
        this.formulirPendaftaran.jabatan = item.pekerjaan_aktif.name;
        this.formulirPendaftaran.cu_id = item.pekerjaan_aktif.id_tempat;
        if (item.pendidikan_tertinggi) {
          this.formulirPendaftaran.pendidikan =
            item.pendidikan_tertinggi.tingkat +
            " " +
            item.pendidikan_tertinggi.name;
        }
        this.formulirPendaftaran.status = item.status;
        this.formulirPendaftaran.kelamin = item.kelamin;
        this.formulirPendaftaran.agama = item.agama;
        this.formulirPendaftaran.tinggi = item.tinggi;
        this.formulirPendaftaran.tanggal_lahir = item.tanggal_lahir;
        this.formulirPendaftaran.tempat_lahir = item.tempat_lahir;
        this.formulirPendaftaran.name = item.name;
        this.formulirPendaftaran.gambar = item.gambar;
        this.formulirPendaftaran.jabatan = item.pekerjaan_aktif.name;

        if (item.pekerjaan_aktif.tipe == 1) {
          this.formulirPendaftaran.lembaga = item.pekerjaan_aktif.cu.name;
        } else if (item.pekerjaan_aktif.tipe == 2) {
          this.formulirPendaftaran.lembaga =
            item.pekerjaan_aktif.lembaga_lain.name;
        } else if (item.pekerjaan_aktif.tipe == 3) {
          this.formulirPendaftaran.lembaga = "PUSKOPCUINA";
        }
        this.message.show = false;
      } else {
        this.message.show = true;

        this.message.content =
          "Maaf peserta pertemuan ini harus dari tingkat " + this.tingkatName;
        this.selectedItem = "";
      }
    },

    checkPeserta() {
      if (this.mode != "edit") {
        this.$store.dispatch("kegiatanBKCU/checkPeserta", [
          this.item.id,
          this.formulirPendaftaran.aktivis_id,
        ]);
      } else {
        this.save();
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
            params: { id: this.formulirPendaftaran.id },
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
    modalImageShow(content) {
      this.modalShow = true;
      this.modalState = "image";
      this.modalContent = content;
      this.modalSize = "";
      this.modalButton = "Ok";
    },
    momentYear() {
      return moment().year();
    },

    formulirPendaftaranDaftarPeserta() {
      this.$router.push({
        name: "kegiatanBKCUformulirPendaftaranDaftarPeserta",
      });
    },
  },
  computed: {
    ...mapGetters("auth", {
      currentUser: "currentUser",
    }),
    ...mapGetters("kegiatanBKCU", {
      form: "data",
      itemData: "dataS",
      itemDataStat: "dataStatS",
      updateMessage: "update",
      updateStat: "updateStat",
    }),
    ...mapGetters("aktivis", {
      itemData: "dataS",
      itemDataStat: "dataStatS",
    }),
  },
};
</script>