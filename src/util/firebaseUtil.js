import firebase from 'gatsby-plugin-firebase';

async function getCoordsFromDB(level) {
	const snapshot = await firebase
		.database()
		.ref('/level/' + level)
		.once('value');

	return snapshot.val();
}

function pushToDatabase(userName, timer) {
	console.log('Inside pushToDatabase');
	console.log(userName);

	const reference = firebase.database().ref('userResults');
	console.log(reference.key);

	const newReference = reference.push();
	console.log({ newReference });
	newReference.set({
		userName: userName,
		time: timer
	});

	var path = newReference.toString();
	console.log({ path });
}

export { getCoordsFromDB, pushToDatabase };
