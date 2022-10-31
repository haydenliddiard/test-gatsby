import React from "react";
import { Link } from "gatsby";
import { useFooterQuery } from "../../hooks/useFooterQuery";
import { 
    StyledImg, 
    FooterArea,
    FooterHeading,
    Wrapper
} from "./Footer.styles";
import Background from "../../images/coffee-light-texture.png"
import FooterLinks from "../FooterLinks/FooterLink";

const Footer = () => {

    const {footQuery} = useFooterQuery();
    // const socialLinks = Object.values(footQuery.footerMenu).length
    // console.log(footQuery.length)
    // console.log(socialLinks)

    return (
        <Wrapper style={{backgroundImage: `url(${Background})`}}>
                <FooterHeading>
                    <h3>Hells Yeah We like Coffee!</h3>
                    <span>Follow us on social for more updates, great recipies and more great coffee info</span>
                </FooterHeading>
            <FooterArea>
                {new Array(3).fill("").map((elem, i) => (
                    <Link to={footQuery.footerMenu[`link${i + 1}`]} key={i}>
                        <StyledImg image={footQuery.footerMenu[`image${i + 1}`].localFile.childImageSharp
                    .gatsbyImageData} alt={`social${i}`}/>
                    </Link>
                ))}
            </FooterArea>
            <h4>Check out our other Resoucres</h4>
            <FooterLinks />
        </Wrapper>
    )
}

export default Footer;