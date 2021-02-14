import PriceBox from "../assets/img/PricePackageIllustration.svg";
import tick from "../assets/img/tick.svg"

function cards(){
    return(
        <section>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-lg-4 ">
                        <div className="card cardPersonalising text-center py-4 my-4 mx-auto ">
                            <div className="card-body">
                                <img src={PriceBox} alt=""/>
                                <h5 className="text-uppercase font-weight-bold py-5">Free Plan</h5>
                                <ul className="list-unstyled my-2 text-left px-5">
                                    <li className="py-3 card-list-item text-capitalize"><img src={tick} className={"mr-2"} alt=""/>unlimited bandwitch</li>
                                    <li className="py-3 card-list-item text-capitalize"><img src={tick} className={"mr-2"} alt=""/>encrypted connection</li>
                                    <li className="py-3 card-list-item text-capitalize"><img src={tick} className={"mr-2"} alt=""/>no traffic logs</li>
                                    <li className="py-3 card-list-item text-capitalize"><img src={tick} className={"mr-2"} alt=""/>works on all devices</li>
                                </ul>
                            </div>
                            <div className="card-footer bg-white">
                                <h3 className={"text-dark"}>Free</h3>
                                <a href="#"
                                   className="btn btn-outline-danger btnSelect font-weight-bold p-2 ">Select</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card cardPersonalising text-center py-4 my-4 mx-auto ">
                            <div className="card-body">
                                <img src={PriceBox} alt=""/>
                                <h5 className="text-uppercase font-weight-bold py-5">standard Plan</h5>
                                <ul className="list-unstyled text-left px-5">
                                    <li className="py-3 card-list-item text-capitalize"><img src={tick} className={"mr-2"} alt=""/>unlimited bandwitch</li>
                                    <li className="py-3 card-list-item text-capitalize"><img src={tick} className={"mr-2"} alt=""/>encrypted connection</li>
                                    <li className="py-3 card-list-item text-capitalize"><img src={tick} className={"mr-2"} alt=""/>no traffic logs</li>
                                    <li className="py-3 card-list-item text-capitalize"><img src={tick} className={"mr-2"} alt=""/>works on all devices</li>
                                    <li className="py-3 card-list-item text-capitalize"><img src={tick} className={"mr-2"} alt=""/>connect anyware</li>
                                </ul>
                            </div>
                            <div className="card-footer bg-white">
                                <h3 className={"text-secondary"}><b className={"text-dark mx-2"}>$9</b>/ mo</h3>
                                <a href="#"
                                   className="btn btn-outline-danger btnSelect font-weight-bold p-2 ">Select</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card cardPersonalising text-center py-4 my-4 mx-auto ">
                            <div className="card-body ">
                                <img src={PriceBox} alt=""/>
                                <h5 className="text-uppercase font-weight-bold py-5">Premium Plan</h5>
                                <ul className="list-unstyled text-left px-5">
                                    <li className="py-3 card-list-item text-capitalize"><img src={tick} className={"mr-2"} alt=""/>unlimited bandwitch</li>
                                    <li className="py-3 card-list-item text-capitalize"><img src={tick} className={"mr-2"} alt=""/>encrypted connection</li>
                                    <li className="py-3 card-list-item text-capitalize"><img src={tick} className={"mr-2"} alt=""/>no traffic logs</li>
                                    <li className="py-3 card-list-item text-capitalize"><img src={tick} className={"mr-2"} alt=""/>works on all devices</li>
                                    <li className="py-3 card-list-item text-capitalize"><img src={tick} className={"mr-2"} alt=""/>connect anyware</li>
                                    <li className="py-3 card-list-item text-capitalize"><img src={tick} className={"mr-2"} alt=""/>get new features</li>
                                </ul>
                            </div>
                            <div className="card-footer bg-white">
                                <h3 className={"text-secondary"}><b className={"text-dark mx-2"}>$12</b>/ mo</h3>
                                <a href="#"
                                   className="btn btn-outline-danger btnSelect font-weight-bold p-2 ">Select</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default cards;
