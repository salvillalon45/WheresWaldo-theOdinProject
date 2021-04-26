// -----------------------------------------------
//
// Styling for GameModal
//
// -----------------------------------------------

// -----------------------------------------------
// Imports

//  Styled Components
import styled from 'styled-components';

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

export { ModalContent };
