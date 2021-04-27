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

// Components
import Timer from '../../IndexPageContent/Timer';

// Material UI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

// Images
import Waldo from '../../../images/waldo.jpg';
import Wenda from '../../../images/wenda.jpg';
// -----------------------------------------------

function Header(props) {
	const { isGameOver } = props;

	return (
		<header>
			<nav>
				<div className='headerContainer'>
					<AppBar position='static'>
						<Toolbar>
							<div className='charactersContainer'>
								<div className='character'>
									<Avatar
										src={Waldo}
										variant='square'
										className='square'
									/>

									<Typography
										variant='h6'
										// className={classes.title}
									>
										Waldo
									</Typography>
								</div>

								<div className='character'>
									<Avatar
										src={Wenda}
										variant='square'
										className='square'
									/>

									<Typography
										variant='h6'
										// className={classes.title}
									>
										Wenda
									</Typography>
								</div>
							</div>

							<div className='timeContainer'>
								<Typography
									variant='h6'
									// className={classes.title}
								>
									<Timer isGameOver={isGameOver} />
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
