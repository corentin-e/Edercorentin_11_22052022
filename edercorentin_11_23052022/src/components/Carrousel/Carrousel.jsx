import "./carrousel.css";


const Carrousel = ({image_source}) => (
  <div className="carrousel_background">
    <img type="jpg" src={image_source} className="carrousel_image" alt="housing_image" />
    <div className="carrousel_items_position">
        <label className="carrousel_item_position"></label>
    </div>
  </div>
);



export default Carrousel;
