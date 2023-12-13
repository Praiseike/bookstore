<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Http;
use App\Models\Book;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        $response = Http::get('https://www.dbooks.org/api/recent');
        $data = $response->json();

        $books = $data['books'];
        foreach($books as $book){

            Book::create([
                'title'=>$book['title'],
                'image'=>$book['image'],
                'authors'=>$book['authors'],
                'pages'=>substr($book['id'],0,3),
                'isbn' => $book['id']
            ]);

        }




        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
