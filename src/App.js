import React, {useState} from "react";
import NavBar from "./components/navbar";
import Info from "./components/info";
import TopContent from "./components/topContent";
import ServiceDescription from "./components/serviceDescription";
import Plan from "./components/plan";
import Cards from "./components/cards";
import Subscribe from "./components/subscribe";
import Footer from "./components/footer";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import logo from "./assets/img/Vector.svg"
import image1 from "./assets/img/Illustration 1.svg@1X.png"
import image2 from "./assets/img/Illustration 2.svg@1X.png"
import boxImage from "./assets/img/Premium.png"
import person from "./assets/img/person.svg"
import location from "./assets/img/location.svg"
import server from "./assets/img/server.svg"



function App() {

    return (
        <div className="App">
                <div className="container">
                    <NavBar></NavBar>
                    <TopContent></TopContent>
                    <Info></Info>
                    <ServiceDescription></ServiceDescription>
                    <Plan></Plan>
                    <Cards></Cards>
                    <Subscribe></Subscribe>
                </div>

            <Footer></Footer>
        </div>
    );
}

export default App;
