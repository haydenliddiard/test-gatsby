import React from "react";
import { Link } from "gatsby";
import {
    StyledImg,
    DualImg,
    DualImageTextWrapper,
    DualImageText,
    DualImgWrapper
} from "./DualImage.styles"

const DualImage = ({image, link, text}) => (
    <DualImgWrapper>
    <DualImg>
        <StyledImg image={image} alt="cta Image"/>
    </DualImg>
        <Link className="dualImageLink" to={link}>
            <DualImageTextWrapper>
                <DualImageText>{text}</DualImageText>
            </DualImageTextWrapper>
        </Link>
    </DualImgWrapper>
)

export default DualImage