<template>
	<div>
		<!-- Page header -->
		<page-header :title="title" :titleDesc="titleDesc" :titleIcon="titleIcon"></page-header>

		<!-- page container -->
		<div class="page-content pt-0">
			<div class="content-wrapper">
				<div class="content">

					<!-- message -->
					<message v-if="itemDataStat === 'fail'" :title="'Oops terjadi kesalahan:'" :errorData="itemData">
					</message>

					<message v-if="itemPearlsStat === 'fail'" :title="'Oops terjadi kesalahan:'" :errorData="itemPearls">
					</message>

					<!-- select data -->
					<select-data :kelas="kelas" :isPus="false" :isNo_ba="true"></select-data>

					<div class="nav-tabs-responsive mb-3">
						<ul class="nav nav-tabs nav-tabs-solid bg-light">
							<li class="nav-item">
								<a href="#" class="nav-link" :class="{'active' : tabName == 'table'}" @click.prevent="changeTab('table')"><i class="icon-table2 mr-2"></i> Tabel Statistik</a>
							</li>
							<li class="nav-item">
								<a href="#" class="nav-link" :class="{'active' : tabName == 'tablePearls'}" @click.prevent="changeTab('tablePearls')"><i class="icon-table2 mr-2"></i> Tabel P.E.A.R.L.S</a>
							</li>
							<li class="nav-item">
								<a href="#" class="nav-link" :class="{'active' : tabName == 'infografis'}" @click.prevent="changeTab('infografis')"><i class="icon-graph mr-2"></i> Infografis Statistik</a>
							</li>
							<li class="nav-item">
								<a href="#" class="nav-link" :class="{'active' : tabName == 'infografisPearls'}" @click.prevent="changeTab('infografisPearls')"><i class="icon-graph mr-2"></i> Infografis P.E.A.R.L.S</a>
							</li>
						</ul>
					</div>

					<!-- table data -->
					<transition enter-active-class="animated fadeIn" mode="out-in">
						<div v-show="tabName == 'table'">
							<table-data :title="title" :kelas="kelas" :columnData="columnData"></table-data>
						</div>
					</transition>


					<transition enter-active-class="animated fadeIn" mode="out-in">
						<div v-show="tabName == 'tablePearls'" v-if="isTablePearls">
							<table-pearls :title="titlePearls" :kelas="kelas" :columnData="columnDataPearls"></table-pearls>
						</div>
					</transition>

					<transition enter-active-class="animated fadeIn" mode="out-in">
						<div v-show="tabName == 'infografis'" v-if="isInfografis">
							<infografis-data
								:title="title"
								:kelas="kelas"
								:columnData="columnData"></infografis-data>
						</div>
					</transition>


					<transition enter-active-class="animated fadeIn" mode="out-in">
						<div v-show="tabName == 'infografisPearls'" v-if="isInfografisPearls">
							<infografis-pearls-data
								:title="titlePearls"
								:kelas="kelas"
								:columnData="columnDataPearls"></infografis-pearls-data>
						</div>
					</transition>


				</div>
			</div>
		</div>

	</div>
</template>

<script>
	import {
		mapGetters
	} from 'vuex';
	import pageHeader from "../../components/pageHeader.vue";
	import message from "../../components/message.vue";
	import selectData from "./select.vue";
	import tableData from "./table.vue";
	import tablePearls from "./tablePearls.vue";
	import infografisData from "./infografis.vue";
	import infografisPearlsData from "./infografisPearls.vue";

	export default {
		components: {
			pageHeader,
			message,
			selectData,
			tableData,
			tablePearls,
			infografisData,
			infografisPearlsData
		},
		data() {
			return {
				title: 'Laporan Statistik',
				titlePearls: 'P.E.A.R.L.S',
				kelas: 'laporanCu',
				titleDesc: 'Mengelola data statistik CU',
				titleIcon: 'icon-stats-bars2',
				selectCUPath: 'laporanCuCU',
				tabName: 'table',
				katax: '\\frac{1.7888}{1,6777}',
				isTablePearls: false,
				isInfografis: false,
				isInfografisPearls: false
			}
		},
		created(){
			this.checkTitle();
			this.checkUser('index_laporan_cu',this.$route.params.cu);
		},
		watch: {
			'$route' (to, from){
				// check current page meta
				this.checkTitle(); 
			}
		},
		methods: {
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
			checkTitle(){
				if (this.$route.meta.mode == "periode") {
					this.title = "Laporan Statistik CU";
					this.titleDesc = 'Mengelola data statistik CU';
				} else if (this.$route.meta.mode == "cu") {
					if (this.$route.params.tp == "konsolidasi") {
						this.title = "Laporan Statistik CU";
						this.titleDesc = 'Mengelola data statistik CU';
					} else {
						this.title = "Laporan Statistik TP/KP";
						this.titleDesc = 'Mengelola data statistik TP/KP';
					}
				} else if (this.$route.meta.mode == "cuPeriode") {
					this.title = "Laporan Statistik TP/KP";
					this.titleDesc = 'Mengelola data statistik TP/KP';
				} else {
					this.title = "Laporan Statistik CU";
					this.titleDesc = 'Mengelola data statistik CU';
				}
			},
			changeTab(value) {
				this.tabName = value;
				if (value == 'tablePearls' && !this.isTablePearls) {
					this.isTablePearls = true
				}
				if (value == 'infografis' && !this.isInfografis) {
					this.isInfografis = true
				}
				if (value == 'infografisPearls' && !this.isInfografisPearls) {
					this.isInfografisPearls = true
				}
			}
		},
		computed: {
			...mapGetters('laporanCu', {
				itemData: 'dataS',
				itemDataStat: 'dataStatS',
				itemPearls: 'pearls',
				itemPearlsStat: 'pearlsStat',
				columnData: 'columnData',
				columnDataPearls: 'columnDataPearls',
			}),
		}
	}
</script>

<style>
	@import "../../../../../node_modules/katex/dist/katex.min.css"
</style>