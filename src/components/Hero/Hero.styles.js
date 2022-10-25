import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

export const StyledImg = styled(GatsbyImage)`
  max-height: 600px;
  margin-bottom: 60px;
  margin-bottom: 30px;
  width: 125%;
  margin-bottom: 0;
  margin-top: 3em;
  
  @media screen and (min-width: 330px) {
    width: 100%;
  }
  @media screen and (min-width: 990px) {
    width: 55%;
  }
  `
  // margin-left: -35%;

export const Wrapper = styled.div`
  position: relative;
  background-color: #cc9966;
  margin-bottom: 1em;
  
  img {
    width: 100%;
  }
  @media screen and (min-width: 360px) {
    margin-bottom: 1.25em;
  }
  @media screen and (min-width: 820px) {
    margin-bottom: 1.5em;
  }
  @media screen and (min-width: 990px) {
    margin-bottom: 0;
    display: inline-flex;
    flex-direction: row-reverse;
  }
`

export const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`
export const MajorMessage = styled.div`
  position: absolute;
  bottom: -2em;
  display: flex;
  justify-content: initial;
  align-items: center;
  left: 1em;
  bottom: -0.8em;
  width: 100%;
  left: 0;

  p {
    font-size: 1.2rem;
    font-weight: 600;
    color: #fff;
    text-transform: none;
    text-align: center;
    text-shadow: 1px 1px 2px rgb(0 0 0), 2px 2px 2px rgb(0 0 0);
    font-family: initial;
    z-index: 100;
    position: absolute;
    bottom: -2.6em;
    margin: 0;
    padding: 0.25em 0;
    width: 100%;
    background-color: #cc9966;
    line-height: initial !important;  
  }
  @media screen and (min-width: 330px) {
    p {
      bottom: -1em;
    }
  }
  @media screen and (min-width: 375px) {
    p {
      font-size: 1.25rem;
    }
  }
  @media screen and (min-width: 820px) {
    p {
      
      font-size: 1.5rem;
    }
  }

  @media screen and (min-width: 990px) {
    top: 1em;
    p {
      position: initial;
      color: #fff;
      background: transparent;
      width: 25%;
      font-size: 2.5rem;
      line-height: .8 !important;
      margin-left: 2em;
    }
  }
  @media screen and (min-width: 1200px) {
    p {
      color: #fff;
      background: transparent;
      line-height: .8;
      margin-left: 3em;
    }
  }
  @media screen and (min-width: 1250px) {
    p {
      top: .7em;
    }
  }
`

export const MinorMessage = styled.div`
background-color: #2d2d2d; 
padding: 0.25em; 
text-align: center; 
color: #cc9966; 
margin-top: 2em; 
font-weight: initial; 
font-size: 1rem;

@media screen and (min-width: 820px) {
  font-size: 1.25rem;
  margin-top: 1.8em;
}
@media screen and (min-width: 990px) {
  font-weight: 600;
  margin-top: -8px;
}
`
