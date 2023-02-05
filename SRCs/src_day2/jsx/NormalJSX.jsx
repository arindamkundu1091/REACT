import React from "react";

const JsxComponent = () => {
    const x = 5;
    const name = "Dev";
    const elem = <h2>Hello {name}</h2>
    function formatName(user) {
        return `${user.fname}    ${user.lname}`
    }
    const user = {
        fname: "Dev",
        lname: "Pal"
    };
    const renderElem = (
        <h1>Hello, {formatName(user)}</h1>
    );
    const NestedChild = (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
            </ul>
        </div>
    );
    return (
        <>
            <h1 id="heading">React is {(5+5)*2*5} times Better with JSX</h1>
            <hr />
            <div>
                <a href= {(x) < 10 ? "https://google.com" : "https://bing.com"} >Link</a>
                <hr/>
                {elem};
                <hr />
                {renderElem}
                <hr />
                {NestedChild}
                <hr />
                <div style={{backgroundColor: "lightblue", border: "3px solid red", textAlign: "center"}}>
                    <h2>This is a heading in a div element</h2>
                    <p>This is some text in a div element.</p>
                </div>
            </div>
        </>
    );
}

export default JsxComponent;
