import {useNavigate} from "react-router-dom"
import React from "react";
// import Trophy from "./assets/trophy.png"

const HomePage = ()=> {
    const navigate = useNavigate();
    return (
        <div className="Header">
            <h2 className="heading1">Quizard</h2>
            <h4 className="heading2">Questions to challenge on all topics!</h4>
           
            <button className="ClickButton" onClick={() => navigate('quiz')}>Start Playing</button>
        </div>
    )
}
export default HomePage