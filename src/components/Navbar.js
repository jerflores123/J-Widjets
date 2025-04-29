import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import ThemeToggle from './pages/themeToggle/themeToggle';

function Navbar() {
    return (
        <>
            <nav className="navbar">
                <Link to='/react-project' className='navbar-logo'>
                    J-WIDGETS
                </Link>

                <ul className="nav-menu">
                    <li className='navbar'>
                        <Link to='/checklist' className='nav-links' >
                            Checklist
                        </Link>
                    </li>
                    <li className='navbar'>
                        <Link to='/weather' className='nav-links' >
                            Weather
                        </Link>
                    </li>
                    <li className='navbar'>
                        <Link to='/calculator' className='nav-links' >
                            Calculator
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
                    <li className='navbar'>
                        <ThemeToggle />
                    </li>
                </ul>

            </nav>
        </>
    );
}

export default Navbar