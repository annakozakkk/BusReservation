import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Landing from "../Landing/Landing";
import Header from "../App/Header/Header";
import MainPage from "../MainPage/MainPage";
import BusesPage from "../Buses/BusesPage";
import BusReservation from "../BusReservation/BusReservation";
const Navigation = ()=>{
    return(
    <Router>

        <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path="/mainpage" element={<MainPage/>}/>
            <Route path={"/buses"} element={<BusesPage/>}/>
            <Route path={"/bus/*"} element={<BusReservation/>}/>
        </Routes>
    </Router>
    )
}
export default Navigation