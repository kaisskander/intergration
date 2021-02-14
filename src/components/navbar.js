import logo from "../assets/img/Vector.svg";
import menuLogo from "../assets/img/menu 1.svg"
import React, {useState} from "react";



let navBarMenuClass = "collapse navbar-collapse justify-content-center text-uppercase m-2 menu-item";

function navbar(){
    return (
        <div>
            <nav className="navbar navbar-expand-lg  nav-menu">
                <a href="#" className="navbar-brand d-flex align-items-center ">
                    <img src={logo} className={"logo"} alt="logo"/>
                    <h4 className={"ml-2 text-dark mb-0"}>My<b>VPN</b></h4>
                </a>
                <button className="navbar-toggler nav-button" type="button" data-toggle="collapse"
                        data-target="#myNavbar">
                    <img src={menuLogo} alt=""/>
                </button>
                <div className={navBarMenuClass} id="myNavbar">
                    <ul className="navbar-nav">
                        <li><a href="#" className="nav-link m-2 menu-item text-dark">About</a></li>
                        <li><a href="#" className="nav-link m-2 menu-item text-dark">Feature</a></li>
                        <li><a href="#" className="nav-link m-2 menu-item text-dark">Pricing</a></li>
                        <li><a href="#" className="nav-link m-2 menu-item text-dark">Testimonials</a></li>
                        <li><a href="#" className="nav-link m-2 menu-item text-dark">Help</a></li>
                    </ul>
                </div>
                <div className="text-right d-none d-lg-block">
                    <ul className="navbar-nav align-items-center">
                        <li><a href="#" className="nav-link m-2 menu-item text-dark">Sign In</a></li>
                        <li className="btn btn-outline-primary btnSignup">Sing Up</li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default navbar;
