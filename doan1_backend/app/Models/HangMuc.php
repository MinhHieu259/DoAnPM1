<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HangMuc extends Model
{
    use HasFactory;
    protected $table = "hangmuc";
    protected $primaryKey = "id";
    protected $fillable  = [
        'tieuDe',
        'moTa'
    ];
}
