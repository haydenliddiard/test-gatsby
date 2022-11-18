import React from 'react'
import {graphql} from 'gatsby'
import { StyledImg } from '../pagehero.styles'
import { Seo } from '../components/seo'
// import "../index.scss";

const pageTemplate = ({data}) => {
    const imageData = data.wpPage?.featuredImage?.node?.localFile.childImageSharp.gatsbyImageData;

    return (
        <>
            {imageData ? (<StyledImg image={imageData} alt="Hero Image" loading="eager"/>) : (null)}
            {/* <StyledImg image={imageData} alt="Hero Image" /> */}
            <h1>{data.wpPage.title}</h1>
            {/* <h2>{data.wpPage.genericPageAcf.pagetext}</h2> */}
            <div>
                <div className="worpress-page-container" dangerouslySetInnerHTML={{__html: data.wpPage.content}} />
            </div>
        </>
    )
}

export default pageTemplate;

export const Head = ({data}) => (
    <>
  <title>{data.wpPage.title}</title>
  <Seo />
    </>
  );

export const pageQuery = graphql`
    query($id: String!) {
        wpPage(id: {eq: $id}) {
            id
            title
            content
            featuredImage {
                node {
                    localFile {
                    childImageSharp {
                        gatsbyImageData(placeholder: BLURRED, width: 1920)
                    }
                    }
                }
            }
        }
    }
`
