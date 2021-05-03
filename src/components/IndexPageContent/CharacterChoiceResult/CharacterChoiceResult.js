// -----------------------------------------------
//
// CharacterChoiceResult -> CharacterChoiceResult.js
// Desc: Component that will tell user if they got
// right answer or not
//
// -----------------------------------------------

// -----------------------------------------------
// Imports

// React
import * as React from 'react';

//  Styled Components
import { Title } from './styling';

// Util
import { resetMessage } from '../../../util/gameUtil';
// -----------------------------------------------

function CharacterChoiceResult(props) {
	const { userCharacterChoice } = props;
	const [elapsed, setElapsed] = React.useState(false);
	let interval;

	function renderCharacterChoiceResult() {
		if (userCharacterChoice.length === 0) {
			return <Title>Try Again!</Title>;
		}

		return <Title>You found {userCharacterChoice}!</Title>;
	}

	// React.useEffect(() => {
	// 	// resetMessage();
	// 	console.log('Use Effect of CharacterChoiceResult()');
	// 	interval = setTimeout(function () {
	// 		console.log('Inside timeOUt');
	// 		// characterChoiceResultContainer.style.display = 'none';
	// 		setElapsed(!elapsed);
	// 		// setElapsed(!elapsed);
	// 	}, 2000);
	// }, [userCharacterChoice.length]);

	// React.useEffect(() => {
	// 	clearTimeout(interval);
	// 	// setElapsed(!elapsed);
	// }, [elapsed]);

	// Sets the choiceMade property back to false to hide the 'ChoiceFeedback' component
	// useEffect(() => {
	// 	const choiceTimer = setTimeout(
	// 		() =>
	// 			setPlayerChoice({
	// 				correctChoice: false,
	// 				choiceMade: false,
	// 				choice: playerChoice.choice
	// 			}),
	// 		3000
	// 	);
	// 	return () => clearTimeout(choiceTimer);
	// }, [playerChoice]);

	return (
		<div className='characterChoiceResultContainer'>
			{renderCharacterChoiceResult()}
		</div>
	);
}

export default CharacterChoiceResult;
