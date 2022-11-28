import React, {useState} from "react"
// import {GlobalStyles, Primary} from './Layout.styles'
import Header from "../Header/Header"
// import Hamburger from "../Hamburger/Hamburger"
// import OverlayMenu from "../OverlayMenu/OverlayMenu"
import Footer from "../Footer/Footer"
import ContributerArea from "../Contributers/ContributersArea/ContributerArea"
import "../../index.scss";

const Layout = ({children}) => {
    const [menuOpen, setMenuOpen ] = useState(false);
    const HandleOverlayMenu = () => setMenuOpen(prev => !prev);
    const CloseMenu = (e) => {
        if( menuOpen === true && e.target.parentNode !== 'overlay') {
            setMenuOpen(false)
        }
    };
    return (
        <>
        {/* <Hamburger menuOpen={menuOpen} HandleOverlayMenu={HandleOverlayMenu} /> */}
        {/* <OverlayMenu menuOpen={menuOpen} callback={HandleOverlayMenu}/> */}
        <Header menuOpen={menuOpen} HandleOverlayMenu={HandleOverlayMenu}/>
        <div onClick={CloseMenu} role="presentation">
            {children}
        </div>
        <ContributerArea />
        <Footer />
        </>
    )
}

export default Layout