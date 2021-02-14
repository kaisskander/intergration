import image2 from "../assets/img/TopDescriptionIllustration.svg";


function topContent() {
    return (
            <div className="row mb-5 pb-5 ">
                <div className="col-lg-6 col-12 align-items-center text-lg-left text-center topContentBg">
                    <div>
                        <h1 className={"my-5"}>Want anything to be easy with <strong>MyVPN.</strong></h1>
                        <p className={"mb-5"}>Provide a network for all your needs with ease and fun using MyVPN discover
                            interesting features from us. </p>
                    </div>
                    <button className={"btn btn-primary btnGetStarted"}> Get Started</button>
                </div>
                <div className="col-lg-6 col-12 text-center d-none d-lg-block">
                    <img src={image2} width={"611"} height={"382"} alt="image1"/>
                </div>
            </div>
);
}

export default topContent;
