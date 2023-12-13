import react, { useEffect, useState } from 'react'
import BookList from './BookList';
import Input from './Input';
import { TailSpin } from 'react-loader-spinner';

const Home = () => {
	const [term, setTerm] = useState('Anything');
	const [isLoading, setIsLoading] = useState(false);
	const [books, setBooks] = useState([]);
	const [rows, setRows] = useState([]);
	const [search, setSearch] = useState('');

	const [reload, setReload] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		fetch('/api/books')
			.then(response => response.json())
			.then(data => {
				console.log(data.reverse());
				setBooks(data);
				setRows(data)
			})
			.catch(error => console.log(error))
			.finally(() => setIsLoading(false));
	}, [reload]);

	useEffect(() => {
		console.log(search);
		setRows(
			books.filter(
				(book) =>
					book.title.toLowerCase().includes(search.toLocaleLowerCase())
					||
					book.authors.toLowerCase().includes(search.toLocaleLowerCase())
			)
		)
	}, [search])

	return (
		<div>
			<>
				<div className='header'>
					<div className='overlay'>
						<h2 className='Heading-text'>Books on {term}</h2>
						<Input search={search} setSearch={setSearch} />
					</div>
				</div>
				<div>
					{isLoading && (
						<div className='flex items-center justify-center mt-6 lg:mt-20'>
							<TailSpin size={4} color={'#a3a3a3'} />
						</div>
					)}
				</div>

				<div className='max-w-7xl mx-auto'>
					{!isLoading && <BookList reload={reload} setReload={setReload} books={rows} />}
				</div>
			</>
		</div>
	);
}

export default Home;
