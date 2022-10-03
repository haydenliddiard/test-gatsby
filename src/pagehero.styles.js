import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

export const StyledImg = styled(GatsbyImage)`
  max-height: 600px;
  margin-bottom: 60px;
  margin-bottom: 30px;
  width: 125%;
  margin-bottom: 2em;
  
  @media screen and (min-width: 330px) {
    width: 100%;
  }
  @media screen and (min-width: 990px) {
  }
  `