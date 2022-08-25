<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Support\Dataviewer;
use Spatie\Activitylog\Traits\LogsActivity;

class PesertaKegiatanUmum extends BaseEloquent {

    use Dataviewer, LogsActivity, SoftDeletes;

    protected $table = 'peserta_diklat';

    protected static $logFillable = true;
    protected static $logOnlyDirty = true;
    protected $dates = ['deleted_at'];

    public static $rules = [
        'name' => 'required',
        'gender' => 'required',
        'umur' => 'required',
        'tanggal_lahir' => 'required',
        'tempat_lahir' => 'required',
        'tinggi' => 'required',
        'agama' => 'required',
        'pendidikan' => 'required',
        'status_pernikahan' => 'required',
        'alamat' => 'required',
        'nomor_hp' => 'required',
        'email' => 'required',
        
    ];
    
    protected $fillable = [
       'name',
       'gender',
       'umur',
       'tanggal_lahir',
       'tempat_lahir',
       'tinggi',
       'agama',
       'pendidikan',
       'status_pernikahan',
       'alamat',
       'nomor_hp',
       'email'
    ];

    protected $allowedFilters = [
       'name',
       'gender',
       'umur',
       'tanggal_lahir',
       'tempat_lahir',
       'tinggi',
       'agama',
       'pendidikan',
       'status_pernikahan',
       'alamat',
       'nomor_hp',
       'email'
    ];

    protected $orderable = [
       'name',
       'gender',
       'pendidikan',
       'tanggal_lahir',
       'tempat_lahir',
       'tinggi',
       'agama',
       'status_pernikahan',
       'umur',
       'nomor'
    ];

    public static function initialize()
    {
        return [
           'name' => '',
           'gender' => '',
           'umur' => '',
           'tanggal_lahir' => '',
           'tempat_lahir' => '',
           'tinggi' => '',
           'pendidikan' => '',
           'status_pernikahan' => '',
           'agama' => '',
           'alamat' => '',
           'nomor_hp' => '',
           'email' => '',
        ];
    }
    
}