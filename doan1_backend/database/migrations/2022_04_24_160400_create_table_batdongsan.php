<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('batdongsan', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("maTkKhachHang");
            $table->unsignedBigInteger("maTkNguoiDuyet");
            $table->unsignedBigInteger("maHangMuc");
            $table->unsignedBigInteger("maHinhThuc");
            $table->unsignedBigInteger("maLoaiTinDang");
            $table->string("tieuDe", 255);
            $table->date("ngayBatDau")->nullable();
            $table->date("ngayKetThuc")->nullable();
            $table->string("diaChi", 255);
            $table->double("dienTich")->default(0);
            $table->string("maDonViDt", 10)->default("m3");
            $table->double("giaTien");
            $table->string("maDonViGiaTien", 10)->default('VND');
            $table->text("moTa")->default('');
            $table->text("thongTinPhapLy")->default('');
            $table->integer("soPhongNgu")->default(0);
            $table->integer("soPhongVeSinh")->default(0);
            $table->integer("soTang")->default(1);
            $table->string("huongNha", 255)->nullable();
            $table->string("matTien", 255)->nullable();
            $table->string("noiThat", 255)->default('');
            $table->tinyInteger("trangThai")->default(1);
            $table->timestamps();
            $table->foreign('maTkKhachHang')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('maTkNguoiDuyet')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('maHangMuc')->references('id')->on('hangmuc')->onDelete('cascade');
            $table->foreign('maHinhThuc')->references('id')->on('hinhthuc')->onDelete('cascade');
            $table->foreign('maLoaiTinDang')->references('id')->on('loaitindang')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('batdongsan');
    }
};
