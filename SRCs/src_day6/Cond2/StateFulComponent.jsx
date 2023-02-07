import React,{Component} from "react";

function Msg(props) {
    return (props.isLoggedin? <h1>Welcome Back!</h1> : <h1>Login First</h1>);
}

function Login(props) {
    return (<button type="button" onClick={props.onClick}>Login</button>);
}

function Logout(props) { 
    return (<button type="button" onClick={props.onClick}>Logout</button>);
}

class Auth extends Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.state = {isLoggedin: false};
    }
    handleLogin() {
        this.setState({isLoggedin: false});
    }
    handleLogout() {
        this.setState({isLoggedin: true});
    }

    render() {
        return (
            <div>
                <h1>StateFull Component</h1>
                <Msg isLoggedin={this.state.isLoggedin}/>
                {
                    (this.state.isLoggedin)?(<Logout onClick={this.handleLogin}/>):(<Login onClick={this.handleLogout}/>)
                }
            </div>
        );
    }
}

export default Auth;