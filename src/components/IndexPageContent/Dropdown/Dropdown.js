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
import { DropdownItem, DropdownContainer, DropdownMenu } from './styling';
// -----------------------------------------------

function Dropdown(props) {
	function handleCharacterChoice(event, character) {
		event.stopPropagation();
		event.preventDefault();
		props.handleUserCharacterChoice(character);
	}

	function renderDropdownItems() {
		return props.characters.map((character, index) => {
			return (
				<DropdownItem
					key={index}
					onClick={event => handleCharacterChoice(event, character)}
				>
					{character}
				</DropdownItem>
			);
		});
	}

	return (
		<DropdownContainer
			className='dropdownContainer'
			style={{
				left: props.coords[0],
				top: props.coords[1]
			}}
		>
			<DropdownMenu>{renderDropdownItems()}</DropdownMenu>
		</DropdownContainer>
	);
}

export default Dropdown;
