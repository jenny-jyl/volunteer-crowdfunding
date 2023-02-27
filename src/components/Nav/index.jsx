import React from 'react';
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <nav className='main-nav-container'>
            <Link to="/" className="nav-item">Home</Link>
            <Link to="/project" className="nav-item">Project</Link>
            <Link to="/login" className="nav-item">Login</Link>
            <Link to="/signUp" className="nav-item">Sign up</Link>
        </nav>
    )
}

export default Nav;