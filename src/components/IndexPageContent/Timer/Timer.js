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

// Util
import { formatTime } from '../../../util/gameUtil';
// -----------------------------------------------

function Timer(props) {
	const { isGameOver, timer } = props;

	React.useEffect(() => {
		let interval;

		if (isGameOver === 1) {
			// Game Started! Start the timer
			// We use setInterval since we wants this to happen every second
			interval = setInterval(() => {
				// setTimer(timer => timer + 1);
				props.handleSetTimer(1);
			}, 1000);
		} else if (isGameOver === 2) {
			// Player finished
			clearInterval(interval);
			props.handleSetTimer(0);
		}

		return () => {
			clearInterval(interval);
		};
	}, [isGameOver]);

	return <>{formatTime(timer)}</>;
}

export default Timer;
