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

//  Styled Components
import styled from 'styled-components';
import { ModalContent } from './styling';
// -----------------------------------------------

function GameModal(props) {
	const { gameStatus } = props;

	function handleModalAction(event) {
		event.stopPropagation();
		event.preventDefault();

		if (gameStatus === 0) {
			props.handleIsGameOver(1);
			props.handleModalClose();
		} else if (gameStatus === 1) {
			props.handleIsGameOver(2);
			props.handleGameStatus(2);
		}
	}

	function renderModalContent() {
		let result = '';

		if (gameStatus === 0) {
			result = (
				<>
					<p>Welcome to Where's Waldow!</p>
					<p>Tag these characters as fast as you can!</p>
					<p>
						Scroll through the image to find the correct character.
					</p>
					<p>
						Click the character and choose the correct name. You
						will be timed and your score will be recorded, so move
						fast!
					</p>

					<button
						type='button'
						onClick={event => handleModalAction(event)}
					>
						Start Game
					</button>
				</>
			);
		} else if (gameStatus === 1) {
			result = (
				<form>
					<p>You found all characters! Submit your score!</p>

					<button
						type='button'
						onClick={event => handleModalAction(event)}
					>
						Submit
					</button>
				</form>
			);
		} else {
			result = (
				<>
					<p>Thanks for playing!</p>
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
				<ModalContent>{renderModalContent()}</ModalContent>
			</Modal>
		</div>
	);
}

export default GameModal;
