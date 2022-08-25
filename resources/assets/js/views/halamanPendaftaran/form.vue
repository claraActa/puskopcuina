<template>
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
					<form @submit.prevent="save" enctype="multipart/form-data" data-vv-scope="form">
					
						<!-- informasi umum -->
						<div class="card">
							<div class="card-body">	
								<div class="row">
									<!-- name -->
									<div class="col-md-6">
										<div class="form-group" :class="{'has-error' : errors.has('form.name')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.name')}">
												<i class="icon-cross2" v-if="errors.has('form.name')"></i>
												Nama : <wajib-badge></wajib-badge></h5>

											<!-- text -->
											<input type="text" name="name" class="form-control" placeholder="Silahkan masukkan Nama Lengkap anda" v-validate="'required|min:5'" data-vv-as="name" v-model="form.name">
											

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.name')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.name') }}
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
													<input type="checkbox" class="form-check-input" value="1" v-model="form.gender">
													Pria
												</label>
											</div>	
											<div class="form-check form-check-inline">
												<label class="form-check-label">
													<input type="checkbox" class="form-check-input" value="2" v-model="form.gender">
													Wanita
												</label>
											</div>
										</div>
									</div>

									<!-- cu -->
									<div class="col-md-6">
										<div class="form-group" :class="{'has-error' : errors.has('form.cu')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.cu')}">
												<i class="icon-cross2" v-if="errors.has('form.cu')"></i>
												Asal CU : <wajib-badge></wajib-badge></h5>

											<!-- text -->
											<input type="text" name="cu" class="form-control" placeholder="Silahkan masukkan Asal CU anda" v-validate="'required|min:5'" data-vv-as="Asal CU" v-model="form.cu">
											

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.cu')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.cu') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- aktivis -->
									<div class="col-md-6">
										<div class="form-group" :class="{'has-error' : errors.has('form.aktivis')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.aktivis')}">
												<i class="icon-cross2" v-if="errors.has('form.aktivis')"></i>
												Aktivis : <wajib-badge></wajib-badge></h5>

											<!-- text -->
											<input type="text" name="aktivis" class="form-control" placeholder="Silahkan masukkan bidang Aktivis anda" v-validate="'required:1'" data-vv-as="Aktivis" v-model="form.aktivis">
											

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.aktivis')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.aktivis') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- pendidikan -->
									<div class="col-md-6">
										<div class="form-group" :class="{'has-error' : errors.has('form.pendidikan')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.pendidikan')}">
												<i class="icon-cross2" v-if="errors.has('form.pendidikan')"></i>
												Pendidikan terakhir : <wajib-badge></wajib-badge></h5>

											<!-- text -->
											<input type="text" name="pendidikan" class="form-control" placeholder="Silahkan masukkan Pendidikan anda " v-validate="'required|min:1'" data-vv-as="Pendidikan Terakhir" v-model="form.pendidikan">
											

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.pendidikan')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.pendidikan') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- jurusan -->
									<div class="col-md-6">
										<div class="form-group" :class="{'has-error' : errors.has('form.jurusan')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.jurusan')}">
												<i class="icon-cross2" v-if="errors.has('form.jurusan')"></i>
												Jurusan : <wajib-badge></wajib-badge></h5>

											<!-- text -->
											<input type="text" name="jurusan" class="form-control" placeholder="Silahkan masukkan Jurusan anda" v-validate="'required|min:1'" data-vv-as="Jurusan" v-model="form.jurusan">
											

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.jurusan')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.jurusan') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- tanggal lahir -->
									<div class="col-md-4">
										<div class="form-group" :class="{'has-error' : errors.has('form.tanggal_lahir')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.tanggal_lahir')}">
												<i class="icon-cross2" v-if="errors.has('form.tanggal_lahir')"></i>
												Tgl. Mulai: <wajib-badge></wajib-badge></h5>

											<!-- input -->
											<date-picker @dateSelected="form.mulai = $event" :defaultDate="form.mulai"></date-picker>	
											<input v-model="form.tanggal_lahir" v-show="false" v-validate="'required'" data-vv-as="Tgl. mulai"/>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.tanggal_lahir')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.tanggal_lahir') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>


									<!-- tempat lahir -->
									<div class="col-md-6">
										<div class="form-group" :class="{'has-error' : errors.has('form.tempat_lahir')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.tempat_lahir')}">
												<i class="icon-cross2" v-if="errors.has('form.tempat_lahir')"></i>
												Tempat Lahir: <wajib-badge></wajib-badge></h5>

											<!-- text -->
											<input type="text" name="tempat_lahir" class="form-control" placeholder="Silahkan masukkan Tempat Lahir anda" v-validate="'required|min:5'" data-vv-as="tempat_lahir" v-model="form.tempat_lahir">

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.tempat_lahir')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.tempat_lahir') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- tinggi -->
									<div class="col-md-6">
										<div class="form-group" :class="{'has-error' : errors.has('form.tinggi')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.tinggi')}">
												<i class="icon-cross2" v-if="errors.has('form.tinggi')"></i>
												Tinggi: <wajib-badge></wajib-badge></h5>

											<!-- text -->
											<input type="text" name="tinggi" class="form-control" placeholder="Silahkan masukkan Tinggi anda" v-validate="'required|min:3'" data-vv-as="tinggi" v-model="form.tinggi">

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.tinggi')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.tinggi') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- agama -->
									<div class="col-md-6">
										<div class="form-group" :class="{'has-error' : errors.has('form.agama')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.agama')}">
												<i class="icon-cross2" v-if="errors.has('form.agama')"></i>
												Agama : <wajib-badge></wajib-badge></h5>

											<!-- text -->
											<input type="text" name="agama" class="form-control" placeholder="Silahkan masukkan Agama anda" v-validate="'required|min:5'" data-vv-as="agama" v-model="form.agama">

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.agama')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.agama') }}
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
													<input type="checkbox" class="form-check-input" value="1" v-model="form.status_pernikahan">
													Belum Menikah
												</label>
											</div>	
											<div class="form-check form-check-inline">
												<label class="form-check-label">
													<input type="checkbox" class="form-check-input" value="2" v-model="form.status_pernikahan">
													Menikah
												</label>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!-- form info -->
						<form-info></form-info>	
						<br/>

						<!-- form button -->
						<div class="card card-body">
							<form-button
								:cancelState="cancelState"
								:formValidation="'form'"
								@cancelClick="back"></form-button>
						</div>	

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
	import { mapGetters } from 'vuex';
	import _ from 'lodash';
	import pageHeader from "../../components/pageHeader.vue";
	import infoIcon from "../../components/infoIcon.vue";
	import wajibBadge from "../../components/wajibBadge.vue";
	import wajibUkuran from "../../components/wajibUkuran.vue";
	import { toMulipartedForm } from '../../helpers/form';
	import appImageUpload from '../../components/ImageUpload.vue';
	import appModal from '../../components/modal';
	import message from "../../components/message.vue";
	import formButton from "../../components/formButton.vue";
	import formInfo from "../../components/formInfo.vue";
	import Cleave from 'vue-cleave-component';
	import dataTable from '../../components/datatable.vue';
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
			DatePicker
		},
		data() {
			return {
				title: 'Formulir Pendafataran',
				titleDesc: 'Menambah Daftar Peserta',
				titleIcon: 'icon-plus3',
				level: 2,
				level2Title: 'Halaman Pendaftaran',
				kelas: 'halamanPendaftaran',
				sasaran: [],
				tempatData: '',
				ckeditorNoImageConfig: {
					toolbar: {
						items: [
							'heading',
							'|',
							'bold',
							'italic',
							'link',
							'bulletedList',
							'numberedList',
							'blockQuote',
							'insertTable',
							'mediaEmbed',
							'undo',
							'redo'
						]
					},
					table: {
						contentToolbar: [
							'tableColumn',
							'tableRow',
							'mergeTableCells'
						]
					},
				},
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
				submited: false,
			}
		},
		beforeRouteEnter(to, from, next) {
			next(vm => vm.fetch());
		},
		watch: {
			// modelTempatStat(value){
			// 	if(value === "success"){
			// 		this.changeTempat(this.form.id_tempat);
			// 	}
			// },
			updateStat(value){
				this.modalShow = true;
				this.modalState = value;
				this.modalColor = '';

				if(value === "success"){
					this.modalTitle = this.updateResponse.message;
				}else{
					this.modalTitle = 'Oops terjadi kesalahan :(';
					this.modalContent = this.updateResponse;
				}
			},
			updateTempatStat(value){
				this.modalShow = true;
				this.modalState = value;
				this.modalColor = '';

				if(value === "success"){
					this.modalTitle = this.updateTempatResponse.message;
					this.changeRegencies(this.form.id_regencies);
				}else{
					this.modalTitle = 'Oops terjadi kesalahan :(';
					this.modalContent = this.updateTempatResponse;
				}
			}
    },
		methods: {
			fetch(){
				if(this.$route.meta.mode == 'edit'){
					this.$store.dispatch(this.kelas + '/edit',this.$route.params.id);	
				} else {
					// this.checkTipe(this.$route.params.tipe);
					this.$store.dispatch(this.kelas + '/create');
				}
				
				// this.$store.dispatch('provinces/get');
			},
			checkTipe(tipe){
				
				if(this.$route.meta.mode == 'edit'){
					this.title = 'Ubah ' + this.level2Title;
					this.titleDesc = 'Mengubah ' + this.level2Title;
					this.titleIcon = 'icon-pencil5';
				}else{
					this.title = 'Tambah ' + this.level2Title;
					this.titleDesc = 'Menambah ' + this.level2Title;
					this.titleIcon = 'icon-plus3';
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
			save() {
				const formData = toMulipartedForm(this.form, this.$route.meta.mode);
				this.$validator.validateAll('form').then((result) => {
					if (result) {
						if(this.$route.meta.mode == 'edit'){
							console.log(this.form.gambar_depan);
							this.$store.dispatch(this.kelas + '/update',[this.$route.params.id, formData]);
						}else{
							console.log(this.form.gambar_depan);
							this.$store.dispatch(this.kelas + '/store', formData);
					}
						this.submited = false;
					}else{
						window.scrollTo(0, 0);
						this.submited = true;
					}
				});
			},
			back(){
				if(this.$route.meta.isDetail){
					this.$router.push({name: this.kelas + 'Detail', params: { id: this.form.id }});
				}else{
					if(this.$route.meta.mode == 'edit'){
						this.$router.push({name: this.kelas, params:{tipe:this.form.tipe, periode: this.momentYear()}});
					}else{
						this.$router.push({name: this.kelas, params:{tipe:this.$route.params.tipe, periode: this.momentYear()}});
					}
				}
			},
			selectedRow(item,index){
					this.selectedItemPilih = item;
					this.selectedItemPilih.index = index;
			},
			modalOpen(state, isMobile, itemMobile) {
				this.modalShow = true;
				this.state = state;

				if(isMobile){
					this.selectedItemPanitia = itemMobile;
				}

				if (state == 'hapusPanitia') {
					this.modalState = 'confirm-tutup';
					this.modalColor = '';
					this.modalTitle = 'Hapus Panitia/Fasilitator ' + this.selectedItemPanitia.name + ' ?';
					this.modalButton = 'Iya, Hapus';
					this.modalSize = '';
				}else if(state == 'ubahPanitia'){
					this.modalState = 'normal1';
					this.modalColor = 'bg-primary';
					this.modalTitle = 'Ubah Panitia/Fasilitator';
					this.modalButton = 'Ok';
					this.modalSize = 'modal-lg';
					this.formPanitiaMode = 'edit';
				}else if(state == 'tambahPanitia'){
					this.modalState = 'normal1';
					this.modalColor = 'bg-primary';
					this.modalTitle = 'Tambah Panitia/Fasilitator';
					this.modalButton = 'Ok';
					this.modalSize = 'modal-lg';
					this.formPanitiaMode = 'create';
				}else if (state == 'hapusPilih') {
					this.modalState = 'confirm-tutup';
					this.modalColor = '';
					this.modalTitle = 'Hapus Pilihan ' + this.selectedItemPilih.name + ' ?';
					this.modalButton = 'Iya, Hapus';
					this.modalSize = '';
				}else if(state == 'ubahPilih'){
					this.modalState = 'normal1';
					this.modalColor = 'bg-primary';
					this.modalTitle = 'Ubah Pilihan';
					this.modalButton = 'Ok';
					this.modalSize = 'modal-lg';
					this.formPilihMode = 'edit';
				}else if(state == 'tambahPilih'){
					this.modalState = 'normal1';
					this.modalColor = 'bg-primary';
					this.modalTitle = 'Tambah Pilihan';
					this.modalButton = 'Ok';
					this.modalSize = 'modal-lg';
					this.formPilihMode = 'create';
				}else if(state == 'tempat'){
					this.modalState = 'normal2';
					this.modalColor = 'bg-primary';
					this.modalTitle = 'Tambah Tempat';
					this.modalButton = 'Ok';
					this.modalSize = 'modal-lg';
				}
			},
			modalImageShow(content){
				this.modalShow = true;
				this.modalState = 'image';
				this.modalContent = content;
				this.modalSize = '';
				this.modalButton = 'Ok';
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
			processFile(event) {
				this.form.gambar_depan = event.target.files[0];
				this.form.gambar_belakang = event.target.files[0];
			},
			momentYear(){
				return moment().year();
			}
		},
		computed: {
			...mapGetters('halamanPendaftaran',{
				form: 'data',
				formStat: 'dataStat',
				rules: 'rules',
				options: 'options',
				updateResponse: 'update',
				updateStat: 'updateStat'
			})
		}
	}
</script>