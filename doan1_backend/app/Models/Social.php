<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Social extends Model
{
    use HasFactory;
    protected $fillable = [
          'provider_user_id', 'provider',  'user'
    ];
 
    protected $primaryKey = 'id';
 	protected $table = 'social';

 	public function user(){
 	      return $this->belongsTo(User::class, 'user');
 	}

}
