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
        Schema::create('quanHuyen', function (Blueprint $table) {
            $table->id();
            $table->string('tenQuanHuyen');
            $table->unsignedBigInteger('maTinhThanh');
            $table->timestamps();
            $table->foreign('maTinhThanh')->references('id')->on('tinhThanh')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('quanHuyen');
    }
};
