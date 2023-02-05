import React from "react";

class AdvanceLifeCycleComponent extends React.Component {
    constructor(props) {
        console.log('Constructor');
        super(props);
        this.state = {
            name: 'ABC'
        }
    }

    render() {
        console.log('Render');
        return (
            <div>
                <h2>React Component LifeCYCLE</h2>
                <h3>Hello {this.state.name}</h3>
                <button onClick={this.changeState}>Click Here</button>
            </div>
        );
    }

    componentWillMount() {
        console.log('componentWillMount');
    }
    componentDidMount() {
        console.log('componentDidMount');
    }
    changeState() {
        // this.setState({name: "newName"});
        console.log('Method Invoked');
    }
    componentWillReceiveProps(newProps) {
        console.log('componentWillRecieveProps');
    }
    shouldComponentUpdate(newProps, newState) {
        return true;
    }
    componentWillUpdate(newProps, newState) {
        console.log('componentWillUpdate');
    }
    componentDidUpdatet() {
        console.log('componentDidUpdate');
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
}


export default AdvanceLifeCycleComponent;

