import {graphql, useStaticQuery } from "gatsby"

export const useFooterQuery = () => {
    const data = useStaticQuery(graphql`

    fragment linkImage on WpMediaItem {
            localFile {
            childImageSharp {
                gatsbyImageData(width: 30, placeholder: DOMINANT_COLOR)
            }
            }
        }

        query FooterQuery {
            footQuery: wpMenu(name: {eq: "Primary"}) {
                footerMenu {
                    link1
                    link2
                    link3
                    image1 {
                        ...linkImage
                    }
                    image2 {
                        ...linkImage
                    }
                    image3 {
                        ...linkImage
                    }
                }
            }
        }
    `)
    return data
}