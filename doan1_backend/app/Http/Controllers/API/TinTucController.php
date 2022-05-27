<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\BatDongSan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TinTucController extends Controller
{
    public function dangTinBan(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'tenHinhThuc' => 'required',
            'loaiBatDongSan' => 'required',
            'diaChi' => 'required',
            'tieuDe' => 'required',
            'moTa' => 'required',
            'dienTich' => 'required',
            'giaTien' => 'required',
            'thongTinPhapLy' => 'required',
            'huongNha' => 'required'
        ], [
            'tenHinhThuc.required' => 'Tên hình thức không được để trống',
            'loaiBatDongSan.required' => 'Loại bất động sản không được để trống',
            'diaChi.required' => 'Địa chỉ không được để trống',
            'tieuDe.required' => 'Tiêu đề không được để trống',
            'moTa.required' => 'Mô tả không được để trống',
            'dienTich.required' => 'Diện tích không được để trống',
            'giaTien.required' => 'Giá tiền không được để trống',
            'thongTinPhapLy.required' => 'Thông tin pháp lý không được để trống',
            'huongNha.required' => 'Hướng nhà không được để trống'
        ]);

        if($validator->fails()){
            return response()->json([
                'status' => 400,
                'message'=> $validator->getMessageBag()
            ]);
        } else {
            $batDongSan = new BatDongSan();
            $batDongSan->maTkKhachHang = $request->input('maTkKhachHang');
            $batDongSan->maHinhThuc = $request->input('tenHinhThuc');
            $batDongSan->maHangMuc = $request->input('loaiBatDongSan'); 
            $batDongSan->diaChi = $request->input('diaChi');
            $batDongSan->tieuDe = $request->input('tieuDe');
            $batDongSan->moTa = $request->input('moTa');
            $batDongSan->dienTich = $request->input('dienTich');
            $batDongSan->giaTien = $request->input('giaTien');
            $batDongSan->thongTinPhapLy	= $request->input('thongTinPhapLy');
            $batDongSan->soPhongNgu	= $request->input('soPhongNgu');
            $batDongSan->soPhongVeSinh	= $request->input('soPhongVeSinh');
            $batDongSan->soTang	= $request->input('soTang');
            $batDongSan->huongNha = $request->input('huongNha');
            $batDongSan->huongBanCong	= $request->input('huongBanCong');
            $batDongSan->duongVao = $request->input('duongVao');
            $batDongSan->matTien = $request->input('matTien');
            $batDongSan->noiThat = $request->input('noiThat');
            $batDongSan->tenLienHe	= $request->input('tenLienHe');
            $batDongSan->soDienThoai = $request->input('soDienThoai');
            $batDongSan->diaChiLienHe = $request->input('diaChiLienHe');
            $batDongSan->emailLienHe = $request->input('emailLienHe');
            $batDongSan->save();

            $batDongSan->hinhanh()->createMany([
                [
                    'hinhAnh' => $request->input('hinhAnh')
                ]
            ]);
           


            return response()->json([
                'status' => 200,
                'message' => 'Đăng tin bất động sản thành công'
            ]);
        }
    }

    public function dangTinMua()
    {
        # code...
    }
}
