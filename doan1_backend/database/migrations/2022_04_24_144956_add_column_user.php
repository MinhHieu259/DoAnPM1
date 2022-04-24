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
        Schema::table('users', function (Blueprint $table) {
            $table->unsignedBigInteger("maPhanQuyen");
            $table->date("ngaySinh")->nullable();
            $table->string("diaChi", 255)->nullable();
            $table->tinyInteger("gioiTinh")->nullable();
            $table->string("soDienThoai", 10);
            $table->string("cmnd", 15);
            $table->double("soDuTaiKhoan")->default(0);
            $table->date("ngayHetHanTaiKhoan")->nullable();
            $table->tinyInteger("trangThai")->default(1);
            $table->foreign('maPhanQuyen')->references('id')->on('phanquyen')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn("maPhanQuyen");
            $table->dropColumn("ngaySinh");
            $table->dropColumn("diaChi", 255);
            $table->dropColumn("gioiTinh");
            $table->dropColumn("soDienThoai", 10);
            $table->dropColumn("cmnd", 15);
            $table->dropColumn("soDuTaiKhoan");
            $table->dropColumn("ngayHetHanTaiKhoan");
            $table->dropColumn("trangThai");
        });
    }
};
