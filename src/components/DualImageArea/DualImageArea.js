import React from "react";
import {useDualImgCtaQuery} from "../../hooks/useDualImgCtaQuery";
import {Wrapper} from "./DualImageArea.styles"
import DualImage from "../DualImage/DualImage";

const DualImageArea = () => {
    const {dualImg} = useDualImgCtaQuery();

    return (
        <Wrapper>
            {new Array(2).fill("").map((elem, i) => (
                <DualImage 
                    key={i}
                    image={
                        dualImg.dualimgcta[`img${i + 1}`].localFile.childImageSharp.gatsbyImageData
                    }
                    link={dualImg.dualimgcta[`img${i + 1}link`]}
                    text={dualImg.dualimgcta[`img${i + 1}text`]}
                    />
            ))}
        </Wrapper>
    )
}

export default DualImageArea