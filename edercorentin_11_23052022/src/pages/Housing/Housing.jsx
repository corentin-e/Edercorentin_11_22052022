import "./error.css";
import { Header, Footer } from "../../components";
import { Link } from "react-router-dom"
import React from "react";

function Housing() {
  return (
    <div className="housingPage_items_position">
      <Header />
      <div className="housingPage_text_items_position">
      </div>
      <div className="housingPage_footer_position"/>
        <Footer/>
      <div/>
    </div>
  );
}

export default Housing;
