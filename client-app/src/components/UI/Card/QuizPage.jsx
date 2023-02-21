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
