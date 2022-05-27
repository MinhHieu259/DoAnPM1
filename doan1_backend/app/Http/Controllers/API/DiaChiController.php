<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\QuanHuyen;
use App\Models\TinhThanh;
use App\Models\XaPhuong;
use Illuminate\Http\Request;

class DiaChiController extends Controller
{
    public function get_all_tinh()
    {
        $tinhThanh = TinhThanh::all();
        return response()->json([
            'status' => 200,
            'tinhThanh' => $tinhThanh
        ]);
    }

    public function get_quanhuyenFromTinh($id_tinh)
    {
        $quanHuyen = QuanHuyen::where('maTinhThanh', $id_tinh)->get();
        return response()->json([
            'status' => 200,
            'quanHuyen' => $quanHuyen
        ]);
    }

    public function get_phuongXaFromQuan($id_quan)
    {
        $phuongXa = XaPhuong::where('maQuanHuyen', $id_quan)->get();
        return response()->json([
            'status' => 200,
            'phuongXa' => $phuongXa
        ]);
    }

    public function get_ten_tinh($id_tinh)
    {
        $tinh = TinhThanh::where('id', $id_tinh)->first();
        return response()->json([
            'status' => 200,
            'tenTinh' => $tinh->tenTinhThanh
        ]);
    }

    public function get_ten_quan($id_quan)
    {
        $quan = QuanHuyen::where('id', $id_quan)->first();
        return response()->json([
            'status' => 200,
            'tenQuan' => $quan->tenQuanHuyen
        ]);
    }

    public function get_ten_xa($id_xa)
    {
        $xa = XaPhuong::where('id', $id_xa)->first();
        return response()->json([
            'status' => 200,
            'tenXa' => $xa->tenXaPhuong
        ]);
    }
}
