import { useStaticQuery, graphql } from "gatsby"

export const useMugQuery = () => {
    const data = useStaticQuery(graphql`
        query MugQuery {
            allWpMug {
                edges {
                    node {
                        slug
                        uri
                        title
                        content
                    }
                }
            }
        }
    `)
    return data;
}