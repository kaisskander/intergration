import boxImage from "../assets/img/Premium.png";
import tick from "../assets/img/tick.svg"

function cards(){
    return(
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 ">
                        <div className="card cardPersonalising text-center py-4 my-4 mx-auto ">
                            <div className="card-body">
                                <img src={boxImage} alt=""/>
                                <h5 className="text-uppercase font-weight-bold mb-5">Free Plan</h5>
                                <ul className="list-unstyled my-2">
                                    <li className="py-3 card-list-item text-capitalize"><img src={tick} className={"mr-2"} alt=""/>unlimited bandwitch</li>
                                    <li className="py-3 card-list-item text-capitalize"><img src={tick} className={"mr-2"} alt=""/>encrypted connection</li>
                                    <li className="py-3 card-list-item text-capitalize"><img src={tick} className={"mr-2"} alt=""/>no traffic logs</li>
                                    <li className="py-3 card-list-item text-capitalize"><img src={tick} className={"mr-2"} alt=""/>works on all devices</li>
                                </ul>
                            </div>
                            <div className="card-footer bg-white">
                                <h1 className={"text-dark"}>Free</h1>
                                <a href="#"
                                   className="btn btn-outline-danger btnSelect font-weight-bold p-2 ">Select</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card cardPersonalising text-center py-4 my-4 mx-auto ">
                            <div className="card-body">
                                <img src={boxImage} alt=""/>
                                <h5 className="text-uppercase font-weight-bold mb-5">standard Plan</h5>
                                <ul className="list-unstyled">
                                    <li className="py-3 card-list-item text-capitalize"><img src={tick} className={"mr-2"} alt=""/>unlimited bandwitch</li>
                                    <li className="py-3 card-list-item text-capitalize"><img src={tick} className={"mr-2"} alt=""/>encrypted connection</li>
                                    <li className="py-3 card-list-item text-capitalize"><img src={tick} className={"mr-2"} alt=""/>no traffic logs</li>
                                    <li className="py-3 card-list-item text-capitalize"><img src={tick} className={"mr-2"} alt=""/>works on all devices</li>
                                    <li className="py-3 card-list-item text-capitalize"><img src={tick} className={"mr-2"} alt=""/>connect anyware</li>
                                </ul>
                            </div>
                            <div className="card-footer bg-white">
                                <h1 className={"text-dark"}>$9/mo</h1>
                                <a href="#"
                                   className="btn btn-outline-danger btnSelect font-weight-bold p-2 ">Select</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card cardPersonalising text-center py-4 my-4 mx-auto ">
                            <div className="card-body ">
                                <img src={boxImage} alt=""/>
                                <h5 className="text-uppercase font-weight-bold mb-5">Premium Plan</h5>
                                <ul className="list-unstyled">
                                    <li className="py-3 card-list-item text-capitalize"><img src={tick} className={"mr-2"} alt=""/>unlimited bandwitch</li>
                                    <li className="py-3 card-list-item text-capitalize"><img src={tick} className={"mr-2"} alt=""/>encrypted connection</li>
                                    <li className="py-3 card-list-item text-capitalize"><img src={tick} className={"mr-2"} alt=""/>no traffic logs</li>
                                    <li className="py-3 card-list-item text-capitalize"><img src={tick} className={"mr-2"} alt=""/>works on all devices</li>
                                    <li className="py-3 card-list-item text-capitalize"><img src={tick} className={"mr-2"} alt=""/>connect anyware</li>
                                    <li className="py-3 card-list-item text-capitalize"><img src={tick} className={"mr-2"} alt=""/>get new features</li>
                                </ul>
                            </div>
                            <div className="card-footer bg-white">
                                <h1 className={"text-dark"}>$12/mo</h1>
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
