import styled from "styled-components"

export const Wrapper = styled.div`
margin-bottom: 4em;
.cta-area {
    background-color: #f7f0eb;
    display: flex;
    flex-direction: column;
    align-items: center;

    .cta-message {
        margin: 1em 5%;
        align-items: center;
        display: flex;
        justify-content: center;
        p {
            width: 90%;
            font-family: 'Yellowtail';
    font-size: 1.6em;
        }
    }

    .cta-wrapper {
        display: block;
        display: flex;
        justify-content: center;
        padding: 1em 0;
        flex-direction: column;
        align-items: center;
        
        a {
            display: block;
            height: auto;
            img {
                max-width: 300px;
                width: 100%;
                display: inline-block;
                margin: 0;
                padding-top: 0.2em;
                margin: 0 0.5em;
                border-radius: 3px;
                background: rgb(239,239,239);
                background: rgb(97,55,13);
                background: linear-gradient(267deg,rgba(97,55,13,1) 0%,rgb(122 73 23) 58%,rgba(204,153,102,1) 100%);
                background-size: 200%;
                border: 3px solid #333;
                transition: all .1s;
                
                &:hover {
                    background-color: #2d2d2d; 
                    background-position: -100%;
                }
            }
        }
    }
}
    
    .other-div {
        margin: 1em 5% 3em 5%;
        display: flex;
        flex-direction: column;
        align-items: center;
        p {
            max-width: 90%;
            text-align: left;
        }
    }
    
    @media screen and (min-width: 660px) {
        .cta-area .cta-wrapper {
            flex-direction: row;
        }
    }

    @media screen and (min-width: 920px) {

        .cta-area p, .other-div p {
            max-width: 70%;
        }
    }


    @media screen and (min-width: 1200px) {
        display: flex;
        .cta-area {
            width: 50%;
            display: flex;
            flex-direction: column;
            align-items: center;
            p {
               width: 75%; 
            }
            .cta-wrapper {
                align-items: baseline;
                background-color: #f7f0eb;
                justify-content: center;
                a img {
                    max-width: 275px;
                }
            }
            
        }
        .other-div {
            margin: 0;
            max-width: 50%;
            padding: 0;
            p {
                width: 75%;
                text-align: left;
                display: inline-block;
            }
        }
    }
`