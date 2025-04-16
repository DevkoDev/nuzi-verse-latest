import Months from "./Months";
import "./Map.css";

function Map() {
  return (
    <div className="py-5 mb-5">
      <div className="map mt-5">
        <h3 className="mt-5">ROADMAP</h3>
        <p>
        What’s in store inside the NuZiverse? Let’s dive in!
        </p>
      </div>
      <Months />
    </div>
  );
}

export default Map;
