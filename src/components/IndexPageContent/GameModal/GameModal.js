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
// -----------------------------------------------

function GameModal() {
	const [open, setOpen] = React.useState(false);
	// function rand() {
	//     return Math
	// }

	const ModalContent = styled.div`
		position: absolute;
		width: 400;
		backgroundcolor: red;
		border: 2px solid blue;
		boxshadow: 0px 3px 5px -1px rgb(0 0 0 / 20%),
			0px 5px 8px 0px rgb(0 0 0 / 14%), 0px 1px 14px 0px rgb(0 0 0 / 12%);
		padding: 16px 32px 24px;
		top: 55%;
		left: 51%;
		transform: translate(-55%, -51%);
	`;

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<button type='button' onClick={handleOpen}>
				Open Modal
			</button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='simple-modal-title'
				aria-describedby='simple-modal-description'
			>
				<ModalContent>HEOL </ModalContent>
			</Modal>
		</div>
	);
}

export default GameModal;
