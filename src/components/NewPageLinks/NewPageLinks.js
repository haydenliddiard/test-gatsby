import React from "react";
import { Link } from "gatsby";
import { 
    StyledImg,
    DualImg,
    DualImageTextWrapper,
    DualImageText,
     } from "./NewPageLinks.styles";
     
const NewPageLinks = ({image, link, text}) => {
    // first render link is null
    console.log(`link${link}`)
    return (
    <DualImg>
        <StyledImg image={image} alt="cta Image"/>
        <Link to={link}>
        <DualImageTextWrapper>
                <DualImageText>{text}</DualImageText>
            </DualImageTextWrapper>
        </Link>
    </DualImg>
    )
}

export default NewPageLinks


