import { useStaticQuery, graphql } from "gatsby"

export const useCoffeeQuery = () => {
    const data = useStaticQuery(graphql`
        query coffeQuery {
            allWpCoffee {
                edges {
                    node {
                        slug
                        uri
                        title
                        excerpt
                        customCoffeePost {
                            flavor1
                            flavor2
                            flavor3
                            coffeLinkImage {
                                localFile {
                                    childImageSharp {
                                        gatsbyImageData(placeholder: DOMINANT_COLOR, width: 600)
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