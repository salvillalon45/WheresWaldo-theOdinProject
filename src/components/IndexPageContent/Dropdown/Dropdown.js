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
// -----------------------------------------------

function Dropdown(props) {
	return (
		<div
			className='dropdownContainer'
			style={{
				left: props.coords[0],
				top: props.coords[1]
			}}
		>
			<ul>
				<li onClick={() => props.handleUserCharacterChoice('fin')}>
					Fin
				</li>
				<li onClick={() => props.handleUserCharacterChoice('pokeball')}>
					Pokeball
				</li>
				<li
					onClick={() =>
						props.handleUserCharacterChoice('megGriffin')
					}
				>
					Meg Griffin
				</li>
			</ul>
		</div>
	);
}

export default Dropdown;
