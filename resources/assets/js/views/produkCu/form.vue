<template>
	<div>
		<!-- header -->
		<page-header :title="title" :titleDesc="titleDesc" :titleIcon="titleIcon" :level="2" :level2Title="level2Title" :level2Route="kelas" @level2Back="back()"></page-header>
		
		<!-- content -->
		<div class="page-content pt-0">
			<div class="content-wrapper">
				<div class="content">

					<!-- message -->
					<message v-if="errors.any('form') && submited" :title="'Oops, terjadi kesalahan'" :errorItem="errors.items">
					</message>
 
					<!-- main panel -->
					<form @submit.prevent="save" enctype="multipart/form-data" data-vv-scope="form">

						<!-- form -->
						<div class="card">
							<div class="card-body">
								<div class="row">

									<!-- foto -->
									<div class="col-md-12">
										<div class="form-group">

											<!-- title -->
											<h5>Foto:</h5>

											<!-- imageupload -->
											<app-image-upload :image_loc="'/images/produk_cu/'" :image_temp="form.gambar" v-model="form.gambar"></app-image-upload>
										</div>
									</div>  

									<!-- CU -->
									<div class="col-md-4" v-if="currentUser.id_cu === 0">
										<div class="form-group" :class="{'has-error' : errors.has('form.id_cu')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.id_cu')}">
												<i class="icon-cross2" v-if="errors.has('form.id_cu')"></i>
												CU: <wajib-badge></wajib-badge>
											</h5>

											<!-- select -->
											<select class="form-control" name="id_cu" v-model="form.id_cu" data-width="100%" v-validate="'required'" data-vv-as="CU" :disabled="modelCU.length === 0">
												<option disabled value="0">
													<span v-if="modelCUStat === 'loading'">Mohon tunggu...</span>
													<span v-else>Silahkan pilih CU</span>
												</option>
												<option v-for="cu in modelCU" :value="cu.id" v-if="cu">{{cu.name}}</option>
											</select>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.id_cu')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.id_cu') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- tipe -->
									<div class="col-md-4">
										<div class="form-group" :class="{'has-error' : errors.has('form.tipe')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.tipe')}">
												<i class="icon-cross2" v-if="errors.has('form.tipe')"></i>
												Tipe Produk: <wajib-badge></wajib-badge>
											</h5>

											<!-- select -->
											<select class="form-control" name="tipe" v-model="form.tipe" data-width="100%" v-validate="'required'" data-vv-as="Tipe Produk" @change="changeTipe($event.target.value)">
												<option disabled value="">Silahkan pilih tipe produk</option>
												<option value="Simpanan Pokok">Simpanan Pokok</option>
												<option value="Simpanan Wajib">Simpanan Wajib</option>
												<option value="Simpanan Non Saham">Simpanan Non Saham</option>
												<option value="Pinjaman Kapitalisasi">Pinjaman Kapitalisasi</option>
												<option value="Pinjaman Umum">Pinjaman Umum</option>
												<option value="Pinjaman Produktif">Pinjaman Produktif</option>
											</select>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.tipe')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.tipe') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- kode -->
									<div class="col-md-4">
										<div class="form-group" :class="{'has-error' : errors.has('form.kode_produk')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.kode_produk')}">
												<i class="icon-cross2" v-if="errors.has('form.kode_produk')"></i>
												Kode Produk & Pelayanan: <wajib-badge></wajib-badge></h5>

											<!-- text -->
											<input type="text" name="kode_produk" class="form-control" placeholder="Silahkan masukkan kode produk dan pelayanan" v-validate="'required'" data-vv-as="Kode Produk dan Pelayanan" v-model="form.kode_produk">	
											

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.kode_produk')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.kode_produk') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- name -->
									<div class="col-md-4">
										<div class="form-group" :class="{'has-error' : errors.has('form.name')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.name')}">
												<i class="icon-cross2" v-if="errors.has('form.name')"></i>
												Nama: <wajib-badge></wajib-badge></h5>

											<!-- text -->
											<input type="text" name="name" class="form-control" placeholder="Silahkan masukkan nama produk dan pelayanan" v-validate="'required'" data-vv-as="Nama" v-model="form.name" :disabled="isDisabledName">

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.name')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.name') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- jalinan -->
									<div class="col-md-8">
										<div class="form-group" :class="{'has-error' : errors.has('form.jalinan')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.jalinan')}">
												<i class="icon-cross2" v-if="errors.has('form.jalinan')"></i>
												Disolidaritaskan Jalinan?
											</h5>

											<!-- select -->
											<select name="jalinan" data-width="100%" class="form-control" v-model="form.jalinan" :disabled="isDisabledName">
												<option disabled value="">Silahkan pilih apakah simpanan ini disolidaritaskan Jalinan</option>
												<option value="1">Iya, disolidaritaskan Jalinan</option>
												<option value="0">Tidak disolidaritaskan Jalinan</option>
											</select>

											<!-- error message -->
											<br/>
											<small class="text-muted text-danger" v-if="errors.has('form.jalinan')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.jalinan') }}
											</small>
											<small class="text-muted" v-else>&nbsp;
											</small>
										</div>
									</div>
	
									<!-- keterangan -->
									<div class="col-md-12">
										<div class="form-group">

											<!-- title -->
											<h5>Keterangan:</h5>

											<!-- textarea -->
											<ckeditor type="classic" v-model="form.keterangan"></ckeditor>

											<small class="text-muted">&nbsp;</small>
										</div>
									</div>

									<!-- aturan setor -->
									<div class="col-md-12">
										<div class="form-group">

											<!-- title -->
											<h5>Aturan Setor:</h5>

											<!-- textarea -->
											<ckeditor type="classic" v-model="form.aturan_setor"></ckeditor>

											<small class="text-muted">&nbsp;</small>
										</div>
									</div>

									<!-- aturan tarik -->
									<div class="col-md-12" v-if="form.tipe == 'Simpanan Pokok' || form.tipe == 'Simpanan Wajib' || form.tipe == 'Simpanan Non Saham'">
										<div class="form-group">

											<!-- title -->
											<h5>Aturan Tarik:</h5>

											<!-- textarea -->
											<ckeditor type="classic" v-model="form.aturan_tarik"></ckeditor>

											<small class="text-muted">&nbsp;</small>
										</div>
									</div>

									<!-- aturan balas jasa -->
									<div class="col-md-12">
										<div class="form-group">

											<!-- title -->
											<h5>Aturan Balas Jasa:</h5>

											<!-- textarea -->
											<ckeditor type="classic" v-model="form.aturan_balas_jasa"></ckeditor>

											<small class="text-muted">&nbsp;</small>
										</div>
									</div>

									<!-- aturan lain -->
									<div class="col-md-12">
										<div class="form-group">

											<!-- title -->
											<h5>Aturan Lain:</h5>

											<!-- textarea -->
											<ckeditor type="classic" v-model="form.aturan_lain"></ckeditor>

											<small class="text-muted">&nbsp;</small>
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
								:cancelState="'methods'"
								:formValidation="'form'"
								@cancelClick="back"></form-button>
						</div>

					</form>
				</div>
			</div>
		</div>

		<!-- modal -->
		<app-modal :show="modalShow" :state="modalState" :title="modalTitle" :content="modalContent" :color="modalColor" @batal="modalTutup" @tutup="modalTutup" @successOk="modalTutup" @failOk="modalTutup"  @backgroundClick="modalBackgroundClick">
		</app-modal>

	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import pageHeader from "../../components/pageHeader.vue";
	import { toMulipartedForm } from '../../helpers/form';
	import appImageUpload from '../../components/ImageUpload.vue';
	import appModal from '../../components/modal';
	import message from "../../components/message.vue";
	import formButton from "../../components/formButton.vue";
	import formInfo from "../../components/formInfo.vue";
	import Cleave from 'vue-cleave-component';
	import wajibBadge from "../../components/wajibBadge.vue";

	export default {
		components: {
			pageHeader,
			appModal,
			appImageUpload,
			message,
			formButton,
			formInfo,
			Cleave,
			wajibBadge
		},
		data() {
			return {
				title: '',
				titleDesc: '',
				titleIcon: '',
				kelas: 'produkCu',
				level2Title: 'Produk dan Pelayanan',
				cleaveOption: {
          date:{
            date: true,
            datePattern: ['Y','m','d'],
            delimiter: '-'
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
				isDisabledName: false,
				modalShow: false,
				modalState: '',
				modalTitle: '',
				modalColor: '',
				modalContent: '',
				submited: false,
			}
		},
		beforeRouteEnter(to, from, next) {
			next(vm => vm.fetch());
		},
		created(){
			if(this.currentUser.id_cu == 0){
				if(this.modelCuStat != 'success'){
					this.$store.dispatch('cu/getHeader');
				}
			}
			if(this.$route.meta.mode !== 'edit' && this.form.id_cu == undefined){
				this.form.id_cu = this.currentUser.id_cu;
			}

			// check permission
			if(this.$route.meta.mode === 'edit'){
				if(!this.currentUser.can || !this.currentUser.can['update_produk_cu']){
					this.$router.push({name: 'notFound'});
				}
			}else{
				if(!this.currentUser.can || !this.currentUser.can['create_produk_cu']){
					this.$router.push({name: 'notFound'});
				}
			}
		},
		watch: {
			formStat(value){
				if(value === "success"){
					if(this.$route.meta.mode !== 'edit'){
						this.form.id_cu = this.currentUser.id_cu;
					}else{
						this.checkUser('update_produk_cu',this.form.id_cu);
					}
				}
			},
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
			}
    },
		methods: {
			fetch(){
				if(this.$route.meta.mode === 'edit'){
					this.$store.dispatch(this.kelas + '/edit',this.$route.params.id);	
					this.title = 'Ubah ' + this.level2Title;
					this.titleDesc = 'Mengubah ' + this.level2Title;
					this.titleIcon = 'icon-pencil5';
				} else {
					this.title = 'Tambah ' + this.level2Title;
					this.titleDesc = 'Menambah ' + this.level2Title;
					this.titleIcon = 'icon-plus3';
					this.$store.dispatch(this.kelas + '/create');
				}
			},
			checkUser(permission,id_cu){
				if(this.currentUser){
					if(!this.currentUser.can || !this.currentUser.can[permission]){
						this.$router.push('/notFound');
					}
					if(!id_cu || this.currentUser.id_cu){
						if(this.currentUser.id_cu != 0 && this.currentUser.id_cu != id_cu){
							this.$router.push('/notFound');
						}
					}
				}
			},
			save() {
				const formData = toMulipartedForm(this.form, this.$route.meta.mode);
				this.$validator.validateAll('form').then((result) => {
					if (result) {
						if(this.$route.meta.mode === 'edit'){
							this.$store.dispatch(this.kelas + '/update', [this.$route.params.id, formData]);
						}else{
							this.$store.dispatch(this.kelas + '/store', formData);
					}
						this.submited = false;
					}else{
						window.scrollTo(0, 0);
						this.submited = true;
					}
				});
			},
			changeTipe(value){
				if(value == 'Simpanan Pokok'){
					this.form.name = 'Simpanan Pokok';
					this.form.jalinan = 1;
					this.isDisabledName = true;
				}else if(value == 'Simpanan Wajib'){
					this.form.name = 'Simpanan Wajib';
					this.form.jalinan = 1;
					this.isDisabledName = true;
				}else{
					this.form.jalinan = '';
					this.form.name = '';
					this.isDisabledName = false;
				}
			},
			back(){
				if(this.$route.meta.mode == 'edit' && this.currentUser.id_cu == 0){
					this.$router.push({name: this.kelas + 'Cu', params:{cu: 'semua'}});
				}else{
					if(this.currentUser.id_cu == 0){
						this.$router.push({name: this.kelas + 'Cu', params:{cu: 'semua'}});
					}else{
						this.$router.push({name: this.kelas + 'Cu', params:{cu: this.currentUser.id_cu}});
					}		
				}
			},
			modalTutup() {
 				if(this.updateStat === 'success'){
					this.back();
				}

				this.modalShow = false;
				this.submitedKategori = false;
				this.submitedPenulis = false;
			},
			modalBackgroundClick(){
				if(this.modalState === 'success'){
					this.modalTutup;
				}else if(this.modalState === 'loading'){
					// do nothing
				}else{
					this.modalShow = false
				}
			}
		},
		computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
			...mapGetters('produkCu',{
				form: 'data',
				formStat: 'dataStat',
				rules: 'rules',
				options: 'options',
				updateResponse: 'update',
				updateStat: 'updateStat'
			}),
			...mapGetters('cu',{
				modelCU: 'headerDataS',
				modelCUStat: 'headerDataStatS',
			})
		}
	}
</script>