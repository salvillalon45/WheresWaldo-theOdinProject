import firebase from 'gatsby-plugin-firebase';

async function getCoordsFromDB(level) {
	const snapshot = await firebase
		.database()
		.ref('/level/' + level)
		.once('value');

	return snapshot.val();
}

export { getCoordsFromDB };
