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
    // opens file to graphql 
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `test-coffee-place`,
      short_name: `testcoffeeplace`,
      start_url: `/`,
      background_color: `#f7f0eb`,
      theme_color: `#a2466c`,
      display: `minimal-ui`,
      icons: [
        {
          src: "src/images/icon-48x48.png",
          sizes: "48x48",
          type: "image/png",
          purpose: "maskable"
        },
        {
          src: "src/images/icon-72x72.png",
          sizes: "72x72",
          type: "image/png",
          purpose: "maskable"
        },
        {
          src: "src/images/icon-96x96.png",
          sizes: "96x96",
          type: "image/png",
          purpose: "maskable"
        },
        {
          src: "src/images/icon-144x144.png",
          sizes: "144x144",
          type: "image/png",
          purpose: "maskable"
        },
        {
          src: "src/images/icon-192x192.png",
          sizes: "192x192",
          type: "image/png",
          purpose: "maskable"
        },
        {
          src: "src/images/icon-256x256.png",
          sizes: "256x256",
          type: "image/png",
          purpose: "maskable"
        },
        {
          src: "src/images/icon-384x384.png",
          sizes: "384x384",
          type: "image/png",
          purpose: "maskable"
        },
        {
          src: "src/images/icon-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "maskable"
        },
      ]
    },
  },
]
};