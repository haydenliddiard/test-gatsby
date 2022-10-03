import React from "react";
import {HamburgerButton} from "./Hamburger.styles"
import icon from "../../images/hamburger.svg"

const Hamburger = ({HandleOverlayMenu}) => (
    <HamburgerButton onClick={HandleOverlayMenu}>
        <img src={icon} alt="menu-hamburger" id="menu-hamburger" />
    </HamburgerButton>
)

export default Hamburger