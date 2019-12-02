import { useStaticQuery, graphql } from "gatsby"

export const useNews = () => {
    const { allContentfulGallenteElectionsNews } = useStaticQuery(
        graphql`
        query AllNews {
            allContentfulGallenteElectionsNews(filter: {url: {ne: ""}}, sort: {fields: updated, order: DESC}) {
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
    return allContentfulGallenteElectionsNews.nodes
}
