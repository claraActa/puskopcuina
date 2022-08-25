<?php

    namespace App\Http\Controllers;
    
    use DB;
    use App\Saran;
    use App\Support\Helper;
    use App\HalamanSaran;
    use Illuminate\Http\Request;
    use Illuminate\Http\Response;
    
    class HalamanSaranController extends Controller{
    
        protected $message = 'HalamanSaran';
    
        public function index()
        {
            $table_data = HalamanSaran::select('id','name','saran','rating')->advancedFilter();
            
            return response()
                ->json([
                    'model' => $table_data
                ]);
        }
    
        public function HalamanSaran()
        {
           
                $title = ' Halaman Saran';
                $subtitle = 'SILAHKAN MENGISI SARAN UNTUK KAMI DIBAWAH ';
                return view('HalamanSaran', compact('name','saran','rating'));
        }

        public function create()
        {
            return response()
                ->json([
                        'form'=> HalamanSaran::initialize(),
                        'rules'=> HalamanSaran::$rules,
                        'option'=>[]
                ]);
        }

        public function destroy($id)
    {
        $kelas = HalamanSaran::findOrFail($id);
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
        $kelas = HalamanSaran::findOrFail($id);

        return response()
            ->json([
                'form' => $kelas,
                'option' => []
            ]);
    }
    
        public function store(Request $request)
        {
            
           $this->validate($request,HalamanSaran::$rules);

           $kelas = HalamanSaran::create(['name'=> $request->name, 'saran'=> $request->saran, 'rating'=> $request->rating]);
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
            $kelas = HalamanSaran::findOrFail($id);
            // processing single image upload
            $kelas->update($request->all());
            return response()
                ->json([
                    'saved' => true,
                    'message' => $this->message . ' ' . $name . ' berhasil diubah'
                ]);
        }
      }
      