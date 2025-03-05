import "./NotchedBtn.css";
function NotchedBtn({ onClick ,text, bgColor, fontSize, color, padding, bgImage }) {
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
              padding:padding
            }}
          >
            {text}
          </div>
        </div>
      </div>
    </a>
  );
}

export default NotchedBtn;
