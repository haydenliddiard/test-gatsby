import { graphql, useStaticQuery } from "gatsby";

export const useNewPagesQuery = () => {
    const data = useStaticQuery(graphql`
        query {
            NewLinks: allWpPage {
                edges {
                    node {
                        title
                        databaseId
                        genericPageAcf {
                        pagetext
                        pagelink
                        }
                        featuredImage {
                            node {
                                id
                                title
                                localFile {
                                childImageSharp {
                                    gatsbyImageData(placeholder: BLURRED, width: 600)
                                }
                                }
                            }
                        }
                        genericPageAcf {
                            pageLinkImage {
                                localFile {
                                childImageSharp {
                                    gatsbyImageData(placeholder: TRACED_SVG, width: 600)
                                }
                                }
                            }
                        }
                    }
                }
            }
        }
    `)
    return data;
}