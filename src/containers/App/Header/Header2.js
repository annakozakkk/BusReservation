import {StyledHeader} from "./Header.styled";
import {Link} from "react-router-dom";
import BellImage from "../../../Icons/free-icon-font-bell 1.png"

const Header2 = () => {
    return (
        <StyledHeader className="header">
            <div className='header_content'>
                <div className=' header_logo'>
                    <a href="">BookiBus</a>
                </div>
                <img src={BellImage}/>

            </div>

        </StyledHeader>
    )
}
export default Header2