<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TinhThanh extends Model
{
    use HasFactory;
    protected $table = "tinhthanh";
    protected $primaryKey = "id";
    protected $fillable  = [
        'tenTinhThanh'
    ];

    public function quanHuyen(){
        return $this->hasMany(QuanHuyen::class, 'id');
    }
}
