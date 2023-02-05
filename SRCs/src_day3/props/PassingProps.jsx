import React from 'react'

function PassingProps({students}) {
    return (
        <div>
            <ul>
                {
                    students.map((e, i)=> {
                        return <li key={i}>value: {e} || key: {i}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default PassingProps
