<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function editThongTin($id)
    {
        $user = User::find($id);
        if ($user) {
            return response()->json([
                'status' => 200,
                'nguoiDung' => $user,
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'Không tìm thấy thông tin người dùng',
            ]);
        }
    }

    public function updateThongTin(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:255',
            'ngaySinh' => 'required',
            'gioiTinh' => 'required',
            'diaChi' => 'required|max:255',
            'soDienThoai' => 'required|max:11',
            'email' => 'required|max:255',
            'cmnd' => 'required|max:255',
            'facebook' => 'required|max:255'
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->getMessageBag()
            ]);
        } else {
            $user = User::find($id);
            if ($user) {
                $user->name = $request->input('name');
                $user->ngaySinh = $request->input('ngaySinh');
                $user->gioiTinh = $request->input('gioiTinh') == true ? '1' : '0';
                $user->diaChi = $request->input('diaChi');
                $user->soDienThoai = $request->input('soDienThoai');
                $user->email = $request->input('email');
                $user->cmnd = $request->input('cmnd');
                $user->facebook = $request->input('facebook');
                
                if($request->hasFile('image')){
                    $file = $request->file('image');
                    $extension = $file->getClientOriginalExtension();
                    $filename = time().'.'.$extension;
                    $file->move('uploads/avatar/', $filename);
                    $user->avatar = 'uploads/avatar/'.$filename; 
                }
                $user->save();
                return response()->json([
                    'status' => 200,
                    'message' => 'Cập nhật thông tin cá nhân thành công',
                ]);
            } else {
                return response()->json([
                    'status' => 404,
                    'message' => 'Không tìm thấy thông tin người dùng',
                ]);
            }
        }
    }

    public function doiMatKhau(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'matKhauMoi' => 'required|min:8',
            'xacNhanMatKhau' => 'required|same:matKhauMoi',
        ], [
            'matKhauMoi.required' => 'Chưa nhập mật khẩu',
            'xacNhanMatKhau.required' => 'Chưa nhập xác nhận mật khẩu',
            'xacNhanMatKhau.same' => 'Mật khẩu xác nhận không trùng khớp'
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->getMessageBag(),
            ]);
        } else {
             $user = User::find($id);
            if ($user) {
                $hashedPassword = Auth::user()->password;
                if (Hash::check($request->matKhauCu, $hashedPassword)) {
                    if (!Hash::check($request->xacNhanMatKhau, $hashedPassword)) {
                        $user->password = Hash::make($request->xacNhanMatKhau);
                        $user->save();
                        return response()->json([
                            'status' => 200,
                            'message' => 'Đổi mật khẩu thành công',
                        ]);
                    } else {
                        return response()->json([
                            'status' => 422,
                            'message' => 'Mật khẩu mới không thể trùng mật khẩu cũ',
                        ]);
                    }
                } else {
                    return response()->json([
                        'status' => 422,
                        'message' => 'Mật khẩu cũ không chính xác',
                    ]);
                }
            } else {
                return response()->json([
                    'status' => 404,
                    'message' => 'Không tìm thấy thông tin người dùng',
                ]);
            }
        }
    }

    public function capNhatTrangThai(Request $request, $id)
    {
        # code...
    }

    public function capNhatQuyen(Request $request, $id)
    {
        # code...
    }

    public function xoaNguoiDung($id)
    {
        # code...
    }

}
