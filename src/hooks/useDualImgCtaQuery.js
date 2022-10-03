import { useStaticQuery, graphql } from "gatsby";

export const useDualImgCtaQuery = () => {

    const data = useStaticQuery(graphql`
    fragment dualImage on WpMediaItem {
        localFile {
          childImageSharp {
            gatsbyImageData(width: 600, placeholder: TRACED_SVG)
          }
        }
      }

      query DualCta {
        dualImg: wpPage(databaseId: {eq: 6}) {
            dualimgcta {
              img1link
              img1text
              img2link
              img2text
              img1 {
                  ...dualImage
              }
              img2 {
                  ...dualImage
              }
            }
        }
      }
    `)
    return data;
}