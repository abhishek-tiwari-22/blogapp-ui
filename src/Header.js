import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <img src={require('./logo.svg').default} className="header_logo" alt="logo" />
            <h1 className="header_title">Tech Blog</h1>
        </header>
    );
}

export default Header;
