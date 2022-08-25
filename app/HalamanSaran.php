<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Support\Dataviewer;
use Spatie\Activitylog\Traits\LogsActivity;


class HalamanSaran extends BaseEloquent
    {
    use DataViewer,LogsActivity;

        protected $table = 'saranbaru';
    
    
        public static $rules = [
            'name' => 'required',
            'saran'=>'required',
            'rating'=>'required'
        ];
    
        protected $fillable = ['name','saran','rating'];
        protected $allowedFilters =  ['name','saran','rating'];
        
    
        protected $orderable = ['name','saran','rating'];
    
        
        public static function initialize(){
            return ['name' => '' ,'saran' => '' ,'rating'=>''];
        }
    
       
    }
    
