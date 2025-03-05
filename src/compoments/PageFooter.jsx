import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./PageFooter.css";
import ToggleSwitch from "./Toggle";
import NavLine from "./NavLine";

const PageFooter = ({ onToggle }) => {
  return (
    <div className="footer-wrapper">
      <footer className="footer">
        <div className="d-flex lines-wrapper f-bottom d-none d-md-block">
          <NavLine bottom={true} />
        </div>
        <div className="d-flex pt-4 pb-2 justify-content-between d-none d-md-flex blur">
          <div className="container">
            <div className="d-flex justify-content-center justify-content-lg-center align-items-center me-auto me-lg-0" style={{ minWidth: "35%" }}>
              <ul className="footer-links justify-content-between justify-content-lg-between w-100">
                <li>
                  <Link to="/privacy">Privacy</Link>
                </li>
                <li>
                  <Link to="/Roadmap">RoadMap</Link>
                </li>
                <li>
                  <Link to="/Team" style={{ color: "gray", pointerEvents: "none" }}>
                    Team
                  </Link>
                </li>
              </ul>
            </div>

            <div className="toggle justify-content-center position-absolute" style={{ top: "-40%" }}>
              <ToggleSwitch onToggle={onToggle} />
            </div>

            <div className="right-section justify-content-center " style={{ minWidth: "35%" }}>
              <a href="https://x.com/NakarmaZ" className="image-hover" target="_blank">
                <img src="/X.svg" />
              </a>
              <a href="https://discord.gg/2EsXf3kQ69" className="image-hover" target="_blank">
                <img src="/discord.svg" />
              </a>
              <a href="https://www.youtube.com/@Nakarmaz" className="image-hover" target="_blank">
                <img src="/Youtube.svg" />
              </a>
              <a href="https://www.tiktok.com/@nakarmaz_nuziverse" className="image-hover" target="_blank">
                <img src="/tiktok.svg" />
              </a>
              <a href="https://www.facebook.com/NakarmaZ" className="image-hover" target="_blank">
                <img src="/Group 7.svg" />
              </a>
            </div>
          </div>
        </div>

        <div className="footerBorder d-block d-md-none pt-3">
          <div className="d-flex justify-content-center align-items-center w-100">
            <ul className="footer-links d-flex justify-content-evenly w-100">
              <li className="m-0">
                <Link to="/privacy">Privacy</Link>
              </li>
              <li className="m-0">
                <Link to="/Roadmap">RoadMap</Link>
              </li>
              <li className="m-0">
                <Link to="/Team" style={{ color: "gray", pointerEvents: "none" }}>
                  Team
                </Link>
              </li>
            </ul>
          </div>
          <div className="d-flex justify-content-center my-3">
            <ToggleSwitch onToggle={onToggle} />
          </div>
        </div>
      </footer>
      <div className="copyright text-center px-2 blur">
        <small className="m-0 pb-2">
          Copyright &copy;
          <span> NAKARMAZ</span> 2025 All Rights Reserved
        </small>
      </div>
    </div>
  );
};

PageFooter.propTypes = {
  onToggle: PropTypes.func.isRequired,
};

export default PageFooter;
