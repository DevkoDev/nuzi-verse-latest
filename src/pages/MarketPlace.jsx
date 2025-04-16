import PageNav from "../components/PageNav"
import PageFooter from "../components/PageFooter"
import RoadHeader from "../components/RoadHeader"
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
