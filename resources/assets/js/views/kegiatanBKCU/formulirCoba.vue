<template>
	<div>
		<!-- page-header -->
		<page-header :title="title" :titleDesc="titleDesc" :titleIcon="titleIcon" :level="level" :level2Title="level2Title" :level2Route="kelas" @level2Back="back()"></page-header>

		<!-- content -->
		<div class="page-content pt-0">
			<div class="content-wrapper">
				<div class="content">

					<!-- message -->
					<message v-if="errors.any('formulirCoba') && submited" :title="'Oops terjadi kesalahan'" :errorItem="errors.items">
					</message>

					<!-- main panel -->
					<form @submit.prevent="save" enctype="multipart/form-data" data-vv-scope="formulirCoba">
					
						<!-- informasi umum -->
						<div class="card">
							<div class="card-body">	
								<div class="row">
									 <!-- kode -->
									<div class="col-md-6">
										<div class="form-group" :class="{'has-error' : errors.has('formulirCoba.name')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('formulirCoba.name')}">
												<i class="icon-cross2" v-if="errors.has('formulirCoba.name')"></i>
												Nama : <wajib-badge></wajib-badge></h5>

											<!-- text -->
											<input type="text" name="name" class="form-control" placeholder="Silahkan masukkan Nama" v-validate="'required|min:5'" data-vv-as="Nama" v-model="formulirCoba.name">
											

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('formulirCoba.name')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('formulirCoba.name') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- name -->
									<div class="col-md-6">
										<div class="form-group" :class="{'has-error' : errors.has('formulirCoba.comment')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('formulirCoba.comment')}">
												<i class="icon-cross2" v-if="errors.has('formulirCoba.comment')"></i>
												Comment: <wajib-badge></wajib-badge></h5>

											<!-- text -->
											<input type="text" name="comment" class="form-control" placeholder="Silahkan masukkan Comment" v-validate="'required|min:5'" data-vv-as="comment" v-model="formulirCoba.comment">

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('formulirCoba.comment')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('formulirCoba.comment') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
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
								:formValidation="'formulirCoba'"
								@cancelClick="back"></form-button>
						</div>	

					</form>
				</div>
			</div>
		</div>

        <!-- main panel -->
		<data-viewer :title="title" :columnData="columnData" :itemData="itemData" :query="query" :itemDataStat="itemDataStat" :excelDownloadUrl="excelDownloadUrl"  :isNoButtonRow="isNoButtonRow" :dataview="dataview" @fetch="fetch">
			<!-- button desktop -->
			<template slot="button-desktop">

					<!-- tambah -->
					<router-link :to="{ name: kelas + 'Create'}" class="btn btn-light mb-1" v-if="currentUser.can && currentUser.can['create_diklat_bkcu']">
						<i class="icon-plus3"></i> Tambah
					</router-link>

					<!-- ubah--> 
					<button @click.prevent="ubahData(selectedItem.id)" class="btn btn-light mb-1" v-if="currentUser.can && currentUser.can['create_diklat_bkcu']" :disabled="!selectedItem.id">
						<i class="icon-pencil5"></i> Ubah
					</button>

					<!-- hapus -->
					<button @click.prevent="modalConfirmOpen('hapus')" class="btn btn-light mb-1" v-if="currentUser.can && currentUser.can['create_diklat_bkcu']" :disabled="!selectedItem.id">
						<i class="icon-bin2"></i> Hapus
					</button>

			</template>	 

			<!-- button mobile -->
			<template slot="button-mobile">
					<!-- tambah -->
					<router-link :to="{ name: kelas + 'Create'}" class="btn btn-light btn-block mb-1" v-if="currentUser.can && currentUser.can['create_diklat_bkcu']">
						<i class="icon-plus3"></i> Tambah
					</router-link>

					<!-- ubah-->
					<button @click.prevent="ubahData(selectedItem.id)" class="btn btn-light btn-block mb-1" v-if="currentUser.can && currentUser.can['create_diklat_bkcu']" :disabled="!selectedItem.id">
						<i class="icon-pencil5"></i> Ubah
					</button>

					<!-- hapus -->
					<button @click.prevent="modalConfirmOpen('hapus')" class="btn btn-light btn-block mb-1" v-if="currentUser.can && currentUser.can['create_diklat_bkcu']" :disabled="!selectedItem.id">
						<i class="icon-bin2"></i> Hapus
					</button>

			</template>

			<!-- item desktop -->
			<template slot="item-desktop" slot-scope="props">
				<tr :class="{ 'bg-info': selectedItem.id === props.item.id }" class="text-nowrap" @click="selectedRow(props.item)">
					<td v-if="!columnData[0].hide">
						{{ props.index + 1 + (+itemData.current_page-1) * +itemData.per_page + '.'}}
					</td>
					<td v-if="!columnData[1].hide">
						<check-value :value="props.item.name"></check-value>
					</td>
					<td v-if="!columnData[2].hide">
						<check-value :value="props.item.comment"></check-value>
					</td>
					
				</tr>
			</template>

			<!-- item mobile -->
			<template slot="item-mobile" slot-scope="props">
				<div class="col-lg-4 col-md-6">
					<div class="card cursor-pointer" @click.prevent="ubahData(props.item.id)">						
						<div class="card-header bg-light header-elements-inline">
							<h6 class="card-title"><check-value :value="props.item.kode_sertifikat"></check-value>
								</h6>
						</div>
						<div class="card-body">
							

							<div class="row">
								<div class="col-sm-6">
									<ul class="list list-unstyled mb-1">
										<li>No.: <span class="text-muted">{{ props.item.id }}</span></li>
										</ul>
								</div>
								<div class="col-sm-6">
									<ul class="list list-unstyled mb-1">
										<li>Nama: <span class="text-muted">{{ props.item.name }}</span></li>
										</ul>
								</div>
								<div class="col-sm-6">
									<ul class="list list-unstyled mb-1">
										<li>Comment: <span class="text-muted">{{ props.item.comment }}</span></li>
										</ul>
								</div>
	
							</div>
						</div>					
					</div>
				</div>
			</template>

		</data-viewer>
					
	

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
				title: 'Tambah Formulir',
				titleDesc: 'Menambah Formulir COba',
				titleIcon: 'icon-plus3',
				level: 2,
				level2Title: 'Formulir Coba',
				kelas: 'kegiatanBKCU',
				sasaran: [],
                columnData: [
					{
						title: 'No.',
						name: 'id',
					},
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
					{
						title: 'Comment',
						name: 'comment',
						tipe: 'string',
						sort: false,
						hide: false,
						disable: false,
						filter: true,
						filterDefault: false
						
					}
				],
				
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
					this.changeRegencies(this.formulirCoba.id_regencies);
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
				const formData = toMulipartedForm(this.formulirCoba, this.$route.meta.mode);
				this.$validator.validateAll('formulirCoba').then((result) => {
					if (result) {
						if(this.$route.meta.mode == 'edit'){
							console.log(this.formulirCoba.gambar_depan);
							this.$store.dispatch(this.kelas + '/update',[this.$route.params.id, formData]);
						}else{
							console.log(this.formulirCoba.gambar_depan);
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
					this.$router.push({name: this.kelas + 'Detail', params: { id: this.formulirCoba.id }});
				}else{
					if(this.$route.meta.mode == 'edit'){
						this.$router.push({name: this.kelas, params:{tipe:this.formulirCoba.tipe, periode: this.momentYear()}});
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
						this.$router.push({name: this.kelas + 'Detail', params: { id: this.formulirCoba.id }});
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
				this.formulirCoba.gambar_depan = event.target.files[0];
				this.formulirCoba.gambar_belakang = event.target.files[0];
			},
			momentYear(){
				return moment().year();
			}
		},
		computed: {
			...mapGetters('kegiatanBKCU',{
                itemData: 'dataS',
                itemDataStat: 'dataStatS',
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
