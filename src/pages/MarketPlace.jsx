import PageNav from "../compoments/PageNav"
import PageFooter from "../compoments/PageFooter"
import RoadHeader from "../compoments/RoadHeader"
import "./MarketPlace.css"



function MarketPlace() {
    return (
        <div className="background">
            <PageNav/>
            <div className="MarketPlace"> <RoadHeader/></div>

            <PageFooter/>
       
        </div>
    )
}

export default MarketPlace
