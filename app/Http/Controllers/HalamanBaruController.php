<?php

    namespace App\Http\Controllers;
    
    use DB;
    use App\Saran;
    use App\Support\Helper;
    use App\HalamanBaru;
    use Illuminate\Http\Request;
    use Illuminate\Http\Response;
    
    class HalamanBaruController extends Controller{
    
        protected $message = 'halamanBaru';
    
        public function index()
        {
            $table_data = halamanBaru::select('id','name', 'comment')->advancedFilter();
            
            return response()
                ->json([
                    'model' => $table_data
                ]);
        }
    
        public function halamanBaru()
        {
           
                $title = ' Halaman Baru';
                $subtitle = 'SILAHKAN MENGISI SARAN UNTUK KAMI DIBAWAH ';
                return view('halamanBaru', compact('name','comment'));
        }

        public function create()
        {
            return response()
                ->json([
                        'form'=> halamanBaru::initialize(),
                        'rules'=> halamanBaru::$rules,
                        'option'=>[]
                ]);
        }

        public function destroy($id)
    {
        $kelas = halamanBaru::findOrFail($id);
        $name = $kelas->name;
        $kelas->delete();

        return response()
            ->json([
                'deleted' => true,
                'message' =>  $this->message . ' ' . $name . ' Berhasil Dihapus.'
            ]);
    }
    public function edit($id)
    {
        $kelas = halamanBaru::findOrFail($id);

        return response()
            ->json([
                'form' => $kelas,
                'option' => []
            ]);
    }
    
        public function store(Request $request)
        {
            
           $this->validate($request,halamanBaru::$rules);

           $kelas = halamanBaru::create(['name'=> $request->name, 'comment'=> $request->comment]);
           return response()
           ->json([
            'saved'=> true,
            'message'=>$this->message.''.$request->name.'berhasil ditambah',
            'id'=> $kelas->id
           ]);
           
           
          
        }
        public function update(Request $request, $id)
        {
            $name = $request->name;
            $kelas = halamanBaru::findOrFail($id);
            // processing single image upload
            $kelas->update($request->all());
            return response()
                ->json([
                    'saved' => true,
                    'message' => $this->message . ' ' . $name . ' berhasil diubah'
                ]);
        }
      }
      