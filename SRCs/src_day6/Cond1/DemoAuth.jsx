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

function DemoAuth(props) {

    const isLoggedin = props.isLoggedin;
    if(isLoggedin) {
        return (
            <LoggedIn />
        );
    } else {
        return (
            <LoggedOut />
        )
    }
}

export default DemoAuth