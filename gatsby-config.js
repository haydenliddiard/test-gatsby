// require("dotenv").config({
//   path: `env.${process.env.NODE_ENV}`
// });

module.exports = {
  siteMetadata: {
    title: `gatsby-coffee`,
    description: `Example project for gatsby framework`,
    // siteUrl: `http://localhost:8888/gatsby-coffee/`
    siteUrl: `http://testcoffeeplace.com/`
  },
  plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-image", "gatsby-plugin-sitemap", "gatsby-plugin-sharp", "gatsby-transformer-sharp", 'gatsby-plugin-sass',
   {
    resolve: `gatsby-source-wordpress`,
    options: {
      url:
      // allows a fallback url if WPGRAPHQL_URL is not set in the env, this may be a local or remote WP instance.
        // process.env.WPGRAPHQL_URL || `http://localhost:8888/gatsby-coffee/graphql`,
        process.env.WPGRAPHQL_URL || `http://testcoffeeplace.com/graphql`,
      }
   },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `assets`,
      path: `${__dirname}/content/assets`,
    },
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `testcoffeeplace`,
      short_name: `testcoffeeplace`,
      start_url: `/`,
      background_color: `#f7f0eb`,
      theme_color: `#a2466c`,
      display: `minimal-ui`,
      icon: `src/images/favicon.svg`,
    },
  },
]
};