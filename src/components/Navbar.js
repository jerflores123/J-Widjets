import React from 'react';
import {Link } from 'react-router-dom';
//import logo from './logo192.png';
import './Navbar.css'

function Navbar() {
    return(
        <>
            <nav className="navbar">
                <Link to='/' className='navbar-logo'>
                    REACT
                </Link>
                <ul className="nav-menu">

                <li className='navbar'>
                    <Link to='/home' className='nav-links' >
                    Home
                    </Link> 
                </li> 
                <li className='navbar'>
                    <Link to='/reverse-string' className='nav-links' >
                    Reverse String
                    </Link> 
                </li> 
                <li className='navbar'>
                    <Link to='/character-count' className='nav-links' >
                    Character Count
                    </Link> 
                </li> 

                </ul>
            </nav>
            </>
        );
}

export default Navbar