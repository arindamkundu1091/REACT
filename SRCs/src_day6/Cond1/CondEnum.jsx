import React from 'react'

function SignUp() {
    return (
        <div>
            <form>
                <label htmlFor="username">User Name:</label><br/>
                <input type="text" id="fname" name="username" value="UserName"></input><br/>
                <label htmlFor="password">Password:</label><br/>
                <input type="text" id="lname" name="password" value="password"></input><br/><br/>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    );
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