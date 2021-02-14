import logo from "../assets/img/Vector.svg";
import React, {useState} from "react";



let navBarMenuClass = "collapse navbar-collapse justify-content-center text-uppercase  show m-2 menu-item";

function navbar(){
    return (
        <div>
            <nav className="navbar navbar-expand-lg  nav-menu">
                <a href="#" className="navbar-brand text-light text-uppercase">
                    <img src={logo} className={"logo"} alt="logo"/>
                    <span className="text-dark">MyVPN</span>
                </a>
                <div className={navBarMenuClass} id="myNavbar">
                    <ul className="navbar-nav">
                        <li><a href="#" className="nav-link m-2 menu-item text-dark">About</a></li>
                        <li><a href="#" className="nav-link m-2 menu-item text-dark">Feature</a></li>
                        <li><a href="#" className="nav-link m-2 menu-item text-dark">Pricing</a></li>
                        <li><a href="#" className="nav-link m-2 menu-item text-dark">Testimonials</a></li>
                        <li><a href="#" className="nav-link m-2 menu-item text-dark">Help</a></li>
                    </ul>
                </div>
                <div className="text-right">
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
