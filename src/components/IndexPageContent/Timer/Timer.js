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

import StopWatch from './stopwatch';
// -----------------------------------------------

function Timer(props) {
	const { isGameOver } = props;
	const [timer, setTimer] = React.useState(0);
	const watch = StopWatch();

	React.useEffect(() => {
		console.log('INSIDE TIMER USE EFFECT()');
		let interval;

		if (isGameOver === 1) {
			// Game Started! Start the timer
			// We use setInterval since we wants this to happen every second
			interval = setInterval(() => {
				setTimer(timer => timer + 1);
			}, 1000);
			console.log(watch.start());
		} else if (isGameOver === 2) {
			// Player finished
			clearInterval(interval);
			setTimer(0);
			console.log(watch.stop());
		}

		return () => {
			clearInterval(interval);
		};
	}, [isGameOver]);

	console.log(watch.duration());

	return <>{timer}</>;
}

export default Timer;
