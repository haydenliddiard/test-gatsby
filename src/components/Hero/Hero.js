import React from "react"
import {getImage} from "gatsby-plugin-image"
import { useHeroQuery } from "../../hooks/useHeroQuery"
import { Wrapper, HeaderWrapper, StyledImg, MinorMessage, MajorMessage} from "./Hero.styles"


const Hero = () => {
    const {
        wpPage: {Acfhomepage: data},
    } = useHeroQuery()

    const imageData = getImage(data.heroimage.localFile)

    return (
        <>
            <Wrapper>
                <HeaderWrapper>
                    <MajorMessage>
                        <p>"{data.herotext}"</p>
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


