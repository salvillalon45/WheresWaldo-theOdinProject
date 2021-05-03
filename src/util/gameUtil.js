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
	// console.log(userCharacterChoice);
	// console.log({ userX });
	// console.log({ userY });
	// console.log({ dbX });
	// console.log({ dbY });

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
	// }
	// 	if (userX >= dbX[0] && userX <= 66 && userY >= 374 && userY <= 378) {
	// 		console.log('FIN');
	// 	}
	// }

	// if (userCharacterChoice === 'megGriffin') {
	// 	if (userX >= dbX[0] && userX <= 45 && userY >= 294 && userY <= 297) {
	// 		console.log('MEG GRIFFIN');
	// 	}
	// }
	// if (userCharacterChoice === 'fin') {
}

function removeCharacter(userCharacterChoice, characters) {
	characters.splice(characters.indexOf(userCharacterChoice), 1);
}

function resetMessage() {
	console.log('Inside resetMessage()');
	// const characterChoiceResultContainer = document.querySelector(
	// 	'.characterChoiceResultContainer'
	// );
	// characterChoiceResultContainer.style.display = 'block';

	const timerID = setTimeout(function () {
		console.log('Inside timeOUt');
		// characterChoiceResultContainer.style.display = 'none';
		return 'test';
	}, 2000);

	console.log({ timerID });
	// console.log('Going to display block');

	// clearTimeout(timerID);
}

function formatTime(time) {
	// slice(-2) extracts the last two elements in the sequence.
	// console.log({ time });
	const seconds = `0${Math.round(time % 60)}`.slice(-2);
	// console.log(`0${Math.round(time % 60)}`);
	// console.log({ seconds });
	const minutes = `${Math.floor(time / 60)}`;
	// console.log({ minutes });
	const showMinutes = `0${minutes % 60}`.slice(-2);
	// console.log({ showMinutes });
	const hours = `0${Math.floor(time / 3600)}`.slice(-2);
	// console.log({ hours });
	return `${hours}:${showMinutes}:${seconds}`;
}

export { checkInputCoords, print, removeCharacter, resetMessage, formatTime };
