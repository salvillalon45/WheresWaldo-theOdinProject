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
// -----------------------------------------------

function Header(props) {
	const { isGameOver } = props;

	return (
		<header>
			<nav>
				<div className='headerContainer'>
					<AppBar position='static'>
						<Toolbar>
							<div className='logoContainer'>
								<h1>The Odin Project: Where's Waldo</h1>
							</div>

							<div className='timeContainer'>
								<p className='xLarge'>
									<Timer
										timer={props.timer}
										handleSetTimer={props.handleSetTimer}
										isGameOver={isGameOver}
									/>
								</p>
							</div>
						</Toolbar>
					</AppBar>
				</div>
			</nav>
		</header>
	);
}

export default Header;
