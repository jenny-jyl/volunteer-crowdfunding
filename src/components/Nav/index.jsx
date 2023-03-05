import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '/Users/jennyli/volunteer-crowdfunding/src/components/images/logo.png';

function Nav() {

    console.log(window.localStorage.getItem("token"))

    // const [isLoggedIn, setIsLoggedIn] = useState()

    // useEffect(() => {
    //     if (window.localStorage.getItem("token")) {
    //         setIsLoggedIn(true)
    //     } else {
    //         setIsLoggedIn(false)
    //     }
    // }, [])

    // const logout = () => {
    //     setIsLoggedIn(false)
    //     localStorage.clear();
    //     window.location.href = '/';
    // }

    const location = useLocation();

    const isLoggedIn = location.state?.isLoggedIn || false;

    const logout = () => {
        localStorage.clear();
        window.location.href = '/';
    }

    return (
        <nav className='main-nav-container'>
            <img src={logo} alt="Help Me Go Logo" width="100" height="100"></img>
            <Link to="/" className="nav-item">Home</Link>
            <Link to="/projects" className="nav-item">All Projects</Link>
            {
                isLoggedIn ? (
                    <>
                        <Link to="/create" className="nav-item">Create</Link>
                        <Link to="/pledge" className="nav-item">Pledge</Link>
                        <Link to="/edit" className="nav-item">Edit project</Link>
                        <Link to="/" onClick={logout} className="nav-item">Logout</Link>
                    </>
                ) : (
                    <>
                        <Link to="/login" className="nav-item">Login</Link>
                        <Link to="/signUp" className="nav-item">Sign up</Link>
                    </>
                )
            }
        </nav>
    );

}


export default Nav;
