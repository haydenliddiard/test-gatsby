import React from "react";
import {Link} from "gatsby"
import { useMenuQuery } from "../../hooks/useMenuQuery";
import Navigation from "../Navigation/Navigation"
import {Wrapper, Content} from './Header.styles'
import logo from "../../images/main-logo.svg"

const Header = () => {
    const {site, menu} = useMenuQuery()
    return (
        <Wrapper>
            <Content>
            <Link to="/">
                <img src={logo} alt={site.siteMetadata.title} />
            </Link>
                <Navigation menu={menu.menuItems.nodes}/>
            </Content>
        </Wrapper>
    )
}

export default Header