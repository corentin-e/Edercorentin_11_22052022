import "./about.css";
import { Header, Banner, Footer, DropdownInfo } from "../../components";
import { React, useState} from "react";
import AboutImage from "../../assets/about_image.jpg";

const About = () => {

  /* const [infoOpen, setInfoOpen] = useState(false)
  const [listOpen, setListOpen] = useState(false)

  const toggleInfo = () => {
      setInfoOpen(!infoOpen)
      if (listOpen === true) {
          setListOpen(false)
      }
  }


  const toggleList = () => {
      setListOpen(!listOpen)
      if (infoOpen === true) {
          setInfoOpen(false)
      }
  } */

  const [infoOpenFiability, setInfoOpenFiability] = useState(false)
  const [infoOpenRespect, setInfoOpenRespect] = useState(false)
  const [infoOpenService, setInfoOpenService] = useState(false)
  const [infoOpenResponsability, setInfoOpenResponsability] = useState(false)

  const toggleInfoFiability = () => {
      setInfoOpenFiability(!infoOpenFiability)
      if (infoOpenRespect === true || infoOpenService === true || infoOpenResponsability === true) {
        setInfoOpenRespect(false)
        setInfoOpenService(false)
        setInfoOpenResponsability(false)
      }
  }

  const toggleInfoRespect = () => {
    setInfoOpenRespect(!infoOpenRespect)
    if (infoOpenFiability === true || infoOpenService === true || infoOpenResponsability === true) {
      setInfoOpenFiability(false)
      setInfoOpenService(false)
      setInfoOpenResponsability(false)
    }
  }

  const toggleInfoService = () => {
    setInfoOpenService(!infoOpenService)
    if (infoOpenFiability === true || infoOpenRespect === true || infoOpenResponsability === true) {
      setInfoOpenFiability(false)
      setInfoOpenRespect(false)
      setInfoOpenResponsability(false)
    }
  }

  const toggleInfoResponsability = () => {
    setInfoOpenResponsability(!infoOpenResponsability)
    if (infoOpenFiability === true || infoOpenRespect === true || infoOpenService === true) {
      setInfoOpenFiability(false)
      setInfoOpenRespect(false)
      setInfoOpenService(false)
    }
  }

  return (
    <div className="aboutPage_items_position">
      <Header />
      <Banner image={AboutImage} textWelcome="" />
      <div className="aboutPage_dropdown_items_position">
          <DropdownInfo dropdownTitle="Fiabilit??" 
          dropdownText="Les annonces post??es sur Kasa garantissent une fiabilit?? totale. 
          Les photos sont conformes aux logements, et toutes les informations sont r??guli??rement v??rifi??es par nos ??quipes."
          toggle={toggleInfoFiability}
          open={infoOpenFiability}/>
          <DropdownInfo dropdownTitle="Respect" 
          dropdownText="La bienveillance fait partie des valeurs fondatrice de Kasa.
          Tout comportement discriminatoire ou de perturbation du voisinage entra??nera une exclusion de notre plateforme.
          "
          toggle={toggleInfoRespect}
          open={infoOpenRespect}/>
          <DropdownInfo dropdownTitle="Service" 
          dropdownText="Nos ??quipes se tiennent ?? votre disposition pour vous fournir une exp??rience parfaite.
          N'h??sitez pas ?? nous contacter si vous avez la moindre question.
          "
          toggle={toggleInfoService}
          open={infoOpenService}/>
          <DropdownInfo dropdownTitle="Responsabilit??" 
          dropdownText="La s??curit?? est la priorit?? de Kasa. 
          Aussi bien pour nos h??tes que pour les voyageurs, chaque logement correspond aux crit??res de s??curit?? ??tablis par nos services.
          En laissant une note aussi bien ?? l'h??te qu'au locataire, cela permet ?? nos ??quipes de v??rifier que les standards sont bien respect??s.
          Nous organisons ??galement des ateliers sur la s??curit?? domestique pour nos h??tes.
          "
          toggle={toggleInfoResponsability}
          open={infoOpenResponsability}/>
      </div>
      <div className="aboutPage_footer_position"/>
        <Footer/>
      <div/>
    </div>
  );
}

export default About;
