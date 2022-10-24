import React from "react";
import {HamburgerButton} from "./Hamburger.styles"
// import icon from "../../images/hamburger.svg"

// changed presentational component to cuntional
const Hamburger = ({HandleOverlayMenu, menuOpen}) => {
    // console.log(`${menuOpen} + meun open`)

    return (
    <HamburgerButton onClick={HandleOverlayMenu} menuOpen={menuOpen}>
        <div id="one"></div>
        <div id="two"></div>
        <div id="three"></div>
        <div id="four"></div>
    </HamburgerButton>
    )
    // <HamburgerButton onClick={HandleOverlayMenu}>
    //     <img src={icon} alt="menu-hamburger" id="menu-hamburger" />
    // </HamburgerButton>
}

export default Hamburger