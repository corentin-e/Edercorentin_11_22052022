import "./banner.css";
import WelcomeImage from "../../assets/welcome_image.jpg";

const Banner = () => (
  <div className="welcomecard_background">
    <img src={WelcomeImage} className="welcomecard_image" alt="banner_image" />
    <div className="welcomecard_items_position">
        <label className="welcomecard_item_position">Chez vous, partout et ailleurs</label>
    </div>
  </div>
);

export default Banner;
