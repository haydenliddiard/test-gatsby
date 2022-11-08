import styled from "styled-components";

export const Wrapper = styled.div`
    position: relative;
    margin-bottom: 5rem;
    margin-top: 4.5rem;
    text-align: center;
    
    .top-img {
        width: 100px; 
        position: absolute;
        top: -2.5rem;
        left: 13%;
    }

    .bottom-img {
        width: 100px;
        transform: rotate(180deg);
        position: absolute;
        right: 10%;
        bottom: -4rem;
    }

    h4 {
        width: 65%;
        text-align: center; 
        margin-bottom: 0; 
        font-weight: bold;
        display: inline-block;
        margin-top: 0;
        padding: 1em 0.5em;
        border-top: 2px solid #d7d7d7;
        border-bottom: 2px solid #d7d7d7;
        font-family: auto;
    }

    .white {
        color: #fff;
        font-family: inherit; 
    }
`