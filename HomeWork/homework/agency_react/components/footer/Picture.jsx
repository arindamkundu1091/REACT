import React from "react";

export default function Picture(props) {

    const img = props.src.map((s, i) => {
        return (
            <div className="column" key={i}>
            <img className="thumbnail" src={s.src} alt = "/" key={i}/>
            </div>
        );
    });
    return (
        <>
        <hr />

        <div className="row column">
            <h3>Our Recent Work</h3>
        </div>

        <div className="row medium-up-3 large-up-4">
            {img}
        </div>
        </>
    );
}
