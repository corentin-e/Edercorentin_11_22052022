import "./card.css";

const Card = ({title, image_source}) => (
  <div className="card_background">
    <img className="card_image" src={image_source} alt="Housing_image"/>
    <div className="card_items_position">
      <label className="card_text_position">{title}</label>
    </div>
  </div>
);

export default Card;
