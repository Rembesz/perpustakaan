<?php

use App\Model\Pinjaman;
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
Route::view('/', 'index');
Route::get('about', 'HomeController@about')->name('about-page');
Route::get('kontak', 'HomeController@contact')->name('kontak');
// Route::view('bukus', 'list_buku');
Route::get('/searchmember', 'HomeController@searchmember')->name('searchmember');
Route::get('list-buku', 'HomeController@listbook')->name('list_buku');
Route::get('/search', 'HomeController@search')->name('search');

Route::get('/home', 'HomeController@index')->name('home');
Auth::routes();
Route::get('/admin', 'AdminController@admin')->name('admin');
Route::get('tables', 'AdminController@table')->name('admin.tables');
Route::get('map', 'AdminController@maps')->name('admin.map');
Route::get('profile', 'AdminController@profile')->name('admin.profile');
Route::get('/auth', [App\Http\Controllers\Auth\LoginController::class, 'showLoginForm'])->name('login');
Route::post('/auth', [App\Http\Controllers\Auth\LoginController::class, 'login']);
Route::post('/register', [App\Http\Controllers\Auth\RegisterController::class, 'register'])->name('register');

Route::middleware(['auth'])->group(function () {
    // Route::view('map', 'backend.maps');
    Route::resource('/anggota','AnggotaController')->middleware('encrypt.ids');
    Route::resource('buku','BukuController')->middleware('encrypt.ids');
    Route::resource('pinjaman','PinjamanController')->middleware('encrypt.ids');
    Route::resource('pengembalian','PengembalianController')->middleware('encrypt.ids');
    
    Route::get('/pinjaman/edit/{id}','PinjamanController@edit')->name('pinjaman.edit')->middleware('encrypt.ids');
    Route::PUT('/pinjaman/edit/{id}','PinjamanController@update')->name('pinjaman.update')->middleware('encrypt.ids');
    Route::get('/pinjaman/delete/{id}','PinjamanController@destroy')->name('pinjaman.delete')->middleware('encrypt.ids');
    Route::delete('/pinjaman/delete/{id}','PinjamanController@destroy')->name('pinjaman.destroy')->middleware('encrypt.ids');
    Route::get('/pinjaman/show/{id}', 'PinjamanController@show')->name('pinjaman.show')->middleware('encrypt.ids');
    Route::post('/pengembalian', 'PengembalianController@store')->name('pengembalian.store');
    Route::delete('/pengembalian/{id}', 'PengembalianController@destroy')->name('pengembalian.delete')->middleware('encrypt.ids');
    // routes/web.php
});
Route::get('/anggota/ajax-search', 'AnggotaController@ajaxSearch')->name('anggota.ajaxSearch');
Route::get('/buku/ajax-search', 'BukuController@ajaxSearch')->name('buku.ajaxSearch');
Route::get('/pinjaman/ajax-search', 'PinjamanController@ajaxSearch')->name('pinjaman.ajaxSearch');

Route::get('/buku/stream/{id}', 'BukuController@stream')->name('buku.stream')->middleware('encrypt.ids');

Route::get('/likes', [App\Http\Controllers\LikeController::class, 'getLikes'])->name('get.likes');
Route::post('/like/{sectionId}', [App\Http\Controllers\LikeController::class, 'handleLike'])->name('like');
Route::post('/unlike/{sectionId}', [App\Http\Controllers\LikeController::class, 'handleUnlike'])->name('unlike');

Route::get('/track-visitor', [App\Http\Controllers\VisitorController::class, 'trackVisitor'])->name('track.visitor');
Route::get('/get-online-visitors', [App\Http\Controllers\VisitorController::class, 'getOnlineVisitors'])->name('get.online.visitors');
Route::get('/get-monthly-visitors', [App\Http\Controllers\VisitorController::class, 'getMonthlyVisitors'])->name('get.monthly.visitors');
Route::get('/get-monthly-orders', 'PinjamanController@getMonthlyOrders');
Route::get('/get-chart-data', [App\Http\Controllers\VisitorController::class, 'getChartData'])->name('get.chart.data');
Route::get('/add-test-data', [App\Http\Controllers\VisitorController::class, 'addTestData'])->name('add.test.data');
Route::get('/test-visitor', function() {
    return response()->json(['message' => 'Test route working']);
});
