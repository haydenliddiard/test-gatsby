import React from "react"
import topImage from "../../images/filigree.svg"
import { Wrapper } from "./ImageInsert.styles"

export const ImageInsert = ({children}) => (
        <Wrapper>
            <img src={topImage} loading="lazy" className="top-img" alt="img"   />
            {children}
            <img src={topImage} loading="lazy" className="bottom-img" alt="img" />
        </Wrapper>
    );
