import * as React from "react"
import {graphql} from "gatsby"
import Layout from "../Layout/Layout"
import Hero from "../components/Hero/Hero"
import DualImageArea from "../components/DualImageArea/DualImageArea"
import { ImageInsert } from "../components/ImageInsert/ImageInsert"
import {Seo} from "../components/seo"
import NewPageLinkArea from "../components/NewPageLinkArea/NewPageLinkArea"
import { 
  TextBlock, 
  CenterTextBlockWrapper,
} from "../textareas.styles"
// import Background from "../images/cross-bkg.png"

const IndexPage = ({data}) => {
  const homeData = data.wpPage.Acfhomepage

  return (
    <Layout>
      <Hero />
      <DualImageArea />
      <ImageInsert>
        <h4>
          {homeData.subtextarea}
        </h4>
      </ImageInsert>
    <NewPageLinkArea />

    <CenterTextBlockWrapper 
    // style={{backgroundImage: `url(${Background})`}}
    >
      {/* <DarkHeading>
        {homeData.textHeaderOne}
      </DarkHeading> */}
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
    {/* <div style={{backgroundColor: "#2d2d2d", color: "#fff", padding: "2em", marginTop: "2em", textAlign: "center"}}>
      <p style={{maxWidth: "70%", display: "inline-block"}}>
    Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </p>
    </div> */}
    {/* was Homecontentstyles */}
    {/* IMPORTS WORDPRESS PAGE DATA */}
        <div className="worpress-page-container" dangerouslySetInnerHTML={{__html: data.wpPage.content}}/>
        {/* <Contributers /> */}
      </Layout>
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