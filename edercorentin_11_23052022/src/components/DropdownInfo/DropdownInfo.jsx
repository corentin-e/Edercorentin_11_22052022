import { useState } from "react";
import "./dropdown_info.css";

function DropdownInfo({dropdownTitle, dropdownText /* setIsActiveDropDown, isActiveDropDown */}) {
  const [isActiveIcon, setIsActiveIcon] = useState(false);
  const [isActiveDropDown, setIsActiveDropDown] = useState(false);

  const dropdownButtonFunction = () => {
   /*  if(isActiveIcon === i && isActiveDropDown === i) {
      setIsActiveIcon(null);
      setIsActiveDropDown(null);
    } */
    setIsActiveDropDown((current) => !current);
    setIsActiveIcon((current) => !current);
  };
  return (
    <div className="dropdown_structure" >
      <div className="dropdown_background">
        <div className="dropdown_header" onClick={dropdownButtonFunction}>
          <div className="dropdown_items">
            <label className="dropdown_item_text">
            {dropdownTitle}
            </label>
            <div className={
            isActiveIcon 
            ? "dropdown_button_isActive"
            : "dropdown_button_isNotActive"
            }>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="dropdown_item_icon"
              >
                <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div
          className={
            isActiveDropDown
              ? "dropdown_info_isActive"
              : "dropdown_info_isNotActive"
          }
          id="dropdownInfo"
        >
          <label>{dropdownText}</label>
        </div>
      </div>
    </div>
  );
}

export default DropdownInfo;
