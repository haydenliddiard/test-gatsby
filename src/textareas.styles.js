import styled from "styled-components"

export const CenterTextBlockWrapper = styled.div`
    text-align: center;
    background-blend-mode: color-burn;
    background-size: 1.5em;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const TextBlock = styled.p`
    display: inline-block;
    text-align: left;
    width: 90%;
    background-color: #fff;
    border: 5px solid #cc9966;
    padding: 30px;
    margin-top: 2em;

    @media screen and (min-width: 650px ) {
        width: 70%;
    }
`

