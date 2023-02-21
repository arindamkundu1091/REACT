import React ,{useEffect} from 'react'
import ShowResult from '../Button/ShowResult';
import Result from '../Input/Result';

export default function QuizPage() {

    const [state, setState] = React.useState(false);
    const [count, setCount] = React.useState(0);
    const [score, setScore] = React.useState(1);

    const counter = () => {
        setCount(count + 1);
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
        <Result score={score} />
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
                        <button className="bigbtn" onClick={scoreCoutner}>
                            Mahatma Gandhi
                        </button>
                        <button className="bigbtn" onClick={counter}>
                            Jawaharlal Nehru
                        </button>
                        <button className="bigbtn" onClick={counter}> 
                            Donal Trump
                        </button>
                        <button className="bigbtn" onClick={counter}> 
                            Barrack Obama
                        </button>
                    </div>
                    <div className="card card1">
                        <h3 className="question">What color is are the leaves ?</h3>
                        <button className="btn" onClick={counter}>Blue</button>
                        <button className="btn" onClick={counter}>Red</button>
                        <button className="btn" onClick={counter}>Yellow</button>
                        <button className="btn" onClick={scoreCoutner}>Green</button>
                    </div>
                    <div className="card card2">
                        <h3 className="question">What color is the sky ?</h3>
                        <button className="btn" onClick={scoreCoutner}>Blue</button>
                        <button className="btn" onClick={counter}>Red</button>
                        <button className="btn" onClick={counter}>Yellow</button>
                        <button className="btn" onClick={counter}>Green</button>
                    </div>
                    <div className="card card2">
                        <h3 className="question">What color is the sky ?</h3>
                        <button className="btn" onClick={scoreCoutner}>Blue</button>
                        <button className="btn" onClick={counter}>Red</button>
                        <button className="btn" onClick={counter}>Yellow</button>
                        <button className="btn" onClick={counter}>Green</button>
                    </div>
                    <div className="card card2">
                        <h3 className="question">What color is the fire ?</h3>
                        <button className="btn" onClick={counter}>Blue</button>
                        <button className="btn" onClick={counter}>Red</button>
                        <button className="btn" onClick={scoreCoutner}>Yellow</button>
                        <button className="btn" onClick={counter}>Green</button>
                    </div>
                </div>
            </div>
            {show()}
        </React.Fragment>
    )
}
