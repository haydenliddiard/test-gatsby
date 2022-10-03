import React, {useState} from "react"
import {GlobalStyles, Primary} from './Layout.styles'
import Header from "../components/Header/Header"
import Hamburger from "../components/Hamburger/Hamburger"
import OverlayMenu from "../components/OverlayMenu/OverlayMenu"
import Footer from "../components/Footer/Footer"
import ContributerArea from "../components/Contributers/ContributersArea/ContributerArea"

const Layout = ({children}) => {
    const [menuOpen, setMenuOpen ] = useState(false);

    // takes prev state and reverse
    const HandleOverlayMenu = () => setMenuOpen(prev => !prev);

    return (
        <>
        <GlobalStyles/>
        <Hamburger HandleOverlayMenu={HandleOverlayMenu} />
        <OverlayMenu menuOpen={menuOpen} callback={HandleOverlayMenu} />
        <Header/>
        <Primary>{children}</Primary>
        <ContributerArea />
        <Footer />
        </>
    )
}

export default Layout