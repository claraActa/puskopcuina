<template>
	<div>

		<!-- message -->
		<message v-if="errors.any('form') && submited" :title="'Oops, terjadi kesalahan'" :errorItem="errors.items">
		</message>

		<!-- main panel -->
		<form @submit.prevent="save" data-vv-scope="form">

			<!-- identitas -->
			<div class="card">
				<div class="card-header bg-white">
					<h5 class="card-title">Identitas Anggota</h5>
				</div>
				<div class="card-body">

					<div class="row">

						<!-- nik -->
						<div class="col-md-4">
							<div class="form-group" :class="{'has-error' : errors.has('form.nik')}">

								<!-- title -->
								<h6 :class="{ 'text-danger' : errors.has('form.nik')}">
									<i class="icon-cross2" v-if="errors.has('form.nik')"></i>
									No. KTP: <wajib-badge></wajib-badge></h6>

								<!-- text -->
								<cleave 
									name="nik"
									v-model="form.nik" 
									class="form-control" 
									:options="cleaveOption.number16"
									placeholder="Silahkan masukkan no KTP"
									v-validate="'required'" data-vv-as="No. KTP" readonly v-if="mode == 'create_new'"></cleave>

								<cleave 
									name="nik"
									v-model="form.nik" 
									class="form-control" 
									:options="cleaveOption.number16"
									placeholder="Silahkan masukkan no KTP"
									v-validate="'required'" data-vv-as="No. KTP" v-else></cleave>	
								
								<!-- error message -->
								<small class="text-muted text-danger" v-if="errors.has('form.nik')">
									<i class="icon-arrow-small-right"></i> {{ errors.first('form.nik') }}
								</small>
								<small class="text-muted" v-else>&nbsp;</small>
							</div>
						</div>

						<!-- npwp -->
						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h6>
									NPWP:</h6>

								<!-- text -->
								<cleave 
									name="npwp"
									v-model="form.npwp" 
									class="form-control" 
									:options="cleaveOption.number24"
									placeholder="Silahkan masukkan npwp"></cleave>

							</div>
						</div>

						<!-- name -->
						<div class="col-md-4">
							<div class="form-group" :class="{'has-error' : errors.has('form.name')}">

								<!-- title -->
								<h6 :class="{ 'text-danger' : errors.has('form.name')}">
									<i class="icon-cross2" v-if="errors.has('form.name')"></i>
									Nama: <wajib-badge></wajib-badge></h6>

								<!-- text -->
								<input type="text" name="name" class="form-control" placeholder="Silahkan masukkan nama" v-validate="'required'"
									data-vv-as="Nama" v-model="form.name">

								<!-- error message -->
								<small class="text-muted text-danger" v-if="errors.has('form.name')">
									<i class="icon-arrow-small-right"></i> {{ errors.first('form.name') }}
								</small>
								<small class="text-muted" v-else>&nbsp;</small>
							</div>
						</div>

						<!-- ahli waris -->
						<div class="col-md-4">
							<div class="form-group" :class="{'has-error' : errors.has('form.ahli_waris')}">

								<!-- title -->
								<h6 :class="{ 'text-danger' : errors.has('form.ahli_waris')}">
									<i class="icon-cross2" v-if="errors.has('form.ahli_waris')"></i>
									Nama Ahli Waris: <wajib-badge></wajib-badge></h6>

								<!-- text -->
								<input type="text" name="ahli_waris" class="form-control" placeholder="Silahkan masukkan nama ahli waris" v-validate="'required'"
									data-vv-as="Nama ahli waris" v-model="form.ahli_waris">

								<!-- error message -->
								<small class="text-muted text-danger" v-if="errors.has('form.ahli_waris')">
									<i class="icon-arrow-small-right"></i> {{ errors.first('form.ahli_waris') }}
								</small>
								<small class="text-muted" v-else>&nbsp;</small>
							</div>
						</div>

						<!-- nama ibu -->
						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h6>Nama Ibu: </h6>

								<!-- text -->
								<input type="text" name="nama_ibu" class="form-control" placeholder="Silahkan masukkan nama ibu" v-model="form.nama_ibu">

							</div>
						</div>

						<!-- gender -->
						<div class="col-md-4">
							<div class="form-group" :class="{'has-error' : errors.has('form.kelamin')}">

								<!-- title -->
								<h6 :class="{ 'text-danger' : errors.has('form.kelamin')}">
									<i class="icon-cross2" v-if="errors.has('form.kelamin')"></i>
									Gender: <wajib-badge></wajib-badge>
								</h6>

								<!-- select -->
								<select class="form-control" name="kelamin" v-model="form.kelamin" data-width="100%" v-validate="'required'"
									data-vv-as="Gender">
									<option disabled value="">Silahkan pilih gender</option>
									<option value="LAKI-LAKI">Laki-laki</option>
									<option value="PEREMPUAN">Perempuan</option>
								</select>

								<!-- error message -->
								<small class="text-muted text-danger" v-if="errors.has('form.kelamin')">
									<i class="icon-arrow-small-right"></i> {{ errors.first('form.kelamin') }}
								</small>
								<small class="text-muted" v-else>&nbsp;</small>
							</div>
						</div>

						<!-- tanggal lahir -->
						<div class="col-md-4">
							<div class="form-group" :class="{'has-error' : errors.has('form.tanggal_lahir')}">

								<!-- title -->
								<h6 :class="{ 'text-danger' : errors.has('form.tanggal_lahir')}">
									<i class="icon-cross2" v-if="errors.has('form.tanggal_lahir')"></i>
									Tgl. Lahir: <wajib-badge></wajib-badge></h6>

								<!-- input -->
								<date-picker @dateSelected="form.tanggal_lahir = $event" :defaultDate="form.tanggal_lahir"></date-picker>	
								<input v-model="form.tanggal_lahir" v-show="false" v-validate="'required'" data-vv-as="Tanggal lahir"/>

								<!-- error message -->
								<small class="text-muted text-danger" v-if="errors.has('form.tanggal_lahir')">
									<i class="icon-arrow-small-right"></i> {{ errors.first('form.tanggal_lahir') }}
								</small>
								<small class="text-muted" v-else>&nbsp;</small>	

							</div>
						</div>

						<!-- tempat lahir -->
						<div class="col-md-4">
							<div class="form-group" :class="{'has-error' : errors.has('form.tempat_lahir')}">

								<!-- title -->
								<h6 :class="{ 'text-danger' : errors.has('form.tempat_lahir')}">
									<i class="icon-cross2" v-if="errors.has('form.tempat_lahir')"></i>Tempat Lahir: <wajib-badge></wajib-badge></h6>

								<!-- text -->
								<input type="text" name="tempat_lahir" class="form-control" placeholder="Silahkan masukkan tempat lahir" v-model="form.tempat_lahir" v-validate="'required'" data-vv-as="Tempat Lahir">

								<!-- error message -->
								<small class="text-muted text-danger" v-if="errors.has('form.tempat_lahir')">
									<i class="icon-arrow-small-right"></i> {{ errors.first('form.tempat_lahir') }}
								</small>
								<small class="text-muted" v-else>&nbsp;</small>

							</div>
						</div>

						<!-- suku -->
						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h6>Suku: </h6>

								<!-- select -->
								<select class="form-control" name="suku" v-model="form.suku" data-width="100%" :disabled="modelSuku.length == 0">
									<option disabled value="">
										<span v-if="modelSukuStat === 'loading'">Mohon tunggu...</span>
										<span v-else>Silahkan pilih suku</span>
									</option>
									<option v-for="(suku, index) in modelSuku" :key="index" :value="suku.name">{{suku.name}}</option>
								</select>

							</div>
						</div>

						<!-- darah -->
						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h6>
									Gol. Darah:
								</h6>

								<!-- select -->
								<select class="form-control" name="darah" v-model="form.darah" data-width="100%">
									<option disabled value="">Silahkan pilih golongan darah</option>
									<option value="A">A</option>
									<option value="B">B</option>
									<option value="AB">AB</option>
									<option value="O">O</option>
								</select>

							</div>
						</div>

						<!-- tinggi -->
						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h6> Tinggi <small>(cm)</small>:</h6>

								<!-- text -->
								<cleave name="tinggi" v-model="form.tinggi" class="form-control" :options="cleaveOption.number3" placeholder="Silahkan masukkan tinggi"></cleave>
							</div>
						</div>

						<!-- agama -->
						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h6>Agama:</h6>

								<!-- select -->
								<select class="form-control" name="agama" v-model="form.agama" data-width="100%">
									<option disabled value="">Silahkan pilih agama</option>
									<option value="BUDDHA">Buddha</option>
									<option value="HINDU">Hindu</option>
									<option value="ISLAM">Islam</option>
									<option value="KHATOLIK">Khatolik</option>
									<option value="KONG HU CU">Kong Hu Cu</option>
									<option value="PROTESTAN">Protestan</option>
									<option value="LAIN-LAIN">Lain-lain</option>
								</select>

							</div>
						</div>

						<!-- status -->
						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h6>
									Status:
								</h6>

								<!-- select -->
								<select class="form-control" name="status" v-model="form.status" data-width="100%">
									<option disabled value="">Silahkan pilih status pernikahan</option>
									<option value="BELUM MENIKAH">Belum menikah</option>
									<option value="MENIKAH">Menikah</option>
									<option value="JANDA/DUDA">Janda/Duda</option>
								</select>

							</div>
						</div>
						
					</div>

				</div>
			</div>

			<!-- riwayat -->
			<div class="card">
				<div class="card-header bg-white">
					<h5 class="card-title">Riwayat</h5>
				</div>
				<div class="card-body">
					<div class="row">

						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h6>Lembaga:</h6>

								<!-- text -->
								<input type="text" name="lembaga" class="form-control" placeholder="Silahkan masukkan lembaga" v-model="form.lembaga">

							</div>
						</div>

						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h6>Jabatan:</h6>

								<!-- select -->
								<select class="form-control" name="jabatan" v-model="form.jabatan" data-width="100%">
									<option disabled value="">Silahkan pilih jabatan</option>
									<option value="SENIOR MANAJER">Senior Manajer (General Manager, CEO, Deputy)</option>
									<option value="MANAJER">Manajer</option>
									<option value="SUPERVISOR">Supervisor (Kepala Bagian, Kepala Divisi, Kepala/Koordinator TP, Kepala Bidang)</option>
									<option value="STAF">Staf</option>
									<option value="KONTRAK">Kontrak</option>
								</select>

							</div>
						</div>

						<!-- pekerjaan -->
						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h6>Pekerjaan: </h6>

								<!-- select -->
								<select class="form-control" name="pekerjaan" v-model="form.pekerjaan" data-width="100%" :disabled="modelPekerjaan.length == 0">
									<option disabled value="">
										<span v-if="modelPekerjaanStat === 'loading'">Mohon tunggu...</span>
										<span v-else>Silahkan pilih pekerjaan</span>
									</option>
									<option v-for="(pekerjaan, index) in modelPekerjaan" :value="pekerjaan.name" :key="index">{{pekerjaan.name}}</option>
								</select>

							</div>
						</div>

						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h6>Rata-rata Penghasilan Perbulan:</h6>

								<!-- select -->
								<cleave 
									v-model="form.penghasilan" 
									class="form-control" 
									:options="cleaveOption.numeric"
									placeholder="Silahkan masukkan rata-rata pengeluaran"></cleave>
							</div>
						</div>

						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h6>Rata-rata Pengeluaran Perbulan:</h6>

								<!-- select -->
								<cleave 
									v-model="form.pengeluaran" 
									class="form-control" 
									:options="cleaveOption.numeric"
									placeholder="Silahkan masukkan rata-rata pengeluaran"></cleave>

							</div>
						</div>

						<div class="col-sm-4">
							<div class="form-group">

								<!-- title -->
								<h6>Pendidikan:</h6>

								<!-- select -->
								<select class="form-control" name="pendidikan" v-model="form.pendidikan" data-width="100%">
									<option disabled value="">Silahkan pilih tingkat pendidikan</option>
									<option value="SD">SD</option>
									<option value="SMP">SMP</option>
									<option value="SMA/SMK">SMA/SMK</option>
									<option value="D1">D1</option>
									<option value="D2">D2</option>
									<option value="D3">D3</option>
									<option value="D4">D4</option>
									<option value="S1">S1</option>
									<option value="S2">S2</option>
									<option value="S3">S3</option>
									<option value="Lain-lain">Lain-lain</option>
								</select>

							</div>
						</div>
						
						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h6>Organisasi: <info-icon :message="'Silahkan isi dengan jabatan dan tempat/nama organisasi jika anda ikut dalam sebuah organisasi'"></info-icon></h6>

								<!-- text -->
								<input type="text" name="organisasi" class="form-control" placeholder="Silahkan masukkan organisasi" v-model="form.organisasi">

							</div>
						</div>

					</div>
				</div>
			</div>

			<!-- lokasi -->
			<div class="card">
				<div class="card-header bg-white">
					<h5 class="card-title">Alamat & Kontak</h5>
				</div>
				<div class="card-body">
					<div class="row">
							
						<!-- Provinsi -->
						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h6 :class="{ 'text-danger' : errors.has('form.id_provinces')}">
									<i class="icon-cross2" v-if="errors.has('form.id_provinces')"></i>
									Provinsi: <wajib-badge></wajib-badge>
								</h6>

								<!-- select -->
								<select class="form-control" name="id_provinces" v-model="form.id_provinces" data-width="100%" v-validate="'required'" data-vv-as="Provinsi" :disabled="modelProvinces.length == 0" @change="changeProvinces($event.target.value)">
									<option disabled value="">
										<span v-if="modelProvincesStat === 'loading'">Mohon tunggu...</span>
										<span v-else>Silahkan pilih provinsi</span>
									</option>
									<option v-for="(provinces, index) in modelProvinces" :value="provinces.id" :key="index">{{provinces.name}}</option>
								</select>

								<!-- error message -->
								<small class="text-muted text-danger" v-if="errors.has('form.id_provinces')">
									<i class="icon-arrow-small-right"></i> {{ errors.first('form.id_provinces') }}
								</small>
								<small class="text-muted" v-else>&nbsp;</small>
							</div>
						</div>

						<!-- kabupaten -->
						<div class="col-md-4">
							<div class="form-group" :class="{'has-error' : errors.has('form.id_regencies')}">

								<!-- title -->
								<h6 :class="{ 'text-danger' : errors.has('form.id_regencies')}">
									<i class="icon-cross2" v-if="errors.has('form.id_regencies')"></i>
									Kabupaten: <wajib-badge></wajib-badge>
								</h6>

								<!-- select -->
								<select class="form-control"  name="id_regencies" v-model="form.id_regencies" data-width="100%" v-validate="'required'" data-vv-as="Kabupaten" @change="changeRegencies($event.target.value)" :disabled="modelRegencies.length === 0">
									<option disabled value="">
										<span v-if="modelRegenciesStat === 'loading'">Mohon tunggu...</span>
										<span v-else>Silahkan pilih kabupaten</span>
									</option>
									<option v-for="(regencies, index) in modelRegencies" :value="regencies.id" :key="index">{{regencies.name}}</option>
								</select>

								<!-- error message -->
								<small class="text-muted text-danger" v-if="errors.has('form.id_regencies')">
									<i class="icon-arrow-small-right"></i> {{ errors.first('form.id_regencies') }}
								</small>
								<small class="text-muted" v-else>&nbsp;</small>
							</div>
						</div>

						<!-- kecamatan -->
						<div class="col-md-4">
							<div class="form-group" :class="{'has-error' : errors.has('form.id_districts')}">

								<!-- title -->
								<h6 :class="{ 'text-danger' : errors.has('form.id_districts')}">
									<i class="icon-cross2" v-if="errors.has('form.id_districts')"></i>
									Kecamatan: <wajib-badge></wajib-badge>
								</h6>

								<!-- select -->
								<select class="form-control"  name="id_districts" v-model="form.id_districts" data-width="100%" v-validate="'required'" data-vv-as="Kabupaten" :disabled="modelDistricts.length === 0" @change="changeDistricts($event.target.value)">
									<option disabled value="">
										<span v-if="modelDistrictsStat === 'loading'">Mohon tunggu...</span>
										<span v-else>Silahkan pilih kecamatan</span>
									</option>
									<option v-for="(districts, index) in modelDistricts" :value="districts.id" :key="index">{{districts.name}}</option>
								</select>

								<!-- error message -->
								<small class="text-muted text-danger" v-if="errors.has('form.id_regency')">
									<i class="icon-arrow-small-right"></i> {{ errors.first('form.id_regency') }}
								</small>
								<small class="text-muted" v-else>&nbsp;</small>
							</div>
						</div>

						<!-- kelurahan -->
						<div class="col-md-4">
							<div class="form-group" :class="{'has-error' : errors.has('form.id_villages')}">

								<!-- title -->
								<h6 :class="{ 'text-danger' : errors.has('form.id_villages')}">
									<i class="icon-cross2" v-if="errors.has('form.id_villages')"></i>
									Kelurahan: <wajib-badge></wajib-badge>
								</h6>

								<!-- select -->
								<select class="form-control"  name="id_villages" v-model="form.id_villages" data-width="100%" v-validate="'required'" data-vv-as="Desa" :disabled="modelVillages.length === 0">
									<option disabled value="">
										<span v-if="modelVillagesStat === 'loading'">Mohon tunggu... mohon tunggu</span>
										<span v-else>Silahkan pilih kelurahan</span>
									</option>
									<option v-for="(villages, index) in modelVillages" :value="villages.id" :key="index">{{villages.name}}</option>
								</select>

								<!-- error message -->
								<small class="text-muted text-danger" v-if="errors.has('form.id_villages')">
									<i class="icon-arrow-small-right"></i> {{ errors.first('form.id_villages') }}
								</small>
								<small class="text-muted" v-else>&nbsp;</small>
							</div>
						</div>

						<!-- RT -->
						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h6>RT:</h6>

								<!-- text -->
								<cleave 
									v-model="form.rt" 
									class="form-control" 
									:options="cleaveOption.number3"
									placeholder="Silahkan masukkan no rt"></cleave>

								<!-- error message -->
								<small class="text-muted">&nbsp;</small>	
							</div>
						</div>

						<!-- RW -->
						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h6>RW:</h6>

								<!-- text -->
								<cleave 
									v-model="form.rw" 
									class="form-control" 
									:options="cleaveOption.number3"
									placeholder="Silahkan masukkan no rw"></cleave>

								<!-- error message -->
								<small class="text-muted">&nbsp;</small>	
							</div>
						</div>

						<!-- alamat -->
						<div class="col-md-8">
							<div class="form-group" :class="{'has-error' : errors.has('form.alamat')}">

								<!-- title -->
								<h6 :class="{ 'text-danger' : errors.has('form.alamat')}">
									<i class="icon-cross2" v-if="errors.has('form.alamat')"></i>
									Alamat: <wajib-badge></wajib-badge></h6>

								<!-- text -->
								<input type="text" name="alamat" class="form-control" placeholder="Silahkan masukkan alamat" v-validate="'required|min:5'" data-vv-as="Alamat" v-model="form.alamat">

								<!-- error message -->
								<small class="text-muted text-danger" v-if="errors.has('form.alamat')">
									<i class="icon-arrow-small-right"></i> {{ errors.first('form.alamat') }}
								</small>
								<small class="text-muted" v-else>&nbsp;</small>
							</div>
						</div>

						<!-- no hp -->
						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h6>No. Hp:</h6>

								<!-- text -->
								<cleave 
									v-model="form.hp" 
									class="form-control" 
									:options="cleaveOption.number12"
									placeholder="Silahkan masukkan no hp"></cleave>

								<!-- error message -->
								<small class="text-muted">&nbsp;</small>	
							</div>
						</div>

						<!-- email -->
						<div class="col-md-4">
							<div class="form-group" :class="{'has-error' : errors.has('form.email')}">

								<!-- title -->
								<h6 :class="{ 'text-danger' : errors.has('form.email')}">
									<i class="icon-cross2" v-if="errors.has('form.email')"></i>
									Email:</h6>

								<!-- text -->
								<input type="text" name="email" class="form-control" placeholder="Silahkan masukkan alamat email" v-validate="'email'" data-vv-as="Email" v-model="form.email">

								<!-- error message -->
								<small class="text-muted text-danger" v-if="errors.has('form.email')">
									<i class="icon-arrow-small-right"></i> {{ errors.first('form.email') }}
								</small>
								<small class="text-muted" v-else>&nbsp;</small>
							</div>
						</div>

						<!-- kontak -->
						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h6>Kontak Lainnya:</h6>

								<!-- text -->
								<input type="text" name="kontak" class="form-control" placeholder="Silahkan masukkan kontak lainnya" v-model="form.kontak">

							</div>
						</div>

					</div>

				</div>
			</div>

			<!-- if cu -->
			<div class="card" v-if="currentUser && currentUser.id_cu != 0">
				<div class="card-header bg-white">
					<h5 class="card-title">CU</h5>
				</div>
				<div class="card-body">
					
						<div class="row">
							
							<!-- tp -->
							<div class="col-sm-4">
								<div class="form-group" :class="{'has-error' : errors.has('form.tp_id')}">

									<!-- title -->
									<h6 :class="{ 'text-danger' : errors.has('form.tp_id')}">
										<i class="icon-cross2" v-if="errors.has('form.tp_id')"></i>
										TP/KP: <wajib-badge></wajib-badge>
									</h6>

									<!-- select -->
									<select class="form-control" name="id_tp" v-model="form.tp_id" data-width="100%" v-validate="'required'" data-vv-as="TP/KP">
										<option disabled value="">
											<span v-if="modelTpStat === 'loading'">Mohon tunggu...</span>
											<span v-else>Silahkan pilih TP/KP</span>
										</option>
										<option v-for="(tp, index) in modelTp" :value="tp.id" :key="index">{{tp.name}}</option>
									</select>

									<!-- error message -->
									<small class="text-muted text-danger" v-if="errors.has('form.tp_id')">
										<i class="icon-arrow-small-right"></i> {{ errors.first('form.tp_id') }}
									</small>
									<small class="text-muted" v-else>&nbsp;</small>
								</div>
							</div>

							<!-- no_ba -->
							<div class="col-md-4">
								<div class="form-group" :class="{'has-error' : errors.has('form.no_ba')}">

									<!-- title -->
									<h6 :class="{ 'text-danger' : errors.has('form.no_ba')}">
									<i class="icon-cross2" v-if="errors.has('form.no_ba')"></i>
									No. BA: <wajib-badge></wajib-badge></h6>

									<!-- text -->
									<cleave 
									name="no_ba"
									v-model="form.no_ba" 
									class="form-control" 
									:options="cleaveOption.number16"
									placeholder="Silahkan masukkan no buku anggota"
									v-validate="'required'" data-vv-as="No. Buku Anggota"></cleave>

									<!-- error message -->
									<small class="text-muted text-danger" v-if="errors.has('form.no_ba')">
										<i class="icon-arrow-small-right"></i> {{ errors.first('form.no_ba') }}
									</small>
									<small class="text-muted" v-else>&nbsp;</small>

								</div>
							</div>

							<!-- tanggal_masuk -->
							<div class="col-md-4">
								<div class="form-group" :class="{'has-error' : errors.has('form.tanggal_masuk')}">

									<!-- title -->
									<h6 :class="{ 'text-danger' : errors.has('form.tanggal_masuk')}">
									<i class="icon-cross2" v-if="errors.has('form.tanggal_masuk')"></i>
									Tgl. Jadi Anggota: <wajib-badge></wajib-badge></h6>

									<!-- text -->
									<date-picker @dateSelected="form.tanggal_masuk = $event" :defaultDate="form.tanggal_masuk"></date-picker>	
									<input v-model="form.tanggal_masuk" v-show="false" v-validate="'required'" data-vv-as="Tgl. jadi anggota"/>

									<!-- error message -->
									<small class="text-muted text-danger" v-if="errors.has('form.tanggal_masuk')">
										<i class="icon-arrow-small-right"></i> {{ errors.first('form.tanggal_masuk') }}
									</small>
									<small class="text-muted" v-else>&nbsp;</small>

								</div>
							</div>

							<!-- keterangan_masuk -->
							<div class="col-md-12">
								<div class="form-group" >

									<!-- title -->
									<h6>
									Keterangan Jadi Anggota:</h6>

									<!-- text -->
									<input type="text" name="keterangan_masuk" class="form-control" placeholder="Silahkan masukkan keterangan masuk" v-model="form.keterangan_masuk">
									

								</div>
							</div>

						</div>
				</div>
			</div>

			<!-- if bkcu -->
			<div class="card" v-if="currentUser && currentUser.id_cu == 0">
				<div class="card-header bg-white">
					<h5 class="card-title">CU <wajib-badge></wajib-badge></h5>
				</div>
				<div class="card-body pb-2">
					<div class="row">

						<div class="col-md-12" v-if="form.status_jalinan != 1 && form.status_jalinan != 2">

							<button class="btn btn-light mb-1" @click.prevent="modalOpen('tambahCu')">
								<i class="icon-plus22"></i> Tambah
							</button>

							<button class="btn btn-light mb-1" @click.prevent="modalOpen('ubahCu')"
							:disabled="!selectedItemCu.index">
								<i class="icon-pencil5"></i> Ubah
							</button>

							<button class="btn btn-light mb-1" @click.prevent="modalOpen('hapusCu')" :disabled="!selectedItemCu.index">
								<i class="icon-bin2"></i> Hapus
							</button>

						</div>

					</div>		
				</div>

				<data-table :items="itemDataCu" :columnData="columnDataCu" :itemDataStat="itemDataCuStat">
					<template slot="item-desktop" slot-scope="props">
						<tr :class="{ 'bg-info': selectedItemCu.index === props.index + 1 }" class="text-nowrap" @click="selectedCuRow(props.index,props.item)" v-if="props.item">
							<td>{{ props.index + 1 }}</td>
							<td>
								<check-value :value="props.item.cu.name" v-if="props.item.cu"></check-value>
								<span v-else>-</span>
							</td>
							<td>
								<check-value :value="props.item.tp.name" v-if="props.item.tp"></check-value>
								<span v-else>-</span>
							</td>
							<td><check-value :value="props.item.no_ba"></check-value></td>
							<td><check-value :value="props.item.keterangan_masuk"></check-value></td>
							<td v-html="$options.filters.date(props.item.tanggal_masuk)" class="text-nowrap"></td>
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
				:cancelState="'methods'" 
				:formValidation="'form'" 
				:confirmIcon="confirmIcon"
				:confirmTitle="confirmTitle"
				@cancelClick="back"></form-button>
			</div>

		</form>

		<!-- modal -->
		<app-modal :show="modalShow" :state="modalState" :title="modalTitle" :content="modalContent" :color="modalColor"
		 @batal="modalTutup" @confirmOk="modalConfirmOk" @tutup="modalTutup" @successOk="modalTutup" @failOk="modalTutup" @backgroundClick="modalBackgroundClick">

			<!-- title -->
			<template slot="modal-title">
				{{ modalTitle }}
			</template>

			<!-- tambah cu -->
			<template slot="modal-body3">
				<form-cu 
				:mode="formCuMode"
				:selected="selectedItemCu"
				@createCu="createCu"
				@editCu="editCu"
				@tutup="modalTutup"></form-cu>
			</template>

		</app-modal>

	</div>
</template>

<script>
	import {mapGetters} from 'vuex';
	import _ from 'lodash';
	import {toMulipartedForm} from '../../helpers/form';
	import appImageUpload from '../../components/ImageUpload.vue';
	import appModal from '../../components/modal';
	import message from "../../components/message.vue";
	import formCu from "./formCu.vue";
	import formButton from "../../components/formButton.vue";
	import formInfo from "../../components/formInfo.vue";
	import Cleave from 'vue-cleave-component';
	import dataTable from '../../components/datatable.vue';
	import checkValue from "../../components/checkValue.vue";
	import infoIcon from "../../components/infoIcon.vue";
	import wajibBadge from "../../components/wajibBadge.vue";
	import identitas from "../../components/identitas.vue";
	import DatePicker from "../../components/datePicker.vue";

	export default {
		props: ['mode','nik'],
		components: {
			appModal,
			appImageUpload,
			message,
			formCu,
			formButton,
			formInfo,
			Cleave,
			dataTable,
			checkValue,
			appImageUpload,
			infoIcon,
			wajibBadge,
			identitas,
			DatePicker
		},
		data() {
			return {
				kelas: 'anggotaCu',
				confirmIcon: 'icon-arrow-right14',
				confirmTitle: 'Lanjut ke produk',
				cleaveOption: {
          date:{
            date: true,
            datePattern: ['Y', 'm', 'd'],
            delimiter: '-'
					},
					number24: {
            numeral: true,
            numeralIntegerScale: 24,
            numeralDecimalScale: 0,
						stripLeadingZeroes: false,
						delimiter: ''
					},
					number16: {
            numeral: true,
            numeralIntegerScale: 16,
            numeralDecimalScale: 0,
						stripLeadingZeroes: false,
						delimiter: ''
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
          },
				},
				formCuMode: '',
				selectedItemCu: '',
				itemDataCu: [],
				itemDataCuStat: 'success',
				columnDataCu:[
					{ title: 'No.' },
					{ title: 'CU' },
					{ title: 'TP/KP' },
					{ title: 'No. BA' },
					{ title: 'Keterangan' },
					{ title: 'Tgl. Jadi Anggota' },
				],
				modalShow: false,
				modalState: '',
				modalTitle: '',
				modalColor: '',
				modalContent: '',
				submited: false,
			}
		},
		created() {
			if(this.mode == 'edit'){
				this.confirmIcon = 'icon-floppy-disk';
				this.confirmTitle = 'Simpan';
			}

			if (this.currentUser.id_cu == 0) {
				if (this.modelCuStat != 'success') {
					this.$store.dispatch('cu/getHeader');
				}
			}else{
				this.fetchTp(this.currentUser.id_cu);
			}
			
			this.$store.dispatch('pekerjaan/get');
			this.$store.dispatch('suku/get');
			this.$store.dispatch('provinces/get');
			this.fetch();
		},
		watch: {
			formStat(value){
				if(value == 'success'){
					this.fetchCu();
				}
			},
			updateStat(value) {
				this.modalShow = true;
				this.modalState = value;
				this.modalColor = '';

				if (value === "success") {
				this.modalTitle = this.updateResponse.message;
				} else {
					this.modalTitle = 'Oops terjadi kesalahan :(';
					this.modalContent = this.updateResponse;
				}
			}
		},
		methods: {
			fetch() {
				if(this.mode == 'edit'){
					this.$store.dispatch(this.kelas + '/editDraft', this.$route.params.id);
				}
			},
			fetchCu(){
				if(this.currentUser.id_cu == 0){
					this.itemDataCu = [];
					var valData;

					if(this.form.anggota_cu_cu){
						for(valData of this.form.anggota_cu_cu){
							this.itemDataCu.push(valData);
						}
					}
				}else{
					let data = _.find(this.form.anggota_cu_cu,{'cu_id':this.currentUser.id_cu});

					if(data){
						this.form.tp_id = data.tp_id;
						this.form.no_ba = data.no_ba;
						this.form.tanggal_masuk = data.tanggal_masuk;
						this.form.keterangan_masuk = data.keterangan_masuk;
					}
				}

				if(this.form.id_provinces){
					this.changeProvinces(this.form.id_provinces);
				}
				if(this.form.id_regencies){
					this.changeRegencies(this.form.id_regencies);
				}
				if(this.form.id_districts){
					this.changeDistricts(this.form.id_districts);
				}
			},
			fetchTp(value){
				this.$store.dispatch('tp/getCu',value);
			},
			createCu(value){
				this.itemDataCu.push(value);
				this.modalTutup();
			},
			editCu(value){
				_.remove(this.itemDataCu, {
						index: value.index
				});
				this.itemDataCu.push(value);
				this.modalTutup(); 
			},
			save() {
				if(this.currentUser.id_cu == 0){
					this.form.anggota_cu_cu = this.itemDataCu;
				}else{
					this.form.id_cu = this.currentUser.id_cu;
				}

				this.$validator.validateAll('form').then((result) => {
					if (result) {
						this.$store.dispatch(this.kelas + '/updateDraft', [this.$route.params.id,this.form]);
						this.submited = false;
					} else {
						window.scrollTo(0, 0);
						this.submited = true;
					}
				});
			},
			changeProvinces(id){
				this.$store.dispatch('regencies/getProvinces', id);
			},
			changeRegencies(id){
				this.$store.dispatch('districts/getRegencies', id);
			},
			changeDistricts(id){
				this.$store.dispatch('villages/getDistricts', id);
			},
			back() {
				if(this.currentUser.id_cu == 0){
					this.$router.push({name: this.kelas + 'CuDraft', params:{cu: 'semua', tp: 'semua'}});
				}else{
					this.$router.push({name: this.kelas + 'CuDraft', params:{cu: this.currentUser.id_cu, tp: 'semua'}});
				}
			},
			selectedCuRow(index,item){
				this.selectedItemCu = item;
				this.selectedItemCu.index = index + 1;
			},
			modalOpen(state, isMobile, itemMobile) {
				this.modalShow = true;
				this.state = state;
				
				if (state == 'hapusCu') {
					this.modalState = 'confirm-tutup';
					this.modalColor = '';
					this.modalTitle = 'Hapus CU ' + this.selectedItemCu.cu.name + ' ?';
					this.modalButton = 'Iya, Hapus';
					this.modalSize = '';
				}else if(state == 'ubahCu'){
					this.modalState = 'normal3';
					this.modalColor = 'bg-primary';
					this.modalTitle = 'Ubah CU';
					this.modalButton = 'Ok';
					this.modalSize = 'modal-lg';
					this.formCuMode = 'edit';
				}else if(state == 'tambahCu'){
					this.modalState = 'normal3';
					this.modalColor = 'bg-primary';
					this.modalTitle = 'Tambah CU';
					this.modalButton = 'Ok';
					this.modalSize = 'modal-lg';
					this.formCuMode = 'create';
				}
			},
			modalConfirmOk() {
				this.modalShow = false;

				if (this.state == 'hapusCu') {
					_.remove(this.itemDataCu, {
						index: this.selectedItemCu.index
					});
				}
			},
			modalTutup() {
				if (this.updateStat === 'success') {				
						this.back();
					this.$store.dispatch(this.kelas + '/resetUpdateStat');
				}

				this.modalShow = false;
			},
			modalBackgroundClick() {
				if (this.modalState === 'success') {
					this.modalTutup;
				} else if (this.modalState === 'loading') {
					// do nothing
				} else {
					this.modalShow = false
				}
			},
		},
		computed: {
			...mapGetters('auth', {
				currentUser: 'currentUser'
			}),
			...mapGetters('anggotaCu', {
				form: 'data',
				formStat: 'dataStat',
				rules: 'rules',
				options: 'options',
				updateResponse: 'update',
				updateStat: 'updateStat'
			}),
			...mapGetters('cu',{
				modelCu: 'headerDataS',
				modelCuStat: 'headerDataStatS',
			}),
			...mapGetters('tp',{
				modelTp: 'dataS',
				modelTpStat: 'dataStatS',
			}),
			...mapGetters('pekerjaan',{
				modelPekerjaan: 'dataS',
				modelPekerjaanStat: 'dataStatS'
			}),
			...mapGetters('suku',{
				modelSuku: 'dataS',
				modelSukuStat: 'dataStatS'
			}),
			...mapGetters('provinces',{
				modelProvinces: 'dataS',
				modelProvincesStat: 'dataStatS'
			}),
			...mapGetters('regencies',{
				modelRegencies: 'dataS',
				modelRegenciesStat: 'dataStatS'
			}),
			...mapGetters('districts',{
				modelDistricts: 'dataS',
				modelDistrictsStat: 'dataStatS'
			}),
			...mapGetters('villages',{
				modelVillages: 'dataS',
				modelVillagesStat: 'dataStatS'
			}),
		}
	}
</script>