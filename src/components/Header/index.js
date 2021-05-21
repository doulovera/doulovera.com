import React, { useState } from 'react';
import './style.css'

export default function Header() {
    const [isVisible, setIsVisible] = useState(false);
    
    const toggleNav = () => {
        setIsVisible(!isVisible);
    }

    return (
        <header className={isVisible ? 'headerIsActive' : 'headerIsNotActive'}>
            <h1 className="header__title">Douglas Lovera</h1>
            <nav className="header__nav">
                <ul className={"header__nav__items " + (isVisible && "navbar-active")}>
                    <li><a onClick={toggleNav} href="#contact">Contact</a></li>
                    <li><a onClick={toggleNav} href="#skills">Skills</a></li>
                    <li><a onClick={toggleNav} href="#projects">Projects</a></li>
                </ul>
                <button onClick={toggleNav} className="header__nav-button">
                    {!isVisible ? (
                        <span className="menu-icon">
                            <i className="fas fa-bars"></i>
                        </span>
                    ) : (
                        <span className="close-icon">
                            <i className="fas fa-times"></i>
                        </span>
                    )}
                </button>
            </nav>            
        </header>
    )
}
