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
                    }
                }
            }
        }
    `)
    return data;
}