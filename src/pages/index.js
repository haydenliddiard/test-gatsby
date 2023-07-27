import * as React from "react";
import {graphql} from "gatsby";
import Hero from "../components/Hero/Hero";
import DualImageArea from "../components/DualImageArea/DualImageArea";
import { ImageInsert } from "../components/ImageInsert/ImageInsert";
import {Seo} from "../components/seo"
import NewPageLinkArea from "../components/NewPageLinkArea/NewPageLinkArea";
import Cta from "../components/Cta/Cta";
import MugArea from "../components/Mugs/MugArea";
// import AllCoffee from "../components/AllCoffee/AllCoffee";
import { motion } from "framer-motion"

const IndexPage = ({data}) => {
  const homeData = data.wpPage.Acfhomepage

  return (
    <>
      <Hero />
      <motion.main
                    initial={{ opacity: 0, x: -600 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 600 }}
                    transition={{
                        type: "spring",
                        mass: 0.35,
                        stiffness: 75,
                        duration: 0.3,
                        delay: 0.5,
                        
                    }}
                    >
      <Cta />
      </motion.main>
      <DualImageArea />
      {/* <AllCoffee /> */}
      <ImageInsert>
        <h4>
          {homeData.subtextarea}
        </h4>
      </ImageInsert>
      <MugArea />
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