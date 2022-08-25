<--template>
	<div>
		
		<!-- page-header -->
		<page-header :title="title" :titleDesc="titleDesc" :titleIcon="titleIcon" :level="level" :level2Title="level2Title" :level2Route="kelas" @level2Back="back()"></page-header>

		<!-- content -->
		<div class="page-content pt-0">
			<div class="content-wrapper">
				<div class="content">

					<!-- message -->
					<message v-if="errors.any('form') && submited" :title="'Oops terjadi kesalahan'" :errorItem="errors.items">
					</message>

					<!-- main panel -->
					<form @submit.prevent="save" enctype="multipart/form-data" data-vv-scope="formPendaftaran">
					
						<!-- informasi umum -->
						<div class="card">
							<div class="card-body">	
								<div class="row">
									<!-- name -->
									<div class="col-md-6">
										<div class="form-group" :class="{'has-error' : errors.has('formPendaftaran.name')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('formPendaftaran.name')}">
												<i class="icon-cross2" v-if="errors.has('formPendaftaran.name')"></i>
												Nama : <wajib-badge></wajib-badge></h5>

											<!-- text -->
											<input type="text" name="name" class="form-control" placeholder="Silahkan masukkan Nama Lengkap anda" v-validate="'required|min:5'" data-vv-as="name" v-model="formPendaftaran.name">
											

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('formPendaftaran.name')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('formPendaftaran.name') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>
									
									<!-- gender -->
									<div class="col-md-12">
										<div class="form-group">

											<!-- title -->
											<h5>Jenis Kelamin: <wajib-badge></wajib-badge></h5>

											<div class="form-check form-check-inline">
												<label class="form-check-label">
													<input type="checkbox" class="form-check-input" value="1" v-model="formPendaftaran.jenis_kelamin">
													Pria
												</label>
											</div>	
											<div class="form-check form-check-inline">
												<label class="form-check-label">
													<input type="checkbox" class="form-check-input" value="2" v-model="formPendaftaran.jenis_kelamin">
													Wanita
												</label>
											</div>
										</div>
									</div>

									<!-- cu -->
									<div class="col-md-6">
										<div class="form-group" :class="{'has-error' : errors.has('formPendaftaran.cu')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('formPendaftaran.cu')}">
												<i class="icon-cross2" v-if="errors.has('formPendaftaran.cu')"></i>
												Asal CU : <wajib-badge></wajib-badge></h5>

											<!-- text -->
											<input type="text" name="cu" class="form-control" placeholder="Silahkan masukkan Asal CU anda" v-validate="'required|min:5'" data-vv-as="Asal CU" v-model="formPendaftaran.cu">
											

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('formPendaftaran.cu')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('formPendaftaran.cu') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- aktivis -->
									<div class="col-md-6">
										<div class="form-group" :class="{'has-error' : errors.has('formPendaftaran.aktivis')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('formPendaftaran.aktivis')}">
												<i class="icon-cross2" v-if="errors.has('formPendaftaran.aktivis')"></i>
												Aktivis : <wajib-badge></wajib-badge></h5>

											<!-- text -->
											<input type="text" name="aktivis" class="form-control" placeholder="Silahkan masukkan bidang Aktivis anda" v-validate="'required:1'" data-vv-as="Aktivis" v-model="formPendaftaran.aktivis">
											

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('formPendaftaran.aktivis')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('formPendaftaran.aktivis') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- pendidikan -->
									<div class="col-md-6">
										<div class="form-group" :class="{'has-error' : errors.has('formPendaftaran.pendidikan')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('formPendaftaran.pendidikan')}">
												<i class="icon-cross2" v-if="errors.has('formPendaftaran.pendidikan')"></i>
												Pendidikan terakhir : <wajib-badge></wajib-badge></h5>

											<!-- text -->
											<input type="text" name="pendidikan" class="form-control" placeholder="Silahkan masukkan Pendidikan anda " v-validate="'required|min:1'" data-vv-as="Pendidikan Terakhir" v-model="formPendaftaran.pendidikan">
											

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('formPendaftaran.pendidikan')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('formPendaftaran.pendidikan') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- jurusan -->
									<div class="col-md-6">
										<div class="form-group" :class="{'has-error' : errors.has('formPendaftaran.jurusan')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('formPendaftaran.jurusan')}">
												<i class="icon-cross2" v-if="errors.has('formPendaftaran.jurusan')"></i>
												Jurusan : <wajib-badge></wajib-badge></h5>

											<!-- text -->
											<input type="text" name="jurusan" class="form-control" placeholder="Silahkan masukkan Jurusan anda" v-validate="'required|min:1'" data-vv-as="Jurusan" v-model="formPendaftaran.jurusan">
											

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('formPendaftaran.jurusan')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('formPendaftaran.jurusan') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- tanggal lahir -->
									<div class="col-md-4">
										<div class="form-group" :class="{'has-error' : errors.has('formPendaftaran.tanggal_lahir')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('formPendaftaran.tanggal_lahir')}">
												<i class="icon-cross2" v-if="errors.has('formPendaftaran.tanggal_lahir')"></i>
												Tgl. Mulai: <wajib-badge></wajib-badge></h5>

											<!-- input -->
											<date-picker @dateSelected="formPendaftaran.mulai = $event" :defaultDate="formPendaftaran.mulai"></date-picker>	
											<input v-model="formPendaftaran.tanggal_lahir" v-show="false" v-validate="'required'" data-vv-as="Tgl. mulai"/>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('formPendaftaran.tanggal_lahir')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('formPendaftaran.tanggal_lahir') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>


									<!-- tempat lahir -->
									<div class="col-md-6">
										<div class="form-group" :class="{'has-error' : errors.has('formPendaftaran.tempat_lahir')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('formPendaftaran.tempat_lahir')}">
												<i class="icon-cross2" v-if="errors.has('formPendaftaran.tempat_lahir')"></i>
												Tempat Lahir: <wajib-badge></wajib-badge></h5>

											<!-- text -->
											<input type="text" name="tempat_lahir" class="form-control" placeholder="Silahkan masukkan Tempat Lahir anda" v-validate="'required|min:5'" data-vv-as="tempat_lahir" v-model="formPendaftaran.tempat_lahir">

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('formPendaftaran.tempat_lahir')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('formPendaftaran.tempat_lahir') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- tinggi -->
									<div class="col-md-6">
										<div class="form-group" :class="{'has-error' : errors.has('formPendaftaran.tinggi')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('formPendaftaran.tinggi')}">
												<i class="icon-cross2" v-if="errors.has('formPendaftaran.tinggi')"></i>
												Tinggi: <wajib-badge></wajib-badge></h5>

											<!-- text -->
											<input type="text" name="tinggi" class="form-control" placeholder="Silahkan masukkan Tinggi anda" v-validate="'required|min:3'" data-vv-as="tinggi" v-model="formPendaftaran.tinggi">

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('formPendaftaran.tinggi')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('formPendaftaran.tinggi') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- agama -->
									<div class="col-md-6">
										<div class="form-group" :class="{'has-error' : errors.has('formPendaftaran.agama')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('formPendaftaran.agama')}">
												<i class="icon-cross2" v-if="errors.has('formPendaftaran.agama')"></i>
												Agama : <wajib-badge></wajib-badge></h5>

											<!-- text -->
											<input type="text" name="agama" class="form-control" placeholder="Silahkan masukkan Agama anda" v-validate="'required|min:5'" data-vv-as="agama" v-model="formPendaftaran.agama">

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('formPendaftaran.agama')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('formPendaftaran.agama') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- status pernikahan-->
									<div class="col-md-12">
										<div class="form-group">

											<!-- title -->
											<h5>Status Pernikahan: <wajib-badge></wajib-badge></h5>

											<div class="form-check form-check-inline">
												<label class="form-check-label">
													<input type="checkbox" class="form-check-input" value="1" v-model="formPendaftaran.status_pernikahan">
													Belum Menikah
												</label>
											</div>	
											<div class="form-check form-check-inline">
												<label class="form-check-label">
													<input type="checkbox" class="form-check-input" value="2" v-model="formPendaftaran.status_pernikahan">
													Menikah
												</label>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!-- form info >
						<form-info></form-info-->	
						<br/>

						<!-- form button -->
						<!--div class="card card-body">
							<form-button
								:cancelState="cancelState"
								:formValidation="'form'"
								@cancelClick="back"></form-button>
						</div-->	

					</form>
				</div>
			</div>
		</div>

		<!-- modal -->
		<app-modal :show="modalShow" :state="modalState" :title="modalTitle" :content="modalContent" :size="modalSize" :color="modalColor" @batal="modalTutup" @tutup="modalTutup" @confirmOk="modalConfirmOk" @successOk="modalTutup" @failOk="modalTutup"  @backgroundClick="modalBackgroundClick">

			<!-- title -->
			<template slot="modal-title">
				{{ modalTitle }}
			</template>

		</app-modal>

	</div>
</template>

<script>
	import _ from 'lodash';
	import { mapGetters } from 'vuex';
	import infoIcon from "../../components/infoIcon.vue";
	import checkValue from '../../components/checkValue.vue';
	import DataViewer from '../../components/dataviewer2.vue';
	import Message from "../../components/message.vue";
	import DatePicker from "../../components/datePicker.vue";
	import Cleave from 'vue-cleave-component';
	

	export default {
		props: ['mode','selected','item','tingkat'],
		components: {
			DataViewer,
			checkValue,
			Message,
			DatePicker,
			Cleave,
			infoIcon
		},
		data() {
			return {
				title: 'FORMULIR PENDAFTARAN DIKLAT',
				titleDesc: 'Daftar Menjadi Peserta Diklat',
				titleIcon: 'icon-plus3',
				level: 2,
				level2Title: 'daftar diklat',
				sasaran: [],
				kelas: 'aktivis',
				tingkatArray: [],
				tingkatName: [],
				formPendaftaran:{
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
				columnData: [
					{ title: 'No.' },
					{ title: 'Foto' },
					{
						title: 'Nama',
						name: 'name',
						tipe: 'string',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
						filterDefault: true
					},
					{ title: 'Gender' },
					{ title: 'CU',disable: false },
					{ title: 'Tingkat' },
					{ title: 'Jabatan' },
					{ title: 'Pendidikan'},
					{ title: 'Jurusan' },
					{ title: 'Tgl. Lahir' },
					{ title: 'Tempat Lahir' },
					{ title: 'Tinggi' },
					{ title: 'Agama' },
					{ title: 'Status Pernikahan' },
				],
				cleaveOption: {
          date:{
            date: true,
            datePattern: ['Y','m','d'],
            delimiter: '-'
					},
					year:{
            date: true,
            datePattern: ['Y'],
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
				},
				
				submited: false,
			}

			
			
		},
		created(){
			if(this.mode == 'edit'){
				this.formPendaftaran = this.selected;
				this.formPendaftaran.tingkat = this.selected.aktivis.pekerjaan_aktif.tingkat;
				this.formPendaftaran.jabatan = this.selected.aktivis.pekerjaan_aktif.name;
				this.formPendaftaran.cu_id = this.selected.aktivis.pekerjaan_aktif.id_tempat;
				if(this.selected.aktivis.pendidikan_tertinggi){
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

				if(this.selected.aktivis.pekerjaan_aktif.tipe == 1){
					this.formPendaftaran.lembaga = this.selected.aktivis.pekerjaan_aktif.cu.name
				}else if(this.selected.aktivis.pekerjaan_aktif.tipe == 2){
					this.formPendaftaran.lembaga = this.selected.aktivis.pekerjaan_aktif.lembaga_lain.name
				}else if(this.selected.aktivis.pekerjaan_aktif.tipe == 3){
					this.formPendaftaran.lembaga = "PUSKOPCUINA"
				}
			}else{
				var i;
				for(i = 0; i < this.tingkat.length; i++){
					this.tingkatArray.push(this.tingkat[i].id);
				}
				for(i = 0; i < this.tingkat.length; i++){
					this.tingkatName.push(this.tingkat[i].name);
				}
				this.fetch(this.query);
			}
		},
		watch:{
			checkPesertaDataStat(value){
				if(value == 'success'){
					if(this.checkPesertaData){
						this.message.show = true;
						this.message.content = "Maaf peserta ini sudah terdaftar di pertemuan ini";
						this.deleteSelected();
					}else{
						this.save();
					}
				}
			}
		},
		methods: {
			fetch(params){
				if(this.currentUser.id_cu == 0){
					this.$store.dispatch('aktivis/index', [params,'semua','aktif']);
					this.disableColumnCu(false);
				}else{
					this.$store.dispatch('aktivis/indexCu', [params,this.currentUser.id_cu,'semua','aktif'])
					this.disableColumnCu(true);
				}
			},
			disableColumnCu(value){
				this.columnData[4].disable = value;
			},
			deleteSelected(){
				this.formPendaftaran.aktivis_id = '';
				this.formPendaftaran.name_nametag = '';
				this.formPendaftaran.name_sertifikat = '';
				this.formPendaftaran.datang = '';
				this.formPendaftaran.pulang = '';
				this.formPendaftaran.keterangan = '';
				this.selectedItem = [];
			},
			selectedRow(item){
				this.selectedItem = item;
				this.formPendaftaran.tingkat = item.pekerjaan_aktif.tingkat;
				this.formPendaftaran.name_sertifikat = item.name;

				if(this.tingkatArray.includes(this.formPendaftaran.tingkat)){
					this.formPendaftaran.aktivis_id = item.id;
					this.formPendaftaran.kegiatan_id = this.item.id;
					this.formPendaftaran.jabatan = item.pekerjaan_aktif.name;
					this.formPendaftaran.cu_id = item.pekerjaan_aktif.id_tempat;
					if(item.pendidikan_tertinggi){
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

					if(item.pekerjaan_aktif.tipe == 1){
						this.formPendaftaran.lembaga = item.pekerjaan_aktif.cu.name
					}else if(item.pekerjaan_aktif.tipe == 2){
						this.formPendaftaran.lembaga = item.pekerjaan_aktif.lembaga_lain.name
					}else if(item.pekerjaan_aktif.tipe == 3){
						this.formPendaftaran.lembaga = "PUSKOPCUINA"
					}
					this.message.show = false;
				}else{
					this.message.show = true;

					this.message.content = "Maaf peserta pertemuan ini harus dari tingkat " + this.tingkatName;
					this.selectedItem = '';
				}
			},
			checkPeserta(){
				if(this.mode != 'edit'){
					this.$store.dispatch('kegiatanBKCU/checkPeserta', [this.item.id, this.formPendaftaran.aktivis_id]);
				}else{
					this.save();
				}
			},
			
			createPilih(value){
				this.itemDataPilih.push(value);
				this.selectedItemPilih = {};
				this.modalTutup();
			},
			editPilih(value){
				_.remove(this.itemDataPilih, {
						index: value.index
				});
				this.itemDataPilih.push(value);
				this.selectedItemPilih = {};
				this.modalTutup(); 
			},
			modalTutup() {
 				if(this.updateStat == 'success' && this.state == ''){
					this.$store.dispatch(this.kelas + '/resetUpdateStat');
					this.back();
				}
				this.modalShow = false;
			},
			modalBackgroundClick(){
				if(this.modalState === 'success'){
					this.modalTutup;
				}else if(this.modalState === 'loading'){
					// do nothing
				}else{
					this.modalShow = false
				}
			},
			modalConfirmOk() {
				this.modalShow = false;

				if (this.state == 'hapusPanitia') {
					_.remove(this.itemDataPanitia, {
						index: this.selectedItemPanitia.index
					});
					this.selectedItemPanitia = {};
				}else if(this.state == 'hapusPilih'){
					_.remove(this.itemDataPilih, {
						index: this.selectedItemPilih.index
					});
					this.selectedItemPilih = {};
				}else{
					if(this.$route.meta.isDetail){
						this.$router.push({name: this.kelas + 'Detail', params: { id: this.form.id }});
					}
				}
			},
			save(){
				this.$validator.validateAll('formPendaftaran').then((result) => {
					if (result) {
						if(this.mode == 'edit'){
							this.$store.dispatch('kegiatanBKCU/updatePeserta', [this.formPendaftaran.id, this.formPendaftaran]);
						}else{
							this.formPendaftaran.status = this.item.status;
							this.$store.dispatch('kegiatanBKCU/storePeserta', [this.item.tipe, this.item.id, this.formPendaftaran]);
						}
					}else{
						this.submited = true;
					}	
				});	
			},
			messageClose(){
				this.message.show = false;
			}, 
			tutup(){
				this.$emit('tutup');
			}
		},
		computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
			...mapGetters('kegiatanBKCU',{
				checkPesertaData: 'data2',
				checkPesertaDataStat: 'dataStat2'
			}),
			...mapGetters('aktivis',{
				itemData: 'dataS',
				itemDataStat: 'dataStatS'
			})
		}
	}
</script>