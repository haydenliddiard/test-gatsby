import { useStaticQuery, graphql } from "gatsby"

export const useMenuQuery = () => {
    const data = useStaticQuery(graphql`
    query HeaderQuery {
        site {
            siteMetadata {
                title
            }
        }
        menu: wpMenu(name: {eq: "Primary"}) {
            name
            slug
            nodeType
            ctaoverlay {
              overlayonelink
              overlayonetext
              overlaytwolink
              overlaytwotext
            }
            menuItems {
            nodes {
              url
              title
              label
              parentId
              id
              childItems {
                nodes {
                  label
                  url
                  id
                }
              }
            }
          }
        }
        }
    `)
    return data
}