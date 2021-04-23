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
				<li>Profile</li>
				<li>My account</li>
				<li>Logout</li>
			</ul>
		</div>
	);
}

export default Dropdown;
