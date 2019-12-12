import { useStaticQuery, graphql } from "gatsby"

export const useSite = () => {
    const { site } = useStaticQuery(
        graphql`
        query SiteWithSiteMetaData {
            site {
                pathPrefix
                siteMetadata {
                    title
                    siteUrl
                    description
                    twitter
                }
            }
        }
        `
    )
    return site
}
