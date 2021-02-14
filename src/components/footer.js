import logo from "../assets/img/Vector.svg";
import React from "react";

function footer(){
    return(
        <section className="px-5 footer">
                <div className="row py-4">
                    <div className="col-lg-6">
                        <div className="d-flex px-2 align-items-center">
                            <img src={logo} width={"35"} height={"36,23"} alt="logo2"/>
                            <h1 className="text-dark ml-2">My<b>VPN</b></h1>
                        </div >
                            <p className={"lead"}>MyVPN is a private virtual network that has unique features and has high security.</p>
                    </div>
                    <div className="col-lg-6 text-dark">
                        <div className="row">
                            <div className="col-4">
                                <h5 className="pb-3">Product</h5>
                                <ul className="list-unstyled ">
                                    <li>
                                        <a href="#" className="footer-link text-dark">Download</a>
                                    </li>
                                    <li>
                                        <a href="#" className="footer-link text-dark">Pricing</a>
                                    </li>
                                    <li>
                                        <a href="#" className="footer-link text-dark">Locations</a>
                                    </li>
                                    <li>
                                        <a href="#" className="footer-link text-dark">Server</a>
                                    </li>
                                    <li>
                                        <a href="#" className="footer-link text-dark">Countries</a>
                                    </li>
                                    <li>
                                        <a href="#" className="footer-link text-dark">Blog</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-4">
                                <h5 className="pb-3">Engage</h5>
                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#" className="footer-link text-dark">LastlesVPN ?</a>
                                    </li>
                                    <li>
                                        <a href="#" className="footer-link text-dark">FAQ</a>
                                    </li>
                                    <li>
                                        <a href="#" className="footer-link text-dark">Tutorials</a>
                                    </li>
                                    <li>
                                        <a href="#" className="footer-link text-dark">About Us</a>
                                    </li>
                                    <li>
                                        <a href="#" className="footer-link text-dark">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="#" className="footer-link text-dark">Terms of Service</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-4">
                                <h5 className="pb-3">Earn Money</h5>
                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#" className="footer-link text-dark">Affiliate</a>
                                    </li>
                                    <li>
                                        <a href="#" className="footer-link text-dark">Become Partner</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    );
}

export default footer;
