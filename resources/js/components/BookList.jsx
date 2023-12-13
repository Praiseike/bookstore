import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import defaultCover from '../img/book-cover.png';

const DeleteBookModal = ({ reload, setReload, book, setModal }) => {
	const handleDelete = () => {
		fetch(`/api/books/${book.id}`, {
			method: 'delete'
		})
			.then(response => response.json())
			.then(data => {
				alert("deleted " + book.title);
				setReload(!reload)
			})
			.catch(error => {
				alert("failed to delete book");
			})
		closeModal();
	}

	const closeModal = () => setModal(false);


	return (
		<div className="fixed inset-0 bg-[rgba(0,0,0,0.3)] flex justify-center ">
			<div className="mt-10 w-1/3 flex flex-col h-[10rem] bg-white rounded-lg p-5 justify-between">
				<h1 className="font-bold text-xl">Delete book</h1>
				<h2>Are you sure you want to delete this book?</h2>
				<div className='h-7 flex justify-end space-x-2'>
					<button className="text-white px-4 bg-blue-500" onClick={() => setModal(closeModal)}>cancel</button>
					<button className="text-white px-4 bg-red-500" onClick={handleDelete}>delete</button>
				</div>
			</div>
		</div>
	);
}


const BookItem = ({ reload, setReload, book }) => {
	const navigate = useNavigate();
	const handleEdit = () => {
		navigate('/edit', { state: { book: book } });
	}

	const [modal, setModal] = useState(false);
	return (
		<>
			{modal && <DeleteBookModal reload={reload} setReload={setReload} setModal={setModal} book={book} />}
			<div className="flex border border-grey-50 w-fit mx-auto rounded-lg space-x-4 shadow overflow-hidden">
				<div className="w-[10rem]">
					{
						book.image !== '' ?
							<img src={book.image} className="w-full" alt="" />
							:
							<img src={defaultCover} className="w-full bg-gray-300" alt="" />
					}
				</div>
				<div className="py-5 flex flex-col justify-between">
					<div className='space-y-2 pe-5 w-[40em]'>

						<h2 className="font-bold text-xl underline">{book.title}</h2>
						<p className="text-blue-500 capitalize">{book.authors}</p>
						<p><b>ISBN:</b> {book.isbn}</p>
						<p><b>No. Pages: </b> {book.pages}</p>
					</div>

					<div className='h-7 flex justify-end'>
						<button className="text-blue-500 px-4" onClick={handleEdit}>edit</button>
						<button className="text-red-500 px-4" onClick={() => setModal(true)} >delete</button>
					</div>
				</div>

			</div >
		</>
	);
}


const BookList = ({ reload, setReload, books }) => {

	return (
		<div className=' w-fit mx-auto mt-10 mb-24'>
			<div className=" py-2 pb-4 flex justify-end">
				<Link to="/add" className="bg-blue-500 rounded text-white px-4 py-2">Add Book</Link>
			</div>
			<ul className="space-y-4">
				{
					books?.map((book, index) =>
						<li key={index}>
							<BookItem reload={reload} setReload={setReload} book={book} />
						</li>
					)
				}
			</ul>
		</div>
	);
}

export default BookList
