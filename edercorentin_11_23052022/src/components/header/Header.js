import './Header.css';
import logo from './Logo_kasa.JPG';
import React from "react";

function Header() {
  return (
    <div className="header_items_position">
        <img src={logo} alt="Logo_kasa" className="header_logo" />
        <div className="header_navbar">
            <label className="header_navbar_items">Acceuil</label>
            <label className="header_navbar_items">À Propos</label>
        </div>
    </div>
  );
}

export default Header;
