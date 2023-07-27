import React from 'react'
import {Link} from 'gatsby'
import {useCoffeeQuery} from "../../hooks/useCoffeQuery"
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
import { 
    Wrapper,
    ImageArea
 } from './AllCoffee.styles'

const AllCoffee = () => {
    const {allWpCoffee} = useCoffeeQuery();
    console.log(allWpCoffee.edges);
    return (
        <Wrapper>
            <h2>Explore more great flavors</h2>
            <ImageArea>
                {allWpCoffee.edges.map((elem, i) => {
                    const coffee = elem.node
                    const image = getImage(coffee.customCoffeePost.coffeLinkImage.localFile)
                    return (
                        <Link to={coffee.uri} className='image' key={i}>
                            <GatsbyImage image={image} alt={coffee.title} />
                            <h4>{coffee.title}</h4>
                            <div dangerouslySetInnerHTML={{__html: elem.node.excerpt.substring(0, 50) + '...'} }/>
                            {/* <ul>
                                <li>{coffee.customCoffeePost.flavor1}</li>
                                <li>{coffee.customCoffeePost.flavor2}</li>
                                <li>{coffee.customCoffeePost.flavor3}</li>
                            </ul> */}
                        </Link>
                    )
                })}
            </ImageArea>
        </Wrapper>
  )
}

export default AllCoffee