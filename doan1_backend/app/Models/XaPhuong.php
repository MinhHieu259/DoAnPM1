<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class XaPhuong extends Model
{
    use HasFactory;
    protected $table = "xaphuong";
    protected $primaryKey = "id";
    protected $fillable  = [
        'tenXaPhuong',
        'maQuanHuyen'
    ];

    public function quanHuyen(){
        return $this->belongsTo(QuanHuyen::class, 'id');
    }
}
