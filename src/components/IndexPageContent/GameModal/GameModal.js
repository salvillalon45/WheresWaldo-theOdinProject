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
				<>
					<p>You found all characters! Submit your score!</p>

					<button
						type='button'
						onClick={event => handleModalAction(event)}
					>
						Submit
					</button>
				</>
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
