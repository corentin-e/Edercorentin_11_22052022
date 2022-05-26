import './Header.css';
import logo from './Logo_kasa.JPG';
import { Link } from 'react-router-dom';
import React from "react";

function Header() {
  return (
    <div className="header_items_position">
        <img src={logo} alt="Logo_kasa" className="header_logo" />
        <div className="header_navbar">
            <Link to="/acceuil"><label>Acceuil</label></Link>
            <Link to="/à-propos"><label>À Propos</label></Link>
        </div>
    </div>
  );
}

export default Header;
