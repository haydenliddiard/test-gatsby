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
        border: 3px solid #333;
        border-radius: 50%;
        background-color: #cc9966;
        display: flex;
        align-items: center;
        max-width: 50px;
        max-height: 50px;
        transition: all .25s;
        
        &:hover {
            background-color: #835e39;
            border: 5px solid #333;
        }
        .gatsby-image-wrapper {
            max-height: initial;
            min-height: initial;
            
        }
        &:nth-of-type(2) {
            padding: 9px;
        }
        &:nth-of-type(3) {
            padding: 9px 10px;
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