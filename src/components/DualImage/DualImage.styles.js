import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

export const StyledImg = styled(GatsbyImage)`
  img {
    transition: all 0.3s !important;
  }
  .gatsby-image-wrapper {
    position: static !important;
  }
`
export const DualImgWrapper = styled.div`
  text-align: center;
  position: relative;
  max-width: 399px;
  display: inline-block;
  a {
    position: absolute;
    display: inline-block;
    margin-bottom: 2em;
    text-align: center;
    width: 100%;
    max-width: 220px;
    box-shadow: 0px 4px 5px #000;
    left: 25%;
    left: clamp(22%, 22%, 35%);
    z-index: 1;
    bottom: 1rem;
    border: 2px solid #fff;
  }
`

export const DualImg = styled.div`
  margin-bottom: 20px;
  max-height: 150px;
  overflow: hidden;
  max-width: 100%;

  @media (min-width: 768px) {
    max-height: 200px;
    margin: 0 0.5em 20px 0.5em;
  }
`

export const DualImageTextWrapper = styled.div`
  color: #fff;
  top: 0;
  height: 100%;
  background-color: rgb(0, 0, 0, .25);
  padding: 0.25em 0.5em;
  background: linear-gradient(267deg,rgba(97,55,13,1) 0%,rgb(122 73 23) 58%,rgba(204,153,102,1) 100%);
  background-size: 200%;
  border-radius: 2px;
  transition: all .1s;
  
  &:hover {
    background-position: -100%;
  }
`

export const DualImageText = styled.p`
  text-shadow: 1px 1px 2px rgb(0, 0, 0), 2px 2px 4px rgb(0, 0, 0);
  font-family: "Teko";
  font-family: "BarlowCondensed";
  font-weight: 700;
  letter-spacing: 1.5px;
  font-size: 1.3rem;
  text-transform: uppercase;
  margin: 0px;
  padding: 0px;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }

  @media (min-width: 992px) {
    font-size: 1.3rem;
  }

  @media (min-width: 1200px) {
    font-size: 1.5rem;
  }
`
