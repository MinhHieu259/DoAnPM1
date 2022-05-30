<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class BatDongSan extends Model
{
    use HasFactory;
    protected $table = "batdongsan";
    protected $primaryKey = "id";
    protected $fillable  = [
        'maTkKhachHang',
        'trangThai',
        'maTkNguoiDuyet',
        'maHangMuc',
        'maHinhThuc',
        'maLoaiTinDang',
        'tieuDe',
        'ngayBatDau',
        'ngayKetThuc',
        'diaChi',
        'dienTich',
        'maDonViDt',
        'giaTien',
        'maDonViGiaTien',
        'moTa',
        'thongTinPhapLy',
        'soPhongNgu',
        'soPhongVeSinh',
        'soTang',
        'huongNha',
        'matTien',
        'noiThat',
        'trangThai',
        'hinhDaiDien'
    ];

    public function hinhanh(){
        return $this->hasMany(HinhAnh::class, 'maBatDongSan');
    }
    public function hangmuc(){
        return $this->belongsTo(HangMuc::class, 'id');
    }
}
