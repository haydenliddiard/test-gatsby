import React from 'react'
import { graphql } from 'gatsby'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'

const CoffeeItem = ({data}) => {
  const mug = data.wpMug
  // const image = getImage(coffee?.featuredImage?.node?.localFile.childImageSharp.gatsbyImageData);
  const image = getImage(mug.customMugPost?.mugLinkImage.localFile);
  return (
    <div>
      <h1>{mug.title}</h1>
      <GatsbyImage image={image} alt={mug.title} />
      <div dangerouslySetInnerHTML={{__html: mug.content}} />
    </div>
  )
}

export default CoffeeItem

export const MugQuery = graphql`
    query($id: String!) {
        wpMug(id: {eq: $id}) {
            id
            title
            link
            content
            customMugPost {
              mugLinkImage {
                    localFile {
                        childImageSharp {
                            gatsbyImageData(placeholder: DOMINANT_COLOR, width: 600)
                        }
                    }
                }
            }
            featuredImage {
                node {
                    localFile {
                    childImageSharp {
                        gatsbyImageData(placeholder: BLURRED, width: 1920)
                    }
                    }
                }
            }
        }
    }
`