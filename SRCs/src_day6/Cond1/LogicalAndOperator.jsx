import React from 'react'

function LogicalAndOperator(props) {
    const cars = props.car
    return (
        <div>
            <h1>Garage</h1>
            {cars.length>0 && <h2>I have {cars.length} in my Garage</h2>}
        </div>
    )
    }

export default LogicalAndOperator