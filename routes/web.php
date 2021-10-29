<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('index');
});
Route::view('/index', 'index');
Route::get('about', 'HomeController@about')->name('about-page');
Route::get('kontak', 'HomeController@contact')->name('kontak');
// Route::view('bukus', 'list_buku');
Route::get('anggota-page', 'HomeController@anggota')->name('anggota-page');
Route::get('/searchmember', 'HomeController@searchmember')->name('searchmember');
Route::get('list-buku', 'HomeController@listbook')->name('list_buku');
Route::get('/search', 'HomeController@search')->name('search');

Route::get('/home', 'HomeController@index')->name('home');
Auth::routes();
Route::get('/admin', 'AdminController@admin')->name('admin');
Route::get('tables', 'AdminController@table')->name('admin.tables');
Route::get('map', 'AdminController@maps')->name('admin.map');
Route::get('profile', 'AdminController@profile')->name('admin.profile');

Route::middleware(['auth'])->group(function () {
    // Route::view('map', 'backend.maps');
    Route::resource('/anggota','AnggotaController');
    Route::resource('buku','BukuController');
    Route::resource('pinjaman','PinjamanController');
    
    Route::get('/pinjaman/edit/{id}','PinjamanController@edit')->name('pinjaman');
    Route::PUT('/pinjaman/edit/{id}','PinjamanController@update')->name('pinjaman.edit');
    Route::get('/pinjaman/delete/{id}','PinjamanController@destroy')->name('pinjaman');
    Route::delete('/pinjaman/delete/{id}','PinjamanController@destroy')->name('pinjaman.delete');
    Route::resource('pengembalian','PengembalianController');
});
