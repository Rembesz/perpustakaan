@extends('layouts.layout')

@section('about')
<div class="about">
    <div class="all-title-box">
        <div class="container text-center">
            <h1>Tentang Kami<span class="m_1">Mengenai PerpustakaanKu </span></h1>
        </div>
    </div>

@include('tentang')

    <div class="hmv-box">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-6 col-12">
                    <div class="inner-hmv">
                        <div class="icon-box-hmv"><i class="flaticon-achievement"></i></div>
                        <h3>Mission</h3>
                        <div class="tr-pa">M</div>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam eligendi expedita, provident cupiditate in excepturi.</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-12">
                    <div class="inner-hmv">
                        <div class="icon-box-hmv"><i class="flaticon-eye"></i></div>
                        <h3>Vision</h3>
                        <div class="tr-pa">V</div>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam eligendi expedita, provident cupiditate in excepturi.</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-12">
                    <div class="inner-hmv">
                        <div class="icon-box-hmv"><i class="flaticon-history"></i></div>
                        <h3>History</h3>
                        <div class="tr-pa">H</div>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam eligendi expedita, provident cupiditate in excepturi.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection