import styled from "styled-components";

export const Wrapper = styled.div`
    text-align: center;
`

export const ImageArea = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 0 5%;
    justify-content: center;
    margin-bottom: 4rem;
    .image {
        max-width: 300px;
        border-radius: 5px;
        overflow: hidden;
        box-shadow: 0 3px 5px #bbb;
        transition: all .5s;
        margin: 5px;
        text-align: center;
        img {
            transition: all .25s;
        }
        h4 {
            background: linear-gradient(45deg, #b27b4b, #ffe7ca);
            padding: 0.5em;
            margin-top: 0;
        }
        div:nth-of-type(2) {
            padding: 0 3rem;
            p {
                font-size: .8rem;
            }
        }
        &:hover img {
            transform: scale( 1.2);
            background: #d8d8d8;
        }
        .gatsby-image-wrapper .gatsby-image-wrapper-constrained {
        }

    }
`