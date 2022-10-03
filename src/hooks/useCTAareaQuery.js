import { useStaticQuery, graphql } from "gatsby";

export const useCTAAreaQuery = () => {

// creates fragment for image query and spreads into query on image node
    const data = useStaticQuery(graphql`
    # fragment ctaImage on WpMediaItem {
    #     localFile {
    #       childImageSharp {
    #         gatsbyImageData(width: 30, placeholder: TRACED_SVG)
    #       }
    #     }
    #   }

      # created acf for links
    query CTAQuery {
        cta: wpPage(databaseId: {eq: 6}) {
            Acfhomepage {
              herotext
                # ctaoneimg {
                # ...ctaImage
                # }
          }
        }
      }
    `)

    return data;
}