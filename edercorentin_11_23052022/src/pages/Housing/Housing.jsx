import "./housing.css";
import { Header, Footer, /* Carrousel  */} from "../../components";
import data from "../../data.json"
import React from "react";
import { useParams } from 'react-router-dom';

const Housing = () =>  {
    const { id } = useParams();
    console.log(id)

    const housingId = data.housings.find(housing => housing.id === id)
    console.log(housingId)

  return (
    <div className="housingPage_page_position">
      <Header />
      <div className="housingPage_items_position">
        <div className="housingPage_title_housin">{housingId.title}</div>
      </div>
      <div className="housingPage_footer_position"/>
        <Footer/>
      <div/>
    </div>
  );
}

export default Housing;
