import { useEffect, useState } from "react"
import { question_bank } from "./QuestionBank"
const Question = ({index, nextButttonClick, updateScore})=> {
    const [checked, setChecked] = useState(null);

    useEffect (() => {
        console.log('hello')
        //  console.log("correct answer " + question_bank[index-1].answer + ", our answer: " + checked);
        if (index > 0 && checked === question_bank[index-1].answer){
            updateScore()
        } 
        setChecked(null)
    },[nextButttonClick]);

    // useEffect(() => {
    //     return () => {
    //         console.log("harshit unmmounted with index: " + index)
    //         if (id > 0 && checked === question_bank[id].answer){
    //             updateScore()
    //         }
    //     }
    // }, [id])



    return (
        <div className="questions">
            <h2 className="Qheading">Question {question_bank[index].id} of {question_bank.length}</h2>
            <h3 className="Ques">{question_bank[index].question}</h3>

            <label className="radioB">
                <input
                type='radio'
                name="option"
                onClick={ e =>
                    setChecked(question_bank[index].options[0])
                }
                checked={checked == question_bank[index].options[0]}
                value= {question_bank[index].options[0]}
            />
            {question_bank[index].options[0]}   
            </label>
            <label className="radioB">
                <input
                type='radio'
                name="option"
                checked={checked == question_bank[index].options[1]}
                onClick={ e =>
                    setChecked(question_bank[index].options[1])
                }
                value={question_bank[index].options[1]}
            />
            {question_bank[index].options[1]}
            </label>
            <label className="radioB">
                <input
                    type='radio'
                    name="option"
                    checked={checked == question_bank[index].options[2]}
                    onClick={ e =>
                        setChecked(question_bank[index].options[2])
                    }
                />
                {question_bank[index].options[2]}
            </label>
            <label className="radioB">
                <input
                    type='radio'
                    name="option"
                    checked={checked == question_bank[index].options[3]}
                    onClick={ e =>
                        setChecked(question_bank[index].options[3])
                    }
                />
                {question_bank[index].options[3]}
            </label>

        </div>                
        )
}

export default Question