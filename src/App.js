import React, {useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCogs} from '@fortawesome/free-solid-svg-icons'
import {faThumbsUp} from '@fortawesome/free-solid-svg-icons'
import {faHandshake} from '@fortawesome/free-solid-svg-icons'

import cameraImg from "./assets/img/images/camera.png"
import nature from "./assets/img/images/nature.jpeg"

const initialState = {
    showMenu: false,
}


function App() {

    const [state, setState] = useState(initialState);


    const toggleNavBar = () => {

        setState(prevState => {
            return {
                ...prevState,
                showMenu: !prevState.showMenu
            };
        })

    }

    //let navBarBtnClass = "navbar-toggler";
    let navBarMenuClass = "collapse navbar-collapse justify-content-end text-uppercase font-weight-bold m-2 menu-item";
    if (state.showMenu) {
        //  navBarBtnClass += " show";
        navBarMenuClass += " show";
    }

    return (
        <div className="App">
            <section>
                <header>
                    {/*navbar*/}
                    <nav className="navbar navbar-expand-lg fixed-top nav-menu">
                        <a href="#" className="navbar-brand text-light text-uppercase">
                            <span className="h2 font-weight-bold">photo</span>
                            <span className="h1">X</span>
                        </a>
                        <button onClick={toggleNavBar}
                                className={state.showMenu ? "navbar-toggler show" : "navbar-toggler"} type="button"
                                data-toggle="collapse" data-target="#myNavbar">
                            <div className="bg-light line1"></div>
                            <div className="bg-light line2"></div>
                            <div className="bg-light line3"></div>
                        </button>
                        <div className={navBarMenuClass} id="myNavbar">
                            <ul className="navbar-nav">
                                <li className="nav-item"><a href="#" className="nav-link m-2 menu-item">Home</a></li>
                                <li><a href="#" className="nav-link m-2 menu-item">Mission</a></li>
                                <li><a href="#" className="nav-link m-2 menu-item">Collection</a></li>
                                <li><a href="#" className="nav-link m-2 menu-item">Gallery</a></li>
                                <li><a href="#" className="nav-link m-2 menu-item">Customers</a></li>
                                <li><a href="#" className="nav-link m-2 menu-item">Pricing</a></li>
                                <li><a href="#" className="nav-link m-2 menu-item">Contact</a></li>
                            </ul>
                        </div>
                    </nav>
                    {/* end of navbar*/}
                    {/*banner*/}
                    <div className="text-light text-right banner text-md-right text-center">
                        <h1 className="display-4 banner-heading">Welcome to <span
                            className="text-uppercase">photo</span> <span className="display-3">X</span></h1>
                        <p className="lead banner-par">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio,
                            voluptatibus!</p>
                    </div>
                    {/*end of banner*/}
                </header>
            </section>
            {/*mission*/}
            <section className="p-5 mission">
                <div className="container-fluid">
                    {/*title*/}
                    <div className="row text-white text-center">
                        <div className="col m-4">
                            <h1 className="display-4 mb-4">Our Mission</h1>
                            <div className="underline mb-4"></div>
                            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                                architecto blanditiis corporis deleniti eos libero omnis provident quasi veniam
                                vero!</p>
                        </div>
                    </div>
                    {/*end of title*/}
                    <div className="row my-5">
                        <div className="col-md-4 text-center">
                            <FontAwesomeIcon icon={faCogs} className="text-danger fa-5x mb-4"/>
                            <h1 className="text-white">Creativity</h1>
                            <p className={"text-muted"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                                autem dolor sit temporibus? Accusantium ad et fuga maxime modi pariatur perspiciatis
                                sapiente sit sunt veniam.</p>
                        </div>
                        <div className="col-md-4 text-center">
                            <FontAwesomeIcon icon={faThumbsUp} className="text-danger fa-5x mb-4"/>
                            <h1 className="text-white">Quality</h1>
                            <p className={"text-muted"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                                autem dolor sit temporibus? Accusantium ad et fuga maxime modi pariatur perspiciatis
                                sapiente sit sunt veniam.</p>
                        </div>
                        <div className="col-md-4 text-center">
                            <FontAwesomeIcon icon={faHandshake} className="text-danger fa-5x mb-4"/>
                            <h1 className="text-white">Experience</h1>
                            <p className={"text-muted"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                                autem dolor sit temporibus? Accusantium ad et fuga maxime modi pariatur perspiciatis
                                sapiente sit sunt veniam.</p>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5 text-lg-left text-center">
                                <img src={cameraImg} width={"350"} alt="blabla"/>
                            </div>
                            <div className="col-lg-7 text-white text-lg-left text-center mission-text">
                                <h1>We know what we do</h1>
                                <p className="lead">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Accusamus architecto aut ipsum officia optio praesentium similique sint voluptates.
                                    Ab aliquam aliquid animi blanditiis culpa cum debitis deleniti dolore eligendi
                                    facilis
                                    impedit incidunt itaque iusto laboriosam maiores molestiae nam natus nisi nulla
                                    possimus quae quas
                                    rem soluta temporibus unde, voluptas voluptatibus.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            {/*end of mission*/}
            {/*collection*/}
            <section className={"bg-secondary py-4"}>
                <div className="container-fluid">
                    {/*title*/}
                    <div className="row text-white text-center">
                        <div className="col m-4">
                        <h1 className="display-4 mb-4">Collection</h1>
                        <div className="underline mb-4"></div>
                            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Adipisci amet dolore hic id iste neque numquam unde, velit voluptas? Quos.
                            </p>
                        </div>
                    </div>
                    {/*end of title*/}
                    <div className="row">
                        <div className="col-lg-4 col-sm-6 my-5">
                            <div className="card border-0 card-shadow">
                                <img src={nature} className={"card-img"}/>
                                <div className="card-img-overlay">
                                    <h5 className={"text-white text-uppercase font-weight-bold p-2 heading"}>Nature Photography</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*end of collection*/}
        </div>
    );
}

export default App;
