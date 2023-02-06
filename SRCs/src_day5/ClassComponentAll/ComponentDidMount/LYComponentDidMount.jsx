import React from "react";

class LYComponentDidMount extends React.Component {
    constructor(props) {
        console.log('constructor');
        super(props);
        this.state = {
            color: 'red'
        };
    }
    componentDidMount() {
        console.log('componentDidMount');
        setTimeout(() => {
            this.setState({color: 'yellow'});
        }, 5000);
    }
    render() {
        console.log('render');
        return(
            <h1>Favourite Color is {this.state.color}</h1>
        );
    }
}

export default LYComponentDidMount;