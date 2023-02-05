import React from "react";

export default function Bottom(props) {
    
    const li = props.list.map((l, i) => {
        return (
            <li><a href={l.href} key={i}>{l.li}</a></li>
        );
    });
    return (
        <>
        <hr />
        <div className="row column">
            <ul className="menu">
                {li}
            </ul>
        </div>
        </>
    );
}
