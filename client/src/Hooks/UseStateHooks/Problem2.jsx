import React, { useState } from 'react'

function Problem2() {
    const [click, setClick] = useState([]);
    const RandomNumberGen = () => {
        let num = [...click, {id: click.length, value: Math.random()*10}];
        setClick(num);
    }
    return (
        <div>
            <ul>
                {click.map((e) => {
                    console.log(e);
                    return(
                        <li key={e.id}>{e.id} || {e.value}</li>
                    );
                })}
            </ul>
            <button onClick={RandomNumberGen}>Click to Genrate</button>
        </div>
    )
}

export default Problem2