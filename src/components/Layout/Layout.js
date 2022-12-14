import React, {useState} from "react"
// import {GlobalStyles, Primary} from './Layout.styles'
import Header from "../Header/Header"
import OverlayMenu from "../OverlayMenu/OverlayMenu"
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
        <main onClick={CloseMenu} role="presentation">
        <OverlayMenu menuOpen={menuOpen} callback={HandleOverlayMenu}/>
        <Header menuOpen={menuOpen} HandleOverlayMenu={HandleOverlayMenu}/>
        <div >
            {children}
        </div>
        <ContributerArea />
        <Footer />
        </main>
    )
}

export default Layout