import { useState } from "react";
import "./dropdown_list.css";

function DropdownList({dropdownTitleList, housingId}) {
  const [isActiveSelector, setIsActiveSelector] = useState(false);
  const [isActiveIcon, setIsActiveIcon] = useState(false);

  const selectorButtonFunction = () => {
    setIsActiveSelector((current) => !current);
    setIsActiveIcon((current) => !current);
  };
  return (
    <div className="selector_structure">
      <div className="selector_header">
        <div className="selector_items" onClick={selectorButtonFunction}>
          <label className="selector_item_text">
            {dropdownTitleList}
          </label>
          <div className={
            isActiveIcon 
            ? "selector_button"
            : "selector_button_rotate"
            }>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              className="selector_item_icon"
            >
              <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
            </svg>
          </div>
        </div>
      </div>
      <div
        className={
          isActiveSelector
            ? "selector_info_isActive"
            : "selector_info_isNotActive"
        }
        id="selectorInfo"
      >
        <ul>
          {housingId.equipments.map(equipment => (
            <li>{equipment}</li>
          ))
          }
        </ul>
      </div>
    </div>
  );
}

export default DropdownList;
