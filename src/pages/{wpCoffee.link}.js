import React from 'react'
import { graphql, Link } from 'gatsby'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
import {Wrapper} from "../pageStyled/product-page.styles"
import Cart from '../images/shopping-cart-white.png'
import AllCoffee from '../components/AllCoffee/AllCoffee'

const CoffeeItem = ({data}) => {
  const coffee = data.wpCoffee
  // const image = getImage(coffee?.featuredImage?.node?.localFile.childImageSharp.gatsbyImageData);
  const image = getImage(coffee.customCoffeePost?.coffeLinkImage.localFile);
  return (
    <div>
      <h1>{coffee.title}</h1>
        <Wrapper>
            <div className='product-image-container'>
            <GatsbyImage image={image} alt={coffee.title} />
            </div>
            <div className="description">
            <h4>{coffee.title}</h4>
                <div dangerouslySetInnerHTML={{__html: coffee.content}}  className="wpContent"/>
                <div>weight: <span>12 Oz</span> </div>
                <Link to="/" className='btn'><img src={Cart } alt="cart" />Add to cart</Link>
            </div>
        </Wrapper>
            <AllCoffee />
    </div>
  )
}

export default CoffeeItem

export const productsQuery = graphql`
    query($id: String!) {
        wpCoffee(id: {eq: $id}) {
            id
            title
            link
            content
            excerpt
            customCoffeePost {
                flavor1
                flavor2
                flavor3
              coffeLinkImage {
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