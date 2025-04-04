
import PropTypes from "prop-types";
import "./Toggle.css";

const ToggleSwitch = ({ onToggle ,isToggled}) => {

  const handleToggle = () => {
  
    if (onToggle) {
      onToggle(); 
    }
  };

  return (
    <div className={`toggle-outer p-1 d-block rounded-pill ${isToggled ? "active" : ""}`}>
      <div
        className={`toggle-container p-1 rounded-pill ${isToggled ? "active" : ""}`}
        onClick={handleToggle}
      >
        <div className="toggle-circle">
          <div className="toggle-inner">
            <img
              src={isToggled ? "/Isolation_Mode.svg" : "/toggle.svg"}
              alt="Toggle Icon"
              className="toggle-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

ToggleSwitch.propTypes = {
  onToggle: PropTypes.func.isRequired,
  isToggled: PropTypes.func.isRequired,
};

export default ToggleSwitch;
