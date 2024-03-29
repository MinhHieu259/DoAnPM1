<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HinhThuc extends Model
{
    use HasFactory;
    protected $table = "hinhthuc";
    protected $primaryKey = "id";
    protected $fillable  = [
        'tenHinhThuc',
        'trangThai',
    ];
}
