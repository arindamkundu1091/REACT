import React from 'react'
import StartQuiz from '../Button/StartQuiz';

export default function Result() {
    return (
        <>
            <StartQuiz/>
            <div className='center'>
                <div className='startdiv' style={{width: "650px", backgroundColor: "rgb(235, 156, 125)"}}>
                    <a className='start' role='button' href='/'>You have answered correctly</a>
                </div>
            </div>
        </>
    )
}
