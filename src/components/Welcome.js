import React from 'react'

export default function Welcome() {
    return (
    <div class="row">
        <div class="col-lg-2"></div>
        <div class="col-lg-8">
            <div class="jumbotron">
            <h1 class="display-3">EVENT TRACKER</h1>
            <p class="lead">Events anywhere and everywhere! Event Tracker allows you to save the ones that pique your interest and find it on a map.</p>
            <hr class="my-4" />
            <p>Never suffer from FOMO again!</p>
            <p class="lead">
                <a class="btn btn-dark btn-lg" href="/register" role="button">Sign up!</a>
            </p>
        </div>
        </div>
    </div>
    )
}