import React from 'react'
import {graphql} from 'gatsby'

function product() {
  return (
    <div>
      <h1>product</h1>
    </div>
  )
}

export default product

export const productQuery = graphql`
    query MyQuery {
    allWpProduct {
      edges {
        node {
          uri
          title
          link
        }
      }
    }
  }
`