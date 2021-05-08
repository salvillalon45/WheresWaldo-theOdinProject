// -----------------------------------------------
//
// util -> gameUtil.js
// Desc: Functions to help play the game
//
// -----------------------------------------------

function print(statement) {
	console.log('---------------------------------');
	console.log(statement);
	console.log('---------------------------------');
}

function checkInputCoords(userCoords, userCharacterChoice, dbCoords) {
	const userX = userCoords[0];
	const userY = userCoords[1];
	const dbX = dbCoords[userCharacterChoice].x;
	const dbY = dbCoords[userCharacterChoice].y;
	console.log(userCharacterChoice);
	console.log({ userX });
	console.log({ userY });
	console.log({ dbX });
	console.log({ dbY });

	if (
		userX >= dbX[0] &&
		userX <= dbX[1] &&
		userY >= dbY[0] &&
		userY <= dbY[1]
	) {
		console.log(userCharacterChoice + ' FOUND');
		return true;
	} else {
		return false;
	}
}

function removeCharacter(userCharacterChoice, characters) {
	characters.splice(characters.indexOf(userCharacterChoice), 1);
}

function formatTime(time) {
	// slice(-2) extracts the last two elements in the sequence.
	const seconds = `0${Math.round(time % 60)}`.slice(-2);
	const minutes = `${Math.floor(time / 60)}`;
	const showMinutes = `0${minutes % 60}`.slice(-2);
	const hours = `0${Math.floor(time / 3600)}`.slice(-2);
	return `${hours}:${showMinutes}:${seconds}`;
}

function orderUserResults(userResults) {
	// Help from https://flaviocopes.com/how-to-sort-array-of-objects-by-property-javascript/
	return userResults.sort((a, b) => (a.time > b.time ? 1 : -1));
}

export {
	orderUserResults,
	checkInputCoords,
	print,
	removeCharacter,
	formatTime
};
