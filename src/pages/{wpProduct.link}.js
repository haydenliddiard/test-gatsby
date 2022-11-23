import React from 'react'
import {graphql} from 'gatsby'
import { StyledImg } from '../pagehero.styles'
// import styled from 'styled-components'

function productTemplate({data}) {
  console.log(data)
  const imageData = data.wpProduct?.featuredImage?.node?.localFile.childImageSharp.gatsbyImageData;
  // const pageStyle = styled.div`
  //   padding-top: 2em;
  // `
  return (
    <div
    //  style={pageStyle}
     >
    {imageData ? (<StyledImg image={imageData} alt="Hero Image" />) : (null)}
      <div>pageTemplate</div>
    </div>
  )
}

export default productTemplate

export const productsQuery = graphql`
    query($id: String!) {
        wpProduct(id: {eq: $id}) {
            id
            title
            link
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