// -----------------------------------------------
//
// GameModal -> GameModal.js
// Desc: Component that will show when the user starts
// or finishes finding all characters
//
// -----------------------------------------------

// -----------------------------------------------
// Imports

// React
import * as React from 'react';

// Material UI
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

//  Styled Components
import {
	ModalContent,
	CharactersContainer,
	CharacterImage,
	Character,
	FormInput
} from './styling';
import { GameButton } from '../../../styles/globalStyles';

// Util
import { pushToDatabase } from '../../../util/firebaseUtil';

// Images
import Aang from '../../../images/aang.png';
import Finn from '../../../images/finn.jpg';
import Pokeball from '../../../images/pokeball.png';
// -----------------------------------------------

function GameModal(props) {
	const { gameStatus, timer, userResultsDB } = props;
	const [userName, setUserName] = React.useState('');

	function handleModalAction(event) {
		event.stopPropagation();
		event.preventDefault();

		if (gameStatus === 0) {
			props.handleIsGameOver(1);
			props.handleModalClose();
		} else if (gameStatus === 1) {
			pushToDatabase(userName, timer);
			props.handleIsGameOver(2);
			props.handleGameStatus(2);
		}
	}

	function handleChange(event) {
		setUserName(event.target.value);
	}

	function buildTableRows() {
		return Object.entries(userResultsDB).map((userResult, index) => {
			const { userName, time } = userResult[1];

			return (
				<TableRow key={index}>
					<TableCell align='center' component='th' scope='row'>
						{userName}
					</TableCell>

					<TableCell align='center'>{time}</TableCell>
				</TableRow>
			);
		});
	}

	function showTable() {
		return (
			<TableContainer style={{ maxHeight: 300 }} component={Paper}>
				<Table stickyHeader aria-label='simple table'>
					<TableHead>
						<TableRow>
							<TableCell align='center'>User Name</TableCell>

							<TableCell align='center'>Time</TableCell>
						</TableRow>
					</TableHead>

					<TableBody>{buildTableRows()}</TableBody>
				</Table>
			</TableContainer>
		);
	}

	function renderModalContent() {
		let result = '';

		if (gameStatus === 0) {
			result = (
				<>
					<p className='xxLarge bold'>Welcome to Where's Waldow!</p>
					<p>Tag these characters as fast as you can!</p>
					<p>
						Scroll through the image to find the correct character.
					</p>
					<p>
						Click the character and choose the correct name. You
						will be timed and your score will be recorded, so move
						fast!
					</p>

					<CharactersContainer>
						<Character>
							<CharacterImage
								src={Aang}
								alt='Aang from Avatar: The Last Airbender'
							/>
							<p>Aang</p>
						</Character>

						<Character>
							<CharacterImage
								src={Finn}
								alt='Finn from Adventure Timer'
							/>
							<p>Finn</p>
						</Character>

						<Character>
							<CharacterImage
								src={Pokeball}
								alt='Pokeball from Pokemon'
							/>
							<p>Pokeball</p>
						</Character>
					</CharactersContainer>

					<GameButton
						type='button'
						onClick={event => handleModalAction(event)}
					>
						Start Game
					</GameButton>
				</>
			);
		} else if (gameStatus === 1) {
			result = (
				<form>
					<p className='xLarge bold'>
						You found all characters! <br /> Submit your score!
					</p>

					<p className='large'>Your time: {timer}</p>

					<FormInput className='formInputContainer'>
						<TextField
							id='outlined-basic'
							label='Enter Your Name'
							variant='outlined'
							onChange={event => handleChange(event)}
						/>

						<GameButton
							type='submit'
							id='submitButton'
							onClick={event => handleModalAction(event)}
						>
							Submit
						</GameButton>
					</FormInput>

					<div className='resultsContainer'>
						<p className='xxLarge bold'>High Scores</p>
						{showTable()}
					</div>
				</form>
			);
		} else {
			result = (
				<>
					<p className='xxLarge bold'>Thanks for playing!</p>

					<div className='resultsContainer'>
						<p className='xxLarge bold'>High Scores</p>
						{showTable()}
					</div>
				</>
			);
		}

		return result;
	}

	React.useEffect(() => {
		renderModalContent();
	});

	return (
		<div>
			<Modal
				open={props.open}
				aria-labelledby='simple-modal-title'
				aria-describedby='simple-modal-description'
			>
				<ModalContent className='modalContentContainer'>
					{renderModalContent()}
				</ModalContent>
			</Modal>
		</div>
	);
}

export default GameModal;
