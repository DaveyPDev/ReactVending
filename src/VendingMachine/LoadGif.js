import React from 'react';

const LoadGif = ({ selectedSnack, selectedInput }) => {
	const combinedSnack = selectedSnack + selectedInput;
	console.log('Combined Snack:', combinedSnack);
	const gifMap = {
		S1 : 'https://media.tenor.com/Dvz9TQ4jhZYAAAAC/kevin-the-office.gif',
		S2 :
			'https://media3.giphy.com/media/3orieSZhqmslIgWTlu/200w.gif?cid=82a1493btg6g102n8offodi6ywgmji3gk2hx8rlxgzcb66y4&ep=v1_gifs_related&rid=200w.gif&ct=g',
		D1 : 'https://i.gifer.com/2srI.gif',
		D2 : 'https://i.gifer.com/L8n2.gif'
	};

	const gifUrl = gifMap[combinedSnack] || '';
	console.log('GIF URL:', gifUrl);
	return (
		<div className="Load-Gif-Container">
			{gifUrl ? <img src={gifUrl} alt="Loading" className="Load-Gif" /> : null}
		</div>
	);
};

export default LoadGif;
