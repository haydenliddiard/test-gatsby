import React from "react"
import {getImage} from "gatsby-plugin-image"
import { useHeroQuery } from "../../hooks/useHeroQuery"
import { Wrapper, HeaderWrapper, StyledImg, MinorMessage, MajorMessage} from "./Hero.styles"
import background from "../../images/coffee-light-texture.png"

const Hero = () => {
    const {
        wpPage: {Acfhomepage: data},
    } = useHeroQuery()

    const imageData = getImage(data.heroimage.localFile)

    return (
        <>
            <Wrapper style={{backgroundImage: `url(${background})`}}>
                <HeaderWrapper>
                    <MajorMessage>
                        <p>{data.herotext}</p>
                    </MajorMessage>
                </HeaderWrapper>
                <StyledImg image={imageData} loading="eager" alt="Hero Image" />
            </Wrapper>
            <MinorMessage>
                {data.minormessage}
            </MinorMessage>
        </>
    )
}

export default Hero


