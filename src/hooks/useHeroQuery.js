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
                    gatsbyImageData(webpOptions: {quality: 100}, width: 1920, placeholder: BLURRED)
                }
                }
            }
            }
        }
    }
    `)
    return data;
}