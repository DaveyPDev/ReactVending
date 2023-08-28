import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VendingMachine from './VendingMachine/VendingMachine';
import Snack1 from './SnackTime/Snack1';
import Snack2 from './SnackTime/Snack2';
import Drink1 from './SnackTime/Drink1';
import Drink2 from './SnackTime/Drink2';
import './App.css';
import './Fonts/Fonts.css';

function App () {
	return (
		<Router>
			<div className="App">
				<Routes>
					<Route path="/" element={<VendingMachine />} />
					<Route path="/snack1" element={<Snack1 />} />
					<Route path="/snack2" element={<Snack2 />} />
					<Route path="/drink1" element={<Drink1 />} />
					<Route path="/drink2" element={<Drink2 />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
