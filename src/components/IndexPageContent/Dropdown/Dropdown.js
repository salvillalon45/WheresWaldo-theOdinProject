// -----------------------------------------------
//
// Dropdown -> Dropdown.js
// Desc: Dropdown component that will handle
// displaying the characters to select
//
// -----------------------------------------------

// -----------------------------------------------
// Imports

// React
import * as React from 'react';

//  Styled Components
import styled from 'styled-components';
// -----------------------------------------------

function Dropdown(props) {
	function handleCharacterChoice(event, character) {
		event.stopPropagation();
		event.preventDefault();
		props.handleUserCharacterChoice(character);
	}

	function renderDropdownItems() {
		return props.characters.map(character => {
			return (
				<li onClick={event => handleCharacterChoice(event, character)}>
					{character}
				</li>
			);
		});
	}

	// const Li = styled.Li`
	// 	font-size: 1.5em;
	// 	text-align: center;
	// 	color: palevioletred;
	// 	display: flex;
	// 	position: fixed;
	// 	padding-top: 6px;
	// 	padding-bottom: 6px;
	// 	padding-left: 8px;
	// 	padding-right: 8px;
	// 	border-radius: 10px;
	// 	left: 50%;
	// 	top: 12%;
	// 	transform: translate(-50%, 0);
	// 	font-size: calc((0.2em + 1vmin) + (0.2em + 1vmax));
	// 	background: #22222c;
	// `;

	return (
		<div
			className='dropdownContainer'
			style={{
				left: props.coords[0],
				top: props.coords[1]
			}}
		>
			<ul>
				{/* <li onClick={event => handleCharacterChoice(event, 'fin')}>
					Fin
				</li>

				<li onClick={event => handleCharacterChoice(event, 'pokeball')}>
					Pokeball
				</li>

				<li
					onClick={event =>
						handleCharacterChoice(event, 'megGriffin')
					}
				>
					Meg Griffin
				</li> */}
				{renderDropdownItems()}
			</ul>
		</div>
	);
}

export default Dropdown;
