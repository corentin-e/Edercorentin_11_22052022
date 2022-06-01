import "./about.css";
import { Header, Banner, Footer, DropdownInfo } from "../../components";
import React from "react";
import AboutImage from "../../assets/about_image.jpg";

function About() {
  return (
    <div className="aboutPage_items_position">
      <Header />
      <Banner image={AboutImage} textWelcome="" />
      <div className="aboutPage_dropdown_items_position">
          <DropdownInfo dropdownTitle="Fiabilité"/>
          <DropdownInfo dropdownTitle="Respect"/>
          <DropdownInfo dropdownTitle="Service"/>
          <DropdownInfo dropdownTitle="Responsabilité"/>
      </div>
      <div className="aboutPage_footer_position"/>
        <Footer/>
      <div/>
    </div>
  );
}

export default About;
