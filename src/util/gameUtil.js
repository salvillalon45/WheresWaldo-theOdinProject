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
	const characterChoiceResultContainer = document.querySelector(
		'.characterChoiceResultContainer'
	);

	setTimeout(function () {
		characterChoiceResultContainer.style.display = 'none';
	}, 2000);
}

export { checkInputCoords, print, removeCharacter, resetMessage };
