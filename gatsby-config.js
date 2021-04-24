module.exports = {
	siteMetadata: {
		title: `Gatsby Default Starter`,
		description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
		author: `@gatsbyjs`
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-sass`,
		`gatsby-plugin-styled-components`,
		`gatsby-plugin-image`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
			}
		},
		{
			resolve: 'gatsby-plugin-firebase',
			options: {
				credentials: {
					apiKey: 'AIzaSyCTs3F3c3B2oDwEq1fqESfKJrJpb_ljcDI',
					authDomain: 'theodinproject-whereswaldo.firebaseapp.com',
					projectId: 'theodinproject-whereswaldo',
					storageBucket: 'theodinproject-whereswaldo.appspot.com',
					messagingSenderId: '90226339458',
					appId: '1:90226339458:web:5f3db7076f45d3633c8e9b',
					measurementId: 'G-SH9JSE93EB'
				}
			}
		},
		`gatsby-plugin-gatsby-cloud`
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	]
};
