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

export const DualImg = styled.div`
  margin-bottom: 20px;
  max-height: 100px;
  position: relative;
  overflow: hidden;
  max-width: 100%;
  
  :hover img {
    transform: scale(1.1);
    filter: blur(2px);
  }

  @media (min-width: 768px) {
    max-height: 200px;
  }
`

export const DualImageTextWrapper = styled.div`
  position: absolute;
  color: #fff;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: rgb(0, 0, 0, .25);

`

export const DualImageText = styled.p`
  text-shadow: 1px 1px 2px rgb(0, 0, 0), 2px 2px 4px rgb(0, 0, 0);
  font-family: "Teko";
  font-weight: 700;
  letter-spacing: 1.5px;
  font-size: 1.3rem;
  text-transform: uppercase;
  margin: 0px;
  padding: 0px;

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  @media (min-width: 992px) {
    font-size: 1.3rem;
  }

  @media (min-width: 1200px) {
    font-size: 1.5rem;
  }
`
