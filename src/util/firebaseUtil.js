import firebase from 'gatsby-plugin-firebase';

async function getCoordsFromDB(level) {
	const snapshot = await firebase
		.database()
		.ref('/level/' + level)
		.once('value');

	return snapshot.val();
}

function pushToDatabase(userName, timer) {
	const reference = firebase.database().ref('userResults');

	const newReference = reference.push();
	console.log({ newReference });
	newReference.set({
		userName: userName,
		time: timer
	});
}

async function getUserResultsFromDB() {
	const snapshot = await firebase.database().ref('userResults').once('value');

	return snapshot.val();
}

export { getCoordsFromDB, pushToDatabase, getUserResultsFromDB };
