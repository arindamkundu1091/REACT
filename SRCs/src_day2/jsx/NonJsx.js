import React from "react";

const NonJsx = () => {
    return (
        React.createElement("h1",{className: "heading"}, "This is a Non JSX Element")
    );
}

export default NonJsx;
