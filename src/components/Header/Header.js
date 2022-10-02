import React from "react";
import "./Header.css";
import menu from "../../assets/icons/menu.png";
import en from "../../assets/icons/en.png";
import max from "../../assets/img/max.png";
import down from "../../assets/icons/down.png";
import likee from "../../assets/icons/likee.png";
import check from "../../assets/icons/check.png";
import profit from "../../assets/icons/profit.png";
import commissions from "../../assets/icons/commissions.png";
import question from "../../assets/icons/question.png";
function Header(){

    return(
        <div className="main-container-header">
            <div className="header-container-1">
                <div className="header-section-1">
                    <img src={menu} className="icon-menu"/>
                </div>
                <div className="header-section-2">
                    <div className="lang-section">
                        <img src={en}/>
                        <p>EN</p>
                    </div>
                    <div className="section-user">
                       <img src={max} className="user-img"/> 
                       <div>
                            <p>Hello, Max! </p>
                            <p className="user-text">Last login: Thu Mar 20 2014</p>
                       </div>
                       
                    </div>
                    <img src={down} className="down-img"/>
                </div>
            </div>
            <div className="header-container-2">
                <div className="header-section-3">
                    <p>Dashboard</p>
                </div>
                <div className="header-section-4">
                    <img src={likee}/>
                    <p>ADD THIS PAGE TO FAVORITES</p>
                </div>
            </div>
            <div className="header-bottom">
                <div className="header-num">
                    <div>
                        <p className="text-1">25</p>
                        <div>
                            <img src={check} className="icon-header"/>
                            <span>SIGNUPS</span>
                        </div>
                    </div>
                </div>
                <div className="header-num">
                    <div>
                        <p className="text-2">$1000</p>
                        <div>
                            <img src={profit} className="icon-header"/>
                            <span>PROFIT</span>
                        </div>
                    </div>
                </div>
                <div className="header-num">
                    <div>
                        <p className="text-3">$350</p>
                        <div>
                            <img src={commissions} className="icon-header"/>
                            <span>COMMISSIONS</span>
                        </div>
                    </div>
                </div>
                <div className="header-num">
                    <div>
                        <p className="text-1">$300</p>
                        <div>
                            <img src={question} className="icon-header"/>
                            <span>PENDING COMMISSION</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;