import Circles from "../compoments/Circles";
import Options from "../compoments/Options";
import Square from "../compoments/Square";
import Toggle from "../compoments/Toggle";
import NewMarketPlace from "./NewMarketPlace";
import LeftArrow from "../compoments/LeftArrow";
import RightArrow from "../compoments/RightArrow";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { ConnectButton } from "@rainbow-me/rainbowkit";

function Console({ onToggle, market, onToggle2 }) {
  const [widths, setWidths] = useState([]);
  const [height, setHeight] = useState([]);
  const ids = ["shapeHoler1", "container", "market"];

  const updateWidths = () => {
    setHeight(document.getElementById("container").offsetHeight);
    const newWidths = ids.map((id) => {
      const element = document.getElementById(id);
      return element ? element.offsetWidth : 0;
    });
    setWidths(newWidths);
  };

  useEffect(() => {
    updateWidths();

    window.addEventListener("resize", updateWidths);

    return () => window.removeEventListener("resize", updateWidths);
  }, []);

  const marketPos = 0.5;
  let firstLine = (widths[1] / 2 - 0.5 * widths[0]) * marketPos - widths[2] / 2;
  let marketPosInPx = `${(widths[1] / 2 - 0.5 * widths[0]) * marketPos}px`;
  let secondLine = widths[1] / 2 - 0.5 * widths[0];

  const pathData = `
        M 1 1
        L ${firstLine} 1
        M ${firstLine + widths[2]} 1
        L ${secondLine} 1
        M ${secondLine + widths[0]} 1
        L ${widths[1] - 1} 1
        L ${widths[1] - 1} ${height - 1}
        M ${widths[1] - 1} ${height - 1}
        L ${widths[1] - secondLine} ${height - 1}
        M ${secondLine} ${height - 1}
        L 1 ${height - 1}
        L 1 1
  `;

  return (
    <div className="h-100">
      <div
        id="container"
        className="position-relative my-2"
        style={{
          height: "97%",
          backgroundColor: `${market ? "#08090ac9" : ""} `,
        }}
      >
        <div className="row">
          <div
            id="shapeHoler1"
            className="shape-holder col-11 col-sm-9 col-md-8 col-lg-6 col-xl-5 col-xxl-4"
          >
            <div className="custom-shape w-100">
              <LeftArrow />
              <div className="content">
                <img
                  src="/NUZ_logo_3Dcoin_pose01.svg"
                  alt="icon"
                  className="icon"
                />
                <span>14.3K $NUZ</span>
              </div>
              <RightArrow />
            </div>
          </div>
        </div>

        <img
          src="Rectangle 42123.png"
          alt="pic"
          className="l-top  d-none d-lg-block"
        />
        <img
          src="Rectangle 42125.png"
          alt="pic"
          className="r-top d-none d-lg-block"
        />
        <img
          src="Rectangle 42124.png"
          alt="pic"
          className="r-bottom d-none d-lg-block"
        />
        <img
          src="Rectangle 42126.png"
          alt="pic"
          className="l-bottom d-none d-lg-block"
        />
        <div
          id="market"
          className="line-market  d-none d-lg-block"
          onClick={onToggle2}
          style={{
            left: marketPosInPx,
            cursor: "pointer",
            zIndex: 99999999999999,
          }}
        >
          MARKET PLACE
        </div>
        <div className="connectBTN">
        <ConnectButton />
        </div>
        <svg id="SVG" className="w-100 h-100 d-none d-lg-block">
          <path
            d={pathData}
            fill="none"
            stroke="#ffd363"
            strokeWidth={2}
          ></path>
        </svg>

        <div className="row">
          <div className="shape-holder2 col-11 col-sm-9 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
            <div className="custom-shape w-100">
              <LeftArrow />
              <div className="content justify-content-center d-flex">
                <Toggle onToggle={onToggle} isToggled={true} />
              </div>
              <RightArrow />
            </div>
          </div>
        </div>

        <div className="position-absolute h-100 w-100" style={{ top: "0%" }}>
          <div className="holder-all position-relative w-100 h-100">
            <div className=" container-fluid py-5 h-100">
              <div className="h-100 row">
                {market ? (
                  <div className="h-100">
                    <NewMarketPlace />
                  </div>
                ) : (
                  <div>
                    <div className="circlesMainBox col-4 col-lg-4 col-xl-3 col-xxl-2 justify-content-center d-none d-lg-block">
                      <Circles />
                    </div>
                    <div className="squaresBox col-4 col-lg-4 col-xl-3 col-xxl-2 justify-content-center d-none d-lg-block">
                      <Square />
                    </div>
                    <div className="h-100">
                      <Options />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Console.propTypes = {
  onToggle: PropTypes.func.isRequired,
  onToggle2: PropTypes.func.isRequired,
  market: PropTypes.func.isRequired,
};

export default Console;
