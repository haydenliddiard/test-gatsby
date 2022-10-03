import React from "react";
import { useContributersQuery } from "../../../hooks/useContributersQuery";
import { Wrapper } from "./ContributerArea.styles";
import Contributer from "../Contributer/Contributer"

const ContributerArea = () => {
    const {contributerData: {contributers}} = useContributersQuery();
    // console.log(useContributers.contributerData.contributers);
    console.log(contributers);
    const ARR = Object.values(contributers) 
    console.log(ARR);
    return (
        <>
            <h1 style={{textAlign: "center", fontWeight: "inherit"}}>Our Partners</h1>
            <Wrapper>
                {ARR.map((elem, i) => (
                    <Contributer 
                        key={i}
                        image={
                            contributers[`contributer${i + 1}image`].localFile.childImageSharp.gatsbyImageData
                        }
                        text={contributers[`contributer${i + 1}`] || console.log(i)}
                    />
                ))}
            </Wrapper>
        </>
    )
}

export default ContributerArea;