/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
    if (getConfig().mode === 'production') {
        actions.setWebpackConfig({
            devtool: false
        });
    }
};

exports.sourceNodes = ({ actions }) => {
    // Pre-define node types so having no content won't break things.
    const { createTypes } = actions
    const typeDefs = `
        type ContentfulGallenteElectionCandidate implements Node {
            name: String
            status: String
            characterId: Int
            gallente_elections_news: [ContentfulGallenteElectionNews] @link(by: "id", from: "gallente elections news___NODE") @proxy(from: "gallente elections news___NODE")
            description: contentfulGallenteElectionCandidateDescriptionTextNode @link(by: "id", from: "description___NODE")
        }
        
        type ContentfulGallenteElectionNews implements Node {
            title: String
            url: String
            updated: Date @dateformat
            candidates: [ContentfulGallenteElectionCandidate] @link(by: "id", from: "candidates___NODE")
        }

        type contentfulGallenteElectionCandidateDescriptionTextNode implements Node {
            description: String
        }

        type ContentfulFixed implements Node {
            width: Int
            height: Int
            aspectRatio: String
            base64: String
            tracedSVG: String
            src: String
            srcSet: String
            srcWebp: String
            srcSetWebp: String
            sizes: String
        }
        type ContentfulFluid implements Node {
            width: Int
            height: Int
            aspectRatio: String
            base64: String
            tracedSVG: String
            src: String
            srcSet: String
            srcWebp: String
            srcSetWebp: String
            sizes: String
        }
        type ContentfulResolutions implements Node {
            width: Int
            height: Int
            aspectRatio: String
            base64: String
            tracedSVG: String
            src: String
            srcSet: String
            srcWebp: String
            srcSetWebp: String
            sizes: String
        }
        type ContentfulSizes implements Node {
            width: Int
            height: Int
            aspectRatio: String
            base64: String
            tracedSVG: String
            src: String
            srcSet: String
            srcWebp: String
            srcSetWebp: String
            sizes: String
        }
    `
    createTypes(typeDefs)
}
