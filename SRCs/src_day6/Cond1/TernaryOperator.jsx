import React from 'react'

function LoggedIn() {
    return (
        <React.Fragment>
            <h2>Welcome Back!</h2>
            <button type="button">Log Out</button>
        </React.Fragment>
    );
}

function LoggedOut() {
    return (
        <React.Fragment>
            <h2>Sign in! please</h2>
            <button type="button">Log In</button>
        </React.Fragment>
    );
}

function TernaryOperator(props) {

    const isLoggedin = props.isLoggedin;

    return (
        <div>
            {isLoggedin === true ? <LoggedOut /> : <LoggedIn />}
        </div>
    )
}

export default TernaryOperator