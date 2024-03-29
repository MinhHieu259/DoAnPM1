<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HinhAnh extends Model
{
    use HasFactory;
    protected $table = "hinhanh";
    protected $primaryKey = "id";
    protected $fillable  = [
        'maBatDongSan',
        'hinhAnh'
    ];

    public function batDongSan(){
        return $this->belongsTo(BatDongSan::class, 'id');
    }
}
