import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Play from "./pages/Play";
import MarketPlace from "./pages/MarketPlace";
import Privacy from "./pages/Privacy";
import Roadmap from "./pages/Roadmap";
import HomePage from "./pages/HomePage";
import Canvas from "./compoments/Background";
import PageNav from "./compoments/PageNav";
import PageFooter from "./compoments/PageFooter";
import Tablet from "./compoments/Tablet";
import "./compoments/Tablet.css";
import "./index.css";

function App() {
  const [toggled, setToggle] = useState(true);

  const toggleFun = () => {
    setToggle(!toggled);
  };

  return (
    <div>
      <BrowserRouter>
        <Canvas />
        {toggled ? (
          <div>
            <PageFooter onToggle={toggleFun} />
            <PageNav />
            <Routes>
              <Route
                path="/"
                element={<HomePage toggled={toggled} fun={toggleFun} />}
              />
              <Route path="Play" element={<Play />} />
              <Route path="MarketPlace" element={<MarketPlace />} />
              <Route path="privacy" element={<Privacy />} />
              <Route path="roadmap" element={<Roadmap />} />
            </Routes>
          </div>
        ) : (
          <div className="w-100 p-3" style={{ height: "100vh" }}>
            <div className="wrap">
              <span className="cam"></span>
              <div id="ToggleON" className="position-relative h-100">
                      <div className=" position-absolute w-100 h-100">
                        <div className="tablet position-relative" style={{ height: "100%" }}>
                          <Tablet onToggle={toggleFun} />
                        </div>
                      </div>
                    </div>
            </div>
          </div>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
