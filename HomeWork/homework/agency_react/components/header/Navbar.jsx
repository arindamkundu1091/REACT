import React from "react";

export default function Navbar(props) {
    const li1 = props.list1.map((l, i) => {
        return (
            <li key={i}><a href={l.href}>{l.li}</a></li>
        );
    });
    const li2 = props.list2.map((l, i) => {
        return (
            <li key={i}><a href={l.href}>{l.li}</a></li>
        );
    });
    return (
        <>
        <div className="top-bar">
            <div className="top-bar-left">
            <ul className="menu">
                <li className="menu-text">Yeti Agency</li>
                {li1}
            </ul>
            </div>
            <div className="top-bar-right">
            <ul className="menu">
                {li2}
            </ul>
            </div>
        </div>
        </>
    );
}
