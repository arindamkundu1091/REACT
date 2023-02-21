    import React, { useState, useRef } from "react";

export default function Stopwatch() {
        

    const [timer, setTimer] = useState(3595);
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const increment = useRef(null);

    const handleStart = () => {
        setIsActive(true);
        setIsPaused(true);
        increment.current = setInterval(() => {
        setTimer((timer) => timer + 1);
        }, 1000);
    };

    const handlePause = () => {
        clearInterval(increment.current);
        setIsPaused(false);
    };

    const handleResume = () => {
        setIsPaused(true);
        increment.current = setInterval(() => {
        setTimer((timer) => timer + 1);
        }, 1000);
    };

    const handleReset = () => {
        clearInterval(increment.current);
        setIsActive(false);
        setIsPaused(false);
        setTimer(0);
    };

    const formatTime = () => {
        const getSeconds = `0${timer % 60}`.slice(-2);
        const minutes = `${Math.floor(timer / 60)}`;
        const getMinutes = `0${minutes % 60}`.slice(-2);
        const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);
        return `${getHours} : ${getMinutes} : ${getSeconds}`;
    };

    return (
        <div>
        <div className="card">
            <div className="container">
            <div className="heading">
                <p>React Stopwatch</p>
            </div>
            <div>
                <p className="time" id="time">
                {formatTime()}
                </p>
            </div>
            <div className="buttons" id="button">
                {!isActive && !isPaused ? (
                <button className="btn" id="start" onClick={handleStart}>
                    Start
                </button>
                ) : isPaused ? (
                <button className="btn" id="pause" onClick={handlePause}>
                    Pause
                </button>
                ) : (
                <button className="btn" id="resume" onClick={handleResume}>
                    Resume
                </button>
                )}
                <button className="btn" id="reset" onClick={handleReset} disabled={!isActive}>
                Reset
                </button>
            </div>
            </div>
        </div>
        </div>
    );
    }
