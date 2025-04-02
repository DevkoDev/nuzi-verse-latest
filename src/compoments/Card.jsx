import "./Card.css";

const Card = () => {
  return (
    <div className="productCard p-2 text-center">
      <svg
        className="svg"
        width="100%"
        height="100%"
        viewBox="0 0 293 350"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path
            d="M291.656 285.165C291.656 288.92 289.848 292.444 286.798 294.634L213.452 347.295C211.471 348.717 209.093 349 206.654 349L12.1739 349C5.73627 349 0.517548 344.264 0.517548 337.826L0.517548 12.1739C0.517548 5.73633 5.73624 0.517609 12.1739 0.517609L280 0.517609C286.438 0.517609 291.656 5.73633 291.656 12.1739L291.656 285.165Z"
            stroke="url(#paint0_linear_2037_1846)"
            strokeOpacity="0.7"
            strokeWidth="1.0352"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_2037_1846"
            x1="260.035"
            y1="317.054"
            x2="42.3091"
            y2="-26.7906"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFD363" />
            <stop offset="1" stopColor="#F1A012" />
          </linearGradient>
        </defs>
      </svg>

      <div>
        <p className="itemfont mb-0 mt-1 m-xl-2">item 1</p>
        <div className="d-flex justify-content-center">
          <div className="imageContainer position-relative">
              <div className="tags position-absolute d-flex w-100 h-100 p-1">
                <div className="tag1 me-2">
                  <img className="w-100 p-1" src="./product.png" alt="" />
                </div>
                <div className="tag2 me-2">
                  <img className="h-100 ps-2 p-1" src="./Lightning.png" alt="" /> 
                  <p className="m-0 pe-2 me-1 priceFont1">Rare</p>
                </div>
              </div>
            <img className="image" src="./card.png" alt="" />
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-around priceContainer pt-1">
          <div className="">
            <p className="text-start m-0 p-0 priceFont1">current bid</p>
            <div className="d-flex">
              <img
                className="coinIMG"
                src="./NUZLogoCoin.png"
                alt=""
              />
              <p className="text-start m-0 p-0 ps-1 priceFont2"> 5.3 $NUZ</p>
            </div>
          </div>
          <button className="buyBTN py-1">Free</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
