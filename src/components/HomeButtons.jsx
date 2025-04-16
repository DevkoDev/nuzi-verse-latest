import NotchedBtn from "./NotchedBtn";
import "./HomeButtons.css";

function HomeButtons() {
  return (
    <div className="nHolder">
      <NotchedBtn
        bgImage="linear-gradient(90deg, #FFD363 0%, #F1A012 100%)"
        bgColor="rgba(255, 211, 99) "
        color="rgba(30, 30, 30, 1)"
        padding="2px 25px"
        fontSize="30px"
        text={
          <>
            <i className="fa-solid fa-circle-play"> </i> play Game{" "}
          </>
        }
      />
      <NotchedBtn bgColor="rgb(55 43 39 / 90%) " fontSize="30px" padding="2px 25px" text="explore more" />
    </div>
  );
}

export default HomeButtons;