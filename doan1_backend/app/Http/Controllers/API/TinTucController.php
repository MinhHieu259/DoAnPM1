<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\BatDongSan;
use App\Models\HinhAnh;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
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
            'huongNha' => 'required',
            'images' => 'required',
            'tenLienHe' => 'required',
            'soDienThoai' => 'required',
            'diaChiLienHe' => 'required',
            'emailLienHe' => 'required',
            'hinhDaiDien' => 'required',
            'ngayBatDau' => 'required',
            'ngayKetThuc' => 'required',
            'maLoaiTin' => 'required'
            
        ], [
            'tenHinhThuc.required' => 'Hình thức không được để trống',
            'loaiBatDongSan.required' => 'Loại bất động sản không được để trống',
            'diaChi.required' => 'Địa chỉ không được để trống',
            'tieuDe.required' => 'Tiêu đề không được để trống',
            'moTa.required' => 'Mô tả không được để trống',
            'dienTich.required' => 'Diện tích không được để trống',
            'giaTien.required' => 'Giá tiền không được để trống',
            'thongTinPhapLy.required' => 'Thông tin pháp lý không được để trống',
            'huongNha.required' => 'Hướng nhà không được để trống',
            'images.required' => 'Hình ảnh không được để trống',
            'tenLienHe.required' => 'Tên liên hệ không được để trống',
            'soDienThoai.required' => 'Số điện thoại không được để trống',
            'diaChiLienHe.required' => 'Địa chỉ liên hệ không được để trống',
            'emailLienHe.required' => 'Email liên hệ không được để trống',
            'hinhDaiDien.required' => 'Hình đại diện không được để trống',
            'ngayBatDau.required' => 'Chưa chọn ngày bắt đầu',
            'ngayKetThuc.required' => 'Chưa chọn ngày kết thúc',
            'maLoaiTin.required' => 'Mã loại tin không được để trống'
        ]);

        if($validator->fails()){
            return response()->json([
                'status' => 422,
                'errors'=> $validator->getMessageBag()
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
            $batDongSan->ngayBatDau = $request->input('ngayBatDau');
            $batDongSan->ngayKetThuc = $request->input('ngayKetThuc');
            $batDongSan->maLoaiTin = $request->input('maLoaiTin');
            if($request->hasFile('hinhDaiDien'))
            {
               
                $file = $request->file('hinhDaiDien');
                $extension = $file->getClientOriginalExtension();
                $filename = $file->getClientOriginalName().time().'dd'.'.'.$extension;
                $file->move('uploads/batdongsan/', $filename);
                $batDongSan->hinhDaiDien =  'uploads/batdongsan/'. $filename;
            }
            $batDongSan->save();

            if($request->hasFile('images'))
            {
               foreach($request->file('images') as  $image)
               {
                $file = $image;
                $extension = $file->getClientOriginalExtension();
                $filename = $file->getClientOriginalName().time().'.'.$extension;
                $file->move('uploads/batdongsan/', $filename);
                
                $hinhAnh = new HinhAnh();
                $hinhAnh->maBatDongSan = $batDongSan->id;
                $hinhAnh->hinhAnh = 'uploads/batdongsan/'.$filename;
                $hinhAnh->save();
                   
               }
            }

            $user = User::find(Auth::user()->id);
            $user->soDu = $request->input('soDu');
            $user->save();

            return response()->json([
                'status' => 200,
                'message' => 'Đăng tin bất động sản thành công'
            ]);
        }
    }

    public function get_nha()
    {
       // $batDongSan = DB::table('batdongsan')->join('hangmuc', 'batdongsan.maHangMuc', '=', 'hangmuc.id')->where('hangmuc.maLoaiHangMuc', '=', '1')->get();
        $batDongSan = DB::select('SELECT batdongsan.*, hangmuc.maLoaiHangMuc FROM batdongsan, hangmuc  WHERE batdongsan.maHangMuc = hangmuc.id AND hangmuc.maLoaiHangMuc = 1  ORDER BY batdongsan.id DESC limit 3');
        return response()->json([
            'status' => 200,
            'batDongSan' => $batDongSan
        ]);
    }

    public function chiTietBDS($id)
    {
        $batDongSan = BatDongSan::find($id);
        $batDongSan->hinhanh;
        return response()->json([
            'status' => 200,
            'batDongSan' => $batDongSan
        ]);
    }

}
