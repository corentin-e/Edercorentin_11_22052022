import "./home.css";
import { Banner, Card, DropdownList, DropdownInfo, Tag, Header } from "../../components";
import data from "../../data.json"
import React from "react";

function Home() {
  return (
    <div className="homePage_items_position">
      <Header />
      <Banner />
      <div className="homePage_housing_position">
      {data.housings.map(housing => (
        <Card key={housing.id} title={housing.title} image_source={housing.cover}/>
      ))}
      </div>
    </div>
  );
}

export default Home;
