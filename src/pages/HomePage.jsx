import { useState } from "react";
import Canvas from "../compoments/Background";
import PageNav from "../compoments/PageNav";
import PageFooter from "../compoments/PageFooter";
import Text from "../compoments/Text";
import HomeButtons from "../compoments/HomeButtons";
import NotchedBtn from "../compoments/NotchedBtn";
import "./HomePage.css";
import { ToastContainer, toast } from "react-toastify";
export default function HomePage() {
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
    if (!email) {
      toast.error("Invalid");
      return;
    }

    try {
      const response = await fetch("https://email-waitlist.devko-dev.workers.dev/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.status == 200) {
        toast.success("Successfully joined the waitlist");
      } else if (response.status == 400) {
        toast.error("Invalid email");
      } else if (response.status == 409) {
        toast.error("Already joined");
      } else if (response.status == 429) {
        toast.error("Try again later.");
      } else {
        toast.error("Unknown Error");
      }
    } catch (error) {
      toast.error("Error");
      console.error("Error:", error);
    }
  };

  return (
    <div className="position-relative" style={{ height: "100vh" }}>
      <Canvas />
      <div className="homepage position-relative d-flex justify-content-between flex-column" style={{ minHeight: "100vh" }}>
        <PageNav />
        <div className="content2 position-absolute w-100 justify-content-center d-flex">
          <div className="d-grid w-100">
            <Text text="Join waitlist" />
            <div className=" justify-content-center d-flex position-relative">
              <img className=" position-absolute w-50 kraamIMG" src="../LEGACY4_ONE_COVER_KRAAM_only.gif" alt="" />
              <input id="email" className="emailInput rounded m-auto text-light px-2 py-1 mb-4" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="example@gmail.com" />
            </div>
            <div className="d-flex m-auto">
              <NotchedBtn onClick={handleSubmit} bgColor="rgb(55 43 39 / 90%) " fontSize="20px" padding="2px 25px" text="Submit" />
            </div>
          </div>
          <div className="d-none">
            <Text text="Text Here" />
            <HomeButtons />
          </div>
        </div>
        <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark"  />
        <div className="footerContainer">
          <PageFooter />
        </div>
      </div>
    </div>
  );
}
