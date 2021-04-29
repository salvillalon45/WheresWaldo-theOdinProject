// -----------------------------------------------
//
// IndexPageContent -> IndexPageContent.js
// Desc: Main component
//
// -----------------------------------------------

// -----------------------------------------------
// Imports

// React
import * as React from 'react';

// Components
import GameImage from './Main';
// import Header from '../Layout/Header';
// import Footer from '../Layout/Footer';
// -----------------------------------------------

function IndexPageContent() {
	// const [isGameOver, setIsGameOver] = React.useState('');

	// function handleIsGameOver(value) {
	// 	console.log('Inside handleGameOVer');
	// 	setIsGameOver(value);
	// }

	// function handleTimer(value, status) {
	// 	if ()
	// 	setTimer()
	// }

	return (
		<>
			{/* <Header isGameOver={isGameOver} />

			<main>
				<section>
					<GameImage handleIsGameOver={handleIsGameOver} />
				</section>
			</main> */}
			<GameImage />

			{/* <Footer /> */}
		</>
	);
}
export default IndexPageContent;
