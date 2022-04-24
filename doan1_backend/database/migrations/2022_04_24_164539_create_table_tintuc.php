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
        Schema::create('tintuc', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("maTkNguoiDung");
            $table->unsignedBigInteger("maHangMuc");
            $table->string("tieuDe", 255)->default("tieu de tin tuc");
            $table->text("noiDung")->default("noi dung tin tuc");
            $table->timestamps();
            $table->foreign('maTkNguoiDung')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('maHangMuc')->references('id')->on('hangmuc')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tintuc');
    }
};
