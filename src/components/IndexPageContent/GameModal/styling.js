// -----------------------------------------------
//
// Styled Components for GameModal
//
// -----------------------------------------------

import styled from 'styled-components';

const ModalContent = styled.div`
	position: absolute;
	width: 400;
	background-color: var(--darkBlue);
	color: white;
	border-radius: 25px;
	text-align: center;
	box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%),
		0px 5px 8px 0px rgb(0 0 0 / 14%), 0px 1px 14px 0px rgb(0 0 0 / 12%);
	padding: 16px 32px 24px;
	top: 55%;
	left: 51%;
	-webkit-transform: translate(-55%, -51%);
	-ms-transform: translate(-55%, -51%);
	transform: translate(-55%, -51%);
	&:focus-visible {
		outline: none;
	}
`;

const CharactersContainer = styled.div`
	display: flex;
	justify-content: space-around;
	margin-bottom: 20px;
`;

const Character = styled.div`
	background-color: var(--white);
	border-radius: 20px;
	padding: 20px;
	color: var(--black);
	font-weight: bold;
`;

const CharacterImage = styled.img`
	width: 106px;
	height: 94px;
	object-fit: contain;
`;

const FormInput = styled.div`
	display: flex;
	flex-direction: column;
`;

export {
	FormInput,
	ModalContent,
	CharactersContainer,
	Character,
	CharacterImage
};
