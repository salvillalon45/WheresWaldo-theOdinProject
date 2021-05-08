// -----------------------------------------------
//
// Layout -> Layout.js
// Desc: Layout component that queries for data
//
// -----------------------------------------------

// -----------------------------------------------
// Imports

// React
import * as React from 'react';

// Styling
import '../../styles/global.scss';
// -----------------------------------------------

function Layout(props) {
	const { children } = props;

	return (
		<>
			<>{children}</>
		</>
	);
}

export default Layout;
