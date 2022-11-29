import React from "react";
import {Link} from "gatsby"
import { useMenuQuery } from "../../hooks/useMenuQuery";
import Navigation from "../Navigation/Navigation"
import {Wrapper, Content} from './Header.styles'
import logo from "../../images/one-shot-coffee2.svg"
import Headroom from "react-headroom"
import Hamburger from "../Hamburger/Hamburger";
import OverlayMenu from "../OverlayMenu/OverlayMenu";
const Header = ({HandleOverlayMenu, menuOpen}) => {
    const {site, menu} = useMenuQuery()
    return (
        <div>
        <OverlayMenu menuOpen={menuOpen} callback={HandleOverlayMenu}/>
        <Headroom>
        <Wrapper>
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