<template>
  <div class="media flex-column flex-sm-row mt-0 mb-3">
    <div class="mr-sm-3 mb-2 mb-sm-0">
      <div class="card-img-actions">
          <img :src="'/images/anggotaCu/' + itemData.gambar + '.jpg'" class="img-fluid img-preview rounded" v-if="itemData.gambar" >
          <img :src="'/images/no_image.jpg'" class="img-fluid img-preview rounded" v-else>
      </div>
    </div>

    <div class="media-body">
      <div class="row">
        <div class="col-sm-4">
          <ul class="list list-unstyled mb-0">
            <li><b>No. KTP:</b> {{itemData.nik}}</li>
            <li><b>No. KK:</b> {{itemData.kk}}</li>
            <li><b>Nama:</b> {{itemData.name}}</li>
            <li><b>Suku:</b> {{itemData.suku}}</li>
            <li><b>Gender:</b> {{itemData.kelamin}}</li>
            <li><b>Tinggi:</b> {{itemData.tinggi}}</li>
            <li><b>Agama:</b> {{itemData.agama}}</li>
            <li><b>Gol. Darah:</b> {{itemData.darah}}</li>
            <li v-if="itemData.tanggal_meninggal == null"><b>Usia:</b> <span v-if="itemData.tanggal_lahir" v-html="$options.filters.age(itemData.tanggal_lahir)"></span></li>
            <li v-else><b>Usia Saat Meninggal:</b> <span v-if="itemData.tanggal_lahir" v-html="$options.filters.ageDiff(itemData.tanggal_meninggal, itemData.tanggal_lahir)"></span></li>
            <li><b>Status:</b> {{ itemData.status}}</li>
          </ul>
        </div>
        <div class="col-sm-4">
          <ul class="list list-unstyled mb-0">
            <li><b>Tgl. Lahir:</b> <span v-if="itemData.tanggal_lahir" v-html="$options.filters.date(itemData.tanggal_lahir)"></span></li>
            <li><b>Tempat Lahir:</b> {{ itemData.tempat_lahir}}</li>
            <li><b>Nama Ibu:</b> {{ itemData.nama_ibu}}</li>
            <li><b>Lembaga:</b> {{ itemData.lembaga}}</li>
            <li><b>Jabatan:</b> {{ $options.filters.checkTingkatAktivis(itemData.jabatan) }}</li>
            <li><b>Pekerjaan:</b> {{ itemData.pekerjaan}}</li>
            <li><b>Pendidikan:</b> {{ itemData.pendidikan}}</li>
            <li><b>Email:</b> {{ itemData.email}}</li>
            <li><b>No. Hp:</b> {{ itemData.hp}}</li>
            <li><b>Kontak Lainnya:</b> {{ itemData.kontak}}</li>	
          </ul>
        </div>
        <div class="col-sm-4">
          <ul class="list list-unstyled mb-0">
            <li v-if="itemData.anggota_cu_cu"><b>Asal TP/KP:</b> {{itemData.anggota_cu_cu[0].tp  ? itemData.anggota_cu_cu[0].tp.name : ''}}</li>
            <li><b>Provinsi:</b> {{ itemData.provinces ? itemData.provinces.name : ''}}</li>
            <li><b>Kabupaten:</b> {{ itemData.regencies ? itemData.regencies.name : ''}}</li>
            <li><b>Kecamatan:</b> {{ itemData.districts ? itemData.districts.name : ''}}</li>
            <li><b>Kelurahan:</b> {{ itemData.villages ? itemData.villages.name : ''}}</li>
            <li><b>Alamat:</b> {{ itemData.alamat}}</li>
          </ul>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    props: ['itemData']
  }
</script>