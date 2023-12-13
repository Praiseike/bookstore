import React from 'react'
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import NotFound from './components/NotFound';
import Add from './components/Add';
import Edit from './components/Edit';

const App = () => {
	return (
		<div>
			<Router>

				<Routes>
					<Route path='/' element={<Home />}></Route>
					<Route path='/add' element={<Add />}></Route>
					<Route path='/Edit' element={<Edit />}></Route>
					<Route path='*' element={<NotFound />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App

