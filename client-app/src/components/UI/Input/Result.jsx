import React from 'react'
import StartQuiz from '../Button/StartQuiz';

export default function Result(props) {
    return (
        <>
            <StartQuiz/>
            <div className='center'>
                <div style={{width: "650px", textAlign:"center", backgroundColor: "rgb(235, 156, 125)"}}>
                    <p>You scored {props.score} out of 5</p>
                </div>
            </div>
        </>
    )
}
