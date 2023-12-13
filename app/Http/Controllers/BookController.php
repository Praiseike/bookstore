<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Log;
use App\Models\Book;
use Illuminate\Http\Request;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $books = Book::all();
        return response()->json($books);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // $data = $request->validate([
        //     'isbn' => 'string|required',
        //     'title' => 'string|required',
        //     'pages' => 'int|required',
        //     'authos' => 'string|required'
        // ]);

        $data = $request->all();
        if($data){
            Book::create([
                'isbn' => $data['isbn'],
                'title'=> $data['title'],
                'pages' => $data['pages'],
                'authors'=>$data['authors'],
                'image' => ''
            ]);
            
        }

        return response()->json(['status'=>'success']);
    }

    /**
     * Display the specified resource.
     */
    public function show(Book $book)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Book $book)
    {
        //

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {

        $id = $request->input('id');
        $book = Book::find($id);
    

        if($book){            
            $book->update($request->all());
            return response()->json(['status'=>'success']);            
        }
        return response()->json(['status'=>'cannot update book']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $book = Book::find($id);
        if($book){
            $book->delete();
            return response()->json(['status'=>'success']);
        }
        return response()->json(['status'=>'book does not exist']);

    }
}
