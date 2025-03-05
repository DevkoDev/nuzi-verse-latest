import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Play from "./pages/Play";
// import MarketPlace from "./pages/MarketPlace";
import Privacy from "./pages/Privacy";
import Roadmap from "./pages/Roadmap";
import HomePage from "./pages/HomePage";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="Play" element={<Play />} /> */}
        {/* <Route path="MarketPlace" element={<MarketPlace />} /> */}
        <Route path="privacy" element={<Privacy />} />
        <Route path="roadmap" element={<Roadmap />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
