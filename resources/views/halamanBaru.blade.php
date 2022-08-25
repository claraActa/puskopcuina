@extends('_layouts.layout')

@section('css')

@stop

@section('content')

<!-- pengumuman -->
@include('_components.pengumumanBKCU')

<!-- page title -->


<section id="page-title">



    <div class="container clearfix">
        <h1>{{ $title }}</h1>
        <span>{{ $subtitle }}</span>
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="{{ route('home') }}">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">Artikel</li>
            <li class="breadcrumb-item active" aria-current="page">{{ $title }}</li>
        </ol>
    </div>

</section>


<!-- content -->
<section id="content">

    <div class="content-wrap">

        <div class="container clearfix">

            <form action="{{route('halamanBaru') }}" method="post">>
                <div class="form">
                    {{csrf_field()}}
                    <legend>Input Saran</legend>
                    <br>
                    <div class="form-group row">
                        <label for="titleid" class="col-sm-3 col-form-label"> Nama </label>
                        <div class="col-sm-9">
                            <input name="nama" type="text" class="form-control" id="titleid" placeholder="Isi Nama Anda">
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label for="titleid" class="col-sm-3 col-form-label">Saran </label>
                    <textarea class="form-control" rows="5" id="comment" name="saran" placeholder="Masukkan saran anda disini"></textarea>
                    <div class="col-sm-6">
                        <div class="rate">
                            <input type="radio" id="star5" class="rate" name="saran" value="5" />
                            <label for="star5" title="text">5 stars</label>
                            <input type="radio" checked id="star4" class="rate" name="saran" value="4" />
                            <label for="star4" title="text">4 stars</label>
                            <input type="radio" id="star3" class="rate" name="saran" value="3" />
                            <label for="star3" title="text">3 stars</label>
                            <input type="radio" id="star2" class="rate" name="saran" value="2">
                            <label for="star2" title="text">2 stars</label>
                            <input type="radio" id="star1" class="rate" name="saran" value="1" />
                            <label for="star1" title="text">1 star</label>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="offset-sm-3 col-sm-9">
                            <button type="submit" class="btn btn-primary">Kirim Saran</button>
                        </div>
                    </div>

            </form>
        </div>
        <legend>SARAN-SARAN</legend>
        <div class="container mt-3">

            <table class="table table-striped">
                <!--table boder="1" cellpadding="5"-->
                <tr>
                    <th>Nama</th>
                    <th>Saran</th>
                    <th>Rating Penilaian</th>
                </tr>
                @foreach($sarans as $saranbaru)
                <tr>
                    <td>{{$saranbaru->nama}}</td>
                    <td>{{$saranbaru->saran}}</td>
                    @for($i=1; $i<=$saranbaru->star_rating; $i++)
                        <td class="fa fa-star text-warning"></td>
                        @endfor
                </tr>
                @endforeach
            </table>



        </div>

</section>

@stop

@section('js')

@stop