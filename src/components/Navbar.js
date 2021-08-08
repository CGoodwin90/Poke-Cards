import React from "react";
import logo from '../assets/IMG/nav-icon.png'


const Navbar = ({ title }) => {
    return (
        <nav className='navbar bg-navy'>
            <h1 style={{ fontSize: '3em', margin: '0 auto' }}>
                <img src={logo} width='35' height='35' alt="" /> {title}
            </h1>
        </nav>
    );
};

export default Navbar;
