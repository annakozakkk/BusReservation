import {StyledHeader} from "./Header.styled";
import '../../scss/globals.css'
import '../Header/scss/header.css'
import {Link} from "react-router-dom";
const Header = () =>{
    return(
        <StyledHeader className="header" >
            <div className='header_content'>
                <div className=' header_logo'>
                    <a href="">BookiBus</a>
                </div>
                <div className='buttons_wrapper'>
                    <Link to={"/mainpage"}>
                        <button  className="header_button enter">Вхід</button>
                    </Link>
                    <button href='' className="header_button">Реєстрація</button>
                </div>
            </div>

        </StyledHeader>
    )
}

export default Header