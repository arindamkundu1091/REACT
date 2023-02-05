import React from 'react'

function ValueProps(props) {
    return (
        <div>
            <div>String Literal: <small>{props.stringdata}</small></div>
            <div>String Literal: <small>{props.templatedata}</small></div>
            <div>Number Literal: <small>{props.numberdata}</small></div>
            <div>Boolean Literal: <small>{props.booldata}</small></div>
            <div>Object Literal: <small>{props.objdata.name}</small></div>
            <div>Array Literal: <small>{props.arrdata}</small></div>
            <div>JSX Literal: <small>{props.jsxdata}</small></div>
        </div>
    );
}

export default ValueProps
