import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ title, imageUrl, backLink }) => {
	return (
		<div>
			<h2>{title}</h2>
			<img src={imageUrl} alt={title} className="img-container" />
			<br />
			<Link to={backLink}>Back to Vending Machine</Link>
		</div>
	);
};

export default Item;
