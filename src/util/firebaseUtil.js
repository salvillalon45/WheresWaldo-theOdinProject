import firebase from 'gatsby-plugin-firebase';
import { orderUserResults } from './gameUtil';

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

	newReference.set({
		userName: userName,
		time: timer
	});
}

async function getUserResultsFromDB() {
	const snapshot = await firebase.database().ref('userResults').once('value');

	return orderUserResults(Object.values(snapshot.val()));
}

export { getCoordsFromDB, pushToDatabase, getUserResultsFromDB };
