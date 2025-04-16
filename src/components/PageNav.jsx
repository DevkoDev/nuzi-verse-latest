import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./PageNav.css";
import NotchedBtn from "./NotchedBtn";
import ConnectWallet from "./ConnectWallet";
import NavLine from "./NavLine";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useState, useEffect, useRef } from "react";

function PageNav({ onToggle, onToggle2 }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const collapseRef = useRef(null);
  let collapseInstance = useRef(null);
  let [isOpened, setIsOpened] = useState(false);

  const updateWidths = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidths);

    import("bootstrap").then(({ Collapse }) => {
      if (collapseRef.current) {
        collapseInstance.current = new Collapse(collapseRef.current, {
          toggle: false,
        });
      }
    });

    return () => window.removeEventListener("resize", updateWidths);
  }, []);

  const toggleCollapse = () => {
    setIsOpened(!isOpened);
    if (collapseInstance.current) {
      collapseInstance.current.toggle();
    }
  };

  let fontSize1 = windowWidth < 789 ? "13px" : "16px";
  let navBarBGC =
    windowWidth < 768 ? "#00000085 !important" : "rgba(0, 0, 0, 0)";

  return (
    <div className="header-wrapper">
      <div className="logo-container d-none d-md-block">
        <Link to="/">
          <img
            className="w-100"
            src="\NUZ_logo_3Dcoin-bland_180.gif"
            alt=" logo"
          />
        </Link>
      </div>
      <nav className="navbar py-md-4" style={{ backgroundColor: navBarBGC }}>
        <div className="container-lg d-none d-md-flex">
          <ul className="nav-links">
            <li>
              <Link
                to="/read"
                style={{
                  fontSize: fontSize1,
                  color: "gray",
                  pointerEvents: "none",
                }}
              >
                Read
              </Link>
            </li>
            <li>
              <Link
                to="/watch"
                style={{
                  fontSize: fontSize1,
                  color: "gray",
                  pointerEvents: "none",
                }}
              >
                Watch
              </Link>
            </li>
            <li>
              <Link to="/" onClick={onToggle2} style={{ fontSize: fontSize1 }}>
                Play
              </Link>
            </li>
          </ul>
          <div className="right-section d-flex justify-content-between">
            <Link
              to="/"
              onClick={onToggle}
              className="marketplace-link mx-2"
              style={{ fontSize: fontSize1 }}
            >
              Marketplace
            </Link>
            <ConnectWallet />
          </div>
        </div>

        <div className="container-fluid d-flex d-md-none collapseContainer py-3 ">
          <button
            className={`btn collapseBtn ${isOpened ? "opened" : ""}`}
            type="button"
            onClick={toggleCollapse}
            aria-expanded="false"
            aria-controls="menu"
          >
            <svg width="100%" height="100%" viewBox="0 0 100 100">
              <path
                className="line line1"
                d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
              />
              <path className="line line2" d="M 20,50 H 80" />
              <path
                className="line line3"
                d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
              />
            </svg>
          </button>
          <div className="mobileLogo">
            <Link to="/">
              <img
                className="w-100"
                src="\NUZ_logo_3Dcoin-bland_180.gif"
                alt=" logo"
              />
            </Link>
          </div>
          <div className="collapse w-100 p-0 m-0" id="menu" ref={collapseRef}>
            <div className="">
              <ul className="p-0 text-center">
                <li className="my-3">
                  <Link
                    to="/read"
                    style={{
                      fontSize: "23px",
                      color: "gray",
                      pointerEvents: "none",
                    }}
                  >
                    Read
                  </Link>
                </li>
                <li className="my-3">
                  <Link
                    to="/watch"
                    style={{
                      fontSize: "23px",
                      color: "gray",
                      pointerEvents: "none",
                    }}
                  >
                    Watch
                  </Link>
                </li>
                <li className="my-3">
                  <Link
                    to="/play"
                    onClick={onToggle2}
                    style={{
                      fontSize: "23px",
                    }}
                  >
                    Play
                  </Link>
                </li>
                <li className="my-3">
                  <Link
                    onClick={onToggle}
                    to="/marketplace"
                    style={{
                      fontSize: "23px",
                    }}
                  >
                    Marketplace
                  </Link>
                </li>
                <li className="my-3 d-flex justify-content-center">
                  <ConnectWallet />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <div className="d-none d-md-flex lines-wrapper-top w-100">
        <NavLine />
      </div>
    </div>
  );
}

PageNav.propTypes = {
  onToggle: PropTypes.func.isRequired,
  onToggle2: PropTypes.func.isRequired,
};

export default PageNav;
