import React, {useState} from "react"
// import {GlobalStyles, Primary} from './Layout.styles'
import Header from "../Header/Header"
import Hamburger from "../Hamburger/Hamburger"
import OverlayMenu from "../OverlayMenu/OverlayMenu"
import Footer from "../Footer/Footer"
import ContributerArea from "../Contributers/ContributersArea/ContributerArea"
import "../../index.scss";

const Layout = ({children}) => {
    const [menuOpen, setMenuOpen ] = useState(false);
    const HandleOverlayMenu = () => setMenuOpen(prev => !prev);
    const CloseMenu = () => setMenuOpen(false);
    // onClick={CloseMenu}  throws warning should have tab index
    return (
        <>
        <Hamburger menuOpen={menuOpen} HandleOverlayMenu={HandleOverlayMenu} />
        <OverlayMenu menuOpen={menuOpen} callback={HandleOverlayMenu}/>
        <Header/>
        <div onClick={CloseMenu}>
            {children}
        </div>
        <ContributerArea />
        <Footer />
        </>
    )
}

export default Layout