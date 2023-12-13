import react, { useEffect, useState } from 'react'
import BookList from './BookList';
import Input from './Input';
import { Circles, TailSpin } from 'react-loader-spinner';
import { useLocation, useNavigate } from 'react-router-dom';

const Edit = () => {

  const navigate = useNavigate();

  const location = useLocation();
  const { book } = location.state;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    formdata.append('_method','PUT');
    fetch(`/api/books-update`, {
      method: 'POST',
      body: formdata
    })
      .then(response => response.json())
      .then(data => {
        navigate('/');
        console.log(data);
      })
      .catch((error) => console.log(error))
  }

  return (
    <div class="flex justify-center">
      <form onSubmit={handleSubmit} class="w-full sm:w-[30%] mt-24">
        <h1 className="font-bold py-4 text-xl text-center">Edit book</h1>
        <input type="hidden" name="id" value={book.id} />
        <div className="flex flex-col mb-4">
          <label htmlFor="">Title</label>
          <input name='title' defaultValue={book.title} type="text" className="border  rounded px-3 py-2 outline-none" />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="">Authors</label>
          <input name='authors' defaultValue={book.authors} type="text" className="border  rounded px-3 py-2 outline-none" />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="">ISBN</label>
          <input name='isbn' defaultValue={book.isbn} type="text" className="border  rounded px-3 py-2 outline-none" />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="">Pages</label>
          <input name='pages' defaultValue={book.pages} type="text" className="border  rounded px-3 py-2 outline-none" />
        </div>

        <button className="w-full bg-blue-500 text-white py-2 font-bold text-lg">
          Edit book
        </button>
      </form>
    </div>
  );
}

export default Edit;
