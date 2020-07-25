import React from 'react';
import { navLink, Link } from 'react-router-dom'
import Searchbar from './Searchbar'

const Navbar = (props) => {
    return (
        <nav className='navbar'>
            <div className='navcont'>
                <div className='leftnav'>
                    <Link to='/'>Main</Link>
                    <Link to='/calendar'>Calendar</Link>
                </div>
                <div className='centernav'>
                    <Searchbar />
                </div>
                <div className='rightnav'>
                    <Link to='/register'>Register</Link>
                    <Link to='/login'>Login</Link>
                </div>
            </div>

        </nav>
    );
};

export default Navbar;