import React from 'react'
import { Link } from "react-router-dom";

export default function StartQuiz() {
    return (
        <div className='center'>
            <div className='startdiv' style={{border: "1px solid black"}}>
                <Link className='start' role='button' to='/quizpage'>Start Quiz</Link>
            </div>
        </div>
    )
}
