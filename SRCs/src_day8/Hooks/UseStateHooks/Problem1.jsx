import React, { useState } from 'react'

function Problem1() {

    const [click, setClick] = useState(0);

    return (
        <div>
            <h3>You have Clicked {click} times</h3>
            <p>And th click is <strong>{(click % 2 === 0)?"Even" : "Odd"}</strong> </p>
            <button onClick={() => {setClick(click + 1)}}>Click Me</button>
        </div>
    )
}

export default Problem1