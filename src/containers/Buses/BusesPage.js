import Header2 from "../App/Header/Header2";
import {Link} from "react-router-dom";
const BUS ='/bus';
const BusesPage = ()=>{
    return(
        <div>
            <Header2/>
            <Link to={BUS + `?id=`}>
                 <button>Забронювати</button>
            </Link>
        </div>
    )
}

export default BusesPage