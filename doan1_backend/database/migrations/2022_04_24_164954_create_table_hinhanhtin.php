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
        Schema::create('hinhanhtintuc', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("maTinTuc");
            $table->string("hinhAnh", 255)->default('');
            $table->timestamps();
            $table->foreign('maTinTuc')->references('id')->on('tintuc')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('hinhanhtintuc');
    }
};
