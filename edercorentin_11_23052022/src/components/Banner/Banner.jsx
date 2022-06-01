import "./banner.css";


const Banner = ({image, textWelcome}) => (
  <div className="welcomecard_background">
    <img src={image} className="welcomecard_image" alt="banner_image" />
    <div className="welcomecard_items_position">
        <label className="welcomecard_item_position">{textWelcome}</label>
    </div>
  </div>
);

export default Banner;
