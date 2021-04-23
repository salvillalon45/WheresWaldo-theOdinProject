// -----------------------------------------------
//
// GameImage -> GameImage.js
// Desc: Game Image component that will handle
// displaying image and handling clicks
//
// -----------------------------------------------

// -----------------------------------------------
// Imports

// React
import * as React from 'react';

// Components
import Dropdown from '../Dropdown';

// Images
import Background from '../../../images/background.jpg';
// -----------------------------------------------

function GameImage() {
	const [anchorEl, setAnchorEl] = React.useState(false);
	const [coords, setCoords] = React.useState([]);

	function handleClick(event) {
		console.log('Clicked');
		console.log(event);
		setAnchorEl(!anchorEl);
		let elem = document
			.querySelector('.gameImageContainer')
			.getBoundingClientRect();
		let top = elem.top + window.pageYOffset;
		let right = elem.right + window.pageXOffset;
		let bottom = elem.bottom + window.pageYOffset;
		let left = elem.left + window.pageXOffset;
		console.log({ top, right, bottom, left });
		const { pageX, pageY } = event;
		console.log({ pageX, pageY });
		setCoords([pageX, pageY]);
	}

	return (
		<div
			className='gameImageContainer'
			onClick={event => handleClick(event)}
		>
			{anchorEl && <Dropdown coords={coords} />}

			<img src={Background} alt='image background' />
		</div>
	);
}

export default GameImage;
