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
				<Toolbar className='footerInfoContainer'>
					<div className='footerInfo'>
						<p className='xLarge'>
							<a href='https://www.linkedin.com/in/salvadorvillalon/'>
								By Salvador Villalon
							</a>
						</p>
					</div>
					<div className='footerInfo'>
						<p className='xLarge'>
							<a href='https://www.instagram.com/ad.2.222/'>
								Image by Egor Klyuchnyk
							</a>
						</p>
					</div>
				</Toolbar>
			</AppBar>
		</footer>
	);
}

export default Footer;
