import { useRef, useState } from "react";
import Card from "../components/Card";
import "./NewMarketPlace.css";
import ToggleSwitch from "../components/Toggle";
import PropTypes from "prop-types";

function NewMarketPlace({ onToggle }) {
  const [filter, setFilter] = useState(true);
  const [filterValue, setFilterValue] = useState("F");
  const divRef = useRef(null);
  const [height, setHeight] = useState(0);

  const [price, setPrice] = useState(0.01);
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [artist, setArtist] = useState("");

  const setValue = (value) => {
    setFilterValue(value);
  };

  const handleClick = () => {
    setFilter(!filter);
  };

  return (
    <div className="market">
      <div className="container marketContainer justify-content-center">
        <div className="m-auto w-100 h-100 justify-content-center itemsContainer">
          <div
            className=" w-100 text-center mb-3 d-flex justify-content-around align-items-center border-bottom"
            style={{ height: "fit-content" }}
          >
            <div className=" container-fluid">
              <div className="row w-100 justify-content-around">
                <button
                  onClick={handleClick}
                  className={`advancedFilter filterFont col-3 px-3 py-1 my-3 ${
                    filter ? "filterActive" : ""
                  }`}
                >
                  Advanced Filter
                  <img className="iconWidth ms-2" src="/Filter.svg" alt="" />
                </button>
                <div className="col-7 d-flex justify-content-center">
                  <div
                    onClick={() => setValue("F")}
                    className={`filterElement filterFont align-items-center d-flex text-center justify-content-center px-2 px-lg-4 ${
                      filterValue === "F" ? "filterElementActive" : ""
                    }`}
                  >
                    <img className="iconWidth me-1" src="./Burn.svg" alt="" />
                    Featured
                  </div>
                  <div
                    onClick={() => setValue("A")}
                    className={`filterElement filterFont align-items-center d-flex text-center justify-content-center px-2 px-lg-4 ${
                      filterValue === "A" ? "filterElementActive" : ""
                    }`}
                  >
                    <img
                      className="iconWidth me-1"
                      src="./All category.svg"
                      alt=""
                    />
                    All items
                  </div>
                  <div
                    onClick={() => setValue("R")}
                    className={`filterElement filterFont align-items-center d-flex text-center justify-content-center px-2 px-lg-4 ${
                      filterValue === "R" ? "filterElementActive" : ""
                    }`}
                  >
                    <img
                      className="iconWidth me-1"
                      src="./ion_book.svg"
                      alt=""
                    />
                    Read
                  </div>
                  <div
                    onClick={() => setValue("P")}
                    className={`filterElement filterFont align-items-center d-flex text-center justify-content-center px-2 px-lg-4 ${
                      filterValue === "P" ? "filterElementActive" : ""
                    }`}
                  >
                    <img
                      className="iconWidth me-1"
                      src="./Vector1.svg"
                      alt=""
                    />
                    Product
                  </div>
                </div>
                <div className="col-2 d-flex justify-content-center">
                  <img className="w-100" src="./Button (2).png" alt="" />
                </div>
              </div>
            </div>
          </div>

          <div style={{height :"90%"}}>
            <div className="h-100 container-fluid">
              <div className="row w-100 h-100 justify-content-end position-relative">
                <div
                  ref={divRef}
                  className={`filter-box p-0 col-3 position-absolute ${
                    filter ? "" : "hide"
                  }`}
                >
                  <div>
                    <div className="d-flex justify-content-between mb-2">
                      <p className="m-0">Applied Filter</p>
                      <p className="m-0 clearAllBTN">Clear All</p>
                    </div>
                    <div className="mb-4">
                      <div className="d-flex appliedFilterItem p-1 align-items-center mb-2">
                        <p className="m-0">Recently Added</p>
                        <img className="closeIcon" src="./Close.png" alt="" />
                      </div>
                    </div>
                    <div className="mb-4">
                      <p className="m-0">Price range</p>
                      <p className="w-100 text-end m-0">{price} $NUZ</p>
                      <div>
                        <input
                          className="slider w-100"
                          type="range"
                          min="0.01"
                          step={0.01}
                          max="10"
                          value={price}
                          onChange={(e) => setPrice(e.target.value)}
                        />
                      </div>
                      <div className="d-flex justify-content-between">
                        <p>0.01 $NUZ</p>
                        <p>10 $NUZ</p>
                      </div>

                      <div className="">
                        <p className="m-0">Type</p>
                        <select
                          className="w-100 mt-1 p-2"
                          value={type}
                          onChange={(e) => setType(e.target.value)}
                        >
                          <option value="">Select Type</option>
                          <option value="Product">Product</option>
                          <option value="Service">Service</option>
                        </select>
                      </div>
                      <div className="">
                        <p className="m-0">Category</p>
                        <select
                          className="w-100 mt-1 p-2"
                          value={category}
                          onChange={(e) => setCategory(e.target.value)}
                        >
                          <option value="">Select Category</option>
                          <option value="Recently Added">Recently Added</option>
                          <option value="Most Liked">Most Liked</option>
                        </select>
                      </div>
                      <div className="">
                        <p className="m-0">Artist</p>
                        <select
                          className="w-100 mt-1 p-2"
                          value={artist}
                          onChange={(e) => setArtist(e.target.value)}
                        >
                          <option value="">Select Artist</option>
                          <option value="Artist 1">Artist 1</option>
                          <option value="Artist 2">Artist 2</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`content-box ${
                    filter ? "col-9" : "col-12"
                  } justify-content-center d-flex h-100`}
                >
                  <div className="row w-100" style={{alignContent : "flex-start"}}>
                    
                    <div
                      className={`${ 
                        filter ? "col-4" : "col-3"
                      } pe-2 pb-2 pt-0 ps-0`}
                      style={{height : "fit-content"}}
                    >
                      <Card />
                    </div>
                    <div
                      className={`${ 
                        filter ? "col-4" : "col-3"
                      } pe-2 pb-2 pt-0 ps-0`}
                      style={{height : "fit-content"}}
                    >
                      <Card />
                    </div>
                    <div
                      className={`${ 
                        filter ? "col-4" : "col-3"
                      } pe-2 pb-2 pt-0 ps-0`}
                      style={{height : "fit-content"}}
                    >
                      <Card />
                    </div>
                    <div
                      className={`${ 
                        filter ? "col-4" : "col-3"
                      } pe-2 pb-2 pt-0 ps-0`}
                      style={{height : "fit-content"}}
                    >
                      <Card />
                    </div>
                    <div
                      className={`${ 
                        filter ? "col-4" : "col-3"
                      } pe-2 pb-2 pt-0 ps-0`}
                      style={{height : "fit-content"}}
                    >
                      <Card />
                    </div>
                    <div
                      className={`${ 
                        filter ? "col-4" : "col-3"
                      } pe-2 pb-2 pt-0 ps-0`}
                      style={{height : "fit-content"}}
                    >
                      <Card />
                    </div>
                    <div
                      className={`${ 
                        filter ? "col-4" : "col-3"
                      } pe-2 pb-2 pt-0 ps-0`}
                      style={{height : "fit-content"}}
                    >
                      <Card />
                    </div>
                    <div
                      className={`${ 
                        filter ? "col-4" : "col-3"
                      } pe-2 pb-2 pt-0 ps-0`}
                      style={{height : "fit-content"}}
                    >
                      <Card />
                    </div>
                    <div
                      className={`${ 
                        filter ? "col-4" : "col-3"
                      } pe-2 pb-2 pt-0 ps-0`}
                      style={{height : "fit-content"}}
                    >
                      <Card />
                    </div>
                    <div
                      className={`${ 
                        filter ? "col-4" : "col-3"
                      } pe-2 pb-2 pt-0 ps-0`}
                      style={{height : "fit-content"}}
                    >
                      <Card />
                    </div>
                    <div
                      className={`${ 
                        filter ? "col-4" : "col-3"
                      } pe-2 pb-2 pt-0 ps-0`}
                      style={{height : "fit-content"}}
                    >
                      <Card />
                    </div>
                    <div
                      className={`${ 
                        filter ? "col-4" : "col-3"
                      } pe-2 pb-2 pt-0 ps-0`}
                      style={{height : "fit-content"}}
                    >
                      <Card />
                    </div>
                    <div
                      className={`${ 
                        filter ? "col-4" : "col-3"
                      } pe-2 pb-2 pt-0 ps-0`}
                      style={{height : "fit-content"}}
                    >
                      <Card />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

NewMarketPlace.propTypes = {
  onToggle: PropTypes.func.isRequired,
};

export default NewMarketPlace;
