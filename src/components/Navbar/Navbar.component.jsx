import React from 'react';
import './Navbar.styles.scss';

const Navbar = () => {
    return (
        <div className='navbar sticky'>
            <a href='home'>Home</a>
            <a href='about'>About</a>
            <a href='help'>Help</a>
        </div>
    );
};

export default Navbar;
