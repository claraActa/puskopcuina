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
							<div class="card-header bg-white">
								<h5 class="card-title">1. Pemilihan</h5>
							</div>
							<div class="card-body">	
								<div class="row">

									<!-- name -->
									<div class="col-md-4">
										<div class="form-group" :class="{'has-error' : errors.has('form.name')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.name')}">
												<i class="icon-cross2" v-if="errors.has('form.name')"></i>
												Nama: <wajib-badge></wajib-badge></h5>

											<!-- text -->
											<input type="text" name="name" class="form-control" placeholder="Silahkan masukkan nama" v-validate="'required|min:5'" data-vv-as="Nama" v-model="form.name">

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.name')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.name') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
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
											<select class="form-control" name="id_cu" v-model="form.id_cu" data-width="100%" v-validate="'required'" data-vv-as="CU" :disabled="modelCU.length === 0" @change="changeCU($event.target.value)">
												<option disabled value="">
													<span v-if="modelCUStat === 'loading'">Mohon tunggu...</span>
													<span v-else>Silahkan pilih CU</span>
												</option>
												<option value="0"><span v-if="currentUser.pus">{{currentUser.pus.name}}</span> <span v-else>PUSKOPCUINA</span></option>
												<option v-for="(cu, index) in modelCU" :value="cu.id" :key="index">{{cu.name}}</option>
											</select>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.id_cu')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.id_cu') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- tingkat -->
									<div class="col-md-4">
										<div class="form-group" :class="{'has-error' : errors.has('form.tingkat')}">

											<!-- title -->
											<h6 :class="{ 'text-danger' : errors.has('form.tingkat')}">
												<i class="icon-cross2" v-if="errors.has('form.tingkat')"></i>
												Tingkat: <wajib-badge></wajib-badge>
											</h6>

											<!-- select -->
											<select class="form-control" name="pekerjaan_tingkat" v-model="form.tingkat" data-width="100%" v-validate="'required'" data-vv-as="Tingkat Pekerjaan">
												<option disabled value="">Silahkan pilih tingkat pekerjaan</option>
												<option value="1">Pengurus</option>
												<option value="2">Pengawas</option>
												<option value="3">Komite</option>
												<option value="4">Penasihat</option>
												<option value="5">Senior Manajer (General Manager, CEO, Deputy)</option>
												<option value="6">Manajer</option>
												<option value="7">Supervisor (Kepala Bagian, Kepala Divisi, Kepala/Koordinator TP, Kepala Bidang)</option>
												<option value="8">Staf</option>
												<option value="9">Kontrak</option>
												<option value="10">Kolektor</option>
												<option value="11">Kelompok Inti</option>
											</select>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.tingkat')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.tingkat') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<div class="col-md-6">
										<div class="form-group" :class="{'has-error' : errors.has('form.pemilihan_min')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.pemilihan_min')}">
												<i class="icon-cross2" v-if="errors.has('form.pemilihan_min')"></i>
												Pemilih Minimum: <wajib-badge></wajib-badge></h5>

											<!-- input -->
											<cleave 
												name="pemilihan_min"
												v-model="form.pemilihan_min" 
												class="form-control" 
												:raw="false" 
												:options="cleaveOption.number3" 
												placeholder="Silahkan masukkan pemilihan minimum"
												v-validate="'required'" data-vv-as="Pemilihan Minimum"
												@blur.native="min"></cleave>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.pemilihan_min')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.pemilihan_min') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<div class="col-md-6">
										<div class="form-group" :class="{'has-error' : errors.has('form.pemilihan_max')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.pemilihan_max')}">
												<i class="icon-cross2" v-if="errors.has('form.pemilihan_max')"></i>
												Pemilih Maximum: <wajib-badge></wajib-badge></h5>

											<!-- input -->
											<cleave 
												name="pemilihan_max"
												v-model="form.pemilihan_max" 
												class="form-control" 
												:raw="false" 
												:options="cleaveOption.number3" 
												placeholder="Silahkan masukkan pemilihan maximum"
												v-validate="'required'" data-vv-as="Pemilihan Maximum"
												@blur.native="max"></cleave>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.pemilihan_max')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.pemilihan_max') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>
									
									<!-- pilih suara -->
									<template v-if="$route.meta.mode != 'edit'">
										<div class="col-md-12">
											<div class="form-group" :class="{'has-error' : errors.has('form.sumberSuara')}">

												<!-- title -->
												<h5 :class="{ 'text-danger' : errors.has('form.sumberSuara')}">
													<i class="icon-cross2" v-if="errors.has('form.sumberSuara')"></i>
													Sumber Data Suara: <wajib-badge></wajib-badge>
												</h5>

												<!-- select -->
												<select class="form-control"  name="sumberSuara" v-model="form.sumberSuara" data-width="100%" v-validate="'required'" data-vv-as="Penulis" :disabled="modelPemilihanStat === 'loading'">
													<option disabled value="">
														<span v-if="modelPemilihanStat === 'loading'">Mohon tunggu...</span>
														<span v-else>Silahkan pilih sumber data suara</span>
													</option>
													<option value="0">Data Suara Baru</option>
													<option disabled value="">----------------</option>
													<option v-for="(pemilihan, index) in modelPemilihan" :value="pemilihan.id" :key="index">{{pemilihan.name}} | jumlah suara: {{pemilihan.suara}}</option>
												</select>

												<!-- error message -->
												<small class="text-muted text-danger" v-if="errors.has('form.id_cu')">
													<i class="icon-arrow-small-right"></i> {{ errors.first('form.id_cu') }}
												</small>
												<small class="text-muted" v-else>&nbsp;</small>
											</div>
										</div>

										<!-- suara -->
										<div class="col-md-12" v-if="modelPemilihanStat == 'success' && form.sumberSuara === '0'">
											<div class="form-group" :class="{'has-error' : errors.has('form.suara')}">

												<!-- title -->
												<h5 :class="{ 'text-danger' : errors.has('form.suara')}">
													<i class="icon-cross2" v-if="errors.has('form.suara')"></i>
													Jumlah Suara: <wajib-badge></wajib-badge></h5>

												<!-- input -->
												<cleave 
													name="suara"
													v-model="form.suara" 
													class="form-control" 
													:raw="false" 
													:options="cleaveOption.number4" 
													placeholder="Silahkan masukkan suara"
													v-validate="'required'" data-vv-as="Suara"></cleave>

												<!-- error message -->
												<small class="text-muted text-danger" v-if="errors.has('form.suara')">
													<i class="icon-arrow-small-right"></i> {{ errors.first('form.suara') }}
												</small>
												<small class="text-muted" v-else>&nbsp;</small>
											</div>
											
											<div class="form-group" :class="{'has-error' : errors.has('form.suara_tipe')}">

												<!-- title -->
												<h5 :class="{ 'text-danger' : errors.has('form.suara_tipe')}">
													<i class="icon-cross2" v-if="errors.has('form.suara_tipe')"></i>
													Tipe Suara: <wajib-badge></wajib-badge></h5>

												<!-- input -->
												<!-- select -->
												<select class="form-control"  name="suara_tipe" v-model="form.suara_tipe" data-width="100%" v-validate="'required'" data-vv-as="tipe suara">
													<option disabled value="">Silahkan pilih tipe suara</option>
													<option value="0">Link suara otomatis</option>
													<option value="1">Link suara dari sumber data external</option>
												</select>

												<!-- error message -->
												<small class="text-muted text-danger" v-if="errors.has('form.suara_tipe')">
													<i class="icon-arrow-small-right"></i> {{ errors.first('form.suara_tipe') }}
												</small>
												<small class="text-muted" v-else>&nbsp;</small>
											</div>
										</div>
									</template>
																	
								</div>
							</div>
						</div>

						<!-- calon -->
						<div class="card">
							<div class="card-header bg-white">
								<h5 class="card-title">2. Calon</h5>
							</div>
							<div class="card-body pb-2">
								<div class="row">

									<div class="col-md-12">

										<button class="btn btn-light mb-1" @click.prevent="modalOpen('tambahCalon')">
											<i class="icon-plus22"></i> Tambah
										</button>

										<!-- <button class="btn btn-light mb-1" @click.prevent="modalOpen('ubahCalon')"
										:disabled="!selectedItemCalon.index">
											<i class="icon-pencil5"></i> Ubah
										</button> -->

										<button class="btn btn-light mb-1" @click.prevent="modalOpen('hapusCalon')" :disabled="!selectedItemCalon.index">
											<i class="icon-bin2"></i> Hapus
										</button>

									</div>

								</div>		
							</div>

							<data-table :items="itemDataCalon" :columnData="columnDataCalon" :itemDataStat="itemDataCalonStat">
								<template slot="item-desktop" slot-scope="props">
									<tr :class="{ 'bg-info': selectedItemCalon.index == props.index + 1}" class="text-nowrap" @click="selectedRow(props.item, props.index + 1, 'calon')" v-if="props.item">
										<td>{{ props.item.no_urut }}</td>
										<td>
											<img :src="'/images/aktivis/' + props.item.gambar + 'n.jpg'" width="35px" class="img-rounded img-fluid wmin-sm" v-if="props.item.gambar">
											<img :src="'/images/no_image.jpg'" width="35px" class="img-rounded img-fluid wmin-sm" v-else>
										</td>
										<td>{{ props.item.name }}</td>
										<td>{{ props.item.tanggal_lahir }}</td>
										<td>{{ props.item.tempat_lahir }}</td>
										<td>{{ props.item.status }}</td>
										<td>{{ props.item.pendidikan }}</td>
									</tr>
								</template>	
							</data-table>

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

			<template slot="modal-body1">

				<!-- calon -->
				<form-calon 
				:mode="formCalonMode"
				:selected="selectedItemCalon"
				@createCalon="createCalon"
				@editCalon="editCalon"
				@tutup="modalTutup" v-if="state == 'tambahCalon' || state == 'ubahCalon'"></form-calon>

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
	import appModal from '../../components/modal';
	import message from "../../components/message.vue";
	import formButton from "../../components/formButton.vue";
	import formInfo from "../../components/formInfo.vue";
	import formCalon from "./formCalon.vue";
	import Cleave from 'vue-cleave-component';
	import dataTable from '../../components/datatable.vue';
	import DatePicker from "../../components/datePicker.vue";

	export default {
		components: {
			pageHeader,
			appModal,
			message,
			formButton,
			formInfo,
			formCalon,
			Cleave,
			dataTable,
			infoIcon,
			wajibBadge,
			DatePicker
		},
		data() {
			return {
				title: 'Tambah Pemilihan',
				titleDesc: 'Menambah pemilihan baru',
				titleIcon: 'icon-plus3',
				level: 2,
				level2Title: 'Pemilihan',
				kelas: 'pemilihan',
				sasaran: [],
				tempatData: '',
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
					number4: {
            numeral: true,
            numeralIntegerScale: 4,
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
				columnDataCalon:[
					{ title: 'No. Urut' },
					{ title: 'Foto' },
					{ title: 'Nama' },
					{ title: 'Tanggal Lahir' },
					{ title: 'Tempat Lahir' },
					{ title: 'Status' },
					{ title: 'Pendidikan' },
				],
				selectedItemCalon: '',
				formCalonMode: '',
				itemDataCalon: [],
				itemDataCalonStat: 'success',
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
			formStat(value){
				if(value === "success"){
					this.form.id_cu = this.currentUser.id_cu;	
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
			},
    },
		methods: {
			fetch(){
				if(this.currentUser.id_cu == 0){
					this.$store.dispatch(this.kelas + '/indexPemilihan');
				}else{
					this.$store.dispatch(this.kelas + '/indexPemilihanCu', this.currentUser.id_cu);
				}

				if(this.$route.meta.mode == 'edit'){
					this.$store.dispatch(this.kelas + '/edit',this.$route.params.id);	
				} else {
					this.$store.dispatch(this.kelas + '/create');
				}
				
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
			min(){
				if(this.form.pemilihan_min < 1){
					this.form.pemilihan_min = 1;
				}
			},
			max(){
				if(this.form.pemilihan_max < this.form.pemilihan_min){
					this.form.pemilihan_max = this.form.pemilihan_min;
				}
			},
			createCalon(value){
				this.itemDataCalon.push(value);
				this.selectedItemCalon = {};
				this.modalTutup();
			},
			editCalon(value){
				_.remove(this.itemDataCalon, {
						index: value.index
				});
				this.itemDataCalon.push(value);
				this.selectedItemCalon = {};
				this.modalTutup(); 
			},
			save() {
				this.form.calon = this.itemDataCalon;
				this.state = '';
				
				this.$validator.validateAll('form').then((result) => {
					if (result) {
						if(this.$route.meta.mode == 'edit'){
							this.$store.dispatch(this.kelas + '/update', [this.$route.params.id, this.form]);
						}else{
							this.$store.dispatch(this.kelas + '/store', this.form);
					}
						this.submited = false;
					}else{
						window.scrollTo(0, 0);
						this.submited = true;
					}
				});
			},
			back(){
				if(this.currentUser.id_cu == 0){
					this.$router.push({name: this.kelas, params:{cu:'semua'}});
				}else{
					this.$router.push({name: this.kelas, params:{cu: this.currentUser.id_cu}});
				}
			},
			selectedRow(item,index){
				this.selectedItemCalon = item;
				this.selectedItemCalon.index = index;
			},
			selectedRow2(item,index){
				this.selectedItemSuara = item;
				this.selectedItemSuara.index = index;
			},
			modalOpen(state, isMobile, itemMobile) {
				this.modalShow = true;
				this.state = state;

				if(isMobile){
					this.selectedItemCalon = itemMobile;
				}

				if (state == 'hapusCalon') {
					this.modalState = 'confirm-tutup';
					this.modalColor = '';
					this.modalTitle = 'Hapus Calon' + this.selectedItemCalon.name + ' ?';
					this.modalButton = 'Iya, Hapus';
					this.modalSize = '';
				}else if(state == 'ubahCalon'){
					this.modalState = 'normal1';
					this.modalColor = 'bg-primary';
					this.modalTitle = 'Ubah Calon';
					this.modalButton = 'Ok';
					this.modalSize = 'modal-lg';
					this.formCalonMode = 'edit';
				}else if(state == 'tambahCalon'){
					this.modalState = 'normal1';
					this.modalColor = 'bg-primary';
					this.modalTitle = 'Tambah Calon';
					this.modalButton = 'Ok';
					this.modalSize = 'modal-lg';
					this.formCalonMode = 'create';
				}
			},
			modalConfirmOk() {
				this.modalShow = false;

				if (this.state == 'hapusCalon') {
					_.remove(this.itemDataCalon, {
						index: this.selectedItemCalon.index
					});
					this.selectedItemCalon = {};
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
			momentYear(){
				return moment().year();
			}
		},
		computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
			...mapGetters('cu',{
				modelCU: 'headerDataS',
				modelCUStat: 'headerDataStatS',
			}),
			...mapGetters('pemilihan',{
				form: 'data',
				formStat: 'dataStat',
				modelPemilihan: 'dataS2',
				modelPemilihanStat: 'dataStatS2',
				rules: 'rules',
				options: 'options',
				updateResponse: 'update',
				updateStat: 'updateStat'
			}),
		}
	}
</script>