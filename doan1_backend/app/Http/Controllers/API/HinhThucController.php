<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\HinhThuc;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class HinhThucController extends Controller
{
    public function addHinhThuc(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'tenHinhThuc' => 'required|max:255'
        ], [
            'tenHinhThuc.required' => 'Tên hình thức không được để trống'
        ]);

        if($validator->fails()){
            return response()->json([
                'status' => 400,
                'message'=> $validator->getMessageBag()
            ]);
        } else {
            $hinhThuc = new HinhThuc();
            $hinhThuc->tenHinhThuc = $request->input('tenHinhThuc');
            $hinhThuc->save();
            return response()->json([
                'status' => 200,
                'message' => 'Thêm hình thức thành công'
            ]);
        }
    }

    public function editHinhThuc($id)
    {
        $hinhThuc = HinhThuc::find($id);
        if ($hinhThuc) {
            return response()->json([
                'status' => 200,
                'hinhThuc' => $hinhThuc
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'Không tìm thấy hình thức'
            ]);
        }
    }

    public function updateHinhThuc(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'tenHinhThuc' => 'required|max:255'
        ], [
            'tenHinhThuc.required' => 'Tên hình thức không được để trống'
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->getMessageBag()
            ]);
        } else {
            $hinhThuc = HinhThuc::find($id);
            if ($hinhThuc) {
                $hinhThuc->tenHinhThuc = $request->input('tenHinhThuc');
                $hinhThuc->trangThai = $request->input('trangThai') == true ? '1' : '0';
                $hinhThuc->save();
                return response()->json([
                    'status' => 200,
                    'message' => 'Cập nhật hình thức thành công'
                ]);
            }else{
                return response()->json([
                    'status' => 404,
                    'message' => 'Không tìm thấy hình thức'
                ]);
            }
        }
    }

    public function deleteHinhThuc($id)
    {
        $hinhThuc = HinhThuc::find($id);
        if($hinhThuc){
            $hinhThuc->delete();
            return response()->json([
                'status' => 200,
                'message' => 'Xóa hình thức thành công'
            ]);
        }else{
            return response()->json([
                'status' => 404,
                'message' => 'Không tìm thấy hình thức'
            ]);
        }
    }

    public function get_all_hinhthuc()
    {
        $hinhThuc = HinhThuc::all();
        return response()->json([
            'status' => 200,
            'hinhThuc' => $hinhThuc
        ]);
    }
}
