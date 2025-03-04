import React from 'react'

import HeptagramLogo from '../Assets/full-heptagram-logo.png';
import Hamburger from './Hamburger'

function Header() {
    return (
        <header className="header">
        <nav className="navbar">
            <a href="/">
                <img src={HeptagramLogo} alt="Heptagram Logo" className="logo" />
            </a>
            <ul className="nav-menu">
                <li className="nav-item second">
                    <a href="/" className="nav-link home">Home</a>
                </li>
                <li className="nav-item">
                    <a href="https://discord.gg/HSupF99kpq" className="nav-link server">Support Server</a>
                </li>
                <li className="nav-item">
                    <a href="/bot-commands" className="nav-link commands active">Commands</a>
                </li>
                <li className="nav-item">
                    <a href="https://api.heptagram.xyz" className="nav-link api">API</a>
                </li>
            </ul>
            <div className="hamburger" id="app">
            <Hamburger />
            </div>
        </nav>
        </header>
    )
}


export default Header
