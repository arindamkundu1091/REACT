import React from 'react'

function SignUp() {
    return <h1>SignUp</h1>
}

function SignIn() {
    return <h1>SignIn</h1>
}

function SignOut() {
    return <h1>SignOut</h1>
}

function CondEnum(props) {
    const states = {
        login: <SignIn />,
        register: <SignUp />,
        logout: <SignOut />
    }
    return (
        <div>
            <h1>Conditional Rendering Enum</h1>
            {states[props.state]}
        </div>
    )
}

export default CondEnum