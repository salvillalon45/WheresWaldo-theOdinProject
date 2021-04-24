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

	// if (userCharacterChoice === 'fin') {
	// 	if (userX >= dbX[0] && userX <= 66 && userY >= 374 && userY <= 378) {
	// 		console.log('FIN');
	// 	}
	// }

	// if (userCharacterChoice === 'megGriffin') {
	// 	if (userX >= dbX[0] && userX <= 45 && userY >= 294 && userY <= 297) {
	// 		console.log('MEG GRIFFIN');
	// 	}
	// }
}

export { checkInputCoords };
