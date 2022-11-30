import React from "react";
import { Link } from "gatsby";
import { Overlay } from "./OverlayMenu.styles";
import background from '../../images/beans.jpg';
import {useMenuQuery} from '../../hooks/useMenuQuery';

const OverlayMenu = ({menuOpen, callback}) => {
    const {menu} = useMenuQuery();
    return (
    <Overlay menuOpen={menuOpen} style={{backgroundImage: `url(${background})`,     backgroundBlendMode: 'multiply'}}>
        <div className="fake-hamburger" onClick={callback} role="presentation">
            <div id="one"></div>
            <div id="two"></div>
            <div id="three"></div>
            <div id="four"></div>
        </div>
        <div className="inner">
        <ul className='overlayMenu'>
                {menu?.menuItems.nodes.map(item => 
                (
                    !item.parentId ? (
                        <li key={item.id}>
                            <Link to={item.url} activeClassName="overlayActive" onClick={callback}>
                                {item.label}
                            </Link>
                        </li>
                    ) : null
                )
                )}
            </ul>
            <div style={{display: "flex", justifyContent: "center"}}>
            <h4 style={{color: "#fff", width: "80%", textAlign: "center"}}>
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