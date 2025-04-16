import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Play from "./pages/Play";
import MarketPlace from "./pages/MarketPlace";
import NewMarketPlace from "./pages/NewMarketPlace";
import Privacy from "./pages/Privacy";
import Roadmap from "./pages/Roadmap";
import HomePage from "./pages/HomePage";
import Canvas from "./components/Background";
import PageNav from "./components/PageNav";
import PageFooter from "./components/PageFooter";
import Tablet from "./components/Tablet";
import { Web3Provider } from "./components/Web3Provider";
import "./components/Tablet.css";
import "./index.css";

function App() {
  const [toggled, setToggle] = useState(false);
  const [marketPlaceToggled, setmarketPlaceToggle] = useState(false);

  const toggleFun = () => {
    setToggle(false);
  };
  
  const marketPlaceToggleFun = () => {
    setmarketPlaceToggle(true);
    setToggle(true);
  };
  
  const consoleBTNFun = () => {
    setmarketPlaceToggle(false);
    setToggle(true);
  };

  return (
    <Web3Provider>
      <div>
        <BrowserRouter>
          <Canvas />
          {!toggled? (
            <div>
              <PageFooter onToggle={consoleBTNFun} />
              <PageNav onToggle={marketPlaceToggleFun} onToggle2={consoleBTNFun} />
              <Routes>
                <Route
                  path="/"
                  element={<HomePage toggled={toggled} fun={toggleFun} />}
                />
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
                      <Tablet onToggle={toggleFun} onToggle2={marketPlaceToggleFun} market={marketPlaceToggled} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </BrowserRouter>
      </div>
    </Web3Provider>
  );
}

export default App;
