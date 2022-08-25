<template>
	<div>
		<!-- peserta -->
		<data-viewer :title="'Aktivis'" :columnData="columnData" :itemData="itemData" :query="query" :itemDataStat="itemDataStat" @fetch="fetch" :isDasar="'true'" :isNoButtonRow="'true'" v-if="formulirPendaftaranDaftarPeserta.aktivis_id == '' && mode == 'create'">

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


		<!-- main panel -->
		<data-viewer :title="title" :columnData="columnData" :itemData="itemData" :query="query" :itemDataStat="itemDataStat"   @fetch="fetch">
			<!-- button desktop -->
			

			<!-- button mobile -->
			<!-- button desktop -->
			


			<!-- item desktop -->
			<template slot="item-desktop" slot-scope="props">
				<tr :class="{ 'bg-info': selectedItem.id === props.item.id }" class="text-nowrap" >
					<td v-if="!columnData[0].hide">
						{{ props.index + 1 + (+itemData.current_page-1) * +itemData.per_page + '.'}}
					</td>
					<td v-if="!columnData[1].hide">
						<check-value :value="props.item.name"></check-value>
					</td>
					<td v-if="!columnData[2].hide">
						<check-value :value="props.item.umur"></check-value>
					</td>
					<td v-if="!columnData[3].hide">
						<check-value :value="props.item.nomor"></check-value>
					</td>
					<td v-if="!columnData[4].hide">
						<check-value :value="props.item.pendidikan"></check-value>
					</td>
					<td v-if="!columnData[5].hide">
						<check-value :value="props.item.tempat_lahir"></check-value>
					</td>
					<td v-if="!columnData[6].hide">
						<check-value :value="props.item.agama"></check-value>
					</td>
					<td v-if="!columnData[7].hide">
						<check-value :value="props.item.tinggi"></check-value>
					</td>
					<td v-if="!columnData[8].hide">
						<check-value :value="props.item.status_pernikahan"></check-value>
					</td>
					<td v-if="!columnData[9].hide">
						<check-value :value="props.item.tanggal_lahir"></check-value>
					</td>
					<td v-if="!columnData[10].hide">
						<check-value :value="props.item.kelamin"></check-value>
					</td>
					<td v-if="!columnData[11].hide">
						<check-value :value="props.item.name_nametag"></check-value>
					</td>
					<td v-if="!columnData[12].hide">
						<check-value :value="props.item.name_sertifikat"></check-value>
					</td>
					<td v-if="!columnData[13].hide">
						<check-value :value="props.item.datang"></check-value>
					</td>
					<td v-if="!columnData[14].hide">
						<check-value :value="props.item.pulang"></check-value>
					</td>
					<td v-if="!columnData[15].hide">
						<check-value :value="props.item.keterangan"></check-value>
					</td>

					
				</tr>
			</template>

			<!-- item mobile -->
			<template slot="item-mobile" slot-scope="props">
				<div class="col-lg-4 col-md-6">
					<div class="card cursor-pointer">						
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
										<li>Jenis Kelamin: <span class="text-muted">{{ props.item.genre }}</span></li>
										</ul>
								</div>
								<div class="col-sm-6">
									<ul class="list list-unstyled mb-1">
										<li>Umur: <span class="text-muted">{{ props.item.umur }}</span></li>
										</ul>
								</div>
								<div class="col-sm-6">
									<ul class="list list-unstyled mb-1">
										<li>Tanggal Lahir: <span class="text-muted">{{ props.item.tanggal_lahir }}</span></li>
										</ul>
								</div>
								<div class="col-sm-6">
									<ul class="list list-unstyled mb-1">
										<li>Tempat Lahir: <span class="text-muted">{{ props.item.tempat_lahir }}</span></li>
										</ul>
								</div>
								<div class="col-sm-6">
									<ul class="list list-unstyled mb-1">
										<li>Tinggi Badan: <span class="text-muted">{{ props.item.agama }}</span></li>
										</ul>
								</div>
								<div class="col-sm-6">
									<ul class="list list-unstyled mb-1">
										<li>Agama : <span class="text-muted">{{ props.item.tinggi }}</span></li>
										</ul>
								</div>
								<div class="col-sm-6">
									<ul class="list list-unstyled mb-1">
										<li>Pendidikan Terakhir: <span class="text-muted">{{ props.item.pendidikan }}</span></li>
										</ul>
								</div>
								<div class="col-sm-6">
									<ul class="list list-unstyled mb-1">
										<li>Status Pernikahan: <span class="text-muted">{{ props.item.status_pernikahan }}</span></li>
										</ul>
								</div>
								<div class="col-sm-6">
									<ul class="list list-unstyled mb-1">
										<li>Alamat: <span class="text-muted">{{ props.item.alamat }}</span></li>
										</ul>
								</div>
								<div class="col-sm-6">
									<ul class="list list-unstyled mb-1">
										<li>No. HP: <span class="text-muted">{{ props.item.nomor_hp }}</span></li>
										</ul>
								</div>
								<div class="col-sm-6">
									<ul class="list list-unstyled mb-1">
										<li>Email: <span class="text-muted">{{ props.item.email }}</span></li>
										</ul>
								</div>
							</div>
						</div>					
					</div>
				</div>
			</template>

		</data-viewer>
		
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
	import appModal from '../../components/modal';
	import Message from "../../components/message.vue";
	import formButton from "../../components/formButton.vue";
	import formInfo from "../../components/formInfo.vue";
	import Cleave from 'vue-cleave-component';
	import dataTable from '../../components/datatable.vue';
	import DatePicker from "../../components/datePicker.vue";
	import DataViewer from '../../components/dataviewer2.vue';
	import checkValue from '../../components/checkValue.vue';
	
	
	
	//import daftarCU from '../../components/daftarCU.vue';

	export default {
		props:  ['mode','selected','item','tingkat'],
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
		},
		data() {
			return {
				
				title: '',
				kelas: 'aktivis',
				tingkatArray: [],
				tingkatName: [],
				formulirPendaftaranDaftarPeserta:{
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
				this.formulirPendaftaranDaftarPeserta = this.selected;
				this.formulirPendaftaranDaftarPeserta.tingkat = this.selected.aktivis.pekerjaan_aktif.tingkat;
				this.formulirPendaftaranDaftarPeserta.jabatan = this.selected.aktivis.pekerjaan_aktif.name;
				this.formulirPendaftaranDaftarPeserta.cu_id = this.selected.aktivis.pekerjaan_aktif.id_tempat;
				if(this.selected.aktivis.pendidikan_tertinggi){
					this.formulirPendaftaranDaftarPeserta.pendidikan = this.selected.aktivis.pendidikan_tertinggi.tingkat + ' ' + this.selected.aktivis.pendidikan_tertinggi.name;
				}
				this.formulirPendaftaranDaftarPeserta.status = this.selected.status;
				this.formulirPendaftaranDaftarPeserta.kelamin = this.selected.aktivis.kelamin;
				this.formulirPendaftaranDaftarPeserta.agama = this.selected.aktivis.agama;
				this.formulirPendaftaranDaftarPeserta.tinggi = this.selected.aktivis.tinggi;
				this.formulirPendaftaranDaftarPeserta.tanggal_lahir = this.selected.aktivis.tanggal_lahir;
				this.formulirPendaftaranDaftarPeserta.tempat_lahir = this.selected.aktivis.tempat_lahir;
				this.formulirPendaftaranDaftarPeserta.name = this.selected.aktivis.name;
				this.formulirPendaftaranDaftarPeserta.gambar = this.selected.aktivis.gambar;
				this.formulirPendaftaranDaftarPeserta.jabatan = this.selected.pekerjaan_aktif.name;

				if(this.selected.aktivis.pekerjaan_aktif.tipe == 1){
					this.formulirPendaftaranDaftarPeserta.lembaga = this.selected.aktivis.pekerjaan_aktif.cu.name
				}else if(this.selected.aktivis.pekerjaan_aktif.tipe == 2){
					this.formulirPendaftaranDaftarPeserta.lembaga = this.selected.aktivis.pekerjaan_aktif.lembaga_lain.name
				}else if(this.selected.aktivis.pekerjaan_aktif.tipe == 3){
					this.formulirPendaftaranDaftarPeserta.lembaga = "PUSKOPCUINA"
				}
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



		//beforeRouteEnter(to, from, next) {
		//	next(vm => vm.fetch());
		//},
		watch: {
			// modelTempatStat(value){
			// 	if(value === "success"){
			// 		this.changeTempat(this.form.id_tempat);
			// 	}
			// },
			itemStat(value) {
				if (value === "success") {
					this.hideColumn();
					this.checkTipe(this.item.tipe);
					
					if(this.currentUser.aktivis){
						if(this.item.status == 4){
							this.checkPanitia();
						}
					}else{
						this.modalOpen('pesertaTidakTerdaftar');
					}

					this.fetchPesertaTerdaftar(this.queryPesertaTerdaftar);
					this.fetchCountPeserta();
					this.fetchCountKeputusan();
					this.fetchCountPertanyaan();
					this.fetchlistMateri2();

					var valDalam;
					for(valDalam of this.item.panitia_dalam){
						this.itemDataPanitia.push(valDalam);
					}

					var valLuar;
					for(valLuar of this.item.panitia_luar){
						this.itemDataPanitia.push(valLuar);
					}

					var valLuarLembaga;
					for(valLuarLembaga of this.item.panitia_luar_lembaga){
						this.itemDataPanitia.push(valLuarLembaga);
					}
				}
			},
			
    },
		methods: {
			//fetch(){
			//	if(this.$route.meta.mode == 'edit'){
			//		this.$store.dispatch(this.kelas + '/edit',this.$route.params.id);	
			//	} else {
			  //  	this.checkTipe(this.$route.params.tipe);
				//	this.$store.dispatch(this.kelas + '/create', this.$route.params.id);
				//	this.dataview='list';
				//}
				
				// this.$store.dispatch('provinces/get');
			//},
			fetch(params){
				if(this.currentUser.id_cu == 0){
					this.$store.dispatch('aktivis/index', [params,'semua','aktif']);
					this.disableColumnCu(false);
				}else{
					this.$store.dispatch('aktivis/indexCu', [params,this.currentUser.id_cu,'semua','aktif'])
					this.disableColumnCu(true);
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
				
				this.$validator.validateAll('formulirPendaftaranDaftarPeserta').then((result) => {
					if (result) {
						if(this.$route.meta.mode == 'edit'){
							this.$store.dispatch('kegiatanBKCU/updatePeserta', [this.$route.params.id, this.formulirPendaftaranDaftarPeserta]);
						}else{
							this.$store.dispatch('kegiatanBKCU/storePeserta',  [this.$route.params.id, this.formulirPendaftaranDaftarPeserta]);
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
					this.$router.push({name: this.kelas + 'Detail', params: { id: this.formulirPendaftaranDaftarPesertaDaftarPeserta.id }});
				}else{
					if(this.$route.meta.mode == 'edit'){
					this.$router.push({name: this.kelas, params:{id: this.formulirPendaftaranDaftarPeserta.id , periode: this.momentYear()}});
				}
			}
			},
			selectedRow(item){
				this.selectedItem = item;
				this.formulirPendaftaranDaftarPeserta.tingkat = item.pekerjaan_aktif.tingkat;
				this.formulirPendaftaranDaftarPeserta.name_sertifikat = item.name;

				if(this.tingkatArray.includes(this.formulirPendaftaranDaftarPeserta.tingkat)){
					this.formulirPendaftaranDaftarPeserta.aktivis_id = item.id;
					this.formulirPendaftaranDaftarPeserta.kegiatan_id = this.item.id;
					this.formulirPendaftaranDaftarPeserta.jabatan = item.pekerjaan_aktif.name;
					this.formulirPendaftaranDaftarPeserta.cu_id = item.pekerjaan_aktif.id_tempat;
					if(item.pendidikan_tertinggi){
						this.formulirPendaftaranDaftarPeserta.pendidikan = item.pendidikan_tertinggi.tingkat + ' ' + item.pendidikan_tertinggi.name;
					}
					this.formulirPendaftaranDaftarPeserta.status = item.status;
					this.formulirPendaftaranDaftarPeserta.kelamin = item.kelamin;
					this.formulirPendaftaranDaftarPeserta.agama = item.agama;
					this.formulirPendaftaranDaftarPeserta.tinggi = item.tinggi;
					this.formulirPendaftaranDaftarPeserta.tanggal_lahir = item.tanggal_lahir;
					this.formulirPendaftaranDaftarPeserta.tempat_lahir = item.tempat_lahir;
					this.formulirPendaftaranDaftarPeserta.name = item.name;
					this.formulirPendaftaranDaftarPeserta.gambar = item.gambar;
					this.formulirPendaftaranDaftarPeserta.jabatan = item.pekerjaan_aktif.name;

					if(item.pekerjaan_aktif.tipe == 1){
						this.formulirPendaftaranDaftarPeserta.lembaga = item.pekerjaan_aktif.cu.name
					}else if(item.pekerjaan_aktif.tipe == 2){
						this.formulirPendaftaranDaftarPeserta.lembaga = item.pekerjaan_aktif.lembaga_lain.name
					}else if(item.pekerjaan_aktif.tipe == 3){
						this.formulirPendaftaranDaftarPeserta.lembaga = "PUSKOPCUINA"
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
					this.$store.dispatch('kegiatanBKCU/checkPeserta', [this.item.id, this.formulirPendaftaranDaftarPeserta.aktivis_id]);
				}else{
					this.save();
				}
			},
			selectedRow(item,index){
					this.selectedItemPilih = item;
					this.selectedItemPilih.index = index;
			},
			
			
			momentYear(){
				return moment().year();
			}
		
		},
		computed: {
            ...mapGetters('auth',{
                currentUser: 'currentUser'
            }),
			...mapGetters('kegiatanBKCU',{
				itemData: 'dataS',
				itemDataStat: 'dataStatS',
				updateMessage: 'update',
				updateStat: 'updateStat'
			}),
            ...mapGetters('aktivis',{
                itemData: 'dataS',
                itemDataStat: 'dataStatS'
            })
		}
	}
</script>