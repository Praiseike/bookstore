import { useNavigate } from 'react-router-dom';

const Add = () => {

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    fetch('/api/books', {
      method: 'POST',
      body: formdata
    })
      .then(response => response.json())
      .then(data => {
        navigate('/');
        console.log(data);
      })
  }

  return (
    <div class="flex justify-center">
      <form onSubmit={handleSubmit} class="w-full sm:w-[30%] mt-24">
        <h1 className="font-bold py-4 text-xl text-center">Add a new book</h1>
        <div className="flex flex-col mb-4">
          <label htmlFor="">Title</label>
          <input required name='title' type="text" className="border  rounded px-3 py-2 outline-none" />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="">Authors</label>
          <input required name='authors' type="text" className="border  rounded px-3 py-2 outline-none" />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="">ISBN</label>
          <input required name='isbn' type="text" className="border  rounded px-3 py-2 outline-none" />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="">Pages</label>
          <input required name='pages' type="number" className="border  rounded px-3 py-2 outline-none" />
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white py-2 font-bold text-lg">
          Add book
        </button>
      </form>
    </div>
  );
}

export default Add;
