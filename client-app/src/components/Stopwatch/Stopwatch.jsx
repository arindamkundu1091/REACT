import React from 'react'

export default function Stopwatch() {
    return (
        <div>
            <div className="card">
                <div className="container">
                    <div className="heading">
                        <p>React Stopwatch</p>
                    </div>
                    <div>
                        <p className='time' id='time'>00 : 00 : 00</p>
                    </div>
                    <div className="buttons">
                        <button className="btn" id="start" type="button" hidden="">Start</button>
                        <button className="btn" id="pause" type="button" hidden="hidden" disabled>Pause</button> 
                        <button className="btn" id="resume" type="button" hidden="hidden" disabled>Resume</button>
                        <button className="btn" id="reset" type="button">Reset</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
