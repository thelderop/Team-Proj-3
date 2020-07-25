import React from 'react'
import { NavLink, Link, Switch } from 'react-router-dom'

const Navigation = (props) => {
    return (
        <nav className="navbar navbar-expanded-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">EVENT TRACKER</Link>
                <div className="">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/">Welcome</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/calendar">Calendar</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/favorites">Favorites</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login">Login</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;