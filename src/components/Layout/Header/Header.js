// -----------------------------------------------
//
// Components -> Header.js
// Desc: Header for web app
//
// -----------------------------------------------

// -----------------------------------------------
// Imports

// React
import React from 'react';

// Gatsby
import { Link } from 'gatsby';

// Bootstrap
// import Navbar from 'react-bootstrap/NavBar';
// import Nav from 'react-bootstrap/Nav';

// Material UI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Typography';

// Images
import Pic1 from '../../../images/waldo.jpg';
// -----------------------------------------------

function Header() {
	return (
		<header>
			<nav>
				<div className='headerContainer'>
					<AppBar position='static'>
						<Toolbar>
							<div className='charactersContainer'>
								<div className='character'>
									<Avatar
										src={Pic1}
										variant='square'
										className='square'
									>
										N
									</Avatar>
									<Typography
										variant='h6'
										// className={classes.title}
									>
										News
									</Typography>
								</div>
							</div>

							<div className='timeContainer'>
								<Typography
									variant='h6'
									// className={classes.title}
								>
									HOLA
									{/* {new Date()} */}
								</Typography>
							</div>
						</Toolbar>
					</AppBar>
				</div>
			</nav>
		</header>
	);
}

export default Header;
