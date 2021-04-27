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
		props.handleModalClose();

		if (gameStatus === 0) {
			props.handleIsGameOver(1);
		} else {
			props.handleIsGameOver(2);
		}
	}

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
						Start
					</button>
				</ModalContent>
			</Modal>
		</div>
	);
}

export default GameModal;
