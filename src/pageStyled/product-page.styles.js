import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    margin: 1em 5% 4rem 5%;
    box-shadow: 0 5px 6px #bbb;
    justify-content: center;
    flex-wrap: wrap;
    align-items: inherit;
    border-radius: 5px;
    overflow: hidden;

    .product-image-container {
        background: #f4f4f4;  
        position: relative;
        width: 100%;
    }
    .gatsby-image-wrapper, .gatsby-image-wrapper-constrained {
        max-width: 400px;
        position: initial;
    }

    .description {
        display: inline-block;
        max-width: 500px;
        padding: 5%; 
        p {
            line-height: 1.2;
            font-size: 1rem;
        }
        h4 {
            
        }
        
        a {
            display: inline-block;
            padding: .25em .5em;
            padding-top: 0.5em;
            background: linear-gradient(267deg,rgba(97,55,13,1) 0%,rgb(122 73 23) 58%,rgba(204,153,102,1) 100%);
            color: #fff;
            background-size: 200%;
            transition: all .1s;
            display: flex;
            max-width: 254px;
            align-items: start;
            justify-content: center;
            border-radius: 3px;
            img {
                display: block;
                margin: 0;
                margin-right: 10px;
                width: 20px;
            }
            &:hover {
                background-position: -100%;

            }
        }
    }
    
    @media screen and (min-width: 900px) {
        flex-wrap: inherit;
        .description {
            max-width: 50%;
            
        }
    }

`