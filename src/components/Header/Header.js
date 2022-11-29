import React from "react";
import {Link} from "gatsby"
import { useMenuQuery } from "../../hooks/useMenuQuery";
import Navigation from "../Navigation/Navigation"
import {Wrapper, Content} from './Header.styles'
import logo from "../../images/one-shot-coffee2.svg"
import Headroom from "react-headroom"
import Hamburger from "../Hamburger/Hamburger";

const Header = ({HandleOverlayMenu, menuOpen}) => {
    const {site, menu} = useMenuQuery()
    return (
        <div>
        <Headroom>
        <Wrapper>
        <Hamburger menuOpen={menuOpen} HandleOverlayMenu={HandleOverlayMenu} /> 
            <Content>
            <Link to="/">
                <img src={logo} alt={site.siteMetadata.title} />
            </Link>
                <Navigation menu={menu.menuItems.nodes}/>
            </Content>
        </Wrapper>
        </Headroom>
        </div>
    )
}

export default Header