// For displaying 3 newset posts links
import React from "react";
import { useNewPagesQuery } from "../../hooks/useNewPagesQuery";
import NewPageLinks from "../NewPageLinks/NewPageLinks"
import { Wrapper } from "./NewPageLinkArea.styles";

const NewPageLinkArea = () => {
    const {NewLinks} = useNewPagesQuery();
    const LinkItems = NewLinks.edges
    // console.log(NewLinks)
    // console.log(LinkItems)

    return (
        <>
            <h2 style={{textAlign: "center"}}>Latest News</h2>
        <Wrapper>
            {new Array(3).fill("").map((elem, i) => (
                
                <NewPageLinks 
                image={
                    LinkItems[i].node.genericPageAcf?.pageLinkImage?.localFile.childImageSharp.gatsbyImageData
                }
                link={LinkItems[i].node.genericPageAcf.pagelink}
                key={i} text={LinkItems[i].node.title} 
                />
            ))}
        </Wrapper>
        </>
    )
}

export default NewPageLinkArea;