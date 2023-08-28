import React from 'react';

const Keypad = ({ handleKeypadClick, selectedSnack, selectedInput, showLoadingGif }) => {
	return (
		<div className="Keypad">
			<button onClick={() => handleKeypadClick('S')}>S</button>
			<button onClick={() => handleKeypadClick('D')}>D</button>
			<br />
			<button onClick={() => handleKeypadClick('1')}>1</button>
			<button onClick={() => handleKeypadClick('2')}>2</button>
		</div>
	);
};

export default Keypad;
