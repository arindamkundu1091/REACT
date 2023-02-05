import React from 'react'

class BasicLifeCycleComponent extends React.Component {
    constructor(props) {
        super(props);
        // it is invoked first...
        console.log('Constructor');
    }

    componentDidMount() {
        //it is invoked third...
        console.log('ComponentDidMount');
    }

    render() {
        //It is invoked second...
        console.log('Render');
        return (
            <div>
                <h2>React js Component LifeStyle</h2>
            </div>
        )
    }
}

export default BasicLifeCycleComponent
// {/* It is a old component style and working with OOPs concept and work upto 16.4 version...*/}