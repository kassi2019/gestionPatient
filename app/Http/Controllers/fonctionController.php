<?php

namespace App\Http\Controllers;

use App\model\fonction;
use Illuminate\Http\Request;
use App\Repositories\Repository;

class fonctionController extends Controller
{
   protected $model;

    public function __construct(fonction $model){
        $this->model = new Repository($model);
        //$this->fonctions = $fonctions;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $this->model->all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
       
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    { 
       
		//$this->model->create($data);
       // return $this->model->create();
      return $this->model->create($request->only($this->model->getModel()->fillable));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Fonction  $Exemple
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return $this->model->show($id);

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Fonction  $exemple
     * @return \Illuminate\Http\Response
     */
    public function edit(Exemple $exemple)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Fonction  $exemple
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
         
          // update model and only pass in the fillable fields
        $this->model->update($request->only($this->model->getModel()->fillable), $id);

       return $this->model->show($id);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Fonction  $exemple
     * @return \Illuminate\Http\Response
     */
    public function destroy( $id)
    {
        
        return $this->model->delete($id);

    }
    
  
}
