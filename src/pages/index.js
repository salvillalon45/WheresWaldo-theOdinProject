// -----------------------------------------------
//
// Pages -> index.js
// Desc: Home Page
//
// -----------------------------------------------

// -----------------------------------------------
// Imports

// React
import * as React from 'react';

// Components
import Layout from '../components/Layout';
import SEO from '../components/seo';
// import IndexPageContent from '../components/IndexPageContent';
// -----------------------------------------------

function IndexPage() {
	const id = 'indexPageContainer';

	return (
		<Layout id={id}>
			<SEO title="The Odin Project: Where's Waldo" />
			<h1>YES</h1>
			{/* <IndexPageContent /> */}
		</Layout>
	);
}

export default IndexPage;
