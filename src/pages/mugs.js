import React from 'react'
import { graphql, Link } from 'gatsby'
import {
    StyledImg,
    Wrapper,
    Card,
} from '../pageStyled/product-area-page.styles'
import Cart from '../images/shopping-cart-white.png'
import View from '../images/coffee-bag.svg'

const coffeePage = ({data}) => {

    const mugData = data.allWpMug
  return (
    <Wrapper>
        <h1 style={{textAlign: 'center', marginTop: '2rem'}}>Premium Mugs</h1>
        <article>We here at one shot know two things. The first is we only have one shot to impress with our coffee, the second is that’s all we need. Our premium roasted is crafted with industry experts to get you the perfect cup and with enough flavors to make willy wonkas head spin you will be hooked after one shot.</article>
        <div className='card-area'>
        {mugData.edges.reverse().map((elem, i) => {
                return (
                    <Card key={elem.node.id}>
                        <div className='img-wrapper'>
                            <StyledImg image={elem.node.customMugPost.mugLinkImage.localFile.childImageSharp.gatsbyImageData} alt={elem.node.title}/>
                            <h4>{elem.node.title}</h4>
                        </div>

                        <div className='excerpt-info'>
                            <div className="description" dangerouslySetInnerHTML={{__html: elem.node.excerpt.substring(0, 50) + '...'} } />
                        </div>
                        
                        <Link className='view-product' to={elem.node.uri}><img src={View} alt="product" />view product</Link>
                        <Link className='add-to-cart' to={"/"}><img src={Cart } alt="cart" />add to cart</Link>
                    </Card>
                )
            })}
        </div>
    </Wrapper>
  )
}

export default coffeePage

export const coffeePageQuery = graphql`
    query allMugQuery {
        allWpMug {
                edges {
                    node {
                        slug
                        uri
                        title
                        excerpt
                        id
                        customMugPost {
                            mugLinkImage {
                                localFile {
                                    childImageSharp {
                                        gatsbyImageData(placeholder: DOMINANT_COLOR, width: 600)
                                    }
                                }
                            }  
                        }
                    }
                }
            }
  }
`