<template>
	<div>
		<!-- itemdata -->
		<div v-if="itemDataStat == 'success'">
			<div v-if="itemData.length > 0">
				<div class="card border-left-primary rounded-left-0" v-for="(revisi,index) in revisi" :key="index">
					<div class="card-header bg-white header-elements-sm-inline">
						<h6 class="card-title">
							&nbsp;
						</h6>
						<div class="header-elements">
							<ul class="list-inline mb-0">
								<li class="list-inline-item"><i class="icon-calendar2"></i> <span v-html="$options.filters.date(index)"></span></li>
								<li class="list-inline-item"><i></i><i class="icon-alarm"></i> <span v-html="$options.filters.time(index)"></span></li>
							</ul>
						</div>
					</div>

					<div class="card-body">	

						<div class="card card-body" v-for="(rev, index) in revisi" :key="index">
							<div class="media">
								<div class="mr-3 position-relative">
									<img :src="'/images/user/' + rev.user.gambar + '.jpg'" width="36" height="36" class="rounded-circle"  alt="user image" v-if="rev.user.gambar">
									<img src="/images/no_image_man.jpg" width="36" height="36" class="rounded-circle" alt="user image" v-else>
								</div>

								<div class="media-body">
									<div class="media-title">
										<a href="#">
											<span class="font-weight-semibold">{{ rev.user.username }}</span>
										</a>
									</div>

									<span>Telah mengubah nilai pada akun <mark>{{ revisionField[rev.key] }}</mark> dari <mark><check-value :value="rev.old_value" valueType="currency"></check-value></mark> menjadi <mark><check-value :value="rev.new_value" valueType="currency"></check-value></mark></span>
								</div>
								
							</div>
						</div>

					</div>

				</div>
			</div>

			<!-- no itemdata -->
			<div v-else>
				<div class="card">
					<div class="card-body">
						<h3>Belum terdapat revisi apapun...</h3>
					</div>
				</div>
			</div>

		</div>

		<!-- loading -->
		<div v-if="itemDataStat == 'loading'">
			<div class="card">
				<div class="card-body">
					<h4>Mohon tunggu...</h4>
					<div class="progress">
						<div class="progress-bar progress-bar-info progress-bar-striped progress-bar-animated" style="width: 100%">
							<span class="sr-only">100% Complete</span>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- modal -->
		<app-modal :show="modalShow" :state="modalState" :title="modalTitle" :size="modalSize" :color="modalColor" :button="modalButton" :content="modalContent" @confirmOk="modalConfirmOk" @tutup="modalTutup" @successOk="modalTutup" @failOk="modalTutup" @backgroundClick="modalTutup">
			<template slot="modal-title">{{ modalTitle }}</template>

			<template slot="modal-body1">

			</template>

		</app-modal>
	</div>
	
</template>

<script>
	import Vue from 'vue';
  import _ from 'lodash';
	import { mapGetters } from 'vuex';
	import { toMulipartedForm } from '../../helpers/form';
	import appModal from '../../components/modal';
	import Cleave from 'vue-cleave-component';
	import checkValue from '../../components/checkValue.vue';

	export default {
		components:{
			appModal,
			checkValue,
		},
		data(){
			return {
				kelas: 'laporanCuDiskusi',
				idCu: '',
				idTp: '',
				periode: '',
				periodeTp: '',
				modalShow: false,
				modalState: '',
				modalTitle: '',
				modalSize: '',
				modalColor: '',
				modalButton: '',
				modalContent: '',
				form: {
					id: '',
					id_laporan: '',
					id_user: '',
					id_cu:'',
					id_tp:'',
					periode: '',
					content: ''
				},
				formEdit:{
					id: '',
					id_laporan: '',
					id_user: '',
					id_cu:'',
					id_tp:'',
					periode:'',
					content: ''
				},
				cleaveOption: {
          numeric: {
            numeral: true,
            numeralThousandsGroupStyle: 'thousand',
            numeralDecimalScale: 2,
            numeralDecimalMark: ',',
            delimiter: '.'
          }
				},
			}
		},
		created(){
			this.fetch();
			this.form.id_user = this.currentUser.id;
		},
		watch: {
			'$route' (to, from){
				// check current page meta
				this.fetch();
			},
			// when updating data
      updateStat(value) {
				this.modalState = value;
				this.modalButton = 'Ok';
				
				if(value === "success"){
					this.modalTitle = this.updateMessage.message;
					this.modalContent = ''; 
					this.form.content = '';
					this.fetch();
				}else if(value === "fail"){
					this.modalContent = this.updateMessage;
				}else{
					this.modalContent = '';
				}
			}
    },
		methods: {
			fetch(){
				if(this.$route.meta.mode == 'detail'){
					this.$store.dispatch(this.kelas +'/get',this.$route.params.id);
				}else if(this.$route.meta.mode == 'detailTp'){
					this.$store.dispatch(this.kelas +'/getTp',this.$route.params.id);
				}
			},
			save(type){
				if(type == 'create'){
					this.form.id = '';
					this.form.id_laporan = this.$route.params.id;
					this.form.id_user = this.currentUser.id;
					this.form.periode = this.modelLaporan.periode;

					if(this.$route.meta.mode == 'detail'){
						this.form.id_cu = this.modelLaporan.id_cu;
						this.form.id_tp = '';
						this.$store.dispatch(this.kelas + '/store', this.form);
					}else if(this.$route.meta.mode == 'detailTp'){
						this.form.id_cu = this.modelLaporan.tp.id_cu;
						this.form.id_tp = this.modelLaporan.tp.id;
						this.$store.dispatch(this.kelas + '/storeTp', this.form);
					}

					this.modalShow = true;
				}else if(type == 'edit'){
					this.formEdit.periode = this.modelLaporan.periode;

					if(this.$route.meta.mode == 'detail'){
						this.formEdit.id_cu = this.modelLaporan.id_cu;
						this.formEdit.id_tp = '';

						this.$store.dispatch(this.kelas + '/update', [this.formEdit.id,this.formEdit]);
					}else if(this.$route.meta.mode == 'detailTp'){
						this.formEdit.id_cu = this.modelLaporan.tp.id_cu;
						this.formEdit.id_tp = this.modelLaporan.tp.id;

						this.$store.dispatch(this.kelas + '/updateTp', [this.formEdit.id, this.formEdit]);
					}
				}
				
				this.modalSize = '';
				this.modalColor = '';
			},
			modalTambah(){
				this.modalShow = true;
				this.modalTitle = 'Tambah Komentar';
				this.modalState = 'normal1';
				this.modalSize = 'modal-lg';
				this.modalColor = 'bg-primary';
			},
			modalUbah(item){
				this.modalShow = true;
				this.modalTitle = 'Ubah Komentar';
				this.modalState = 'normal1';
				this.modalSize = 'modal-lg';
				this.modalColor = 'bg-primary';

				this.formEdit.id = item.id;
				this.formEdit.id_user = item.id_user;
				this.formEdit.id_laporan = item.id_laporan;
				this.formEdit.content = item.content;
			},
			modalHapus(item){
				this.modalShow = true;
				this.modalTitle = 'Hapus Komentar ini?';
				this.modalState = 'confirm-tutup';
				this.modalSize = '';
				this.modalColor = '';
				this.modalButton = 'Iya, Hapus';

				this.formEdit.id = item.id;
			},
			modalConfirmOk(){ // execute destroy
				if(this.$route.meta.mode == 'detail'){
					this.$store.dispatch(this.kelas + '/destroy', this.formEdit.id);
				}else if(this.$route.meta.mode == 'detailTp'){
					this.$store.dispatch(this.kelas + '/destroyTp', this.formEdit.id);
				}
			},
			modalTutup(){
				this.modalShow = false;
			},
			// formating
			formatPeriode(value){
				return Vue.filter('month')(value) + ' ' + Vue.filter('year')(value);
			},
			formatCurrency(value){
				return this.$options.filters.currency(value,'',0,{ thousandsSeparator: '.'});
			},
			formatPercentage(value){
				return Vue.filter('percentage2')(value,2);
			},
			countTotal(value1,value2){
				return value1 - value2;
			},
			countPercentage(value1,value2){
				if(value2 > 0){
					return this.formatPercentage((this.countTotal(value1,value2) / value2));
				}else{
					return this.formatPercentage('0');
				}
			}
		},
		computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
			...mapGetters('laporanCu',{
				itemData: 'history',
				itemDataStat: 'dataStat',
				columnData: 'columnData'
			}),
			history(){
				return _.groupBy(this.itemData,'created_at');
			},
			revisionField(){
				let newData = {};
				this.columnData.forEach(e => {
					newData[e.name] = e.title
				})

				return newData;
			}
		}
	}
</script>