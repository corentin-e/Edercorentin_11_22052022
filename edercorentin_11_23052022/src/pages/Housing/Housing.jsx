import "./housing.css";
import { Header, Footer, Tag, DropdownInfo, DropdownList, /* Carrousel  */} from "../../components";
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
        <div className="housingPage_profile_items_position">
          <div className="housingPage_housing_details">
            <div className="housingPage_title_housing">{housingId.title}</div>
            <div className="housingPage_location_housing">{housingId.location}</div>
            <div className="housingPage_tags_items_position">
              {housingId.tags.map(tag =>(
                <Tag key={tag} tagName={tag}/>
              ))
              }
            </div>
          </div>
          <div className="housingPage_housing_host_details">
              <div className="housingPage_host">
                  <label className="housingPage_name_host">{housingId.host.name}</label>
                  <div className="housingPage_image_host_border">
                    <img src={housingId.host.picture} alt="" className="housingPage_image_host_position"/>
                  </div>
              </div>
          </div>
        </div>
        <div className="housingPage_housing_infos">
          <div className="housingPage_housing_description">
            <DropdownInfo dropdownTitle="Description" dropdownText={housingId.description}/>
          </div>
          <div className="housingPage_housing_description">
            <DropdownList dropdownTitleList="Équipements" housingId={housingId}/>
          </div>
        </div>
      </div>
      <div className="housingPage_footer_position"/>
        <Footer/>
      <div/>
    </div>
  );
}

export default Housing;
