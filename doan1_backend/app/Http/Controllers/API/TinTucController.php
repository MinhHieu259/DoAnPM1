<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
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
            'tenHinhThuc.required' => 'Tên hình thức không được để trống'
        ]);
    }

    public function dangTinMua()
    {
        # code...
    }
}
