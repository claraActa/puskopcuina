<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;
use App\Support\Dataviewer;

class halamanPendaftaran extends Model {

    use LogsActivity, Dataviewer;

    protected $table = 'peserta_diklat';
    
    
    public static $rules = [
        'name' => 'required',
        'gender'=>'required',
        'cu'=>'required',
        'tanggal_lahir'=>'required',
        'tempat_lahir'=>'required',
        'tinggi'=>'required',
        'agama'=>'required',
        'status_pernikahan'=>'required'
    ];

    protected $fillable = ['name','gender','cu','tanggal_lahir','tempat_lahir','tinggi','agama','status_pernikahan'];
    protected $allowedFilters =  ['name','gender','cu','tanggal_lahir','tempat_lahir','tinggi','agama','status_pernikahan','updated_at','created_at'];
    

    protected $orderable = ['name','gender','cu','tanggal_lahir','tempat_lahir','tinggi','agama','status_pernikahan','updated_at','created_at'];

    
    public static function initialize(){
        return ['name' => '' ,'gender' => '' ,'cu'=>'' , 'tanggal_lahir'=>'' , 'tempat_lahir'=>'' , 'tinggi'=>'' , 'agama'=>'' , 'status_pernikahan'=>''];
    }

   
}

