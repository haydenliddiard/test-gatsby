import React from "react";
import { Link } from "gatsby";
import { FooterLinksWrapper } from "./FooterLinks.styles";
import { useFooterMenuQuery } from "../../hooks/useFooterMenuQuery";

const FooterLinks = () => {
    const {wpMenu: {menuItems}} = useFooterMenuQuery();
    // console.log(menuItems)
    return (
        <FooterLinksWrapper>
            {menuItems.nodes.map((child, i) => (
                <Link to={child.uri} key={child.id}>
                    {child.label}
                </Link>
            ))}
        </FooterLinksWrapper>
    )
}

export default FooterLinks