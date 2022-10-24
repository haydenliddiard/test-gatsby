import React from "react";
import { Link } from "gatsby";
import { Overlay } from "./OverlayMenu.styles";
import CloseButton from '../../images/close-menu-white.svg'
import background from '../../images/beans.jpg'
import {useMenuQuery} from '../../hooks/useMenuQuery'
// import { ImageInsert } from "../ImageInsert/ImageInsert";

const OverlayMenu = ({menuOpen, callback}) => {
    const {menu} = useMenuQuery();
    return (
    <Overlay menuOpen={menuOpen} style={{backgroundImage: `url(${background})`,     backgroundBlendMode: 'multiply'}}>
        <div className="inner">
        <ul className='overlayMenu'>
                {menu?.menuItems.nodes.map(item => 
                (
                    // should check if item url="#" and omit from menu
                    !item.parentId ? (
                        <li key={item.id}>
                            <Link to={item.url} activeClassName="overlayActive">
                                {item.label}
                            </Link>
                        </li>
                    ) : null
                    
                )
                
                )}
            </ul>
        {/* <div 
            className='closeButton'
            onClick={callback}
            onKeyDown={callback}
            role="button"
            tabIndex="0"
            >
                <img src={CloseButton} alt="close-button"/>
        </div> */}
            <div style={{display: "flex", justifyContent: "center"}}>
            <h4 style={{color: "#fff", width: "60%", textAlign: "center"}}>
                Hey we love coffee! It's the best way to jump start your day, if your like us you need to try ours. You will be hookeed after one shot.
            </h4>
            </div>
            
            <div className="overlay-cta">
            <Link to={menu.ctaoverlay.overlayonelink}>{menu.ctaoverlay.overlayonetext}</Link>
            <Link to={menu.ctaoverlay.overlaytwolink}>{menu.ctaoverlay.overlaytwotext}</Link>
            </div>
            </div>
    </Overlay>
    )
}

export default OverlayMenu