module.exports = {
  pathPrefix: "/gallente-elections",
  siteMetadata: {
    siteUrl: `https://eve-lore.github.io`,
    title: "YC122 Elections",
    author: "ISD Thalack Dalhar",
    description: "Candidate information for the upcoming YC122 Gallente Elections",
    twitter: "@ISD_Thalack",
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#333333',
        theme_color: '#333333',
        display: 'minimal-ui',
        icon: 'src/images/gallente.png', // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-yaml`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images\/.*\.svg$/
        }
      }
    },
    `gatsby-plugin-transition-link`,
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CF_SPACE_ID,
        accessToken: process.env.CF_ACCESS_TOKEN,
        host: process.env.CF_HOST,
      }
    },
  ],
}
