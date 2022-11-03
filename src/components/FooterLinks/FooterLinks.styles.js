import styled from "styled-components";

export const FooterLinksWrapper = styled.div`
    margin: 2em 0 0 0;
    text-align: left;
    color: white;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 10px;
    text-align: center;
    
    a {
        transition: .25s;
        &:hover {
            transform: scale(1.1);
        }
        color: #fff;
    }
`