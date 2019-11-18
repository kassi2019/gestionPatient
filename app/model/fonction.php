<?php

namespace App\model;

use Illuminate\Database\Eloquent\Model;

class fonction extends Model
{
   protected $table = 'fonctions';

    public $timestamps = false;

    protected $guarded = ['id'];

   //relation entrer type text et acte creation

   

    // has many (Model::class, 'cle-etrangere', 'clé-locale')

    // belongsTo (Model::class, 'cle', 'autre-cle')
}
