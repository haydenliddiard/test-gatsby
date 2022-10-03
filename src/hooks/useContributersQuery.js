import {graphql, useStaticQuery} from "gatsby"

export const useContributersQuery = () => {
    
    const data = useStaticQuery(graphql`
    fragment contributerImage on WpMediaItem {
        localFile {
          childImageSharp {
            gatsbyImageData(width: 300, placeholder: TRACED_SVG)
          }
        }
      }
        query {
            contributerData: wpMenu(name: {eq: "Primary"}) {
                contributers {
                # contributer1
                # contributer2
                # contributer3
                contributer1image {
                    ...contributerImage
                }
                contributer2image {
                    ...contributerImage
                }
                contributer3image {
                    ...contributerImage
                }
                contributer4image {
                    ...contributerImage
                }
                }
            }
        }
    `)
    return data
}