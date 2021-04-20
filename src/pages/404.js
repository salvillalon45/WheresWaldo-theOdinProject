// -----------------------------------------------
//
// Pages -> 404.js
// Desc: 404 Page
//
// -----------------------------------------------

// -----------------------------------------------
// Imports

// React
import * as React from 'react';

// Components
import Layout from '../components/Layout';
import SEO from '../components/seo';
// -----------------------------------------------

function NotFoundPage() {
	return (
		<Layout>
			<SEO title='404: Not found' />

			<h1>404: Not Found</h1>

			<p>You just hit a route that doesn&#39;t exist... the sadness.</p>
		</Layout>
	);
}

export default NotFoundPage;
