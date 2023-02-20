import React from 'react'
import ShowResult from '../Button/ShowResult';

export default function QuizPage() {

    // const [score, setScore] = React.useState(0);
    const [state, setState] = React.useState(true);

    const show = () => {
        if (state) {
            return (
                <ShowResult />
            )
        } else {
        }
    }

    return (
        <React.Fragment>
            <div>
                <div className="main">
                    <div className="card card1">
                        <h3 className="question">Who is the father of our nation ?</h3>
                        <button className="bigbtn">
                            Mahatma Gandhi
                        </button>
                        <button className="bigbtn">
                            Jawaharlal Nehru
                        </button>
                        <button className="bigbtn"> 
                            Donal Trump
                        </button>
                        <button className="bigbtn"> 
                            Barrack Obama
                        </button>
                    </div>
                    <div className="card card1">
                        <h3 className="question">What color is are the leaves ?</h3>
                        <button className="btn">Blue</button>
                        <button className="btn">Red</button>
                        <button className="btn">Yellow</button>
                        <button className="btn">Green</button>
                    </div>
                    <div className="card card2">
                        <h3 className="question">What color is the sky ?</h3>
                        <button className="btn">Blue</button>
                        <button className="btn">Red</button>
                        <button className="btn">Yellow</button>
                        <button className="btn">Green</button>
                    </div>
                    <div className="card card2">
                        <h3 className="question">What color is the sky ?</h3>
                        <button className="btn">Blue</button>
                        <button className="btn">Red</button>
                        <button className="btn">Yellow</button>
                        <button className="btn">Green</button>
                    </div>
                    <div className="card card2">
                        <h3 className="question">What color is the fire ?</h3>
                        <button className="btn">Blue</button>
                        <button className="btn">Red</button>
                        <button className="btn">Yellow</button>
                        <button className="btn">Green</button>
                    </div>
                </div>
            </div>
            {show()}
        </React.Fragment>
    )
}
