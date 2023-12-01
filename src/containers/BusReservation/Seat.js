import "./scss/seat.css"
import {useState} from "react";

const  Seat = (props)=>{
    const [isClicked, setIsClicked] = useState(false)
    const handleClick = () => {

        if (props.onClick && !props.confirmed) {
            props.onClick();
            setIsClicked(!isClicked)
        }



    };
     return(
         <button className= {`seat ${isClicked? 'clicked' : ''}`}
         onClick={handleClick}>
             {props.numberOfSeat}
         </button>
     )
}
export default Seat