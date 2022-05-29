<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\HangMuc;
use Illuminate\Http\Request;

class HangMucController extends Controller
{
    public function get_all_hangmuc()
    {
        $hangMuc = HangMuc::all();
        return response()->json([
            'status' => 200,
            'hangMuc' => $hangMuc
        ]);
    }

    public function get_hangmuc_byId($id)
    {
        $hangMuc = HangMuc::find($id);
        return response()->json([
            'status' => 200,
            'hangMuc' => $hangMuc
        ]);
    }
}
