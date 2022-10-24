import * as React from "react";
import {graphql} from "gatsby";
import Hero from "../components/Hero/Hero";
import DualImageArea from "../components/DualImageArea/DualImageArea";
import { ImageInsert } from "../components/ImageInsert/ImageInsert";
import {Seo} from "../components/seo"
import NewPageLinkArea from "../components/NewPageLinkArea/NewPageLinkArea";
import { 
  TextBlock, 
  CenterTextBlockWrapper,
} from "../textareas.styles";

const IndexPage = ({data}) => {
  const homeData = data.wpPage.Acfhomepage

  return (
    <>
      <Hero />
      <DualImageArea />
      <ImageInsert>
        <h4>
          {homeData.subtextarea}
        </h4>
      </ImageInsert>
    <NewPageLinkArea />

    <CenterTextBlockWrapper >
      <TextBlock>
      {homeData.textareaone}
      </TextBlock>
        <div
        style={{
          textAlign: "center",
          display: "inline-block",
          padding: "0.25em 0.5em",
          backgroundColor: "#cc9966",
          fontSize: "1.5em",
          color: "#fff"}}
        >See Our Process</div>
    </CenterTextBlockWrapper>
    {/* IMPORTS WORDPRESS PAGE DATA */}
        <div className="worpress-page-container" dangerouslySetInnerHTML={{__html: data.wpPage.content}}/>
      </>
  )
}

export default IndexPage

export const Head = () => (
  <>
<title>Home Page</title>
<Seo />
  </>
);

export const query = graphql`

query HomePageQuery {
  wpPage(databaseId:{eq: 6}) {
    content
    Acfhomepage {
      textHeaderOne
      textareaone
      textareatwo
      subtextarea
    }
  }
}
`