import './WelcomeCard.css';
import WelcomeImage from './welcome_image.jpg';

function WelcomeCard() {
  return (
    <div className="welcomecard_background">
        <image src={WelcomeImage} className="welcomecard_image"></image>
        {/* <div className="welcomecard_items_position">
            <label className="welcomecard_item_position">Titre de la location</label>
        </div> */}
    </div>
  );
}

export default WelcomeCard;
