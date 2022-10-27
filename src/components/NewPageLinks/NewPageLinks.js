import React, {useEffect, useState} from "react";
import { Link } from "gatsby";
import { 
    StyledImg,
    DualImg,
    DualImageTextWrapper,
    DualImageText,
     } from "./NewPageLinks.styles";
     
const NewPageLinks = ({image, link, text}) => {
    // const [updateLink, setupdateLink] = useState(null);
    // Link first renders null then corrects
    // console.log(link)
    return (
    <DualImg>
        <StyledImg image={image} alt="cta Image" />
        <Link to={link}>
        <DualImageTextWrapper>
                <DualImageText>{text}</DualImageText>
            </DualImageTextWrapper>
        </Link>
    </DualImg>
    )
}

export default NewPageLinks


