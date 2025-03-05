import Map from "../compoments/Map";
import PageFooter from "../compoments/PageFooter";
import PageNav from "../compoments/PageNav";
import Cnavas from "../compoments/Background";

function Roadmap() {
  return (
    <div>
      <Cnavas />
      <PageNav />
      <Map />
      <PageFooter />
    </div>
  );
}

export default Roadmap;
