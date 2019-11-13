module.exports = {
  pathPrefix: "/gallente-elections",
  siteMetadata: {
    siteUrl: `https://eve-lore.github.io`,
    title: "Gallente Federation Elections",
    author: "ISD Thalack Dalhar",
    description: ""
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
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `data/`,
      },
    },
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
    //'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            query: `
              {
                allNewsYaml(sort: {fields: updated}, filter: {url: {ne: ""}}) {
                  nodes {
                    url
                    title
                    updated
                    candidates
                  }
                }
              }
            `,
            serialize: ({query: {site, allNewsYaml} }) => {
              return allNewsYaml.nodes.map(node => {
                return Object.assign({}, {
                  title: node.title,
                  description: node.title,
                  date: node.updated,
                  url: node.url,
                  guid: node.url,
                  categories: node.candidates
                })
              })
            },
            output: "/news.xml",
            title: "Federation Elections News Feed"
          }
        ]
      }
    }
  ],
}
