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
        Schema::create('giaodich', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("maTkKhachHang");
            $table->double("donGia");
            $table->string("noiDung", 255)->default("noi dung giao dich");
            $table->timestamps();
            $table->tinyInteger("trangThai")->default(1);   
            $table->foreign('maTkKhachHang')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('giaodich');
    }
};
