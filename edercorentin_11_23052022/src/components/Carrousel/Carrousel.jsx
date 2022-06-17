import "./carrousel.css";
import {useState} from "react";



const Carrousel = ({pictures}) => {
    const [imgPos, setImgPos] = useState(0)

    const next = () => {
        if(imgPos < pictures.length - 1) {
            setImgPos(imgPos + 1)
        }
    }

    const prev = () => {
        if(imgPos > 0) {
            setImgPos(imgPos - 1)
        }
    }

    return (
        <div className="carrousel_background">
            <img type="jpg" src={pictures[imgPos]} className="carrousel_image" alt="housing_image" />
            <div className="carrousel_items_position">
                <div className="carrousel_position_buttons">
                    <div className="carrousel_button_previous" onClick={prev}> ← </div>
                    <div className="carrousel_button_next" onClick={next}>  → </div>
                </div>
                <div className="carrousel_info_position_housing_image">{imgPos+1}/{pictures.length}</div>
            </div>
        </div>
    );
}



export default Carrousel;
