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

					<!-- main panel -->
					<data-viewer :title="title" :columnData="columnData" :itemData="itemData" :query="query" :itemDataStat="itemDataStat" @fetch="fetch">

						<!-- button desktop -->
						<template slot="button-desktop">

							<!-- simpan-->
							<button @click.prevent="modalConfirmOpen('simpan')" class="btn btn-light mb-1" :disabled="!selectedItem.id">
								<i class="icon-floppy-disk"></i> Simpan ke data anggota CU
							</button>

							<!-- ubah-->
							<button @click.prevent="ubahData(selectedItem.id)" class="btn btn-light mb-1" :disabled="!selectedItem.id">
								<i class="icon-pencil5"></i> Ubah
							</button>

							<!-- hapus -->
							<button @click.prevent="modalConfirmOpen('hapus')" class="btn btn-light btn-icon mb-1" :disabled="!selectedItem.id">
								<i class="icon-bin2"></i> Hapus
							</button>

							<!-- hapus semua -->
							<button @click.prevent="modalConfirmOpen('hapus_semua')" class="btn btn-light btn-icon mb-1" :disabled="itemData.lenght == 0">
								<i class="icon-bin2"></i> Hapus Semua
							</button>

						</template>

						<!-- button mobile -->
						<template slot="button-mobile">

							<!-- simpan-->
							<button @click.prevent="modalConfirmOpen('simpan')" class="btn btn-light btn-block" :disabled="!selectedItem.id">
								<i class="icon-floppy-disk"></i> Simpan ke anggota CU
							</button>

							<!-- ubah-->
							<button @click.prevent="ubahData(selectedItem.id)" class="btn btn-light btn-block" :disabled="!selectedItem.id">
								<i class="icon-pencil5"></i> Ubah
							</button>

							<!-- hapus -->
							<button @click.prevent="modalConfirmOpen('hapus')" class="btn btn-light btn-icon btn-block mb-1" :disabled="!selectedItem.id">
								<i class="icon-bin2"></i> Hapus
							</button>

							<!-- hapus semua -->
							<button @click.prevent="modalConfirmOpen('hapus_semua')" class="btn btn-light btn-icon btn-block mb-1" :disabled="itemData.lenght == 0">
								<i class="icon-bin2"></i> Hapus Semua
							</button>

						</template>

						<!-- item  -->
						<template slot="item-desktop" slot-scope="props">
							<tr :class="{ 'bg-info': selectedItem.id === props.item.id }" class="text-nowrap" @click="selectedRow(props.item)">
								<td v-if="!columnData[0].hide">
									{{ props.index + 1 + (+itemData.current_page-1) * +itemData.per_page + '.'}}
								</td>
								<td v-if="!columnData[1].hide">
									<img :src="'/images/anggota_cu/' + props.item.gambar + 'n.jpg'" class="img-rounded img-fluid wmin-sm" v-if="props.item.gambar">
									<img :src="'/images/no_image_man.jpg'" class="img-rounded img-fluid wmin-sm" v-else>
								</td>
								<td v-if="!columnData[2].hide">
									<check-value :value="props.item.nik"></check-value>
								</td>
								<td v-if="!columnData[3].hide">
									<check-value :value="props.item.no_ba"></check-value>
								</td>
								<td v-if="!columnData[4].hide">
									<check-value :value="props.item.name"></check-value>
								</td>
								<td v-if="!columnData[5].hide && !columnData[5].disable">
									<check-value :value="props.item.cu.name" v-if="props.item.cu"></check-value>
									<span v-else>-</span>
								</td>
								<td v-if="!columnData[6].hide">
									<check-value :value="props.item.lembaga"></check-value>
								</td>
								<td v-if="!columnData[7].hide">
									<check-value :value="props.item.jabatan"></check-value>
								</td>
								<td v-if="!columnData[8].hide">
									<check-value :value="props.item.pendidikan"></check-value>
								</td>
								<td v-if="!columnData[9].hide">
									<check-value :value="props.item.email"></check-value>
								</td>
								<td v-if="!columnData[10].hide">
									<check-value :value="props.item.hp"></check-value>
								</td>
								<td v-if="!columnData[11].hide">
									<check-value :value="props.item.kontak"></check-value>
								</td>
								<td v-if="!columnData[12].hide">
									<check-value :value="props.item.kelamin"></check-value>
								</td>
								<td v-if="!columnData[13].hide">
									<check-value :value="props.item.darah"></check-value>
								</td>
								<td v-if="!columnData[14].hide">
									<check-value :value="props.item.tinggi"></check-value>
								</td>
								<td v-if="!columnData[15].hide">
									<check-value :value="props.item.agama"></check-value>
								</td>
								<td v-if="!columnData[16].hide">
									<check-value :value="props.item.status"></check-value>
								</td>
								<td v-if="!columnData[17].hide" v-html="$options.filters.date(props.item.tanggal_lahir)">
								</td>
								<td v-if="!columnData[18].hide">
									<check-value :value="props.item.tempat_lahir"></check-value>
								</td>
								<td v-if="!columnData[19].hide" v-html="$options.filters.date(props.item.tanggal_masuk)">
								</td>
								<td v-if="!columnData[20].hide && !columnData[20].disable">
									<check-value :value="props.item.provinces.name" v-if="props.item.provinces"></check-value>
									<span v-else>-</span>	
								</td>
								<td v-if="!columnData[21].hide && !columnData[21].disable">
									<check-value :value="props.item.regencies.name" v-if="props.item.regencies"></check-value>
									<span v-else>-</span>	
								</td>
								<td v-if="!columnData[22].hide && !columnData[22].disable">
									<check-value :value="props.item.districts.name" v-if="props.item.districts"></check-value>
									<span v-else>-</span>	
								</td>
								<td v-if="!columnData[23].hide && !columnData[23].disable">
									<check-value :value="props.item.villages.name" v-if="props.item.villages"></check-value>
									<span v-else>-</span>	
								</td>
								<td v-if="!columnData[24].hide">
									<check-value :value="props.item.alamat"></check-value>
								</td>
								<td v-if="!columnData[25].hide" v-html="$options.filters.dateTime(props.item.created_at)" class="text-nowrap"></td>
								<td v-if="!columnData[26].hide">
									<span v-if="props.item.created_at !== props.item.updated_at" v-html="$options.filters.dateTime(props.item.updated_at)"></span>
									<span v-else>-</span>
								</td>
							</tr>
						</template>

					</data-viewer>

				</div>
			</div>
		</div>

		<!-- modal -->
		<app-modal :show="modalShow" :state="modalState" :title="modalTitle" :button="modalButton" :content="modalContent" @tutup="modalTutup" @confirmOk="modalConfirmOk" @successOk="modalTutup" @failOk="modalTutup" @backgroundClick="modalTutup">
		</app-modal>

	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import appModal from "../../components/modal";
	import pageHeader from "../../components/pageHeader.vue";
	import message from "../../components/message.vue";
	import DataViewer from "../../components/dataviewer2.vue";
	import checkValue from "../../components/checkValue.vue";

	export default {
		components: {
			pageHeader,
			appModal,
			message,
			DataViewer,
			checkValue,
		},
		data() {
			return {
				title: 'Anggota CU [Draft]',
				kelas: 'anggotaCu',
				titleDesc: 'Mengelola data anggota CU dari file excel',
				titleIcon: 'icon-users4',
				selectedItem: [],
				query: {
          order_column: "name",
          order_direction: "asc",
          filter_match: "and",
          limit: 10,
          page: 1
        },
				columnData: [{
            title: 'No.',
            name: 'No.',
          },
          {
            title: 'Foto',
            name: 'gambar',
            hide: false,
          },
          {
            title: 'No. KTP',
            name: 'nik',
            tipe: 'string',
            sort: true,
            hide: false,
            disable: false,
            filter: true,
          },
          {
            title: 'No. BA',
            name: 'no_ba',
            tipe: 'string',
            sort: true,
            hide: false,
            disable: false,
            filter: true,
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
            title: 'CU',
            name: 'cu.name',
            tipe: 'string',
            sort: true,
            hide: false,
            disable: false,
            filter: true,
          },
          {
            title: 'Lembaga',
            name: 'lembaga',
            tipe: 'string',
            sort: false,
            hide: false,
            disable: false,
            filter: false,
          },
          {
            title: 'Jabatan',
            name: 'jabatan',
            tipe: 'string',
            sort: false,
            hide: false,
            disable: false,
            filter: false,
          },
          {
            title: 'Pendidikan',
            name: 'pendidikan',
            tipe: 'string',
            sort: false,
            hide: false,
            disable: false,
            filter: false,
          },
          {
            title: 'Email',
            name: 'email',
            tipe: 'string',
            sort: true,
            hide: false,
            disable: false,
            filter: true,
          },
          {
            title: 'Hp',
            name: 'hp',
            tipe: 'numeric',
            sort: true,
            hide: false,
            disable: false,
            filter: true,
          },
          {
            title: 'Kontak Lain',
            name: 'kontak',
            tipe: 'string',
            sort: false,
            hide: false,
            disable: false,
            filter: true,
          },
          {
            title: 'Gender',
            name: 'kelamin',
            tipe: 'string',
            sort: true,
            hide: false,
            disable: false,
            filter: true,
          },
          {
            title: 'Gol. Darah',
            name: 'darah',
            tipe: 'string',
            sort: true,
            hide: false,
            disable: false,
            filter: true,
          },
          {
            title: 'Tinggi',
            name: 'tinggi',
            tipe: 'numeric',
            sort: true,
            hide: false,
            disable: false,
            filter: true,
          },
          {
            title: 'Agama',
            name: 'agama',
            tipe: 'string',
            sort: true,
            hide: false,
            disable: false,
            filter: true,
          },
          {
            title: 'Status',
            name: 'status',
            tipe: 'string',
            sort: true,
            hide: false,
            disable: false,
            filter: true,
          },
          {
            title: 'Tgl. Lahir',
            name: 'tanggal_lahir',
            tipe: 'datetime',
            sort: true,
            hide: false,
            disable: false,
            filter: true,
          },
          {
            title: 'Tempat. Lahir',
            name: 'tempat_lahir',
            tipe: 'string',
            sort: true,
            hide: false,
            disable: false,
            filter: true,
          },
          {
            title: 'Tgl. Masuk',
            name: 'tanggal_masuk',
            tipe: 'datetime',
            sort: true,
            hide: false,
            disable: false,
            filter: true,
          },
          {
            title: 'Provinsi',
            name: 'provinces.name',
            tipe: 'string',
            sort: false,
            hide: false,
            disable: false,
            filter: true,
          },
          {
            title: 'Kabupaten',
            name: 'regencies.name',
            tipe: 'string',
            sort: false,
            hide: false,
            disable: false,
            filter: true,
          },
          {
            title: 'Kecamatan',
            name: 'districts.name',
            tipe: 'string',
            sort: false,
            hide: false,
            disable: false,
            filter: true,
          },
          {
            title: 'Kelurahan',
            name: 'villages.name',
            tipe: 'string',
            sort: false,
            hide: false,
            disable: false,
            filter: true,
          },
          {
            title: 'Alamat',
            name: 'alamat',
            tipe: 'string',
            sort: false,
            hide: false,
            disable: false,
            filter: true,
          },
          {
            title: 'Tgl. / Waktu Buat',
            name: 'created_at',
            tipe: 'datetime',
            sort: true,
            hide: false,
            disable: false,
            filter: true,
          },
          {
            title: 'Tgl. / Waktu Ubah',
            name: 'updated_at',
            tipe: 'datetime',
            sort: true,
            hide: false,
            disable: false,
            filter: true,
          }
        ],
				state: '',
				modalShow: false,
				modalState: '',
				modalTitle: '',
				modalContent: '',
				modalButton: ''
			}
		},
		created(){
			this.fetch(this.query);
		},
		watch: {
			// when updating data
      updateStat(value) {
				this.modalState = value;
				this.modalButton = 'Ok';
				
				if(value == "success"){
					this.modalTitle = this.updateMessage.message;
					this.modalContent = '';
					this.fetch();
				}else if(value == "fail"){
					this.modalContent = this.updateMessage;
				}else{
					this.modalContent = '';
				}
      }
		},
		methods: {
			fetch(){
				this.$store.dispatch(this.kelas + "/indexCuDraft",this.currentUser.id);
			},
			selectedRow(item) {
				this.selectedItem = item;
			},
			ubahData(id) {
				this.$router.push({ name: this.kelas + "EditDraft", params: { id: id } });
			},
			modalConfirmOpen(state, isMobile, itemMobile) {
				this.modalShow = true;
				this.modalState = "confirm-tutup";
				this.state = state;

				if (isMobile) {
					this.selectedItem = itemMobile;
				}

				if (state == "simpan") {
					this.modalTitle =
						"Simpan " + this.title + " ini?";
					this.modalButton = "Iya, Simpan";
				}else if (state == "hapus") {
					this.modalTitle =
						"Hapus " + this.title + " ini?";
					this.modalButton = "Iya, Hapus";
				}else if (state == "hapus_semua") {
					this.modalTitle =
						"Hapus semua laporan draft ini?";
					this.modalButton = "Iya, Hapus";
				}
			},
			modalTutup() {
				this.modalShow = false;
				this.$store.dispatch(this.kelas + "/resetUpdateStat");
				if(!this.itemData.length > 0){
					if(this.currentUser.id_cu != 0){
						this.$router.push({ name: 'laporanCuCu', params: { cu: this.currentUser.id_cu, tp:'konsolidasi' } });
					}else{
						this.$router.push({ name: 'laporanCu'});
					}
				}
			},
			modalConfirmOk() {
				if (this.state == "simpan") {
					this.$store.dispatch(this.kelas + "/storeDraft", this.selectedItem.id);
				}else if (this.state == "hapus") {
					this.$store.dispatch(this.kelas + "/destroyDraft", this.selectedItem.id);
				}else if (this.state == "hapus_semua") {
					this.$store.dispatch(this.kelas + "/destroyDraftAll");
				}else if (this.state == "simpan") {
					this.$store.dispatch(this.kelas + "/storeDraftAll");
				}
			}
		},
		computed: {
			...mapGetters("auth", {
				currentUser: "currentUser"
			}),
			...mapGetters('laporanCu', {
				itemData: 'dataS',
				itemDataStat: 'dataStatS',
				updateMessage: 'update',
				updateStat: 'updateStat'
			}),
		}
	}
</script>