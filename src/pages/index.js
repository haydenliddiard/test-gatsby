import * as React from "react";
import {graphql} from "gatsby";
import Hero from "../components/Hero/Hero";
import DualImageArea from "../components/DualImageArea/DualImageArea";
import { ImageInsert } from "../components/ImageInsert/ImageInsert";
import {Seo} from "../components/seo"
import NewPageLinkArea from "../components/NewPageLinkArea/NewPageLinkArea";
import Cta from "../components/Cta/Cta";

const IndexPage = ({data}) => {
  const homeData = data.wpPage.Acfhomepage

  return (
    <>
      <Hero />
      <Cta />
      <DualImageArea />
      <ImageInsert>
        <h4>
          {homeData.subtextarea}
        </h4>
      </ImageInsert>
    <NewPageLinkArea />


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