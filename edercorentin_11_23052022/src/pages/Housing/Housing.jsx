import "./housing.css";
import { Header, Footer } from "../../components";
import React from "react";
import { useParams } from 'react-router-dom';

const Housing = () =>  {
    const { id } = useParams();
    console.log(id)

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
