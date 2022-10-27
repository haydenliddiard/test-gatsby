import React, {useState, useRef, useEffect} from "react"
// import {GlobalStyles, Primary} from './Layout.styles'
import Header from "../Header/Header"
import Hamburger from "../Hamburger/Hamburger"
import OverlayMenu from "../OverlayMenu/OverlayMenu"
import Footer from "../Footer/Footer"
import ContributerArea from "../Contributers/ContributersArea/ContributerArea"
import "../../index.scss";

const Layout = ({children, location}) => {
    const [menuOpen, setMenuOpen ] = useState(false);
    // myRef once set doesnt cgange
    
    // takes prev state and reverse
    const HandleOverlayMenu = () => setMenuOpen(prev => !prev);
    const CloseMenu = () => setMenuOpen(false);

    return (
        <>
        <Hamburger menuOpen={menuOpen} HandleOverlayMenu={HandleOverlayMenu} />
        <OverlayMenu menuOpen={menuOpen} callback={HandleOverlayMenu}/>
        <Header/>
        <main onClick={CloseMenu}>{children}</main>
        <ContributerArea />
        <Footer />
        </>
    )
}

export default Layout