import image1 from "../assets/img/Illustration 1.svg@1X.png";


function topContent() {
    return (
            <div className="row">
                <div className="col-lg-6 col-12 align-items-center">
                    <div>
                        <h1 className={"my-5"}>Want anything to be easy with <strong>MyVPN.</strong></h1>
                        <p className={"mb-5"}>Provide a network for all your needs with ease and fun using MyVPN discover
                            interesting features from us. </p>
                    </div>
                    <button className={"btn btn-primary btnGetStarted"}> Get Started</button>
                </div>
                <div className="col-lg-6 col-12 text-center">
                    <img src={image1} width={"611"} height={"382"} alt="image1"/>
                </div>
            </div>
);
}

export default topContent;
