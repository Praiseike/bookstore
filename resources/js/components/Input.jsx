import React, { useState } from 'react';

const Input = ({ search, setSearch }) => {
	// create a function to handle submit
	const handleSubmit = (e) => {
		e.preventDefault();
	};


	return (
		<div>
			<form onSubmit={handleSubmit} className="flex items-center ">
				<input
					type='text'
					placeholder='type here...'
					autoComplete='off'
					value={search}
					className='px-3 py-2 outline-none w-full text-gray-500'
					onChange={(e) => setSearch(e.target.value)}
				/>
				<button type='submit' className='px-3 py-2 bg-neutral-700'>
					search
				</button>
			</form>
		</div>
	);
};

export default Input;
