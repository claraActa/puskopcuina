<?php
namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Support\Dataviewer;
use Spatie\Activitylog\Traits\LogsActivity;

class KegiatanPesertaUmum extends BaseEloquent
{
    use Dataviewer, LogsActivity; 
    protected $table = 'peserta_diklat';
    
    public static $rules = [
        'id' => 'required',
        'name' => 'required',
        'gender' => 'required',
        'jurusan' => 'required',
        'tanggal_lahir' => 'required',
        'tempat_lahir' => 'required',
        'tinggi' => 'required',
        'agama' => 'required',
        'status_pernikahan' => 'required',
        'umur' => 'required',
        'nomor' => 'required'


    ];
    
    protected $fillable = [
        'id',
        'name',
        'gender',
        'pendidikan',
        'jurusan',
        'tanggal_lahir',
        'tempat_lahir',
        'tinggi',
        'agama',
        'status_pernikahan',
        'umur',
        'nomor'
    ];
    protected $allowedFilters = [
        'id',
        'name',
        'gender',
        'pendidikan',
        'jurusan',
        'tanggal_lahir',
        'tempat_lahir',
        'tinggi',
        'agama',
        'status_pernikahan',
        'umur',
        'nomor',
        'created_at',
        'updated_at'
    ];

     protected $orderable = [
        'id',
        'name',
        'gender',
        'pendidikan',
        'jurusan',
        'tanggal_lahir',
        'tempat_lahir',
        'tinggi',
        'agama',
        'status_pernikahan',
        'umur',
        'nomor',
        'created_at',
        'updated_at'
    ];


    public static function initialize(){
        return[
         'id' => '',
        'name' => '',
        'gender' => '',
        'pendidikan' => '',
        'jurusan' => '',
        'tanggal_lahir' => '',
        'tempat_lahir' => '',
        'tinggi' => '',
        'agama' => '',
        'status_pernikahan' => '',
        'umur' => '',
        'nomor' => ''];
    }
    
   
    // public function getUserId()
    // {
    //     return $this->user_id;

    // }
    // public function getCuId()
    // {
    //     return $this->cu_id;
    // }
    // public function getkodeDiklat()
    // {
    //     return $this->kode_diklat;
    // }
    // public function getPertanyaanId()
    // {
    //     return $this->pertanyaan_id;
    // }

   // public function user()
    //{
      //  return $this->belongsTo('App\User', 'id', 'name')->select('id', 'name');
    //}

    //public function cu()
    //{
      //  return $this->belongsTo('App\Cu', 'cu_id', 'cu')->select('id', 'name');
   // }

//    public function kegiatan()
  //  {
    //    return $this->belongsTo('App\Kegiatan', 'kode_kegiatan', 'nama_kegiatan')->select('id', 'name');
    //}

    //public function pendataran()
    //{
      //  return $this->belongsTo('App\KegiatanPesertaUmum', 'name', 'gender')->select('id', 'name');
    //}
//}