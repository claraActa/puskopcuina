<template>
	<div>
		<form @submit.prevent="checkPeserta" data-vv-scope="formPeserta">

		<div class="alert bg-info text-white alert-styled-left alert-dismissible">
			<span class="font-weight-semibold">Sasaran peserta untuk kegiatan ini adalah untuk tingkat: 
				<br/>
				<label v-for="(sasaran, index) in tingkat" :key="index" class="badge badge-primary ml-1">
					{{ sasaran.name }}
				</label>
			</span>
		</div>  

		<!-- message -->
		<message v-if="message.show" @close="messageClose" :title="'Oops terjadi kesalahan'" :errorData="message.content" :showDebug="false">
		</message>

		<div class="card" v-if="formPeserta.aktivis_id">
			<div class="card-header bg-info text-white header-elements-inline">
				<h6 class="card-title">{{ formPeserta.name }}</h6>
				<div class="header-elements">
					<button type="button" class="btn btn-danger" @click.prevent="deleteSelected" v-if="mode == 'create'"><i class="icon-cross2 mr-2"></i> Batal</button>
				</div>
			</div>
			<div class="card-body">
				<div class="media flex-column flex-sm-row mt-0 mb-3">
					<div class="mr-sm-3 mb-2 mb-sm-0">
						<div class="card-img-actions">
								<img :src="'/images/aktivis/' + formPeserta.gambar + '.jpg'" class="img-fluid img-preview rounded" v-if="formPeserta.gambar" >
								<img :src="'/images/no_image.jpg'" class="img-fluid img-preview rounded" v-else>
						</div>
					</div>

					<div class="media-body">
						<div class="row">
							<div class="col-sm-6">
								<ul class="list list-unstyled mb-0">
									<li><b>Gender:</b> {{ formPeserta.kelamin}}</li>
									<li><b>Tempat Lahir:</b> {{ formPeserta.tempat_lahir}}</li>
									<li><b>Tgl. Lahir:</b> <span v-html="$options.filters.date(formPeserta.tanggal_lahir)"></span></li>
									<li><b>Status:</b> {{ formPeserta.status}}</li>
									<li><b>Tinggi:</b> {{ formPeserta.tinggi}}</li>
									<li><b>Agama:</b> {{ formPeserta.agama}}</li>
								</ul>
							</div>
							<div class="col-sm-6">
								<ul class="list list-unstyled mb-0">
									<li><b>CU:</b> <br/>{{ formPeserta.lembaga}}</li>
									<li><b>Jabatan:</b> <br/>{{ formPeserta.jabatan}}</li>
									<li><b>Pendidikan:</b> <br/>{{ formPeserta.pendidikan}}</li>
								</ul>
							</div>
						</div>
						
					</div>
				</div>
			</div>
		</div>

		<!-- peserta -->
		<data-viewer :title="'Aktivis'" :columnData="columnData" :itemData="itemData" :query="query" :itemDataStat="itemDataStat" @fetch="fetch" :isDasar="'true'" :isNoButtonRow="'true'" v-if="formPeserta.aktivis_id == '' && mode == 'create'">

			<!-- item  -->
			<template slot="item-desktop" slot-scope="props">
				<tr class="text-nowrap cursor-pointer" @click="selectedRow(props.item)">
					<td>
						{{ props.index + 1 + (+itemData.current_page-1) * +itemData.per_page + '.'}}
					</td>
					<td>
						<img :src="'/images/' + kelas + '/' + props.item.gambar + 'n.jpg'" class="img-rounded img-fluid wmin-sm" v-if="props.item.gambar">
						<img :src="'/images/no_image.jpg'" class="img-rounded img-fluid wmin-sm" v-else>
					</td>
					<td>
						<check-value :value="props.item.name"></check-value>
					</td>
					<td>
						<check-value :value="props.item.kelamin"></check-value>
					</td>
					<td v-if="!columnData[4].disable">
						<span v-if="props.item.pekerjaan_aktif && props.item.pekerjaan_aktif.tipe == 1">
							<check-value :value="props.item.pekerjaan_aktif.cu.name" v-if="props.item.pekerjaan_aktif.cu"></check-value>
							<span v-else>-</span>
						</span>
						<span v-else-if="props.item.pekerjaan_aktif && props.item.pekerjaan_aktif.tipe == 2">
							<check-value :value="props.item.pekerjaan_aktif.lembaga_lain.name" v-if="props.item.pekerjaan_aktif.lembaga_lain"></check-value>
							<span v-else>-</span>
						</span>
						<span v-else-if="props.item.pekerjaan_aktif && props.item.pekerjaan_aktif.tipe == 3">
							PUSKOPCUINA
						</span>
						<span v-else>-</span>
					</td>
					<td  v-html="$options.filters.checkTingkatAktivis(props.item.pekerjaan_aktif.tingkat)">
					</td>
					<td>
						<check-value :value="props.item.pekerjaan_aktif.name" v-if="props.item.pekerjaan_aktif"></check-value>
						<span v-else>-</span>
					</td>
					<td>
						<check-value :value="props.item.pendidikan_tertinggi.tingkat" v-if="props.item.pendidikan_tertinggi"></check-value>
						<span v-else>-</span>
					</td>
					<td>
						<check-value :value="props.item.pendidikan_tertinggi.name" v-if="props.item.pendidikan_tertinggi"></check-value>
						<span v-else>-</span>
					</td>
					<td v-html="$options.filters.date(props.item.tanggal_lahir)">
					</td>
					<td>
						<check-value :value="props.item.tempat_lahir"></check-value>
					</td>
					<td>
						<check-value :value="props.item.tinggi"></check-value>
					</td>
					<td>
						<check-value :value="props.item.agama"></check-value>
					</td>
					<td>
						<check-value :value="props.item.status"></check-value>
					</td>
				</tr>
			</template>

		</data-viewer>

		<div class="row">

			<!-- name nametag -->
			<div class="col-md-6" v-if="item.tipe_tempat == 'OFFLINE'">
				<div class="form-group" :class="{'has-error' : errors.has('formPeserta.name_nametag')}">

					<!-- title -->
					<h5 :class="{ 'text-danger' : errors.has('formPeserta.name_nametag')}">
						<i class="icon-cross2" v-if="errors.has('formPeserta.name_nametag')"></i>
						Nama di nametag:
					</h5>

					<!-- text -->
					<input type="text" name="name_nametag" class="form-control" placeholder="Silahkan masukkan nama di nametag" v-validate="'required'" data-vv-as="Nama di nametag" v-model="formPeserta.name_nametag">

					<!-- error message -->
					<small class="text-muted text-danger" v-if="errors.has('formPeserta.name_nametag')">
						<i class="icon-arrow-small-right"></i> {{ errors.first('formPeserta.name_nametag') }}
					</small>
					<small class="text-muted" v-else>&nbsp;
					</small>
				</div>
			</div>

			<!-- name sertifikat -->
			<div :class="{'col-md-6' : item.tipe_tempat == 'OFFLINE', 'col-md-12' : item.tipe_tempat == 'ONLINE'}">
				<div class="form-group" :class="{'has-error' : errors.has('formPeserta.name_nametag')}">

					<!-- title -->
					<h5 :class="{ 'text-danger' : errors.has('formPeserta.name_sertifikat')}">
						<i class="icon-cross2" v-if="errors.has('formPeserta.name_sertifikat')"></i>
						Nama di sertifikat:
					</h5>

					<!-- text -->
					<input type="text" name="name_sertifikat" class="form-control" placeholder="Silahkan masukkan nama di sertifikat" v-validate="'required'" data-vv-as="Nama di sertifikat" v-model="formPeserta.name_sertifikat">

					<!-- error message -->
					<small class="text-muted text-danger" v-if="errors.has('formPeserta.name_sertifikat')">
						<i class="icon-arrow-small-right"></i> {{ errors.first('formPeserta.name_sertifikat') }}
					</small>
					<small class="text-muted" v-else>&nbsp;
					</small>
				</div>
			</div>

			<!-- tgl kedatangan -->
			<div class="col-md-6" v-if="item.tipe_tempat == 'OFFLINE'">
				<div class="form-group">

					<!-- title -->
					<h5>Tgl. Kedatangan:</h5>

					<!-- input -->
					<date-picker @dateSelected="formPeserta.datang = $event" :defaultDate="formPeserta.datang"></date-picker>	

				</div>
			</div>

			<!-- tgl pulang -->
			<div class="col-md-6" v-if="item.tipe_tempat == 'OFFLINE'">
				<div class="form-group">

					<!-- title -->
					<h5>Tgl. Pulang:</h5>

					<!-- input -->
					<date-picker @dateSelected="formPeserta.pulang = $event" :defaultDate="formPeserta.pulang"></date-picker>	

				</div>
			</div>

		</div>

		<!-- keterangan -->
		<div class="form-group">

			<!-- title -->
			<h5>Keterangan:</h5>

			<!-- textarea -->
			<textarea rows="5" type="text" name="keterangan" class="form-control" placeholder="Silahkan masukkan keterangan"
			v-model="formPeserta.keterangan"></textarea>
		</div>

		<!-- message -->
		<message v-if="message.show" @close="messageClose" :title="'Oops terjadi kesalahan'" :errorData="message.content" :showDebug="false">
		</message>

		<!-- divider -->
		<hr>
		
		<!-- tombol desktop-->
		<div class="text-center d-none d-md-block">
			<button type="button" class="btn btn-light" @click.prevent="tutup">
				<i class="icon-cross"></i> Tutup</button>

			<button type="submit" class="btn btn-primary" :disabled="formPeserta.aktivis_id == ''">
				<i class="icon-floppy-disk"></i> Simpan</button>
		</div>  

		<!-- tombol mobile-->
		<div class="d-block d-md-none">
			<button type="submit" class="btn btn-primary btn-block pb-2" :disabled="formPeserta.aktivis_id == ''">
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
				title: '',
				kelas: 'aktivis',
				tingkatArray: [],
				tingkatName: [],
				formPeserta:{
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
				},
				message: {
					show: false,
					content: ''
				},
				
				submited: false,
			}
		},
		created(){
			if(this.mode == 'edit'){
				this.formPeserta = this.selected;
				this.formPeserta.tingkat = this.selected.aktivis.pekerjaan_aktif.tingkat;
				this.formPeserta.jabatan = this.selected.aktivis.pekerjaan_aktif.name;
				this.formPeserta.cu_id = this.selected.aktivis.pekerjaan_aktif.id_tempat;
				if(this.selected.aktivis.pendidikan_tertinggi){
					this.formPeserta.pendidikan = this.selected.aktivis.pendidikan_tertinggi.tingkat + ' ' + this.selected.aktivis.pendidikan_tertinggi.name;
				}
				this.formPeserta.status = this.selected.status;
				this.formPeserta.kelamin = this.selected.aktivis.kelamin;
				this.formPeserta.agama = this.selected.aktivis.agama;
				this.formPeserta.tinggi = this.selected.aktivis.tinggi;
				this.formPeserta.tanggal_lahir = this.selected.aktivis.tanggal_lahir;
				this.formPeserta.tempat_lahir = this.selected.aktivis.tempat_lahir;
				this.formPeserta.name = this.selected.aktivis.name;
				this.formPeserta.gambar = this.selected.aktivis.gambar;
				this.formPeserta.jabatan = this.selected.pekerjaan_aktif.name;

				if(this.selected.aktivis.pekerjaan_aktif.tipe == 1){
					this.formPeserta.lembaga = this.selected.aktivis.pekerjaan_aktif.cu.name
				}else if(this.selected.aktivis.pekerjaan_aktif.tipe == 2){
					this.formPeserta.lembaga = this.selected.aktivis.pekerjaan_aktif.lembaga_lain.name
				}else if(this.selected.aktivis.pekerjaan_aktif.tipe == 3){
					this.formPeserta.lembaga = "PUSKOPCUINA"
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
				this.formPeserta.aktivis_id = '';
				this.formPeserta.name_nametag = '';
				this.formPeserta.name_sertifikat = '';
				this.formPeserta.datang = '';
				this.formPeserta.pulang = '';
				this.formPeserta.keterangan = '';
				this.selectedItem = [];
			},
			selectedRow(item){
				this.selectedItem = item;
				this.formPeserta.tingkat = item.pekerjaan_aktif.tingkat;
				this.formPeserta.name_sertifikat = item.name;

				if(this.tingkatArray.includes(this.formPeserta.tingkat)){
					this.formPeserta.aktivis_id = item.id;
					this.formPeserta.kegiatan_id = this.item.id;
					this.formPeserta.jabatan = item.pekerjaan_aktif.name;
					this.formPeserta.cu_id = item.pekerjaan_aktif.id_tempat;
					if(item.pendidikan_tertinggi){
						this.formPeserta.pendidikan = item.pendidikan_tertinggi.tingkat + ' ' + item.pendidikan_tertinggi.name;
					}
					this.formPeserta.status = item.status;
					this.formPeserta.kelamin = item.kelamin;
					this.formPeserta.agama = item.agama;
					this.formPeserta.tinggi = item.tinggi;
					this.formPeserta.tanggal_lahir = item.tanggal_lahir;
					this.formPeserta.tempat_lahir = item.tempat_lahir;
					this.formPeserta.name = item.name;
					this.formPeserta.gambar = item.gambar;
					this.formPeserta.jabatan = item.pekerjaan_aktif.name;

					if(item.pekerjaan_aktif.tipe == 1){
						this.formPeserta.lembaga = item.pekerjaan_aktif.cu.name
					}else if(item.pekerjaan_aktif.tipe == 2){
						this.formPeserta.lembaga = item.pekerjaan_aktif.lembaga_lain.name
					}else if(item.pekerjaan_aktif.tipe == 3){
						this.formPeserta.lembaga = "PUSKOPCUINA"
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
					this.$store.dispatch('kegiatanBKCU/checkPeserta', [this.item.id, this.formPeserta.aktivis_id]);
				}else{
					this.save();
				}
			},
			save(){
				this.$validator.validateAll('formPeserta').then((result) => {
					if (result) {
						if(this.mode == 'edit'){
							this.$store.dispatch('kegiatanBKCU/updatePeserta', [this.formPeserta.id, this.formPeserta]);
						}else{
							this.formPeserta.status = this.item.status;
							this.$store.dispatch('kegiatanBKCU/storePeserta', [this.item.tipe, this.item.id, this.formPeserta]);
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