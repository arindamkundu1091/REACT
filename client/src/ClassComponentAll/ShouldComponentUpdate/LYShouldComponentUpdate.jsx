import React from "react";

class LYShouldComponentUpdate extends React.Component {
    constructor(props) {
        console.log('constructor');
        super(props);
        this.state = {
            color: 'red'
        };
    }
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate');
        return false;
    }
    changeColor() {
        console.log('changeColor');
        this.setState({color: 'yellow'});
    }
    render() {
        console.log('render');
        return(
            <>
                <h1>Favourite Color is {this.state.color}</h1>
                <button type="button" onClick={this.changeColor}>Click Here</button>
            </>
        );
    }
}

export default LYShouldComponentUpdate;