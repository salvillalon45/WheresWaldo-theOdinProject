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
	const [buttonMessage, setButtonMessage] = React.useState('');

	function handleModalAction(event) {
		event.stopPropagation();
		event.preventDefault();

		if (gameStatus === 0) {
			props.handleIsGameOver(1);
			props.handleModalClose();
		} else {
			props.handleIsGameOver(2);
			props.handleGameStatus(0);
		}
	}

	function renderModalContent() {
		console.log({ gameStatus });
		if (gameStatus === 0) {
			setButtonMessage('Start Game');
		} else {
			setButtonMessage('Submit');
		}
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
				<ModalContent>
					HEOL
					<button
						type='button'
						onClick={event => handleModalAction(event)}
					>
						{buttonMessage}
					</button>
				</ModalContent>
			</Modal>
		</div>
	);
}

export default GameModal;
