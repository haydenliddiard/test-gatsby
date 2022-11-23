import React from 'react'
import {graphql} from 'gatsby'

function product() {
  return (
    <div style={{paddingTop: '3em'}}>
      <h1>products</h1>
    </div>
  )
}

export default product

export const productQuery = graphql`
    query AllProductsQuery {
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