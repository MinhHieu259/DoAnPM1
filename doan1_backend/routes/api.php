<?php

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\HinhThucController;
use App\Http\Controllers\API\LoaiTinController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Dang nhap, Dang ky
Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);


Route::middleware(['auth:sanctum', 'isApiAdmin'])->group(function () {
    Route::get('/checkingAuthenticated', function () {
        return response()->json(['message' => 'Đã đăng nhập', 'status' => 200], 200);
    });

    // Hình thức
    Route::post('/them-hinhthuc', [HinhThucController::class, 'addHinhThuc']);
    Route::get('/edit-hinhthuc/{id}', [HinhThucController::class, 'editHinhThuc']);
    Route::put('/capnhat-hinhthuc/{id}', [HinhThucController::class, 'updateHinhThuc']);
    Route::delete('/xoa-hinhthuc/{id}', [HinhThucController::class, 'deleteHinhThuc']);

    // Loại tin đăng
    Route::post('/them-loai-tin-dang', [LoaiTinController::class, 'addLoaiTin']);
    Route::get('/edit-loai-tin-dang/{id}', [LoaiTinController::class, 'editLoaiTin']);
    Route::put('/capnhat-loai-tin-dang/{id}', [LoaiTinController::class, 'updateLoaiTin']);
    Route::delete('/xoa-loai-tin-dang/{id}', [LoaiTinController::class, 'deleteLoaiTin']);

});

Route::middleware(['auth:sanctum'])->group(function () {
    Route::post('logout', [AuthController::class, 'logout']);
});
// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

