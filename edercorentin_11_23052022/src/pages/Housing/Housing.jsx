import "./housing.css";
import { Header, Footer, Carrousel } from "../../components";
import data from "../../data.json"
import React from "react";

const Housing = () =>  {

    const images = data.housings.map(housing => (housing.pictures));
    console.log(images)

  return (
    <div className="housingPage_items_position">
      <Header />
      <div className="housingPage_items_position">
      {data.housings.map(housing => (
          <Carrousel image_source={housing.pictures}/>
      ))}
      </div>
      <div className="housingPage_footer_position"/>
        <Footer/>
      <div/>
    </div>
  );
}

export default Housing;
