<template>
	<div>
		<!-- Page header -->
		<page-header 
		:title="title" 
		:titleDesc="titleDesc" 
		:titleIcon="titleIcon"></page-header>

		
		<!-- page container -->
		<div class="page-container">
			<div class="page-content">
				<div class="content-wrapper">
					<div class="content">

						<!-- message -->
						<message v-if="itemDataStat === 'fail'" :title="'Oops terjadi kesalahan:'" :errorData="itemData">
						</message>

						<!-- select data -->
						<select-data :isCu="false" @cari="cari"></select-data>

						<div v-if="$route.meta.mode == 'laporan'">

							<table-kelompok :title="'Bantuan Solidaritas Per Usia'" :itemData="itemData" :itemDataStat="itemDataStat" :url="url" :isCu="false" @bukaData="bukaData" @lihatSemua="bukaData"></table-kelompok>

             	<hr/>
								<button type="button" class="btn btn-light btn-block" @click.prevent="showDetail">
									<span v-if="!isShowDetail"><i class="icon-eye"></i> Buka semua data bantuan solidaritas Jalinan</span>
									<span v-else><i class="icon-eye-blocked"></i> Tutup data bantuan solidaritas Jalinan</span>
								</button>
							<hr/>

							<div v-if="isShowDetail">

								<table-data :title="'Bantuan Solidaritas Jalinan Menunggu'" :kelas="kelas" :itemData="itemDataKlaim1" :itemDataStat="itemDataStatKlaim1" :status="'1'" :isSimple="true" v-if="status == '1'"></table-data>

								<table-data :title="'Bantuan Solidaritas Jalinan Dokumen Tidak Lengkap'" :kelas="kelas" :itemData="itemDataKlaim2" :itemDataStat="itemDataStatKlaim2" :status="'2'" :isSimple="true" v-if="status == '2'"></table-data>

								<table-data :title="'Bantuan Solidaritas Jalinan Ditolak'" :kelas="kelas" :itemData="itemDataKlaim3" :itemDataStat="itemDataStatKlaim3" :status="'3'" :isSimple="true" v-if="status == '3'"></table-data>

								<table-data :title="'Bantuan Solidaritas Jalinan Disetujui'" :kelas="kelas" :itemData="itemDataKlaim4" :itemDataStat="itemDataStatKlaim4" :status="'4'" :isSimple="true" v-if="status == '4'"></table-data>

								<table-data :title="'Bantuan Solidaritas Jalinan Dicairkan'" :kelas="kelas" :itemData="itemDataKlaim5" :itemDataStat="itemDataStatKlaim5" :status="'5'" :isSimple="true" v-if="status == '5'"></table-data>

								<table-data :title="'Bantuan Solidaritas Jalinan Selesai'" :kelas="kelas" :itemData="itemDataKlaim6" :itemDataStat="itemDataStatKlaim6" :status="'6'" :isSimple="true" v-if="status == '6'"></table-data>

							</div>

						</div>


					</div>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import pageHeader from "../../components/pageHeader.vue";
	import message from "../../components/message.vue";
  import selectData from "./selectKelompok.vue";
  import tableData from "../jalinanKlaim/table.vue";
	import tableKelompok from "./tableKelompok";
	
	export default {
		components: {
			pageHeader,
			message,
      selectData,
      tableData,
			tableKelompok
		},
		data() {
			return {
				title: 'Laporan Bantuan Solidaritas Jalinan',
				titleDesc: 'Mengelola Bantuan Solidaritas Jalinan Berdasarkan Usia',
				titleIcon: 'icon-archive',
				kelas: 'jalinanKlaim',
        isShowDetail: false,
				url: 'indexLaporanUsia',
				status: '',
			}
		},
		created(){
			this.checkUser('laporan_jalinan_klaim');
			this.status = this.$route.params.status;
		},
		watch: {
			'$route' (to, from){
				// check current page meta
				this.status = this.$route.params.status;
			},
		},
		methods: {
			fetch(awal, akhir, cu, status, dari, ke){
				this.$router.push({name: 'jalinanLaporanKlaimUsiaTanggal', params:{awal: awal, akhir: akhir, status: status, cu: cu, jenis: 'usia', dari: dari, ke : ke} });
			},
			cari(awal, akhir, cu, status){
				this.fetch(awal, akhir, cu, status, 'semua','semua','semua');
				this.isShowDetail = false;
			},
			checkUser(permission){
				if(this.currentUser){
					if(!this.currentUser.can || !this.currentUser.can[permission]){
						this.$router.push('/notFound');
					}
				}
      },
      bukaData(value){
				let _dari = '';
				let _ke = '';

				if(value == '0 s.d. 1 tahun'){
					_dari = 1;
					_ke = 0;
				}else if(value == '> 1 s.d. 10 tahun'){
					_dari = 10;
					_ke = 1;
				}else if(value == '> 10 s.d. 20 tahun'){
					_dari = 20;
					_ke = 10;
				}else if(value == '> 20 s.d. 30 tahun'){
					_dari = 30;
					_ke = 20;
				}else if(value == '> 30 s.d. 40 tahun'){
					_dari = 40;
					_ke = 30;
				}else if(value == '> 40 s.d. 50 tahun'){
					_dari = 50;
					_ke = 40;
				}else if(value == '> 50 s.d. 60 tahun'){
					_dari = 60;
					_ke = 50;
				}else if(value == '> 60 s.d. 70 tahun'){
					_dari = 70;
					_ke = 60;
				}else if(value == '> 70 tahun'){
					_dari = 300;
					_ke = 70;
				}else{
					_dari = 'semua';
					_ke = 'semua';
				}

				this.fetch(this.$route.params.awal, this.$route.params.akhir, this.$route.params.cu, this.$route.params.status, _dari, _ke);
				this.isShowDetail = true;
			},
			showDetail(){
				this.isShowDetail = !this.isShowDetail;
      },
		},
		computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
			...mapGetters('jalinanKlaim',{
        itemData: 'dataS',
				itemDataStat: 'dataStatS',
				itemDataKlaim1: 'dataS1',
				itemDataStatKlaim1: 'dataStatS1',
				itemDataKlaim2: 'dataS2',
				itemDataStatKlaim2: 'dataStatS2',
				itemDataKlaim3: 'dataS3',
				itemDataStatKlaim3: 'dataStatS3',
				itemDataKlaim4: 'dataS4',
				itemDataStatKlaim4: 'dataStatS4',
				itemDataKlaim5: 'dataS5',
				itemDataStatKlaim5: 'dataStatS5',
				itemDataKlaim6: 'dataS6',
				itemDataStatKlaim6: 'dataStatS6',
				itemDataKlaim7: 'dataS7',
				itemDataStatKlaim7: 'dataStatS7',
			}),
		}
	}
</script>