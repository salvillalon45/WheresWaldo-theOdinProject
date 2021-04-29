// -----------------------------------------------
//
// GameImage -> GameImage.js
// Desc: Game Image component that will handle
// displaying image and handling clicks
//
// -----------------------------------------------

// -----------------------------------------------
// Imports

// React
import * as React from 'react';

// Images
import Background from '../../../images/background.jpg';
// -----------------------------------------------

function GameImage() {
	return <img src={Background} alt='image background' />;
}

export default GameImage;
