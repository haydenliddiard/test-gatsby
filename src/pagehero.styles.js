import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

export const StyledImg = styled(GatsbyImage)`
  max-height: 600px;
  margin-bottom: 60px;
  margin-bottom: 30px;
  width: 125%;
  margin-bottom: 2em;
  margin-top: 0;
  margin-left: -12%;
  
  @media screen and (min-width: 330px) {
    width: 100%;
    margin-left: 0%;
  }
  @media screen and (min-width: 990px) {
  }
  `