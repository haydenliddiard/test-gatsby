// 
import React, {useState} from "react"
// import {GlobalStyles, Primary} from './Layout.styles'
import Header from "../Header/Header"
import OverlayMenu from "../OverlayMenu/OverlayMenu"
import Footer from "../Footer/Footer"
import ContributerArea from "../Contributers/ContributersArea/ContributerArea"
import "../../index.scss";
import { motion } from "framer-motion"

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
            <main onClick={CloseMenu} role="presentation">
                <OverlayMenu menuOpen={menuOpen} callback={HandleOverlayMenu}/>
                <Header menuOpen={menuOpen} HandleOverlayMenu={HandleOverlayMenu}/>
                    <motion.main
                    initial={{ opacity: 0, x: -600 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 600 }}
                    transition={{
                        type: "spring",
                        mass: 0.35,
                        stiffness: 75,
                        duration: 0.3,
                        delay: 0.5,
                        
                    }}
                    >
                        <div >
                            {children}
                        </div>
                        <ContributerArea />
                    </motion.main>
                    <Footer />
                </main>
            
        </>
    )
}

export default Layout