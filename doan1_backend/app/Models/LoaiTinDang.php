<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LoaiTinDang extends Model
{
    use HasFactory;
    protected $table = "loaitindang";
    protected $fillable  = [
        'tenLoaiTinDang',
        'gia',
        'trangThai'
    ];
}
