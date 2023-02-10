import React, {useState, useEffect} from 'react'

function Example1() {

    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);
    //This code run on every render...
    // useEffect(() => {
    //     setTimeout(() => {
    //         setCount(count => count+1);
    //     }, 1000);
    // });
    //This code run for first render...
    // useEffect(() => {
    //     setTimeout(() => {
    //         setCount(count => count+1);
    //     }, 1000);
    // }, []);

    useEffect(() => {
        setCalculation(() => count*2);
    }, [count]);

    return (
        <React.Fragment>
            <div>
            The Count is {count}
            </div>
            <button onClick={()=>setCount((c) => c+1)}>Click</button>
            <p>Calculation : {calculation}</p>
        </React.Fragment>
    )
}

export default Example1