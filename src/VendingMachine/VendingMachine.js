import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadGif from './LoadGif';

const VendingMachine = () => {
	const [ selectedSnack, setSelectedSnack ] = useState('');
	const [ selectedInput, setSelectedInput ] = useState('');
	const [ showLoadingGif, setShowLoadingGif ] = useState(false);
	const navigate = useNavigate();

	// handle item keypad input ... move to its own component
	const handleKeypadClick = (key) => {
		console.log('Key:', key);
		console.log('Selected Snack:', selectedSnack);
		console.log('Selected Input:', selectedInput);
		if (!showLoadingGif) {
			if (selectedInput.length === 0) {
				if (key === 'S' || key === 'D') {
					setSelectedSnack(key);
					setSelectedInput(key);
				}
			}
			else if (selectedInput.length === 1 && (key === '1' || key === '2')) {
				setSelectedInput(key);

				setTimeout(() => {
					let snackRoute = '';
					let numberKey = key;

					if (selectedSnack === 'S') {
						snackRoute = 'snack' + numberKey;
					}
					else if (selectedSnack === 'D') {
						snackRoute = 'drink' + numberKey;
					}

					// show gif based on selection
					console.log('VendingMachine - Selected Snack:', selectedSnack);
					console.log('VendingMachine - Selected Input:', selectedInput);

					if (snackRoute) {
						setShowLoadingGif(true);
						setTimeout(() => {
							setShowLoadingGif(false);
							navigate(`/${snackRoute}`);
						}, 2250);
					}
				}, 1250);
			}
		}
	};

	return (
		<div className="Vending-Machine-Container">
			{showLoadingGif ? (
				<LoadGif selectedSnack={selectedSnack} selectedInput={selectedInput} />
			) : (
				<div>
					<div>
						<ul>
							<li>S1 - Doritos Nacho</li>
							<li>S2 - Cheeto - Flammin' Hot</li>
							<li>D1 - Gatorade - Lemon-Lime</li>
							<li>D2 - Pure Leaf - Unsweetened Tea</li>
						</ul>
					</div>
					<div className="Image-Container">
						<img
							src="https://images.unsplash.com/photo-1625650484478-113df4bfc370?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2187&q=80"
							alt="Vending Machine"
							className="Vending-Machine-Image"
						/>
					</div>
					<div className="Right-Container">
						<div className="SelectedInput">
							<p>{selectedInput}</p>
						</div>
						<div className="Keypad">
							<button onClick={() => handleKeypadClick('S')}>S</button>
							<button onClick={() => handleKeypadClick('D')}>D</button>
							<br />
							<button onClick={() => handleKeypadClick('1')}>1</button>
							<button onClick={() => handleKeypadClick('2')}>2</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default VendingMachine;
