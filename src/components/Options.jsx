import "./Options.css";

function Options() {
  return (
    <div className="container d-flex h-100 align-items-center py-5 justify-content-center">
      <div className="w-100 row justify-content-center d-flex align-items-center h-100">
        <div className="col-12 col-lg-4 col-xl-3 col-xxl-4 justify-content-center text-center">
          <div className="row justify-content-center">
            <div className="col-10 col-sm-7 col-md-5 col-lg-12">
              <div className="row">
                <div className="col-12 d-block d-lg-none">
                  <img
                    className="w-100"
                    src="/516bbf0935b513e9c30f040594c90874.png"
                    alt="logo"
                  />
                </div>
              </div>
              <div className="w-100 position-relative my-3">
                <img className="w-100" src="./buttonOne.svg" alt="" />
                <div className="position-absolute buttonText">
                  <h3 className="m-0">INTERACT</h3>
                </div>
              </div>
              <div className="w-100 position-relative my-3">
                <img className="w-100" src="./buttonOne.svg" alt="" />
                <div className="position-absolute buttonText">
                  <h3 className="m-0">READ</h3>
                </div>
              </div>
              <div className="w-100 position-relative my-3">
                <img className="w-100" src="./buttonOne.svg" alt="" />
                <div className="position-absolute buttonText">
                  <h3 className="m-0">WATCH</h3>
                </div>
              </div>
              <div className="w-100 position-relative my-3">
                <img className="w-100" src="./buttonOne.svg" alt="" />
                <div className="position-absolute buttonText">
                  <h3 className="m-0">PLAY</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-5 col-lg-6 col-xl-5 col-xxl-6 justify-content-center text-center d-none d-lg-block">
          <img
            className="w-100"
            src="/516bbf0935b513e9c30f040594c90874.png"
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
}

export default Options;
