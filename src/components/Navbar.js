import React from "react";
import logo from '../assets/IMG/nav-icon.png'
import { Link } from "react-router-dom";

const Navbar = ({ title }) => {
    return (
        <nav className='navbar bg-navy'>
            <h1 style={{ fontSize: '3em', margin: '0 auto' }}>
                <img src={logo} width='35' height='35' alt="" /> {title}
            </h1>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
