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
            $table->unsignedBigInteger("maTkNguoiDuyet")->nullable();
            $table->unsignedBigInteger("maHangMuc");
            $table->unsignedBigInteger("maHinhThuc");
            $table->string("tieuDe", 255);
            $table->date("ngayBatDau")->nullable();
            $table->date("ngayKetThuc")->nullable();
            $table->string("diaChi", 255);
            $table->double("dienTich")->default(0);
            $table->string("maDonViDt", 10)->default("m2");
            $table->double("giaTien");
            $table->string("maDonViGiaTien", 10)->default('VND');
            $table->text("moTa")->default('')->nullable();
            $table->text("thongTinPhapLy")->default('');
            $table->integer("soPhongNgu")->default(0)->nullable();
            $table->integer("soPhongVeSinh")->default(0)->nullable();
            $table->integer("soTang")->default(1)->nullable();
            $table->string("huongNha", 255)->nullable();
            $table->string("huongBanCong", 255)->nullable();
            $table->string("duongVao", 255)->nullable();
            $table->string("matTien", 255)->nullable();
            $table->string("noiThat", 255)->default('')->nullable();
            $table->tinyInteger("trangThai")->default(1);
            $table->string('tenLienHe')->nullable();
            $table->string('soDienThoai');
            $table->string('diaChiLienHe')->nullable();
            $table->string('emailLienHe')->nullable();
            $table->timestamps();
            $table->foreign('maTkKhachHang')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('maHangMuc')->references('id')->on('hangmuc')->onDelete('cascade');
            $table->foreign('maHinhThuc')->references('id')->on('hinhthuc')->onDelete('cascade');
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
