import "./carrousel.css";

const Carrousel = ({housingId}) => (
  <div className="carrousel_background">
    {housingId.pictures.map(picture =>(
      <img type="jpg" src={picture} className="carrousel_image" alt="housing_image" />
    ))
    }
    <div className="carrousel_items_position">
      <div className="carrousel_position_buttons">
        <div className="carrousel_button_previous"></div>
        <div className="carrousel_button_next"></div>
      </div>
      <div className="carrousel_info_position_housing_image">1/4</div>
    </div>
  </div>
);



export default Carrousel;
