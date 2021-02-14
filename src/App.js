import React, {useState} from "react";
import NavBar from "./components/navbar";
import Info from "./components/info";
import TopContent from "./components/topContent";
import ServiceDescription from "./components/serviceDescription";
import Plan from "./components/plan";
import Cards from "./components/cards";
import Subscribe from "./components/subscribe";
import Footer from "./components/footer";


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
