import "./NotchedBtn.css";
import PropTypes from "prop-types";
function NotchedBtn({ onClick, text, bgColor, fontSize, color, padding, bgImage }) {
  return (
    <a className="notchedButtonL1">
      <div className="notchedButtonL2">
        <div className="notchedButtonL3">
          <div
            className="notchedButtonL4"
            onClick={onClick}
            style={{
              backgroundColor: bgColor,
              fontSize: fontSize,
              color: color,
              backgroundImage: bgImage,
              padding: padding
            }}
          >
            {text}
          </div>
        </div>
      </div>
    </a>
  );
}


NotchedBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.func.isRequired,
  bgColor: PropTypes.func.isRequired,
  fontSize: PropTypes.func.isRequired,
  color: PropTypes.func.isRequired,
  padding: PropTypes.func.isRequired,
  bgImage: PropTypes.func.isRequired,
};

export default NotchedBtn;
