<template>
  <div class="card card-body">	
    <div class="row">
      <div class="col-12">
        <h6>
          Silahkan masukkan No. KTP / Nomor Induk Kependudukan (NIK)*
          <br/>
          <span class="badge bg-danger-400 align-self-center ml-auto">*pastikan nomor yang dimasukan adalah nomor yang valid!</span> 
        </h6>
      </div>
      <div class="col-12 pb-2">
        <!-- text -->
        <cleave 
          name="nik"
          v-model="nik" 
          class="form-control" 
          :options="cleaveOption.number16"
          placeholder="Silahkan masukkan no. KTP / Nomor Induk Kependudukan (NIK)" :disabled="isNew"></cleave>

        <small class="text-muted text-danger" v-if="isDigit">
          Maaf, No. KTP anda tidak valid, wajib 16 digit.
        </small> 
      </div>

      <div class="col-md-7 col-lg-9 pb-2 d-none d-sm-block">
        <button class="btn btn-primary" @click.prevent="cariData"  :disabled="nik == ''"><i class="icon-search4"></i> Cari</button>
        <button class="btn btn-warning" @click.prevent="resetData" v-if="itemDataStat != ''"><i class="icon-reset"></i> Reset pencarian</button>
      </div>

      <div class="col-md-5 col-lg-3 text-right d-none d-sm-block">
        <button class="btn btn-light" @click.prevent="back" v-if="isBack"><i class="icon-arrow-left13"></i> Batal</button>
      </div>

      <div class="col-12 pb-2 d-block d-md-none">
        <button class="btn btn-primary btn-block" @click.prevent="cariData"  :disabled="nik == ''"><i class="icon-search4"></i> Cari</button>
        <button class="btn btn-warning btn-block mb-1" @click.prevent="resetData"><i class="icon-reset" v-if="itemDataStat != ''"></i> Reset pencarian</button>
        <button class="btn btn-light btn-block" @click.prevent="back" v-if="isBack"><i class="icon-arrow-left13"></i> Batal</button>
      </div>

      <!-- loading -->
      <div class="col-12" v-if="itemDataStat == 'loading'">
        <hr/>
        <div class="progress">
          <div class="progress-bar progress-bar-info progress-bar-striped progress-bar-animated" style="width: 100%">
            <span class="sr-only">100% Complete</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  import Cleave from 'vue-cleave-component';

  export default {
    components: {
			Cleave,
		},
    props: {
      itemDataStat: '',
      isBack: true
    },
    data(){
      return {
        nik: '',
        isNew: false,
        isDigit: false,
        cleaveOption: {
					number16: {
            numeral: true,
            numeralIntegerScale: 16,
            numeralDecimalScale: 0,
						stripLeadingZeroes: false,
						delimiter: ''
          }
        }
      }
    },
    mounted() {
      // document.addEventListener("keydown", (e) => {
      //   if (e.keyCode == 13) {
      //     if(this.nik != '')
      //       this.cariData();
      //   }
      // });
    },
    methods: {
      cariData(){
        if(this.nik.length < 16){
          this.isDigit = true;
        }else{
          this.isNew = true;
          this.isDigit = false;
          this.$emit('cariData', this.nik);
        }
      },
      resetData(){
        this.nik = '';
        this.isNew = false;
        this.$emit('resetData');
      },
      back(){
        this.$emit('back');
      }
    }
  }
</script>