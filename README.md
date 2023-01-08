# Where's Waldo
[The Odin Project: Javascript] - Project: Where's Waldo

## Intro

-   This project was aimed as an introduction to using backend. I was familiar with Firebase, but I wanted to practice using Firebase with Gatsby
-   You can find more on the project here: [The Odin Project - Where's Waldo](https://www.theodinproject.com/lessons/node-path-javascript-where-s-waldo-a-photo-tagging-app)

### Demo
<img alt="Where's Waldo Demo" src="./wheres_waldo.gif" width="600" />

### 📗 Fonts used

-   [Secular One](<[https://fonts.google.com/specimen/Secular+One?preview.text_type=custom&category=Sans+Serif&preview.size=59&thickness=6](https://fonts.google.com/specimen/Secular+One?preview.text_type=custom&category=Sans+Serif&preview.size=59&thickness=6)>)
-   [Lato](<[https://fonts.google.com/specimen/Lato?preview.text=This sweatshirt offering&preview.text_type=custom&category=Sans+Serif&preview.size=59&thickness=6)>)

### 🎨 Color Reference

|  Color            |  Hex                                                                 |
| ----------------- | -------------------------------------------------------------------- |
|  Dark Blue        |  ![#0c2d48](https://placehold.co/15x15/0c2d48/0c2d48.png) `#0c2d48`  |
|  Baby Blue        |  ![#b1d4e0](https://placehold.co/15x15/b1d4e0/b1d4e0.png) `#b1d4e0`  |
|  White            |  ![#fff](https://placehold.co/15x15/fff/fff.png)          `#fff`     |
|  Black            |  ![#000](https://placehold.co/15x15/000/000.png)          `#000`     |

## Overall

-   In this project I practice using Material UI and Styled Components. Material UI
-   This project I learned how sometimes the framework that you use will help you out. For instance, I used Gatsby and this framework by having an overall layout that will be used on different pages. This is great so that you can have one layout that will be used for all pages! In this case, I wanted the header component to have the timer and that same timer needed to be passed down to the Main component. What I noticed is that this could not be done since Layout has no way of passing in to the designated page...
-   What I needed was to have a Parent component that renders Header and the Main component. There I can pass down the time state variable to both of the components. This idea was not possible with having layouts with Gatsby. It made had to put Header and Footer inside Main.js instead of being in Layout.js.
-   Also, when I was trying to push into the Database, I noticed that my push was going in but as null value. I knew that the code was right, what I had to change was read and write permissions.
-   ### My biggest learning experience from this project
    -   Is learning how to use Parent Components properly so that the parents handle the state
    -   Do not let child components have state that will then have to be passed up to the parent. I was going to do this initially with my Timer.js component but this turned out to just make everything very difficult

## Design

-   Design Inspiration Came From [JCarlosLucio](<[https://lucio-where-is-waldo.netlify.app/](https://lucio-where-is-waldo.netlify.app/)>)

## Styling

1. Working with Material UI is great, but when you try to edit the styling of the Material UI Component it is kinda of difficult. Trying to edit the css looked liked this. Maybe there is a better way of doing this. I need to check the documentation more

```
.MuiInputLabel-outlined,
.MuiFormLabel-root.Mui-focused {
	color: var(--babyBlue) !important;
}

```

2. Styled components came in handy. It made it easier so that I do not have to create an entire HTML button and create classes for it. By doing a Styled component it reduces the amount of code to write! Then if you need to specify something about a button you can just add a class to it and add the specific css that only that button need. Below is the code snippet of my button

```jsx
const GameButton = styled.button`
	background: var(--babyBlue);
	border: none;
	padding: 11px;
	border-radius: 10px;
	font-weight: bold;
	cursor: pointer;
	color: var(--darkBlue);
`;
```

2. I learned how to apply hovers in Styled Components

```jsx
&:hover {
	color: orange;
}
```

3. I did not know how to use Sass variables in Styled Components so I found this other work around. This will work until I learn how to use sass variables in styled components

```jsx

// IN global.scss I declare my variables
// Color Variables
// -----------------------------------------------
:root {
	--darkBlue: #0c2d48;
	--babyBlue: #b1d4e0;
	--white: #ffffff;
	--black: black;
}

// Now to use them I will do that following: use color: var(--black)
const Character = styled.div`
	background-color: var(--white);
	border-radius: 20px;
	padding: 20px;
	color: var(--black);
	font-weight: bold;
`;

```

## Development

-   Learned how to deploy applications with Firebase hosting. It is actually pretty easy to do. (I followed this guide: Deploying to Firebase Hosting
    )[https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/deploying-to-firebase/]
-   Usually if I was trying to increment a counter I would do something like this `setTimer(timer + 1)` but this will work if it was a button click something invoking this to happen. From another project I saw how that they did `setTimer(timer => timer + 1)` which worked!
-   I learned how to setup a Gatsby project with firebase! It was really simple thanks to this plugin (gatsby-plugin-firebase)[[https://www.gatsbyjs.com/plugins/gatsby-plugin-firebase/](https://www.gatsbyjs.com/plugins/gatsby-plugin-firebase/)]
-   I practiced using Styled Components!
-   I learned how to use MaterialUI to set up a navbar and footer components
-   I learned how to get the coordinates of a click on the page, it involves using the event. Took advantage of this to help render the dropdown at the spot the user jus clicked on
-   I learned more about setTimeout and setInterval. I finally learned the difference between the two. - setInterval is used when you want something done at specified intervals - setTimeout is used when you want something to happen after a specifed number of milliseconds
-   Since the entire image already had a onClick function, when I tried to create the dropdown and let the user click the character from the dropdown it was actually doing a double click.

    -   To prevent this from happening, I used event.stopPropagation and event.preventDefault. Now it will associate the click with the dropdown only and not with the image. Example:

    ```
    function handleCharacterChoice(event, character) {
    	event.stopPropagation();
    	event.preventDefault();
    	props.handleUserCharacterChoice(character);
    }

    function renderDropdownItems() {
    	return props.characters.map((character, index) => {
    		return (
    			<DropdownItem
    				key={index}
    				onClick={event => handleCharacterChoice(event, character)}
    			>
    				{character}
    			</DropdownItem>
    		);
    	});
    }
    ```

-   Learned how to ordered elements from least to greatest. I needed to do this to arrange the scores from least time to greatest time taken to find the characters.

```
function orderUserResults(userResults) {
	// Help from https://flaviocopes.com/how-to-sort-array-of-objects-by-property-javascript/
	return userResults.sort((a, b) => (a.time > b.time ? 1 : -1));
}
```

<br>

## Technologies:

-   React
-   React Bootstrap
-   Material UI
-   Styled Components
-   Dribble
-   Sass
-   Surge.sh
-   Gatsby
-   Firebase
-   Firebase Hosting
