import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import background from "../../images/coffee-light-texture.webp"

export const StyledImg = styled(GatsbyImage)`
  max-height: 600px;
  margin-bottom: 60px;
  margin-bottom: 30px;
  width: 125%;
  margin-bottom: 0;
  margin-top: 3.5em;
  
  @media screen and (min-width: 330px) {
    width: 160%;
    margin-left: -59%;
    .gatsby-image-wrapper-constrained {
      max-width: 160%;
    }
  }
  @media screen and (min-width: 800px) {
    width: 140%;
    margin-left: -40%;
  }
  @media screen and (min-width: 990px) {
    width: 100%;
    margin-left: 0;
  }
  `

export const Wrapper = styled.div`
  position: relative;
  background-color: #323232;
  background-color: #cc9966;
  margin-bottom: 1em;
  background-image: url('${background}');
  width: 100%;
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
  display: flex;
  justify-content: initial;
  align-items: center;
  left: 1em;
  bottom: -27px;
  width: 100%;
  left: 0;
  p {
    font-family: "Yellowtail";
    font-family: "Montserrat";
    background-image: url('${background}');
    font-size: 1.2rem;
    font-weight: 100;
    color: #000;
    text-transform: none;
    text-align: center;
    ont-weight: bolder;
    color: #fff;
    text-shadow: 2px 3px #000, 3px 4px #000;
    
    z-index: 100;
    position: absolute;
    margin: 0;
    padding: 0.25em 0;
    width: 100%;
    background-color: #cc9966;
    line-height: initial !important;  
  }
  @media screen and (min-width: 330px) {
    bottom: -16px;
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
    top: 3em;
    p {
      text-shadow: 2px 3px #000, 3px 4px #000;
      position: initial;
      color: #fff;
      width: 35%;
      max-width: 310px;
      font-size: 2rem;
      padding: 0.5em 0;
      line-height: .8 !important;
      margin-left: 1.5em;
      background-color: #00000080;
      border: 4px solid #333333;
    }
  }
  @media screen and (min-width: 1200px) {
    p {
      line-height: .8;
      margin-left: 1.75em;
    }
  }
  @media screen and (min-width: 1250px) {
    p {
      top: .7em;
      padding: 0.5em;
      
    }
  }
`

export const MinorMessage = styled.div`
background-color: #2d2d2d; 
padding: 0.25em; 
padding-top: 0.5em; 
text-align: center; 
color: #cc9966; 
margin-top: 3em; 
font-weight: initial; 
font-size: 1rem;
font-family: "Montserrat";
font-weight: 800;
@media screen and (min-width: 330px) {
  margin-top: 42px;
}
@media screen and (min-width: 346px) {
  margin-top: 31px;
}
@media screen and (min-width: 360px) {
  margin-top: 31px;
}
@media screen and (min-width: 375px) {
  margin-top: 33px;
}
@media screen and (min-width: 820px) {
  font-size: 1.25rem;
  margin-top: 38px;
}
@media screen and (min-width: 990px) {
  font-weight: 600;
  margin-top: -8px;
}
`
// text-shadow: 1px 1px 2px rgb(0 0 0), 2px 2px 2px rgb(0 0 0);