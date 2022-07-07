import "./housing.css";
import { Header, Footer, Tag, DropdownInfo, DropdownList, Rating, Carrousel} from "../../components";
import data from "../../data.json"
import { /* useState, useEffect, */ React} from "react";
import { useParams } from 'react-router-dom';

const Housing = () =>  {
    const { id } = useParams();
    console.log(id)

    const housingId = data.housings.find(housing => housing.id === id)
    console.log(housingId)



   /* useEffect(() => {
      if(isActiveDropDown) {
        setIsActiveDropdown
      }
   }) */

  return (
    <div className="housingPage_page_position">
      <Header />
      <Carrousel pictures={housingId.pictures}/>
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
              <Rating rating={housingId.rating}/>
          </div>
        </div>
        <div className="housingPage_housing_infos">
          <div className="housingPage_housing_description">
            <DropdownInfo dropdownTitle="Description" dropdownText={housingId.description} /* isActiveDropDown={isActiveDropDown} setIsActiveDropDown={setIsActiveDropDown} *//>
          </div>
          <div className="housingPage_housing_description">
            <DropdownList dropdownTitleList="Équipements" housingId={housingId} /* isActiveSelector={isActiveSelector} setIsActiveSelector={setIsActiveSelector} *//>
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
