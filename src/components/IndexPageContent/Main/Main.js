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
import CharacterChoiceResult from '../CharacterChoiceResult';
import GameModal from '../GameModal';
import GameImage from '../GameImage';
import Header from '../../Layout/Header';
import Footer from '../../Layout/Footer';

// Util
import { getCoordsFromDB } from '../../../util/firebaseUtil';
import {
	checkInputCoords,
	print,
	removeCharacter
} from '../../../util/gameUtil';
// -----------------------------------------------

function Main(props) {
	const [showDropdown, setShowDropdown] = React.useState(false);
	const [dbCoords, setDBCoords] = React.useState(null);
	const [styleCoords, setStyleCoords] = React.useState([]);
	const [userCoords, setUserCoords] = React.useState([]);
	const [userCharacterChoice, setUserCharacterChoice] = React.useState('');
	const [characterSelected, setCharacterSelect] = React.useState(false);
	const [choiceStatus, setChoiceStatus] = React.useState(false);
	const [open, setOpen] = React.useState(false);
	const [characters, setCharacters] = React.useState([]);
	const [gameStatus, setGameStatus] = React.useState(0);
	const [isGameOver, setIsGameOver] = React.useState('');
	const [timer, setTimer] = React.useState(0);

	function handleUserCharacterChoice(userInput) {
		setUserCharacterChoice(userInput);
		setCharacterSelect(!characterSelected);
		setShowDropdown(!showDropdown);
	}

	function handleClick(event) {
		print('Inside handleClick');
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
		// console.log(window.innerWidth);]
		const { pageX, pageY } = event;
		console.log({ pageX, pageY });

		const x = Math.round((pageX / window.innerWidth) * 100);
		const y = Math.round((pageY / window.innerWidth) * 100);
		setUserCoords([x, y]);
		console.log({ x, y });

		setStyleCoords([pageX, pageY]);
	}

	function checkCharacterChoice() {
		if (characterSelected) {
			print('Character has been selected');

			console.log('userCharacterChoice:: ' + userCharacterChoice);
			const result = checkInputCoords(
				userCoords,
				userCharacterChoice,
				dbCoords
			);

			console.log('RESULT ' + result);

			if (result) {
				setChoiceStatus(true);
				removeCharacter(userCharacterChoice, characters);
			} else {
				setChoiceStatus(false);
			}

			setCharacterSelect(!characterSelected);
			// setUserCharacterChoice('');
		}
	}

	function handleSetTimer(value) {
		setTimer(value => value + 1);
	}

	function handleIsGameOver(value) {
		console.log('Inside handleGameOVer');
		setIsGameOver(value);
	}

	function handleGameStatus(value) {
		setGameStatus(value);
	}

	function handleModalOpen() {
		console.log('GOING TO OPEn');
		setOpen(true);
	}

	function handleModalClose() {
		setOpen(false);
	}

	async function getDataFromDB() {
		const result = await getCoordsFromDB(1);
		setDBCoords(result);
		setCharacters(Object.keys(result));
	}

	function renderCharacterChoiceResult() {
		let result = '';
		// const characterChoiceResultContainer = document;
		if (choiceStatus) {
			result = (
				<CharacterChoiceResult
					userCharacterChoice={userCharacterChoice}
				/>
			);
		} else if (choiceStatus === false && userCharacterChoice) {
			result = <CharacterChoiceResult userCharacterChoice={''} />;
		}

		return result;
	}

	React.useEffect(async () => {
		handleModalOpen();
		getDataFromDB();
	}, []);

	React.useEffect(() => {
		checkCharacterChoice();
	});

	React.useEffect(() => {
		console.log('USE EFFECT FOR GAME OVER CHECK');
		console.log(characters.length);

		if (characters.length === 0 && dbCoords) {
			console.log('FINISHED');
			console.log(document.getElementById('timer'));
			props.handleIsGameOver(true);
			handleModalOpen();
			setGameStatus(1);
		}
	}, [characters.length !== 0]);

	return (
		<>
			<Header isGameOver={isGameOver} />

			<main>
				<section>
					<div
						className='gameImageContainer'
						onClick={event => handleClick(event)}
					>
						<GameModal
							open={open}
							handleModalClose={handleModalClose}
							handleIsGameOver={handleIsGameOver}
							gameStatus={gameStatus}
							handleGameStatus={handleGameStatus}
						/>

						{renderCharacterChoiceResult()}

						{showDropdown && (
							<Dropdown
								handleUserCharacterChoice={
									handleUserCharacterChoice
								}
								coords={styleCoords}
								characters={characters}
							/>
						)}

						<GameImage />
					</div>
				</section>
			</main>

			<Footer />
		</>
	);
}

export default Main;
