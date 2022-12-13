import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

export const StyledImg = styled(GatsbyImage)`
    img {
        transition: all 0.3s !important;
        border-radius: 5px 5px 0 0;
    }
    .gatsby-image-wrapper {
        position: static !important;
    }
`

export const Wrapper = styled.div`
    display: block;
    width: 100%;
    text-align: center;
    .coffee-card-area {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        align-items: center;
        margin-bottom: 2em;
    }
    
    
    @media screen and (min-width: 920px) {
        .coffee-card-area {
            flex-direction: row;
            .coffee-exerpts {
                margin: 1em;
            }
        }
    }
`

export const Card = styled.div`
    display: inline-block;
    margin: 1em .25em;
    width: 100%;
    max-width: 80%;
    box-shadow: 0px 2px 7px #b6b6b6;
    display: flex;
    flex-direction: column;
    max-width: 300px;
    border-radius: 5px;
    align-items: center;
    padding-bottom: .5em;
    .img-wrapper {
        position: relative;
        h4 {
            z-index: 2;
            position: absolute;
            bottom: 0;
            display: block;
            width: 100%;
            font-size: 1.5rem;
            margin: 0;
            padding: 0.5em;
            background-color: #00000087;
            color: #fff;
            font-weight: 100;
            text-shadow: 0 3px 3px #000, 0 3px 7px #000;
        }
    }
    .excerpt-info {
        padding: 1em 1.25em;
        padding-bottom: 0;
        margin-bottom
        1em;
        h4 {
            letter-spacing: .1px;
            margin-top: 0;
            margin-bottom: 0.75em;
            font-weight: 800;
        }
        .description p {
            font-size: .8rem;
            line-height: 1.2;
            font-weight: 600;
            margin-bottom: .5em;
        }
        thead {
            font-weight: 700;
        }
        table tr {
            font-size: .8rem;
            line-height: 1.5;
        }
        .weight {
            font-size: .8rem;
            font-weight: 600;
            padding-left: 1em;
            span {
                font-weight: normal;
            }
        }
    }

    .add-to-cart, .view-product {
        background-color: #2d2d2d; 
        display: block;
        padding: 0.25rem;
        text-align: center;
        font-size: 1.25rem;
        font-family: "BarlowCondensed";
        width: 75%;
        margin-bottom: .5em;
        transition: all .1s;
        border-radius: 3px;
        box-shadow: 0px 2px 7px #b6b6b6;
        display: flex;
        justify-content: center;
        img {
            display: block;
            margin: 0;
            margin-right: 10px;
            width: 20px;
        }
    }

    .add-to-cart {
        color: #fff;
        background: linear-gradient(267deg,rgba(97,55,13,1) 0%,rgb(122 73 23) 58%,rgba(204,153,102,1) 100%);
        background-size: 200%;
        transition: all .1s;
        &:hover {
            background-position: -100%;
        }
    }

    .view-product {
        background: linear-gradient(180deg,rgb(255 255 255) 0%,rgb(199 199 199) 98%, rgb(144,144,144)100%);
        &:hover {
            
        }
    }
`
