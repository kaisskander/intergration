import React from "react";

function subscribe(){
    return(
        <section>
            <div className="container my-5 px-5  d-none d-lg-block">
                <div className="card subscribeCard">
                    <div className="card-body d-flex ">
                        <div className="row align-items-center">
                        <div className="col-lg-6 text-lg-left text-center">
                            <h1 className={"text-capitalize  mb-2 font-weight-bold"}>
                                subscribe now for get special features!
                            </h1>
                            <p>Let's subscribe with us and find the fun.</p>
                        </div>
                        <div className="col-lg-6 text-lg-right text-center">
                            <button className="btn btn-primary btnSubscribe font-weight-bold text-capitalize">subscribe now</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default subscribe;
