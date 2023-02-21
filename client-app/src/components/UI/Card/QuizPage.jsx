import React ,{useEffect} from 'react'
import ShowResult from '../Button/ShowResult';

export default function QuizPage() {

    const [state, setState] = React.useState(false);
    const [count, setCount] = React.useState(0);
    const [score, setScore] = React.useState(1);
    const [name, setName] = React.useState('q1');

    const disable = () => {
        let element = document.getElementsByClassName(name);
        for(var i = 0; i < 4; i++) {
            element[i].disabled = true;
            element[i].style.pointerEvents = "none";
        }
    }

    const counter = () => {
        setCount(count + 1);
        disable();
    }
    
    useEffect(() => {
        if (count === 5) {
            setState(true);
        }
    }, [setState, count]);
    
    const scoreCoutner = () => {
        setScore(score + 1);
        console.log(score);
        counter();
    }

    const show = () => {
        if (state) {
            return (
                <ShowResult />
            );
        }
    };


    return (
        <React.Fragment>
            <div>
                <div className="main">
                    <div className="card card1">
                        <h3 className="question">Who is the father of our nation ?</h3>
                        <button className="bigbtn q1" onClick={scoreCoutner}>
                            Mahatma Gandhi
                        </button>
                        <button className="bigbtn q1" onClick={counter}>
                            Jawaharlal Nehru
                        </button>
                        <button className="bigbtn q1" onClick={counter}> 
                            Donal Trump
                        </button>
                        <button className="bigbtn q1" onClick={counter}> 
                            Barrack Obama
                        </button>
                    </div>
                    <div className="card card1">
                        <h3 className="question">What color is are the leaves ?</h3>
                        <button className="btn q2" onClick={counter}>Blue</button>
                        <button className="btn q2" onClick={counter}>Red</button>
                        <button className="btn q2" onClick={counter}>Yellow</button>
                        <button className="btn q2" onClick={scoreCoutner}>Green</button>
                    </div>
                    <div className="card card2">
                        <h3 className="question">What color is the sky ?</h3>
                        <button className="btn q3" onClick={scoreCoutner}>Blue</button>
                        <button className="btn q3" onClick={counter}>Red</button>
                        <button className="btn q3" onClick={counter}>Yellow</button>
                        <button className="btn q3" onClick={counter}>Green</button>
                    </div>
                    <div className="card card2">
                        <h3 className="question">What color is the sky ?</h3>
                        <button className="btn q4" onClick={scoreCoutner}>Blue</button>
                        <button className="btn q4" onClick={counter}>Red</button>
                        <button className="btn q4" onClick={counter}>Yellow</button>
                        <button className="btn q4" onClick={counter}>Green</button>
                    </div>
                    <div className="card card2">
                        <h3 className="question">What color is the fire ?</h3>
                        <button className="btn q5" onClick={counter}>Blue</button>
                        <button className="btn q5" onClick={counter}>Red</button>
                        <button className="btn q5" onClick={scoreCoutner}>Yellow</button>
                        <button className="btn q5" onClick={counter}>Green</button>
                    </div>
                </div>
            </div>
            {show()}
        </React.Fragment>
    )
}
