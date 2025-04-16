import Tablet from "../components/Tablet";
import "../components/Tablet.css";
import "./Play.css";
import Canvas from "../components/Background";

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
