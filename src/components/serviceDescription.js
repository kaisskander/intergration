import image2 from "../assets/img/Illustration 2.svg@1X.png";
import fullTick from "../assets/img/fulltick.svg"
import tick from "../assets/img/tick.svg";


function serviceDescription() {
    return(
        <section>
                <div className="row my-5">
                    <div className="col-lg-6 col-12">
                        <img src={image2} width={"508.12"} height={"414.71"} alt="image2"/>
                    </div>
                    <div className="col-lg-6 col-12">
                        <h1 className={"text-capitalize"}>we provide many features you can use</h1>
                        <p className={"lead"}>You can expore the features that we provide with fun and have their
                            own functions each feature
                        </p>
                        <ul className={"list-unstyled"}>
                            <li><img src={fullTick} className={"mr-2"} alt=""/>PowerFull online protection.</li>
                            <li><img src={fullTick} className={"mr-2"} alt=""/>Internet without borders.</li>
                            <li><img src={fullTick} className={"mr-2"} alt=""/>Supercharged VPN.</li>
                            <li><img src={fullTick} className={"mr-2"} alt=""/>No specific time limits.</li>
                        </ul>
                    </div>
                </div>
        </section>
    );
}

export default serviceDescription;
