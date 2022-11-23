import {graphql, useStaticQuery } from "gatsby"

export const useFooterMenuQuery = () => {
    const data = useStaticQuery( graphql`
    
    query FooterLinks {
        wpMenu(name: {eq: "foot-area-links"}) {
            id
            name
            slug
            menuItems {
                nodes {
                    id
                    uri
                    label
                }
            }
        }
        }
    `)
    return data;
}