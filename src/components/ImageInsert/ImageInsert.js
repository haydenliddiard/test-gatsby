import React from "react"
import topImage from "../../images/filigree.svg"
import { Wrapper } from "./ImageInsert.styles"

export const ImageInsert = ({children}) => {
    return (
        <Wrapper>
            <img src={topImage} className="top-img" alt="img"   />
            {children}
            <img src={topImage} className="bottom-img" alt="img" />
        </Wrapper>
    )
}

// export default ImageInsert;
