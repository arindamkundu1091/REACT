import React from 'react'

function OptionalProps({person = "default person"}) {
    return (
        <div>
            <h1>Helo, {person}</h1>
        </div>
    )
}

export default OptionalProps
