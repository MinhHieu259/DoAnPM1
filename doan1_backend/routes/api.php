<?php

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\DiaChiController;
use App\Http\Controllers\API\HangMucController;
use App\Http\Controllers\API\HinhThucController;
use App\Http\Controllers\API\LoaiTinController;
use App\Http\Controllers\API\TinTucController;
use App\Http\Controllers\API\UserController;
use App\Models\LoaiTinDang;
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

//Login facebook
Route::get('/login-facebook',[AuthController::class, 'login_facebook']);
Route::get('/callback-facebook',[AuthController::class, 'callback_facebook']);

// get Hình thức
Route::get('/get-all-hinhthuc',[HinhThucController::class, 'get_all_hinhthuc']);

// get Hạng mục
Route::get('/get-all-hangmuc',[HangMucController::class, 'get_all_hangmuc']);
Route::get('/get-hangmuc-by-id/{id}',[HangMucController::class, 'get_hangmuc_byId']);

// get all tỉnh thành
Route::get('/get-all-tinhthanh',[DiaChiController::class, 'get_all_tinh']);
Route::get('/get-ten-tinh/{id_tinh}',[DiaChiController::class, 'get_ten_tinh']);


//get quận huyện theo tỉnh
Route::get('/get-quanhuyen/{id_tinh}',[DiaChiController::class, 'get_quanhuyenFromTinh']);
Route::get('/get-ten-quan/{id_quan}',[DiaChiController::class, 'get_ten_quan']);

//get phường xã theo quận huyện
Route::get('/get-phuongxa/{id_quan}',[DiaChiController::class, 'get_phuongXaFromQuan']);
Route::get('/get-ten-xa/{id_xa}',[DiaChiController::class, 'get_ten_xa']);

// Get bất động sản
//Get Nhà
Route::get('/get-nha',[TinTucController::class, 'get_nha']);
Route::get('/chi-tiet-batdongsan/{id}',[TinTucController::class, 'chiTietBDS']);

//get all loại tin
Route::get('/get-all-loai-tin',[LoaiTinController::class, 'get_all_loai_tin']);
Route::get('/get-loai-tin-byId/{id}',[LoaiTinController::class, 'getLoaiTinByID']);

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

    // Quản lý người dùng
    Route::put('/capnhat-trang-thai-user/{id}', [UserController::class, 'capNhatTrangThai']);
    Route::put('/capnhat-quyen-user/{id}', [UserController::class, 'capNhatQuyen']);
    Route::delete('/xoa-user/{id}', [UserController::class, 'xoaNguoiDung']);
});

Route::middleware(['auth:sanctum', 'isApiCtv'])->group(function () {
    Route::get('/checkingCtvAuth', function () {
        return response()->json(['message' => 'Đã đăng nhập', 'status' => 200], 200);
    });
});

Route::middleware(['auth:sanctum'])->group(function () {
    Route::post('logout', [AuthController::class, 'logout']);

     // Người dùng
     Route::get('edit-thong-tin-ca-nhan/{id}', [UserController::class, 'editThongTin']);
     Route::post('update-thong-tin-canhan/{id}', [UserController::class, 'updateThongTin']);
     Route::put('doimatkhau/{id}', [UserController::class, 'doiMatKhau']);

     //Đăng tin
     Route::post('dang-tin-ban', [TinTucController::class, 'dangTinBan']);
     Route::post('dang-tin-mua', [TinTucController::class, 'dangTinMua']);

     //Lấy tin đã đăng
     Route::get('danh-sach-tin-dang', [UserController::class, 'getTinDang']);
     
});
// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

