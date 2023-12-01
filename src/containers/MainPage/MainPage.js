import Header2 from "../App/Header/Header2";
import {Link} from "react-router-dom";

const MainPage = () => {
    return (
        <div>
            <Header2/>
            <div className='landing_wrapper'>
                <div className='landing_content'>
                    <h1 style={{color: '#6C584C'}}>Найзручніший</h1>
                    <h1 style={{color: '#000000'}}>сайт для</h1>
                    <h1 style={{color: '#000000'}}>бронювання</h1>
                    <h1 style={{color: '#ADC178'}}>автобусів</h1>
                    <div className='landing_statistic'>
                        <div style={{color: '#6C584C'}}>
                            <h1>300+</h1>
                            <p>автобусів</p>
                        </div>
                        <div style={{color: '#A98467'}}>
                            <h1>100+</h1>
                            <p>міст</p>
                        </div>
                        <div style={{color: '#ADC178'}}>
                            <h1>300+</h1>
                            <p>турагенцій</p>
                        </div>
                    </div>
                    <Link to={"/buses"}>
                        <button className="buses_button">Перейти до автобусів</button>
                    </Link>

                </div>
                <footer className='footer'>
                </footer>

            </div>

        </div>
    )

}
export default MainPage