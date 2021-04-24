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

// Util
import { getCoordsFromDB } from '../../../util/firebaseUtil';
import { checkInputCoords } from '../../../util/gameUtil';
// -----------------------------------------------

function GameImage() {
	const [showDropdown, setShowDropdown] = React.useState(false);
	const [dbCoords, setDBCoords] = React.useState(null);
	const [coords, setCoords] = React.useState([]);
	const [userCharacterChoice, setUserCharacterChoice] = React.useState('');

	function handleUserCharacterChoice(userInput) {
		setUserCharacterChoice(userInput);
	}

	function handleClick(event) {
		setShowDropdown(!showDropdown);
		// let elem = document
		// 	.querySelector('.gameImageContainer')
		// 	.getBoundingClientRect();
		// let top = elem.top + window.pageYOffset;
		// let right = elem.right + window.pageXOffset;
		// let bottom = elem.bottom + window.pageYOffset;
		// let left = elem.left + window.pageXOffset;
		// console.log({ top, right, bottom, left });
		// console.log(window);
		// console.log(window.innerWidth);
		const { pageX, pageY } = event;
		// console.log({ pageX, pageY });

		const x = Math.round((pageX / window.innerWidth) * 100);
		const y = Math.round((pageY / window.innerWidth) * 100);
		const userCoords = [x, y];
		// console.log({ x, y });

		setCoords([pageX, pageY]);

		if (userCharacterChoice.length > 0) {
			const result = checkInputCoords(
				userCoords,
				userCharacterChoice,
				dbCoords
			);
			console.log('RESULT ' + result);
		}
	}

	React.useEffect(async () => {
		const result = await getCoordsFromDB(1);
		setDBCoords(result);
	}, []);

	return (
		<div
			className='gameImageContainer'
			onClick={event => handleClick(event)}
		>
			{showDropdown && (
				<Dropdown
					handleUserCharacterChoice={handleUserCharacterChoice}
					coords={coords}
				/>
			)}

			<img src={Background} alt='image background' />
		</div>
	);
}

export default GameImage;
