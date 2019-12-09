import { useStaticQuery, graphql } from "gatsby"

export const useNews = () => {
    const { allContentfulGallenteElectionNews } = useStaticQuery(
        graphql`
        query AllNews {
            allContentfulGallenteElectionNews(filter: {url: {ne: ""}}, sort: {fields: updated, order: DESC}) {
                nodes {
                  id
                  url
                  title
                  candidates {
                    name
                  }
                  updated
                }
            }
        }
        `
    )
    return allContentfulGallenteElectionNews.nodes
}
