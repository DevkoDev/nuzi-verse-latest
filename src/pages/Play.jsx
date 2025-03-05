import Tablet from "../compoments/Tablet";
import "../compoments/Tablet.css";
import "./Play.css";
import Canvas from "../compoments/Background";

function Play() {
  return (
    <div>
      <div className="wrapContainer">
        <Canvas />
        <div className=" position-relative h-100">
          <div className=" position-absolute w-100 h-100">
            <div
              className="tablet position-relative"
              style={{ height: "100%" }}
            >
              <Tablet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Play;
