import "./Circles.css";
function Circles() {
  return (
    // <div className="box h-100">
    //   <div className="circles ">
    //     <div className="first-circle">
    //       <img src="/Group 1244831140.png" alt="" />
    //     </div>
    //     <div className="circle">
    //       <img className="" src="/Group 1244831140.png" alt="" />
    //     </div>
    //     <div className="circle">
    //       <img src="/Group 1244831140.png" alt="" />
    //     </div>

    //     <div className="circle">
    //       <img src="/Group 1244831140.png" alt="" />
    //     </div>
    //   </div>
    // </div>
    <div className="circlesBox position-relative">
      <div className="topCircle position-absolute">
        <img className="w-100" src="/Group 1244831140.png" alt="" />
      </div>
      <div className="rightCircle position-absolute">
        <img className="w-100" src="/Group 1244831140.png" alt="" />
      </div>
      <div className="bottomCircle position-absolute">
        <img className="w-100" src="/Group 1244831140.png" alt="" />
      </div>
      <div className="leftCircle position-absolute">
        <img className="w-100" src="/Group 1244831140.png" alt="" />
      </div>
    </div>
  );
}

export default Circles;
