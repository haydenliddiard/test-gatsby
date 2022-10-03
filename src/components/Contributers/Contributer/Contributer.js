import React from "react";
// import { Link } from "gatsby";
import {
    StyledImg,
    DualImg,
} from "./Contributer.styles"

const DualImage = ({image, link, text}) => (
    <DualImg>
        <StyledImg image={image} alt="cta Image"/>
        {/* <Link to={link}>
            <DualImageTextWrapper>
                <DualImageText>{text}</DualImageText>
            </DualImageTextWrapper>
        </Link> */}
    </DualImg>
)

export default DualImage