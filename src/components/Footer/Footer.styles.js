import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image"


export const Wrapper = styled.div`
    width: 100%;
    background-color: #cc9966;
    padding: 2em 0;
    text-align: center;
    padding-top: 0;
`

export const FooterArea = styled.div`
        display: flex;
        justify-content: center;
        box-shadow: inset 0px 4px 4px #212121;
        padding-top: 2em;

    a {
        display: inline-block;
        margin: 0 10px;
        padding: 6px 15px;
        border: none;
        border: 1px solid #835e39;
        border-radius: 50%;
        background-color: #cc9966;
        display: flex;
        align-items: center;
        max-width: 50px;
        max-height: 50px;

        
        :hover {
            background-color: #835e39;
            background-color: #ad7d55;
            
        }
        .gatsby-image-wrapper {
            max-height: initial;
            min-height: initial;
            
        }
        &:nth-of-type(1) {
            height: 55px
        }
    }
`

export const FooterHeading = styled.div`
    display: inline-block;
    width: 100%;
    background-color: #333;
    padding: 1em;
    color: #fff;
    padding: 2em;
    h3 {
        font-family: auto;
    }
`

export const StyledImg = styled(GatsbyImage)`
  width: 100%;
  `