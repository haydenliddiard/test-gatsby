import React from "react";
import {HamburgerButton} from "./Hamburger.styles"
// import icon from "../../images/hamburger.svg"

// changed presentational component to cuntional
const Hamburger = ({HandleOverlayMenu, menuOpen}) => {


    return (
    <HamburgerButton onClick={HandleOverlayMenu} menuOpen={menuOpen}>
        <div id="one"></div>
        <div id="two"></div>
        <div id="three"></div>
        <div id="four"></div>
    </HamburgerButton>
    );
}

export default Hamburger