import "./Months.css";
import { useState, useEffect } from "react";

function Months() {
  const [heights, setHeights] = useState([]);
  const [mobHeights, setMobHeights] = useState([]);

  useEffect(() => {
    const updateHeights = () => {
      const divs = document.querySelectorAll("#div1, #div2, #div3, #div4, #div5, #div6");
      const mobDivs = document.querySelectorAll("#div1Mobile, #div2Mobile, #div3Mobile, #div4Mobile, #div5Mobile, #div6Mobile");
      const heightsArray = Array.from(divs).map((div) => div.clientHeight);
      setHeights(heightsArray);
      const mobHeightsArray = Array.from(mobDivs).map((div) => div.clientHeight);
      setMobHeights(mobHeightsArray);
    };

    updateHeights();
    window.addEventListener("resize", updateHeights);

    return () => window.removeEventListener("resize", updateHeights);
  }, []);
  let positions = [0];
  for (let i = 0; i < heights.length; i++) {
    positions.push(heights[i] / 2 + 25 + positions[i]);
  }
  let lineHeight = positions[positions.length - 2];

  let mobPositions = [0];
  for (let x = 0; x < mobHeights.length; x++) {
    mobPositions.push(mobHeights[x] / 2 + mobHeights[x + 1] / 2 + 25 + mobPositions[x]);
  }
  let mobLineHeight = mobPositions[mobPositions.length - 2];

  return (
    <div>
      <div
        className="position-relative d-none d-md-flex justify-content-center"
        style={{
          marginTop: `${heights[0] / 2 + 40}px`,
          marginBottom: `${heights[heights.length - 2]}px`,
        }}
      >
        <div className="middleLine" style={{ height: `${lineHeight}px` }}></div>
        <div className="roadMapDivContainerL">
          <div id="div1" className="roadMapDiv1L w-100">
            <div className="roadMapDiv2 p-3">
              <h5 className="text-center">STEP 1</h5>
              <h3>The awakening</h3>
              <p>- release of our 1st INTERACTIVE MANGA IP series called “LEGACY4”</p>
              <p>- exclusive entrance to our ecosystem</p>
            </div>
          </div>
          <div className="dashedLineL"></div>
          <div className="ballL"></div>
        </div>
        <div className="roadMapDivContainerR" style={{ top: `${positions[1]}px` }}>
          <div id="div2" className="roadMapDiv1R w-100">
            <div className="roadMapDiv2 p-3">
              <h5 className="text-center">STEP 2</h5>
              <h3>The welcoming </h3>
              <p>- A new IP produced and released under the PHYGITAL COLLECTION DEALZ flagship</p>
              <p>- An inclusive PFP collection release empowered by the $NUZ</p>
            </div>
            <div className="dashedLineR"></div>
            <div className="ballR"></div>
          </div>
        </div>
        <div className="roadMapDivContainerL" style={{ top: `${positions[2]}px` }}>
          <div id="div3" className="roadMapDiv1L w-100">
            <div className="roadMapDiv2 p-3">
              <h5 className="text-center">STEP 3</h5>
              <h3>The expanding</h3>
              <p>- development of gamified features to enhance current IPz</p>
              <p>- more INTERACT & EARN quests and tools prior to the $NUZ TGE</p>
            </div>
          </div>
          <div className="dashedLineL"></div>
          <div className="ballL"></div>
        </div>
        <div className="roadMapDivContainerR" style={{ top: `${positions[3]}px` }}>
          <div id="div4" className="roadMapDiv1R w-100">
            <div className="roadMapDiv2 p-3">
              <h5 className="text-center">STEP 4</h5>
              <h3>The strengthening</h3>
              <p>- release of our exclusive MEMBERSHIP collection</p>
              <p>- aggregation of 3rd-parties perks, discounts and rewards</p>
            </div>
            <div className="dashedLineR"></div>
            <div className="ballR"></div>
          </div>
        </div>
        <div className="roadMapDivContainerL" style={{ top: `${positions[4]}px` }}>
          <div id="div5" className="roadMapDiv1L w-100">
            <div className="roadMapDiv2 p-3">
              <h5 className="text-center">Q1 2026</h5>
              <h3>The ruling</h3>
              <p>- creation of a DAO to allow more IPz to fit in our publishing labels for KIDz, TEENz and ADULTz</p>
            </div>
          </div>
          <div className="dashedLineL"></div>
          <div className="ballL"></div>
        </div>
        <div className="roadMapDivContainerR" style={{ top: `${positions[5]}px` }}>
          <div id="div6" className="roadMapDiv1R w-100">
            <div className="roadMapDiv2 p-3">
              <h5 className="text-center">. . .</h5>
              <h3>The pursuing</h3>
              <p>- accrued presence inside legit web3 metaverses and connection with our own NuZiverse</p>
              <p>- More serious fun only experiences</p>
            </div>
            <div className="dashedLineR"></div>
            <div className="ballR"></div>
          </div>
        </div>
      </div>

      <div className="container d-flex d-md-none justify-content-start">
        <div className=" d-flex w-100" style={{ marginTop: `${mobHeights[0] / 2 + 40}px`, marginBottom: `${mobHeights[mobHeights.length - 1]}px` }}>
          <div className="leftLine" style={{ height: `${mobLineHeight}px` }}></div>
          <div className="d-block w-100 position-relative">
            <div className="d-flex position-absolute" style={{ width: "89%" }}>
              <div className="roadMapDivcontainerMobile position-relative w-100">
                <div id="div1Mobile" className="roadMapDiv1Mobile">
                  <div className="roadMapDiv2 p-3">
                    <p className="text-center">01 2025</p>
                    <h5>The awakening</h5>
                    <p>- release of our 1st INTERACTIVE MANGA IP series called “LEGACY4”</p>
                    <p>- exclusive entrance to our ecosystem</p>
                  </div>
                </div>
                <div className="mobileBall"></div>
                <div className="dashedLineMobile"></div>
              </div>
            </div>
            <div className="d-flex position-absolute" style={{ width: "89%", top: `${mobPositions[1]}px` }}>
              <div className="roadMapDivcontainerMobile position-relative w-100">
                <div id="div2Mobile" className="roadMapDiv1Mobile">
                  <div className="roadMapDiv2 p-3">
                    <p className="text-center">02 2025</p>
                    <h5>The welcoming </h5>
                    <p>- A new IP produced and released under the PHYGITAL COLLECTION DEALZ flagship</p>
                    <p>- An inclusive PFP collection release empowered by the $NUZ</p>
                  </div>
                </div>
                <div className="mobileBall"></div>
                <div className="dashedLineMobile"></div>
              </div>
            </div>
            <div className="d-flex position-absolute" style={{ width: "89%", top: `${mobPositions[2]}px` }}>
              <div className="roadMapDivcontainerMobile position-relative w-100">
                <div id="div3Mobile" className="roadMapDiv1Mobile">
                  <div className="roadMapDiv2 p-3">
                    <p className="text-center">03 2025</p>
                    <h5>The expanding</h5>
                    <p>- development of gamified features to enhance current IPz</p>
                    <p>- more INTERACT & EARN quests and tools prior to the $NUZ TGE</p>
                  </div>
                </div>
                <div className="mobileBall"></div>
                <div className="dashedLineMobile"></div>
              </div>
            </div>
            <div className="d-flex position-absolute" style={{ width: "89%", top: `${mobPositions[3]}px` }}>
              <div className="roadMapDivcontainerMobile position-relative w-100">
                <div id="div4Mobile" className="roadMapDiv1Mobile">
                  <div className="roadMapDiv2 p-3">
                    <p className="text-center">04 2025</p>
                    <h5>The strengthening</h5>
                    <p>- release of our exclusive MEMBERSHIP collection</p>
                    <p>- aggregation of 3rd-parties perks, discounts and rewards</p>
                  </div>
                </div>
                <div className="mobileBall"></div>
                <div className="dashedLineMobile"></div>
              </div>
            </div>
            <div className="d-flex position-absolute" style={{ width: "89%", top: `${mobPositions[4]}px` }}>
              <div className="roadMapDivcontainerMobile position-relative w-100">
                <div id="div5Mobile" className="roadMapDiv1Mobile">
                  <div className="roadMapDiv2 p-3">
                    <p className="text-center">01 2026</p>
                    <h5>The ruling</h5>
                    <p>- creation of a DAO to allow more IPz to fit in our publishing labels for KIDz, TEENz and ADULTz</p>
                  </div>
                </div>
                <div className="mobileBall"></div>
                <div className="dashedLineMobile"></div>
              </div>
            </div>
            <div className="d-flex position-absolute" style={{ width: "89%", top: `${mobPositions[5]}px` }}>
              <div className="roadMapDivcontainerMobile position-relative w-100">
                <div id="div6Mobile" className="roadMapDiv1Mobile">
                  <div className="roadMapDiv2 p-3">
                    <p className="text-center">. . .</p>
                    <h5>The pursuing</h5>
                    <p>- accrued presence inside legit web3 metaverses and connection with our own NuZiverse</p>
                    <p>- More serious fun only experiences</p>
                  </div>
                </div>
                <div className="mobileBall"></div>
                <div className="dashedLineMobile"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Months;
