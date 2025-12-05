import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';  
import BurgerMenu from '../hamburger_menu/burgermenu';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const updateMenu = () => {
        if (!isMenuClicked) {
            setMenuOpen(true)
        } else {
            setMenuOpen(false)
        }
    }

    return (
        <nav>
            <section className='logo'>
                <img src="/logos/NHLStendenLogo_White.svg" alt="NHL Stenden Logo" />
            </section>
            <section className="nav-links">
                <NavLink to="/" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
                <NavLink to="/faq" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>FAQ</NavLink>
                <NavLink to="/learnMore" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Learn More</NavLink>
            </section>
           <div className="hamburger-menu">
                <BurgerMenu onToggle={setMenuOpen} />
            </div>
        </nav>
    );
}
