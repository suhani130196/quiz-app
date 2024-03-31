 import {
    createBrowserRouter,
    RouterProvider,
    Routes,
    Route,
    useNavigate
 } from "react-router-dom";

 import HomePage from "./QuizHome";
 import Question from './Question'
 import ButtonNext from './ButtonNext'
 import ButtonPrevious from './ButtonPrevious';
 import ScoreCard from "./ScoreCard";

 import { useState } from 'react';
import { question_bank } from "./QuestionBank";

 function QuizApp (){
    const [index, setIndex] = useState(0);
    const [score, setScore] = useState(0); 
    const [nextButtonClicked, setNextButtonClicked] = useState(0)   
    const navigate = useNavigate();

    function questionComponent() {
        return (
            <div>
                <Question index={index} nextButttonClick={nextButtonClicked} updateScore={(e) => {setScore(score+1)}} />
                <ButtonPrevious onclick={onPreviousButtonClick} />
                <ButtonNext onclick={onNextButttonClick}/>
            </div>
        )
    }
    function updateScore (){
        return (
            <div>            
                <ScoreCard score = {score}/>
            </div>
        )
    }

    function onNextButttonClick (){ 
        setNextButtonClicked(nextButtonClicked+1);
        if (index === question_bank.length-1) {
            navigate('score')                  
        } else {
            setIndex(index+1)
        }
    }        
        
    
    function onPreviousButtonClick (){
        setIndex(index-1)
    }

    return(
    <div className="container">
        <Routes >
            <Route 
                path="/"
                element={(<HomePage />)}
            />
            <Route 
                path="/quiz"
                element={(questionComponent())}
            />
            <Route 
                path="/score"
                element={(updateScore())}
            />
        </Routes>
    </div>
    )    
}

export default QuizApp