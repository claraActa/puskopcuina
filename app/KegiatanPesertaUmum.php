<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Support\Dataviewer;
use Spatie\Activitylog\Traits\LogsActivity;


class KegiatanPesertaUmum extends BaseEloquent
    {
    use DataViewer,LogsActivity;

        protected $table = 'kegiatan_peserta';
    
    
        public static $rules = [
            'name' => 'required',
          //  'keterangan'=> 'required',
            'name_nametag' => 'required',
            //'name_sertifikat' => 'required',
        ];
     
        protected $fillable = ['aktivitas_id','kegiatan_id','name','comment','name_nametag', 'name_sertifikat','keterangan'];
        protected $allowedFilters =  ['name','comment','name_nametag', 'name_sertifikat','keterangan'];
        
    
        protected $orderable = ['name','comment','name_nametag', 'name_sertifikat','keterangan'];
    
        
        public static function initialize(){
            return [
        'aktivis_id' => '',
        'kegiatan_id' => '',
        'name' => '' ,
        'comment' => '' ,
        'keterangan'=> '',
        'name_nametag' => '',
        'name_sertifikat' => '',
        'datang' => '',
        'pulang' => '',
    ];
        }
    
       
    }
    
