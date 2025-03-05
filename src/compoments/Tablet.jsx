import Console from "../pages/Console";
import "./Tablet.css";
import PropTypes from "prop-types";

function Tablet({ onToggle }) {
  return <Console onToggle={onToggle} />;
}

Tablet.propTypes = {
  onToggle: PropTypes.func.isRequired,
};

export default Tablet;
