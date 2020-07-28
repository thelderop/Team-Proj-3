import React from 'react'

export default function Welcome() {
    return (
    <div className="row margin">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
            <div className="jumbotron">
            <h1 className="display-3">EVENT TRACKER</h1>
            <p className="lead">Events anywhere and everywhere! Event Tracker allows you to save the ones that pique your interest and find it on a map.</p>
            <hr className="my-2" />
            <p>Never suffer from FOMO again!</p>
            <p className="lead">
                <a className="btn btn-dark btn-lg" href="/register" role="button">Sign up!</a>
            </p>
        </div>
        </div>
    </div>
    )
}