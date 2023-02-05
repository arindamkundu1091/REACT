import React from 'react'

function MultipleProps({name, data}) {
    return (
        <div>
            <h1>Hello this {name}, {data}</h1>
        </div>
    );
}

export default MultipleProps
