// -----------------------------------------------
//
// GameImage -> GameImage.js
// Desc: Game Image component that will handle
// displaying image and handling clicks
//
// -----------------------------------------------

// -----------------------------------------------
// Imports

// React
import * as React from 'react';
// -----------------------------------------------

function Timer(props) {
	const { isGameOver } = props;
	const [timer, setTimer] = React.useState(0);

	React.useEffect(() => {
		let interval;

		if (isGameOver === false) {
			// Game Started! Start the timer
			// We use setInterval since we wants this to happen every second
			interval = setInterval(() => {
				setTimer(timer + 1);
			}, 1000);
		} else if (isGameOver) {
			// Player finished
			clearInterval(interval);
			setTimer(0);
		}

		return () => {
			clearInterval(interval);
		};
	}, [isGameOver]);

	return <>{timer}</>;
}

export default Timer;
