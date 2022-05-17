<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\LoaiTinDang;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class LoaiTinController extends Controller
{
    public function addLoaiTin(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'tenLoaiTinDang' => 'required|max:255',
            'gia' => 'required',
        ], [
            'tenLoaiTinDang.required' => 'Tên loại tin không được để trống',
            'tenLoaiTinDang.gia' => 'Giá được để trống'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 400,
                'message' => $validator->getMessageBag(),
            ]);
        } else {
            $loaiTin = new LoaiTinDang();
            $loaiTin->tenLoaiTinDang = $request->input('tenLoaiTinDang');
            $loaiTin->gia = $request->input('gia');
            $loaiTin->save();
            return response()->json([
                'status' => 200,
                'message' => 'Thêm loại tin thành công',
            ]);
        }
    }

    public function editLoaiTin($id)
    {
        $loaiTin = LoaiTinDang::find($id);
        if ($loaiTin) {
            return response()->json([
                'status' => 200,
                'loaiTin' => $loaiTin,
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'Không tìm thấy loại tin',
            ]);
        }
    }

    public function updateLoaiTin(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'tenLoaiTin' => 'required|max:255'
        ], [
            'tenLoaiTin.required' => 'Tên loại tin không được để trống'
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->getMessageBag()
            ]);
        } else {
            $loaiTin = LoaiTinDang::find($id);
            if ($loaiTin) {
                $loaiTin->tenLoaiTinDang = $request->input('tenLoaiTin');
                $loaiTin->gia = $request->input('gia');
                $loaiTin->trangThai = $request->input('trangThai') == true ? '1' : '0';
                $loaiTin->save();
                return response()->json([
                    'status' => 200,
                    'message' => 'Cập nhật loại tin thành công'
                ]);
            }else{
                return response()->json([
                    'status' => 404,
                    'message' => 'Không tìm thấy loại tin'
                ]);
            }
        }
    }

    public function deleteLoaiTin($id)
    {
        $loaiTin = LoaiTinDang::find($id);
        if($loaiTin){
            $loaiTin->delete();
            return response()->json([
                'status' => 200,
                'message' => 'Xóa loại tin thành công'
            ]);
        }else{
            return response()->json([
                'status' => 404,
                'message' => 'Không tìm thấy loại tin'
            ]);
        }
    }
}
