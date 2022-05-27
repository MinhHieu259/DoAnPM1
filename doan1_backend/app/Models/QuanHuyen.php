<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QuanHuyen extends Model
{
    use HasFactory;
    protected $table = "quanhuyen";
    protected $primaryKey = "id";
    protected $fillable  = [
        'tenQuanHuyen',
        'maTinhThanh'
    ];

    public function tinhThanh(){
        return $this->belongsTo(TinhThanh::class, 'id');
    }

    public function xaPhuong(){
        return $this->hasMany(XaPhuong::class, 'id');
    }
}
