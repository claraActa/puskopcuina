<template>
	<div>
		<form @submit.prevent="save" data-vv-scope="formDataCu">

		<!-- message -->
		<message v-if="message.show" @close="messageClose" :title="'Oops terjadi kesalahan'" :errorData="message.content" :showDebug="false">
		</message>

		<div class="row">

			<!-- cu -->
			<div class="col-md-6" v-if="currentUser.id_cu === 0">
				<div class="form-group" :class="{'has-error' : errors.has('formDataCu.cu_id')}">

					<!-- title -->
					<h5 :class="{ 'text-danger' : errors.has('formDataCu.cu_id')}">
						<i class="icon-cross2" v-if="errors.has('formDataCu.cu_id')"></i>
						CU: <wajib-badge></wajib-badge>
					</h5>

					<!-- select -->
					<select class="form-control" name="cu_id" v-model="formDataCu.cu_id" data-width="100%" @change="changeCu($event.target.value)" v-validate="'required'" data-vv-as="CU" :disabled="modelCU.length === 0">
						<option disabled value="0">
							<span v-if="modelCUStat === 'loading'">Mohon tunggu...</span>
							<span v-else>Silahkan pilih CU</span>
						</option>
						<option v-for="(cu, index) in modelCU" :value="cu.id" :key="index">{{cu.name}}</option>
					</select>

					<!-- error message -->
					<small class="text-muted text-danger" v-if="errors.has('formDataCu.cu_id')">
						<i class="icon-arrow-small-right"></i> {{ errors.first('formDataCu.cu_id') }}
					</small>
					<small class="text-muted" v-else>&nbsp;</small>
				</div>
			</div>

			<!-- tp -->
			<div class="col-md-6">
				<div class="form-group" :class="{'has-error' : errors.has('formDataCu.tp_id')}">

					<!-- title -->
					<h6 :class="{ 'text-danger' : errors.has('formDataCu.tp_id')}">
						<i class="icon-cross2" v-if="errors.has('formDataCu.tp_id')"></i>
						TP/KP: <wajib-badge></wajib-badge>
					</h6>

					<!-- select -->
					<select class="form-control" name="id_tp" v-model="formDataCu.tp_id" data-width="100%" v-validate="'required'" data-vv-as="TP/KP" @change="changeTp($event.target.value)">
						<option disabled value="">
							<span v-if="modelTpStat === 'loading'">Mohon tunggu...</span>
							<span v-else>Silahkan pilih TP/KP</span>
						</option>
						<option v-for="(tp, index) in modelTp" :value="tp.id" :key="index">{{tp.name}}</option>
					</select>

					<!-- error message -->
					<small class="text-muted text-danger" v-if="errors.has('formDataCu.tp_id')">
						<i class="icon-arrow-small-right"></i> {{ errors.first('formDataCu.tp_id') }}
					</small>
					<small class="text-muted" v-else>&nbsp;</small>
				</div>
			</div>

			<!-- no_ba -->
			<div class="col-md-6">
				<div class="form-group" :class="{'has-error' : errors.has('formDataCu.no_ba')}">

					<!-- title -->
					<h5 :class="{ 'text-danger' : errors.has('formDataCu.no_ba')}">
						<i class="icon-cross2" v-if="errors.has('formDataCu.no_ba')"></i>
						No. BA: <wajib-badge></wajib-badge>
					</h5>

					<!-- text -->
					<cleave 
						name="anggota_no_ba"
						v-model="formDataCu.no_ba" 
						class="form-control" 
						:options="cleaveOption.number16"
						placeholder="Silahkan masukkan no buku anggota"
						v-validate="'required'" data-vv-as="No. Buku Anggota"></cleave>


					<!-- error message -->
					<small class="text-muted text-danger" v-if="errors.has('formDataCu.no_ba')">
						<i class="icon-arrow-small-right"></i> {{ errors.first('formDataCu.no_ba') }}
					</small>
					<small class="text-muted" v-else>&nbsp;
					</small>
				</div>
			</div>

			<!-- tanggal_masuk -->
			<div class="col-md-6">
				<div class="form-group" :class="{'has-error' : errors.has('formDataCu.tanggal_masuk')}">

					<!-- title -->
					<h5 :class="{ 'text-danger' : errors.has('formDataCu.tanggal_masuk')}">
						<i class="icon-cross2" v-if="errors.has('formDataCu.tanggal_masuk')"></i>
						Tgl. Jadi Anggota: <wajib-badge></wajib-badge>
					</h5>

					<!-- text -->
					<date-picker @dateSelected="formDataCu.tanggal_masuk = $event" :defaultDate="formDataCu.tanggal_masuk"></date-picker>	
					<input v-model="formDataCu.tanggal_masuk" v-show="false" v-validate="'required'" data-vv-as="Tgl. jadi anggota"/>

					<!-- error message -->
					<small class="text-muted text-danger" v-if="errors.has('formDataCu.tanggal_masuk')">
						<i class="icon-arrow-small-right"></i> {{ errors.first('formDataCu.tanggal_masuk') }}
					</small>
					<small class="text-muted" v-else>&nbsp;
					</small>
				</div>
			</div>

			<!-- keterangan_masuk -->
			<div class="col-md-12">
				<div class="form-group" >

					<!-- title -->
					<h6>Keterangan Jadi Anggota:</h6>

					<!-- text -->
					<input type="text" name="keterangan_masuk" class="form-control" placeholder="Silahkan masukkan keterangan masuk" v-model="formDataCu.keterangan_masuk">
					
				</div>
			</div>

		</div>

		<!-- divider -->
		<hr>
		
		<!-- tombol desktop-->
		<div class="text-center d-none d-md-block">
			<button type="button" class="btn btn-light" @click.prevent="tutup">
				<i class="icon-cross"></i> Tutup</button>

			<button type="submit" class="btn btn-primary" :disabled="formDataCu.cu_id == ''">
				<i class="icon-floppy-disk"></i> Simpan</button>
		</div>  

		<!-- tombol mobile-->
		<div class="d-block d-md-none">
			<button type="submit" class="btn btn-primary btn-block pb-2" :disabled="formDataCu.cu_id == ''">
				<i class="icon-floppy-disk"></i> Simpan</button>

			<button type="button" class="btn btn-light btn-block pb-2" @click.prevent="tutup">
				<i class="icon-cross"></i> Tutup</button>
		</div> 

		</form>

	</div>
</template>

<script>
	import _ from 'lodash';
	import { mapGetters } from 'vuex';
	import checkValue from '../../components/checkValue.vue';
	import Message from "../../components/message.vue";
	import Cleave from 'vue-cleave-component';
	import produkCuAPI from '../../api/produkCu.js';
	import wajibBadge from "../../components/wajibBadge.vue";
	import DatePicker from "../../components/datePicker.vue";

	export default {
		props: ['mode','selected'],
		components: {
			checkValue,
			Message,
			Cleave,
			wajibBadge,
			DatePicker
		},
		data() {
			return {
				title: '',
				kelas: 'anggotaCu',
				formDataCu:{
					no_ba: '',
					tanggal_masuk: '',
					keterangan_masuk: '',
					cu_id: 0,
					tp_id: '',
					cu: {
						id: '',
						name: '',
					},
					tp: {
						id: '',
						name: '',
					},
				},
				modelProdukCu: [],
				modelProdukCuStat: '',
				cleaveOption: {
					date:{
            date: true,
            datePattern: ['Y','m','d'],
            delimiter: '-'
					},
          numeric: {
            numeral: true,
            numeralThousandsGroupStyle: 'thousand',
            numeralDecimalScale: 2,
            numeralDecimalMark: ',',
            delimiter: '.'
					},
					number16: {
            numeral: true,
            numeralIntegerScale: 16,
            numeralDecimalScale: 0,
						stripLeadingZeroes: false,
						delimiter: ''
					},
				},
				message: {
					show: false,
					content: ''
				},
				submited: false,
			}
		},
		created(){
			this.fetchCU();
			if(this.mode == 'edit'){
				if(this.modelCUStat == 'success'){
					this.formDataCu = Object.assign({},this.selected);
				}
			}
		},
		watch: {
			modelCUStat(value){
				if(value === "success"){
					if(this.mode == 'edit'){
						this.formDataCu = Object.assign({},this.selected);
						this.fetchTp(this.formDataCu.cu_id);
					}
				}
			},
		},
		methods: {
			changeCu(id){
				let cu;
				if(id != 0){
					cu = _.find(this.modelCU, function(o){
						return o.id == id;
					});
				}
				this.formDataCu.cu.id = cu.id;
				this.formDataCu.cu.name = cu.name;
				
				this.fetchTp(cu.id);
			},
			changeTp(id){
				let tp;
				if(id != 0){
					tp = _.find(this.modelTp, function(o){
						return o.id == id;
					});
				}
				if(this.formDataCu.tp != null){
					this.formDataCu.tp.id = tp.id;
					this.formDataCu.tp.name = tp.name;
				}else{
					var tpdata = {};
					tpdata.id = tp.id;
					tpdata.name = tp.name;
					this.formDataCu.tp = tpdata;
				}
			},
			fetchCU(){
				if(this.modelCuStat != 'success'){
					this.$store.dispatch('cu/getHeader');
				}else{
					this.idCu = this.$route.params.cu;
					this.tingkat = this.$route.params.tingkat;
				}
			},
			fetchTp(value){
				this.$store.dispatch('tp/getCu',value);
			},
			save(){
				this.$validator.validateAll('formDataCu').then((result) => {
					if (result) {
						if(this.mode == 'edit'){
							this.$emit('editCu',this.formDataCu);
						}else{
							this.$emit('createCu',this.formDataCu);
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
			...mapGetters('cu',{
				modelCU: 'headerDataS',
				modelCUStat: 'headerDataStatS',
				updateMessage: 'update',
				updateStat: 'updateStat'
			}),
			...mapGetters('tp',{
				modelTp: 'dataS',
				modelTpStat: 'dataStatS',
			}),
		}
	}
</script>