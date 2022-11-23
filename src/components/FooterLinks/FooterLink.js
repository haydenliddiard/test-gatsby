import React from "react";
import { Link } from "gatsby";
import { FooterLinksWrapper } from "./FooterLinks.styles";
import { useFooterLinksQuery } from "../../hooks/useFooterLinksQuery";

const FooterLinks = () => {
    const {wpMenu: {menuItems}} = useFooterLinksQuery();
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