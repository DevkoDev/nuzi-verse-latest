import Console from "../pages/Console";
import "./Tablet.css";
import PropTypes from "prop-types";

function Tablet({ onToggle , onToggle2 , market }) {
  return <Console onToggle={onToggle} onToggle2={onToggle2} market={market} />;
}

Tablet.propTypes = {
  onToggle: PropTypes.func.isRequired,
  market: PropTypes.func.isRequired,
};

export default Tablet;
