/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  pathPrefix: `/theariima`,
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-eslint',
    `gatsby-plugin-emotion`,
    'gatsby-optional-chaining',
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyBp8MtxnvuP2WLvM2xG6SP6b3zt7L5SZNo",
          authDomain: "ariima-wedding.firebaseapp.com",
          projectId: "ariima-wedding",
          storageBucket: "ariima-wedding.appspot.com",
          messagingSenderId: "363096803080",
          appId: "1:363096803080:web:efddae42b812dc1d82cebd",
          measurementId: "G-8MW4PLRDCV"
        }
      }
    }
  ],
}
