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
    'gatsby-optional-chaining'
  ],
}
