import Console from "../pages/Console";
import "./Tablet.css";
import PropTypes from "prop-types";

function Tablet({ onToggle , market }) {
  return <Console onToggle={onToggle} market={market} />;
}

Tablet.propTypes = {
  onToggle: PropTypes.func.isRequired,
  market: PropTypes.func.isRequired,
};

export default Tablet;
