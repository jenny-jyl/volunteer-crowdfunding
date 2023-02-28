import React from 'react';
import { Link } from 'react-router-dom'
import logo from '/Users/jennyli/volunteer-crowdfunding/src/components/images/logo.png';

function Nav() {
    return (
        <nav className='main-nav-container'>
            <img src={logo} alt="Help Me Go Logo" width="100" height="100"></img>
            <Link to="/" className="nav-item">Home</Link>
            <Link to="/project" className="nav-item">All Projects</Link>
            <Link to="/login" className="nav-item">Login</Link>
            <Link to="/signUp" className="nav-item">Sign up</Link>
        </nav>
    )
}

export default Nav;