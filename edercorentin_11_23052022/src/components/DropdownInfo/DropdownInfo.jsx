import { useState } from "react";
import "./dropdown_info.css";

function DropdownInfo({dropdownTitle}, {dropdownText}) {
  const [isActiveDropDown, setIsActiveDropDown] = useState(false);

  const dropdownButtonFunction = () => {
    setIsActiveDropDown((current) => !current);
  };
  return (
    <div className="dropdown_structure">
      <div className="dropdown_background">
        <div className="dropdown_header">
          <div className="dropdown_items">
            <label className="dropdown_item_text">
            {dropdownTitle}
            </label>
            <div className="dropdown_button" onClick={dropdownButtonFunction}>
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
