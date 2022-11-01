import React from 'react'

export const About = () => {
    let myStyle={
        width:"100%",
        minHeight:"70vh",
        margin: "40px auto",
    }
    return (
        <div className="col d-flex justify-content-center" style={myStyle}>
            <div className="card mb-3" >
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src={require("../imgs/44.jpg")} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Divyanshu Dubey</h5>
                        <p className="card-text">React is more like hadling css more like coding way.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
