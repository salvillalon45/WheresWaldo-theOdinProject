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
		<ul
			style={{
				position: 'absolute',
				left: props.coords[0],
				top: props.coords[1]
			}}
		>
			<li>Profile</li>
			<li>My account</li>
			<li>Logout</li>
		</ul>
	);
}

export default Dropdown;
