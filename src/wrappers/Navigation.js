import React from 'react'
import { NavLink, Link, Switch } from 'react-router-dom'

const Navigation = (props) => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#"></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarColor01">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item" content='welcome'>
                        <NavLink className="nav-link" exact to="/">Welcome</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink className="nav-link" to="/calendar">Calendar</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink className="nav-link" to="/favorites">Favorites</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink className="nav-link" to="/login">Login</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink className="nav-link" to="/profile">Profile</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink className="nav-link" to="/register">Register</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation;