import { useStaticQuery, graphql } from "gatsby"

export const useHeroQuery = () => {
    const data = useStaticQuery(graphql`
    query HeroQuery {
        wpPage(databaseId:{eq: 6}) {
            slug
            title
            Acfhomepage {
                herotext
                minormessage
                subtextarea
                heroimage {
                    localFile {
                    childImageSharp {
                    gatsbyImageData(placeholder: TRACED_SVG)
                    }
                }
                }
            }
        }
    }
    `)
    return data;
}