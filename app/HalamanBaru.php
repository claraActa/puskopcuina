<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Support\Dataviewer;
use Spatie\Activitylog\Traits\LogsActivity;


class HalamanBaru extends BaseEloquent
    {
    use DataViewer,LogsActivity;

        protected $table = 'halaman_baru';
    
    
        public static $rules = [
            'name' => 'required',
            'comment'=>'required'
        ];
    
        protected $fillable = ['name','comment'];
        protected $allowedFilters =  ['name','comment'];
        
    
        protected $orderable = ['name','comment'];
    
        
        public static function initialize(){
            return ['name' => '' ,'comment' => '' ];
        }
    
       
    }
    
