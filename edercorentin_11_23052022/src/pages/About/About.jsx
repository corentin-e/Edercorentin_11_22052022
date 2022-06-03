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
          <DropdownInfo dropdownTitle="Fiabilité" 
          dropdownText="Les annonces postées sur Kasa garantissent une fiabilité totale. 
          Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."/>
          <DropdownInfo dropdownTitle="Respect" 
          dropdownText="La bienveillance fait partie des valeurs fondatrice de Kasa.
          Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
          "/>
          <DropdownInfo dropdownTitle="Service" 
          dropdownText="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite.
          N'hésitez pas à nous contacter si vous avez la moindre question.
          "/>
          <DropdownInfo dropdownTitle="Responsabilité" 
          dropdownText="La sécurité est la priorité de Kasa. 
          Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services.
          En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés.
          Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
          "/>
      </div>
      <div className="aboutPage_footer_position"/>
        <Footer/>
      <div/>
    </div>
  );
}

export default About;
