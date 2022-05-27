import './Header.css';
import logo from './Logo_kasa.JPG';
import React from "react";
import {
    Link,
} from "react-router-dom";

function Header() {
    return (
        <div className="header_items_position">
            <img src={logo} alt="Logo_kasa" className="header_logo" />
            <div className="header_navbar">
                <Link to="/">
                    <label className="header_navbar_items">Acceuil</label>
                </Link>
                <Link to="about">
                    <label className="header_navbar_items">About</label>
                </Link>
            </div>
        </div>
    );
}

export default Header;
