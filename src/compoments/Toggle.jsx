import { useState } from "react";
import "./Toggle.css";

const ToggleSwitch = () => {
  const [isActive, setIsActive] = useState(true);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`toggle-outer p-1 d-none d-md-block rounded-pill ${isActive ? "" : ""}`} style={{filter: "brightness(50%)"}}>
      <div
        className={`toggle-container p-1 rounded-pill ${isActive ? "" : ""}`}
        // onClick={handleToggle}
      >
        <div className="toggle-circle">
          <div className="toggle-inner">
            <img
              src={isActive ? "/Group.png" : "/Isolation_Mode.svg"}
              alt="Toggle Icon"
              className="toggle-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToggleSwitch;
