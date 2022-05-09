<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'signupusername' => 'required|max:191',
            'signupemail' => 'required|email|max:191|unique:users,email',
            'signuppassword' => 'required|min:8',
            'signupphone' => 'required|min:10',
            'signupcpassword' => 'required|same:signuppassword'
        ], [
            'signupusername.required' => 'Bạn phải nhập Họ Tên',
            'signupusername.max' => 'Tối đa 191 ký tự',
            'signupemail.required' => 'Email không được để trống',
            'signupemail.email' => 'Email không hợp lệ',
            'signupemail.max' => 'Tối đa 191 ký tự',
            'signupemail.unique' => 'Email đã tồn tại trong hệ thống',
            'signuppassword.required' => 'Mật khẩu không được để trống',
            'signuppassword.min' => 'Phải ít nhất 8 kí tự',
            'signupphone.required' => 'Bạn chưa nhập số điện thoại',
            'signupphone.min' => 'Số điện thoại ít nhất 10 ký tự',
            'signupcpassword.required' => 'Bạn chưa xác nhận mật khẩu',
            'signupcpassword.same' => 'Mật khẩu không trùng khớp'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'validation_errors' => $validator->getMessageBag(),
            ]);
        } else {
            $user = User::create([
                'name' => $request->signupusername,
                'email' => $request->signupemail,
                'password' => Hash::make($request->signuppassword),
                'soDienThoai' => $request->signupphone
            ]);

            $token = $user->createToken($user->email . '_Token')->plainTextToken;
            return response()->json([
                'status' => 200,
                'username' => $user->name,
                'token' => $token,
                'message' => 'Đăng ký thành công'
            ]);
        }
    }

    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|max:191',
            'password' => 'required',
        ], [
            'email.required' => 'Email không được để trống',
            'password.required' => 'Mật khẩu không được để trống'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'validation_errors' => $validator->getMessageBag(),
            ]);
        } else {
            $user = User::where('email', $request->email)->first();
            if (!$user) {
                return response()->json([
                    'status' => 401,
                    'message' => 'Email không tồn tại trong hệ thống'
                ]);
            }else
            if (!Hash::check($request->password, $user->password)) {
                return response()->json([
                    'status' => 401,
                    'message' => 'Sai mật khẩu'
                ]);
            }else {
                if ($user->maPhanQuyen == 1) { // Admin
                    $role = 'admin';
                    $token = $user->createToken($user->email . '_AdminToken', ['server:admin'])->plainTextToken;
                } else {
                    $role = '';
                    $token = $user->createToken($user->email . '_Token', [''])->plainTextToken;
                }


                return response()->json([
                    'status' => 200,
                    'username' => $user->name,
                    'token' => $token,
                    'message' => 'Đăng nhập thành công',
                    'role' => $role,
                ]);
            }
        }
    }

    public function logout()
    {
        Auth::user()->tokens->each(function($token, $key) {
            $token->delete();
        });
        return response()->json([
            'status' => 200,
            'message' => 'Đăng xuất thành công'
        ]);
    }
}
