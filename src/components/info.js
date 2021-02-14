import person from "../assets/img/person.svg";
import location from "../assets/img/location.svg";
import server from "../assets/img/server.svg";


function info() {
    return (
        <div>
            <section className={"my-5"}>
                <div className="container px-5">
                    <div className="card infoCard ">
                        <div className="card-body">
                            <div className="row justify-content-between pt-3">
                                <div className={"d-flex align-content-center px-5 "}>
                                    <div className="bubble"><img src={person} alt=""/></div>
                                        <div className={"mx-5"}>
                                            <h1><b>90+</b></h1>
                                            <p>Users</p>
                                        </div>
                                </div>
                                <div className={"d-flex align-content-center px-5 "}>
                                    <div className="bubble"><img src={location} alt=""/></div>
                                    <div className={"mx-5"}>
                                        <h1><b>30+</b></h1>
                                        <p>Locations</p>
                                    </div>
                                </div><div className={"d-flex align-content-center px-5 "}>
                                <div className="bubble"><img src={server} alt=""/></div>
                                <div className={"mx-5"}>
                                    <h1><b>50+</b></h1>
                                    <p>Servers</p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default info;
