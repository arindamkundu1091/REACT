import React from 'react'
import StartQuiz from '../Button/StartQuiz';

export default function Result() {

    const score = localStorage.getItem("score");

    return (
        <>
            <StartQuiz/>
            <div className='center'>
                <div style={{width: "650px", textAlign:"center", backgroundColor: "rgb(235, 156, 125)"}}>
                    <p>You scored {score} out of 5</p>
                </div>
            </div>
        </>
    )
}
