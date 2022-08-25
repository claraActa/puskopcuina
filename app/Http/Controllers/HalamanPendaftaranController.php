<?php

    namespace App\Http\Controllers;
    
    use DB;
    use App\Saran;
    use App\Support\Helper;
    use App\HalamanPendaftaran;
    use Illuminate\Http\Request;
    use Illuminate\Http\Response;
    
    class HalamanPendaftaranController extends Controller{
    
        protected $message = 'HalamanPendaftaran';
    
        public function index()
        {
            $table_data = HalamanPendaftaran::select('id','name','gender','cu','aktivis','pendidikan','jurusan','tanggal_lahir','tempat_lahir','tinggi','agama','status_pernikahan')->advancedFilter();
            
            return response()
                ->json([
                    'model' => $table_data
                ]);
        }
    
        public function HalamanSaran()
        {
           
                $title = ' Pendaftaran Diklat';
                $subtitle = 'SILAHKAN MENDAFTAR DIBAWAH ';
                return view('HalamanPendaftaran', compact('name','gender','cu','aktivis','pendidikan','jurusan','tanggal_lahir','tempat_lahir','tinggi','agama','status_pernikahan'));
        }

        public function create()
        {
            return response()
                ->json([
                        'form'=> HalamanPendaftaran::initialize(),
                        'rules'=> HalamanPendaftaran::$rules,
                        'option'=>[]
                ]);
        }

       // public function destroy($id)
    //{
      //  $kelas = HalamanPendaftaran::findOrFail($id);
        //$name = $kelas->name;
        //$kelas->delete();

        //return response()
          //  ->json([
            //    'deleted' => true,
              //  'message' =>  $this->message . ' ' . $name . ' Berhasil Dihapus.'
            //]);
    //}
    public function edit($id)
    {
        $kelas = HalamanPendaftaran::findOrFail($id);

        return response()
            ->json([
                'form' => $kelas,
                'option' => []
            ]);
    }
    
        public function store(Request $request)
        {
            
           $this->validate($request,HalamanPendaftaran::$rules);

           $kelas = HalamanPendaftaran::create([
                    'name'=> $request->name, 
                    'gender'=> $request->gender, 
                    'cu'=> $request->cu , 
                    'aktivis'=>$request->aktivis , 
                    'pendidikan'=>$request->pendidikan , 
                    'jurusan'=>$request->jurusan , 
                    'tanggal_lahir'=>$request->tanggal_lahir , 
                    'tempat_lahir'=>$request->empat_lahir , 
                    'tinggi'=>$request->tinggi , 
                    'agama'=>$request->agama , 
                    'status_pernikahan'=>$request->status_pernikahan
                    ]);
           return response()
           ->json([
            'saved'=> true,
            'message'=>$this->message.''.$request->name.'berhasil didaftarkan.',
            'id'=> $kelas->id
           ]);
           
        }
       // public function update(Request $request, $id)
        //{
          //  $name = $request->name;
           // $kelas = HalamanPendaftaran::findOrFail($id);
            // processing single image upload
            //$kelas->update($request->all());
            //return response()
              //  ->json([
                //    'saved' => true,
                  //  'message' => $this->message . ' ' . $name . ' berhasil diubah'
                //]);
        //}
      }
      