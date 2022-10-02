import React from "react";
import "./Navbar.css";
import { useState } from "react";
import icon from "../../assets/icons/b.png";
import speed from "../../assets/icons/speed.png";
import key from "../../assets/icons/key.png";
import user from "../../assets/icons/user.png";
import promotion from "../../assets/icons/promotion.png";
import grapic from "../../assets/icons/visualization.png";
import arrow from "../../assets/icons/arrow.png";
import settings from "../../assets/icons/settings.png";
import like from "../../assets/icons/like.png";
import clock from "../../assets/icons/clock.png";
import eye from "../../assets/icons/eye.png";
import arow from "../../assets/icons/arow.png";


function Navbar(){
    const [styleBtn,setStyleBtn] = useState({display: "none",width: "0px"});

    function ClickArrow(){
       setStyleBtn({display: "block",width: "100px",transition: "1s"})
    }

    return(
        <div className="navbar-section" >
            <ul style={styleBtn}>
                <li><img src={icon}/></li>
                <li><img src={speed}/></li>
                <li><img src={key}/></li>
                <li><img src={user}/></li>
                <li><img src={promotion}/></li>
                <li><img src={grapic}/></li>
                <li><img src={arrow}/></li>
                <li><img src={settings}/></li>
                <li><img src={like}/></li>
                <li><img src={clock}/></li>
                <li><img src={eye}/></li>
            </ul>
            <div className="btn-menu" onClick={ClickArrow}>
               <img src={arow}/>
            </div>
        </div>
    )
}

export default Navbar;