// -----------------------------------------------
//
// Layout -> Footer.js
// Desc: Footer for web app
//
// -----------------------------------------------

// -----------------------------------------------
// Imports

// React
import React from 'react';

// Material UI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// -----------------------------------------------

function Footer() {
	return (
		<footer className='footerContainer'>
			<AppBar position='static'>
				<Toolbar>
					<div className='createdByContainer'>
						<p>
							<a href='https://www.linkedin.com/in/salvadorvillalon/'>
								By Salvador Villalon
							</a>
						</p>
					</div>
					<div className='creditContainer'>
						<p>
							<a href='#'>Credit to Salvador Villalon</a>
						</p>
					</div>
				</Toolbar>
			</AppBar>
		</footer>
	);
}

export default Footer;
