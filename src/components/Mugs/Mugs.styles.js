import styled from "styled-components"

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f7f0eb;
    margin-bottom: 2em;
    padding: 2em 0;
    article {
        font-family: "Montserrat";
        font-weight: 600;
        width: 65%;
        color: #72736b;
        margin-bottom: 2em;
        max-width: 450px;
    }
    img {
        display: block;
        width: 250px;
        height: 250px;
        margin: 0;
    }
    div span {
        margin: 2em;
        color: #72736b;
        font-weight: 600;
        &:hover {
            border-bottom: 3px solid #72736b;
        }
    }
`