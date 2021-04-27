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

	function renderCharacterChoiceResult() {
		if (userCharacterChoice.length === 0) {
			return <Title>Try Again!</Title>;
		}

		return <Title>You found {userCharacterChoice}!</Title>;
	}

	React.useEffect(() => {
		resetMessage();
	});

	return (
		<div className='characterChoiceResultContainer'>
			{renderCharacterChoiceResult()}
		</div>
	);
}

export default CharacterChoiceResult;
