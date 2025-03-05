import "./Square.css";

function Square() {
  return (
    <div className="square-btn">
      <div className="union-all">
        <img className="w-100" src="./Union2.svg" alt="" />
        <div className="rect-holder">
          <span>
            <img src="./Rectangle 20.png" alt="" className="first p-2" />
          </span>
          <span>
            <img src="./Rectangle 18.png" alt="" className="second p-2" />
          </span>
          <span>
            <img src="./Rectangle 19.png" alt="" className="third p-2" />
          </span>
          <span>
            <img src="./Rectangle 17.svg" alt="" className="fourth p-2" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Square;
