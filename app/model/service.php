<?php

namespace App\model;

use Illuminate\Database\Eloquent\Model;

class service extends Model
{
   protected $table = 'services';

    public $timestamps = false;

    protected $guarded = ['id'];

   //relation entrer type text et acte creation

   

    // has many (Model::class, 'cle-etrangere', 'clé-locale')

    // belongsTo (Model::class, 'cle', 'autre-cle')
}
