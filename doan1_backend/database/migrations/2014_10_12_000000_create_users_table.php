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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->string('avatar', 255)->nullable();
            $table->unsignedBigInteger("maPhanQuyen")->default(2);
            $table->date("ngaySinh")->nullable();
            $table->string("diaChi", 255)->nullable();
            $table->tinyInteger("gioiTinh")->nullable();
            $table->string("soDienThoai", 10);
            $table->string("cmnd", 15)->nullable();
            $table->string('facebook', 255)->nullable();
            $table->tinyInteger("trangThai")->default(1);
            $table->unsignedBigInteger('maXaPhuong')->nullable();
            $table->rememberToken();
            $table->timestamps();
            $table->foreign('maPhanQuyen')->references('id')->on('phanquyen')->onDelete('cascade');
            // $table->foreign('maXaPhuong')->references('id')->on('xaPhuong')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
};
